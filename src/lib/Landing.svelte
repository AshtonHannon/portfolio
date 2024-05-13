<script>
	import IconBoxedGitHub from './icons/IconBoxedGitHub.svelte';
	import IconBoxedLinkedIn from './icons/IconBoxedLinkedIn.svelte';
	import IconBoxedPDFFile from './icons/IconBoxedPDFFile.svelte';
	import TypewriterText from '$lib/TypewriterText.svelte';
</script>

<div class="flex h-full flex-col px-8 lg:w-full lg:flex-row lg:items-center lg:justify-center">
	<!-- Navigation Buttons -->
	<div class="flex h-full w-full flex-col items-center justify-center">
		<!-- Small/Medium Picture -->
		<div class="animate-duration-250 flex w-full animate-fade-right justify-center pb-16 lg:hidden">
			<img class="w-[150px] rounded-full shadow-lg shadow-neutral-900 md:w-[200px]" src="picture.jpg" alt="" />
		</div>

		<div
			class="nav-buttons nav-underline flex animate-fade-right flex-col space-y-2 text-center animate-delay-500 animate-duration-1000">
			<!-- <a href="#about">About</a> -->
			<a href="/Ashton Hannon - Resume.pdf" download>Resume</a>
			<a href="#education">Education</a>
			<a href="#work">Work</a>
			<a href="#projects">Projects</a>
			<a href="#contact">Contact</a>
		</div>
		<div class="animate-duration-250 flex animate-fade-right gap-4 pt-8 animate-delay-1000">
			<a title="LinkedIn" class="icon" target="_blank" href="https://www.linkedin.com/in/ashton-hannon/">
				<IconBoxedLinkedIn />
			</a>
			<a title="GitHub" class="icon" target="_blank" href="https://github.com/AshtonHannon/">
				<IconBoxedGitHub />
			</a>
			<a title="Resume" class="icon" download href="/Ashton Hannon - Resume.pdf">
				<IconBoxedPDFFile />
			</a>
		</div>
	</div>

	<!-- Large/Desktop Picture and Typewrite Text -->
	<div
		class="hidden h-full w-full animate-fade-left flex-col items-center justify-center space-y-8 animate-delay-500 animate-duration-1000 lg:flex">
		<img class="w-[200px] rounded-full shadow-lg shadow-neutral-900" src="picture.jpg" alt="" />
		<TypewriterText text="Hello, I'm Ashton!" />
	</div>
</div>

<style>
	.icon {
		width: 36px;
		fill: rgb(82 82 82);
		transition: all 0.15s ease-in-out;
	}

	.icon:hover {
		fill: rgb(23 23 23);
		transition: all 0.15s ease-in-out;
	}

	.nav-buttons a {
		color: rgb(82 82 82);
		font-family: 'Cabin', sans-serif;
		font-size: 32px;
		font-weight: 500;
		display: block;
		position: relative;
		transition: all 0.15s ease-in-out;
	}

	.nav-buttons a:hover {
		color: rgb(23 23 23);
		transition: all 0.15s ease-in-out;
	}

	.nav-underline {
		text-decoration: none;
		display: block;
		position: relative;
	}

	.nav-underline a::before {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: rgb(23 23 23);
		transform: scaleX(0);
		transition: transform 0.2s ease;
	}

	.nav-underline a:hover::before {
		transform: scaleX(1);
	}
</style>
