import Vue from 'vue'

const ChildComponent = {
  template: '<div>child component</div>',
  inject: ['yeye', 'value'],
  mounted () {
    // console.log(this.$parent.$options.name)
    console.log(this.yeye, this.value)
  }
}
const component = {
  name: 'comp',
  components: {
    ChildComponent
  },
  // template: `
  //   <div :style="style">
  //     <div class="header">
  //       <slot name="header"></slot>
  //     </div>
  //     <div class="body">
  //       <slot name="body"></slot>
  //     </div
  //   </div>
  // `,
  template: `
    <div :style="style">
      <slot :value="value" test="111"></slot>
      <child-component />
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'component value'
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  provide () {
    return {
      yeye: this,
      value: this.value
    }
  },
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    console.log(this.$refs.comp.value, this.$refs.span)
  },
  // template: `
  //   <comp-one>
  //     <span slot="header">this is header</span>
  //     <span slot="body">this is body</span>
  //   </comp-one>
  // `
  template: `
    <comp-one ref="comp">
      <span slot-scope="props" ref="span">{{props.value}} {{props.test}} {{value}}</span>
    </comp-one>
  `
})
