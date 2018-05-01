const Router = require('koa-router')

const apiRouter = new Router({ prefix: '/api' })

const validateUser = async (ctx, next) => {
  if (!ctx.session.user) {
    ctx.status = 401
    ctx.body = 'need login'
  } else {
    await next()
  }
}

apiRouter.use(validateUser)

const sucessResponse = (data) => {
  return {
    success: true,
    data
  }
}

apiRouter
  .get('/todos', async (ctx) => {
    const todos = await ctx.db.getAllTodos()
    ctx.body = sucessResponse(todos)
  })
  .post('/todo', async (ctx) => {
    const data = await ctx.db.addTodo(ctx.request.body)
    ctx.body = sucessResponse(data)
  })
  .put('/todo/:id', async (ctx) => {
    const data = await ctx.db.updateTodo(ctx.params.id, ctx.request.body)
    ctx.body = sucessResponse(data)
  })
  .delete('/todo/:id', async (ctx) => {
    const data = await ctx.db.deleteTodo(ctx.params.id)
    ctx.body = sucessResponse(data)
  })
  .post('/delete/completed', async (ctx) => {
    const data = await ctx.db.deleteCompleted(ctx.request.body.ids)
    ctx.body = sucessResponse(data)
  })
module.exports = apiRouter
