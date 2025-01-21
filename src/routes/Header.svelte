<script>
	import { onMount } from "svelte";
	import MoonIcon from "../svg/MoonIcon.svelte";
	import SunIcon from "../svg/SunIcon.svelte";
	export let theme;

	let currentTheme = theme;
	function getBrowserTheme() {
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		return prefersDark ? "dark" : "light";
	}
	onMount(() => {
		document.body.setAttribute("data-theme", currentTheme);
		if (!currentTheme) {
			currentTheme = getBrowserTheme();
		}
	});

	function toggleTheme() {
		const container = document.getElementById("container");
		currentTheme = currentTheme === "light" ? "dark" : "light";
		if (container) container.setAttribute("data-theme", currentTheme);
		document.body.setAttribute("data-theme", currentTheme);
		document.cookie = `theme=${currentTheme}; path=/; max-age=31536000; Secure; SameSite=Lax;`;
	}
</script>

<header class="base-border">
	<div class="mb-16 flex justify-end">
		<button on:click={toggleTheme} class="relative flex h-12 w-12 items-center justify-center">
			<span
				class="absolute text-2xl opacity-0 transition-opacity"
				class:opacity-100={currentTheme === "light"}
				class:opacity-0={currentTheme === "dark"}
			>
				<SunIcon />
			</span>

			<span
				class="absolute text-2xl opacity-0 transition-opacity"
				class:opacity-100={currentTheme === "dark"}
				class:opacity-0={currentTheme === "light"}
			>
				<MoonIcon />
			</span>
		</button>
	</div>
	<div class="flex items-center justify-between pb-8">
		<h1 class="">Horus labs</h1>
		<a class="text-xl" target="_blank" rel="noopener noreferrer" href="https://blog.horuslabs.co/"
			>Blog</a
		>
	</div>
</header>
