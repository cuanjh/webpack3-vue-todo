import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model="text" />
      <span @click="handleChange">{{propOne}}</span>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  },
  mounted () {
    console.log('component mounted')
  }
}

// const CompVue = Vue.extend(component)

// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'xxx'
//   },
//   data: {
//     text: 123
//   },
//   mounted () {
//     console.log('instance mounted')
//   }
// })

const component2 = {
  extends: component,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log('comp2 mounted')
    console.log(this.$parent.$options.name)
  }
}

new Vue({
  name: 'root',
  el: '#root',
  components: {
    Comp: component2
  },
  template: `<comp></comp>`
})
