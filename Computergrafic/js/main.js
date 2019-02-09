//new scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//adding cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);

//adding table
var geometry = new THREE.BoxGeometry(20, 1, 60, 1, 3, 1)
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
var tischplatte = new THREE.Mesh(geometry, material)


function init() {
    //scene.add(cube);
    scene.add(tischplatte)
    camera.position.z = 65;
    camera.position.x = 50
}

//render scene
function animate() {
    requestAnimationFrame(animate);
    //animatied moving parts between here
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    //and here
    renderer.render(scene, camera);
}
animate();
var main = function () {
    this.init();
    this.animate();
}

main();