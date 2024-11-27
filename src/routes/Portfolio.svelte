<script>
	import Work from "./Work.svelte";
	const PROJECTS = [
		{
			title: "Token bound Accounts (ERC6551/SNIP-14)",
			url: "https://www.tbaexplorer.com/",
			description:
				"Token bound is a suite of open-source tools that allow developers to easily integrate SNIP-14 accounts into their applications."
		},
		{
			title: "Coloniz",
			url: "https://www.coloniz.xyz/",
			description:
				"Coloniz empowers you to build smart, dynamic communities effortlessly. Create your own colony, define custom rules, and leverage a powerful AI assistant that learns from community discussions to provide personalized support to your colonists."
		},
		{
			title: "Starknet Scaffold",
			url: "https://www.starknetscaffold.xyz/",
			description:
				"Starknet Scaffold is a toolkit for building decentralized applications (dapps) on Starknet. It's designed to make it easier for developers to create, deploy smart contracts and build user interfaces that interact with those contracts."
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
