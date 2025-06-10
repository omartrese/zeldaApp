<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<main>
	<header>
		<h1>The Legend of Zelda App</h1>
	</header>
	{@render children()}
</main>
