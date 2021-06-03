import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PlanetSchema = new Schema(
  {
    name: { type: String, required: true },
    starId: { type: Schema.Types.ObjectId, ref: 'Star', required: true },
    galaxyId: { type: Schema.Types.ObjectId, ref: 'Galaxy', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
