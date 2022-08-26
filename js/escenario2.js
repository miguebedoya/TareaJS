const scene = new THREE.Scene();
scene.background = new THREE.Color(0xEFFF00)



const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



const geometry = new THREE.CircleGeometry( 5, 32 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const circle = new THREE.Mesh( geometry, material );
scene.add( circle );

camera.position.z = 7;

function animate(){

    requestAnimationFrame( animate );
     circle.rotation.y += 0.1;
    renderer.render( scene, camera );
}
animate();