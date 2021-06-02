import BaseController from '../utils/BaseController'
import { starsService } from '../services/StarsService'

export class StarsController extends BaseController {
  constructor() {
    super('/api/star')
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .post('', this.create)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      const stars = await starsService.getAll()
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      const star = await starsService.getOne(req.params.id)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const star = await starsService.create(req.body)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const star = await starsService.delete(req.params.id)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }
}
