import { galaxysService } from '../services/GalaxysService'
import BaseController from '../utils/BaseController'

export class GalaxysController extends BaseController {
  constructor() {
    super('/api/galaxy')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .post('', this.create)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      const galaxy = await galaxysService.getAll()
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      const galaxy = await galaxysService.getOne(req.params.id)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const galaxy = await galaxysService.create(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const galaxy = await galaxysService.delete(req.params.id)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}
