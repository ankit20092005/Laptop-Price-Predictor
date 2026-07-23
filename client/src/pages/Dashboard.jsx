import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  IndianRupee,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import Layout from "../components/layout/Layout";
import StatCard from "../components/common/StatCard";
import { useAuth } from "../context/AuthContext";
import API from "../services/api";

function Dashboard() {
  const { user } = useAuth();

  const [stats, setStats] = useState({
    total: 0,
    average: 0,
    highest: 0,
    lowest: 0,
  });

  const [recentPredictions, setRecentPredictions] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const { data } = await API.get("/predictions");
      const predictions = data.data || [];
      setRecentPredictions(predictions.slice(0, 5));
      if (predictions.length === 0) {
        return;
      }

      const prices = predictions.map((item) => item.predictedPrice);
      const total = predictions.length;
      const average = Math.round(
        prices.reduce((sum, price) => sum + price, 0) / total
      );

      const highest = Math.max(...prices);
      const lowest = Math.min(...prices);

      setStats({
        total,
        average,
        highest,
        lowest,
      });
    } catch (error) {
      console.error("Failed to load dashboard:", error);
    }
  };

  return (
    <Layout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Welcome back, {user?.name} 👋
        </h1>

        <p className="mt-3 text-gray-500">
          Manage your laptop price predictions from one place.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Total Predictions"
          value={stats.total}
          icon={BarChart3}
        />

        <StatCard
          title="Average Price"
          value={`₹${stats.average.toFixed(2)}`}
          icon={IndianRupee}
        />

        <StatCard
          title="Highest Price"
          value={`₹${stats.highest.toFixed(2)}`}
          icon={TrendingUp}
        />

        <StatCard
          title="Lowest Price"
          value={`₹${stats.lowest.toFixed(2)}`}
          icon={TrendingDown}
        />
      </div>

      {/* Recent Predictions */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-semibold">
            Recent Predictions
          </h2>

          <Link
            to="/history"
            className="text-blue-600 hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          {recentPredictions.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-lg font-medium text-gray-700">
                No predictions yet
              </p>

              <p className="text-gray-500 mt-2 mb-6">
                Predict your first laptop to see results here.
              </p>

              <Link
                to="/predict"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition"
              >
                Predict Now
              </Link>
            </div>
          ) : (
            <div className="divide-y">
              {recentPredictions.map((prediction) => (
                <div
                  key={prediction._id}
                  className="flex justify-between items-center p-5 hover:bg-gray-50 transition"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {prediction.brand}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {prediction.processor}
                    </p>
                  </div>
                  <p className="text-lg font-semibold text-blue-600">
                    ₹
                    {Number(prediction.predictedPrice).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;