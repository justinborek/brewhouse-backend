const userControllerMethods = require ('../controllers/userControllers');
const recipeControllerMethods = require('../controllers/recipeControllers');

const middleware = require('../middlewares/middleware');

module.exports = (app) => {
  app.route('/new-user').post(middleware.hashPassword, userControllerMethods.createUser);
  app.route('/users/:username').get(userControllerMethods.getUser);
  app.route('/users/:username').put(userControllerMethods.updateUser);
  app.route('/login').post(middleware.authenticate ,userControllerMethods.userLogin);
  app.route('/recipes').get(recipeControllerMethods.getRecipes);
  app.route('/new-recipe').post(recipeControllerMethods.createRecipe);
};