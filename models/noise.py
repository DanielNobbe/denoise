## Some augmentation to add noise to the image

import torch
import torchvision as tv
from PIL import Image
import os


class ShotNoise:
    def __init__(self, sensitivity=0.1, sensitivity_sigma=None, max_sens=0.1, min_sens=0.0):
        # if sensitivity_sigma is defined, will sample the 
        # sensitivity from a lognormal at every image 
        self.pixel_sensitivity = sensitivity
        self.rng = torch.Generator()

        if sensitivity_sigma is not None:
            self.distr = torch.distributions.LogNormal(sensitivity, sensitivity_sigma)
            self.max_sens = max_sens
            self.min_sens = min_sens
        else:
            self.distr = None
        

    def __call__(self, img: torch.Tensor):
        # input image should be tensor, so values in range [0,1]
        # fictional number scaling with the number of photons
        # it defines how many photons are necessary to reach a value of 1
        # NOTE: This will be different between images, not just between data sources
        if self.distr is not None:
            # sample sensitivity from self.distr
            sensitivity = self.distr.sample()
            # apply max/min
            sensitivity = torch.clamp(sensitivity, self.min_sens, self.max_sens)
        else:
            sensitivity = self.pixel_sensitivity
        
        print(f"Sensitivity: {sensitivity}")
        number_photons = img / sensitivity
        output = torch.poisson(input=number_photons, generator=self.rng)
        output = torch.clamp(output * sensitivity, 0.0, 1.0)
        return output
    
