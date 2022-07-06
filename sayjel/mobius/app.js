const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const spotLight = new THREE.SpotLight('white', 0.7);
spotLight.castShadow = true;
spotLight.position.set(0, 1, 0);
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
spotLight.shadow.camera.near = 0.1;
spotLight.shadow.camera.far = 5;
scene.add(spotLight);

scene.add(new THREE.AmbientLight('white', 0.3));

const camera = new THREE.PerspectiveCamera();
camera.position.setScalar(4);
camera.lookAt(scene.position);
new THREE.OrbitControls(camera, renderer.domElement);


polarGrid(10, 10, 10)


function polarGrid(r, u, v) {


    let stepV = Math.PI / v
    let geometry = new THREE.SphereGeometry(1, 1, 1)


    for (var angle = 0; angle < Math.PI; angle += stepV) {

        let angle = 0;
        let x = r * Math.cos(angle);
        let z = r * Math.sin(angle);

        let mesh = new THREE.Mesh(geometry)
        mesh.position.x = x
        mesh.position.z = z

        scene.add(mesh)


    }





}



// function mobius(radius, theta) {

//     let R = radius // midcircle of radius
//     let t = null 
//     let s = null

//     let x = [R + s*Math.cos(0.5*t)] * Math.cos(t)
//     let y = [R + s*Math.cos(0.5*t)] * Math.sin(t)
//     let z = s*Math.sin(0.5*t),


// }



// const count = 256;
/*const strip = new THREE.Object3D();
scene.add(strip)

generateMobiusStrip(strip, 256, 24)

function generateMobiusStrip(strip, DIMX, DIMY) {

    const box = new THREE.BoxGeometry();


    subdivideRow(0.03, 0.3, 0.001)


    const radius = 1
    const mat = new THREE.MeshPhongMaterial(/*{ wireframe: true}*/
// );

// for (let i = 0; i < DIMX; i++) {

//     const a = Math.PI / DIMX * 2 * i;
//     const o = new THREE.Object3D();
//     o.position.set(Math.cos(a), Math.sin(a * 5) / 30, Math.sin(a))
//     o.position.multiplyScalar(radius);
//     o.lookAt(scene.position);
//     strip.add(o);
//     const mesh = new THREE.Mesh(box, mat);
//     mesh.scale.set(0.03, 0.3, 0.001) // check these values 
//     mesh.castShadow = true;
//     mesh.receiveShadow = true;
//     mesh.rotation.x = i / DIMX * Math.PI;
//     o.add(mesh)

// }



// }

// function subdvideMesh() {



// }

// */





requestAnimationFrame(function render(t) {
    if (renderer.width !== innerWidth || renderer.height !== innerHeight) {
        renderer.setSize(innerWidth, innerHeight);
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
    }
    /*    strip.rotation.y += 0.001;
        strip.traverse(o => {
            o.material && (o.rotation.x += 0.01)
        })*/
    renderer.render(scene, camera);
    requestAnimationFrame(render);
});