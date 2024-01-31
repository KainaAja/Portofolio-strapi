"use client";
import Navbar from "./navbar/Navbar";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import MyContact from "./components/MyContact";
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {

  

  return ( 
    <>
      <Navbar/>
      <main className="max-w-max mx-auto flex max-h-max flex-col mt-[64px] !scroll-smooth main">
      <Introduction />
      <AboutMe />
      </main>
      <footer className="max-w-max mx-auto flex max-h-max flex-col  container">
            <Project/>
            <MyContact/>
      </footer>
      <Toaster position="top-center" reverseOrder={false}/>
    </>
  );
};
