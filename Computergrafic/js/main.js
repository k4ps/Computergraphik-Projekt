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
    create_table(0, 0, 0);
    // create_dice_set(0, 10, 0);
    load_dice_set();
    load_dragon_statue();

    // lights
    var light = new THREE.DirectionalLight(0xffffff, 1);
    scene.add(light)
     
    var light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);
}

function create_cube(size) {
    var geometry = new THREE.BoxGeometry(size, size, size);
    var material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

function create_table(x_koord, y_koord, z_koord) {

    // Benoetigte Variablen
    var tischbreite = 112;
    var tischlaenge = 224;
    var beinhoehe = 70;
    var beinbreite = tischbreite / 8;
    var kantenbreite = beinbreite;
    var filzbreite = tischbreite - 2 * kantenbreite;
    var filzlaenge = tischlaenge - 2 * kantenbreite;

    var default_mat = new THREE.MeshLambertMaterial();

    // Tischplatte erstellen
    var geometry = new THREE.BoxGeometry(tischbreite - 2 * kantenbreite, kantenbreite / 2, tischlaenge - 2 * kantenbreite);
    var texture = new THREE.TextureLoader().load('images/holz-vert.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(2, 3);
    var material = new THREE.MeshLambertMaterial({ map: texture });

    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord, y_koord - kantenbreite / 4, z_koord);
    scene.add(mesh);

    // Filzeinlage erstellen
    var geometry = new THREE.BoxGeometry(filzbreite, 0.1, filzlaenge);
    var texture = new THREE.TextureLoader().load('images/filz.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(4, 20)
    var filz = new THREE.MeshLambertMaterial({ map: texture });
    var mesh = new THREE.Mesh(geometry, filz);
    mesh.position.set(x_koord, y_koord , z_koord);
    scene.add(mesh);

    // Die langen Kanten erstellen
    var geometry = new THREE.BoxGeometry(kantenbreite, kantenbreite, tischlaenge - 2* beinbreite);
    var texture = new THREE.TextureLoader().load('images/holz-vert.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(1, 10);
    var material = new THREE.MeshLambertMaterial({ map: texture });

    // links
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord - tischbreite / 2 + kantenbreite / 2, y_koord , z_koord);
    scene.add(mesh);

    // rechts
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord + tischbreite / 2 - kantenbreite / 2, y_koord , z_koord);
    scene.add(mesh);

    // Die kurzen Kanten erstellen
    var geometry = new THREE.BoxGeometry(tischbreite - 2 * kantenbreite, kantenbreite, kantenbreite);
    var texture = new THREE.TextureLoader().load('images/holz-vert.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(6, 2);
    //texture.rotation.set(0.5);
    var material = new THREE.MeshLambertMaterial({ map: texture });

    // vorne
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord, y_koord , z_koord + tischlaenge / 2 - kantenbreite / 2);
    scene.add(mesh);

    // hinten
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord, y_koord , z_koord - tischlaenge / 2 + kantenbreite / 2);
    scene.add(mesh);

    // Tischbeine
    var geometry = new THREE.BoxGeometry(beinbreite, beinhoehe, beinbreite);

    var texture = new THREE.TextureLoader().load('images/holz-vert.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(1, 2);
    var material = new THREE.MeshLambertMaterial({ map: texture });

    // vorne links
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord - tischbreite / 2 + beinbreite / 2, y_koord  - 0.5 * (beinhoehe - kantenbreite), z_koord + tischlaenge / 2 - beinbreite / 2);
    scene.add(mesh);

    // hinten links
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord - tischbreite / 2 + beinbreite / 2, y_koord  - 0.5 * (beinhoehe - kantenbreite), z_koord - tischlaenge / 2 + beinbreite / 2);
    scene.add(mesh);

    // hinten rechts
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord + tischbreite / 2 - beinbreite / 2, y_koord  - 0.5 * (beinhoehe - kantenbreite), z_koord - tischlaenge / 2 + beinbreite / 2);
    scene.add(mesh);

    // vorne rechts
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord + tischbreite / 2 - beinbreite / 2, y_koord - 0.5 * (beinhoehe - kantenbreite), z_koord + tischlaenge / 2 - beinbreite / 2);
    scene.add(mesh);
}

function create_dice_set(x_koord, y_koord, z_koord) {
    var default_mat = new THREE.MeshLambertMaterial({ color: 0xffffff });

    // d4
    var geometry = new THREE.TetrahedronGeometry(0.75);
    var mesh = new THREE.Mesh(geometry, default_mat);
    mesh.position.set(x_koord + 1.5, y_koord + 0.5, z_koord - 1);
    scene.add(mesh);

    // d6
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var cube = new THREE.Mesh(geometry, default_mat);
    cube.position.set(x_koord, y_koord + 0.5, z_koord);
    scene.add(cube);

    // d8
    var geometry = new THREE.OctahedronGeometry(0.75);
    var mesh = new THREE.Mesh(geometry, default_mat);
    mesh.position.set(x_koord - 1.5, y_koord + 0.75, z_koord -1.5);
    scene.add(mesh);
    // d12
    var geometry = new THREE.DodecahedronGeometry(0.75);
    var mesh = new THREE.Mesh(geometry, default_mat);
    mesh.position.set(x_koord - 1.5, y_koord + 0.75, z_koord + 1.5);
    
    scene.add(mesh);

    // d20
    var geometry = new THREE.IcosahedronGeometry(1);
    var mesh = new THREE.Mesh(geometry, default_mat);
    mesh.position.set(x_koord + 2, y_koord + 1, z_koord + 2);
    mesh.rotation.z = THREE.Math.degToRad(72);
    scene.add(mesh);
}


// Done by: Mathieu Vaillancourt 
// Avaiable under: https://sketchfab.com/models/42e434900ee84225b576415d4d856bed
function load_dice_set() {
    var loader = new THREE.GLTFLoader();

    loader.load('gltf/rpg dice set/scene.gltf', function (gltf) {

        scene.add(gltf.scene);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Scene
        gltf.scenes; // Array<THREE.Scene>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    });
}

// Done by: Ashraf Bouhadida 
// Avaiable under: https://sketchfab.com/models/8d6c9e00b6234ae48a9ba8373d1a8b8f
function load_dragon_statue() {
    var loader = new THREE.GLTFLoader();

    loader.load('gltf/dragon_decimated/scene.gltf', function (gltf) {

        scene.add(gltf.scene);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Scene
        gltf.scenes; // Array<THREE.Scene>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    });
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