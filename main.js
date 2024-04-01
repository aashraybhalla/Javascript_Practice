var prompt = require('prompt-sync')();

// const age = prompt('What is your age? ');

// if (age < 18){
//     console.log("You get a 20% discount");
// }
// else if(age >= 18 && age < 60){
//     console.log("You get normal price");
// }
// else{
//     console.log("You get a 30% discount");
// }

// var length = prompt('What is the length of the rectangle? ');
// var breadth = prompt('What is the breadth of the rectangle? ');

// const area = length * breadth;

// console.log("The area of the rectangle is " + area);


// function createProduct(name, price, inStock){
//     this.name = name;
//     this.price = price;
//     this.inStock = inStock;
// }

// let product1 = new createProduct('Laptop', 50000, true);
// let product2 = new createProduct('Mobile', 20000, false);
// let product3 = new createProduct('Tablet', 10000, true);

// if (product1.inStock){
//     console.log("The product " + product1.name + " is available");
// }

// for (let key in product2){
//     console.log(key, product2[key]);
// }


let guestList = [];

guestList.push("A1");
guestList.push("b1");
guestList.push("c1");
guestList.push("d1");
guestList.push("e1");

var guestName = prompt("Enter the name of the Guest: ");

if (guestList.includes(guestName)){
    console.log("Welcome to the Party");
}
else{
    console.log("Sorry you are not on the guest list!");
}