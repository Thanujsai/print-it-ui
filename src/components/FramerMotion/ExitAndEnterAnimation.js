import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function ExitAndEnterAnimation() {
    const [removeInnerCircle, setRemoveInnerCircle] = useState(false);

    useEffect(() => {
        setTimeout(() => {setRemoveInnerCircle(true)}, 10000)
    });

    return (
        <div>
        <div className="bg-white h-32 w-32 rounded-full mx-auto mt-10">
            <AnimatePresence>
                {/*In React, when a component is removed, it's usually removed instantly.
                 Motion provides the AnimatePresence component which keeps elements in the DOM while
                  they perform an exit animation.*/}
            {removeInnerCircle === false && (
            <motion.div 
                initial={{opacity: 0, y:0}}
                animate={{opacity: 1, y:40}}
                transition={{duration: 5}}
                className="bg-green-300 h-24 w-24 rounded-full"
                exit={{opacity: 0, y: 1000}}>
            </motion.div>
            )}
        </AnimatePresence>
        </div>
        </div>
    )
}

export default ExitAndEnterAnimation
