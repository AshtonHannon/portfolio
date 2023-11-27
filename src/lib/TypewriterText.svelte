<script>
	export let text = '';
</script>

<div class="landing__welcome-text">
	<p class="typewriter">{text}</p>
</div>

<style>
	.landing__welcome-text {
		margin: 0 auto;
		padding: 20px 0 0 0;
		font-family: monospace;
		font-size: 48px;
		font-weight: 700;
		color: rgb(82 82 82);
	}

	/* Used & modified from: https://css-tricks.com/snippets/css/typewriter-effect/ */
	.typewriter {
		overflow: hidden;
		border-right: 0.25em solid;
		white-space: nowrap;
		margin: 0 auto;
		letter-spacing: 0.2em;
		animation: typing 1.5s steps(25, end), blink-caret 0.75s step-end infinite;
	}

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: rgb(23 23 23);
		}
	}
</style>
