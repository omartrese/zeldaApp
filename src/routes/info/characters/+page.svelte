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
      <div class="item-card">
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
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
    padding: 20px;
    overflow-y: scroll;
  }

  .item-card {
    background-color: #c3d5c8;
    backdrop-filter: blur(2px);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  @media (max-width: 900px) {
    article section {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 600px) {
    article section {
      grid-template-columns: 1fr;
    }
  }
</style>
