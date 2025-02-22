import { useCart } from "../CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart
    .reduce((acc, item) => acc + parseFloat(item.price.replace("$", "")), 0)
    .toFixed(2);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center border-b py-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeFromCart(item.id)}
              >
                <FaTrashAlt size={20} />
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="flex justify-between items-center mt-6">
            <h3 className="text-xl font-bold">Total: ${totalPrice}</h3>
            <button
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primaryDark transition"
              onClick={() => alert("Proceed to checkout (Not implemented)")}
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/explore")}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
