<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <v-textarea
            solo
            name="input-7-4"
            label="Solo textarea"
            v-model="tempModel"
          ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="">
        <p v-html="convBloomberg"></p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <pre>{{ $data }}</pre>
        <pre><!-- {{state}} --></pre>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    // Logo,
  },
  computed: {
    state() {
      return this.$store.state
    },
    convBloomberg() {
      let a = this.tempModel
      // 改行文、配列を持った方が良いかもしれない。
      // if()
      a = a.replace('# ', `<h1>`)
      tempArray = 
      return a
      // this.tempModel
    },
    ...mapGetters({
      reactiveText: 'ros/getReactiveText'
    })

  },
  methods: {
    putComma(price) {
      return price.toLocaleString();
    },
  },
  mounted() {
    console.log("reactiveText: ", this.reactiveText)
  },
  data: () => ({
    tempModel: '# h1',
    tempArray: []
  }),
}

</script>
