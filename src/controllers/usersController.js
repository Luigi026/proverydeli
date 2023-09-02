const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

/* const productsFilePath = path.join(__dirname, '../data/storesCadets.json');
const storesCadets = JSON.parse(readFileSync(productsFilePath, 'utf-8')); */
//toThousand : recibe un numero ese numero lo convierte en string y incorpora un punto(.) cada tres caracteres 

const controller = {
	
    register : (req, res) => {
        res.render('register')
    },
    login : (req, res) => {
        res.render('login')
    }
}

module.exports = controller;