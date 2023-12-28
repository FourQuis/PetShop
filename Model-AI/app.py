from flask import Flask, request, render_template, jsonify
import numpy as np
import tensorflow as tf
import tensorflow_hub as hub
from io import BytesIO
from PIL import Image 
import os
import pickle
import numpy as np
import pandas as pd
from keras.preprocessing import image
from flask_cors import CORS
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
app.config['UPLOAD_FOLDER'] = 'uploads'

model = tf.keras.models.load_model(
    'model.h5',
    custom_objects={'KerasLayer': hub.KerasLayer}
)
IMG_SIZE = 224
def process_image(file):
    img = Image.open(file.stream)
    img = img.resize((IMG_SIZE, IMG_SIZE))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0
    return img_array
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/api/upload', methods=['POST','GET'])
def upload_image():
    print(request.files)
    if 'image' not in request.files:
        return jsonify({"error": "No file part"})
    file = request.files['image']
    if file.filename == '':
        return jsonify({"error": "No selected file"})
    img_array = process_image(file)
    test_predictions = model.predict(img_array, verbose=1)
    with open("test_predictions.pkl", 'wb') as f:
        pickle.dump(test_predictions, f)
    labels_csv = pd.read_csv('labels.csv')
    string_labels = np.array(labels_csv.breed)
    unique_labels = np.unique(string_labels)
    get_pred_label = unique_labels[np.argmax(test_predictions)]
    get_pred_label = get_pred_label.capitalize()
    return jsonify({
        "predicted_class": get_pred_label
    })
if __name__ == '__main__':
    app.run(debug=True,port=5001)
