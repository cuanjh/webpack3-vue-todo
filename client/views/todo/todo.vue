<template>
  <section class="real-app">
    <div class="tab-container">
      <tabs :value='filter' @change="handleChangeTab">
        <!-- <tab label="tab1" index="1">
          <span>tab content1 {{tabContent}}</span>
        </tab>
        <tab index="2">
          <span slot="label" style="color:red;">tab2</span>
        </tab>
        <tab label="tab3" index="3">
          <span>tab content3</span>
        </tab> -->
        <tab :label="tab" :index="tab" v-for="tab in states" :key="tab"/>
      </tabs>
    </div>
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="handleAdd"
    >
    <item
      :todo="todo"
      v-for="todo in filteredTodos"
      :key="todo.id"
      @del="deleteTodo"
      @toggle="toggleTodoState"
    />
    <Helper
      :filter="filter"
      :todos="todos"
      @clearAllCompleted = "deleteAllCompleted"
    />
    <!-- <router-view /> -->
  </section>
</template>

<script>
import {
  mapState, mapActions
} from 'vuex'
import Item from './item.vue'
import Helper from './Helper.vue'
// let id = 0
export default {
  metaInfo: {
    title: 'The Todo App'
  },
  beforeRouteEnter (to, from, next) {
    console.log('todo route before enter')
    next(vm => {
      console.log('after enter vm.id is ', vm.id)
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('todo before update enter')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('todo before leave enter')
    // if (global.confirm('Are you sure?')) {
    next()
    // }
  },
  props: ['id'],
  mounted () {
    // console.log(this.id)
    if (this.todos && this.todos.length < 1) {
      this.fetchTodos()
    }
  },
  asyncData ({ store, router }) {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(123)
    //   }, 1000)
    // })
    if (store.state.user) {
      return store.dispatch('fetchTodos')
    }
    router.replace('/login')
    return Promise.resolve()
  },
  data () {
    return {
      // todos: [],
      filter: 'all',
      // tabValue: '1',
      // tabContent: '',
      states: ['all', 'active', 'completed']
    }
  },
  components: {
    Item,
    Helper
  },
  computed: {
    ...mapState(['todos']),
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    ...mapActions([
      'fetchTodos',
      'addTodo',
      'deleteTodo',
      'updateTodo',
      'deleteAllCompleted'
    ]),
    handleAdd (e) {
      const content = e.target.value.trim()
      if (!content) {
        this.$notify({
          content: '必须输入要做的内容'
        })
        return
      }
      const todo = {
        content,
        completed: false
      }
      this.addTodo(todo)
      e.target.value = ''
    },
    // deleteTodo (id) {
    //   this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    // },
    toggleFilter (state) {
      this.filter = state
    },
    toggleTodoState (todo) {
      this.updateTodo({
        id: todo.id,
        todo: Object.assign({}, todo, {
          completed: !todo.completed
        })
      })
    },
    clearAllCompleted () {
      // this.todos = this.todos.filter(todo => !todo.completed)
      this.deleteAllCompleted()
    },
    handleChangeTab (value) {
      this.filter = value
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app{
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
}
.add-input{
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
.tab-container {
  background-color: #fff;
  padding: 0 15px;
}
</style>

