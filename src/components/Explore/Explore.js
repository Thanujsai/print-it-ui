import React, {useState, useEffect} from 'react';
import {MODELS} from '../Data/Data';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Explore = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top whenever the Explore component is mounted
  }, []);

  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = ["All", "Miniatures & Figurines", "Home Decor", "Gadgets & Accessories", "Art & Sculptures", "Mechanical Parts", "Toys & Games"];
  const navigate = useNavigate();

  const filteredCards = MODELS.filter(
    (model) => (activeTab === "All" || model.category === activeTab) &&
      model.title.toLowerCase().includes(searchQuery.toLowerCase())
  );//The filteredCards array is recalculated every time searchQuery or activeTab changes:
  
  return (
    <div>
      <motion.h1 
        initial={{opacity:0, scale:0 }}
        animate={{opacity:1, scale:1}}
        transition={{
            type:"spring",
            stiffness:100,
            damping:10
        }}
      className='text-3xl pt-16 flex place-items-center justify-center'>Explore</motion.h1>
      <div className="container my-12 md:my-16">
        {/* tabs button section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='flex space-x-4 mb-4 p-6'>
          {
            tabs.map((tab) => (
              <button key={tab}
               onClick={() => {setActiveTab(tab)
                setSearchQuery(""); // Reset search when switching tabs
               }
               } 
               className={`py-2 px-4 rounded ${activeTab === tab ? "bg-primary text-white":"bg-gray-200 text-gray-700"} hover:bg-gray-400`}
               >
                {tab}
              </button>
            )
            )
          }
        </motion.div>


        {/* Search bar */}
        <motion.div
          initial={{opacity:0, scale:0 }}
          animate={{opacity:1, scale:1}}
          transition={{
              type:"spring",
              stiffness:100,
              damping:10,
              delay:1
          }}
          className="flex justify-center mb-6">
          <input
            type="text"
            placeholder={`Search in ${activeTab}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}//Whenever you type in the input box, setSearchQuery(e.target.value) updates searchQuery with the entered text.
            className="px-4 py-2 border rounded w-full max-w-md"
          />
        </motion.div>

        {/* tabs card section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            filteredCards.map((card) => (
              <motion.div
                id={card.id}
                key={card.id}
                initial={{opacity: 0, x: 10}}
                whileInView={{opacity: 1, x: 0}}
                whileHover={{scale:1.1}}
                onTap={() => navigate("/details", { state: { card } })} // Pass card data
                className='p-4 border rounded shadow-sm space-y-2 cursor-pointer'>
                  <img src={card.image} alt="" className='h-[240px] w-full object-cover'/>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className='text-xl font-medium' style={{ fontFamily: 'Montserrat, sans-serif' }}>{card.title}</p>
                      <p className='text-gray-500'>{card.category}</p>
                    </div>
                    <div>
                      <p className='text-gray-500'>{card.price}</p>
                    </div>
                  </div>
              </motion.div>
            ))
          }
        </motion.div>
      </div>
      <div className='flex place-items-center justify-center pb-10'>
      <button
               onClick={() => navigate("/")} 
               className={`py-2 px-4 rounded bg-primary text-white hover:bg-primaryDark`}
               >
                Back
              </button>
      </div>
    </div>
  )
}

export default Explore