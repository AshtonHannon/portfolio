<script>
	import { goto } from '$app/navigation';
</script>

<div class="flex h-screen w-full items-center justify-center">
	<div
		class="flex w-full flex-col gap-2 text-center text-3xl
	font-bold text-green-800">
		<p>Successfully Submitted!</p>
		<p>Thanks!</p>
		<button
			on:click={() => goto('/')}
			class="hover:shadow-form w-24 self-center rounded-md bg-neutral-700 py-2 text-base font-semibold text-white outline-none">
			Return
		</button>
	</div>
</div>
