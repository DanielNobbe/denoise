import torch

class TorchScriptModel(torch.nn.Module):
    def __init__(self, model_path):
        super().__init__()
        self.net = torch.jit.load(model_path)

    def forward(self, x):
        return self.net(x)