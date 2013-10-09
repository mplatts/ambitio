express  = require 'express'
mongoose = require 'mongoose'

app = express()

app.configure ->
  app.use express.bodyParser() # params become available as req.body
  app.set "port", process.env.PORT or 3000
  app.set "storage-uri", process.env.MONGOHQ_URL or process.env.MONGOLAB_URI or 'mongodb://localhost/ambitio'

mongoose.connect app.get('storage-uri'), { db: { safe: true }}, (err) ->
  console.log "Mongoose - connection error: " + err if err?
  console.log "Mongoose - connection OK"

require './models/goal'
goals = require './controllers/goals'

app.get '/', (req, res) ->
  res.send 'Hi there'

app.post '/goals', goals.create
app.get '/goals', goals.retrieve
app.get '/goals/:id', goals.retrieve
app.put '/goals/:id', goals.update
app.delete '/goals/:id', goals.delete

app.listen app.get('port'), ->
  console.log "Listening on port #{app.get('port')}"
