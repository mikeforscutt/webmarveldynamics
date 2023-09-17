"use client"; // This is a client component 👈🏽
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Mike from "../../public/mikey.png";
import design from "../../public/icon-design.png";
import code from "../../public/icon-code.png";
import consult from "../../public/icon-cms.png";
import Web1 from "../../public/bms-.png";
import Web2 from "../../public/sc_shop.png";
import Web3 from "../../public/web3.png";
import linda from "../../public/linda.png";
import mac from "../../public/aj.png";

import { BsFillMoonStarsFill } from "react-icons/bs";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    const sections = document.querySelectorAll(".slide-in");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='parallax-container'>
        <main
          id='home'
          ref={target}
          className='relative px-10 dark:bg-gray-900 md:px-20 lg:px-40'
        >
          <section className='slide-in'>
            <nav className='py-10 mb-12 flex justify-between '>
              <h1 className='text-xl font-roboto_bold dark:text-white'>
                WebMarvelDynamics
              </h1>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => {
                      setDarkMode(!darkMode);
                    }}
                    className='cursor-pointer text-2xl dark:fill-white'
                  />
                </li>
                <li>
                  <a
                    href='/Mike_Forscutt_CV_.docx'
                    className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white bg-cyan-500  px-4 py-2 rounded-md mx-4'
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-5xl py-2 text-teal-500 font-medium md:text-6xl'>
                Hi I'm Mike...
              </h2>
              <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>
                Web Developer and Designer
              </h3>
              <p className='text-md py-5 leading-8 md:text-xl max-w-lg mx-auto dark:text-white'>
                Freelancer providing services for programming and design content
                needs. Let's collaborate and bring your digital vision to life!
              </p>
            </div>
            <div className='flex justify-center gap-10 dark:text-white'>
              <a href='https://twitter.com/MForscutt'>
                <AiFillTwitterCircle className='w-10 h-10 mx-2 ' />
              </a>
              <a href='https://www.linkedin.com/in/mike-forscutt-a31502195'>
                <AiFillLinkedin className='w-10 h-10 mx-2' />
              </a>
              <a href='https://github.com/mikeforscutt'>
                <AiFillGithub className='w-10 h-10 mx-2' />
              </a>
            </div>
          </section>
          <section className='pt-20 pb-10 flex justify-center '>
            <div className='relative slide-in bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mb-10 mx-auto overflow-hidden md:h-96 md:w-96'>
              <Image src={Mike} alt='mikey' layout='fill' objectFit='cover' />
            </div>
          </section>

          <section id='services' className='services-section'>
            <h3 className='text-3xl py-1 dark:text-white'>Services I Offer</h3>
            <p className='text-md py-2 leading-8  dark:text-white'>
              In my portfolio, you'll find a showcase of my diverse range of
              projects, highlighting my proficiency in front-end development,
              user interface design, and responsive web design. From sleek and
              modern corporate websites to creative and interactive web
              applications, each project reflects my attention to detail,
              creativity, and commitment to delivering high-quality work.
            </p>
            <p className='text-md py-2 leading-8 dark:text-white'>
              I take pride in staying up-to-date with the latest industry trends
              and technologies. Leveraging my expertise in HTML, CSS,
              JavaScript, and various frameworks and libraries, I strive to
              create visually stunning and user-friendly websites that not only
              meet but exceed client expectations.
            </p>
            <div className='lg:flex gap-10 '>
              <div className='text-center shadow-lg bg-white text-gray-500 p-10 rounded-xl my-10 lg:flex-1 slide-in'>
                <Image
                  src={code}
                  alt='design'
                  width={100}
                  height={100}
                  className='rounded-xl mx-auto'
                />
                <h3 className='text-lg font-medium pt-8 pb-2 dark:text-black'>
                  Custom Web Design
                </h3>
                <p className='py-2  dark:text-black'>
                  Create stunning and unique website designs tailored to your
                  brand identity and target audience. Craft visually appealing
                  layouts that capture attention and provide an exceptional user
                  experience.
                </p>
              </div>
              <div className='text-center shadow-lg bg-white text-gray-500  p-10 rounded-xl my-10 lg:flex-1 dark:text-black slide-in'>
                <Image
                  src={design}
                  alt='code'
                  width={100}
                  height={100}
                  className='rounded-xl mx-auto'
                />
                <h3 className='text-lg font-medium pt-8 pb-2 '>
                  Beautiful Designs
                </h3>
                <p className='py-2  '>
                  Craft visually appealing layouts that capture attention and
                  provide an exceptional user experience.
                </p>
                <h4 className='text-teal-600 py-4 '>Design Tools I Use</h4>
                <p className='text-grey-800 py-1 '>Photoshop</p>
                <p className='text-grey-800 py-1 '>Figma</p>
                <p className='text-grey-800 py-1 '>Sketch</p>
              </div>
              <div className='text-center shadow-lg bg-white text-gray-500 dark:text-black  p-10 rounded-xl my-10 lg:flex-1 slide-in'>
                <Image
                  src={consult}
                  alt='code'
                  width={100}
                  height={100}
                  className='rounded-xl mx-auto'
                />
                <h3 className='text-lg font-medium pt-8 pb-2 '>
                  Responsive Development
                </h3>
                <p className='py-2 '>
                  Develop websites that seamlessly adapt to various screen sizes
                  and devices, ensuring a consistent and user-friendly
                  experience across desktops, tablets, and smartphones.
                </p>
              </div>
            </div>
          </section>
          <section id='testimonial' className='testimonials-section'>
            <h3 className='text-3xl py-1 dark:text-white'>
              What People Are Saying About Us
            </h3>

            <div className='lg:flex gap-10 '>
              <div className='text-center shadow-lg bg-white text-gray-500  p-10 rounded-xl my-10 lg:flex-1 dark:text-black slide-in'>
                <Image
                  src={linda}
                  alt='code'
                  width={100}
                  height={100}
                  className='rounded-xl mx-auto'
                />
                <h3 className='text-lg font-medium pt-8 pb-2 '>
                  Would happily recommend you great guy, great work ethic and
                  super professional
                </h3>
                <p>
                  &mdash; Linda Sandford, Retail Manager at HESTERCOMBE GARDENS
                  TRUST
                </p>
              </div>
              <div className='text-center shadow-lg bg-white text-gray-500 dark:text-black  p-10 rounded-xl my-10 lg:flex-1 slide-in'>
                <Image
                  src={mac}
                  alt='code'
                  width={100}
                  height={100}
                  className='rounded-xl mx-auto'
                />
                <h3 className='text-lg font-medium pt-8 pb-2 '>
                  The website looks great! Thanks for everything!
                </h3>
                <p>&mdash; Mac McDermott, Director - BMS Publishing</p>
              </div>
            </div>
          </section>
          <section id='portfolio'>
            <div>
              <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
              <p className='text-md py-2 leading-8  dark:text-white'>
                In my portfolio, you'll find a showcase of my diverse range of
                projects, highlighting my proficiency in front-end development,
                user interface design, and responsive web design. From sleek and
                modern corporate websites to creative and interactive web
                applications, each project reflects my attention to detail,
                creativity, and commitment to delivering high-quality work.
              </p>
              <p className='text-md py-2 leading-8  dark:text-white'></p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap slide-in'>
              <div className='basis-1/3 flex-1'>
                <a href='https://www.bmspublishing.co.uk'>
                  <Image
                    src={Web1}
                    alt='portfolio image 1'
                    className='rounded-xl mx-auto object-cover'
                  />
                </a>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image
                  src={Web2}
                  alt='portfolio image 2'
                  className='rounded-xl mx-auto object-cover'
                />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image
                  src={Web3}
                  alt='portfolio image 3'
                  className='rounded-xl mx-auto object-cover'
                />
              </div>
            </div>
          </section>
        </main>
        <footer className='bg-gray-800 text-white py-4 w-full'>
          <div className='mx-auto px-4'>
            <div className='flex justify-between items-center'>
              <div className='text-sm'>
                &copy; 2023 WebMarvelDynamics All rights reserved.
              </div>
              <div className='flex space-x-4'>
                <a href='#home' className='text-gray-300 hover:text-white'>
                  Home
                </a>
                <a href='#services' className='text-gray-300 hover:text-white'>
                  Services
                </a>
                <a href='#portfolio' className='text-gray-300 hover:text-white'>
                  Portfolio
                </a>

                <a
                  href='mailto:mikeforscutt@gmail.com'
                  className='text-gray-300 hover:text-white'
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
