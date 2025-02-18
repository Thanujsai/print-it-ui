import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const card = location.state?.card; // Retrieve the passed card data

  const navigate = useNavigate();
  if (!card) {
    return <p>No details available.</p>;
  }

  return (
    <div className="details-page min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container bg-white p-12 rounded-lg shadow-lg w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
        <div className="product-detail flex flex-col md:flex-row items-center justify-center">
          <div className="product-image w-full md:w-1/2 mb-8 md:mb-0">
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src={card.image}
              alt={card.title}
            />
          </div>

          <div className="product-info w-full md:w-1/2 px-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 uppercase tracking-wide leading-tight">
              {card.title}
            </h2>
            <p className="text-2xl font-semibold text-red-600 mb-6">{card.price}</p>
            <p className="text-lg text-gray-700 mb-8">{card.info}</p>

            <div className="action-buttons flex items-center justify-center space-x-6">
              <button
                className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow-xl hover:bg-blue-600 transition duration-300"
                onClick={() => alert("Added to cart")}
              >
                Add to Cart
              </button>
              <button
                className="bg-gray-300 text-gray-700 py-3 px-8 rounded-lg shadow-md hover:bg-gray-400 transition duration-300"
                onClick={() => navigate(-1)}
              >
                Back to Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
