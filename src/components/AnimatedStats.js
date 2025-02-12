import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBoxOpen, FaUsers, FaCubes, FaClock } from "react-icons/fa";

const stats = [
  { id: 1, icon: <FaBoxOpen />, value: 10000, label: "Prints Completed" },
  { id: 2, icon: <FaUsers />, value: 500, label: "Happy Customers" },
  { id: 3, icon: <FaCubes />, value: 10, label: "Materials Available" },
  { id: 4, icon: <FaClock />, value: 24, label: "Fastest Delivery (Hours)" },
];

const StatCard = ({ icon, value, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="text-5xl text-blue-600">{icon}</div>
      <motion.h2
        className="text-4xl font-bold mt-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {value.toLocaleString()}+
      </motion.h2>
      <p className="text-lg text-gray-600 mt-2">{label}</p>
    </motion.div>
  );
};

const AnimatedStats = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900">Our Achievements</h2>
        <p className="text-lg text-gray-600 mt-4">
          Trusted by creators, designers, and engineers worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto px-6">
        {stats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default AnimatedStats;
