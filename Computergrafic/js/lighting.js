function illuminate() {
    var light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);

    // var ceiling_light = create_light_ceiling(0xFFFFFF);
    var ceiling_light = createLight(0x404040, 0.3);
    ceiling_light.position.set(0.8, 101, -10.7);
    scene.add(ceiling_light);

    var light1 = createLight(0xFF7F00, 0.3);
    light1.position.set(-150, 120, 250);
    //scene.add(light1);    
}

function createLight(color, size) {
    var newObj = new THREE.PointLight(color, 1.5, 1000, 2);
    newObj.castShadow = true;
    newObj.shadow.camera.near = 1;
    newObj.shadow.camera.far = 800;
    newObj.shadow.bias = -0.00001;
    newObj.shadow.mapSize.width = 2048;
    newObj.shadow.mapSize.height = 2048;
    var geometry = new THREE.SphereBufferGeometry(size, 12, 12);
    var material = new THREE.MeshBasicMaterial({ color: color });
    material.color.multiplyScalar(1.5);
    var sphere = new THREE.Mesh(geometry, material);
    newObj.add(sphere);
    return newObj;
}

function create_light_ceiling(color, pos_x, pos_y, pos_z) {
    var newObj = new THREE.PointLight(color, 1.5, 1000, 2);
    newObj.castShadow = true;
    newObj.shadow.camera.near = 1;
    newObj.shadow.camera.far = 800;
    newObj.shadow.bias = -0.00001;
    newObj.shadow.mapSize.width = 2048;
    newObj.shadow.mapSize.height = 2048;
    var geometry = new THREE.CylinderBufferGeometry(4, 8, 17, 32);
    var material = new THREE.MeshBasicMaterial({ color: color });
    material.color.multiplyScalar(1.5);
    var mesh = new THREE.Mesh(geometry, material);
    newObj.add(mesh);
    return newObj;
}