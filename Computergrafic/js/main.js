var camera, scene, renderer, controls;


init();
// render();
animate();


function init() {
    // scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xcccccc);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // camera 
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(150, 150, 250);

    // controls
    controls = new THREE.OrbitControls(camera);
    // controls.addEventListener('change', render); // call this only in static scenes (i.e., if there is no animation loop)


    // world
    create_backround();
    create_tabletop_table(0, 0, 0);

    // lights
    var light = new THREE.DirectionalLight(0xffffff, 1);
    scene.add(light)
     
    var light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);

    
}

//render scene
function animate() {
    requestAnimationFrame(animate);

    //animatied moving parts between here

    //and here
    render();
}

function render() {
    renderer.render(scene, camera);
}