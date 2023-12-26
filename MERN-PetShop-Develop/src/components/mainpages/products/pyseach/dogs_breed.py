import tensorflow as tf
import tensorflow_hub as hub
import os
import pickle
import datetime
import itertools
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from IPython.display import display, Image  
print("TF version is : ", tf.__version__)
print("TF Hub version is : ", hub.__version__)

# Make sur we're using a GPU
if tf.config.list_physical_devices("GPU"):
  print('GPU Used')