<template>
  <div id="app">
    <div id="cover"></div>
    <div id="loading" v-show="loading">
      <loading></loading>
    </div>
    <Header></Header>
    <!-- <p>{{ counter }}</p>
    <p>{{ fullName }}</p>
    <p>{{ textA }}</p> -->
    <!-- <todo></todo> -->
    <!-- <router-link :to="{name:'app'}">app</router-link> -->
    <!-- <router-link to="/app">app</router-link> -->
    <!-- <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link>
    <router-link to="/login">login</router-link> -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <!-- <button @click="notify">click me</button> -->
    <!-- <notification content="test notify" /> -->
    <Footer></Footer>
    <!-- <router-view name="a" /> -->
  </div>
</template>

<script>
import
{
  mapState
  // mapGetters,
  // mapMutations,
  // mapActions
} from 'vuex'
import Header from './views/layout/header.vue'
import Footer from './views/layout/footer.jsx'
import Loading from './components/loading/loading.vue'

export default {
  metaInfo: {
    title: 'cc\'s todo'
  },
  components: {
    Header,
    Footer,
    Loading
  },
  mounted () {

    // console.log(this.$route)
    // console.log(this.$store)
    // this.$store.state.count = 3 // 不规范写法
    // let i = 1
    // setInterval(() => {
    //   // this.$store.commit('updateCount', i++)
    //   this.$store.commit('updateCount', {
    //     num: i++,
    //     num2: 3
    //   })
    // }, 1000)
    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 2000
    // })
    // this.updateCountAsync({
    //   num: 5,
    //   time: 2000
    // })
    // let i = 1
    // setInterval(() => {
    //   this.updateCount({
    //     num: i++,
    //     num2: 3
    //   })
    // }, 1000)
  },
  methods: {
    // ...mapMutations(['updateCount']),
    // ...mapActions(['updateCountAsync']),
    notify () {
      this.$notify({
        content: 'test $notify',
        btn: 'close'
      })
    }
  },
  computed: {
    ...mapState(['loading'])
    // textA () {
    //   return this.$store.state.a.text
    // },
    // ...mapState(['count']),
    // ...mapState({
    //   counter: 'count'
    // }),
    // ...mapState({
    //   counter: (state) => state.count
    // }),
    // count () {
    //   return this.$store.state.count
    // },
    // ...mapGetters(['fullName'])
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
#loading{
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  background-color rgba(255,255,255,.3)
  z-index 99
  display flex
  align-items center
  justify-content center
}
</style>

