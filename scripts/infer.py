import torch
from models.unet import UNet, UNetModel
import torchvision as tv
from models.noise import ShotNoise
from PIL import Image
from kornia.contrib import extract_tensor_patches, combine_tensor_patches
import os

class ImageLoader:
    def __init__(self):
        self.tensor_transform = tv.transforms.ToTensor()

    def load_from_PIL(self, image):
        image = self.tensor_transform(image)
        return image.unsqueeze(0)

    def load_from_path(self, image_path):
        img = Image.open(image_path)
        return self.load_from_PIL(img)

    def load_from_array(self, image_array):
        image = torch.from_numpy(image_array).permute((2,0,1))
        image = image.float() / 255
        return image.unsqueeze(0)


@torch.no_grad()
def infer_model(img, model, crop_size):
    image = img
    patches = extract_tensor_patches(image, crop_size, stride=256, allow_auto_padding=True)

    original_size = img.shape[2:]  # this is with padding
    patches = patches.squeeze(0)
    # NOTE: Only compatible with a single image for now
    results = []
    for patch in patches:  # use batches?
        result = model.model(patch.unsqueeze(0))
        results.append(
            result
        )
    results = torch.stack(results, dim=1)
    result = combine_tensor_patches(results, original_size=original_size, window_size=crop_size, stride=crop_size[0], allow_auto_unpadding=True)

    return result


@torch.no_grad()
def infer(img):
    crop_size = (256, 256)

    unet = UNet(out_channels=3)
    model = UNetModel.load_from_checkpoint(
        'colab_lightning_logs/version_0/checkpoints/epoch=115-step=1856.ckpt',
        model=unet,
        map_location=torch.device('cpu')
    )

    model.eval()
    tensor_transform = tv.transforms.ToTensor()

    image = tensor_transform(img)

    image = image.unsqueeze(0)
    patches = extract_tensor_patches(image, crop_size, stride=256, allow_auto_padding=True)

    original_size = img.size[::-1]  # this is with padding

    patches = patches.squeeze(0)
    # NOTE: Only compatible with a single image for now
    results = []
    for patch in patches:  # use batches?
        results.append(
            model.model(patch.unsqueeze(0))
            # TODO: Disable batchnorm (needs 4D input)
        )
    results = torch.stack(results, dim=1)
    result = combine_tensor_patches(results, original_size=original_size, window_size=crop_size, stride=crop_size[0], allow_auto_unpadding=True)

    return result.numpy()

def main():
    apply_noise = True
    crop_size = (256, 256)
    output_dir = 'infer-results'
    os.makedirs(output_dir, exist_ok=True)
    unet = UNet(out_channels=3)
    model = UNetModel.load_from_checkpoint(
        'colab_lightning_logs/version_0/checkpoints/epoch=115-step=1856.ckpt',
        model=unet,
        map_location=torch.device('cpu')
    )

    model.eval()

    test_image_path = 'data/div2k/subset/val/0804.png'

    tensor_transform = tv.transforms.ToTensor()
    noise_transform = ShotNoise(sensitivity=-4.8, sensitivity_sigma=1.2)

    img = Image.open(test_image_path)
    image = tensor_transform(img)
    if apply_noise:
        image = noise_transform(image)
        tv.utils.save_image(image, os.path.join(output_dir, 'noisy.png'))
    
    image = image.unsqueeze(0)
    patches = extract_tensor_patches(image, crop_size, stride=256, allow_auto_padding=True)

    original_size = img.size[::-1]  # this is with padding
    patches = patches.squeeze(0)
    # NOTE: Only compatible with a single image for now
    results = []
    for patch in patches:  # use batches?
        results.append(
            model.model(patch.unsqueeze(0))
            # TODO: Disable batchnorm (needs 4D input)
        )
    results = torch.stack(results, dim=1)
    print(f"Results shape: {results.shape}")
    result = combine_tensor_patches(results, original_size=original_size, window_size=crop_size, stride=crop_size[0], allow_auto_unpadding=True)

    print(result.shape)

    tv.utils.save_image(result, os.path.join(output_dir, 'result.png'))


if __name__ == "__main__":
    main()