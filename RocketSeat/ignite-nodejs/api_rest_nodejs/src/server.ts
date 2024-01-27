import fastify from 'fastify'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE
//http://localhost:3333/hello

app.get('/hello', ()=>{
	return 'Hello World'
})
