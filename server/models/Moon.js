import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const MoonSchema = new Schema(
  {
    name: { type: String, required: true },
    galaxyId: { type: Schema.Types.ObjectId, ref: 'Galaxy', required: true },
    starId: { type: Schema.Types.ObjectId, ref: 'Star', required: true },
    planetId: { type: Schema.Types.ObjectId, ref: 'Planet', required: true }
  }, { timestamps: true, toJSON: { virtuals: true } }
)
