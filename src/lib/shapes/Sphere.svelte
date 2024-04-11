<script>
    import * as three from 'three'
    import { createEventDispatcher, getContext, onMount } from 'svelte'
    import { BROWSER } from 'esm-env'

    export let radius = 0.5
    export let position = {x: 0, y: 0, z: 0}
    export let rotation = {x: 0, y: 0, z: 0, all: 0}
    export let scale = {x: 1, y: 1, z: 1, all: 0}
    export let color = new three.Color(255, 255, 255)
    export let material = new three.MeshStandardMaterial({ color : color})

    export let noShadowCast = false, noShadowReceive = false

    const geometry = new three.SphereGeometry(radius)
    const box = new three.Mesh(geometry, material);

    box.castShadow = !noShadowCast
    box.receiveShadow = !noShadowReceive

    function update() {
        box.position.x = isNaN(position.x) ? box.position.x : position.x
        box.position.y = isNaN(position.y) ? box.position.y : position.y
        box.position.z = isNaN(position.z) ? box.position.z : position.z

        rotation.all = isNaN(rotation.all) ? 0 : rotation.all
        scale.all = isNaN(scale.all) ? 0 : scale.all

        if (rotation.all !== 0){
            box.rotation.x = rotation.all
            box.rotation.y = rotation.all
            box.rotation.z = rotation.all
        }else{
            box.rotation.x = isNaN(rotation.x) ? box.rotation.x : rotation.x
            box.rotation.y = isNaN(rotation.y) ? box.rotation.y : rotation.y
            box.rotation.z = isNaN(rotation.z) ? box.rotation.z : rotation.z
        }

        if (scale.all !== 0){
            box.scale.x = scale.all
            box.scale.y = scale.all
            box.scale.z = scale.all
        }else{
            box.scale.x = isNaN(scale.x) ? box.scale.x : scale.x
            box.scale.y = isNaN(scale.y) ? box.scale.y : scale.y
            box.scale.z = isNaN(scale.z) ? box.scale.z : scale.z
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
            scene().add(box)
            dispatch("start", {})
            update()
        })

        addEventListener("render", render, false);
    }
</script>

<slot {position} {rotation} {scale} {geometry} {box} />
