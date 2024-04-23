<script>
	import { gsap } from 'gsap';
	import ProjectCard from '$lib/ProjectCard.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		/* Education Text Animation */
		gsap.from('#projects', {
			scrollTrigger: {
				start: 'top+=20 bottom',
				toggleActions: 'play reset resume reverse',
				trigger: '#projects'
			},
			duration: 1.25,
			ease: 'power1.out',
			opacity: 0,
			y: -20
		});
	});
</script>

<div id="projects" class="flex h-screen w-screen flex-col px-8 py-16">
	<p class="flex justify-center text-center text-4xl">Projects</p>
	<div class="flex h-full flex-col justify-center p-8">
		<div class="grid lg:grid-cols-3 gap-4">
			<div class="project-1 lg:col-span-1 flex justify-center">
				<ProjectCard
					href="https://github.com/AshtonHannon/latte"
					imgSrc="latte.bmp"
					title="Latte"
					desc="A Java web framework akin to SpringBoot." />
			</div>
			<div class="project-2 col-span-1 row-span-1 flex justify-center">
				<ProjectCard
					href="https://github.com/AshtonHannon/portfolio"
					imgSrc="portfolio.bmp"
					title="Portfolio"
					desc="This very portfolio that you are looking at" />
			</div>
			<div class="project-3 col-span-1 row-span-1 flex justify-center">
				<ProjectCard
					href="https://racingfanchaser88.com/"
					imgSrc="rfc88-logo.jpg"
					title="Racingfanchaser88 Website"
					desc="A website I made for a friend of mine in the racing scene" />
			</div>
		</div>
	</div>
</div>
