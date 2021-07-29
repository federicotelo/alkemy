const { Router } = require('express');
const router = Router();

const { getInformation, createData, getData, deleteData, updateData, getBalance, getAll } = require('../controllers/datos.controller');

router.get('/', getInformation);

router.post('/', createData);

router.get('/:id', getData);

router.patch('/:id', updateData);

router.delete('/:id', deleteData);

router.post('/balance', getBalance);


module.exports = router;


