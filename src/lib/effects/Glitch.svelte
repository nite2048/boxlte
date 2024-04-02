<script>
    import {createEventDispatcher, getContext, onMount} from 'svelte'
    import { BROWSER } from 'esm-env'
    import {GlitchPass} from "three/addons";

    export let amount = Math.random() / 30, angle = randomFloat( - Math.PI, Math.PI ), seedX = randomFloat( - 1, 1 ), seedY = randomFloat( - 1, 1 ),
        distortionX = randomFloat( 0, 1 ), distortionY = randomFloat( 0, 1 ), columns = 0.05, wild = false, debug = false


    if (BROWSER){
        const { composer } = getContext('three')
        const { gui } = getContext('three')

        const dispatch = createEventDispatcher()
        
        const effects = {
            amount : amount,
            angle : angle,
            seedX : seedX,
            seedY : seedY,
            distortionX : distortionX,
            distortionY : distortionY,
            columns : columns,
            wild : wild,
            disableGlitches : false
        }

        function render() {
            dispatch("render", {})
        }

        onMount(() => {
            const glitchPass = new GlitchPass();
            
            glitchPass.uniforms[ 'amount' ].value = amount
            glitchPass.uniforms[ 'angle' ].value = angle
            glitchPass.uniforms[ 'seed_x' ].value = seedX
            glitchPass.uniforms[ 'seed_y' ].value = seedY
            glitchPass.uniforms[ 'distortion_x' ].value = distortionX
            glitchPass.uniforms[ 'distortion_y' ].value = distortionY
            glitchPass.uniforms[ 'col_s' ].value = columns
            glitchPass.goWild = wild

            if (debug){
                const folder = gui().addFolder( 'Glitch' );

                folder.add(effects, "amount").onChange(value => {amount = value; glitchPass.uniforms['amount'].value = amount})
                folder.add(effects, "angle", -Math.PI, Math.PI).onChange(value => {angle = value; glitchPass.uniforms['angle'].value = angle})
                folder.add(effects, "seedX", -1, 1).onChange(value => {seedX = value; glitchPass.uniforms['seed_x'].value = seedX})
                folder.add(effects, "seedY", -1, 1).onChange(value => {seedY = value; glitchPass.uniforms['seed_y'].value = seedY})
                folder.add(effects, "distortionX", 0, 1).onChange(value => {distortionX = value; glitchPass.uniforms['distortion_x'].value = distortionX})
                folder.add(effects, "distortionY", 0, 1).onChange(value => {distortionY = value; glitchPass.uniforms['distortion_y'].value = distortionY})
                folder.add(effects, "columns").onChange(value => {columns = value; glitchPass.uniforms['col_s'].value = columns})
                folder.add(effects, "wild").onChange(value => {wild = value; glitchPass.goWild = wild})
                folder.add(effects, "disableGlitches").onChange(value => {value ? composer().removePass(glitchPass) : composer().addPass(glitchPass)})
            }

            composer().addPass(glitchPass);
            dispatch("start", {})
        })

        addEventListener("render", render, false);
    }


    function randomFloat( low, high ) {
        return low + Math.random() * ( high - low );
    }
</script>