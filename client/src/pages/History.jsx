import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

import Layout from "../components/layout/Layout";
import API from "../services/api";

function History() {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPredictions();
  }, []);

  const fetchPredictions = async () => {
    try {
      const { data } = await API.get("/predictions");

      setPredictions(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this prediction?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/predictions/${id}`);

      setPredictions((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Prediction History
          </h1>

          <p className="mt-2 text-gray-500">
            View and manage all your previous predictions.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

          {loading ? (
            <div className="p-8 text-center">
              Loading...
            </div>
          ) : predictions.length === 0 ? (
            <div className="p-10 text-center">

              <p className="text-lg text-gray-600">
                No predictions found.
              </p>

            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4">
                    Brand
                  </th>
                  <th className="text-left p-4">
                    Processor
                  </th>
                  <th className="text-left p-4">
                    RAM
                  </th>
                  <th className="text-left p-4">
                    SSD
                  </th>
                  <th className="text-left p-4">
                    GPU
                  </th>
                  <th className="text-left p-4">
                    Price
                  </th>
                  <th className="text-center p-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {predictions.map((prediction) => (
                  <tr
                    key={prediction._id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-4">
                      {prediction.brand}
                    </td>
                    <td className="p-4">
                      {prediction.processor}
                    </td>
                    <td className="p-4">
                      {prediction.ram} GB
                    </td>
                    <td className="p-4">
                      {prediction.storage} GB
                    </td>
                    <td className="p-4">
                      {prediction.gpu}
                    </td>
                    <td className="p-4 font-semibold text-blue-600">
                      ₹{Number(prediction.predictedPrice).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                    </td>
                    <td className="text-center p-4">
                      <button
                        onClick={() =>
                          handleDelete(prediction._id)
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default History;