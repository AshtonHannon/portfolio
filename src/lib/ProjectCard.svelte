<script lang="ts">
	import IconLinkSquare from './icons/IconLinkSquare.svelte';
	export let imgSrc: string;
	export let title: string;
	export let desc: string;
	export let href: string;
</script>

<div class="hidden relative mt-6 lg:flex w-80 xl:w-96 flex-col rounded-xl bg-white bg-clip-border text-neutral-700 shadow-md">
	<div
		class="relative mx-4 -mt-4 lg:-mt-6 lg:h-56 overflow-hidden rounded-xl
	bg-neutral-500 bg-clip-border text-white shadow-lg shadow-neutral-500/40">
		<img style="width: 100%; height: 100%" class="object-cover" src={imgSrc} alt="" />
	</div>
	<div class="p-6">
		<h5 class="mb-2 block font-sans text-sm md:text-lg lg:text-xl font-semibold leading-snug tracking-normal text-neutral-900 antialiased">
			{title}
		</h5>
		<p class="block font-sans text-sm md:text-md lg:text-base font-light leading-relaxed text-inherit antialiased">
			{desc}
		</p>
	</div>
	<div class="flex justify-center p-6 pt-0">
		<a target="_blank" {href} class="fill-neutral-900 hover:fill-neutral-700
		cursor-pointer w-3 lg:w-4">
			<IconLinkSquare />
		</a>
	</div>
</div>

<div class="lg:hidden relative mt-6 flex h-52 w-[30rem] flex-row rounded-xl bg-white bg-clip-border text-neutral-700 shadow-md">
	<div
		class="relative mx-4 -my-1 w-full overflow-hidden rounded-xl
	bg-neutral-500 bg-clip-border text-white shadow-lg shadow-neutral-500/40">
		<img style="width: 100%; height: 100%" class="object-cover" src={imgSrc} alt="" />
	</div>
	<div class="p-6">
		<h5 class="mb-2 block font-sans text-sm font-semibold leading-snug tracking-normal text-neutral-900 antialiased">
			{title}
		</h5>
		<p class="block font-sans text-xs font-light leading-relaxed text-inherit antialiased">
			{desc}
		</p>
	</div>
	<div class="flex items-center justify-center p-4">
		<a target="_blank" {href} class="fill-neutral-900 hover:fill-neutral-700
		cursor-pointer w-3 lg:w-4">
			<IconLinkSquare />
		</a>
	</div>
</div>
