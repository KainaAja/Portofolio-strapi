"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from 'next/image';

const Project = () => {
    const [error, setError] = useState(null);
    const [project, setProject] = useState(null);
  
    useEffect(() => {
      axios
        .get("http://127.0.0.1:1337/api/projects?populate=*")
        .then(response => {
          setProject(response.data.data);
        })
        .catch(error => {
          setError(error);
        });
    }, []);
  
    if (error) {
      return <div>An error occurred: {error.message}</div>;
    }
    if (!project) {
      return <div>Loading...</div>;
    }
  
    

    return (
        <section id="project" className="pt-[80px] w-full">
            <div className="bg_project flex flex-col items-center justify-start min-h-fit min-w-fit flex-wrap content-center p-6 mx-12 lg:mx-44 rounded-lg 2xl:mt-[85px]">
                <h2 className="text-xl font-extrabold text-center bg-[#EDEDED] border-2 border-black p-3 rounded-3xl">My Project</h2>
                <div className="flex flex-wrap gap-x-[6rem] xl:gap-x-[65px] gap-y-[1rem] xl:gap-y-[0px] pb-6 content-center justify-center items-center">                   
                    {project.map(({ id, attributes }, index) => (
                        <div key={id} className="project-item w-[300px] md:w-[400px]" >
                            <div className="bg-[#adadad] flex-[1 1 30px] p-[16px] rounded-[.5rem] divide-solid relative mt-[3rem] focus:scale-1000 hover:scale-105">
                                <div className="relative text-center pt-2rem overflow-hidden">
                                    
                                <img
                                        src={
                                            index === 0
                                                ? 'http://localhost:1337/uploads/project1_9eb0419414.png'
                                                : index === 1
                                                ? 'http://localhost:1337/uploads/project3_34ba8b3a85.png'
                                                : 'http://localhost:1337/uploads/project2_647be56fa7.png'
                                        }
                                        alt={`Project Image ${index + 1}`}
                                        width={400}
                                        height={400}
                                    />

                                    
                                    <div className="description text-center">
                                        <h3 className="text-xl font-extrabold pt-3">{attributes.title}</h3>
                                        <p className="py-3">{attributes.desc}</p>
                                    </div>
                                    <button className="bg-white border-2 border-black mx-32 p-2 rounded-3xl h-[3rem] w-[8rem] gap-2">
                                        <Link href="https://github.com/KainaAja/crud-mobil">
                                            <div className="justify-center flex items-center">
                                                GitHub <FaGithub className="ml-2" />
                                            </div>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                     ))}               
                </div>
            </div>
        </section>
    );
}

export default Project;
