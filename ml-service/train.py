import os
import joblib
import pandas as pd

from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.impute import SimpleImputer
from sklearn.ensemble import RandomForestRegressor

# Load Dataset

df = pd.read_csv("laptop_dataset_final.csv", low_memory=False)

# Keep only required columns
df = df[
    [
        "Brand",
        "Processor",
        "Capacity",
        "SSD Capacity",
        "Graphic Processor",
        "Display Size",
        "Price (Rs)",
    ]
]

# Remove missing target
df = df.dropna(subset=["Price (Rs)"])

# Clean Data

# RAM: "16 GB" -> 16
df["Capacity"] = (
    df["Capacity"]
    .astype(str)
    .str.extract(r"(\d+)")
    .astype(float)
)

# SSD: "512 GB" -> 512
df["SSD Capacity"] = (
    df["SSD Capacity"]
    .astype(str)
    .str.extract(r"(\d+)")
    .astype(float)
)

# Display: "15.6 Inches" -> 15.6
df["Display Size"] = (
    df["Display Size"]
    .astype(str)
    .str.extract(r"(\d+\.?\d*)")
    .astype(float)
)

X = df.drop(columns=["Price (Rs)"])
y = df["Price (Rs)"]

categorical = [
    "Brand",
    "Processor",
    "Graphic Processor",
]

numeric = [
    "Capacity",
    "SSD Capacity",
    "Display Size",
]

preprocessor = ColumnTransformer(
    transformers=[
        (
            "cat",
            Pipeline(
                [
                    ("imputer", SimpleImputer(strategy="most_frequent")),
                    ("encoder", OneHotEncoder(handle_unknown="ignore")),
                ]
            ),
            categorical,
        ),
        (
            "num",
            Pipeline(
                [
                    ("imputer", SimpleImputer(strategy="median")),
                ]
            ),
            numeric,
        ),
    ]
)

X_processed = preprocessor.fit_transform(X)

model = RandomForestRegressor(
    n_estimators=200,
    random_state=42,
)

model.fit(X_processed, y)

os.makedirs("model", exist_ok=True)

joblib.dump(model, "model/model.pkl")
joblib.dump(preprocessor, "model/preprocessor.pkl")

print("✅ Model trained successfully.")
print("✅ model.pkl saved.")
print("✅ preprocessor.pkl saved.")