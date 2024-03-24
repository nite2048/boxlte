<script>
    import { createEventDispatcher, getContext, onMount } from 'svelte'
    import { BROWSER } from 'esm-env'
    import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";

    export let position = {x: 0, y: 0, z: 0}
    export let rotation = {x: 0, y: 0, z: 0, all: 0}
    export let scale = {x: 1, y: 1, z: 1, all: 0}
    export let path

    let model, load = false

    function update() {
        if (load) {
            if (isNaN(position.x)) {
                model.position.setX(model.position.x)
            } else {
                model.position.setX(position.x)
            }

            if (isNaN(position.y)) {
                model.position.setY(model.position.y)

            } else {
                model.position.setY(position.y)
            }

            if (isNaN(position.z)) {
                model.position.setZ(model.position.z)
            } else {
                model.position.setZ(position.z)
            }

            if (isNaN(rotation.x)) {
                model.rotation.x = model.rotation.x
            } else {
                model.rotation.x = rotation.x
            }

            if (isNaN(rotation.y)) {
                model.rotation.y = model.rotation.y
            } else {
                model.rotation.y = rotation.y
            }

            if (isNaN(rotation.z)) {
                model.rotation.z = model.rotation.z
            } else {
                model.rotation.z = rotation.z
            }

            scale.x = isNaN(scale.x) ? 1 : scale.x
            scale.y = isNaN(scale.y) ? 1 : scale.y
            scale.z = isNaN(scale.z) ? 1 : scale.z

            rotation.all = isNaN(rotation.all) ? 0 : rotation.all
            scale.all = isNaN(scale.all) ? 1 : scale.all

            if (rotation.all !== 0) {
                model.rotation.set(rotation.all, rotation.all, rotation.all)
            }

            if (scale.all == 0) {
                model.scale.set(scale.x, scale.y, scale.z)
            } else {
                model.scale.multiplyScalar(scale.all)
            }
        }
    }

    if (BROWSER){
        const { scene } = getContext('three')
        const dispatch = createEventDispatcher()
        const loader = new GLTFLoader();

        onMount(() => {
            dispatch("start", {})

            loader.load(path, gltf => {
                model = gltf.scene
                scene().add(model);

                load = true
                update()

            }, undefined, error => {
                console.error(error);
            })
        })
    }
</script>

<slot {rotation} />

