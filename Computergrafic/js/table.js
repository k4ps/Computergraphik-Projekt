var dice_materials;

function create_tabletop_table(x_koord, y_koord, z_koord, scale) {

    create_table(x_koord, y_koord, z_koord, scale);
    create_character_sheet(x_koord - 30, y_koord + 0.2, z_koord - 10, -90, 0, 0, 'images/cs-sven.png');
    create_character_sheet(x_koord + 30, y_koord + 0.2, z_koord - 10, -90, 0, 180, 'images/cs-2.png');
    create_character_sheet(x_koord - 25, y_koord + 0.2, z_koord + 70, -90, 0, -90, 'images/cs-3.png');
    create_character_sheet(x_koord + 26, y_koord + 0.2, z_koord + 83, -90, 0, 90, 'images/cs-4.png');
    create_gm_screen(x_koord + 25, y_koord + 15, z_koord - 80, 270);
    create_playbook(x_koord - 45, y_koord + 7.8, z_koord - 100);

    // Importet 3D Models below

    // Lade Dice Set von JayDesigns3D 
    // Avaiable under:      https://sketchfab.com/models/163950cff9694fe1a686d22fe7737236
    // load_dice_set_2(x_koord + 38, y_koord + 0, z_koord - 10);
    load_gltf(x_koord + 38, y_koord + 0, z_koord - 10, 1.5, 0, 0, 0, 'dungeons_and_dragons_dice_set');

    // Lade Dice Set von Johannes Rasinkangas
    // Avaiable under:      https://sketchfab.com/models/201c53411876498ea62394adcb5ba5e9
    // Das Original war farblos. Die benutzten Modelle wurde von uns lediglich eingefaerbt.
    load_gltf(x_koord - 38, y_koord - 4, z_koord - 10, 75, 90, 0, 0, 'dice_set_white');
    load_gltf(x_koord - 33, y_koord - 4, z_koord + 57, 75, 90, 0, 90, 'dice_set_blue');
    load_gltf(x_koord + 34, y_koord - 4, z_koord + 72, 75, 90, 0, 180, 'dice_set_yellow');
    load_gltf(x_koord + 20, y_koord - 4, z_koord - 88, 75, 90, 0, 180, 'dice_set_black');

    // Lade Bowser Castle Dice Tower von Toxicsquall 
    // Avaiable under:      https://sketchfab.com/models/7be72f58eb1c43cb8450442a17a98970
    // Das Original wurde von uns lediglich neu eingefärbt.
    load_gltf(x_koord + 33, y_koord + 0, z_koord - 75, 100, 0, -30, 0, 'bowsers_castle_dice_tower');    

    

    // Lade Dragon Statue von Ashraf Bouhadida 
    // Avaiable under:      https://sketchfab.com/models/8d6c9e00b6234ae48a9ba8373d1a8b8f
    load_gltf(x_koord + 0, y_koord + 22.8, z_koord + 0, 3, 0, 0, 0, 'dragon_decimated');    

    // Lade Bard Statue von Hunter Black 
    // Avaiable under:      https://sketchfab.com/models/0edb7e0bd2b94cf883fc082730c8c32d
    load_gltf(x_koord + 10, y_koord + 0, z_koord + 10, 4, 0, 180, 0, 'bard');

    // Lade Barbarian Statue von Fed Tabula
    // Avaiable under:      https://sketchfab.com/models/8637ae16b7384a3f9e72f0ebaa01fc65
    load_gltf(x_koord - 15, y_koord + 0, z_koord + 10, 0.25, 0, 135, 0, 'barbarian');

    // Lade Captain Croc Statue von Lanz 
    // Avaiable under:      https://sketchfab.com/models/14e1fc333ae94c299d6e42df1b239eab
    load_gltf(x_koord + 20, y_koord + 0, z_koord - 25, 0.25, 0, 0, 0, 'captain_croc'); 

    // Lade Archer Figur von  jakatoa 
    // Avaiable under:      https://sketchfab.com/models/8cf2507731a04e1cb74c01a1b5e094d1
    load_gltf(x_koord - 20, y_koord + 0, z_koord + 30, 0.4, 5.5, -90, 1, 'elven_archer');
}

// Erstellt die Geometry für einen Tisch, welcher im Endeffekt ein Billiardtisch ist und auch die selben Maße hat wie einer
// Der Tisch besteht aus 10 THREE.BoxGeometry, welche jeweils mit einer Textur versehen werden.
// Die Quellen der Texturen sind:
// Holz:    https://www.moebel-und-garten.de/moebel/AS4HOME/Klebefolie-Holzdekor-Moebelfolie-Holz-Eiche-natur-dunkel-45-cm-x-200-cm-Designfolie-von-AS4HOME-104431737.jpg
// Filz:      https://us.123rf.com/450wm/yamabikay/yamabikay1705/yamabikay170500039/77519356-gr%C3%BCne-filz-textur-f%C3%BCr-poker-ein-casino-thema-nahtloser-quadratischer-hintergrund-fliese-bereit-hochaufl%C3%B6sendes-fo.jpg?ver=6
function create_table(x_koord, y_koord, z_koord, scale) {

    // Benoetigte Variablen
    var tischbreite = 112 * scale;
    var tischlaenge = 224 * scale;
    var beinhoehe = 80 * scale;
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
    texture.anisotropy = 8
    var material = new THREE.MeshLambertMaterial({ map: texture });

    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord, y_koord - kantenbreite / 4, z_koord);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);

    // Filzeinlage erstellen
    var geometry = new THREE.BoxGeometry(filzbreite, 0.1, filzlaenge);
    var texture = new THREE.TextureLoader().load('images/filz4.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(4, 10)
    texture.anisotropy = 8
    var filz = new THREE.MeshLambertMaterial({ map: texture });
    var mesh = new THREE.Mesh(geometry, filz);
    mesh.position.set(x_koord, y_koord, z_koord);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);

    // Die langen Kanten erstellen
    var geometry = new THREE.BoxGeometry(kantenbreite, kantenbreite, tischlaenge - 2 * beinbreite);
    var texture = new THREE.TextureLoader().load('images/holz-vert.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(1, 10);
    texture.anisotropy = 8
    var material = new THREE.MeshLambertMaterial({ map: texture });

    // links
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord - tischbreite / 2 + kantenbreite / 2, y_koord, z_koord);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);

    // rechts
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord + tischbreite / 2 - kantenbreite / 2, y_koord, z_koord);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);

    // Die kurzen Kanten erstellen
    var geometry = new THREE.BoxGeometry(tischbreite - 2 * kantenbreite, kantenbreite, kantenbreite);
    var texture = new THREE.TextureLoader().load('images/holz-vert.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(6, 2);
    texture.anisotropy = 8
    //texture.rotation.set(0.5);
    var material = new THREE.MeshLambertMaterial({ map: texture });

    // vorne
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord, y_koord, z_koord + tischlaenge / 2 - kantenbreite / 2);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);

    // hinten
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord, y_koord, z_koord - tischlaenge / 2 + kantenbreite / 2);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);

    // Tischbeine
    var geometry = new THREE.BoxGeometry(beinbreite, beinhoehe, beinbreite);

    var texture = new THREE.TextureLoader().load('images/holz-vert.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.repeat.set(1, 2);
    texture.anisotropy = 8
    var material = new THREE.MeshLambertMaterial({ map: texture });

    // vorne links
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord - tischbreite / 2 + beinbreite / 2, y_koord - 0.5 * (beinhoehe - kantenbreite), z_koord + tischlaenge / 2 - beinbreite / 2);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);

    // hinten links
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord - tischbreite / 2 + beinbreite / 2, y_koord - 0.5 * (beinhoehe - kantenbreite), z_koord - tischlaenge / 2 + beinbreite / 2);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);

    // hinten rechts
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord + tischbreite / 2 - beinbreite / 2, y_koord - 0.5 * (beinhoehe - kantenbreite), z_koord - tischlaenge / 2 + beinbreite / 2);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);

    // vorne rechts
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x_koord + tischbreite / 2 - beinbreite / 2, y_koord - 0.5 * (beinhoehe - kantenbreite), z_koord + tischlaenge / 2 - beinbreite / 2);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
}

function create_character_sheet(x_koord, y_koord, z_koord, x_rot, y_rot, z_rot, path_to_image) {
    var geometry = new THREE.PlaneGeometry(21, 29.7);
    var texture = new THREE.TextureLoader().load(path_to_image);
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.anisotropy = 8
    var material = new THREE.MeshLambertMaterial({ map: texture });
    var plane = new THREE.Mesh(geometry, material);
    plane.position.set(x_koord, y_koord, z_koord);
    plane.rotation.set(THREE.Math.degToRad(x_rot), THREE.Math.degToRad(y_rot), THREE.Math.degToRad(z_rot));
    plane.castShadow = true;
    plane.receiveShadow = true;
    scene.add(plane);
}

// Erzeugt THREE.PlaneGeometry und versieht sie mit Textur
// Das Bild aus dem die Textur besteht ist Eigentum von Paizo Inc.
// URL: https://paizo.com/image/product/catalog/PZO/PZO9036_500.jpeg
function create_playbook(x_koord, y_koord, z_koord) {
    var geometry = new THREE.BoxGeometry(21, 1.5, 30);
    var texture = new THREE.TextureLoader().load('images/kingmaker-front.jpeg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.anisotropy = 8
    var material = new THREE.MeshLambertMaterial({ map: texture, side: THREE.DoubleSide });
    var plane = new THREE.Mesh(geometry, material);
    plane.position.set(x_koord, y_koord, z_koord);
    //plane.rotation.x = THREE.Math.degToRad(45);
    plane.rotation.y = THREE.Math.degToRad(-45);
    plane.rotation.z = THREE.Math.degToRad(180);
    plane.castShadow = true;
    plane.receiveShadow = true;
    scene.add(plane);
}

// Erzeugt einen GM-Screen aus 4 THREE.PlaneGeometry
// Das Bild aus dem die Front Texturen bestehen ist Eigentum von Paizo Inc.
// URL: https://paizo.com/image/content/Secondary/PZO1113-Alt2Secondary.jpg
// Das Bild aus dem die Back Texturen bestehen stammt von Hobbygames.ru
// https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Pathfinder_RPG/Pathfinder_GM_Screen/Pathfinder_GM_Screen_1-1024x1024-wm.jpg
function create_gm_screen(x_koord, y_koord, z_koord) {
    var geometry = new THREE.PlaneGeometry(21, 30, 4, 1);

    // Vorderseite rechts
    var texture = new THREE.TextureLoader().load('images/gm-screen-front-4.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.anisotropy = 8
    var material = new THREE.MeshLambertMaterial({ map: texture });
    var plane = new THREE.Mesh(geometry, material);
    plane.position.set(x_koord, y_koord, z_koord);
    plane.rotation.y = THREE.Math.degToRad(45);
    plane.castShadow = true;
    plane.receiveShadow = true;
    scene.add(plane);

    // Rueckseite rechts
    var texture = new THREE.TextureLoader().load('images/gm-screen-back-4.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.anisotropy = 8
    var material = new THREE.MeshLambertMaterial({ map: texture});
    var plane = new THREE.Mesh(geometry, material);
    plane.position.set(x_koord, y_koord, z_koord);
    plane.rotation.y = THREE.Math.degToRad(225);
    plane.castShadow = true;
    plane.receiveShadow = true;
    scene.add(plane);

    // Vorderseite mitte rechts
    var texture = new THREE.TextureLoader().load('images/gm-screen-front-3.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.anisotropy = 8
    var material = new THREE.MeshLambertMaterial({ map: texture });
    var plane = new THREE.Mesh(geometry, material);
    plane.position.set(x_koord - 17.8, y_koord, z_koord + 7.4);
    plane.castShadow = true;
    plane.receiveShadow = true;
    scene.add(plane);

    // Rueckseite mitte rechts
    var texture = new THREE.TextureLoader().load('images/gm-screen-back-3.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.anisotropy = 8
    var material = new THREE.MeshLambertMaterial({ map: texture });
    var plane = new THREE.Mesh(geometry, material);
    plane.position.set(x_koord - 17.8, y_koord, z_koord + 7.4);
    plane.rotation.y = THREE.Math.degToRad(180);
    plane.castShadow = true;
    plane.receiveShadow = true;
    scene.add(plane);

    // Vorderseite mitte links
    var texture = new THREE.TextureLoader().load('images/gm-screen-front-2.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.anisotropy = 8
    var material = new THREE.MeshLambertMaterial({ map: texture });
    var plane = new THREE.Mesh(geometry, material);
    plane.position.set(x_koord - 38.8, y_koord, z_koord + 7.4);
    plane.castShadow = true;
    plane.receiveShadow = true;
    scene.add(plane);

    // Rueckseite mitte links
    var texture = new THREE.TextureLoader().load('images/gm-screen-back-2.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.anisotropy = 8
    var material = new THREE.MeshLambertMaterial({ map: texture });
    var plane = new THREE.Mesh(geometry, material);
    plane.position.set(x_koord - 38.8, y_koord, z_koord + 7.4);
    plane.rotation.y = THREE.Math.degToRad(180);
    plane.castShadow = true;
    plane.receiveShadow = true;
    scene.add(plane);

    // Vorderseite links
    var texture = new THREE.TextureLoader().load('images/gm-screen-front-1.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.anisotropy = 8
    var material = new THREE.MeshLambertMaterial({ map: texture });
    var plane = new THREE.Mesh(geometry, material);
    plane.position.set(x_koord - 56.6, y_koord, z_koord);
    plane.rotation.y = THREE.Math.degToRad(-45);
    plane.castShadow = true;
    plane.receiveShadow = true;
    scene.add(plane);

    // Rueckseite links
    var texture = new THREE.TextureLoader().load('images/gm-screen-back-1.jpg');
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.anisotropy = 8
    var material = new THREE.MeshLambertMaterial({ map: texture });
    var plane = new THREE.Mesh(geometry, material);
    plane.position.set(x_koord - 56.6, y_koord, z_koord);
    plane.rotation.y = THREE.Math.degToRad(-225);
    plane.castShadow = true;
    plane.receiveShadow = true;
    scene.add(plane);
}
