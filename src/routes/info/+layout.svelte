<script>
  import "../../app.css";

  let { children } = $props();
</script>

<main>
  <header class="flex flex-row justify-between">
    <div>
      <h1>Welcome to the Zelda Info Page</h1>
    </div>
    <nav>
      <ul>
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
