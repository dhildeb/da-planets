import BaseController from '../utils/BaseController'
import { moonsService } from '../services/MoonsService'
export class MoonsController extends BaseController {
  constructor() {
    super('/api/moon')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .post('', this.create)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      const moons = await moonsService.getAll()
      return res.send(moons)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    const moon = await moonsService.getOne(req.params.id)
    return res.send(moon)
  }

  async create(req, res, next) {
    const moon = await moonsService.create(req.body)
    return res.send(moon)
  }

  async delete(req, res, next) {
    const moon = await moonsService.delete(req.params.id)
    return res.send(moon)
  }
}
