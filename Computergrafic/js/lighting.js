function illuminate() {
    var light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);

    var light1 = createLight(0xFF7F00);
    var light2 = createLight(0x00FF7F);
    var light3 = createLight(0x7F00FF);

    light1.position.set(-150, 115, 250);
    light2.position.set(0, 200, 175);
    light3.position.set(- 75, 200, 255);

    scene.add(light1);//, light2, light3);
}

function createLight(color) {
    var newObj = new THREE.PointLight(color, 1.5, 1000, 2);
    newObj.castShadow = true;
    newObj.shadow.camera.near = 1;
    newObj.shadow.camera.far = 800;
    newObj.shadow.bias = -0.00001;
    newObj.shadow.mapSize.width = 2048;
    newObj.shadow.mapSize.height = 2048;
    var geometry = new THREE.SphereBufferGeometry(0.3, 12, 6);
    var material = new THREE.MeshBasicMaterial({ color: color });
    material.color.multiplyScalar(1.5);
    var sphere = new THREE.Mesh(geometry, material);
    newObj.add(sphere);
    return newObj;
}
