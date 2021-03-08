function welCome(req, res) {
    res.send('<h1>Hello World</h1>')
}

function getProduct(req, res) {
    res.send('<h1>Hello get</h1>')
}

function insertProduct(req, res) {
    res.send('<h1>Hello World</h1>')
}

function updateProduct(req, res) {
    res.send('<h1>Hello World</h1>')
}

function deleteProduct(req, res) {
    res.send('<h1>Hello World</h1>')
}

exports.welCome = welCome;
exports.insertProduct = insertProduct;
exports.getProduct = getProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;