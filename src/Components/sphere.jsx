import * as THREE from "three";
import { useRef, useState, onEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls , CameraShake} from "@react-three/drei";
import { TextureLoader } from "three";
import myTextureImage from "../assets/images/Logo1.png";

const Sphere = ({ position, args, color, text }) => {
  const ref = useRef();
  const texture = new TextureLoader().load(myTextureImage);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    // ref.current.rotation.x += delta;
    // ref.current.rotation.y -= delta;
    // const speed = isHovered ? 1 : 2;
    // ref.current.rotation.y += delta* speed;
  });

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enableRotate={true}
        rotateSpeed={0.5}
        autoRotate
      />

      {/* <CameraShake
        // controls={{
        //   current: '[Circular]'
        // }}
        maxPitch={0.05}
        maxRoll={0.05}
        maxYaw={0.05}
        pitchFrequency={0.8}
        rollFrequency={0.8}
        yawFrequency={0.8}
      /> */}
      <group>
        <mesh
          position={position}
          ref={ref}
          onPointerEnter={(event) => (
            event.stopPropagation(), setIsHovered(true)
          )}
          onPointerLeave={() => setIsHovered(false)}
          // onClick={() => setIsClicked(!isClicked)}
          // scale={isClicked ? 1.5 : 1}
        >
          <sphereGeometry args={args} />
          <meshStandardMaterial
            color={isHovered ? "white" : "white"}
            map={texture}
          />
          {/* <MeshWobbleMaterial factor={25} speed={4} color={"#"} /> */}
        </mesh>
      </group>
    </>
  );
};

export default Sphere;
