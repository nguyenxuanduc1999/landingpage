import { useEffect, useRef } from "react";
import * as THREE from "three";

export type MainParticlesTheme = "light" | "dark";

type MainParticlesProps = {
  theme?: MainParticlesTheme;
  className?: string;
};

/** Full-bleed particle network (Three.js) — mirrors typical landing “main-particles” canvases. */
export function MainParticles({ theme = "light", className }: MainParticlesProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = wrapRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 120);
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.setAttribute("data-engine", `three.js r${THREE.REVISION}`);
    container.appendChild(renderer.domElement);

    const particleCount = 420;
    const spreadX = 52;
    const spreadY = 32;
    const spreadZ = 24;

    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spreadX;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spreadZ;
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const pointColor = theme === "light" ? 0x64748b : 0x94a3b8;
    const lineColor = theme === "light" ? 0xcbd5e1 : 0x475569;

    const pointsMat = new THREE.PointsMaterial({
      color: pointColor,
      size: theme === "light" ? 0.11 : 0.12,
      transparent: true,
      opacity: theme === "light" ? 0.55 : 0.45,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(geom, pointsMat);

    const maxDist = theme === "light" ? 7.5 : 8.5;
    const lineVerts: number[] = [];
    const tmp = new THREE.Vector3();
    const tmp2 = new THREE.Vector3();
    for (let i = 0; i < particleCount; i++) {
      tmp.fromBufferAttribute(geom.attributes.position as THREE.BufferAttribute, i);
      for (let j = i + 1; j < particleCount; j++) {
        tmp2.fromBufferAttribute(geom.attributes.position as THREE.BufferAttribute, j);
        if (tmp.distanceTo(tmp2) < maxDist) {
          lineVerts.push(tmp.x, tmp.y, tmp.z, tmp2.x, tmp2.y, tmp2.z);
        }
      }
    }

    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute("position", new THREE.Float32BufferAttribute(lineVerts, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: theme === "light" ? 0.22 : 0.18,
      depthWrite: false,
    });
    const lines = new THREE.LineSegments(lineGeom, lineMat);

    const root = new THREE.Group();
    root.add(points);
    root.add(lines);
    scene.add(root);

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      root.rotation.y += 0.00035;
      root.rotation.x += 0.00008;
      renderer.render(scene, camera);
    };

    const setSize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };

    const ro = new ResizeObserver(setSize);
    ro.observe(container);
    setSize();
    animate();

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      geom.dispose();
      pointsMat.dispose();
      lineGeom.dispose();
      lineMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  return (
    <div ref={wrapRef} className={className ?? ""} />
  );
}
