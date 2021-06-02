import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StarSchema = new Schema(
  {
    name: { type: String, require: true },
    galaxy: { type: Schema.Types.ObjectId, ref: 'galaxy', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
