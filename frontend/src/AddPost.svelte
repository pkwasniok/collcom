<script>
    let title;
    let content;
    let institute;

    export let click;
</script>

<div>
    <h3>Title:</h3>
    <input bind:value={title} />
    <h3>Content:</h3>
    <textarea bind:value={content} />
    <h3>Institute name:</h3>
    <input bind:value={institute} />
    <button on:click={click(title, content, institute)}>Add new post</button>
</div>

<style>
    div {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 60%;
        transform: translate(-50%, -50%);
    }

    input {
        width: 100%;
    }

    textarea {
        width: 100%;
        height: 30vh;
        resize: none;
    }

    button {
        width: 100%;
    }

    @media only screen and (max-width: 700px) {
        div {
            top: 55%;
            width: 95%;
        }
    }
</style>
