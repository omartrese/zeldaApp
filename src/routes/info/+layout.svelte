<script>
  import "../../app.css";

  let { children } = $props();
</script>

<main>
  <header class="flex flex-row justify-around gap-5 backdrop-blur-sm py-5 text-xl ">
    <div>
      <a href="/"><h1 class="font-bold">TLOZ App</h1></a>
    </div>
    <nav class="max-sm:hidden">
      <ul class="flex flex-row gap-5 *:font-semibold">
        <li><a href="/info/games">Games</a></li>
        <li><a href="/info/characters">Characters</a></li>
        <li><a href="/info/items">Items</a></li>
      </ul>
    </nav>
  </header>

  <span>
    {@render children()}
  </span>
</main>
