<script lang="ts">
	let successfulSubmit = false;

	const handleSubmit = async (e: SubmitEvent) => {
		const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries());

		// Make sure that the fields are nonempty before submitting
		if (formData?.accessKey && formData?.name && formData?.email && formData?.subject && formData?.message) {
			const res = await fetch('https://api.staticforms.xyz/submit', {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: { 'Content-Type': 'application/json' }
			});

			const json = await res.json();

			if (json.success) {
				console.log('success!');
				successfulSubmit = true;
			}
		}
	};
</script>

<div id="contact" class="flex h-screen w-screen flex-col items-center px-4 py-16">
	<p class="text-center text-4xl">Contact</p>
	<div class="flex h-full w-1/2 flex-col items-center justify-center">
		{#if successfulSubmit}
			<div
				class="rounded-lg border-2 border-green-700 bg-white p-2
			text-2xl text-green-700">
				Submission Successful! Thank you!
			</div>
		{/if}
		{#if !successfulSubmit}
			<form on:submit|preventDefault={handleSubmit} class="w-full" enctype="application/x-www-form-urlencoded">
				<div class="mb-5">
					<input type="hidden" name="accessKey" value="fec162b0-499f-485d-ac7f-8f0cb4edd2bf" />
					<input type="text" name="honeypot" style="display: none;" />
					<label for="name" class="mb-3 block text-base font-medium text-neutral-700">Full Name</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Full Name"
						class="w-full rounded-md border border-neutral-500 bg-white px-6 py-3 text-base font-medium text-neutral-900 outline-none focus:border-neutral-700 focus:shadow-md" />
				</div>
				<div class="mb-5">
					<label for="email" class="mb-3 block text-base font-medium text-neutral-900">Email Address</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="example@domain.com"
						class="w-full rounded-md border border-neutral-500 bg-white px-6 py-3 text-base font-medium text-neutral-900 outline-none focus:border-neutral-700 focus:shadow-md" />
				</div>
				<div class="mb-5">
					<label for="subject" class="mb-3 block text-base font-medium text-neutral-900">Subject</label>
					<input
						type="text"
						name="subject"
						id="subject"
						placeholder="Enter your subject"
						class="w-full rounded-md border border-neutral-500 bg-white px-6 py-3 text-base font-medium text-neutral-900 outline-none focus:border-neutral-700 focus:shadow-md" />
				</div>
				<div class="mb-5">
					<label for="message" class="mb-3 block text-base font-medium text-neutral-900">Message</label>
					<textarea
						rows="4"
						name="message"
						id="message"
						placeholder="Type your message"
						class="w-full resize-none rounded-md border border-neutral-500 bg-white px-6 py-3 text-base font-medium text-neutral-900 outline-none focus:border-neutral-700 focus:shadow-md" />
				</div>
				<div class="flex w-full items-center justify-center">
					<button
						class="hover:shadow-form rounded-md bg-neutral-700 px-8 py-3 text-base font-semibold text-white outline-none">
						Submit
					</button>
				</div>
			</form>
		{/if}
	</div>
</div>
