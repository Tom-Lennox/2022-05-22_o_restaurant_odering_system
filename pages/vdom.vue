<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <v-textarea
            solo
            name="input-7-4"
            label="Solo textarea"
            v-model="markdown"
          ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="">
        <div v-html="$md.render(markdown)"></div>
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
    tempArray: [],
      markdown: `
国債の利子はどうなるのか知りたい。
    国債、利払い
        日銀納付金
        日銀保有の国債の利子は、日銀納付金の名目で政府が利益を得る。
            日本銀行法 53条5項
                日本ぎんこうは各事業年度の損益計算上の余剰金の額から積立た金額及び配当の金額の合計額を控除した金額を各事業年度終了時二ヶ月以内に**国庫に納付しなければならない**
![サンマの塩焼き](https://bayashita.com/img/sanma.gif)

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Lists

Unordered

+ Create a list by starting a line with '+', '-', or '*'
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as '1.'

Start numbering with offset:

57. foo
1. bar
    `
  }),
}

</script>

<style lang="scss" scoped>
::v-deep h1 {
  color: red;
  font-size: 
}
</style>
