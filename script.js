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
      
// add store class to manage multiple products
class Store {
    constructor() {
        this.products = [];
    }

    // add product to inventory
    addProduct(product) {
        this.products.push(product);
    }
// get total inventory value
    get totalInventoryValue() {
        return this.products.reduce((total, product) => total + product.totalValue, 0);
    }
 // find products by category
    findProductsByCategory(category) {
        return this.products.filter(product => product.getCategory() === category);
    }
}
// add perishable products with expiration date check
Product.prototype.isExpired = function(currentDate) {
    const expDate = new Date(this.expirationDate);
    return currentDate > expDate;
}
// add product to the store and check expiration
const currentDate = new Date('2024-12-01');
store.products.forEach(product => {
    if (product.isExpired(currentDate)) {
        console.log(`${product.name} is expired.`);
    } else {
        console.log(`${product.name} is not expired.`);
    }
});
// pirnt the total inventory value before and after applying 15% discount to all products
console.log(`Total Inventory Value before discount: $${store.totalInventoryValue}`);
Product.applyDiscountByPriceRange(store.products, 0, Infinity, 15);
console.log(`Total Inventory Value after 15% discount: $${store.totalInventoryValue}`);
//add find and print the setails of specific product by its name
function findProductByName(store, productName) {
    return store.products.find(product => product.name === productName);
}   
const searchedProduct = findProductByName(store, 'Orange');
if (searchedProduct) {
    console.log(`Found Product: ${searchedProduct.toString()}`);
} else {
    console.log('Product not found.');
}
// add these product to a store object
store.addProduct(prod1);
store.addProduct(prod2);
store.addProduct(prod3);
prod1.initialize('Apple', 1.0, 100, '2024-12-31');
prod2.initialize('Banana', 0.5, 200, '2024-11-30');
prod3.initialize('Orange', 1.5, 150, '2024-10-15');
console.log(`Total Inventory Value: $${store.totalInventoryValue}`);
const fruits2 = store.findProductsByCategory('General');
console.log(`Fruits in Store: ${fruits2.map(fruit => fruit.name).join(', ')}`);
Product.applyDiscountByPriceRange(store.products, 0.5, 1.0, 10);
console.log('After applying discount:');
store.products.forEach(product => {
    console.log(product.toString());
});
