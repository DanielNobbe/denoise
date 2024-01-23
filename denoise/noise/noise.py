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
        
        number_photons = img / sensitivity
        output = torch.poisson(input=number_photons, generator=self.rng)
        output = torch.clamp(output * sensitivity, 0.0, 1.0)
        return output
    

class GaussianNoise:
    def __init__(self, rgb_variance=(0.20,0.20,0.25)):
        self.rgb_variance = torch.tensor(rgb_variance).unsqueeze(-1).unsqueeze(-1)
        self.rng = torch.Generator()
        # TODO: Allow single integer variance
        # TODO: Should this always be integers?

    def __call__(self, img: torch.Tensor):
        # input image should be tensor, so values in range [0,1]
        # fictional number scaling with the number of photons
        # it defines how many photons are necessary to reach a value of 1
        # NOTE: This will be different between images, not just between data sources
        output = torch.normal(mean=img, std=torch.sqrt(self.rgb_variance), generator=self.rng)
        output = torch.clamp(output, 0.0, 1.0)
        return output

class SaltAndPepperNoise:
    def __init__(self, prob_black=0.005, prob_white=0.005, subpixel=False):
        self.prob_black = prob_black
        self.prob_white = prob_white
        self.rng = torch.Generator()
        self.subpixel = subpixel

    def __call__(self, img: torch.Tensor):
        # input image should be tensor, so values in range [0,1]
        # fictional number scaling with the number of photons
        # it defines how many photons are necessary to reach a value of 1
        # NOTE: This will be different between images, not just between data sources
        output = img.clone()
        if self.subpixel:
            noise_black = torch.rand(img.shape, generator=self.rng) < self.prob_black
            noise_white = torch.rand(img.shape, generator=self.rng) < self.prob_white
        else:
            noise_black = torch.rand(img.shape[1:], generator=self.rng) < self.prob_black
            noise_white = torch.rand(img.shape[1:], generator=self.rng) < self.prob_white

            # indexing doesn't do broadcasting so need it here
            noise_black = torch.broadcast_to(noise_black, output.shape)
            noise_white = torch.broadcast_to(noise_white, output.shape)
        
        output[noise_black] = 0.0
        output[noise_white] = 1.0

        return output

