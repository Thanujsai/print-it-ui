import { useCart } from "../CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart
    .reduce((acc, item) => acc + parseFloat(item.price.replace("$", "")), 0)
    .toFixed(2);//whenever cart array is updated, this field is re-calculated

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <motion.h2
        initial={{opacity:0, y:-100 }}
        animate={{opacity:1, y: 0}}
        transition={{
          type:"spring",
          stiffness:100,
          damping:10,
          delay:0.2
        }}
      className="text-3xl font-bold text-center mb-6">Your Cart</motion.h2>

      {cart.length === 0 ? (
        <motion.p 
          initial={{opacity:0, y:-100 }}
          animate={{opacity:1, y: 0}}
          transition={{
            type:"spring",
            stiffness:100,
            damping:10,
            delay:0.2
          }}
          className="text-center text-gray-500">Your cart is empty.</motion.p>
      ) : (
        <motion.div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {cart.map((item, index) => (
            <motion.div 
              initial={{opacity:0, x:-100 }}
              animate={{opacity:1, x: 0}}
              transition={{
                type:"spring",
                stiffness:100,
                damping:10,
                delay:0.4 + index * 0.1
              }}
              key={index} className="flex items-center border-b py-4">
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
                onClick={() => {
                  Swal.fire({
                    title: "Remove Item?",
                    text: "Are you sure you want to remove this item from your cart?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonColor: "#3085d6",
                    confirmButtonText: "Yes, remove it!",
                    cancelButtonText: "Cancel",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      removeFromCart(item.id);
                      Swal.fire("Removed!", "The item has been removed from your cart.", "success");
                    }
                  });
                }}
              >
                <FaTrashAlt size={20} />
              </button>
            </motion.div>
          ))}

          {/* Total Price */}
          <motion.div
            initial={{opacity:0, x:-100 }}
            animate={{opacity:1, x: 0}}
            transition={{
              type:"spring",
              stiffness:100,
              damping:10,
              delay:0.6 + cart.length * 0.1
            }}
          className="flex justify-between items-center mt-6">
            <h3 className="text-xl font-bold">Total: ${totalPrice}</h3>
            <button
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primaryDark transition"
              onClick={() => alert("Proceed to checkout (Not implemented)")}
            >
              Checkout
            </button>
          </motion.div>
        </motion.div>
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
