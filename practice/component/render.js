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
  props: ['prop1'],
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
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  render (createElement) {
    return createElement('div', {
      style: this.style
      // on: {
      //   click: () => { this.$emit('click') }
      // }
    }, [
      this.$slots.header,
      this.prop1
    ])
  },
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
  // template: `
  //   <comp-one ref="comp">
  //     <span ref="span">{{value}}</span>
  //   </comp-one>
  // `,
  methods: {
    handleClick () {
      console.log('clicked')
    }
  },
  render (createElement) {
    return createElement('comp-one', {
      ref: 'comp',
      props: {
        prop1: this.value
      },
      // on: {
      //   click: this.handleClick
      // }
      nativeOn: {
        click: this.handleClick
      }
    }, [createElement('span', {
      ref: 'span',
      slot: 'header',
      domProps: {
        innerHTML: '<span>33234</span>'
      },
      attrs: {
        id: 'test-id'
      }
    }, this.value)])
  }
})
