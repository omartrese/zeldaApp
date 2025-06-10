<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<main>
  {@render children()}
</main>

<style>
  main {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  main:before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/toz.webp"); /* Corrige la ruta */
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.5; /* Ajusta la opacidad aquí */
    z-index: -1;
    pointer-events: none;
  }
</style>
