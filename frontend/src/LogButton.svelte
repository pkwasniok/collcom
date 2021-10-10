<script>
    export let isAuthenticated;
    export let onLogIn;
    export let onLogOut;
    export let onAdd;
</script>

<div>
    {#if !$isAuthenticated}
        <button on:click={onLogIn}>Login</button>
    {:else}
        <button on:click={onAdd} style={"float: right; margin-left: 1%;"}
            >Add</button
        >
        <button on:click={onLogOut}>Logout</button>
    {/if}
</div>

<style>
    div {
        position: fixed;
        width: 100%;
        left: 95%;
        transform: translateX(-100%);
        text-align: right;
    }
</style>
