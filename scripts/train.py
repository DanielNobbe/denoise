import os
from typing import Any
import lightning.pytorch as pl
from lightning.pytorch.utilities.types import OptimizerLRScheduler
from models.unet import UNet, UNetModel
from torch import utils
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


def main():
    logger = pl.loggers.TensorBoardLogger("lightning_logs")

    unet = UNet(out_channels=3)
    model = UNetModel(model=unet)

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