<script>
    export let new_message_indicator = false;
    let status;

    $: if (new_message_indicator == true) {
        status = "📫";
    } else {
        status = "📪";
    }
</script>

<div>
    <h1>Students information system {status}</h1>
</div>

<style>
    div {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
