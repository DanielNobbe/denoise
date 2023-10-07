import numpy as np
import cv2
import pdb
import os
from PIL import Image

from models.noise import ShotNoise
import torchvision as tv

tensor_transform = tv.transforms.ToTensor()
pil_transform = tv.transforms.ToPILImage()

shot_noise = ShotNoise(sensitivity=-4.8, sensitivity_sigma=1.2)
# shot_noise = ShotNoise(sensitivity=0.001)

def main():
    os.makedirs('results', exist_ok=True)
    image_path = './data/div2k/original/val/0801.png'
    img = tensor_transform(Image.open(image_path))
    new_img = shot_noise(img)
    # new_img = shot_noise(img)

    sv_img = pil_transform(new_img)
    sv_img.save("./results/test.png")

if __name__ == '__main__':
    main()
