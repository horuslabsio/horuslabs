<script>
	import Logo from "../svg/Logo.svelte";

	const currentYear = new Date().getFullYear();
</script>

<footer class="flex flex-col gap-2 py-8">
	<div class="text-[--accent]">
		<Logo />
	</div>
	<p class="pl-1">&copy; {currentYear} Horus Labs. All Rights Reserved.</p>
</footer>
