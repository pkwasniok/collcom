<script>
    import SearchBar from "./SearchBar.svelte";
    import LogButton from "./LogButton.svelte";

    export let search;
    export let isAuthenticated;
    export let onLogIn;
    export let onLogOut;
</script>

<div>
    <SearchBar bind:search />
    <LogButton {isAuthenticated} {onLogIn} {onLogOut} />
</div>

<style>
    div {
        position: absolute;
        top: 10px;
        left: 50%;
        width: 100%;
        transform: translateX(-50%);
        background-color: #aaa;
    }
</style>
