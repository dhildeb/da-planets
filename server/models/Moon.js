import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const MoonSchema = new Schema(
  {
    name: { type: String, required: true },
    Galaxy: { type: Schema.Types.ObjectId, ref: 'Galaxy', required: true },
    star: { type: Schema.Types.ObjectId, ref: 'star', required: true },
    planet: { type: Schema.Types.ObjectId, ref: 'planet', required: true }
  }, { timestamps: true, toJSON: { virtuals: true } }
)
