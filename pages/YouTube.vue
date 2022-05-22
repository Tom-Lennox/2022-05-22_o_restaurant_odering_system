<template>
  <div>
  <v-row>
    <v-col class="text-center" style="position: absolute; left: 0; padding: 0;">
      <section class="video-bg">
        <iframe src="https://www.youtube.com/embed/s96dcSSC1_s?autoplay=1&mute=1&playsinline=1&loop=1&playlist=s96dcSSC1_s&controls=0&disablekb=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="text-center" style="position: absolute; left: 0; padding: 0;">
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
    </v-col>
  </v-row>
  </div>
</template>

<script>
export default {
  name: 'InspirePage',
}
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}

.video-bg {
  display: block;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #000000;
  overflow: hidden;
}

@media screen and (max-width:1080px) {
  .video-bg::after {
    content: '';
    position: absolute;
    top: -20%;
    left: -140.625vw;
    width: 500vw;
    height: 281.25vw;
    background: rgba(0, 0, 0, .3);
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  }

  .video-bg iframe {
    display: block;
    position: absolute;
    top: 0;
    left: -140.625vw;
    width: 500vw;
    height: 281.25vw;
  } 
}

@media screen and (min-width:1080px) {
  .video-bg::after {
    content: '';
    position: absolute;
    top: 0;
    left: -56.25vw;
    width: 200vh;
    height: 112.5vh;
    background: rgba(0, 0, 0, .3);
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  }

  .video-bg iframe {
    display: block;
    position: absolute;
    top: 0;
    left: -56.25vw;
    width: 200vh;
    height: 112.5vh;
  } 
}
</style>
