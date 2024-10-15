import React from "react";
import { motion } from "framer-motion";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import '../css/TestPage.css';

export const TestPage = () => {

    const navigate = useNavigate();
    const home = () => {
        navigate("/");
    }
  return (
    <>
    <Header />
    <section className="grid place-content-center gap-2 bg-green-300 px-8 py-24 text-black">
      <FlipLink>Bring</FlipLink>
      <FlipLink>your</FlipLink>
      <FlipLink>Visions</FlipLink>
      <FlipLink>To</FlipLink>
      <FlipLink>Reality</FlipLink>
    </section>
    <div className="button">
        <Button className='back-button' onClick={home}>Back</Button>
    </div>
    </>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children }) => {
  return (
    <>
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.82,//if the hidden word is also visible just increase this line height
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
    </>
  );
};