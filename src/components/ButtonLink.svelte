<script>
  const { href, name } = $props();
</script>

<a {href} class="mb-8 text-lg rounded-sm border-2 p-2">
  {name}
</a>

<style>
  a {
    text-decoration: none;
    transition-duration: 0.3s;
  }

  a:hover {
    background-color: #3b6b2c; /* Cambia el color de fondo al pasar el mouse */
    color: white; /* Cambia el color del texto al pasar el mouse */
  }
</style>
