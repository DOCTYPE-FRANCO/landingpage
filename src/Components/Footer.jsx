import React from "react";
import Ig from "../assets/igwhite.png"
import Tiktok from "../assets/ttwhite.png"
import Youtube from "../assets/ytwhite.png"
function Footer(){
    return(
        <div className=" flex flex-col gap-4 w-full h-[150px]  bg-black items-center justify-center text-center  pb-2.5">
            <p className="text-white ">&copy; 2025 SoniatheRotationQueen. All rights reserved.</p>

            <div className="flex flex-row gap-3 justify-center">
            
                    <div>
                        <a href="https://www.linkedin.com/in/uchenna-emeh-9b5833356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={Tiktok} className="w-[30px] hover:scale-125 transition-all duration-500 rounded-full"/></a>
                    </div>
                           
                    <div>
                        <a href="https://wa.me/2348120362926?text=Hello%20i%20got%20your%20number%20from%20your%20portfolio"><img src={Ig} className="w-[30px] hover:scale-125 transition-all duration-500 rounded-2xl"/></a>
                    </div>
                        
                    <div>
                        <a href="https://x.com/doctype_franco?s=21"><img src={Youtube} className="w-[30px] hover:scale-125 transition-all duration-500 rounded-md"/></a> 
                    </div>
            
            </div>
        </div>
    );
}

export default Footer;