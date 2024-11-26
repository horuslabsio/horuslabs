<script>
	import GithubIcon from "../svg/GithubIcon.svelte";
	import Logo from "../svg/Logo.svelte";
	import MediumIcon from "../svg/MediumIcon.svelte";
	import XIcon from "../svg/XIcon.svelte";

	const currentYear = new Date().getFullYear();
</script>

<footer class=" flex flex-wrap items-center justify-between gap-4 py-8">
	<div class="flex flex-col gap-2">
		<div class="text-[--accent]">
			<Logo />
		</div>
		<p class="pl-1">&copy; {currentYear} Horus Labs. All Rights Reserved.</p>
	</div>
	<div class="flex gap-2 text-2xl md:text-3xl">
		<a href="https://github.com/horuslabsio" target="_blank" rel="noopener">
			<GithubIcon />
		</a>

		<a href="https://x.com/horuslabsio" target="_blank" rel="noopener">
			<XIcon />
		</a>
		<a href="https://medium.com/@horuslabsio" target="_blank" rel="noopener">
			<MediumIcon />
		</a>
	</div>
</footer>
