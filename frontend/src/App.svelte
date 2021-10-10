<script>
	import Header from "./Header.svelte";
	import LoadingIndicator from "./LoadingIndicator.svelte";
	import Title from "./Title.svelte";
	import AddPost from "./AddPost.svelte";

	import auth from "./authService";
	import { isAuthenticated, user } from "./store";
	import { onMount } from "svelte";
	import MessagesBoard from "./MessagesBoard.svelte";

	let newPost = false;
	let result = null;

	let auth0Client;

	onMount(async () => {
		auth0Client = await auth.createClient();

		isAuthenticated.set(await auth0Client.isAuthenticated());
		user.set(await auth0Client.getUser());

		console.log(user);
	});

	function login() {
		auth.loginWithPopup(auth0Client);
	}

	function logout() {
		auth.logout(auth0Client);
	}

	let institute = "I";
	let url = "https://lwraym5r2h.execute-api.ap-south-1.amazonaws.com/items/";

	async function fetch_api(institute) {
		let data = await fetch(url + institute).then((x) => x.json());
		return data;
	}

	async function post_api(title, institute, content) {
		const body =
			'{"title": "' +
			title +
			'", "institute": "' +
			institute +
			'", "description": "' +
			content +
			'"}';

		console.log(body);

		const res = await fetch(
			"https://lwraym5r2h.execute-api.ap-south-1.amazonaws.com/items",
			{
				method: "POST",
				body: body,
			}
		).then((x) => x.json());
		console.log(res);
	}
</script>

<Header
	bind:search={institute}
	{isAuthenticated}
	onLogIn={login}
	onLogOut={logout}
	onAdd={() => (newPost = !newPost)}
/>

<Title />

{#if !newPost}
	{#await fetch_api(institute)}
		<LoadingIndicator />
	{:then posts}
		<MessagesBoard {posts} />
	{:catch error}
		<span><p>Error while loading data</p></span>
	{/await}
{:else}
	<AddPost
		click={(title, content, institute) =>
			post_api(title, institute, content)}
	/>
{/if}
