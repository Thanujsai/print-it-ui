import { React, useState } from 'react';
import Header from './Header';
import '../css/Testpage2.css';
import { initialTabs as tabs } from "./Ingredients";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from 'antd';
import { useNavigate, Link } from 'react-router-dom';

function TestPage2() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const navigate = useNavigate();

    const Back = () => {
        navigate("/");
    }

    return (
        <>
        <Header />
        <h1 className='question'>Ready to bring your ideas to life? Choose what you'd like to print from the options below, or upload your own 3D model by going back to the home page!</h1>
        <div className="outer">
        <div className="testpage2-window">
            <nav className="testpage2-nav">
                <ul className="testpage2-tabs">
                    {tabs.map((item) => (
                        <li
                            key={item.label}
                            className={`testpage2-tab ${item === selectedTab ? "selected" : ""}`}
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.icon} ${item.label}`}
                            {item === selectedTab ? (
                                <motion.div className="testpage2-underline" layoutId="testpage2-underline" />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="testpage2-main">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="testpage2-content"
                    >
                        <Link to="/">{selectedTab ? selectedTab.icon : "😋"}</Link>
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
        <div className='back'><Button onClick={Back}>Back</Button></div>
        </div>
        </>
    );
}

export default TestPage2;
