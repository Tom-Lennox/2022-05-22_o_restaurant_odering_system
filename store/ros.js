
export const state = () => ({
    counter: 1,
    reactiveText: "test",
    burgers: [
        {
          BurgerName: '炭火焼きバーガー',
          imgUrl: '/hamburger-1238246_1920.jpg',
          routerTo: '/MenuGif',
          price: 1000,
        },
        {
          BurgerName: '低糖質チーズバーガー',
          imgUrl: '/hamburger-1238246_1920.jpg',
          to: '/vuexToDo',
          price: 1100,
        },
        {
          BurgerName: 'ハワイアンバーガー',
          imgUrl: '/hamburger-1238246_1920.jpg',
          to: '/vuexIn',
          price: 1200,
        },
        {
          BurgerName: 'ベーコンオニオンバーガー',
          imgUrl: '/hamburger-1238246_1920.jpg',
          to: '/api',
          price: 1000,
        },
        {
          BurgerName: 'サラダバーガー',
          imgUrl: '/hamburger-1238246_1920.jpg',
          to: '/hoge',
          price: 1000,
        },
        {
          BurgerName: 'ストリベリーバーガー',
          imgUrl: '/hamburger-1238246_1920.jpg',
          to: '/hoge',
          price: 1000,
        },
        {
          BurgerName: 'ジャックバーガー',
          imgUrl: '/hamburger-1238246_1920.jpg',
          to: '/hoge',
          price: 1000,
        },
    ],
})

export const getters = {
    getCount: (state) => {
        return state.counter
    },
    getBurgers: (state) => {
        return state.burgers
    },
    getReactiveText: (state) => {
      return state.reactiveText
    }
}
