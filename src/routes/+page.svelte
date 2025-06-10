<script lang="ts">
  // const getData = async () => {
  //     try {
  //         const response = await fetch('https://zelda.fanapis.com/api/games?limit=20');
  //         const data = await response.json();
  //         console.log(data);
  //     } catch (error) {
  //         console.error('Error fetching data:', error);
  //     }
  // };
</script>

<section class="h-full flex flex-col items-center justify-center">
  <span class="backdrop-blur-sm shadow-2xl text-center py-40 rounded-xl">
    <div class="text-4xl font-bold text-white p-5 ">
      <h1 class="text-shadow-2xs">The legend of Zelda App</h1>
    </div>

    <div class="text-lg text-gray-300 mb-8">
      <a href="/games" class="rounded-sm border-2 p-2">Get started</a>
    </div>
  </span>
</section>

<style>
    a {
        text-decoration: none;
        transition-duration: 0.3s;
    }

    a:hover {
        background-color: #3B6B2C; /* Cambia el color de fondo al pasar el mouse */
        color: white; /* Cambia el color del texto al pasar el mouse */
    }
</style>
