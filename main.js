console.log('Hello World!');


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

const todoTextisCompleted = todos.map(function (todo) {
    return todo.text;
}. todos.filter(function(todo){
    return todo.isCompleted == true;
}))
