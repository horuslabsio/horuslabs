<script>
	import Work from "./Work.svelte";
	const PROJECTS = [
		{
			title: "Project 1",
			url: "www.fill-balnk.com",
			description:
				"A cutting-edge solution that revolutionizes the way we interact with technology. This project aims to streamline workflows and enhance user productivity."
		},
		{
			title: "Project 2",
			url: "www.fill-balnk.com",
			description:
				"An innovative platform designed to bring together diverse ideas and foster collaboration. This project focuses on community engagement and problem-solving."
		},
		{
			title: "Project 3",
			url: "www.fill-balnk.com",
			description:
				"A sophisticated tool that automates mundane tasks, allowing professionals to focus on more creative and impactful work. This project leverages the latest advancements in AI and machine learning."
		},
		{
			title: "Project 3",
			url: "www.fill-balnk.com",
			description:
				"A sophisticated tool that automates mundane tasks, allowing professionals to focus on more creative and impactful work. This project leverages the latest advancements in AI and machine learning."
		}
	];
</script>

<section class="py-16">
	<h2>What we've done</h2>
	<div class="mt-8 flex flex-col gap-8">
		{#each PROJECTS as project}
			<Work link={project.url} title={project.title} description={project.description} />
		{/each}
	</div>
</section>
