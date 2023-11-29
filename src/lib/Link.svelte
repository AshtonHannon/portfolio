<script lang="ts">
	export let href: string;
	export let blank: boolean = true;
</script>

<a target={(blank) ? "_blank" : "_self"} href={href} class="font-inherit text-blue-700 hover:underline">
	<slot/>
</a>