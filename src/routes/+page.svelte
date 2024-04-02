<script>
    import {Light, World} from "../lib/index.js";
    import {Custom, Plane} from "../lib/shapes/index.js";
    import {Bloom, Film, Glitch, Halftone, Post} from "../lib/effects/index.js";
</script>

<World cameraPosition={{y: 2, z: 8}} centerFocus>
    <Light position={{x: 1, y: 5, z: 4}} intensity={Math.PI * 18} spot/>

    <Custom path="src/assets/monitor/scene.gltf" position={{y: 1}} rotation={{y: Math.PI / 2 * -1}} scale={{all: 0.01}} />
    <Plane color="blue" radius={4} rounded alignHorizontal noShadowCast />

    <Bloom debug/>
    <Film debug/>
    <Glitch debug/>
    <Halftone debug/>
    <Post afterImage sepia antialiasing gammaCorrection  vignette debug/>
</World>