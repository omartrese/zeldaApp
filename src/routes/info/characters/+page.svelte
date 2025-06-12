<script lang="ts">
  let data: any = $state([]);

  $effect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://zelda.fanapis.com/api/characters?limit=20"
        );
        const result = await response.json();
        data = result.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  });
</script>

<article>
  <section>
    {#each data as game}
      <div class="game-card">
        <h1>culo</h1>
        <h2>{game.name}</h2>
        <p>Release Date: {game.released_date}</p>
        <p>{game.description}</p>
      </div>
    {/each}
  </section>
</article>

<style>
  article {
    overflow: hidden;
  }

  article section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
    overflow-y: scroll;
  }
</style>
