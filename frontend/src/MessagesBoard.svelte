<script>
    import Message from "./Message.svelte";

    export let posts;
    export let institute;
</script>

<div>
    {#if posts.length > 0}
        {#each posts as post}
            <Message content={post} />
        {/each}
    {:else}
        No new messages
    {/if}
</div>

<style>
    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: 70%;
    }
</style>
