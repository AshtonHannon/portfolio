<script lang="ts">
	import Link from '$lib/Link.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		/* Education Text Animation */
		gsap.from('.education-education', {
			scrollTrigger: {
				start: 'top+=20 bottom',
				toggleActions: 'play reset resume reverse',
				trigger: '.education-education'
			},
			duration: 1.25,
			ease: 'power1.out',
			opacity: 0,
			y: -20
		});

		/* Undergrad Info Animation */
		gsap.from('.education-undergrad', {
			scrollTrigger: {
				start: 'top+=20 bottom',
				toggleActions: 'play reset resume reverse',
				trigger: '.education-undergrad'
			},
			duration: 1.25,
			ease: 'power1.out',
			opacity: 0,
			y: -20
		});

		/* Highschool Info Animation */
		gsap.from('.education-highschool', {
			scrollTrigger: {
				start: 'top+=20 bottom',
				toggleActions: 'play reset resume reverse',
				trigger: '.education-highschool'
			},
			duration: 1.25,
			ease: 'power1.out',
			opacity: 0,
			y: -20
		});
	});
</script>

<div id="education" class="flex h-screen w-screen flex-col px-8 py-16">
	<p class="education-education flex justify-center text-center text-4xl">Education</p>
	<div class="flex h-full flex-col justify-center gap-32 p-8">
		<div class="education-undergrad flex flex-col items-center">
			<Link href="https://cse.buffalo.edu/">
				<img class="h-[64px] lg:h-[96px] pb-2" src="/UB_Primary_SUNY.png" alt="" />
			</Link>
			<p class="text-lg">Computer Science B.S.</p>
			<p class="text-sm italic">August 2020 - May 2024</p>
			<p class="text-sm italic">GPA: 3.5</p>
		</div>
		<div class="education-highschool flex flex-col items-center">
			<Link href="https://www.clevehill.org/o/chhs">
				<img class="h-[64px] lg:h-[96px] pb-2" src="/clevehill-logo.png" alt="" />
			</Link>
			<p class="text-lg">High School Diploma</p>
			<p class="text-sm italic">August 2016 - June 2020</p>
			<p class="text-sm italic">GPA: 3.8</p>
		</div>
	</div>
</div>
