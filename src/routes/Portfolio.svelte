<script>
	import Work from "./Work.svelte";
	const PROJECTS = [
		{
			title: "Chainrails (coming soon)",
			url: "https://chainrails.io/",
			description:
				"A developer-first payments SDK that lets apps accept funds from any chain or fiat rail and settle seamlessly in their chosen asset."
		},
		{
			title: "Glance",
			url: "https://www.glnc.me/",
			description:
				"A beautiful, exquisite card for creators and builders to tell their story, share their work and own their audience!."
		},
		{
			title: "Token bound Accounts (ERC6551/SNIP-14)",
			url: "https://www.tbaexplorer.com/",
			description:
				"Token bound is a suite of open-source tools that allow developers to easily integrate ERC6551/SNIP-14 accounts into their applications."
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
		},
		{
			title: "Irys x Starknet",
			url: "https://blog.horuslabs.co/irys-is-now-on-starknet/",
			description:
				"Recognizing the need for a robust data storage solution on Starknet, we took the initiative to collaborate with the Irys team to bring Irys to Starknet, unlocking new possibilities for developers and users alike."
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
