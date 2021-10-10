<script>
	import Title from "./Title.svelte";
	import MessagesBoard from "./MessagesBoard.svelte";
	import { Stretch } from "svelte-loading-spinners";

	let institute = "I";
	let url = "https://lwraym5r2h.execute-api.ap-south-1.amazonaws.com/items/";

	async function fetch_api(institute) {
		let data = await fetch(url + institute).then((x) => x.json());
		return data;
	}
</script>

<input bind:value={institute} />

{#await fetch_api(institute)}
	<span id="loading-spinner"><Stretch color={"#AAA"} /></span>
{:then posts}
	{#if posts.length > 0}
		<Title new_message_indicator={posts.length > 0} />
		<MessagesBoard {posts} />
	{:else}
		<Title new_message_indicator={posts.length > 0} />
		<p>Can't find institute "{institute}"</p>
	{/if}
{:catch error}
	<p>Error occured: {error}</p>
{/await}

<style>
	p {
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: large;
		transform: translate(-50%, -50%);
	}

	#loading-spinner {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
