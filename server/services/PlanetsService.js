import { dbContext } from '../db/DbContext'

class PlanetsService {
  async getAll() {
    return await dbContext.Planets.find({})
  }

  async getOne(id) {
    return await dbContext.Planets.findById(id)
  }

  async create(planetData) {
    return await dbContext.Planets.create(planetData)
  }

  async delete(id) {
    return await dbContext.Planets.findByIdAndDelete(id)
  }
}

export const planetsService = new PlanetsService()
