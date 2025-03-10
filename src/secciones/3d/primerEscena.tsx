import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

export function PrimerEscena() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 96;

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const geometry = new THREE.BoxGeometry(16, 16, 16);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const stats = new Stats();
    document.body.appendChild(stats.dom);

    const animate = () => {
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        stats.update();
        controls.update();
        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
    };
    animate();
  }, [])
}