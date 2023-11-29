<script>
	import IconUpCaret from './icons/IconUpCaret.svelte';

	function toTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
</script>

<button class="fixed z-10 left-1/2 top-0 h-[40px] w-[40px] -translate-x-1/2" on:click={toTop}>
	<div class=" m-1 w-9 fill-neutral-700 hover:animate-jump hover:animate-duration-1000 hover:animate-infinite">
		<IconUpCaret />
	</div>
</button>
