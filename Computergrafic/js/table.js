function create_tabletop_table(x_koord, y_koord, z_koord){

    create_table(x_koord, y_koord, z_koord);
    // create_dice_set(0, 10, 0);
    // load_dice_set(15,5,15);
    load_dragon_statue(x_koord + 0, y_koord + 22.8, z_koord + 0);
    load_bowser_dice_tower(x_koord + 38, y_koord + 5, z_koord - 80);
    
    load_archer(x_koord - 20, y_koord + 0, z_koord + 30);
    load_bard(x_koord + 10, y_koord + 0, z_koord + 10);
    load_barbarian(x_koord - 15, y_koord + 0, z_koord + 10);
    load_croc(x_koord + 20, y_koord + 0, z_koord - 25)

    load_dice_set_2(x_koord + 38, y_koord + 0, z_koord - 10);
    load_dice_set_3(x_koord - 38, y_koord - 4.2, z_koord - 10);
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
    mesh.position.set(x_koord, y_koord, z_koord);
    scene.add(mesh);

    // Die langen Kanten erstellen
    var geometry = new THREE.BoxGeometry(kantenbreite, kantenbreite, tischlaenge - 2 * beinbreite);
    var texture = new THREE.TextureLoader().load('images/holz-vert.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(1, 10);
    var material = new THREE.MeshLambertMaterial({ map: texture });

    // links
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord - tischbreite / 2 + kantenbreite / 2, y_koord, z_koord);
    scene.add(mesh);

    // rechts
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord + tischbreite / 2 - kantenbreite / 2, y_koord, z_koord);
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
    mesh.position.set(x_koord, y_koord, z_koord + tischlaenge / 2 - kantenbreite / 2);
    scene.add(mesh);

    // hinten
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord, y_koord, z_koord - tischlaenge / 2 + kantenbreite / 2);
    scene.add(mesh);

    // Tischbeine
    var geometry = new THREE.BoxGeometry(beinbreite, beinhoehe, beinbreite);

    var texture = new THREE.TextureLoader().load('images/holz-vert.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(1, 2);
    var material = new THREE.MeshLambertMaterial({ map: texture });

    // vorne links
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord - tischbreite / 2 + beinbreite / 2, y_koord - 0.5 * (beinhoehe - kantenbreite), z_koord + tischlaenge / 2 - beinbreite / 2);
    scene.add(mesh);

    // hinten links
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord - tischbreite / 2 + beinbreite / 2, y_koord - 0.5 * (beinhoehe - kantenbreite), z_koord - tischlaenge / 2 + beinbreite / 2);
    scene.add(mesh);

    // hinten rechts
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord + tischbreite / 2 - beinbreite / 2, y_koord - 0.5 * (beinhoehe - kantenbreite), z_koord - tischlaenge / 2 + beinbreite / 2);
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
    mesh.position.set(x_koord - 1.5, y_koord + 0.75, z_koord - 1.5);
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

// Importet 3D Models below

// Done by:                   Toxicsquall 
// Avaiable under:      https://sketchfab.com/models/7be72f58eb1c43cb8450442a17a98970
function load_bowser_dice_tower(x_koord, y_koord, z_koord) {
    var loader = new THREE.GLTFLoader();

    loader.load('gltf/bowsers_castle_dice_tower/scene.gltf', function (gltf) {
        var mesh = gltf.scene;
        mesh.position.set(x_koord, y_koord, z_koord);
        mesh.rotation.x = THREE.Math.degToRad(-95);
        var scaling = 0.125;
        mesh.scale.set(scaling, scaling, scaling);
        scene.add(mesh);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Scene
        gltf.scenes; // Array<THREE.Scene>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    });
}

// Done by:                   Mathieu Vaillancourt 
// Avaiable under:      https://sketchfab.com/models/42e434900ee84225b576415d4d856bed
function load_dice_set_1(x_koord, y_koord, z_koord) {
    var loader = new THREE.GLTFLoader();

    loader.load('gltf/rpg dice set/scene.gltf', function (gltf) {
        var mesh = gltf.scene;
        mesh.position.set(x_koord, y_koord, z_koord);
        scene.add(mesh);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Scene
        gltf.scenes; // Array<THREE.Scene>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    });
}

// Done by:                   JayDesigns3D 
// Avaiable under:      https://sketchfab.com/models/163950cff9694fe1a686d22fe7737236
function load_dice_set_2(x_koord, y_koord, z_koord) {
    var loader = new THREE.GLTFLoader();

    loader.load('gltf/dungeons_and_dragons_dice_set/scene.gltf', function (gltf) {
        var mesh = gltf.scene;
        mesh.position.set(x_koord, y_koord, z_koord);
        var scaling = 1.5;
        mesh.scale.set(scaling, scaling, scaling);
        scene.add(mesh);
        scene.add(mesh);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Scene
        gltf.scenes; // Array<THREE.Scene>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    });
}

// Done by:                   Johannes Rasinkangas
// Avaiable under:      https://sketchfab.com/models/201c53411876498ea62394adcb5ba5e9
function load_dice_set_3(x_koord, y_koord, z_koord) {
    var loader = new THREE.GLTFLoader();

    loader.load('gltf/dice_set/scene.gltf', function (gltf) {
        var mesh = gltf.scene;
        mesh.position.set(x_koord, y_koord, z_koord);
        var scaling = 2;
        mesh.scale.set(scaling, scaling, scaling);
        scene.add(mesh);
        scene.add(mesh);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Scene
        gltf.scenes; // Array<THREE.Scene>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    });
}

// Done by:                   Ashraf Bouhadida 
// Avaiable under:      https://sketchfab.com/models/8d6c9e00b6234ae48a9ba8373d1a8b8f
function load_dragon_statue(x_koord, y_koord, z_koord) {
    var loader = new THREE.GLTFLoader();

    loader.load('gltf/dragon_decimated/scene.gltf', function (gltf) {
        var mesh = gltf.scene;
        mesh.position.set(x_koord, y_koord, z_koord);
        mesh.scale.set(3, 3, 3);
        scene.add(mesh);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Scene
        gltf.scenes; // Array<THREE.Scene>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    });
}


// Done by:                   Fed Tabula
// Avaiable under:      https://sketchfab.com/models/8637ae16b7384a3f9e72f0ebaa01fc65
function load_barbarian(x_koord, y_koord, z_koord) {
    var loader = new THREE.GLTFLoader();

    loader.load('gltf/barbarian/scene.gltf', function (gltf) {
        var mesh = gltf.scene;
        mesh.position.set(x_koord, y_koord, z_koord);
        mesh.rotation.y = THREE.Math.degToRad(135);
        var scaling = 0.25;
        mesh.scale.set(scaling, scaling, scaling);
        scene.add(mesh);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Scene
        gltf.scenes; // Array<THREE.Scene>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    });
}

// Done by:                   Hunter Black 
// Avaiable under:      https://sketchfab.com/models/0edb7e0bd2b94cf883fc082730c8c32d
function load_bard(x_koord, y_koord, z_koord) {
    var loader = new THREE.GLTFLoader();

    loader.load('gltf/bard/scene.gltf', function (gltf) {
        var mesh = gltf.scene;
        mesh.position.set(x_koord, y_koord, z_koord);
        mesh.rotation.y = THREE.Math.degToRad(180);
        mesh.scale.set(4, 4, 4);
        scene.add(mesh);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Scene
        gltf.scenes; // Array<THREE.Scene>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    });
}

// Done by:                   jakatoa 
// Avaiable under:      https://sketchfab.com/models/8cf2507731a04e1cb74c01a1b5e094d1
function load_archer(x_koord, y_koord, z_koord) {
    var loader = new THREE.GLTFLoader();

    loader.load('gltf/elven_archer/scene.gltf', function (gltf) {
        var mesh = gltf.scene;
        mesh.position.set(x_koord, y_koord, z_koord);
        mesh.rotation.x = THREE.Math.degToRad(5.5);
        mesh.rotation.y = THREE.Math.degToRad(-90);
        mesh.rotation.z = THREE.Math.degToRad(1);
        mesh.scale.set(0.4, 0.4, 0.4);
        scene.add(mesh);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Scene
        gltf.scenes; // Array<THREE.Scene>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    });
}

// Done by:                   Lanz 
// Avaiable under:      https://sketchfab.com/models/14e1fc333ae94c299d6e42df1b239eab
function load_croc(x_koord, y_koord, z_koord) {
    var loader = new THREE.GLTFLoader();

    loader.load('gltf/captain_croc/scene.gltf', function (gltf) {
        var mesh = gltf.scene;
        mesh.position.set(x_koord, y_koord, z_koord);
        var scaling = 0.25;
        mesh.scale.set(scaling, scaling, scaling);
        scene.add(mesh);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Scene
        gltf.scenes; // Array<THREE.Scene>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    });
}

