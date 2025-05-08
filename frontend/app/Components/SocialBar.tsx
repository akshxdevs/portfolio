import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { themeToggleState } from "../recoil/atom";

export const SocialBar = () => {
    const router = useRouter();
    const theme = useRecoilValue(themeToggleState);
    return (
        <div className="w-full bottom-0 text-white pt-10 flex flex-col items-center">
            <div className="flex gap-3">
                {/* Email */}
                {theme == "dark" ? (
                    <button onClick={() => (window.location.href = "mailto:akshxdevs@gmail.com")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </button>
                ): (
                    <div>
                        <Image 
                            src="https://img.icons8.com/material/24/1A1A1A/new-post--v1.png" 
                            alt="New Post" 
                            width={24} 
                            height={24} 
                            priority
                            />
                    </div>
                )}
                {/* Twitter */}
                <button onClick={() => router.push("https://x.com/akshxdevs")}>
                    <Image width={28} height={28} src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter"/>
                </button>

                {/* LinkedIn */}
                <button onClick={() => router.push("https://www.linkedin.com/in/akshxdevs")}>
                    <Image width={28} height={28} src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
                </button>

                {/* Substack */}
                <button onClick={() => router.push("https://akshxdevs.substack.com/")}>
                    <Image width={28} height={28} src="https://img.icons8.com/doodle/48/substack.png" alt="substack"/>
                </button>

                {/* GitHub */}
                <button onClick={() => router.push("https://github.com/akshxdevs")}>
                    <Image width={28} height={28} src="https://img.icons8.com/3d-fluency/94/github-logo.png" alt="github"/>
                </button>
            </div>

            {/* Copyright Notice */}
            <p className="text-slate-500 text-sm mt-2">© 2025 akshxdevs. All rights reserved.</p>
        </div>
    );
};
