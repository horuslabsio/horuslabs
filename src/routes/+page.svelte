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
	<meta property="og:title" content="Horus Labs" />
	<meta
		property="og:description"
		content="Horus labs, a blockchain research and development lab."
	/>
	<meta property="og:url" content="https://www.horuslabs.co/" />
	<meta property="og:site_name" content="Horus Labs" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="./opengraph.png" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="www.horuslabs.co" />
	<meta property="twitter:url" content="https://www.horuslabs.co/" />
	<meta name="twitter:title" content="Horus Labs" />
	<meta
		name="twitter:description"
		content="Horus labs, a blockchain research and development lab."
	/>
	<meta name="twitter:image" content="./opengraph.png" />
</svelte:head>

<section id="container" class="text-sm transition-all md:text-base" data-theme={data.theme}>
	<main class="mx-auto max-w-[1024px] px-4 py-16 md:px-32 md:pb-32 md:pt-16">
		<Header theme={data.theme} />
		<Intro />
		<Portfolio />
		<Footer />
	</main>
</section>
