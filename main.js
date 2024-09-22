import './style.css'
import * as THREE from 'three';

const width = globalThis.innerWidth;
const height = globalThis.innerHeight;

const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const canvas = document.querySelector('#back-ground');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setPixelRatio(globalThis.devicePixelRatio);
renderer.setSize(globalThis.innerWidth, globalThis.innerHeight);

function render(time) {
  time *= 0.001;  // convert time to seconds
 
  mesh.rotation.x = time;
  mesh.rotation.y = time;

  
  if (`${globalThis.innerHeight}px`!= renderer.domElement.style.height) {
   alert(`Window size changed to: ${globalThis.innerHeight}.`)
  }
  
  //console.log(renderer.domElement.style.height);

  //console.log(globalThis.innerHeight)


  renderer.setSize(globalThis.innerWidth, globalThis.innerHeight);
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
 
  renderer.render(scene, camera);
 
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
