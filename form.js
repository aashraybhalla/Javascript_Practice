//Loops:
for(let i =10; i>10; i++){
    console.log("Hello World");
};

//Objects:
const person = {
    name: 'Mosh',
    age: 30,

    create: function(){
        console.log('creating a person Mosh');
    }
};


// Factory Function:
function createCircle(radius){
    return circle = {
        radius : radius,
        draw(){
            console.log("Drawing a circle of " + radius + " radius")
        }
    }
}

// Object creation using Factory Function:
let circleObject1 = createCircle(5);
console.log(circleObject1);

// Constructor Function:
function Rectangle(len, bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log("Drawing a rectangle of length " + this.length + " and of breadth " + this.breadth);
    }
}

// Object creation using Constructor Function
let rectangleObject = new Rectangle(4,6);

rectangleObject.area = rectangleObject.length * rectangleObject.breadth;
console.log(rectangleObject);

// For-in loop
for(let key in rectangleObject){
    console.log(key,rectangleObject[key]);
}
// Object Cloning:
//Through Iteration:
let rectangleObjectClone = {};

for(let key in rectangleObject){
    rectangleObjectClone[key] = rectangleObject[key];
}
console.log(rectangleObjectClone)

//Through assign method
let rectangleObjectClone2 = Object.assign({}, rectangleObject);
console.log(rectangleObjectClone2);

// Through spread:
let rectangleObjectClone3 = {...rectangleObject}
console.log(rectangleObjectClone3);


// Pass by value concept:
let a = 10;
function inc(a){
    a++;
}
inc(a);

// This prints value of a to be 10, because in case of primitive data types a copy is generated of them
console.log(a);


let b = {value : 10};
function incB(b){
    b.value++;
}
incB(b);

// This will print 11 as incase of reference type copy is not created rather it points to the same address of the object
console.log(b.value);


