function create_surroundings() {
    create_backround();

    create_teppich();

    create_bookshelf();

    create_door();

    // Inner-Sea-World-Map: http://3.bp.blogspot.com/-taxbcU3l9eU/VBnCkb_1J5I/AAAAAAAAO04/BAAw5urvqR8/w1200-h630-p-nu/map_inner_sea_large.png
    create_poster(200, 120, 0, 100, -299.9, 0, 0, 0, 'map_inner_sea_large.png');

    // Lade Couch, von vegu
    // URL: https://sketchfab.com/models/78932b7ffef240379e83320660322fcd
    load_gltf(20, -15, 250, 100, 0, 180, 0, 'couch');

    // Lade Delfine Dining Chair von Zuo Modern
    // URL: https://sketchfab.com/models/d4ed4564eaf040ec99c3de008b60f6a2
    load_gltf(-50, -58, 110, 1000, 0, -38, 0, 'chair');
    load_gltf(-50, -58, 20, 1000, 0, -38, 0, 'chair');
    load_gltf(-50, -58, -100, 1000, 0, -128, 0, 'chair');
    load_gltf(50, -58, 10, 1000, 0, -218, 0, 'chair');
    load_gltf(50, -58, -80, 1000, 0, -218, 0, 'chair');

    // Lade Lampe von
    // URL:
    load_gltf(-150, 40, 250, 100, 0, 0, 0, 'floor_lamp');

    // Lade Modern Lamp von r.hessens 
    // URL: https://sketchfab.com/models/26f82e7ee59c444b9433a2458dc9451f
    load_gltf(250, -60, -250, 125, 0, -90, 0, 'modern_lamp');
    // load_gltf(250, -60, -250, 1250 * 4, 90, 0, 90, 'modern_lamp');

    // Lade Lamp lilang8936
    // URL: https://sketchfab.com/models/3cb55809126e45c18c37db8328006ff2
    load_gltf(-230, 77, -20, 100, 0, 0, 0, 'ceiling_lamp');
}

function create_backround() {
    var loader = new THREE.TextureLoader();
    var size = 600;
    var geometry = new THREE.BoxBufferGeometry(size, size * 0.4, size); 

    // Load Textures for background
    // Quelle:      
    var texture = loader.load('images/holzraum.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(3, 2);
    texture.anisotropy = 8;
    var floor = new THREE.MeshPhongMaterial({ map: texture, side: THREE.BackSide});

    // Quelle:      https://c1.staticflickr.com/9/8244/8590273977_dab3ccd0bf_b.jpg
    var texture = loader.load('images/wall.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(2, 1);
    texture.anisotropy = 8;
    var wall = new THREE.MeshPhongMaterial({ map: texture, side: THREE.BackSide });

    // Quelle:      http://hires.patternpictures.com/PP17272013-Subtle-Plaster-Texture-White-Wall.jpg
    var texture = loader.load('images/decke.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(2, 2);
    texture.anisotropy = 8;
    var ceiling = new THREE.MeshPhongMaterial({ map: texture, side: THREE.BackSide });

    const materials = [wall, wall, ceiling, floor, wall, wall];

    var mesh = new THREE.Mesh(geometry, materials);
    mesh.position.y = 60;
    mesh.receiveShadow = true;
    scene.add(mesh);

    
}

// Lade Teppich Textur
// Quelle: https://i.pinimg.com/originals/30/a6/b2/30a6b226bf34a6e4dbf405c24fefadaa.jpg
function create_teppich() {
    var geometry = new THREE.PlaneGeometry(250, 350);
    var texture = new THREE.TextureLoader().load('images/teppich.jpg');
    texture.wrapS = THREE.MirroredRepeatWrapping;
    texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(10, 10);
    texture.anisotropy = 8;
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = THREE.Math.degToRad(-90);
    mesh.position.y = -59;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
}

// Erstellt THREE.PlaneGeometry und laedt die Textur eines Buecherregales
// Quelle:      https://www.mrjdesigns.co.uk/media/wysiwyg/wall_of_books.jpg
function create_bookshelf() {
    var geometry = new THREE.PlaneGeometry(600, 240);
    var texture = new THREE.TextureLoader().load('images/bookshelf.jpg');
    texture.wrapS = THREE.MirroredRepeatWrapping;
    texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(2, 1);
    texture.anisotropy = 8;
    var material = new THREE.MeshPhongMaterial({ map: texture, side: THREE.TwoSide });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotation.x = THREE.Math.degToRad(-90);
    mesh.rotation.y = THREE.Math.degToRad(90);
    mesh.position.x = -250;
    mesh.position.y = 60;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
}

// Erstellt THREE.PlaneGeometry und laedt die Textur einer Tuer
// Quelle:      http://www.photoshoptextures.com/architectural-textures/white-door-texture.jpg
function create_door() {
    var geometry = new THREE.PlaneGeometry(80, 180);
    var texture = new THREE.TextureLoader().load('images/door.jpg');
    texture.wrapS = THREE.MirroredRepeatWrapping;
    texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(1, 1);
    texture.anisotropy = 8;
    var material = new THREE.MeshPhongMaterial({ map: texture, side: THREE.TwoSide });
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.rotation.x = THREE.Math.degToRad(-90);
    mesh.rotation.y = THREE.Math.degToRad(-90);
    mesh.position.x = 299.8;
    mesh.position.y = 30;
    mesh.position.z = 150;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
}

// Erstellt THREE.PlaneGeometry und laedt eine uebergebene Textur
// benutzte Texturen und Quellen:
// Inner-Sea-World-Map: http://3.bp.blogspot.com/-taxbcU3l9eU/VBnCkb_1J5I/AAAAAAAAO04/BAAw5urvqR8/w1200-h630-p-nu/map_inner_sea_large.png
function create_poster(size_w, size_h, pos_x, pos_y, pos_z, rot_x, rot_y, rot_z, path) {
    var geometry = new THREE.PlaneGeometry(size_w, size_h);
    var texture = new THREE.TextureLoader().load('images/' + path);
    texture.wrapS = THREE.MirroredRepeatWrapping;
    texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(1, 1);
    texture.anisotropy = 8;
    var material = new THREE.MeshPhongMaterial({ map: texture, side: THREE.TwoSide });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(pos_x, pos_y, pos_z);
    mesh.rotation.set(THREE.Math.degToRad(rot_x), THREE.Math.degToRad(rot_y), THREE.Math.degToRad(rot_z));
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
}

