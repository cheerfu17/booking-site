import Router from 'express';

const divisionRouter = new Router();

divisionRouter.get('/division', (req, res) => {res.json( "Divison get запрос выполнене")});
divisionRouter.get('/division/:id', (req, res) => {res.json("Divison get запрос выполнене")});
divisionRouter.post('/division', (req, res) => {res.json( "Divison post запрос выполнене")});
divisionRouter.put('/division/:id', (req, res) => {res.json( "Divison put запрос выполнене")});
divisionRouter.delete('/division/:id', (req, res) => {res.json( "Divison delete запрос выполнене")});

export default divisionRouter;