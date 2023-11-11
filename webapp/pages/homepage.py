import streamlit as st

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
