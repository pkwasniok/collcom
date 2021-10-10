<script>
	import Title from "./Title.svelte";
	import MessagesBoard from "./MessagesBoard.svelte";
	import { onMount } from "svelte";

	let search = null;

	async function fetch_api(url) {
		let data = await fetch(url).then((x) => x.json());
		return data;
	}
</script>

{#await fetch_api("https://lwraym5r2h.execute-api.ap-south-1.amazonaws.com/items/" + "I")}
	<p>Fetching data</p>
{:then posts}
	<Title new_message_indicator={posts.length > 0} />
	<MessagesBoard {posts} />
{:catch error}
	<p>Error occured: {error}</p>
{/await}
