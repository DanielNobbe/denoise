import streamlit as st
import imageio.v3 as iio
import cv2
from scripts.apply_noise import shot_noise, salt_and_pepper

def add_noise(img):
    st.write("""### Add noise""") # H3 tag
    noise_choise = st.selectbox("Choose noise type", options=["Gaussian noise", "Shot noise", "Salt & pepper noise"])
    if noise_choise == "Gaussian noise":
        return
    elif noise_choise == "Shot noise":
        st.write("Image with shot noise applied:")
        return shot_noise(img)
    elif noise_choise == "Salt & pepper noise":
        st.write("Image with salt & pepper noise applied:")
        return salt_and_pepper(img, True)

def main():
    st.title("De-noise image manipulator")
    st.write("""### Upload image to manipulate it with noise""") # H3 tag
    uploaded_img = st.file_uploader("Choose image", type=["jpg", "jpeg", "png"])
    if uploaded_img:
        try:
            st.write("Uploaded image:")
            st.image(uploaded_img)
            img = iio.imread(uploaded_img)
            img_with_noise = add_noise(img)
            if img_with_noise is not None:
                image_bytes = cv2.imencode('.jpg', img_with_noise[:,:,::-1])[1].tobytes()  # open CV reads as BGR
                st.image(image_bytes)
                st.write("Download image with noise:")
                st.download_button(label="Download image", data=image_bytes, file_name='img_with_noise.png', mime='image/png')
        except Exception as e:
            print(e)
            st.write(e)

if __name__ == '__main__':
    main()