import { dbContext } from '../db/DbContext'

class StarsService {
  async getAll() {
    return await dbContext.Stars.find({})
  }

  async getOne(id) {
    return await dbContext.Stars.findById(id)
  }

  async create(starData) {
    return await dbContext.Stars.create(starData)
  }

  async delete(id) {
    return await dbContext.Stars.findByIdAndDelete(id)
  }
}

export const starsService = new StarsService()
