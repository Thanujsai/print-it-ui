import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { Button, ConfigProvider, Space } from 'antd';

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="High Precision"
        heading="Print Your Dreams"
      >
        <ExampleContentUpload />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Customizable"
        heading="Bring Ideas to Life"
      >
        <ExampleContentShowcase />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Strong & Durable"
        heading="Top-Quality Prints"
      >
        <ExampleContentMaterials />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContentUpload = () => {
  
  const navigate = useNavigate();
  return (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Bring Your Ideas to Life
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Got a 3D model? Upload it, choose your material, and let us print it with <b>precision and durability</b>.
      </p>
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        We support <b>STL, OBJ, and STEP</b> file formats. Simply upload, customize, and order, it’s that easy!
      </p>
      <div className="flex flex-wrap gap-4">
      <Button type="primary" size="large" icon={<UploadOutlined />} onClick={() => navigate('/upload')}>
          Upload your model
        </Button>
      </div>
    </div>
  </div>
)};

const ExampleContentShowcase = () => {
  
  const navigate = useNavigate();
  return (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      See What Others Have Printed
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        From <b>functional prototypes</b> to <b>decorative models</b>, explore what’s possible with <b>Printit</b>.
      </p>
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Browse a <b>gallery of real prints</b> to get inspired, or start your own project today!
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="rounded bg-green-600 px-6 py-3 text-xl text-white transition hover:bg-green-500" onClick={() => navigate('/explore')}>
          Browse Example Prints
        </button>
      </div>
    </div>
  </div>
)
};

const ExampleContentMaterials = () => {

  const navigate = useNavigate();
  return (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Choose the Right Material for Your Print
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Select from <b>PLA, ABS, Resin, and more</b>—each material has unique strengths, whether you need <b>durability, flexibility, or high-detail finishing</b>.
      </p>
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Not sure which one to pick? We’ll guide you based on your project needs.
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="rounded bg-orange-600 px-6 py-3 text-xl text-white transition hover:bg-orange-500" onClick={() => navigate('/explore')}>
          Learn About Materials
        </button>
      </div>
    </div>
  </div>
)
};
