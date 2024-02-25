"use client";
import { BsChevronCompactLeft,BsChevronCompactRight } from "react-icons/bs";
import TabButton from "./TabButton";
import axios from "axios";
import { useEffect, useState, useTransition } from "react";


const TAB_DATA = [
    {
        title: "Skills",
        id: "Skills",
        content: (
            <ul>
                <li>Node.js</li>
                <li>Html</li>
                <li>css</li>
                <li>Tailwind</li>
                <li>PHP</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "Education",
        content: (
            <ul>
                <li>SDN 1 DENPASAR</li>
                <li>SMP PGRI 5 DENPASAR</li>
                <li>SMK TI BALI GLOBAL DENPASAR</li>
            </ul>
        )
    },
    {
        title: "Hobby",
        id: "Hobby",
        content: (
            <ul>
                <li>Badminton</li>
                <li>Photo of the Surrounding Environment</li>
                <li>Listening to music</li>
                <li>Playing games</li>
            </ul>
        )
    },
]


const AboutMe = () => {

    const [error, setError] = useState(null);
    const [about, setAbout] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [tab, setTab] = useState("Skills"); 
    const [isPending ,startTransition] = useTransition();

    useEffect(() => {
        axios
        .get("http://127.0.0.1:1337/api/about")
        .then(response => {
            setAbout(response.data.data.attributes);
        })
        .catch(error => {
            setError(error);
        });
    }, []);

    if (error) {
        return <div>An error occurred: {error.message}</div>;
    }

    if (!about) {
        return <div>Loading...</div>;
    }




    const slides = [
    {
      url: 'http://localhost:1337/uploads/foto1_b137cfca71.jpg'  
    },
    {
        url: 'http://localhost:1337/uploads/foto2_e695252488.jpg'  
      },
      {
        url: 'http://localhost:1337/uploads/foto3_9642b147ac.jpg'  
      },
    ];

    

   

    const prevSlide = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    

    const handleTabChange = (id) => {      
            setTab(id);
    };
    const selectedTab = TAB_DATA.find((t) => t.id === tab);

    return (
        <>
        
        <section id="about" >
            <div className="grid grid-cols-1 lg:grid-cols-12 px-20 lg:px-[105px] 2xl:px-[170px] pt-[64px] 2xl:mt-[85px]">
                <div className="col-span-6 place-self-center ">
                    <h1 className="text-white font-extrabold mb-4 text-tranparent bg-clip-text text-3xl 2xl:text-4xl ml-auto">
                        {about.title}
                    </h1>
                    <p className="text-[#c2c5c7] text-lg mb-6 lg:text-xl 2xl:text-2xl">
                        {about.desc}
                    </p>
                    <div className="flex flex-row ">
                        <TabButton
                        selectTab={() => handleTabChange("Skills")}   
                        active={tab === "Skills"}
                        > 
                        {""}    
                        Skills{""}
                        </TabButton>
                        <TabButton
                        selectTab={() => handleTabChange("Education")}   
                        active={tab === "Education"}
                        > 
                        {""}    
                        Education{""}
                        </TabButton>
                        <TabButton
                        selectTab={() => handleTabChange("Hobby")}   
                        active={tab === "Hobby"}
                        > 
                        {""}    
                        Hobby{""}
                        </TabButton>
                    </div>
                    <div className="mt-3 ml-2 text-white">{selectedTab ? selectedTab.content : null}</div>
                </div>
                <div className="slider w-[225px] h-[540px] py-16 col-span-6 place-self-center lg:mt-0 flex items-center justify-center relative  group ">
                    <h1 className="[writing-mode:vertical-lr] text-white text-2xl">Examples of Hobby Photo Results</h1>
                    <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-[225px] h-full rounded-2xl bg-cover duration-500 ">
                        {/*Left Arrow*/}
                        <div className="hidden group-hover:block absolute top-[50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer left-9">
                            <BsChevronCompactLeft onClick={prevSlide} size={20} />
                        </div>
                        {/*Right Arrow*/}
                        <div className="hidden group-hover:block absolute top-[50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer right-0">
                            <BsChevronCompactRight onClick={nextSlide} size={20}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wave-opacity">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
       
        </>
    );
    
};

export default AboutMe;
