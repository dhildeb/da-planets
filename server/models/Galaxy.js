import mongoose from 'mongoose'

export const GalaxyScema = new mongoose.Schema({
  name: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })
