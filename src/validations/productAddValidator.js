const { check  } = require('express-validator');

// EXPORTO UN ARRAY []. donde uso el metodo check de express-validator donde hacemos referencia al valor del atributo name del input diciendo que el campo no este vacio y le mando un mensaje 

module.exports = [

    check('name')
        .notEmpty().withMessage('El nombre es obligario')
        .bail()
        .isLength({
            min : 4,
            max : 50
        }).withMessage('El nombre debe tener entre 4 y 50 caracteres'),
    
    check('category')
        .notEmpty().withMessage('La categoría es obligatoria'),    

    check('price')
        .notEmpty().withMessage('El precio es obligatorio')
        .isInt({
            gt : 1
        }).withMessage('Debe se un numero positivo'),
        
    check('description')
        .notEmpty().withMessage('La descripción es obligatoria').isLength({
            min : 20,
            max : 500
        }).withMessage('Debe tener entre 20 y 500 caracteres'),
    check('adres')
        .notEmpty().withMessage('La direccion es obligatoria')
        .isLength({
            min : 10,
            max : 100
        }).withMessage('Debe tener entre 15 y 70 caracteres')    
]