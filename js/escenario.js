const scene = new THREE.Scene();
scene.background= new THREE.Color(0xEFFF00)


var loader = new THREE.TextureLoader();
loader.load("../img/cfondo.jpg", function(texture){
    scene.background = texture;
});



const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.z = 7;


function animate(){

    requestAnimationFrame( animate );
    capsule.rotation.y += 0.1;
    renderer.render( scene, camera );
}
animate()