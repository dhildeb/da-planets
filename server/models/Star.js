import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StarSchema = new Schema(
  {
    name: { type: String, require: true },
    galaxyId: { type: Schema.Types.ObjectId, ref: 'Galaxy', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
