import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "antd";

const Details = () => {
  const location = useLocation();
  const card = location.state?.card; // Retrieve the passed card data

  const navigate = useNavigate();
  if (!card) {
    return <p>No details available.</p>;
  }

  {/* Card Section */}
  return (
    <div>
      <h1 className="text-3xl flex justify-center">Details</h1>
    <div
          // initial={{opacity:0, scale:0 }}
          // animate={{opacity:1, scale:1}}
          // transition={{
          //     type:"spring",
          //     stiffness:100,
          //     damping:10,
          //     delay:0.4
          // }}
          className='grid grid-cols-1 md:grid-cols-2 p-40 lg:grid-cols-3 gap-6 place-items-center'
        >
            <motion.div
              initial={{opacity:0, scale:0 }}
              animate={{opacity:1, scale:1}}
              transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:0.4
              }}
              className='p-4 border rounded shadow-sm space-y-2 cursor-pointer'
            >
              <img src={card.image} alt={card.title} className='h-[240px] w-full object-cover hover:scale-125 duration-300' />
            </motion.div>
            <motion.div
              initial={{opacity:0, scale:0 }}
              animate={{opacity:1, scale:1}}
              transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:0.6
              }}
            className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold text-primary">{card.title}</h2>
          <p className="text-lg text-black">{card.info}</p>
          <p className="text-lg text-black">{card.price}</p>
        </motion.div>
        </div>
        <div className="flex justify-center">
          <Button onClick={() => navigate("/explore")} className="hover:scale-110">Back</Button>
        </div>
    </div>
  );
};

export default Details;
