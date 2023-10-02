## Some augmentation to add noise to the image

import torch
import torchvision as tv
from PIL import Image
import os


class ShotNoise:
    def __init__(self, pixel_sensitivity=0.1):
        self.pixel_sensitivity = pixel_sensitivity
        self.rng = torch.Generator()

    def __call__(self, img: torch.Tensor):
        # input image should be tensor, so values in range [0,1]
        number_photons = img / self.pixel_sensitivity
        # fictional number scaling with the number of photons
        # it defines how many photons are necessary to reach a value of 1
        # NOTE: This will be different between images, not just between data sources

        output = torch.poisson(input=number_photons, generator=self.rng)
        output = output * self.pixel_sensitivity
        return output
    
