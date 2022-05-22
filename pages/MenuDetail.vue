<template>
  <div>
    <v-img
    lazy-src="https://picsum.photos/id/11/10/6"
    src="/wood-411643.jpg"
    style="width: 100vw; height: 100%; position: absolute; top: 0; left: 0;"
    gradient="to top, rgba(0,0,0,.66), rgba(0,0,0,.66)"
    ></v-img>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="logo py-4 d-flex justify-center">
          <NuxtLogo />
        </v-card>
        <v-card>
          <v-card-title class="headline">
            Welcome to the Vuetify + Nuxt.js template
          </v-card-title>
          <v-card-text>
            <p>
              Thank you for developing with Vuetify and I look forward to bringing
              more exciting features in the future.
            </p>
            <div class="text-xs-right">
              <em><small>アレルギー成分</small></em>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="4" sm="4" md="4" v-for="n of 13" :key="n">
        <v-card class="logo py-4 d-flex justify-center">
          <NuxtLogo />
          {{n}}
        </v-card>
        <v-card>
          <v-card-title class="headline">
            Welcome to the Vuetify + Nuxt.js template
          </v-card-title>
          <v-card-text>
            <p>
              Thank you for developing with Vuetify and I look forward to bringing
              more exciting features in the future.
            </p>
            <div class="text-xs-right">
              <em><small>アレルギー成分</small></em>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
