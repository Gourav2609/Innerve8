import React, { useState, useEffect } from "react";
// import Threejs from "../Components/threejs";
import ossSphere from "../Components/ossSphere";
import Slider from "../Components/slider";
// import ComingSoon from "../assets/images/comingSoon.svg";
import { Canvas } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Text3D } from "@react-three/drei";
import PlaceholderLoading from "react-placeholder-loading";
import Form from "../Components/Form";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ComingSoon from "../assets/images/comingSoon.png";
import Marquee from "react-fast-marquee";
import microsoft from "../assets/images/msoft.png";
import StayTuned from "../assets/images/stayTuned.png";
import mro from "../assets/images/MRRO.png";
import accops from "../assets/images/Accops.png"

export default function ProblemStatement() {
  return (
    <>
      <div className="mb-20" id="problem">
        <div className="">
          <Slider text={["Problem Statement"]} theme="light" />
          {/* <Slider1
            text={[
              "Submit the idea for the sponsored statements, qualify for both prizes",
            ]}
            theme="light"
          /> */}
        </div>

        <div className="w-full justify-center pb-8 mt-4">
          {/* <HeadingMob name="Sponsors" /> */}
          <HeadingMob name="Sponsors' Statement" />
        </div>
        {/* <div className="w-full">
          <p className="text-black">
            You can give a different submission for these statements other than
            your idea submitted for the hackathon. You will be eligible
            for both prizes.
          </p>
        </div> */}
        <div className="w-screen flex flex-col  justify-center items-center mx-auto align-middle relative ">
          <div className="w-full px-4 flex flex-wrap gap-4 items-center justify-center my-2">
            <ProblemStatementText
              image={microsoft}
              text="Hack your way into creating a bot that does cool things and can be plugged into GroupMe Chat App. Build a bot that can do amazing things and connect with GroupMe chat app"
              link1="https://unstop.com/hackathons/innerve-8-army-institute-of-technology-ait-pune-860812"
              link2="https://docs.google.com/document/d/1awT_3Kl4qiNl5Ws4HLW85YZ8LmPQR13yxBsrVM85Tek/edit?usp=sharing"
            />

            <ProblemStatementText
              image={mro}
              text="Automate medical form data extraction for efficient healthcare management by reducing manual efforts, ensuring accuracy, and accelerating the process for handwritten and digital documents."
              link1="https://unstop.com/hackathons/innerve-8-army-institute-of-technology-ait-pune-860812"
              link2="https://docs.google.com/document/d/1wqcy-MW1IsoNnluLUhzseTEAks2OPeNt7zSyt5M6-WA/edit?usp=sharing"
            />
            </div>
            <div className="w-full px-4 flex flex-wrap gap-4 items-center justify-center my-2">

            <ProblemStatementText
              image={accops}
              text="Build a Windows user behavior analysis system to detect insider threats, compromised accounts, unauthorized access, and abnormal behavior through defined use cases, hypotheses, data processing, and reporting for effective threat mitigation."
              link1="https://unstop.com/hackathons/innerve-8-army-institute-of-technology-ait-pune-860812"
              link2="https://docs.google.com/document/d/1Qo5Qfmaet5xNCoxsWDNKj2Mz4pDEiieFnjghrQAyWc0/edit?usp=sharing"
            />
          </div>

          {/* <Form /> */}
        </div>

        {/* <div
            className=""
          >
            <CommingSoonText />
          </div> */}

        <div className="flex flex-col w-full items-center justify-center my-4">
          <div className="w-full flex justify-center">
            {/* <p className="text-md text-[#212121] sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl pt-6  landing-text select-none">
              Stay Tuned for More Statements...
            </p> */}
          </div>
          {/* <p className="text-md text-[#212121] sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl  landing-text select-none">
            Coming Soon...
          </p> */}
        </div>

        <div className="flex flex-col relative justify-center">
          {/* <HeadingMain name="Sponsors" /> */}
          <HeadingMain name="Sponsors' Statements" />
        </div>
      </div>
    </>
  );
}

const ComingSoonComponent = () => {
  return (
    <div className="w-full max-w-xl my-3 bg-black p-8 h-[150px] justify-center align-middle">
      <p className="text-white text-center text-xl">Statement</p>
    </div>
  );
};

const HeadingMob = ({ name }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      });
    }
  }, [inView, controls]);

  return (
    <div className="pt-4 text-center 2xl:hidden tracking-[8px] font-medium text-[34px] sm:text-[64px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={controls}
        className="tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-[#FFFFFF] to-[rgba(55,47,47,0.5)] whitespace-nowrap"
        whileInView={{ y: -10, scale: 1, duration: 1 }}
        transition={{ type: "just", stiffness: 150 }}
      >
        {name}
      </motion.div>
    </div>
  );
};

const HeadingMain = ({ name }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      });
    }
  }, [inView, controls]);

  return (
    <div className="text-center 2xl:block hidden tracking-[10px] mt-20 bg-clip-text  font-medium text-[100px] sticky text-gradient-to-b from-white via-white to-[rgba(55, 47, 47, 0.5)]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80, scale: 0.8 }}
        whileInView={{ y: -50, scale: 1.2, duration: 5 }}
        transition={{ type: "just", stiffness: 110 }}
        animate={controls}
        className=" tracking-tight  text-transparent bg-clip-text bg-gradient-to-t from-[#FFFFFF] to-[rgba(55,47,47,0.5)] whitespace-nowrap"
      >
        {name}
      </motion.div>
    </div>
  );
};

const CommingSoonText = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <motion.div
        initial={{ scale: 1.3 }}
        whileHover={{ scale: 1.4, rotate: [0, 2, 0], duration: 0.1 }}
      >
        <img src={StayTuned} className="h-10 sm:h-14 md:h-20 lg:h-24" />
      </motion.div>
    </div>
  );
};

const Slider1 = ({ text }) => {
  return (
    <>
      <div className="max-w-[1920px] w-screen z-[-1] select-none h-fit mt-4">
        <Marquee autoFill="true" speed={80}>
          {text.map((item, index) => (
            <TextSlide1 text={item} key={index} />
          ))}
        </Marquee>
      </div>
    </>
  );
};

const TextSlide1 = ({ text }) => {
  return (
    <>
      <div className="flex items-center justify-center text-7xl max-w-fit h-fit">
        <h1
          className={`tracking-tight text-xl md:text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-t from-[#d9d9d9] to-[#747474] whitespace-nowrap px-3`}
        >
          {text}
        </h1>
        <svg
          className="w-5 md:w-10 lg:w-14 h-5 md:h-10 lg:h-14"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41 42"
          fill="none"
        >
          <rect
            x="0.618164"
            y="0.85083"
            width="40.2688"
            height="40.2985"
            rx="2.68558"
            fill="#d9d9d9"
            fillOpacity="0.4"
          />
          <path
            d="M38.372 20.9996C38.376 21.5161 38.2191 22.0211 37.9231 22.4442C37.6271 22.8674 37.2067 23.1878 36.7204 23.3608L26.7412 26.9924L23.1139 36.9773C22.9351 37.4593 22.6132 37.875 22.1914 38.1686C21.7696 38.4622 21.2682 38.6195 20.7544 38.6195C20.2406 38.6195 19.7392 38.4622 19.3174 38.1686C18.8956 37.875 18.5737 37.4593 18.3949 36.9773L14.766 26.9814L4.78845 23.3608C4.30679 23.1819 3.89139 22.8597 3.59804 22.4376C3.3047 22.0155 3.14746 21.5137 3.14746 20.9996C3.14746 20.4854 3.3047 19.9836 3.59804 19.5615C3.89139 19.1394 4.30679 18.8172 4.78845 18.6383L14.777 15.0067L18.3949 5.02184C18.5737 4.53983 18.8956 4.12412 19.3174 3.83055C19.7392 3.53699 20.2406 3.37964 20.7544 3.37964C21.2682 3.37964 21.7696 3.53699 22.1914 3.83055C22.6132 4.12412 22.9351 4.53983 23.1139 5.02184L26.7428 15.0178L36.7204 18.6383C37.2067 18.8114 37.6271 19.1317 37.9231 19.5549C38.2191 19.9781 38.376 20.483 38.372 20.9996Z"
            fill="#f6f6f6"
          />
        </svg>
      </div>
    </>
  );
};

const ProblemStatementText = ({ image, text, link1, link2 }) => {
  return (
    <div class="max-w-xl p-6 bg-white border border-gray-200 rounded-lg ">
      <div className="w-full flex justify-center">
        <img src={image} className="max-h-16 max-w-16" />
      </div>
      {/* <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a> */}
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{text}</p>
      <div className="space-x-4">
        <a
          href={link1}
          target="_blank"
          class="inline-flex items-center text-blue-600 hover:underline"
        >
          Apply Now
          <svg
            class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a>

        <a
          href={link2}
          target="_blank"
          class="inline-flex items-center text-blue-600 hover:underline"
        >
          Read More
          <svg
            class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
