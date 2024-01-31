"use client";
import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import {sendEmail} from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

const MyContact = () => {

  

  return (
    <section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 px-4 lg:px-28  gap-x-4 md:gap-x-20 pt-[100px] pb-[250px]">
        <div className="col-span-12 lg:col-span-5 place-self-center mt-4 lg:mt-0 bg-white w-[15rem] lg:w-[15rem] lg:h-[26rem] rounded-lg p-4 lg:p-9">
          <h1 className="mb-4 text-xl font-extrabold text-center">My Media Sosial</h1>
          <div className=" flex flex-col">
            <div className="flex items-center pt-2 lg:pt-6">
              <Link href="https://www.instagram.com/kainalagi/" className="flex items-center">
              <RiInstagramFill className="size-12" />
              <h2 >:@Kainalagi</h2>
              </Link>
            </div>
            <div className="flex items-center pt-2 lg:pt-12">
              <Link href="https://github.com/" className="flex items-center">
              <FaGithub className="size-12 " />
              <h2>:KainaAja</h2>
              </Link>
            </div>
            <div className="flex items-center pt-2 lg:pt-12">
              <FaDiscord className="size-12 " />
              <h2>:@Kainaaja</h2>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 place-self-center mt-4 lg:mt-0 bg-white w-[25rem] md:w-[35rem] h-auto lg:h-[26rem] rounded-lg p-4 lg:p-9">
          <h1 className="mb-8 text-xl font-extrabold text-center">Send Me Email</h1>
          <form className="flex flex-col" 
            action={ async (formData) => { 
              const { data, error } = await sendEmail(formData);

              if(error){
                toast.error(error);
                return;
              }
              toast.success("Email sent succesfully!");

            }}>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="mb-2">Email:</label>
              <input type="email" id="email" name="email" className="border-black border-solid border-2 rounded-lg pl-2 h-10" placeholder="email" required maxLength={500}/>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="mb-2">Message:</label>
              <textarea id="message" name="message" className="border-black border-solid border-2 rounded-lg pl-2 h-20" style={{ resize: "none" }} placeholder="Input message" required  maxLength={5000} />
            </div>
            <SubmitBtn/>
        
          </form>
        </div>
      </div>
        <div className="wave-footer">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
            <h1 className="text-white relative text-center bottom-20">created By : &copy; 2024 Kaina</h1>
        </div>
    </section>
  );
};

export default MyContact;
