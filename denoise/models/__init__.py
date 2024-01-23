from .torchscript import TorchScriptModel
from .unet import UNet, UNetModel

def get_model(model_name):
    if model_name == 'unet':
        return UNetModel
    elif model_name == 'torchscript':
        return TorchScriptModel
    else:
        raise NotImplementedError
    

# TODO: Add a model that first does colour based classical denoising
# and then does neural denoising (now only intensity based, not colour based)
    # could even be applied in greyscale