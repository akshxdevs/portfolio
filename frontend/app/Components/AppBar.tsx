"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { themeToggleState } from "../recoil/atom";

export const AppBar = () => {
    const router = useRouter();
    const [theme, setTheme] = useRecoilState(themeToggleState);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <nav className={` w-full py-10 px-4 md:px-10 overflow-hidden ${theme =="dark" ? "text-white" : "text-black bg-white"}`}>
            <div className="flex justify-between items-center max-w-6xl mx-auto w-full">
                <button className="text-2xl font-bold max-w-full" onClick={() => router.push("/about")}>
                    akshxdevs
                </button>
                <div className="hidden md:flex gap-6 text-lg">
                    <button className="max-w-full" onClick={() => (window.location.href = "https://akshxdevs.substack.com/")}>blogs</button>
                    <button className="max-w-full" onClick={() => router.push("/projects")}>projects</button>
                    <button className="max-w-full" onClick={toggleTheme}>
                        {theme === "dark" ? 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg> 
                            : 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                        }
                    </button>
                </div>
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-xl">
                    {menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>
            {menuOpen && (
                <div className="md:hidden flex flex-col items-start gap-4 mt-4 text-lg w-full">
                    <button className="max-w-full" onClick={() => router.push("/https://akshxdevs.substack.com")}>blogs</button>
                    <button className="max-w-full" onClick={() => router.push("/projects")}>projects</button>
                    <button className="max-w-full" onClick={toggleTheme}>
                        {theme === "dark" ? 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg> 
                            : 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                        }                     
                    </button>
                </div>
            )}
        </nav>
    );
};
