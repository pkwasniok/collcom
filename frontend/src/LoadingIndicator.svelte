<script>
    import { Stretch } from "svelte-loading-spinners";
</script>

<span><Stretch color={"#AAA"} /></span>

<style>
    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
