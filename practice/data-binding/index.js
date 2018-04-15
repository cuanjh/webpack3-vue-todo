import Vue from 'vue'
var globalVar = '111' // eslint-disable-line
new Vue({
  el: '#root',
  // template: `
  //   <div>
  //     {{isActive ? 'active' : 'not active'}}
  //   </div>
  // `,
  // template: `
  //   <div>
  //    {{ arr.join(' ') }}
  //   </div>
  // `,
  // template: `
  //   <div>
  //    {{ Date.now() }}
  //   </div>
  // `,
  // template: `
  //   <div>
  //    {{ globalVal }}
  //   </div>
  // `,
  template: `
    <div v-bind:id="id" v-on:click="handleClick" :class="{ active : !isActive}">
     <p v-html='html'></p>
     <p>{{getJoinedArr(arr)}}</p>
     <p :style="[style, style2]">123</p>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>122</span>',
    id: 'aaa',
    style: {
      color: 'red',
      appearance: 'none'
    },
    style2: {
      color: 'black'
    }
  },
  methods: {
    handleClick () {
      alert('aa') // eslint-disable-line
    },
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }
})
