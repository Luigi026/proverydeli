const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/storesCadets.json');
const storesCadets = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller  = { 

    index: (req, res) => {
		const productsFilePath = path.join(__dirname, '../data/storesCadets.json');
		const storesCadets = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('index',{
			storesCadets,
		})	
	},
    detail: (req, res) => {
        const store = storesCadets.find(storeCadet => storeCadet.id === +req.params.id)
        res.render('storeDetail',{
        ...store,
        toThousand
        })
    },
    create : (req, res) => {
        res.render('storesCreate')
    },
    store : (req,res) => {
        /* res.send(req.body) */
        const {name, category, price, adres, description} = req.body;
		let newStore =  {
			id : storesCadets[storesCadets.length - 1].id + 1,
			name : name.trim(),
            category,
			price : +price,
			adres : adres,
			description : description.trim(),
			image : null
		}
		storesCadets.push(newStore);
		fs.writeFileSync(productsFilePath,JSON.stringify(storesCadets, null, 3), 'utf-8')
		res.redirect('/')
    },
    edit : (req,res) => {

    },
    destroy : (req,res) => {
        const storeCadet = storesCadets.filter(storeCadet => storeCadet.id !== +req.params.id)
		fs.writeFileSync(productsFilePath,JSON.stringify(storeCadet, null, 3), 'utf-8')
		res.redirect('/')
    },
    update : (req,res) => {

    },
}

module.exports = controller;
