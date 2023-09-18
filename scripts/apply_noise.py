import numpy as np
import cv2
import pdb
import os

def salt_and_pepper_pixel(img, prob_black, prob_white):
    noise_black = np.random.choice([True, False], size=img.shape[:2], p=[prob_black, 1 - prob_black])
    noise_white = np.random.choice([True, False], size=img.shape[:2], p=[prob_white, 1 - prob_white])
    return noise_black, noise_white

def salt_and_pepper_subpixel(img, prob_black, prob_white):
    noise_black = np.random.choice([True, False], size=img.shape, p=[prob_black, 1 - prob_black])
    noise_white = np.random.choice([True, False], size=img.shape, p=[prob_white, 1 - prob_white])
    return noise_black, noise_white

def salt_and_pepper(img, is_subpixel):
    prob_black = 0.005
    prob_white = 0.005
    if is_subpixel:
        noise_black, noise_white = salt_and_pepper_subpixel(img, prob_black, prob_white)
    else:
        noise_black, noise_white = salt_and_pepper_pixel(img, prob_black, prob_white)
    img[noise_black] = 0.0
    img[noise_white] = 255.0
    return img


def shot_noise(img):
    # shot noise is largely due to quantization of light (photons)
    # we sample a new version of the image where each pixel has
    # expected value of the original pixel value
    rng = np.random.default_rng()

    new_img = rng.poisson(lam=img)  # automatically uses the size of lam
    # TODO: Probably need to modify either lam or the 
    # output to reflect the true quantization effect, which is much smaller than
    # the values
    return new_img


def main():
    os.makedirs('results', exist_ok=True)
    image_path = './data/div2k/original/val/0801.png'
    img = cv2.imread(image_path)
    # img = salt_and_pepper(img, is_subpixel=True)
    img = shot_noise(img)
    cv2.imwrite("./results/test.png", img)

if __name__ == '__main__':
    main()
