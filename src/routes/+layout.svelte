<script>
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
  }

  main:before {
    content: "";
    position: fixed;
    inset: 0;
    background-image: url("/toz.webp"); /* Corrige la ruta */
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.4; /* Ajusta la opacidad aquí */
    z-index: -1;
    pointer-events: none;
  }
</style>
