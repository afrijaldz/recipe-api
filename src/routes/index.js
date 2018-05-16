const recipeController = require('../controllers/recipe')

module.exports = (express) => {
  const router = express.Router()

  router.get('/', recipeController.index)
  router.get('/:id', recipeController.show)
  router.post('/', recipeController.store)
  router.put('/:id', recipeController.update)
  router.delete('/:id', recipeController.destroy)

  return router
}