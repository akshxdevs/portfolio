"use client";
import axios from "axios";
import { BACKEND_URL } from "@/config";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { themeToggleState } from "../recoil/atom";
import { AppBar } from "../Components/AppBar";
import { useRouter } from "next/navigation";

type Project = {
  projectImg: string;
  projectTitle: string;
  projectDescription: string;
  githubLink: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const theme = useRecoilValue(themeToggleState);
  const router = useRouter();

  const getAllProjects = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/about/getallprojects`);
      if (res) {
        setProjects(res.data.projects);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center 1 ${theme == "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <AppBar/>
      <div className="w-full max-w-4xl text-left">
        <h1 className="text-4xl font-extrabold">Projects</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-400 mt-2">
          Some projects I&apos;ve built and contributed to.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-4xl w-full mb-10">
        {projects.map((project, index) => (
          <div key={index} className={`w-full rounded-xl overflow-hidden shadow-md  p-6 border border-gray-700`}>
            <Image
                  src={project.projectImg}
                  alt="Project Image"
                  width={400}
                  height={200}
                  className="w-full h-56 object-fill rounded-lg"
              />
            <div className="flex flex-col items-start py-5">
              <h3 className="text-xl font-bold  py-2">{project.projectTitle}</h3>
              <p className="text-gray-500 text-md font-light">{project.projectDescription}</p>
            </div>
            <div className="flex justify-end">
                <button onClick={() => router.push("https://github.com/akshxdevs")}>
                    <Image width={28} height={28} src="https://img.icons8.com/3d-fluency/94/github-logo.png" alt="github"/>
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
