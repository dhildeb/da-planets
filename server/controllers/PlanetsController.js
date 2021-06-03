import BaseController from '../utils/BaseController'
import { planetsService } from '../services/PlanetsService'

export class PlanetsController extends BaseController {
  constructor() {
    super('/api/planet')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .post('', this.create)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      const planets = await planetsService.getAll()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      const planets = await planetsService.getOne(req.params.id)
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const planet = await planetsService.create(req.body)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const planet = await planetsService.delete(req.params.id)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}
