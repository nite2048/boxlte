<script>
    import * as three from "three";
    import {createEventDispatcher, onMount, getContext} from "svelte";
    import { BROWSER } from 'esm-env'

    export let position = {x: 0, y: 0, z: 0}
    export let rotation = {x: 0, y: 0, z: 0, all: 0}
    export let directional = false, spot = false, point = false
    export let color = 'white', intensity = Math.PI, noCastShadow = false, mapSize = {width: 2048, height: 2048}, near = 0.5, far = 1000
    export let distance = 0, angle = Math.PI / 3, penumbra = 0, decay = 2

    let light

    function update(light) {
        light.position.x = isNaN(position.x) ? light.position.x : position.x
        light.position.y = isNaN(position.y) ? light.position.y : position.y
        light.position.z = isNaN(position.z) ? light.position.z : position.z

        rotation.all = isNaN(rotation.all) ? 0 : rotation.all

        if (rotation.all !== 0){
            light.rotation.x = rotation.all
            light.rotation.y = rotation.all
            light.rotation.z = rotation.all
        }else{
            light.rotation.x = isNaN(rotation.x) ? light.rotation.x : rotation.x
            light.rotation.y = isNaN(rotation.y) ? light.rotation.y : rotation.y
            light.rotation.z = isNaN(rotation.z) ? light.rotation.z : rotation.z
        }
    }

    if ( BROWSER ){
        const { scene } = getContext('three')
        const dispatch = createEventDispatcher()

        if (directional){
            light = new three.DirectionalLight(color , intensity);

            light.castShadow = !noCastShadow
            light.shadow.mapSize.width = mapSize.width
            light.shadow.mapSize.height = mapSize.height
            light.shadow.camera.near = near
            light.shadow.camera.far = far
        }else if (spot){
            light = new three.SpotLight(color , intensity, distance, angle, penumbra, decay);

            light.castShadow = !noCastShadow
            light.shadow.mapSize.width = mapSize.width
            light.shadow.mapSize.height = mapSize.height
            light.shadow.camera.near = near
            light.shadow.camera.far = far
        }else if (point){
            light = new three.PointLight(color, intensity, distance, decay)

            light.castShadow = !noCastShadow
            light.shadow.mapSize.width = mapSize.width
            light.shadow.mapSize.height = mapSize.height
            light.shadow.camera.near = near
            light.shadow.camera.far = far
        }

        function render() {
            dispatch("render", {})
            update(light)
        }


        onMount(() => {
            dispatch("start", {})
            scene().add(light);
            update(light)
        })

        addEventListener("render", render, false);
    }
</script>
<slot {position} {rotation} {light}/>
