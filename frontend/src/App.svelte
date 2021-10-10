<script>
	import Title from "./Title.svelte";
	import MessagesBoard from "./MessagesBoard.svelte";
	import { dataset_dev } from "svelte/internal";
	import Message from "./Message.svelte";

	let test = false;

	const fetchImage = (async () => {
		const response = await fetch(
			"http://lwraym5r2h.execute-api.ap-south-1.amazonaws.com/items/I",
			{ mode: "no-cors" }
		);
		console.log(response);
		return await response;
	})();
</script>

{#await fetchImage}
	<p>Loading data...</p>
{:then messages}
	<!--<Title new_message_indicator={messages.length > 0} />-->
	<!--<MessagesBoard {messages} />-->
	<p>{messages}</p>
{:catch error}
	<p>An error occured during loading messages: {error}</p>
{/await}
