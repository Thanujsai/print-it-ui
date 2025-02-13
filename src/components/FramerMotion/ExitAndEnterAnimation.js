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
                animate={{opacity: 1, 
                    y:40,
                    scale: [null,1.2,0.5,0.1,1],//keyframes are scaled to 1.2, 1.5, 1.1 and 1
                    backgroundColor: [null, "#111111","#eb4034","#86EFAC"],//also changing background colors while scaling
                    borderRadius: [null, "40%", "10%", "100%"],
                }}
                transition={{duration: 10}}
                className="bg-green-300 h-24 w-24 rounded-full"
                exit={{opacity: 0, y: 1000, transition: {duration: 20}}}>
            </motion.div>
            )}
        </AnimatePresence>
        </div>
        </div>
    )
}

export default ExitAndEnterAnimation
