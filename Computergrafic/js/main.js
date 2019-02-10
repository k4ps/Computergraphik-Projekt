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
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;
    document.body.appendChild(renderer.domElement);

    // camera 
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(150, 150, 250);

    // controls
    controls = new THREE.OrbitControls(camera);
    // controls.addEventListener('change', render); // call this only in static scenes (i.e., if there is no animation loop)


    // world
    create_surroundings();
    create_tabletop_table(0, 10, 0, 1);

    // lights
    illuminate();

    
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

function load_gltf(x_koord, y_koord, z_koord, scaling, rot_x, rot_y, rot_z, path) {
    var loader = new THREE.GLTFLoader();

    loader.load('gltf/' + path + '/scene.gltf', function (gltf) {
        gltf.scene.traverse( function( node ) {

            if ( node instanceof THREE.Mesh ) { node.castShadow = true; mesh.receiveShadow = true; }

        } );
        var mesh = gltf.scene;
        mesh.position.set(x_koord, y_koord, z_koord);
        mesh.scale.set(scaling, scaling, scaling);
        mesh.rotation.x = THREE.Math.degToRad(rot_x);
        mesh.rotation.y = THREE.Math.degToRad(rot_y);
        mesh.rotation.z = THREE.Math.degToRad(rot_z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Scene
        gltf.scenes; // Array<THREE.Scene>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    });
}
