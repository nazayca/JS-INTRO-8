

class Phone{
    constructor(brand,price){
        this.brand = brand;
        this.price = price;
    }
    call() {
        console.log('CALL');
    }

    getPrice(pass) {
        if(pass === 'TechGlobal') return this.price;
        else throw new Error('PASSWORD IS WRONG!!!');
    }

    setPrice(newPrice) {
        if(newPrice < 0) throw new Error('PRICE CANNOT BE SET TO NEGATIVE!!!');
        else this.price = newPrice;
    }
}

const phone1 = new Phone('IPhone', 1000);
const phone2 = new Phone('Samsung', 800);

// phone2.price = 900; // setting the price of phone2
phone2.setPrice(-1);

//Getting the prices of phone objects
// console.log(phone1.price); // 1000
// console.log(phone2.price); // 900
console.log(phone1.price);
console.log(phone2.price);
console.log(phone1.brand,phone1.price);
console.log(phone2.brand,phone2.price);

phone2.price = 900; // setting a new price
console.log(phone2.price) //900


console.log(phone1.getPrice('TechGlobal')); // 1000
console.log(phone2.getPrice('TechGlobal')); // PASSWORD IS WRONG!!!

