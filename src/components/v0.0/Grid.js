import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiYoutube } from "react-icons/si";

export const RevealBento = () => {
    useEffect(() => {
        // Set background color when the component mounts
        document.body.style.backgroundColor = '#E6E6FA';
    
        // Clean up by resetting background color when component unmounts
        return () => {
          document.body.style.backgroundColor = '';
        };
      }, []);
  return (
    <div className="min-h-screen px-4 py-12 text-zinc-50" style={{ backgroundColor: '#E6E6FA' }}>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6 bg-slate-800">
      <img
        src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=Thanuj"
        alt="avatar"
        className="mb-4 size-14 rounded-full"
      />
      <h1 className="mb-12 text-4xl font-medium leading-tight text-zinc-50">
        Hi, I'm Thanuj Sai.{" "}
        <span className="text-slate-400">
          I'm passionate about 3D printing and building innovative websites like Printit.
        </span>
      </h1>
      <a
        href="mailto:your-email@example.com" // replace with your actual email
        className="flex items-center gap-1 text-red-300 hover:underline"
      >
        Contact me <FiArrowRight />
      </a>
    </Block>
  );
  
  

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiYoutube />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
    <Block className="col-span-12 text-3xl leading-snug">
      <p>
        Our passion is bringing ideas to life through 3D printing.{" "}
        <span className="text-zinc-400">
          At Printit, We’ve created a platform where users can upload their 3D models and order prints effortlessly. This project allows us to merge our love for technology and creativity, making it accessible for anyone to transform their digital designs into physical objects. Join me on this exciting journey as I explore the limitless possibilities of 3D printing!
        </span>
      </p>
    </Block>
  );
  

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <a href='/'><p className="text-center text-lg text-zinc-400">Cyberspace</p></a>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);