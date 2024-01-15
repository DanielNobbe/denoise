import numpy as np
import cv2
import pdb
import os
from PIL import Image

from models.noise import ShotNoise, GaussianNoise, SaltAndPepperNoise
import torchvision as tv

tensor_transform = tv.transforms.ToTensor()
pil_transform = tv.transforms.ToPILImage()

shot_noise = ShotNoise(sensitivity=-10, sensitivity_sigma=0.001)  # negative mu to sample from lognormal
gaussian_noise = GaussianNoise(rgb_variance=(0.01,0.005,0.005))
salt_and_pepper_noise = SaltAndPepperNoise(prob_black=0.00005, prob_white=0.00005, subpixel=True)

def main():
    os.makedirs('results', exist_ok=True)
    image_path = './data/div2k/original/val/0801.png'
    img = tensor_transform(Image.open(image_path))
    new_img = img
    new_img = shot_noise(new_img)
    new_img = gaussian_noise(new_img)
    # new_img = salt_and_pepper_noise(new_img)

    sv_img = pil_transform(new_img)
    sv_img.save("./results/test.png")

if __name__ == '__main__':
    main()
