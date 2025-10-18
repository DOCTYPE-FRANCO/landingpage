import React from "react";
import { motion } from "framer-motion";
function Hero(){
    return(
        <div className="flex flex-col gap-5 items-center justify-center relative top-0 h-[300px] w-full bg-purple-950">
            <motion.p 
                initial={{opacity:0, x:-100}}
                animate={{opacity:1, x:0}}
                transition={{duration: 2}}
                className="font-bold text-white md:text-5xl max-w-[40vw] text-center"
            >
                Book Sonia for Your Next Project
            </motion.p>
            <motion.p
                initial={{opacity:0, x:100}}
                animate={{opacity:1, x:0}}
                transition={{duration: 2}}
                className="font-thin text-white text-2xl max-w-[35vw] text-center"
            >
                Multifacet Creative with <span className="font-bold">600k+</span> followers across all platforms
            </motion.p>

            <motion.a
                initial={{opacity:0, x:100}}
                animate={{opacity:1, x:0}}
                transition={{duration: 1}}
                className="font-bold text-white border-white border rounded-full p-3 hover:scale-105 transition-transform duration-300"
            >
                Book Now
            </motion.a>
        </div>
    );
}

export default Hero;