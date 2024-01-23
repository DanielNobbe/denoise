import torch

class TorchScriptModel(torch.nn.Module):
    def __init__(self, model_path):
        super().__init__()
        self.net = torch.jit.load(model_path)

    @classmethod
    def load(cls, model_path):
        model = cls(model_path)
        model.eval()
        return model

    def forward(self, x):
        return self.net(x)