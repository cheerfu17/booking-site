import Router from 'express';
import divisionController from '../Controllers/divisionController.js';

const divisionRouter = new Router();

divisionRouter.get('/division', divisionController.getAll );
divisionRouter.get('/division/:id', divisionController.getOne );
divisionRouter.post('/division', divisionController.create );
divisionRouter.put('/division/:id', divisionController.edit );
divisionRouter.delete('/division/:id', divisionController.delete );

export default divisionRouter;