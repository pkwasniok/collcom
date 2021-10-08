<script>
    export let content;
</script>

<div>
    <h2>
        {content.Title} - <span>{content.Date} by {content.Author}</span>
    </h2>
    <hr />
    <p>{content.Content}</p>
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
