"use client";
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import axios from "axios";
import { useState, useEffect } from 'react';

const  Introduction = () => {
  const [error, setError] = useState(null);
  const [introduction, setIntroduction] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:1337/api/introduction?populate=*")
      .then(response => {
        setIntroduction(response.data.data.attributes);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!introduction) {
    return <div>Loading...</div>;
  }
    
  return (
    <section id="intro">
      <div className="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>  

    
        <div className="grid grid-cols-1 lg:grid-cols-11 px-20 lg:px-[105px] 2xl:px-[170px] pt-36 lg:pt-32 xl:pt-[100px] pb-10">
          {/* Image column on the left */}
          <div className="col-span-4 place-self-center lg:mt-0">
            <div className="w-[370px] xl:w-[400px] h-[370px] xl:h-[400px] relative">
              <Image
                src="http://localhost:1337/uploads/profile_6ff09b7741.png"
                alt="profile"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={400}
                height={400}
                priority
              />
            </div>
          </div>

          {/* Text column on the right */}
          <div className="col-span-7 place-self-center pt-12 pl-0 lg:pl-10 ">
            <span className="text-white font-extrabold mb-4 text-tranparent bg-clip-text text-3xl 2xl:text-4xl ">
              Hai, Im {""}
            </span>
            <h1 className="text-white mb-2 text-lg font-extrabold">
              <TypeAnimation
                sequence={[
                  'Komang Krisna Puspanta',
                  1000,
                  'Student From SMK TI BALI GLOBAL DENPASAR',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.5em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </h1>          
            
              <p  className="text-[#c2c5c7] text-lg mb-6 lg:text-xl 2xl:text-2xl">
                  {introduction.desc}
              </p> 
              
          </div>
        </div> 
      
    </section>
  );
};


export default Introduction;

