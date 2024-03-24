<script>
    import {Light, World} from "../lib/index.js";
    import {Custom, Plane} from "../lib/shapes/index.js";
</script>

<World cameraPosition={{y: 1, z: 5}} centerFocus>
    <Light position={{x: 2, y: 2, z: 2}} directional />

    <Custom path="src/assets/monitor/scene.gltf" rotation={{y: Math.PI / 2 * -1}} scale={{all: 0.01}} />
    <Plane color="skyblue" position={{y: -1}} scale={{bind: true, all: 8}} alignHorizontal noShadowCast/>
</World>