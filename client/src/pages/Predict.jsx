import { useState } from "react";
import Layout from "../components/layout/Layout";
import Input from "../components/common/Input";
import Select from "../components/common/Select";
import Button from "../components/common/Button";
import API from "../services/api";

const brands = [
  "Dell",
  "HP",
  "Lenovo",
  "ASUS",
  "Acer",
  "MSI",
  "Apple",
];

const processors = [
  "Intel Core i3",
  "Intel Core i5",
  "Intel Core i7",
  "Intel Core i9",
  "AMD Ryzen 3",
  "AMD Ryzen 5",
  "AMD Ryzen 7",
  "AMD Ryzen 9",
  "Apple M1",
  "Apple M2",
  "Apple M3",
  "Apple M4",
  "Apple M5",
];

const gpus = [
  "Integrated",
  "Intel Iris Xe",
  "AMD Radeon",
  "NVIDIA GTX 1650",
  "NVIDIA RTX 2050",
  "NVIDIA RTX 3050",
  "NVIDIA RTX 4050",
  "NVIDIA RTX 4060",
];

function Predict() {
  const [form, setForm] = useState({
    brand: "",
    processor: "",
    ram: "",
    storage: "",
    gpu: "",
    displaySize: "",
  });

  const [price, setPrice] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/predictions", form);
      setPrice(data.data.predictedPrice);
    } 
    catch (error) {
      console.error(error);
      alert("Prediction failed.");
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Predict Laptop Price
          </h1>

          <p className="mt-2 text-gray-500">
            Enter your laptop specifications to estimate its market price.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">

          <form onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <Select
                label="Brand"
                name="brand"
                value={form.brand}
                onChange={handleChange}
                options={brands}
              />

              <Select
                label="Processor"
                name="processor"
                value={form.processor}
                onChange={handleChange}
                options={processors}
              />

              <Input
                label="RAM (GB)"
                name="ram"
                type="number"
                value={form.ram}
                onChange={handleChange}
                placeholder="16"
              />

              <Input
                label="SSD Storage (GB)"
                name="storage"
                type="number"
                value={form.storage}
                onChange={handleChange}
                placeholder="512"
              />

              <Select
                label="GPU"
                name="gpu"
                value={form.gpu}
                onChange={handleChange}
                options={gpus}
              />

              <Input
                label="Display Size (inches)"
                name="displaySize"
                type="number"
                step="0.1"
                value={form.displaySize}
                onChange={handleChange}
                placeholder="15.6"
              />

            </div>

            <div className="mt-8">
              <Button type="submit">
                Predict Price
              </Button>
            </div>
            
          </form>
        </div>

        {price && (
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-8">

            <p className="text-gray-600 text-lg">
              Estimated Price
            </p>

            <h2 className="text-5xl font-bold text-blue-600 mt-3">
              ₹{Number(price).toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h2>

          </div>
        )}

        <div className="mt-6 text-sm text-gray-500">

          <p className="font-medium mb-2">
            Example Values
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>RAM: 8, 16, 32</li>
            <li>SSD: 256, 512, 1024</li>
            <li>Display Size: 14, 15.6, 16</li>
          </ul>

        </div>

      </div>
    </Layout>
  );
}

export default Predict;