import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  data () {
    return {
      text: '0'
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

// Vue.component('CompOne', component)

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data: {
    prop1: 'texct1'
  },
  template: `
    <div>
      <comp-one :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
      <comp-one :active="false" propOne="text2"></comp-one>
    </div>
  `,
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  }
})
