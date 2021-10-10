<script>
    export let search;
</script>

<input bind:value={search} placeholder="Institute name" />

<style>
    input {
        position: fixed;
        left: 5%;
        z-index: 1000;
    }
</style>
