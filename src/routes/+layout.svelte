<script lang="ts">
	import { MetaTags } from "svelte-meta-tags";
	import "../app.css";
	let { children } = $props();
</script>

<div>
	{@render children()}
</div>

<MetaTags
	title="Horus Labs"
	description="Horus Labs: Blockchain research and development lab."
	canonical="https://www.horuslabs.co/"
	openGraph={{
		url: "https://www.horuslabs.co/",
		title: "Horus Labs",
		description: "Blockchain research and development lab.",
		images: [
			{
				url: "./opengraph.png",
				width: 1500,
				height: 500,
				alt: "Explore blockchain solutions with Horus Labs"
			}
		],
		siteName: "Horus Labs"
	}}
	twitter={{
		creator: "@horuslabsio",
		site: "@horuslabsio",
		cardType: "summary_large_image",
		title: "Horus Labs",
		description: "Blockchain research and development Lab.",
		image: "./opengraph.png",
		imageAlt: "Horus Labs - Innovating Blockchain Development"
	}}
/>
