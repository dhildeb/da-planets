import ValueSchema from '../models/Value'
import mongoose from 'mongoose'
import { GalaxyScema } from '../models/Galaxy'
import { StarSchema } from '../models/Star'
import { MoonSchema } from '../models/Moon'
import { PlanetSchema } from '../models/Planet'

class DbContext {
  Galaxys = mongoose.model('Galaxy', GalaxyScema)
  Moons = mongoose.model('Moon', MoonSchema)
  Planets = mongoose.model('Planet', PlanetSchema)
  Stars = mongoose.model('Star', StarSchema)
  Values = mongoose.model('Value', ValueSchema)
}

export const dbContext = new DbContext()
