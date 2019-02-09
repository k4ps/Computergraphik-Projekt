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

    // lights
    var light = new THREE.DirectionalLight();
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
    var tischhoehe = 10;
    var kantenhoehe = 5;
    var beinhoehe = 70;
    var beinbreite = 10;

    var kantenbreite = tischbreite / 8;
    var filzbreite = tischbreite - 2 * kantenbreite;
    var filzlaenge = tischlaenge - 2 * kantenbreite;
    var oberflaeche = y_koord + 3 * tischhoehe / 4;
    


    // Materialien fuer den tisch
    var holz = new THREE.MeshLambertMaterial({ color: new THREE.Color("rgb(24, 16, 9)")});
    var filz = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

    // Tischplatte erstellen
    var geometry = new THREE.BoxGeometry(tischbreite, tischhoehe, tischlaenge);   
    var mesh = new THREE.Mesh(geometry, holz);
    mesh.position.set(x_koord, y_koord, z_koord);
    scene.add(mesh);

    // Filzeinlage erstellen
    var geometry = new THREE.BoxGeometry(filzbreite, 0.1, filzlaenge);
    var mesh = new THREE.Mesh(geometry, filz);
    mesh.position.set(x_koord, y_koord + tischhoehe / 2, z_koord);
    scene.add(mesh);

    // Die langen Kanten erstellen
    var geometry = new THREE.BoxGeometry(kantenbreite, kantenhoehe, tischlaenge);

    // links
    var mesh = new THREE.Mesh(geometry, holz);
    mesh.position.set(x_koord - tischbreite / 2 + kantenbreite/2, oberflaeche, z_koord);
    scene.add(mesh);

    // rechts
    var mesh = new THREE.Mesh(geometry, holz);
    mesh.position.set(x_koord + tischbreite / 2 - kantenbreite/2, oberflaeche, z_koord);
    scene.add(mesh);

    // Die kurzen Kanten erstellen
    // vorne
    var geometry = new THREE.BoxGeometry(tischbreite, kantenhoehe, kantenbreite);
    var mesh = new THREE.Mesh(geometry, holz);
    mesh.position.set(x_koord, oberflaeche, z_koord + tischlaenge / 2 - kantenbreite / 2);
    scene.add(mesh);

    // hinten
    var mesh = new THREE.Mesh(geometry, holz);
    mesh.position.set(x_koord, oberflaeche, z_koord - tischlaenge / 2 + kantenbreite / 2);
    scene.add(mesh);  

    // Tischbeine
    var geometry = new THREE.BoxGeometry(beinbreite, beinhoehe, beinbreite);

    // vorne links
    var mesh = new THREE.Mesh(geometry, holz);
    mesh.position.set(x_koord - tischbreite / 2 + beinbreite / 2, y_koord - 0.5 * beinhoehe, z_koord + tischlaenge / 2 - beinbreite / 2);
    scene.add(mesh);

    // hinten links
    var mesh = new THREE.Mesh(geometry, holz);
    mesh.position.set(x_koord - tischbreite / 2 + beinbreite / 2, y_koord - 0.5 * beinhoehe, z_koord - tischlaenge / 2 + beinbreite / 2);
    scene.add(mesh);

    // hinten rechts
    var mesh = new THREE.Mesh(geometry, holz);
    mesh.position.set(x_koord + tischbreite / 2 - beinbreite / 2, y_koord - 0.5 * beinhoehe, z_koord - tischlaenge / 2 + beinbreite / 2);
    scene.add(mesh);

    // vorne rechts
    var mesh = new THREE.Mesh(geometry, holz);
    mesh.position.set(x_koord + tischbreite / 2 - beinbreite / 2, y_koord - 0.5 * beinhoehe, z_koord + tischlaenge / 2 - beinbreite / 2);
    scene.add(mesh);
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