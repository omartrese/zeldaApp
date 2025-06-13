<script lang="ts">
    const {apiURL, images, nameKey, descriptionKey, extraFields} = $props();

  let data: any = $state([]);

  function getRandomImage() {
    const idx = Math.floor(Math.random() * images.length);
    return images[idx];
  }

  $effect(() => {
    const getData = async () => {
      try {
        const response = await fetch(apiURL);
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
    {#each data as item}
      <div class="flex flex-col items-center justify-center backdrop-blur-xs py-8 rounded-xl shadow-2xl item-card">
        <div>
          <img src={getRandomImage()} alt="item image" class="size-40 aspect-square object-cover rounded-xl" />
        </div>
        <div class="py-5 text-center">
          <h2>{item[nameKey]}</h2>
          {#if descriptionKey && item[descriptionKey]}
            <p>{item[descriptionKey]}</p>
          {/if}
          {#each extraFields as field}
            {#if item[field]}
              <p>{item[field]}</p>
            {/if}
          {/each}
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
