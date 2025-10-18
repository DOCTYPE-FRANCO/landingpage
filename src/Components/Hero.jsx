import React from "react";
function Hero(){
    return(
        <div className="flex flex-col gap-3 items-center justify-center fixed top-0 h-[300px] w-full bg-purple-800">
            <p className="font-bold text-white text-5xl max-w-[35vw] text-center">Book Sonia for Your Next Project</p>
            <p className="font-thin text-white text-2xl max-w-[35vw] text-center">Multifacet Content Creator with 600k+ followers across all platforms</p>
        </div>
    );
}

export default Hero;