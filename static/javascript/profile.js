// Variables for setup
let container;
let camera;
let renderer;
let scene;
let character;

function init() {
  container = document.querySelector(".character-viewer");

  // Create Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);

  // FOV
  const fov = 45;
  // Aspect Ratio
  const aspect = container.clientWidth / container.clientHeight;
  // Clipping Distance
  const near = 1;
  const far = 1000;

  //Camera initialization
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  // Camera position
  camera.position.set(0, 5, 30);
  camera.lookAt(0, 1, 0);

  // Lights
  //Hemisphere light
  var hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
  hemiLight.position.set(0, 20, 0);
  scene.add(hemiLight);

  //Directional Light
  dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(-1, 1.75, 1);
  dirLight.position.multiplyScalar(30);
  dirLight.castShadow = true;

  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;

  var d = 50;

  dirLight.shadow.camera.near = 0.1;
  dirLight.shadow.camera.far = 40;
  dirLight.shadow.camera.left = -2;
  dirLight.shadow.camera.right = 2;
  dirLight.shadow.camera.top = 2;
  dirLight.shadow.camera.bottom = -2;

  scene.add(dirLight);

  // Directional Light Helping lines
  /*
  dirLightHeper = new THREE.DirectionalLightHelper(dirLight, 10);
  scene.add(dirLightHeper);
  */

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixrlRatio);

  container.appendChild(renderer.domElement);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;

  // Model Loader
  let loader = new THREE.GLTFLoader();
  loader.load("./static/3d/character.gltf", function(gltf) {
    character = gltf.scene.children[0]; //Character properties

    var s = 1;
    character.scale.set(s, s, s);
    character.castShadow = true;
    character.recieveShadow = true;

    myMat = new THREE.MeshStandardMaterial({
      color: 0xc4c4c4,
      opacity: 1,
      wireframe: true
    });

    character => (character.material = myMat);

    scene.add(character);

    animate();
  });
}

init();

function animate() {
  requestAnimationFrame(animate);
  // Clock
  var time = Date.now();
  var clock = new THREE.Clock();

  //Controls
  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.maxPolarAngle = Math.PI * 0.5;
  controls.minDistance = 30;
  controls.maxDistance = 30;
  controls.target.set(0, 0.5, 0);
  controls.enablePan = false;
  controls.enableDamping = true;

  var delta = clock.getDelta();

  controls.update(delta / 1000000);

  renderer.render(scene, camera);
}

// Making 3D viewwer responsive
function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
