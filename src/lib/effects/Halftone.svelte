<script>
    import {createEventDispatcher, getContext, onMount} from 'svelte'
    import { BROWSER } from 'esm-env'
    import {HalftonePass} from "three/addons" 

    export let debug = false, grayscale = false, disable = false
    export let shape = 3, radius = 2, rotationR = 10, rotationG = 10, rotationB = 10, scatter = 1, blending = 2, blendingMode = 3


    if (BROWSER){
        const { composer } = getContext('three')
        const { gui } = getContext('three')

        const dispatch = createEventDispatcher()

        const effects = {
            shape : shape,
            radius : radius,
            rotationR : rotationR,
            rotationG : rotationG,
            rotationB : rotationB,
            scatter : scatter,
            blending : blending,
            blendingMode : blendingMode,
            grayscale : grayscale,
            disable : disable,
            disableHalftone : false
        }

        function render() {
            dispatch("render", {})
        }

        onMount(() => {
            const halfTonePass = new HalftonePass(window.innerWidth, window.innerHeight, {... effects })
            composer().addPass(halfTonePass)

            if (debug) {
                const folder = gui().addFolder( 'Halftone' );

                folder.add(effects, "shape", 1, 4, 1).onChange(value => { shape = value ; halfTonePass.uniforms["shape"].value = shape})
                folder.add(effects, "radius", 1.0, 10.0, 1) .onChange(value => { radius = value ; halfTonePass.uniforms["radius"].value = radius})
                folder.add(effects, "rotationR", 1.0, 10.0, 1) .onChange(value => { rotationR = value ; halfTonePass.uniforms["rotateR"].value = rotationR})
                folder.add(effects, "rotationG", 1.0, 10.0, 1) .onChange(value => { rotationG = value ; halfTonePass.uniforms["rotateG"].value = rotationG})
                folder.add(effects, "rotationB", 1.0, 10.0, 1) .onChange(value => { rotationB = value ; halfTonePass.uniforms["rotateB"].value = rotationB})
                folder.add(effects, "scatter", 0.0, 10.0, 1) .onChange(value => { scatter = value ; halfTonePass.uniforms["scatter"].value = scatter})
                folder.add(effects, "blending") .onChange(value => { blending = value ; halfTonePass.uniforms["blending"].value = blending})
                folder.add(effects, "blendingMode", 1, 5, 1) .onChange(value => { blendingMode = value ; halfTonePass.uniforms["blendingMode"].value = blendingMode})
                folder.add(effects, "grayscale") .onChange(value => { grayscale = value ; halfTonePass.uniforms["greyscale"].value = grayscale})
                folder.add(effects, "disable") .onChange(value => { disable = value ; halfTonePass.uniforms["disable"].value = disable})
            }


            dispatch("start", {})
        })

        addEventListener("render", render, false) 
    }
</script>