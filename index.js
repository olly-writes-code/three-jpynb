import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js";

function render({ model, el }) {
  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 400/400, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(400, 400);
  el.appendChild(renderer.domElement);
  
  // Define points for connected lines
  const points = [];
  points.push(new THREE.Vector3(-2, 0, 0));
  points.push(new THREE.Vector3(0, 2, 0));
  points.push(new THREE.Vector3(2, 0, 0));
  points.push(new THREE.Vector3(0, -2, 0));
  points.push(new THREE.Vector3(-2, 0, 0)); // Close the shape
  
  // Create line geometry
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
  const line = new THREE.Line(geometry, material);
  
  scene.add(line);
  camera.position.z = 5;
  
  // Render once
  renderer.render(scene, camera);
}

export default { render };