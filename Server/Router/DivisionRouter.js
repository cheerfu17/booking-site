import Router from 'express'

const router = new Router()

router.get('/Division', (req, res) => {res.json( "Divison get запрос выполнене")})
router.post('/Division', (req, res) => {res.json( "Divison post запрос выполнене")})
router.put('/Division', (req, res) => {res.json( "Divison put запрос выполнене")})
router.delete('/Division', (req, res) => {res.json( "Divison delete запрос выполнене")})

export default router;