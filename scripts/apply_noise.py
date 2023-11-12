import numpy as np
import cv2
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

def shot_noise(img, pixel_sensitivity=0.001):
    # shot noise is largely due to quantization of light (photons)
    # pixel sensitivity is combination of quantum efficiency and general, default 0.001 gives low noise
    # sensitivity of the sensor, it is 1/number of photons needed for a signal of 255
    rng = np.random.default_rng()

    img = img.copy()
    img = img / 255  # convert to float
    number_photons = img / pixel_sensitivity

    new_img = rng.poisson(lam=number_photons)  # automatically uses the size of lam
    new_img = new_img * pixel_sensitivity * 255  # convert back to int
    # TODO: Probably need to modify either lam or the
    # output to reflect the true quantization effect, which is much smaller than
    # the values
    return new_img

def gaussian_noise(img, var=[50,50,80]):
    new_img = np.random.normal(img, np.sqrt(var))
    new_img = np.clip(new_img, 0, 255)
    new_img = new_img.astype(np.uint8)
    return new_img

def main():
    path_to_file = './sportshorts.png'
    os.makedirs('results', exist_ok=True)
    image_path = './' + path_to_file
    img = cv2.imread(image_path)
    # img = salt_and_pepper(img, is_subpixel=True)
    # img = shot_noise(img)
    img = gaussian_noise(img)
    cv2.imwrite("./results/test.png", img)

if __name__ == '__main__':
    main()
