<div id="renderer"></div>

<script>
    import * as three from 'three';
    import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
    import { createEventDispatcher, onMount, setContext } from "svelte";
    import { BROWSER } from 'esm-env'
    import {RenderPass} from "three/addons";
    import {GUI} from "three/addons/libs/lil-gui.module.min.js";

    export let camera, scene, renderer, composer
    export let cameraSettings = {fov : 75, near : 0.1, far: 1000}
    export let cameraPosition = {x: 0, y: 0, z: 0}
    export let cameraRotation = {x: 0, y: 0, z: 0, all: 0, bind: false}
    export let noShadows = false, noAntialias = false, noAmbience = false, focus = undefined, centerFocus = false
    export let ambientLightColor = 'white', ambientLightIntensity = Math.PI * 0.2
    export let rendererSettings

    const event = new Event("render");

    if ( BROWSER ){
        cameraSettings.aspectRatio === undefined ? cameraSettings.aspectRatio = (window.innerWidth / window.innerHeight) : cameraSettings.aspectRatio
        cameraSettings.fov === undefined ? cameraSettings.fov = 75 : cameraSettings.fov
        cameraSettings.near === undefined ? cameraSettings.near = 0.1 : cameraSettings.near
        cameraSettings.far === undefined ? cameraSettings.far = 1000 : cameraSettings.far

        rendererSettings = { antialias : !noAntialias }

        scene = new three.Scene();
        camera = new three.PerspectiveCamera( cameraSettings.fov, cameraSettings.aspectRatio, cameraSettings.near, cameraSettings.far);
        renderer = new three.WebGLRenderer(rendererSettings);
        composer = new EffectComposer( renderer );
        const dispatch = createEventDispatcher()

        composer.setSize(window.innerWidth, window.innerHeight)
        composer.addPass(new RenderPass( scene, camera));

        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.shadowMap.enabled = !noShadows
        renderer.shadowMap.type = noShadows ? null : three.BasicShadowMap

        const ambient = noAmbience ? null : new three.AmbientLight(ambientLightColor, ambientLightIntensity)
        noAmbience ? null : scene.add(ambient);

        const gui = new GUI()


        onMount(() => {
            camera.position.x = isNaN(cameraPosition.x) ? camera.position.x : cameraPosition.x
            camera.position.y = isNaN(cameraPosition.y) ? camera.position.y : cameraPosition.y
            camera.position.z = isNaN(cameraPosition.z) ? camera.position.z : cameraPosition.z

            cameraRotation.all = isNaN(cameraRotation.all) ? 0 : cameraRotation.all

            if (cameraRotation.bind){
                camera.rotation.x = cameraRotation.all
                camera.rotation.y = cameraRotation.all
                camera.rotation.z = cameraRotation.all
            }else{
                camera.rotation.x = isNaN(cameraRotation.x) ? camera.rotation.x : cameraRotation.x
                camera.rotation.y = isNaN(cameraRotation.y) ? camera.rotation.y : cameraRotation.y
                camera.rotation.z = isNaN(cameraRotation.z) ? camera.rotation.z : cameraRotation.z
            }

            if(focus !== undefined && (!isNaN(focus.x) || !isNaN(focus.y) || !isNaN(focus.z))){
                isNaN(focus.x) ? 0 : 0
                isNaN(focus.y) ? 0 : 0
                isNaN(focus.z) ? 0 : 0

                camera.lookAt(new three.Vector3(focus.x, focus.y, focus.z))
            }

            centerFocus ? camera.lookAt(0, 0, 0) : null

            dispatch("start", {})
            document.getElementById('renderer').appendChild(renderer.domElement)
        })

        setContext('three', {
            scene: () => scene,
            composer: () => composer,
            gui : () => gui
        })

        function animate() {
            requestAnimationFrame( animate )
            composer.render()
            dispatchEvent(event)
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth/window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
</script>

<slot {scene} {camera} {renderer} />