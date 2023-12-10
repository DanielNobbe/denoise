import streamlit as st
import imageio.v3 as iio
from PIL import UnidentifiedImageError
from PIL import Image
from scripts.infer import infer
import cv2
from models.unet import UNet, UNetModel
import torch
from scripts.infer import ImageLoader, infer_model

def load_model(checkpoint_path='colab_lightning_logs/version_0/checkpoints/epoch=115-step=1856.ckpt'):
    unet = UNet(out_channels=3)
    model = UNetModel.load_from_checkpoint(
        checkpoint_path,
        model=unet,
        map_location=torch.device('cpu')
    )
    model.eval()
    return model


def main():
    model = load_model()
    crop_size = (256, 256)
    image_loader = ImageLoader()
    
    st.title("De-noise output")
    st.write("""### Upload image to remove noise""") # H3 tag
    uploaded_img = st.file_uploader("Choose image", type=["jpg", "jpeg", "png"])
    if uploaded_img:
        try:
            st.write("Uploaded image:")
            st.image(uploaded_img)
            img = iio.imread(uploaded_img) # image bytes to numpy array
            st.write("TODO: Run the image through a model")
        except UnidentifiedImageError as e:
            st.write("Image in bad format")
            st.write(e)
        img = image_loader.load_from_array(img)
        denoised = infer_model(img, model, crop_size)[0].numpy().transpose((1, 2, 0)) * 255
        image_bytes = cv2.imencode('.jpg', denoised[:,:,::-1])[1].tobytes()  # open CV reads as BGR
        st.image(image_bytes)
        st.write("Download denoised image:")
        st.download_button(label="Download image", data=image_bytes, file_name='denoised.png', mime='image/png')

if __name__ == '__main__':
    main()
