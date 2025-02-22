    import React, { useEffect, useState } from "react";
    import {
    FiArrowRight,
    FiBarChart2,
    FiChevronDown,
    FiHome,
    FiPieChart,
    } from "react-icons/fi";
    import { AnimatePresence, motion } from "framer-motion";
    import { Button } from "antd";
    import test from '../Images/test.jpg';
    import test2 from '../Images/test2.jpg';


    export const ShiftingDropDown = () => {
        return (
            <motion.div
                initial={{opacity:0, y:-100 }}
                animate={{opacity:1, y: 0}}
                transition={{
                    type:"spring",
                    stiffness:100,
                    damping:10,
                    delay:0.2
                }}
            className="flex w-full justify-start text-black md:justify-center">
            <Tabs />
            </motion.div>
        );
    };

    const Tabs = () => {
        const [selected, setSelected] = useState(null);
        const [dir, setDir] = useState(null);

        const handleSetSelected = (val) => {
            if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? "r" : "l");
            } else if (val === null) {
            setDir(null);
            }

            setSelected(val);
        };

    return (
        <div
        onMouseLeave={() => handleSetSelected(null)}
        className="relative flex h-fit gap-2"
        >
        {TABS.map((t) => {
            return (
            <Tab
                key={t.id}
                selected={selected}
                handleSetSelected={handleSetSelected}
                tab={t.id}
            >
                {t.title}
            </Tab>
            );
        })}

        <AnimatePresence>
            {selected && <Content dir={dir} selected={selected} />}
        </AnimatePresence>
        </div>
    );
    };

    const Tab = ({ children, tab, handleSetSelected, selected }) => {
    return (
        <Button
        type='text'
        id={`shift-tab-${tab}`}
        onMouseEnter={() => handleSetSelected(tab)}
        onClick={() => handleSetSelected(tab)}
        className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
            selected === tab
            ? " bg-neutral-800 text-neutral-100"
            : "text-black"
        }`}
        >
        <span>{children}</span>
        </Button>
    );
    };

    const Content = ({ selected, dir }) => {
    return (
        <motion.div
        id="overlay-content"
        initial={{
            opacity: 0,
            y: 8,
        }}
        animate={{
            opacity: 1,
            y: 0,
        }}
        exit={{
            opacity: 0,
            y: 8,
        }}
        className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
        >
        <Bridge />
        <Nub selected={selected} />

        {TABS.map((t) => {
            return (
            <div className="overflow-hidden" key={t.id}>
                {selected === t.id && (
                <motion.div
                    initial={{
                    opacity: 0,
                    x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                    <t.Component />
                </motion.div>
                )}
            </div>
            );
        })}
        </motion.div>
    );
    };

    const Bridge = () => (
    <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
    );

    const Nub = ({ selected }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        moveNub();
    }, [selected]);

    const moveNub = () => {
        if (selected) {
        const hoveredTab = document.getElementById(`shift-tab-${selected}`);
        const overlayContent = document.getElementById("overlay-content");

        if (!hoveredTab || !overlayContent) return;

        const tabRect = hoveredTab.getBoundingClientRect();
        const { left: contentLeft } = overlayContent.getBoundingClientRect();

        const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

        setLeft(tabCenter);
        }
    };

    return (
        <motion.span
        style={{
            clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
        }}
        animate={{ left }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
        />
    );
    };

    const Products = () => {
    return (
        <div>
        <div className="flex gap-4">
            <div>
            <h3 className="mb-2 text-sm font-medium text-white">3D Printed Models</h3>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
                Bookkeeping
            </a>
            <a href="#" className="block text-sm text-neutral-400 hover:text-white">
                Invoicing
            </a>
            </div>
            <div>
            <h3 className="mb-2 text-sm font-medium text-white">Custom Prints</h3>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
                Live Coaching
            </a>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
                Reviews
            </a>
            <a href="#" className="block text-sm text-neutral-400 hover:text-white">
                Tax/VAT
            </a>
            </div>
            <div>
            <h3 className="mb-2 text-sm font-medium text-white">Best Sellers</h3>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
                White glove
            </a>
            <a href="#" className="mb-1 block text-sm text-neutral-400 hover:text-white">
                SOX Compliance
            </a>
            <a href="#" className="block text-sm text-neutral-400 hover:text-white">
                Staffing
            </a>
            <a href="#" className="block text-sm text-neutral-400 hover:text-white">
                More
            </a>
            </div>
        </div>

        <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
            <span>View more</span>
            <FiArrowRight />
        </button>
        </div>
    );
    };

    const Pricing = () => {
    return (
        <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
        <a
            href="#"
            className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
        >
            <FiHome className="mb-2 text-xl text-indigo-300" />
            <span className="text-xs">Startup</span>
        </a>
        <a
            href="#"
            className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
        >
            <FiBarChart2 className="mb-2 text-xl text-indigo-300" />
            <span className="text-xs">Scaleup</span>
        </a>
        <a
            href="#"
            className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
        >
            <FiPieChart className="mb-2 text-xl text-indigo-300" />
            <span className="text-xs">Enterprise</span>
        </a>
        </div>
    );
    };

    const Blog = () => {
    return (
        <div>
        <div className="grid grid-cols-2 gap-2">
            <a href="#">
            <img
                className="mb-2 h-14 w-full rounded object-cover"
                src={test}
                alt="Placeholder image"
            />
            <h4 className="mb-0.5 text-sm font-medium text-white">PrintIt News & Updates</h4>
            <p className="text-xs text-neutral-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
                quidem eos.
            </p>
            </a>
            <a href="#">
            <img
                className="mb-2 h-14 w-full rounded object-cover"
                src={test2}
                alt="Placeholder image"
            />
            <h4 className="mb-0.5 text-sm font-medium text-white">Featured Prints</h4>
            <p className="text-xs text-neutral-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
                quidem eos.
            </p>
            </a>
        </div>
        <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
            <span>View more</span>
            <FiArrowRight />
        </button>
        </div>
    );
    };

    const TABS = [
    {
        title: "Products",
        Component: Products,
    },
    {
        title: "Pricing",
        Component: Pricing,
    },
    {
        title: "Blog",
        Component: Blog,
    },
    ].map((n, idx) => ({ ...n, id: idx + 1 }));