"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AppBar } from "../Components/AppBar";
import { SocialBar } from "../Components/SocialBar";
import { TechStackSlider } from "../Components/TechStackSlider";
import "../globals.css";
import { useRecoilValue } from "recoil";
import { themeToggleState } from "../recoil/atom";

export default function About() {
    const [showContactModel, setShowContactModel] = useState(false);
    const [showBuyMeCoffeModel, setShowBuyMeCoffeModel] = useState(false);
    const theme = useRecoilValue(themeToggleState);
    const modelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (e:MouseEvent) => {
            if (modelRef.current && !modelRef.current.contains(e.target as Node)) {
                setShowContactModel(false);
                setShowBuyMeCoffeModel(false);
            }
        };
        window.addEventListener("mousedown", handleOutsideClick);
        return () => window.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    return <div className="min-h-screen overflow-hidden">
        <div className={`${theme === "dark" ? "text-white bg-black" : "bg-white text-black"}`}>
            <AppBar />
            <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl border border-gray-900 rounded-lg p-6 md:p-10">
                    <div className="w-full md:w-[60%] px-4 md:px-6">
                        <h1 className="py-3 font-bold text-2xl md:text-xl">engineer.</h1>
                        <p className={`text-lg md:text-base leading-[1.7] ${theme === "dark" ? "text-gray-300 font-bold" : "text-gray-700 font-bold"}`}>
                            Hey, I’m Akash!
                        </p>
                        <p className={`text-lg md:text-base leading-[1.7] ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                            I’m a 21-year-old builder passionate about Web3, Full Stack Development, and cutting-edge tech.
                        </p>
                        <p className={`py-2 text-lg md:text-base leading-[1.7] ${theme === "dark" ? "text-gray-300 font-semibold" : "text-gray-700 font-semibold"}`}>
                            What do I do? {""} 
                            <span className="font-normal">
                                I thrive on building seamless digital experiences, optimizing performance, and making complex tech ridiculously simple.
                            </span>
                        </p>
                        <p className={`text-lg md:text-base leading-[1.7] ${theme === "dark" ? "text-gray-300 font-semibold" : "text-gray-700 font-semibold"}`}>Why does it matter? {""}
                            <span className={`font-normal`}>
                                Because the future is being built one line of code at a time, and I’m here to make sure it’s fast, scalable, and actually works.
                                Whether it’s Web3, AI, or next-gen software, I’m all about turning ideas into impact. Let’s build something epic. 😎💻
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col items-center mt-5 md:mt-0 w-full md:w-[40%]">
                        <Image src="/WhatsApp Image 2025-03-27 at 11.15.46.jpeg" alt="Profile Picture" width={200} height={200} className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-800 shadow-lg" />
                        <p className={`${theme === "dark" ? "text-gray-300 font-light" : "text-gray-700 font-light"} text-sm text-center p-2`}>Builder. Innovator. Explorer.</p>
                    </div>
                </div>
                <TechStackSlider />
                <div className="w-[90%] sm:max-w-[45%] max-w-2xl px-5 pt-5 pb-2 mb-8 border border-gray-700 rounded-xl text-center">
                    <h1 className={`${theme === "dark" ? "text-slate-300 text-base font-semibold sm:text-sm" : "text-gray-700 font-semibold text-base sm:text-sm"}`}>
                        Code, coffee, and chaos—DMs open for all things Web3 & beyond! ☕⚡
                    </h1>
                    <div className="flex flex-col md:flex-row gap-3 justify-center">
                        <button className={`${theme == "dark" ? "p-3 my-2 border border-gray-700 text-slate-300 rounded-md hover:bg-gray-800 font-bold transition-all" : "p-3 my-2 border border-gray-700 text-gray-700 rounded-md hover:bg-gray-800 hover:text-slate-50 font-semibold transition-all"}`} onClick={() => setShowContactModel(true)}>Contact me</button>
                        <button className={`${theme == "dark" ? "p-3 my-2 border border-gray-700 text-slate-300 rounded-md hover:bg-gray-800 font-bold transition-all" : "p-3 my-2 border border-gray-700 text-gray-700 rounded-md hover:bg-gray-800 hover:text-slate-50 font-semibold transition-all"}`} onClick={() => setShowBuyMeCoffeModel(true)}>Buy me! ☕</button>
                    </div>
                </div>
                <div className="pb-16 w-full px-4 text-center">
                    <div className="pt-10 pb-5 font-semibold text-sm leading-relaxed">
                        <p>
                            Into Web3, tech, or just love debating the best coffee for late-night coding?  
                            Hit me up on  
                            <a  
                                href="https://x.com/akshxdevs"  
                                target="_blank"  
                                rel="noopener noreferrer"  
                                className="text-blue-500 hover:underline font-medium px-1"
                            >
                                @akshxdevs
                            </a>  
                            — let’s geek out! 🌐🔥  
                        </p>  
                    </div>  
                    <div className={`${theme == "dark" ? "text-slate-400" : "text-gray-700"}text-sm`}>
                        Built with passion & precision by  
                        <span className="font-bold px-1"> @akshxdevs</span>  
                        — where innovation meets execution. 🛠️  
                    </div>
                </div>
                <SocialBar />
                {showContactModel && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center h-screen"
                        onClick={() => setShowContactModel(false)}
                    >
                        <div 
                            ref={modelRef} 
                            className="w-[90%] sm:max-w-md bg-white rounded-lg shadow-lg py-10 px-6 relative"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                        >
                            <div className="flex flex-col items-center w-full">
                                <h1 className="text-black font-bold text-xl text-center">
                                    Slide Into My Inbox 📬✨
                                </h1>
                                <form 
                                    action="https://getform.io/f/bdrnmkxb" 
                                    method="POST" 
                                    className="w-full flex flex-col gap-3 mt-4"
                                >
                                    <input 
                                        type="text" name="name" required
                                        className="w-full px-4 py-3 text-black bg-slate-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 shadow-sm transition-all duration-300"
                                        placeholder="What do they call you? 🤔"
                                    />
                                    <input 
                                        type="email" name="email" required
                                        className="w-full px-4 py-3 text-black bg-slate-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 shadow-sm transition-all duration-300"
                                        placeholder="Your inbox HQ 📩"
                                    />
                                    <textarea 
                                        name="message" required 
                                        placeholder="Drop a message, let’s connect!"
                                        className="w-full px-4 py-3 h-32 text-black bg-slate-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 shadow-sm transition-all duration-300 resize-none"
                                    />
                                    <button 
                                        type="submit"  
                                        className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95"
                                    >
                                        Send Message ✉️
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                {showBuyMeCoffeModel && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center h-screen"
                        onClick={() => setShowBuyMeCoffeModel(false)}
                    >
                        <div 
                            ref={modelRef} 
                            className="w-[90%] sm:max-w-md bg-white rounded-lg shadow-lg p-10 relative"
                            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner clicks
                        >
                            <div className="flex flex-col items-center w-full">
                                <h1 className="text-black font-bold text-xl text-center">
                                    Support my work & keep the ideas brewing! ☕✨
                                </h1>
                                <div className="pt-5">
                                <Image 
                                        src="/WhatsApp Image 2025-03-28 at 12.18.37.jpeg" 
                                        alt="QR-Code" 
                                        width={320} // Equivalent to w-80 (80 * 4 = 320px)
                                        height={320} // Equivalent to h-80 (80 * 4 = 320px)
                                        className="rounded-lg shadow-md object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
}
