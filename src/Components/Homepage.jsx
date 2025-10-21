import React, {useState} from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Sonia from "../assets/Sonia.jpg"
import Ig from "../assets/igg.png"
import Tiktok from "../assets/tt.png"
import Youtube from "../assets/yt.png"
import { Target, Goal } from "lucide-react";


function Homepage(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleChange(e){
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name] : value
        }));
    }

    function handleSubmit(e){
        e.preventDefault()
        
        setFormData({name : "", email: "", message: ""})
    }
    return(
        <div className="flex flex-col z-10 relative">
            <Hero />

            <div className="mt-7 flex items-center md:items-start flex-col md:flex-row md:gap-20 justify-center mx-auto">
                <div className="flex justify-center w-[100px] h-[100px] rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 ">
                    <img src={Sonia} loading="lazy" className="w-full h-full object-top"/>
                </div>

                <div>
                    <p className="text-2xl font-extrabold text-left mb-4">Dike Sonia</p>
                    <p className="font-semibold text-left max-w-[400px] md:max-w-[450px]">Hi, i'm Dike Sonia aka <span className="font-bold">@soniatherotationqueen</span>.<br/> A versatile content creator blending creativity, strategy, and authenticity to connect with a vibrant and growing audience.</p>
                </div>
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row gap-10 justify-center mt-10">
                <div className=" flex flex-col gap-3 justify-center items-center w-[200px] h-[200px] shadow-2xl shadow-gray-400 rounded-md">
                    <p className="font-bold text-2xl">560K +</p>

                    <div className="flex flex-row justify-center items-center">
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                            <img src={Tiktok}/>
                        </div>
                        <p className="font-bold">Tiktok</p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 justify-center items-center w-[200px] h-[200px] shadow-2xl shadow-gray-400 rounded-md">
                    <p className="font-bold text-2xl">48K +</p>

                    <div className="flex flex-row justify-center items-center">
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                            <img src={Ig}/>
                        </div>
                        <p className="font-bold">Instagram</p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 justify-center items-center w-[200px] h-[200px] shadow-2xl shadow-gray-400 rounded-md">
                    
                    <p className="font-bold text-2xl">10K +</p>
                    <div className="flex flex-row justify-center items-center">
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                            <img src={Youtube}/>
                        </div>
                        <p className="font-bold">Youtube</p>
                    </div>
                </div>
            </div>


            <section className="flex flex-col justify-center items-center shadow-2xl shadow-gray-500 mt-20 mb-20 w-[80vw] md:w-[45vw] md:h-[280px] mx-auto rounded-md p-5 md:p-0 bg-white">
                <div className="flex flex-row justify-center gap-3 mt-10">
                    <Target color="#000000" />
                    <p className="text-2xl font-bold text-black">Why Work with Me</p>
                </div>

                <section className="flex flex-col gap-3 items-start justify-self-center mt-10">
                    <div className="flex flex-row gap-5">
                        <Goal color="#000000"/>
                        <p className="text-black">Proven ability to engage and grow audiences</p>
                    </div>


                    <div className="flex flex-row gap-5">
                        <Goal color="#000000"/>
                        <p className="text-black">Creative collaboration that aligns with your vision</p>
                    </div>

                    
                    <div className="flex flex-row gap-5">
                        <Goal color="#000000"/>
                        <p className="text-black">Professional and timely communication</p>
                    </div>
                </section>
            </section>

            <div id="Book" className="bg-white mb-10 w-[300px] h-[450px] md:w-[600px] md:h-[430px] rounded-2xl mx-auto shadow-gray-500 shadow-2xl">
                <p className="text-center text-2xl text-black font-thin">Fill out the form below to request Sonia's availability</p>
                <form action="https://formspree.io/f/xjkazwnn" method="post" className="flex flex-col justify-center items-center mt-5 gap-2">
                    <label className="flex flex-col font-bold text-black">
                        Name
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Enter your name"
                            onChange={handleChange}
                            className="flex justify-center items-center border md:w-[350px] w-[250px] h-[50px] rounded-xs pl-5"
                        />  
                    </label>

                    <label className="flex flex-col font-bold text-black">
                        E-mail
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="eg. youremail@gmail.com"
                            onChange={handleChange}
                            className="flex justify-center items-center border md:w-[350px] w-[250px] h-[50px] rounded-xs pl-5"
                        />  
                    </label>

                    <label className="flex flex-col font-bold text-black">
                        Message
                        <input
                            type="text"
                            name="message"
                            value={formData.message}
                            placeholder="Write us a message"
                            onChange={handleChange}
                            className="flex border md:w-[350px] w-[250px] h-[100px] rounded-xs pl-5"
                        />  
                    </label>

                    <button className="font-bold m-2 text-white bg-black hover:scale-105 hover:bg-gray-400 px-6 py-3 md:px-8 rounded-full active:bg-gray-600">Send</button>
                </form>
            </div>

            <Footer />

        </div>
    );
}

export default Homepage;