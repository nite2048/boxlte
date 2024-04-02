<script>
    import {createEventDispatcher, getContext, onMount} from 'svelte'
    import { BROWSER } from 'esm-env'
    import {UnrealBloomPass} from "three/addons";
    import {Vector2} from "three";

    export let debug = false, renderer = null
    export let strength = 1.5, radius = 0.4, threshold = 0.85, exposure = 0.9


    if (BROWSER){
        const { composer } = getContext('three')
        const { gui } = getContext('three')
        const dispatch = createEventDispatcher()

        const effects = {
            strength : strength,
            radius : radius,
            threshold : threshold,
            exposure : exposure,
            disableBloom : false
        }

        function render() {
            dispatch("render", {})
        }

        onMount(() => {
            const bloomPass = new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), strength, radius, exposure)

            composer().addPass(bloomPass)

            renderer != null ? renderer.toneMappingExposure = Math.pow(exposure, 4.0) : console.warn("Tone mapping exposure not applied, renderer missing!")

            if (debug){
                const folder = gui().addFolder( 'Bloom' );

                folder.add(effects, "strength", 0.0, 10.0, 0.1).onChange(value => {strength = value; bloomPass.strength = strength});
                folder.add(effects, "threshold", 0.0, 1.0, 0.1).onChange(value => {threshold = value; bloomPass.threshold = threshold});
                folder.add(effects, "radius", 0.0, 10.0, 0.1).onChange(value => {radius = value; bloomPass.radius = radius});
                folder.add(effects, "disableBloom").onChange(value => {value ? composer().removePass(bloomPass) : composer().addPass(bloomPass)});
                renderer != null ? folder.add(effects, "exposure").onChange(value => {exposure = value; renderer.toneMappingExposure = Math.pow(effects.exposure, 4.0)}) : console.warn("Tone mapping exposure not applied, renderer GUI missing!")
            }

            dispatch("start", {})
        })

        addEventListener("render", render, false);
    }
</script>