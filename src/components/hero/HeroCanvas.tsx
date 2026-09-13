"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import type { Group } from "three";
import * as THREE from "three";

/**
 * HeroCanvas — the single sophisticated 3D moment of the site.
 * An engineered wireframe form: a geodesic core with a fine ring,
 * rendered as restrained lines and low-opacity shells rather than
 * a glossy, game-like object.
 *
 * Behaviour:
 * - Subtle group rotation that gently follows the pointer (desktop).
 * - Gentle levitation via drei <Float> only when motion is allowed.
 * - prefers-reduced-motion: static composition, no spin, no float.
 * - Renders nothing demanding; must never hide the typography.
 */

function useReducedMotionFlag() {
  const reduce = useRef(false);
  if (typeof window !== "undefined") {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  return reduce;
}

/** Central engineered form. */
function EngineerForm() {
  const group = useRef<Group>(null);
  const rotate = useRef({ x: 0, y: 0 });

  // Gentle pointer-follow (lerped). Mouse parallax, not constant motion.
  useFrame((state) => {
    if (!group.current) return;
    const targetX = state.pointer.x * 0.25;
    const targetY = state.pointer.y * 0.18;
    rotate.current.x = THREE.MathUtils.lerp(rotate.current.x, targetY, 0.06);
    rotate.current.y = THREE.MathUtils.lerp(rotate.current.y, targetX, 0.06);
    group.current.rotation.x = rotate.current.x;
    group.current.rotation.y = rotate.current.y;
  });

  return (
    <group ref={group} rotation={[0.4, -0.6, 0]}>
      {/* Core — thin wireframe geodesic (the engineering signature). */}
      <mesh>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial wireframe color="#16181d" transparent opacity={0.85} />
      </mesh>

      {/* Secondary shell — larger, fainter, offset. */}
      <mesh scale={1.7}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial wireframe color="#2c4f86" transparent opacity={0.18} />
      </mesh>

      {/* Fine orbit ring running through the form for depth. */}
      <mesh rotation={[Math.PI / 2, 0.3, 0]}>
        <torusGeometry args={[1.55, 0.004, 8, 96]} />
        <meshBasicMaterial color="#16181d" transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

function Scene() {
  const reduce = useReducedMotionFlag();

  return (
    <>
      <Float
        speed={1.1}
        rotationIntensity={reduce ? 0 : 0.15}
        floatIntensity={reduce ? 0 : 0.35}
      >
        <EngineerForm />
      </Float>

      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.22}
        scale={8}
        blur={2.8}
        far={3}
        color="#16181d"
      />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop="always"
      >
        <Scene />
      </Canvas>
    </div>
  );
}