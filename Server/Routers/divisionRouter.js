import Router from 'express';
import divisionController from '../Controllers/divisionController.js';
import roleMiddleware from '../Middlewares/roleMiddleware.js';

const divisionRouter = new Router();

divisionRouter.get('/division', divisionController.get);
divisionRouter.get('/division/:id', roleMiddleware(["USER", "ADMIN"]), divisionController.getOne);
divisionRouter.post('/division', roleMiddleware(["ADMIN"]), divisionController.create);
divisionRouter.put('/division/:id', roleMiddleware(["ADMIN"]), divisionController.patch);
divisionRouter.delete('/division/:id', roleMiddleware(["ADMIN"]), divisionController.delete);

export default divisionRouter;