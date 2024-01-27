
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// CUBE
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xD90166 });
const cube = new THREE.Mesh(geometry, material);

// Position of cube
cube.position.x = -5;
cube.position.y = -2;

scene.add(cube);

// CYLINDER
const geometry1 = new THREE.CylinderGeometry( 0.5, 0.5, 1.5, 32 ); 
const material1 = new THREE.MeshBasicMaterial( {color: 0xffff00} ); 
const cylinder = new THREE.Mesh( geometry1, material1 );

// Position of cyclinder 
cylinder.position.x = -5;
cylinder.position.y = -2;

scene.add( cylinder );

// CONE
const geometry3 = new THREE.ConeGeometry( 0.5, 1.5, 32 ); 
const material3 = new THREE.MeshBasicMaterial( {color: 0x40e0d0} );
const cone = new THREE.Mesh(geometry3, material3);

// Position of cone 
cone.position.x = -5;
cone.position.y = 2;

scene.add( cone );

// SPHERE
const geometry4 = new THREE.SphereGeometry( 1, 32, 16 ); 
const material4 = new THREE.MeshBasicMaterial( { color: 0x39FF14 } ); 
const sphere = new THREE.Mesh( geometry4, material4);

// Position of sphere 
sphere.position.x = 5;
sphere.position.y = 0;

scene.add( sphere );

// TORUS
const geometry5 = new THREE.TorusGeometry( 1.2, 0.3, 16, 100 ); 
const material5 = new THREE.MeshBasicMaterial( { color: 0xEE4B2B } ); 
const torus = new THREE.Mesh( geometry5, material5 );

scene.add( torus );

// CAMERA
camera.position.z = 5;

// Cube rotation definitions
let angle = 0;
const radius = 2.5;

function animate() {
  requestAnimationFrame(animate);
  // Cube rotating and revolving
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.position.x = radius * Math.cos(angle);
  cube.position.y = radius * Math.sin(angle);
  angle += 0.01;

  // Cylinder rotating
  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;

  //Cone rotating
  cone.rotation.x += 0.01;
  cone.rotation.y += 0.01;

  //Sphere shaking (can't be seen well bc of color)
  sphere.rotation.x += Math.random() * 0.05 - 0.025;
  sphere.rotation.y += Math.random() * 0.05 - 0.025;
  sphere.rotation.z += Math.random() * 0.05 - 0.025;

  //Torus shaking
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;


  renderer.render(scene, camera);
}

animate();

