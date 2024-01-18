import React, { useState, useEffect } from "react";
// import Threejs from "../Components/threejs";
import { motion } from "framer-motion";
import ossSphere from "../Components/ossSphere";
import Slider from "../Components/slider";
import HeadingMob from "../Components/HeadingMob";
import HeadingMain from "../Components/HeadingMain";
import ComingSoon from "../assets/images/comingSoon.svg";
import { Canvas } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Text3D } from "@react-three/drei";
import PlaceholderLoading from 'react-placeholder-loading'
import Form from "../Components/Form";
export default function ProblemStatement() {
  const [width, setWidth] = useState(window.innerWidth);

  const [sphereSize, setSphereSize] = useState(
    width > 640 ? Math.min(window.innerWidth, window.innerHeight) / 380 : 3
  );
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setSphereSize(
        width > 640 ? Math.min(window.innerWidth, window.innerHeight) / 320 : 3
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="">
        <Slider text={["Problem Statement"]} theme="light" />
      </div>

      <div className="w-full justify-center pb-8 mt-4">
        <HeadingMob name="Statement" />
      </div>
      <div className="w-screen flex justify-center mx-auto align-middle">
        
          {/* <div className="w-full flex flex-row gap-2">
          <PlaceholderLoading shape="rect" width={500} height={150} colorStart="#fff" colorEnd="#000" />
          <PlaceholderLoading shape="rect" width={500} height={150} />
          </div>
          <div className="w-full flex flex-row gap-2">
          <PlaceholderLoading shape="rect" width={500} height={150} />
          <PlaceholderLoading shape="rect" width={500} height={150} />
          </div> */}
          <Form />
       
      </div>
{/* 
      <div className="w-full h-full flex justify-center">
        <h2 className="text-black">Coming Soon</h2>
      </div> */}

      <div className="flex relative justify-center -mt-20">
        <HeadingMain name="Problem Statement" />
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
