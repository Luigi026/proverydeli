const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/storesCadets.json');
const storesCadets = JSON.parse(readFileSync(productsFilePath, 'utf-8'));
//toThousand : recibe un numero ese numero lo convierte en string y incorpora un punto(.) cada tres caracteres 

const controller = {
	index: (req, res) => {
		res.render('index',{ 
            stores : storesCadets.filter(storeCadet => storeCadet.category  === 'stores'),
            cadets : storesCadets.filter(storeCadet => storeCadet.category === 'cadets'),
        })
	},
    stores: (req, res) => {
        res.render('stores')
    },
    cadets: (req, res) => {
        res.render('cadets')
    },
    orders: (req, res) => {
        res.render('orders')
    },
    map : (req, res) => {
        res.render('map')
    }


}

module.exports = controller;
