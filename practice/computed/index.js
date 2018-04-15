import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name: {{ name}} </p>
      <p>Name: {{ getName() }} </p>
      <p>Full Name: {{ fullName }} </p>
      <p><input type='text' v-model="number" /></p>
      <p>Fist Name:<input type='text' v-model="firstName" /></p>
      <p>Last Name:<input type='text' v-model="lastName" /></p>
      <p>Name:<input type='text' v-model="name" /></p>
      <p>Obj.a:<input type='text' v-model="Obj.a" /></p>
    </div>
  `,
  data: {
    firstName: 'jack',
    lastName: 'chui',
    number: 0,
    fullName: '',
    Obj: {
      a: '123'
    }
  },
  computed: {
    // name () {
    //   console.log('new name')
    //   return `${this.firstName} ${this.lastName}`
    // }
    name: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  // mounted () {
  //   this.obj = {
  //     a: '345'
  //   }
  // },
  watch: {
    // firstName: {
    //   handler (newName, oldName) {
    //     this.fullName = newName + ' ' + this.lastName
    //   },
    //   immediate: true
    // },
    'Obj.a': {
      handler () {
        console.log('obj.a changed')
      },
      immediate: true
    }
  },
  methods: {
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
