<script>
	import Header from "./Header.svelte";
	import LoadingIndicator from "./LoadingIndicator.svelte";
	import Title from "./Title.svelte";

	import auth from "./authService";
	import { isAuthenticated, user } from "./store";
	import { onMount } from "svelte";
	import MessagesBoard from "./MessagesBoard.svelte";

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

	let institute;
	let url = "https://lwraym5r2h.execute-api.ap-south-1.amazonaws.com/items/";

	async function fetch_api(institute) {
		let data = await fetch(url + institute).then((x) => x.json());
		return data;
	}
</script>

<Header
	bind:search={institute}
	{isAuthenticated}
	onLogIn={login}
	onLogOut={logout}
/>

<Title />

{#await fetch_api(institute)}
	<LoadingIndicator />
{:then posts}
	<MessagesBoard {posts} />
{:catch error}
	<span><p>Error while loading data</p></span>
{/await}

<style>
	span {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
