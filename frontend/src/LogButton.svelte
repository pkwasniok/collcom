<script>
    export let isAuthenticated;
    export let onLogIn;
    export let onLogOut;
</script>

<div>
    {#if !$isAuthenticated}
        <button on:click={onLogIn}>Login</button>
    {:else}
        <button on:click={onLogOut}>Logout</button>
    {/if}
</div>

<style>
    div {
        position: fixed;
        left: 95%;
        transform: translateX(-100%);
    }
</style>
