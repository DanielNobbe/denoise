import streamlit as st
import imageio.v3 as iio
from PIL import UnidentifiedImageError

def load_model():
    return
    # with open('model.pkl', 'rb') as file:
    #     data = pickle.load(file)
    # return data

def main():
    data = load_model()
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

if __name__ == '__main__':
    main()
