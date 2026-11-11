'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width === 0 || height === 0) return;

    // Scene, Camera, High-Precision WebGL Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    // Un-zoomed camera distance so the platter sits elegantly with generous breathing room
    camera.position.set(0, 0, 11.0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Texture Loader with Anisotropic Filtering for Razor-Sharp Clarity
    const textureLoader = new THREE.TextureLoader();
    const platterTexture = textureLoader.load('/images/mandi-hero-platter.png');
    platterTexture.colorSpace = THREE.SRGBColorSpace;
    platterTexture.generateMipmaps = true;
    platterTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    platterTexture.minFilter = THREE.LinearMipmapLinearFilter;
    platterTexture.magFilter = THREE.LinearFilter;

    // Platter Dimensions (Refined Scale filling ~55% of view with graceful margins)
    const platterRadius = 1.9;

    // 1. Photographic Top Dish Face (100% Crisp Photographic Reproduction)
    // CircleGeometry in XY plane matches the 2048x2048 circular platter texture precisely
    const photoGeo = new THREE.CircleGeometry(platterRadius, 64);
    const photoMat = new THREE.MeshBasicMaterial({
      map: platterTexture,
      transparent: true,
      side: THREE.FrontSide,
      depthWrite: true,
    });
    const photoMesh = new THREE.Mesh(photoGeo, photoMat);
    photoMesh.position.z = 0.08; // Safely in front of tray base
    group.add(photoMesh);

    // 2. 3D Sculpted Metallic Brass & Gold Tray Base
    // Open-ended cylinder eliminates co-planar Z-fighting with photoMesh
    const platterHeight = 0.16;
    const trayGeo = new THREE.CylinderGeometry(
      platterRadius * 1.018,
      platterRadius * 0.94,
      platterHeight,
      64,
      1,
      true // open-ended: only bevel side walls, zero Z-fighting
    );
    const goldTrayMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xD4A94A),
      emissive: new THREE.Color(0x281c06),
      metalness: 0.95,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.12,
      reflectivity: 0.95,
      side: THREE.DoubleSide,
    });
    const trayMesh = new THREE.Mesh(trayGeo, goldTrayMat);
    trayMesh.rotation.x = Math.PI * 0.5; // Orient along Z axis
    trayMesh.position.z = 0.0;
    group.add(trayMesh);

    // Underneath bottom plate for tray
    const bottomTrayGeo = new THREE.CircleGeometry(platterRadius * 0.94, 64);
    const bottomTrayMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x1a261f),
      metalness: 0.8,
      roughness: 0.5,
      side: THREE.BackSide,
    });
    const bottomTrayMesh = new THREE.Mesh(bottomTrayGeo, bottomTrayMat);
    bottomTrayMesh.position.z = -platterHeight * 0.5;
    group.add(bottomTrayMesh);

    // 3. Outer Scalloped Polished Gold Accent Rim (Catches dynamic light glints)
    const torusGeo = new THREE.TorusGeometry(platterRadius * 1.015, 0.045, 16, 64);
    const torusMat = new THREE.MeshPhysicalMaterial({
      color: 0xF4E58A,
      emissive: 0x3d280a,
      metalness: 0.98,
      roughness: 0.12,
      clearcoat: 1.0,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.z = 0.075;
    group.add(torusMesh);

    // 4. Ambient Radial Drop Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(platterRadius * 3.0, platterRadius * 3.0);
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(64, 64, 10, 64, 64, 64);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
      grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.28)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 128, 128);
    }
    const shadowTexture = new THREE.CanvasTexture(canvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.z = -0.45;
    group.add(shadowMesh);

    // 5. Concentric Sacred Geometry Orbital Rings
    const ring1Geo = new THREE.RingGeometry(platterRadius * 1.15, platterRadius * 1.158, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xD4A94A,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat1);
    ring1.position.z = -0.15;
    group.add(ring1);

    const ring2Geo = new THREE.RingGeometry(platterRadius * 1.32, platterRadius * 1.328, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xF4E58A,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ringMat2);
    ring2.position.z = -0.25;
    group.add(ring2);

    // 6. Floating Aromatic Spice & Steam Particles
    const particleCount = 75;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * (platterRadius * 0.75);
      positions[i * 3] = Math.cos(angle) * dist;
      positions[i * 3 + 1] = Math.sin(angle) * dist;
      positions[i * 3 + 2] = 0.1 + Math.random() * 0.8;
      velocities[i] = 0.003 + Math.random() * 0.006;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xF4E58A,
      size: 0.055,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // Dynamic 3D Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xF4E58A, 3.8);
    goldKeyLight.position.set(4, 5, 5);
    scene.add(goldKeyLight);

    const emeraldRimLight = new THREE.DirectionalLight(0x25704A, 2.5);
    emeraldRimLight.position.set(-5, -4, 2);
    scene.add(emeraldRimLight);

    const centerPointLight = new THREE.PointLight(0xF4E58A, 2.8, 8);
    centerPointLight.position.set(0, 0, 3);
    scene.add(centerPointLight);

    // Interactive Mouse Tilt & Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.45;
      targetY = y * 0.45;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Responsive camera aspect ratio & FOV handling to prevent edge clipping
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      const aspect = w / h;
      camera.aspect = aspect;
      if (aspect < 1.0) {
        camera.fov = 35 / aspect;
      } else {
        camera.fov = 35;
      }
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);
    onResize();

    // Animation Loop
    let animId: number;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.06;
      mouseY += (targetY - mouseY) * 0.06;

      // 3D Perspective Platter Tilt (Gently presenting the feast towards user)
      group.rotation.x = -0.32 - mouseY * 0.35 + Math.sin(elapsedTime * 0.6) * 0.04;
      group.rotation.y = mouseX * 0.45 + Math.cos(elapsedTime * 0.5) * 0.03;
      group.position.y = Math.sin(elapsedTime * 0.8) * 0.07; // Gentle levitation

      // Slow elegant rotation of background rings
      ring1.rotation.z = elapsedTime * 0.08;
      ring2.rotation.z = -elapsedTime * 0.05;

      // Dynamic light glint across gold rim
      goldKeyLight.position.x = 4 + Math.sin(elapsedTime * 0.8) * 2;
      goldKeyLight.position.y = 5 + Math.cos(elapsedTime * 0.8) * 1.5;

      // Animate rising steam particles
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3 + 2] += velocities[i];
        if (posArray[i * 3 + 2] > 1.2) {
          posArray[i * 3 + 2] = 0.1;
          const a = Math.random() * Math.PI * 2;
          const d = Math.random() * (platterRadius * 0.7);
          posArray[i * 3] = Math.cos(a) * d;
          posArray[i * 3 + 1] = Math.sin(a) * d;
        }
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometryDispose(scene);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full relative" />;
}

function geometryDispose(obj: THREE.Object3D) {
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (child.geometry) child.geometry.dispose();
      if (Array.isArray(child.material)) {
        child.material.forEach((mat) => mat.dispose());
      } else if (child.material) {
        child.material.dispose();
      }
    }
  });
}
