import React from 'react'
import {motion} from 'framer-motion';

function DraggableDiv() {
  return (
    <>
    <motion.div 
    drag
    whileDrag={{scale:0.8, backgroundColor:'deepskyblue'}}//we can mention any css properties here
    //we dont have any constraints now, the circle can go outside the screen too, in order to prevent such behaviour we can use dragConstraints
    dragConstraints = {{
        left:-100,
        right:400,
        top:-100,
        bottom:400
    }}
    // dragElastic={0.5}
    dragSnapToOrigin={true}
    dragTransition={//when we release it what kind of animation we want
        {
            bounceStiffness: 600,
            bounceDamping: 10
        }
    }
    /*The outer { ... } tells JSX: "Hey, this is JavaScript!"
The inner { scale: 0.8 } is a JavaScript object passed as a prop.*/
    //drag -- can drag anywhere on screen
    //drag="x" --can drag only on x axis
    //drag="y" --can drag only on y axis
    className='w-44 h-44 rounded-full bg-white mt-20 mx-auto flex flex-col items-center justify-center'>
        <h2>Circle</h2>
    </motion.div>
    <div>hello</div>
    </>
  )
}

export default DraggableDiv