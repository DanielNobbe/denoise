from torchscript import TorchScriptModel
from unet import UNet, UNetModel

def get_model(model_name):
    if model_name == 'unet':
        return UNet
    elif model_name == 'torchscript':
        return TorchScriptModel
    else:
        raise NotImplementedError