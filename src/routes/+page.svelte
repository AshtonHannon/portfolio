<script lang="ts">
	import About from '$lib/About.svelte';
	import BackToTopButton from '$lib/BackToTopButton.svelte';
	import Contact from '$lib/Contact.svelte';
	import Landing from '$lib/Landing.svelte';
	import Projects from '$lib/Projects.svelte';
	import Work from '$lib/Work.svelte';
	import Education from './../lib/Education.svelte';

	let innerHeight: number;
	let scrollY: number;
</script>

<svelte:window bind:innerHeight bind:scrollY />

<div id="landing" class="flex h-screen w-screen flex-col">
		<Landing />
</div>

{#if scrollY > innerHeight / 3}
	<BackToTopButton />
{/if}

<!-- <About/> -->
<Education />
<Work />
<Projects />
<Contact />
