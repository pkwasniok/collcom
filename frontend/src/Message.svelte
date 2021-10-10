<script>
    export let content;
</script>

<div>
    <h2>
        {content.title} - <span>by {content.institute}</span>
    </h2>
    <hr />
    <p>{content.description}</p>
</div>

<style>
    h2 span {
        font-size: 20px;
        width: 100%;
        text-align: right;
    }
    h2 {
        width: 100%;
        text-align: left;
    }
</style>
