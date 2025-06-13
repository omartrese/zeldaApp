<script lang="ts">
  import { getRandomImage } from "$lib/utils/getRandomImage";

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
      <div class="flex flex-col items-center justify-center backdrop-blur-xs py-8 rounded-xl shadow-2xl item-card">
        <div>
          <img src={getRandomImage()} alt="personaje zelda" class="size-40 aspect-square object-cover rounded-xl">
        </div>
        <div class="py-5">
          <h2>{game.name}</h2>
        </div>
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
    place-content: center;
    grid-template-columns: repeat(3, 300px);
    gap: 20px;
    overflow-y: scroll;
  }

  .item-card {
    background-color: #c3d5c8;
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
