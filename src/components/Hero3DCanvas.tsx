import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Eye } from 'lucide-react';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const isRotatingRef = useRef(true);

  isRotatingRef.current = isRotating;

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    // Master Group for 3D interactions
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central 3D Stylized Avocado / Organic Fruit
    const fruitGroup = new THREE.Group();
    
    // Pear/Avocado shape using deformed sphere
    const fruitGeo = new THREE.SphereGeometry(1.6, 64, 64);
    const pos = fruitGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      // Taper top
      if (y > 0) {
        const factor = 1 - (y / 1.6) * 0.28;
        pos.setX(i, pos.getX(i) * factor);
        pos.setZ(i, pos.getZ(i) * factor);
      }
    }
    fruitGeo.computeVertexNormals();

    const fruitMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#4ade80'),
      roughness: 0.25,
      metalness: 0.05,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      transmission: 0.2,
      thickness: 1.2,
      ior: 1.45,
    });
    const fruitMesh = new THREE.Mesh(fruitGeo, fruitMat);
    fruitGroup.add(fruitMesh);

    // Inner glowing golden pit / metabolic core
    const pitGeo = new THREE.SphereGeometry(0.72, 32, 32);
    const pitMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#f59e0b'),
      roughness: 0.2,
      metalness: 0.3,
      emissive: new THREE.Color('#fbbf24'),
      emissiveIntensity: 0.25,
    });
    const pitMesh = new THREE.Mesh(pitGeo, pitMat);
    pitMesh.position.set(0, -0.15, 0.45);
    fruitGroup.add(pitMesh);

    mainGroup.add(fruitGroup);

    // 2. Orbital Rings
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#16a34a'),
      transparent: true,
      opacity: 0.35,
      wireframe: true,
    });
    const ringGeo1 = new THREE.TorusGeometry(2.7, 0.02, 16, 100);
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    ringMesh1.rotation.y = Math.PI / 6;
    mainGroup.add(ringMesh1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#f59e0b'),
      transparent: true,
      opacity: 0.25,
      wireframe: true,
    });
    const ringGeo2 = new THREE.TorusGeometry(3.1, 0.02, 16, 100);
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = -Math.PI / 4;
    ringMesh2.rotation.y = Math.PI / 4;
    mainGroup.add(ringMesh2);

    // 3. Floating Nutrient Molecules / Cellular Spheres
    const particleCount = 28;
    const particleGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const particleMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#22c55e'),
      emissive: new THREE.Color('#16a34a'),
      emissiveIntensity: 0.4,
      roughness: 0.2,
    });

    const particles = new THREE.Group();
    for (let i = 0; i < particleCount; i++) {
      const p = new THREE.Mesh(particleGeo, particleMat);
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 2.4 + Math.sin(i * 3) * 0.7;
      p.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 3.2,
        Math.sin(angle) * radius
      );
      particles.add(p);
    }
    mainGroup.add(particles);

    // 4. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x4ade80, 2.2, 10);
    fillLight.position.set(-5, -2, 3);
    scene.add(fillLight);

    const warmLight = new THREE.PointLight(0xfbbf24, 1.8, 10);
    warmLight.position.set(3, -4, 4);
    scene.add(warmLight);

    // Pointer Interaction & Smooth Drag
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      if (isDragging) {
        const deltaX = clientX - prevMouseX;
        const deltaY = clientY - prevMouseY;
        targetRotY += deltaX * 0.007;
        targetRotX += deltaY * 0.007;
      }
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    currentMount.addEventListener('mousemove', handlePointerMove);
    currentMount.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    currentMount.addEventListener('touchmove', handlePointerMove, { passive: true });
    currentMount.addEventListener('touchstart', handleMouseDown, { passive: true });
    window.addEventListener('touchend', handleMouseUp);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (isRotatingRef.current && !isDragging) {
        targetRotY += 0.006;
      }

      // Smooth damping interpolation
      mainGroup.rotation.y += (targetRotY - mainGroup.rotation.y) * 0.08;
      mainGroup.rotation.x += (targetRotX - mainGroup.rotation.x) * 0.08;

      // Gentle floating oscillation
      fruitGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;
      fruitGroup.rotation.z = Math.sin(elapsedTime * 0.8) * 0.05;

      // Rotate rings with independent speeds
      ringMesh1.rotation.z = elapsedTime * 0.2;
      ringMesh2.rotation.z = -elapsedTime * 0.15;

      // Particles dynamic breathing orbit
      particles.rotation.y = elapsedTime * 0.12;
      particles.rotation.x = Math.sin(elapsedTime * 0.03) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      currentMount.removeEventListener('mousemove', handlePointerMove);
      currentMount.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      currentMount.removeEventListener('touchmove', handlePointerMove);
      currentMount.removeEventListener('touchstart', handleMouseDown);
      window.removeEventListener('touchend', handleMouseUp);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[500px] flex items-center justify-center select-none">
      {/* Three.js Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing touch-pan-y" 
        title="Mit der Maus ziehen oder mit dem Finger wischen, um das 3D-Modell zu drehen"
      />

      {/* Floating 3D Interaction Control Overlay */}
      <div className="absolute top-3 right-3 sm:top-5 sm:right-5 flex items-center gap-2">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
            isRotating 
              ? 'bg-brand-500/10 text-brand-800 border border-brand-200 hover:bg-brand-500/20' 
              : 'bg-white/80 text-slate-600 border border-slate-200 hover:bg-white'
          } backdrop-blur-md`}
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin-slow' : ''}`} />
          <span>{isRotating ? 'Auto-Drehung an' : 'Pausiert'}</span>
        </button>
      </div>

      {/* Nutrient quick indicator badges around 3D viewport */}
      <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-auto flex flex-wrap gap-2 justify-center sm:justify-start pointer-events-auto">
        {[
          { label: '🥑 Natürliche Vollwertkost', color: 'bg-emerald-50 text-emerald-900 border-emerald-200' },
          { label: '✨ Ohne Diätpulver & Verbote', color: 'bg-amber-50 text-amber-900 border-amber-200' },
          { label: '🧬 Darm- & Stoffwechselbalance', color: 'bg-teal-50 text-teal-900 border-teal-200' },
        ].map((item, idx) => (
          <span
            key={idx}
            className={`text-xs px-3 py-1 rounded-full font-bold border shadow-xs backdrop-blur-md ${item.color} animate-subtle-bounce`}
            style={{ animationDelay: `${idx * 0.3}s` }}
          >
            {item.label}
          </span>
        ))}
      </div>

      <div className="absolute bottom-2 right-2 hidden lg:flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-white/85 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-200/60 pointer-events-none">
        <Eye className="w-3 h-3 text-brand-600" />
        <span>Interaktives 3D-Modell: Zum Drehen ziehen</span>
      </div>
    </div>
  );
};
