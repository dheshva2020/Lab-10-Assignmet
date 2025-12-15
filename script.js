class Product {
    constructor(parameters) {
        this.parameters = parameters;
        this.name = name;
        this.price = 0;
        this.quantity = 0;          
    }
get totalValue() {
        return this.price * this.quantity;
}
 set updateQuantity(amount) {
        this.quantity += amount;
 }
set updatePrice(newPrice) {
        this.price = newPrice;
    }
}
module.exports = Product;
function createProduct(params) {
    return new Product(params);
}
