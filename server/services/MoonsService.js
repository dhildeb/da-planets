import { dbContext } from '../db/DbContext'
class MoonsService {
  async getAll() {
    return await dbContext.Moons.find({})
  }

  async getOne(id) {
    return await dbContext.Moons.findById(id)
  }

  async create(moonData) {
    return await dbContext.Moons.create(moonData)
  }

  async delete(id) {
    return await dbContext.Moons.findByIdAndDelete(id)
  }
}

export const moonsService = new MoonsService()
