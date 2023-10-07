import os
from typing import Any
import lightning.pytorch as pl
from lightning.pytorch.utilities.types import OptimizerLRScheduler
from models.unet import UNet
from torch import nn, optim, utils
import torchvision as tv
from PIL import Image

from models.noise import ShotNoise


class ImageDataset(tv.datasets.VisionDataset):
    """Image dataset which refers to a single folder, for a single split.
    
    """
    def __init__(self, root, random_crop=(256,256), transforms=None, input_transforms=None):
        # transforms will be applied to both input and target
        # input_transforms are augmentations
        super().__init__(root, transforms=transforms)
        # get list of files
        self.files = os.listdir(root)
        self.tensor_transform = tv.transforms.ToTensor()
        self.input_transforms = input_transforms
        self.random_crop = random_crop

    def __len__(self):
        return len(self.files)
    
    def __getitem__(self, index: int):
        # Should return transformed version of image and original image as label
        # TODO: Add padding so they're all the same size
        path = os.path.join(self.root, self.files[index])
        image = self.tensor_transform(Image.open(path))

        # apply random cropping
        crop = tv.transforms.RandomCrop.get_params(image, self.random_crop)
        image = tv.transforms.functional.crop(image, *crop)


        if self.transforms is not None:
            # NOTE: Only deterministic transforms
            x = self.transforms(image)
            y = self.transforms(image)
        else:
            x = image
            y = image

        if self.input_transforms:
            x = self.input_transforms(x)
        
        return x, y


class UNetModel(pl.LightningModule):
    def __init__(self, model):
        super().__init__()
        self.model = model
        self.loss_fn = nn.MSELoss()
    
    def training_step(self, batch, batch_idx):
        x, y = batch
        y_hat = self.model(x)
        loss = self.loss_fn(y_hat, y)
        self.log("train_loss", loss)
        return loss
    
    def validation_step(self, batch, batch_idx):
        x, y = batch
        y_hat = self.model(x)
        loss = self.loss_fn(y_hat, y)
        self.log("val_loss", loss)

        if batch_idx == 0:
            sample_inputs = x
            sample_targets = y
            sample_results = y_hat

            in_grid = tv.utils.make_grid(sample_inputs)
            trg_grid = tv.utils.make_grid(sample_targets)
            res_grid = tv.utils.make_grid(sample_results)
            self.logger.experiment.add_image("inputs", in_grid, self.current_epoch)
            self.logger.experiment.add_image("targets", trg_grid, self.current_epoch)
            self.logger.experiment.add_image("results", res_grid, self.current_epoch)
    
    def configure_optimizers(self):
        optimizer = optim.Adam(self.parameters(), lr=1e-3)
        return optimizer

def main():
    logger = pl.loggers.TensorBoardLogger("lightning_logs")

    unet = UNet(out_channels=3)
    model = UNetModel(model=unet)
    # transforms = tv.transforms.Compose(
    #     [
            
    #     ]
    # )
    input_transforms = tv.transforms.Compose(
        [
            ShotNoise(sensitivity=-4.8, sensitivity_sigma=1.2)
        ]
    )

    train_dataset = ImageDataset('./data/div2k/subset/train', input_transforms=input_transforms)
    val_dataset = ImageDataset('./data/div2k/subset/val', input_transforms=input_transforms)

    train_loader = utils.data.DataLoader(train_dataset, batch_size=2)
    val_loader = utils.data.DataLoader(val_dataset, batch_size=2)

    trainer = pl.Trainer(max_epochs=20, log_every_n_steps=20, logger=logger)
    trainer.fit(model, train_loader, val_loader)
    

if __name__ == '__main__':
    main()