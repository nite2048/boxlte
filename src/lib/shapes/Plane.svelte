<script>
    import * as three from 'three'
    import { createEventDispatcher, getContext, onMount } from 'svelte'
    import { BROWSER } from 'esm-env'

    export let position = {x: 0, y: 0, z: 0}
    export let rotation = {x: 0, y: 0, z: 0, all: 0}
    export let scale = {x: 1, y: 1,  all: 0}
    export let color = new three.Color(255, 255, 255)
    export let material = new three.MeshStandardMaterial({ side: three.DoubleSide, color : color})
    export let radius = 1, segments = 64, theta = 2 * Math.PI

    export let noShadowCast = false, noShadowReceive = false, alignHorizontal = false, alignVertical = false, alignSideways = false, rounded = false

    const geometry = rounded ? new three.CircleGeometry( radius, segments , 1, theta) : new three.PlaneGeometry(scale.x, scale.y, 1)
    const plane = new three.Mesh(geometry, material);

    plane.castShadow = !noShadowCast
    plane.receiveShadow = !noShadowReceive

    alignHorizontal ? alignX() : null
    alignVertical ? alignY() : null
    alignSideways ? alignZ() : null

    function alignX(){
        rotation.x =  Math.PI / 2
    }

    function alignY(){
        rotation.x =  Math.PI
    }

    function alignZ(){
        rotation.x =  Math.PI
        rotation.y =  Math.PI / 2
    }

    function update() {
        plane.position.x = isNaN(position.x) ? plane.position.x : position.x
        plane.position.y = isNaN(position.y) ? plane.position.y : position.y
        plane.position.z = isNaN(position.z) ? plane.position.z : position.z

        rotation.all = isNaN(rotation.all) ? 0 : rotation.all
        scale.all = isNaN(scale.all) ? 0 : scale.all
        plane.scale.z = 1

        if (rotation.all !== 0){
            plane.rotation.x = rotation.all
            plane.rotation.y = rotation.all
            plane.rotation.z = rotation.all
        }else{
            plane.rotation.x = isNaN(rotation.x) ? plane.rotation.x : rotation.x
            plane.rotation.y = isNaN(rotation.y) ? plane.rotation.y : rotation.y
            plane.rotation.z = isNaN(rotation.z) ? plane.rotation.z : rotation.z
        }

        if(rounded){
            if (scale.all !== 0){
                scale.all = radius
            }else if (scale.x !== 1){
                radius = scale.x
            }else if (scale.y !== 1){
                radius = scale.y
            }
        }else{
            if (scale.all !== 0){
                plane.scale.x = scale.all
                plane.scale.y = scale.all
            }else{
                plane.scale.x = isNaN(scale.x) ? plane.scale.x : scale.x
                plane.scale.y = isNaN(scale.y) ? plane.scale.y : scale.y
            }
        }
    }

    if (BROWSER){
        const { scene } = getContext('three')
        const dispatch = createEventDispatcher()

        function render() {
            dispatch("render", {})
            update()
        }

        onMount(() => {
            scene().add(plane)
            dispatch("start", {})
            update()
        })

        addEventListener("render", render, false);
    }
</script>

<slot {position} {rotation} {scale} {geometry} {plane} />
