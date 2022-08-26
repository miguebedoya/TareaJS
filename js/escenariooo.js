const scene = new THREE.Scene();
scene.background = new THREE.Color(0xEFFF00)
scene.fog = new THREE.Fog( 0x1BD118,2, 9 );


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



const geometry = new THREE.ConeGeometry( 3, 5, 5 );
const material = new THREE.MeshBasicMaterial( {color: "red"} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.z = 7;

function animate(){

    requestAnimationFrame( animate );
    cone.rotation.y += 0.1;
    renderer.render( scene, camera );
}
animate();