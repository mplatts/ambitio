mongoose = require 'mongoose'

exports.create = (req, res) ->
  Goal = mongoose.model('Goal')
  fields = req.body # Posted params (not in url)

  goal = new Goal(fields)
  goal.save (err, resource) ->
    res.send(500, { error: err }) if err?
    res.send(resource)

exports.retrieve = (req, res) ->
  Goal = mongoose.model('Goal')

  if req.params.id? # "goals/:id"
    Goal.findById req.params.id, (err, goal) ->
      res.send(500, { error: err }) if err?
      res.send(goal) if goal?
      res.send(404) # not found
  else # "/goals" get collection
    Goal.find {}, (err, collection) ->
      res.send(collection)

exports.update = (req, res) ->
  Goal = mongoose.model('Goal')
  fields = req.body

  Goal.findByIdAndUpdate req.params.id, { $set: fields }, (err, goal) ->
    res.send(500, { error: err }) if err?
    res.send(200) if goal? # no need to send it back
    res.send(404)

exports.delete = (req, res) ->
  Goal = mongoose.model('Goal')
  Goal.findByIdAndRemove req.params.id, (err, goal) ->
    res.send(500, {error: err}) if err?
    res.send(200) if goal?
    res.send(404)
