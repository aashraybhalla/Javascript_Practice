console.log('Hello World!');

// data types in javascript : string, numbers, boolean, null, undefined


const person = {

    name : {
    firstName : 'Aashray',
    lastName : 'Bhalla'
    },

    age : 20 ,

    Address : {
        houseNumber : '5B/33',
        street : 'Tilak Nagar',
        city : 'Delhi'

    },

    hobbies : ['Movies', 'Development', 'Travelling']


}
console.log(person.name.firstName , person.name.lastName);
console.log(person.age);
console.log(person.Address);
console.log(person.hobbies[1]);


// Working with Arrays
const todos = [
    {
        id : 1,
        text : 'Take out trash',
        isCompleted : true,
    },
    {
        id : 2,
        text : 'Complete Javascript Tutorial',
        isCompleted : true,
    },{
        id : 3,
        text : 'Watch a Movie',
        isCompleted : false,
    },
]

// console.log(todos[1].text) to print 'Complete javascript tutorial'

// To convert into JSON format

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// Loops

for(let i = 0; i<10 ; i++){
    console.log(i);
};

let i = 0
while (i>10){
    console.log(i);
    i++
};


// Array Methods foreach, map, filter

todos.forEach(function(todo){
    console.log(todo.text);
}); // Prints the text fields

const todoText = todos.map( function(todo) {
    return todo.text;
}) // returns an array of all the texts

const todoisCompleted = todos.filter(function(todo) {
    return todo.isCompleted == true;
})

// merging two array methods

const todoTextisCompleted = todos.filter(function (todo) {
    return todo.isCompleted == true;
}).map(function (todo){
    return todo.text;
})

console.log(todoTextisCompleted);


// Conditionals

const x = 10;
const y = 20;

if (x > 5 || y < 10) {
    console.log('x is greater than 5 or y is less than 10')
}

if (x < 20 && y > 10){
    console.log('x is less than 20 and y is greater than 10')
}

// Ternary Operator

const c = 15;

const color = c > 10 ? 'red' : 'blue'

console.log(color);

// Switches

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('The color is not known');

}


// Functions

function addNums(num1, num2) {
    return num1 + num2;
}

console.log(addNums(5,7));


// Oops

// Constructor Function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// // Instantiate Object
// const person1 = new Person('John', 'Doe', '12-3-2003');
// const person2 = new Person('Willian', 'Djovik', '12-8-2001');

// console.log(person2);
// console.log(person1.getFullName());


// Doing with "class" to avoid prototype method

class Person
{ 
    constructor(firstName, lastName, dob)
    {

        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() 
    {
        return this.dob.getFullYear();
    }

    getFullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}
// Instantiate Object
const person1 = new Person('John', 'Doe', '12-3-2003');
const person2 = new Person('Willian', 'Djovik', '12-8-2001');

console.log(person2);
console.log(person1.getFullName());


