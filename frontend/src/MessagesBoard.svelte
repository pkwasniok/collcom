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
        left: 50%;
        transform: translateX(-50%);
        width: 70%;
        top: 10%;
    }

    @media only screen and (max-width: 900px) {
        div {
            width: 95%;
        }
    }

    @media only screen and (max-width: 600px) {
        div {
            width: 100%;
        }
    }
</style>
