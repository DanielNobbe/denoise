import os
from typing import Any
import lightning.pytorch as pl
from lightning.pytorch.utilities.types import OptimizerLRScheduler
from models.unet import UNet
from torch import nn, optim, utils
import torchvision as tv
from PIL import Image


class ImageDataset(tv.datasets.VisionDataset):
    """Image dataset which refers to a single folder, for a single split.
    
    """
    def __init__(self, root, transforms=None, input_transforms=None):
        # transforms will be applied to both input and target
        # input_transforms are augmentations
        super().__init__(root, transforms=transforms)
        # get list of files
        self.files = os.listdir(root)
        self.tensor_transform = tv.transforms.ToTensor()
        self.input_transforms = input_transforms

    def __len__(self):
        return len(self.files)
    
    def __getitem__(self, index: int):
        # Should return transformed version of image and original image as label
        # TODO: Add padding so they're all the same size
        path = os.path.join(self.root, self.files[index])
        image = self.tensor_transform(Image.open(path))
        if self.transforms is not None:  # should only allow with transforms
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
    
    def configure_optimizers(self):
        optimizer = optim.Adam(self.parameters(), lr=1e-3)
        return optimizer

def main():
    unet = UNet(out_channels=3)
    model = UNetModel(model=unet)
    transforms = tv.transforms.Compose(
        [
            tv.transforms.RandomCrop((256, 256))
        ]
    )

    train_dataset = ImageDataset('./data/div2k/subset/train', transforms=transforms)
    val_dataset = ImageDataset('./data/div2k/subset/val', transforms=transforms)

    train_loader = utils.data.DataLoader(train_dataset)
    val_loader = utils.data.DataLoader(val_dataset)

    trainer = pl.Trainer(max_epochs=20, log_every_n_steps=20)
    trainer.fit(model, train_loader, val_loader)
    

if __name__ == '__main__':
    main()