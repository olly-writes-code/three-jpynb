import * as THREE from "https://esm.sh/three@0.158.0";
import { OrbitControls } from "https://esm.sh/three@0.158.0/examples/jsm/controls/OrbitControls";

function render({ model, el }) {
  // Get the actual container size
  const width = el.clientWidth;
  const height = 600; // or el.clientHeight if you want dynamic height
  
  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  el.appendChild(renderer.domElement);
  
  // Add OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', () => renderer.render(scene, camera));
  
  // Define points for connected lines
  const points = [];
  points.push(new THREE.Vector3(-2, 0, 0));
  points.push(new THREE.Vector3(0, 2, 0));
  points.push(new THREE.Vector3(2, 0, 0));
  points.push(new THREE.Vector3(0, -2, 0));
  points.push(new THREE.Vector3(-2, 0, 0));
  
  // Create line geometry
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
  const line = new THREE.Line(geometry, material);
  
  scene.add(line);
  camera.position.z = 5;
  
  renderer.render(scene, camera);
}

export default { render };