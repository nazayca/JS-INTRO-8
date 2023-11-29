class Table{
    constructor(type, metarial,price){
        this.type  = type;
        this.metaril = metarial;
        this.price = price;
    }
}

const table1 = new Table ('Office', 'Wood','200')

// Accsesing and updating table info without getters and setters
console.log(table1.type);
console.log(table1.metarial);
console.log(table1.price);

table1.price = 300;
console.log(table1.price)

///

class Chair{
    constructor(type, metarial,price){
        this.type  = type;
        this.metaril = metarial;
        this.price = price;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price){
        if(price<=0) throw new Error ('Price is not valid')
        this.price = price
    }
}
const chair1 = new Chair('Office', 'Wood','250')
console.log(chair1.metarial);
console.log(chair1.price);

console.log(chair1.getPrice())
chair1.setPrice(-300);
console.log(chair1.getPrice())
chair1.setPrice(300);
console.log(chair1.getPrice())

//PRIVATE FIELDS

class iPhone{
    #brand = 'iPhone'// private to this class and cannot be used outside
    constructor(model, price){
        this.model = model
        this.price = price;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price){
        if(price<=0) throw new Error ('Price is not valid')
        this.price = price
    }
    getBrand(){
        return this.#brand;
    }
    // if you do not provide set method for brand then it becomes read-only info
    //setBrand(){
       // this.#brand = brand
   // }
}
const iPhone15 = new iPhone('15', 1000)
//console.log(iPhone15.#brand)//not allowed
iPhone15.brand = 'Samsung';
console.log(iPhone15.brand); // samsung
console.log(iPhone15.getBrand())

//iPhone15.#brand = 'Samsung'
//iPhone15.setBrand('Samsung');
//console.log(iPhone15.getBrand())


