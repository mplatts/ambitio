mongoose = require "mongoose"

Goal = new mongoose.Schema(
  name: {type: String, trim: true}
  created_at: {type: Date, default: Date.now }
)

mongoose.model "Goal", Goal
