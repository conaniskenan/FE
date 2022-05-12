import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stat from 'three/examples/jsm/libs/stats.module'
import * as dat from 'dat.gui'
import './base.css'
import './test'

const canvas = document.getElementById('webgl')
const scene = new THREE.Scene()
const stat = new Stat()
const gui = new dat.GUI()
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshNormalMaterial({ wireframe: true })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)
camera.position.z = 3
gui.add(cube.position, 'x', -4, 4, 0.1)
const cubeControls = {
	color: 0xff0000,
}
gui.addColor(cubeControls, 'color').onChange(() => {
	cube.color = new THREE.Color(cubeControls.color)
})
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.autoRotate = true
//controls.update()
scene.add(camera)
scene.add(new THREE.AxesHelper(2, 2, 2))
const renderer = new THREE.WebGLRenderer({ canvas })
document.body.append(stat.dom)
const clock = new THREE.Clock()
const tick = () => {
	// const elapsedTime = clock.getElapsedTime()
	// cube.rotation.x = elapsedTime
	requestAnimationFrame(tick)
	controls.update()
	renderer.render(scene, camera)
	stat.update()
}
tick()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x000000, 1)
renderer.render(scene, camera)
window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
})
