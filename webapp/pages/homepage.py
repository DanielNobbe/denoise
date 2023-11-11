import streamlit as st
import numpy as np
import os
from PIL import Image

def file_selector(folder_path='.'):
    filenames = os.listdir(folder_path)
    selected_filename = st.selectbox('Select a file', filenames)
    return os.path.join(folder_path, selected_filename)

def load_image(img):
    img = img.resize((224, 224))
    im_array = np.array(img) / 255 # a normalised 2D array
    im_array = im_array.reshape(-1, 224, 224, 3)   # to shape as (1, 224, 224, 3)
    return im_array

def homepage():
    st.title("De-noise output")
    st.write("""### Upload image to remove noise""") # H3 tag
    uploaded_img = st.file_uploader("Choose image", type=["jpg", "jpeg", "png"])
    if uploaded_img:
        try:
            st.write("Uploaded image:")
            st.image(uploaded_img)
        except:
            st.write("Image in bad format")


