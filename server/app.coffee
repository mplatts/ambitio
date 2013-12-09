express  = require 'express'
mongoose = require 'mongoose'
path = require 'path'

app = express()
PUBLIC_DIR = '../client/public'

app.configure ->
  app.use express.bodyParser() # params become available as req.body
  app.set "port", process.env.PORT or 3000
  app.set "storage-uri", process.env.MONGOHQ_URL or process.env.MONGOLAB_URI or 'mongodb://localhost/ambitio'
  app.set "views", "#{__dirname}/public"
  app.engine "html", require("ejs").renderFile

  # Serve static assets
  app.use("/assets", express.static(path.join(__dirname, PUBLIC_DIR, "assets")))

mongoose.connect app.get('storage-uri'), { db: { safe: true }}, (err) ->
  console.log "Mongoose - connection error: " + err if err?
  console.log "Mongoose - connection OK"

require './models/goal'
goals = require './controllers/goals'

app.get '/', (req, res) ->
  console.log "loading index"
  res.render path.join(__dirname, PUBLIC_DIR, "index.html")

app.get '/views/:name', (req, res) ->
  name = req.params.name
  console.log "attempting to get view", name
  res.render path.join(__dirname, PUBLIC_DIR, "views", name)

app.post '/goals', goals.create
app.get '/goals', goals.retrieve
app.get '/goals/:id', goals.retrieve
app.put '/goals/:id', goals.update
app.delete '/goals/:id', goals.delete

app.listen app.get('port'), ->
  console.log "Listening on port #{app.get('port')}"
