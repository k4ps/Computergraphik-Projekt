function create_backround() {

    var size = 600;
    var geometry = new THREE.BoxBufferGeometry(size, size*0.4, size);
    var texture = new THREE.TextureLoader().load('images/holzraum.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(2, 3);
    var material = new THREE.MeshLambertMaterial({ map: texture, side: THREE.BackSide});
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = 60;
    mesh.receiveShadow = true;
    scene.add(mesh);

    load_lamp(100, 40, -175);
    create_teppich();

}

function load_lamp(x_koord, y_koord, z_koord) {

    var loader = new THREE.GLTFLoader();

    loader.load('gltf/floor_lamp/scene.gltf', function (gltf) {
        var mesh = gltf.scene;
        mesh.position.set(x_koord, y_koord, z_koord);
        //mesh.rotation.x = THREE.Math.degToRad(-95);
        var scaling = 100;
        mesh.scale.set(scaling, scaling, scaling);
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

// Lade Teppich Textur
// Quelle: https://i.pinimg.com/originals/30/a6/b2/30a6b226bf34a6e4dbf405c24fefadaa.jpg
function create_teppich() {
    var geometry = new THREE.PlaneGeometry(250, 350);
    var texture = new THREE.TextureLoader().load('images/teppich3.jpg');
    texture.wrapS = THREE.MirroredRepeatWrapping;
    texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(10, 10);
    var material = new THREE.MeshLambertMaterial({ map: texture });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = THREE.Math.degToRad(-90);
    mesh.position.y = -59;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
}