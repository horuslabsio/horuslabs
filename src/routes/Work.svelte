<script>
	import RightArrowIcon from "../svg/RightArrowIcon.svelte";

	export let title;
	export let description;
	export let link;
</script>

<div class="flex flex-col gap-4">
	<h3 class="text-2xl">{title}</h3>
	<p>
		{description}
		<a
			href={link}
			target="_blank"
			rel="noopener"
			class="group inline-flex items-center gap-1 underline"
		>
			Read more <span class="transition-all group-hover:translate-x-1">
				<RightArrowIcon />
			</span>
		</a>
	</p>
</div>
