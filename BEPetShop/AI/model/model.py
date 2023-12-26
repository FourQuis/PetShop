import pickle
import re
from pathlib import Path
__version__ = "1.0.2"
import tensorflow as tf
import tensorflow_hub as hub
import os
import numpy as np
import pandas as pd
from IPython.display import display, Image

# Function to load the pre-trained model
def load_model(model_path):
    print(f"Loading saved model from: {model_path}")
    model = tf.keras.models.load_model(model_path, custom_objects={"KerasLayer": hub.KerasLayer})
    return model

# Function to process an image
def process_image(image_path):
    image = tf.io.read_file(image_path)
    image = tf.image.decode_jpeg(image, channels=3)
    image = tf.image.convert_image_dtype(image, tf.float32)
    image = tf.image.resize(image, size=[IMG_SIZE, IMG_SIZE])
    return image

# Function to create data batches
def create_data_batches(x, y=None, batch_size=BATCH_SIZE, valid_data=False, test_data=False):
    if test_data:
        data = tf.data.Dataset.from_tensor_slices((tf.constant(x)))
        data = data.map(process_image)
        data_batch = data.batch(BATCH_SIZE)
        return data_batch
    elif valid_data:
        data = tf.data.Dataset.from_tensor_slices((tf.constant(x), tf.constant(y)))
        data = data.map(get_image_label)
        data_batch = data.batch(BATCH_SIZE)
        return data_batch
    else:
        data = tf.data.Dataset.from_tensor_slices((tf.constant(x), tf.constant(y)))
        data = data.shuffle(buffer_size=len(x))
        data = data.map(get_image_label)
        data_batch = data.batch(BATCH_SIZE)
        return data_batch

# Function to run the image prediction pipeline
def run_image_pipeline(model_path, test_path, output_path):
    loaded_full_model = load_model(model_path)

    test_filenames = [test_path + fname for fname in os.listdir(test_path)]
    test_data = create_data_batches(test_filenames, test_data=True)

    test_predictions = loaded_full_model.predict(test_data)

    with open(output_path, 'wb') as f:
        pickle.dump(test_predictions, f)

# Load the model
loaded_full_model = load_model('model/mobilnetV2-9000-images.h5')

# Set the image size
IMG_SIZE = 224

# Set the batch size
BATCH_SIZE = 32

# Run the image prediction pipeline
run_image_pipeline('model/mobilnetV2-9000-images.h5', 'data/testset/', 'test_result/test_predictions.pkl')
