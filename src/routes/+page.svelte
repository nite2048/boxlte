<script>
    import {Light, World} from "../lib/index.js";
    import {Box, Plane} from "../lib/shapes/index.js";
</script>

<World cameraPosition={{y: 2, z: 5}} centerFocus>
    <Light position={{x: 1, y: 5, z: 4}} intensity={Math.PI * 13} spot/>

    <Box color="deepskyblue" position={{y: 0.5}}/>
    <Plane color="white" radius={3} rounded alignHorizontal noShadowCast />
</World>

