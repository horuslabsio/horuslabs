<script>
	import Footer from "./Footer.svelte";
	import Header from "./Header.svelte";
	import Intro from "./Intro.svelte";
	import Portfolio from "./Portfolio.svelte";

	let { data } = $props();
</script>

<svelte:head>
	<title>Horus labs</title>
	<meta name="description" content="Horus labs, a blockchain research and development lab." />
</svelte:head>

<section id="container" class="text-sm transition-all md:text-base" data-theme={data.theme}>
	<main class="mx-auto max-w-[1024px] px-4 py-16 md:p-32">
		<Header theme={data.theme} />
		<Intro />
		<Portfolio />
		<Footer />
	</main>
</section>
