<script lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { onMount } from 'svelte';
import IconButcherKnife from "./icons/IconButcherKnife.svelte";
import IconComputerScreen from './icons/IconComputerScreen.svelte';

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		/* Education Text Animation */
		gsap.from('.work-education', {
			scrollTrigger: {
				start: 'top+=20 bottom',
				toggleActions: 'play reset resume reverse',
				trigger: '.work-education'
			},
			duration: 1.25,
			ease: 'power1.out',
			opacity: 0,
			y: -20
		});

		/* Undergrad Info Animation */
		gsap.from('.work-undergrad', {
			scrollTrigger: {
				start: 'top+=20 bottom',
				toggleActions: 'play reset resume reverse',
				trigger: '.work-undergrad'
			},
			duration: 1.25,
			ease: 'power1.out',
			opacity: 0,
			y: -20
		});

		/* Highschool Info Animation */
		gsap.from('.work-highschool', {
			scrollTrigger: {
				start: 'top+=20 bottom',
				toggleActions: 'play reset resume reverse',
				trigger: '.work-highschool'
			},
			duration: 1.25,
			ease: 'power1.out',
			opacity: 0,
			y: -20
		});
	});
</script>

<div id="work" class="flex h-screen w-screen flex-col px-8 py-16">
	<p class="work-education flex justify-center text-center text-4xl">Work</p>
	<div class="flex h-full flex-col justify-center gap-32 p-8">
		<div class="work-undergrad flex flex-col items-center">
			<div class="h-[64px] lg:h-[96px] pb-2">
				<!-- <IconComputerScreen /> -->
				<img class="w-[64px] h-[64px]" src="evCHARGEsolutions.png" alt=""/>
			</div>
			<p class="text-lg">Independent Contractor</p>
			<p class="text-sm italic">Volusion Website Work</p>
			<p class="text-sm italic">evCHARGEsolutions.com</p>
			<p class="text-sm italic">March 2024 - Present</p>
		</div>
		<div class="work-highschool flex flex-col items-center">
			<div class="h-[64px] lg:h-[96px] pb-2">
				<IconComputerScreen />
			</div>
			<p class="text-lg">Independent Contractor</p>
			<p class="text-sm italic">Full Stack Development</p>
			<p class="text-sm italic">LCI-AE.COM</p>
			<p class="text-sm italic">May 2022 - March 2024</p>
		</div>
	</div>
</div>
