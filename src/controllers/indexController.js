module.exports = {
    index : (req, res) => {
        return res.render('index')
    },
    pedidos : (req, res) => {
        return res.render('orders');
    },
    admin: (req, res) => {
        return res.render('admin')
    }
}