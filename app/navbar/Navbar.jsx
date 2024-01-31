"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () =>{

    const [isClick, setisclick] = useState(false);

    const toggleNavbar = () =>{
        setisclick(!isClick)
    }

    const scrollTo = (id) => {
        scroll.scrollTo(id, {
          duration: 800, // Adjust the duration as needed
          smooth: "easeInOutQuart", // You can choose a different easing function
        });
      };

    return(
        <>
            <nav className="bg-black fixed top-0 left-0 right-0 z-50 ">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:mx-0">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="logo flex-shrink-0">
                                <ScrollLink
                                to="intro"
                                className=" text-white font-serif text-2xl  hover:cursor-pointer"
                                smooth={true}
                                onClick={() => scrollTo("intro")}
                                >
                                KAINA
                                </ScrollLink>
                            </div>
                        </div>
                        <div className="navigasi hidden md:flex items-end space-x-4 ">
                            <div className="flex items-end space-x-4 ">
                                <ScrollLink
                                to="about"
                                className="btn text-white hover:bg-white hover:text-black rounded-lg p-2 hover:cursor-pointer"
                                smooth={true}
                                onClick={() => scrollTo("about")}
                                >
                                About
                                </ScrollLink>
                                <ScrollLink
                                to="project"
                                className="btn text-white hover:bg-white hover:text-black rounded-lg p-2 hover:cursor-pointer"
                                smooth={true}
                                onClick={() => scrollTo("project")}
                                >
                                Project
                                </ScrollLink>
                                <ScrollLink
                                to="contact"
                                className="btn text-white hover:bg-white hover:text-black rounded-lg p-2 hover:cursor-pointer"
                                smooth={true}
                                onClick={() => scrollTo("contact")}
                                >
                                Contact
                                </ScrollLink>
                                <button className="bg-white rounded-3xl border-2  hover:border-rose-600 scale-75 hover:scale-90 p-2 relative left-4 text-xl font-extrabold">
                                <a
                                    href="https://drive.google.com/uc?export=download&id=1xB-eHS_txoU1hv2RCckk2TyJ2xfiPhkl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download CV
                                </a>
                                </button>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    onClick={toggleNavbar}>

                                    {isClick ?(
                                        <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                        />
                                        </svg>
                                    ) : (
                                        <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6H16M4 12h16m-7 6h7"
                                        />
                                        </svg>
                                    )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick &&(
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <button className="text-white block hover:bg-white hover:text-black rounded-lg p-2 w-full text-left">
                                    <Link href="https://drive.google.com/uc?export=download&id=1xB-eHS_txoU1hv2RCckk2TyJ2xfiPhkl/">Download CV</Link>
                                </button>
                                <ScrollLink
                                to="about"
                                className="btn text-white hover:bg-white hover:text-black block rounded-lg p-2 hover:cursor-pointer"
                                smooth={true}
                                onClick={() => scrollTo("about")}
                                >
                                About
                                </ScrollLink>
                                <ScrollLink
                                to="project"
                                className="btn text-white hover:bg-white hover:text-black block rounded-lg p-2 hover:cursor-pointer"
                                smooth={true}
                                onClick={() => scrollTo("project")}
                                >
                                Project
                                </ScrollLink>
                                <ScrollLink
                                to="contact"
                                className="btn text-white hover:bg-white hover:text-black block rounded-lg p-2 hover:cursor-pointer"
                                smooth={true}
                                onClick={() => scrollTo("contact")}
                                >
                                Contact
                                </ScrollLink>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;