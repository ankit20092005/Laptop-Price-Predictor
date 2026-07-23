from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib

app = FastAPI()

model = joblib.load("model/model.pkl")
preprocessor = joblib.load("model/preprocessor.pkl")


class Laptop(BaseModel):
    Brand: str
    Processor: str
    Capacity: int
    SSD_Capacity: int
    Graphic_Processor: str
    Display_Size: float


@app.post("/predict")
def predict(data: Laptop):
    df = pd.DataFrame([{
        "Brand": data.Brand,
        "Processor": data.Processor,
        "Capacity": data.Capacity,
        "SSD Capacity": data.SSD_Capacity,
        "Graphic Processor": data.Graphic_Processor,
        "Display Size": data.Display_Size,
    }])

    X = preprocessor.transform(df)
    prediction = model.predict(X)

    return {
        "price": float(prediction[0])
    }