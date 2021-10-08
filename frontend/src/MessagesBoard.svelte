<script>
    import Message from "./Message.svelte";

    export let messages;
</script>

<div>
    {#if messages.length > 0}
        {#each messages as message}
            <Message content={message} />
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
