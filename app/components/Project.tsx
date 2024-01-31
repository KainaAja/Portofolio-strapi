import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Project = () => {
    return (
        <>
            <section id="project" className="pt-[80px]">
                <div className="bg_project flex flex-col items-center justify-start min-h-fit min-w-fit flex-wrap content-center p-6 mx-12 lg:mx-44 rounded-lg 2xl:mt-[85px]" >
                    <h2 className=" text-xl font-extrabold text-center bg-[#EDEDED] border-2 border-black p-3 rounded-3xl">My Project</h2>
                    <div className="flex flex-wrap gap-x-[6rem] xl:gap-x-[65px] gap-y-[1rem] xl:gap-y-[0px] pb-6 content-center justify-center items-center">
                        <div className="project-item w-[300px] md:w-[400px]">
                            <div className="bg-[#adadad] flex-[1 1 30px] p-[16px]  rounded-[.5rem] divide-solid relative mt-[3rem] focus:scale-1000 hover:scale-105">
                                <div className="relative text-center pt-2rem overflow-hidden">
                                    <Image
                                        src="/images/project1.png"
                                        alt="profile"
                                        width={400}
                                        height={400}
                                        
                                    />
                                    <div className="description text-center">
                                        <h3 className="text-xl font-extrabold">CRUD CAR PRICE LIST</h3>
                                        <p className="py-3">Crud-based website program which is a list of car prices that can be added and edited, and can also be logged into </p>
                                    </div>
                                    <button className="bg-white border-2 border-black mx-32 p-2 rounded-3xl    h-[3rem] w-[8rem] gap-2">
                                        <Link href="https://github.com/KainaAja/crud-mobil">
                                            <div className="justify-center flex items-center">
                                                GitHub <FaGithub className="ml-2" />
                                            </div>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="project-item w-[300px] md:w-[400px]">
                            <div className="bg-[#adadad] flex-[1 1 30px] p-[16px] rounded-[.5rem] divide-solid relative mt-[3rem] focus:scale-100 hover:scale-105">
                                <div className="relative text-center pt-2rem overflow-hidden">
                                    <Image
                                        src="/images/project2.png"
                                        alt="profile"
                                        width={400}
                                        height={400}
                                    />
                                    <div className="description text-center ">
                                    <h3 className="text-xl font-extrabold">PROGRAM ZODIAC C++</h3>
                                        <p className="py-3">C++ program used to find out your zodiac sign by inputting the date, month and year you were born</p>
                                    </div> 
                                    <button className="bg-white border-2 border-black mx-32 p-2 rounded-3xl    h-[3rem] w-[8rem] gap-2">
                                        <Link href="https://github.com/KainaAja/crud-mobil">
                                            <div className="justify-center flex items-center">
                                                GitHub <FaGithub className="ml-2" />
                                            </div>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="project-item w-[300px] md:w-[400px]">
                            <div className="bg-[#adadad] flex-[1 1 30px] p-[16px]  rounded-[.5rem] divide-solid relative mt-[3rem] focus:scale-100 hover:scale-105">
                                <div className="relative text-center pt-2rem overflow-hidden">
                                    <Image
                                        src="/images/project3.png"
                                        alt="profile"
                                        width={400}
                                        height={400}
                                    />
                                    <div className="description text-center">
                                    <h3 className="text-xl font-extrabold">LIBRARY WEBSITE</h3>
                                        <p className="py-3">A simple website program that shows books about flowers using the Google API key as the data for the program </p>
                                    </div>
                                    <button className="bg-white border-2 border-black mx-32 p-2 rounded-3xl    h-[3rem] w-[8rem] gap-2">
                                        <Link href="https://github.com/KainaAja/perpustakaan">
                                            <div className="justify-center flex items-center">
                                                GitHub <FaGithub className="ml-2" />
                                            </div>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
        </>
    );
}

export default Project;
