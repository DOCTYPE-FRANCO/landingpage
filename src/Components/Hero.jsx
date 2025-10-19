import React from "react";
import { motion } from "framer-motion";
import HeroVideo from "../assets/herovid.mp4";

function Hero(){
    return(
        <div className="relative h-[300px] w-full overflow-hidden">
            {/* video background */}
            <video
                src={HeroVideo}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
                preload="metadata"
            />

            
            <div className="absolute inset-0 bg-black/40" />

            
            <div className="relative z-10 flex flex-col gap-5 items-center justify-center h-full">
                <motion.p 
                    initial={{opacity:0, x:-100}}
                    animate={{opacity:1, x:0}}
                    transition={{duration: 2}}
                    className="font-extrabold text-white md:text-5xl max-w-[40vw] text-center"
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
                    href="#Book"
                    initial={{opacity:0, x:100}}
                    animate={{opacity:1, x:0}}
                    transition={{duration: 1}}
                    className="font-bold text-white bg-black rounded-full p-3 hover:scale-105 transition-transform duration-300"
                >
                    Book Now
                </motion.a>
            </div>
        </div>
    );
}

export default Hero;