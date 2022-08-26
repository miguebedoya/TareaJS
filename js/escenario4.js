const scene = new THREE.Scene();
scene.background = new THREE.Color(0x33FF49)
scene.fog = new THREE.Fog( 0xD1AD18,2, 9 );


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



const geometry = new THREE.CylinderGeometry( 2, 2, 5, 5 );
const material = new THREE.MeshBasicMaterial( {color: "blue"} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

camera.position.z = 7;

function animate(){

    requestAnimationFrame( animate );
    cylinder.rotation.y += 0.1;
    renderer.render( scene, camera );
}
animate();