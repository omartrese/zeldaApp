<script lang="ts">
  import ButtonLink from "../components/ButtonLink.svelte";
</script>

<span class="backdrop-blur-sm shadow-2xl text-center py-40 rounded-xl">
  <div class="text-4xl font-bold text-white p-5">
    <h1 class="text-shadow-2xs">The Legend of Zelda App</h1>
  </div>

  <nav>
    <ButtonLink href="/info/games" name="Games" />
    <ButtonLink href="/info/characters" name="Characters" />
    <ButtonLink href="/info/items" name="Items" />
  </nav>
</span>
