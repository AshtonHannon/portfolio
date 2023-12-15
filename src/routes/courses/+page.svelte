<script>
	import { onMount } from 'svelte';
	import IconDownCaret from './../../lib/icons/IconDownCaret.svelte';
	import gsap from 'gsap';
	import IconUpCaret from '$lib/icons/IconUpCaret.svelte';

	let isMenuOpen = true;

	onMount(() => {
		let tl = gsap.timeline({ paused: true, repeat: -1 });
		let tl2 = gsap.timeline({ paused: true });

		/* Navigation menu caret bounce */
		tl.to('.caret', {
			y: 5,
			duration: 0.5,
			ease: 'power2.out'
		});

		tl.to('.caret', {
			reversed: true,
			y: 5,
			duration: 0.5,
			ease: 'power2.in'
		});

		document.querySelector('#caret')?.addEventListener('mouseenter', () => tl.play(0));
		document.querySelector('#caret')?.addEventListener('mouseleave', () => tl.revert());

		/* Navigation menu drop */

		/* By default, the menuOptions has 'hidden' as a class. This is to prevent it from popping up when the page loads
		 * to get around this, we just remove this class when the component mounts
		 */
		document.getElementById('menuOptions')?.classList.remove('hidden');
		const menuOptionsHeight = document.getElementById('menuOptions').offsetHeight;
		tl2.fromTo(
			'#menu',
			{
				y: () => {
					return 0;
					// return -1 * menuOptionsHeight;
				}
			},
			{
				y: 0
			}
		);

		document.querySelector('#caret')?.addEventListener('click', () => {
			isMenuOpen ? tl2.play(0) : tl2.reverse();
			isMenuOpen = !isMenuOpen;
		});
	});
</script>

<div class="align-center fixed top-0 flex h-min w-screen justify-center">
	<div id="menu" class="flex w-full flex-col">
		<div id="menuOptions" class="menuOptions hidden rounded-b-sm bg-neutral-200">
			<p class="text-md text-center font-bold">Undergraduate Courses</p>
			<div class="flex flex-row pb-4">
				<div class="flex-1 text-center">
					<a href="/semesters/f20/">
						<p class="text-sm underline underline-offset-2">Fall 2020</p>
					</a>
					<ul class="text-xs">
						<li><a href="/courses/cse111/">CSE111</a></li>
						<li><a href="/courses/cse199/">CSE199</a></li>
						<li><a href="/courses/eng105/">ENG105</a></li>
						<li><a href="/courses/ucl148/">ULC148</a></li>
					</ul>
				</div>
				<div class="flex-1 text-center">
					<a href="/semesters/s21/">
						<p class="text-sm underline underline-offset-2">Spring 2021</p>
					</a>
					<ul class="text-xs">
						<li><a href="/courses/mth141/">MTH141</a></li>
						<li><a href="/courses/cse115/">CSE115</a></li>
						<li><a href="/courses/phy107/">PHY107</a></li>
					</ul>
				</div>
				<div class="flex-1 text-center">
					<a href="/semesters/f21/">
						<p class="text-sm underline underline-offset-2">Fall 2021</p>
					</a>
					<ul class="text-xs">
						<li><a href="/courses/cse116/">CSE116</a></li>
						<li><a href="/courses/cse191/">CSE191</a></li>
						<li><a href="/courses/mth142/">MTH142</a></li>
					</ul>
				</div>
				<div class="flex-1 text-center">
					<a href="/semesters/s22/">
						<p class="text-sm underline underline-offset-2">Spring 2022</p>
					</a>
					<ul class="text-xs">
						<li><a href="/courses/gly105/">GLY105</a></li>
						<li><a href="/courses/cse220/">CSE220</a></li>
						<li><a href="/courses/gly101/">GLY101</a></li>
						<li><a href="/courses/cse250/">CSE250</a></li>
					</ul>
				</div>
			</div>
			<div class="flex flex-row pb-4">
				<div class="flex-1 text-center">
					<a href="/semesters/f22/">
						<p class="text-sm underline underline-offset-2">Fall 2022</p>
					</a>
					<ul class="text-xs">
						<li><a href="/courses/geo100/">GEO100</a></li>
						<li><a href="/courses/eas360/">EAS360</a></li>
						<li><a href="/courses/cse341/">CSE341</a></li>
						<li><a href="/courses/cse331/">CSE331</a></li>
					</ul>
				</div>
				<div class="flex-1 text-center">
					<a href="/semesters/s23/">
						<p class="text-sm underline underline-offset-2">Spring 2023</p>
					</a>
					<ul class="text-xs">
						<li><a href="/courses/mth309/">MTH309</a></li>
						<li><a href="/courses/cse312/">CSE312</a></li>
						<li><a href="/courses/cse379/">CSE379</a></li>
						<li><a href="/courses/ntr108/">NTR108</a></li>
					</ul>
				</div>
				<div class="flex-1 text-center">
					<a href="/semesters/f23/">
						<p class="text-sm underline underline-offset-2">Fall 2023</p>
					</a>
					<ul class="text-xs">
						<li><a href="/courses/cse442/">CSE442</a></li>
						<li><a href="/courses/sta301/">STA301</a></li>
						<li><a href="/courses/mus364/">MUS364</a></li>
						<li><a href="/courses/cse431/">CSE431</a></li>
						<li><a href="/courses/rec100/">REC100</a></li>
					</ul>
				</div>
				<div class="flex-1 text-center">
					<a href="/semesters/s24/">
						<p class="text-sm underline underline-offset-2">Spring 2024</p>
					</a>
					<ul class="text-xs">
						<li><a href="/courses/rec116/">REC116</a></li>
						<li><a href="/courses/cse305/">CSE305</a></li>
						<li><a href="/courses/cse370/">CSE370</a></li>
						<li><a href="/courses/cse404/">CSE404</a></li>
						<li><a href="/courses/cse468/">CSE468</a></li>
						<li><a href="/courses/ubc399/">UBC399</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div id="menuTab" class="flex w-min justify-center self-center rounded-b-md bg-neutral-200 px-4">
			<button id="caret" class="caret">
				<div class="h-[32px] w-[32px] fill-neutral-700">
					{#if isMenuOpen}
						<IconDownCaret />
					{:else}
						<IconUpCaret />
					{/if}
				</div>
			</button>
		</div>
	</div>
</div>

<style>
	.menuOptions a:hover {
		text-decoration: underline;
		color: rgb(59 130 246); /* bg-blue-500 */
	}
</style>
