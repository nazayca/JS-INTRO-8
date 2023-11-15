const appleStore = [

    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99
    }
];

// Find the most expensive product   -> MacBook Pro 16-inch
// Find the least expensive product   -> AirPods Pro
// Find the product with the biggest quantity   -> AirPods Pro
// Find the product with the smallest quantity  -> MacBook Pro 16-inch
// Find all the product names   -> [ 'iPhone 14 Pro', 'MacBook Pro 16-inch', 
//'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]

//




let maxPrice = 0;
let mostExpensiveProduct;
let minPrice = +Infinity;
let leastPricedProduct;
let biggestAmount = 0;
let biggestAmountProduct;
let smallestAmount = +Infinity;
let smallestAmountProduct;
let allproducts = []

for (const product of appleStore) {
    if (product.price > maxPrice) {
        maxPrice = product.price;
        mostExpensiveProduct = product.productName;
    }
    if (product.price < minPrice) {
        minPrice = product.price
        leastPricedProduct = product.productName
    }
    if (product.quantity > biggestAmount) {
        biggestAmount = product.quantity;
        biggestAmountProduct = product.productName
    }
    if (product.quantity < smallestAmount) {
        smallestAmount = product.quantity
        smallestAmountProduct = product.productName
    }
    allproducts.push(product.productName)


}
console.log(mostExpensiveProduct)
console.log(leastPricedProduct)
console.log(biggestAmountProduct)
console.log(smallestAmountProduct)
console.log(allproducts)

//// another solution if the obj is not empty

let most_expensive_product = appleStore[0];
if (product.price > most_expensive_product.price) most_expensive_product = product


console.log(most_expensive_product.productName)













