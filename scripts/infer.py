import torch
from models.unet import UNet, UNetModel
import torchvision as tv
from models.noise import ShotNoise
from PIL import Image
from kornia.contrib import extract_tensor_patches, combine_tensor_patches
import os

def main():
    apply_noise = True
    crop_size = (256, 256)
    image_size = (1200, 2040)
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
    # if the window size/stride does not fit into the image, 
    # this function just strips off the last bit of the image..
    # would be better if it pads it.
    print(f"Patches shape: {patches.shape}")
    print(f"Image shape {image.shape[2:]}")

    original_size = img.size[::-1]  # this is with padding
    # reassemble = combine_tensor_patches(patches, original_size=image_size, window_size=crop_size, stride=256, allow_auto_unpadding=True)
    # return
    patches = patches.squeeze(0)
    # NOTE: Only compatible with a single image for now
    results = []
    for patch in patches:
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