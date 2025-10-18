import React from "react";
import Hero from "./Hero";
import Sonia from "../assets/Sonia.jpg"
import Ig from "../assets/igg.png"
import Tiktok from "../assets/tt.png"
import Youtube from "../assets/yt.png"



function Homepage(){
    return(
        <div className="flex flex-col">
            <Hero />

            <div className="mt-7 flex flex-row md:gap-20 justify-center ">
                <div className="flex justify-center w-[100px] h-[100px] rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 ">
                    <img src={Sonia} loading="lazy" className="w-full h-full object-top"/>
                </div>

                <div>
                    <p className="text-2xl font-extrabold text-left mb-4">Dike Sonia</p>
                    <p className="font-semibold text-left max-w-[450px]">Hi, i'm Dike Sonia aka <span className="font-bold">@soniatherotationqueen</span>.<br/> A versatile content creator blending creativity, strategy, and authenticity to connect with a vibrant and growing audience.</p>
                </div>
            </div>

            <div className="flex flex-row gap-10 justify-center mt-10">
                <div className=" flex flex-col gap-3 justify-center items-center w-[200px] shadow-2xl shadow-gray-400">
                    <p className="font-bold text-2xl">560K +</p>

                    <div className="flex flex-row justify-center items-center">
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                            <img src={Tiktok}/>
                        </div>
                        <p className="font-bold">Tiktok</p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 justify-center items-center w-[200px] shadow-2xl shadow-gray-400">
                    <p className="font-bold text-2xl">48K +</p>

                    <div className="flex flex-row justify-center items-center">
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                            <img src={Ig}/>
                        </div>
                        <p className="font-bold">Instagram</p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 justify-center items-center w-[200px] shadow-2xl shadow-gray-400">
                    
                    <p className="font-bold text-2xl">10K +</p>
                    <div className="flex flex-row justify-center items-center">
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                            <img src={Youtube}/>
                        </div>
                        <p className="font-bold">Youtube</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;