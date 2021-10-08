<script>
	import Title from "./Title.svelte";
	import MessagesBoard from "./MessagesBoard.svelte";

	let test = false;

	let messages = [
		{
			Title: "New message",
			Content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur vestibulum risus. Quisque mattis rhoncus nisi, at suscipit nisl commodo ac. Suspendisse nunc nunc, cursus quis vehicula non, consectetur vitae lorem. Nunc dignissim felis a rutrum malesuada. Nunc congue facilisis arcu eget blandit. Nullam rutrum nunc tristique felis consequat, id tincidunt elit semper. Nunc pulvinar commodo lorem. Aenean elit metus, molestie sit amet blandit sit amet, porta vel nisl. Ut vitae justo id leo hendrerit laoreet ac sed lorem. Mauris sit amet est nisl. Maecenas vehicula blandit velit, a ultrices enim pulvinar sed. In hac habitasse platea dictumst. Nulla quis ipsum in augue tristique imperdiet. Etiam elementum at velit eu ullamcorper. Nullam vulputate, dolor in luctus hendrerit, odio mauris faucibus magna, ac tincidunt sapien mi eget metus. Quisque euismod pretium velit at vehicula. Proin turpis nibh, tempus sit amet facilisis tempor, suscipit et risus. Nullam neque risus, venenatis quis ultrices quis, fringilla mattis erat.School has blown",
			Date: "21:37",
			Author: "Patrick",
		},
		{
			Title: "Old message",
			Content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur vestibulum risus. Quisque mattis rhoncus nisi, at suscipit nisl commodo ac. Suspendisse nunc nunc, cursus quis vehicula non, consectetur vitae lorem. Nunc dignissim felis a rutrum malesuada. Nunc congue facilisis arcu eget blandit. Nullam rutrum nunc tristique felis consequat, id tincidunt elit semper. Nunc pulvinar commodo lorem. Aenean elit metus, molestie sit amet blandit sit amet, porta vel nisl. Ut vitae justo id leo hendrerit laoreet ac sed lorem. Mauris sit amet est nisl. Maecenas vehicula blandit velit, a ultrices enim pulvinar sed. In hac habitasse platea dictumst. Nulla quis ipsum in augue tristique imperdiet. Etiam elementum at velit eu ullamcorper. Nullam vulputate, dolor in luctus hendrerit, odio mauris faucibus magna, ac tincidunt sapien mi eget metus. Quisque euismod pretium velit at vehicula. Proin turpis nibh, tempus sit amet facilisis tempor, suscipit et risus. Nullam neque risus, venenatis quis ultrices quis, fringilla mattis erat.School has blown",
			Date: "21:21",
			Author: "Patrick",
		},
	];
</script>

<Title new_message_indicator={messages.length > 0} />
<MessagesBoard {messages} />
