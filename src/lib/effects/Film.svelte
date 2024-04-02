<script>
    import {createEventDispatcher, getContext, onMount} from 'svelte'
    import { BROWSER } from 'esm-env'
    import {FilmPass} from "three/addons";

    export let debug = false, grayscale = false
    export let intensity = 0.05


    if (BROWSER){
        const { composer } = getContext('three')
        const { gui } = getContext('three')

        const dispatch = createEventDispatcher()

        const effects = {
            intensity : intensity,
            grayscale : grayscale,
            disableFilm : false
        }

        function render() {
            dispatch("render", {})
        }

        onMount(() => {
            const filmPass = new FilmPass(intensity, grayscale)

            if (debug){
                const folder = gui().addFolder( 'Film' );

                folder.add(effects, "intensity", 0.0, 1.0).onChange(value => {intensity = value; filmPass.uniforms['intensity'].value = intensity})
                folder.add(effects, "grayscale").onChange(value => {grayscale = value; filmPass.uniforms['grayscale'].value = grayscale})
                folder.add(effects, "disableFilm").onChange(value => {value ? composer().removePass(filmPass) : composer().addPass(filmPass)})
            }

            composer().addPass(filmPass)
            dispatch("start", {})
        })

        addEventListener("render", render, false);
    }
</script>