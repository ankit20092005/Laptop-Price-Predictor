import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto py-24">
        <h1 className="text-5xl font-bold">
          Laptop Price Predictor
        </h1>
        <p className="mt-4 text-gray-600">
          Predict laptop prices using Machine Learning.
        </p>
        <Link
          to="/login"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-md"
        >
          Get Started
        </Link>
      </div>
    </>
  );
}

export default Home;