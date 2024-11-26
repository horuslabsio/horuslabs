<script>
	import Footer from "./Footer.svelte";
	import Header from "./Header.svelte";
	import Intro from "./Intro.svelte";
	import Portfolio from "./Portfolio.svelte";

	let { data } = $props();
</script>

<svelte:head>
	<title>Horus labs</title>
	<meta name="description" content="Horus labs is a blockchain research and development labs." />
</svelte:head>

<section id="container" class="transition-all" data-theme={data.theme}>
	<main class="mx-auto max-w-[1024px] p-8 md:p-32">
		<Header theme={data.theme} />
		<Intro />
		<Portfolio />
		<Footer />
	</main>
</section>
