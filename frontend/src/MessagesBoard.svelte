<script>
    import Message from "./Message.svelte";

    export let posts;
</script>

<div>
    {#if posts.length > 0}
        {#each posts as post}
            <Message content={post} />
        {/each}
    {:else}
        <p>No messages</p>
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

    p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media only screen and (max-width: 900px) {
        div {
            width: 90%;
        }
    }

    @media only screen and (max-width: 700px) {
        div {
            top: 15%;
            width: 95%;
        }
    }

    @media only screen and (max-width: 600px) {
        div {
            width: 95%;
        }
    }
</style>
