<script>
    import { createEventDispatcher, onMount } from 'svelte'
    import { BROWSER } from 'esm-env'

    if (BROWSER){
        const dispatch = createEventDispatcher()

        function render() {
            dispatch("render", {})
        }

        onMount(() => {
            dispatch("start", {})
        })

        addEventListener("render", render, false);
    }
</script>