import streamlit as st
import imageio.v3 as iio

st.title("De-noise output")
st.write("""### Upload image to remove noise""") # H3 tag
uploaded_img = st.file_uploader("Choose image", type=["jpg", "jpeg", "png"])
if uploaded_img:
    try:
        st.write("Uploaded image:")
        st.image(uploaded_img)
        img = iio.imread(uploaded_img) # image bytes to numpy array
        st.write("TODO: Run the image through a model")
    except:
        st.write("Image in bad format")