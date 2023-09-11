const express = require('express');
const router = express.Router();
const storesCadetsController = require('../controllers/storesCadetsController');
const productAddValidator = require('../validations/productAddValidator');


/*** GET ALL PRODUCTS ***/ 
router.get('/', storesCadetsController.index); 


/*** CREATE ONE STORECADET ***/ 

router.get('/create', storesCadetsController.create); //Me muestra el formilario para cargar un producto
router.post('/create',productAddValidator ,storesCadetsController.store);  //cuando el formulario devuelva la informacion aca la recibo

/*** GET ONE CADET ***/ 
router.get('/detail/:id', storesCadetsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', storesCadetsController.edit); 
router.put('/edit/:id', storesCadetsController.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', storesCadetsController.destroy); 


module.exports = router;