"use client";

import { useEffect, useRef } from "react";

export function AmbientScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let dispose = () => {};
    let cancelled = false;

    async function setup() {
      const THREE = await import("three");
      if (cancelled || !mountRef.current) return;

      const mount = mountRef.current;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearAlpha(0);
      mount.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      const geometry = new THREE.IcosahedronGeometry(1.65, 2);
      const wireframe = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry, 8),
        new THREE.LineBasicMaterial({
          color: 0x8aa7ff,
          transparent: true,
          opacity: 0.2,
        }),
      );
      group.add(wireframe);

      const halo = new THREE.Mesh(
        new THREE.TorusGeometry(2.15, 0.012, 8, 120),
        new THREE.MeshBasicMaterial({
          color: 0x6c8cff,
          transparent: true,
          opacity: 0.34,
        }),
      );
      halo.rotation.x = 1.18;
      halo.rotation.y = 0.34;
      group.add(halo);

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      let frame = 0;
      let scrollTarget = window.scrollY;
      let scrollCurrent = scrollTarget;
      let pointerX = 0;
      let pointerY = 0;

      const resize = () => {
        const { width, height } = mount.getBoundingClientRect();
        if (width <= 0 || height <= 0) return;

        const aspect = width / height;
        const sceneRadius = 1.95;
        const halfVerticalFov = THREE.MathUtils.degToRad(camera.fov * 0.5);
        const verticalFitDistance = sceneRadius / Math.tan(halfVerticalFov);
        const horizontalFitDistance = verticalFitDistance / aspect;

        camera.aspect = aspect;
        camera.position.z =
          Math.max(verticalFitDistance, horizontalFitDistance) * 1.04;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      const onScroll = () => {
        scrollTarget = window.scrollY;
      };

      const onPointerMove = (event: PointerEvent) => {
        pointerX = event.clientX / window.innerWidth - 0.5;
        pointerY = event.clientY / window.innerHeight - 0.5;
      };

      const render = () => {
        scrollCurrent += (scrollTarget - scrollCurrent) * 0.045;
        group.rotation.x = 0.16 + scrollCurrent * 0.00022 + pointerY * 0.08;
        group.rotation.y = -0.4 + scrollCurrent * 0.00042 + pointerX * 0.1;
        group.position.y = Math.max(scrollCurrent * -0.00032, -0.45);
        renderer.render(scene, camera);

        if (!prefersReducedMotion) frame = requestAnimationFrame(render);
      };

      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(mount);
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      resize();
      render();

      dispose = () => {
        cancelAnimationFrame(frame);
        resizeObserver.disconnect();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("pointermove", onPointerMove);
        geometry.dispose();
        wireframe.geometry.dispose();
        wireframe.material.dispose();
        halo.geometry.dispose();
        halo.material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    }

    setup();
    return () => {
      cancelled = true;
      dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />
  );
}
