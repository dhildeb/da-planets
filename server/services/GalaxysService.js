import { dbContext } from '../db/DbContext'

class GalaxysService {
  async getAll() {
    return await dbContext.Galaxys.find({})
  }

  async getOne(id) {
    return await dbContext.Galaxys.findById(id)
  }

  async create(galaxyData) {
    return await dbContext.Galaxys.create(galaxyData)
  }

  async delete(id) {
    return await dbContext.Galaxys.findOneAndDelete(id)
  }
}

export const galaxysService = new GalaxysService()
