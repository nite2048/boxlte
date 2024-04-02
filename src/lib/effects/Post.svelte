<script>
    import {createEventDispatcher, getContext, onMount} from 'svelte'
    import { BROWSER } from 'esm-env'
    import {
        AfterimagePass,
        FXAAShader,
        GammaCorrectionShader,
        SepiaShader,
        ShaderPass,
        VignetteShader
    } from "three/addons";

    export let debug = false, afterImage = false, antialiasing = false, gammaCorrection = false, sepia = false, vignette = false
    export let dampening = 0.96, amount = 1, darkness = 1, offset = 1

    if (BROWSER){
        const { composer } = getContext('three')
        const { gui } = getContext('three')

        const dispatch = createEventDispatcher()

        const afterImageEffect = {
            dampening : dampening
        }

        const sepiaEffect = {
            amount : amount
        }

        const vignetteEffect = {
            offset : offset,
            darkness : darkness
        }

        const actions = {
            disableAfterImage : false,
            disableAntialiasing : false,
            disableGammaCorrection : false,
            disableSepia : false,
            disableVignette : false,
        }

        function render() {
            dispatch("render", {})
        }

        onMount(() => {
            let afterImagePass = null
            let antialiasingPass = null
            let gammaPass = null
            let sepiaPass = null
            let vignettePass = null

            if (afterImage){
                afterImagePass = new AfterimagePass(dampening)
                composer().addPass(afterImagePass)
            }
            if (antialiasing){
                antialiasingPass =  new ShaderPass(FXAAShader);
                antialiasingPass.material.uniforms['resolution'].value.x = 1 / (window.innerWidth * window.devicePixelRatio);
                antialiasingPass.material.uniforms['resolution'].value.y = 1 / (window.innerHeight * window.devicePixelRatio);
                composer().addPass(antialiasingPass);
            }
            if(gammaCorrection){
                gammaPass = new ShaderPass(GammaCorrectionShader);
                composer().addPass(gammaPass);
            }
            if(sepia){
                sepiaPass = new ShaderPass(SepiaShader);
                sepiaPass.uniforms['amount'].value = 1;

                composer().addPass(sepiaPass);
            }

            if (vignette){
                vignettePass = new ShaderPass(VignetteShader);
                vignettePass.uniforms['offset'].value = 0.5
                vignettePass.uniforms['darkness'].value = 0.8
                composer().addPass(vignettePass);
            }

            if (debug){
                const afterImage = gui().addFolder( 'afterImage' );
                const antialiasing = gui().addFolder( 'Antialiasing' );
                const gamma = gui().addFolder( 'Gamma' );
                const sepia = gui().addFolder( 'Sepia' );
                const vignette = gui().addFolder( 'Vignette' );

                afterImagePass != null ? afterImage.add(afterImageEffect, "dampening", 0.0, 2.0).onChange(value => {dampening = value; afterImagePass.uniforms['damp'].value = dampening}) : null
                sepiaPass != null ?  sepia.add(sepiaEffect, "amount", 0).onChange(value => {amount = value;  sepiaPass.uniforms['amount'].value = amount}) : null
                vignettePass != null ? vignette.add(vignetteEffect, "offset", 0.0, 10, 1.0).onChange(value => {offset = value;  vignettePass.uniforms['offset'].value = offset}) : null
                vignettePass != null ? vignette.add(vignetteEffect, "darkness", 0.0, 10, 1.0).onChange(value => {darkness = value;  vignettePass.uniforms['darkness'].value = darkness}) : null

                afterImagePass != null ? afterImage.add(actions, "disableAfterImage").onChange(value => {value ? composer().removePass(afterImagePass) : composer().addPass(afterImagePass)}) : null
                antialiasingPass != null ?  antialiasing.add(actions, "disableAntialiasing").onChange(value => {value ? composer().removePass(antialiasingPass) : composer().addPass(antialiasingPass)}) : null
                gammaPass != null ?  gamma.add(actions, "disableGammaCorrection").onChange(value => {value ? composer().removePass(gammaPass) : composer().addPass(gammaPass)}) : null
                sepiaPass != null ? sepia.add(actions, "disableSepia").onChange(value => {value ? composer().removePass(sepiaPass) : composer().addPass(sepiaPass)}) : null
                vignettePass != null ? vignette.add(actions, "disableVignette").onChange(value => {value ? composer().removePass(vignettePass) : composer().addPass(vignettePass)}) : null
            }

            dispatch("start", {})
        })

        addEventListener("render", render, false);
    }
</script>