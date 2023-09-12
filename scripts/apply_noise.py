import numpy as np
import cv2
import pdb

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

def main():
    image_path = './data/bambusliv_logo.png'
    img = cv2.imread(image_path)
    img = salt_and_pepper(img, is_subpixel=True)
    cv2.imwrite("./results/test.png", img)

if __name__ == '__main__':
    main()
