from fastapi import FastAPI
from fastapi import UploadFile
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from AI.model.model import load_model, create_data_batches
from AI.model.model import __version__ as model_version

app = FastAPI()

# Load the model
loaded_full_model = load_model('model/mobilnetV2-9000-images.h5')

# Set the image size
IMG_SIZE = 224

# Set the batch size
BATCH_SIZE = 32

class PredictionOut(BaseModel):
    breed: str

@app.get("/")
def home():
    return {"health_check": "OK", "model_version": model_version}

@app.post("/predict", response_model=PredictionOut)
async def predict(file: UploadFile = None):
    if file is None:
        return JSONResponse(content={"error": "No file provided"}, status_code=400)

    # Process the image
    image = create_data_batches([file.file], test_data=True)
    
    # Make predictions
    predictions = loaded_full_model.predict(image)
    
    # Get the predicted label
    breed = get_pred_label(predictions[0])

    return {"breed": breed}
