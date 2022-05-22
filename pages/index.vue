<template>
  <v-container>
    <div style="height: 550px;">
    <!-- <v-title>index.vue</v-title> -->
    <v-carousel
      cycle
      interval="1000"
      :show-arrows="false"
      hide-delimiters
      class="mb-10"
      style="position: absolute; top: 0; left: 0;"
    >
      <v-carousel-item
        v-for="(item, i) in CarouselItems"
        :key="i"
        :src="item.src"
        :gradient="item.gradient"
        :href="item.link"
      >
        <v-sheet height="100%" style="background-color: transparent;">
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="text-h2" style="position: absolute; bottom: 20px; left: 20px; color: white; font-weight: bold; background: rgba(0, 0, 0, 0.5); padding: 20px;">{{ item.carouselName }}</div>
            <div class="text-h2" style="color: white; font-weight: bold;">{{ item.alertMessage }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    </div>
    <!-- -->
    <v-row>
      <v-col v-for="(burger, index) in burgers" :key="index" cols="12" xs="4" sm="4" md="4" lg="4" xl="4">
        <v-hover v-slot="{ hover }">
          <v-card class="logo justify-center"
              outlined
              raised
              :href="burger.imgUrl"
              :to="burger.routerTo"
              :elevation="hover ? 12 : 2"
          >
            <v-img
              :src="burger.imgUrl"
            ></v-img>
            <v-card-title>
              {{ burger.BurgerName }}
            </v-card-title>
            <v-card-text>{{ putComma(burger.price) }}</v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <!-- -->
    <v-row>
      <v-col v-for="(k, index) in 3" :key="index" xs="12" sm="12" md="12" lg="12" xl="12">
        <v-hover v-slot="{ hover }">
          <v-card
            outlined
            raised
            :elevation="hover ? 12 : 2"
          >
          <v-card-title>サイドメニュー</v-card-title>
            <v-img
              src="https://images.unsplash.com/photo-1586985289071-36f62f55ce44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              height="60px"
            >
            </v-img>
            <v-card-text style="display: flex; justify-content: space-between;">
              説明など blah blah blah blah blah blah blah blah blah blah blah
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-flex
          v-for="(info,i) in infos"
          :key="i"
          class="text-center"
          xs12
          sm12
          md12
          lg12
          xl12
          text-center
          my-1
        >
          <v-card max-width="1200" class="mx-auto"
            ><v-card-title class="headline">
              {{ info.title }}
            </v-card-title>
            <v-card-text>
              {{ info.text }}
            </v-card-text>
          </v-card>
        </v-flex>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <pre>{{burgers}}</pre>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    // Logo,
  },
  setup(props) {
    console.log("aaaaaaa")
  },
  computed: {
    state() {
      return this.$store.state
    },
    ...mapGetters({
      count: 'ros/getCount',
      burgers: 'ros/getBurgers',
    })
  },
  methods: {
    putComma(price) {
      return price.toLocaleString();
    },
  },
  mounted() {
    console.log(this.burgers)
  },
  data: () => ({
    CarouselItems: [
      {
        carouselName: 'アボカドバーガー',
        src: 'burger-6507710_1920.jpg',
        gradient: 'to top right, rgba(0,0,0,.1) 22%, rgba(0,0,0,.9) 33%',
        link: 'https://cdn.pixabay.com/photo/2015/12/08/00/26/food-1081707_1280.jpg',
        alertMessage: '- Sold Out -',
      },
      {
        carouselName: 'アボカドバーガー',
        src: 'burger-6507710_1920.jpg',
        gradient: '',
        link: 'https://cdn.pixabay.com/photo/2015/12/08/00/26/food-1081707_1280.jpg',
        alertMessage: '',
      },
      {
        carouselName: 'アボカドバーガー',
        src: 'burger-6507710_1920.jpg',
        gradient: '',
        link: 'https://3.bp.blogspot.com/-DAMmt4RlkoI/VdL1FGthL1I/AAAAAAAAw5U/9rzVaaxj6Bk/s400/food_onigirazu.png',
        alertMessage: '',
      },
    ],
    infos: [
      {
        title: '重要なお知らせ',
        text: 'text',
      },
      {
        title: 'お知らせ',
        text: 'text',
      },
    ],
  }),
}

</script>
<style scoped>
/* 場所 如何に関わらず全部これ使いたい。 */
  .opacityText {
    background: rgba(0, 0, 0, 0.8);
  }
  .burgerInfo {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.7em;
    display: flex;
    justify-content: space-between;
  }
</style>
