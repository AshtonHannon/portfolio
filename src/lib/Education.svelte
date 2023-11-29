<script lang="ts">
	import Link from '$lib/Link.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import IconDiplomaCertificate from './icons/IconDiplomaCertificate.svelte';

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		/* Education Text Animation */
		gsap.from('.education', {
			scrollTrigger: {
				start: '-=500',
				toggleActions: 'play reset resume reverse',
				trigger: '.education'
			},
			duration: 1,
			ease: 'power1.out',
			opacity: 0,
			y: -20
		});

		/* Undergrad Info Animation */
		gsap.from('.undergrad', {
			scrollTrigger: {
				start: '-=500',
				toggleActions: 'play reset resume reverse',
				trigger: '.undergrad'
			},
			duration: 1,
			ease: 'power1.out',
			opacity: 0,
			y: -20
		});

		/* Highschool Info Animation */
		gsap.from('.highschool', {
			scrollTrigger: {
				start: '-=550',
				toggleActions: 'play reset resume reverse',
				trigger: '.highschool'
			},
			duration: 1,
			ease: 'power1.out',
			opacity: 0,
			y: -20
		});
	});
</script>

<div id="education" class="flex h-screen w-screen flex-col px-8 py-16">
	<p class="education flex justify-center text-center text-4xl">Education</p>
	<div class="flex h-full flex-col justify-center gap-32">
		<div class="undergrad flex flex-col items-center">
			<div class="w-[48px]">
				<IconDiplomaCertificate />
			</div>
			<p class="text-3xl">Computer Science B.S.</p>
			<p class="text-md">
				<Link href="https://cse.buffalo.edu/">University at Buffalo</Link>
			</p>
			<p class="text-md">August 2020 - May 2024</p>
			<p class="text-md">GPA: 3.5</p>
		</div>
		<div class="highschool flex flex-col items-center">
			<div class="w-[48px]">
				<IconDiplomaCertificate />
			</div>
			<p class="text-3xl">High School Diploma</p>
			<p class="text-md">
				<Link href="https://www.clevehill.org/o/chhs">Cleveland Hill High School</Link>
			</p>
			<p class="text-md">August 2016 - June 2020</p>
			<p class="text-md">GPA: 3.8</p>
		</div>
	</div>
</div>
