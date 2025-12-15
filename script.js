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
module.exports.createProduct = createProduct;
module.exports = Product;
// add new property to Product class
Product.prototype.category = 'General';
function getCategory() {
    return this.category;
}
Product.prototype.getCategory = getCategory;
// add new method to initialize product details
Product.prototype.initialize = function(name, price, quantity, expirationDate) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.expirationDate = expirationDate;
};
// add toString method that includes expiry Date
Product.prototype.toString = function() {
    return `Product Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
}
// add static method to apply discount to products by price range
Product.applyDiscountByPriceRange = function(products, minPrice, maxPrice, discountPercent) {
    products.forEach(product => {
  if (product.price >= minPrice && product.price <= maxPrice) {
            product.price -= product.price * (discountPercent / 100);
        }
    });
}
