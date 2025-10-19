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
                        <a href="https://www.tiktok.com/@soniatherotationqueen?_t=ZS-90gMLsJ5p2n&_r=1"><img src={Tiktok} className="w-[30px] hover:scale-125 transition-all duration-500 rounded-full"/></a>
                    </div>
                           
                    <div>
                        <a href="https://www.instagram.com/soniafashionkyle?igsh=bnh4Z2VveDgwbWF3"><img src={Ig} className="w-[30px] hover:scale-125 transition-all duration-500 rounded-2xl"/></a>
                    </div>
                        
                    <div>
                        <a href="https://youtube.com"><img src={Youtube} className="w-[30px] hover:scale-125 transition-all duration-500 rounded-md"/></a> 
                    </div>
            
            </div>
        </div>
    );
}

export default Footer;