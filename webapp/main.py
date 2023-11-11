import numpy as np
import pickle
import streamlit as st
from pages.homepage import homepage

def load_model():
    return
    # with open('model.pkl', 'rb') as file:
    #     data = pickle.load(file)
    # return data
data = load_model()

if __name__ == '__main__':
    homepage()