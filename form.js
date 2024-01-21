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

function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('drawing a circle');
        }
    };
}

const circle = createCircle(1);