
// ------Object--

// var name = {};

/*object property two way to access 
    1. variable.notation 2. variable array notation > var['property name']*/

let book= {
    firstName: 'java',
    lastName: 'script',
    learnJs: function (){
        console.log("learn program");
    }
};

// Add value -- var name.property-name = value;
book.language = 'English';

// Change value -- var name.property-name = value;
book.firstName = 'js';    

//delete property -- delete var-name.property-name;
// delete book.lastName;

console.log(book);

//property assign in object ? >> true/false use IN opeartor
 console.log('pages' in book) //false

/* object all property ittrate using >> For in loop    */

for(let readBook in book){
    console.log(readBook);
}

// also value display >> in for in loop use for value >> use var-name array notation

for(let readBook in book){

    console.log(readBook + ": " +book[readBook])
}

// ------------- Object Method ---------------

// Function associated with object -- Object Method

/* Make action / method 

object-name.method-name = Anonmous function

*/

book.learnJs = function(){
    console.log("learn js program");
}

book.learnJs(); //call function

//--------another way //simple function

function greet(){
    console.log("learn js program");
}

book.learnJs= greet();

//---------another way // method name with function define in object declaration 

// -----------------  "this" keyword -----------------------

/* in object we can define method and function 
we can use same objec name in place to use "this" keyword */

let person = {
    fName : 'ram',
    lName : 'maruti',
    sayHello: function(){
        console.log("Hello ! i am " + this.fName + " i have a " + car.brand+" car");
    }

};

let car={
    brand: "Tata",
    model: "bmw"

}
person.sayHello();

person.sayHello = function(){
    console.log("Hello !");

}
 person.sayHello();

//  ------------------- Math Object-------s-----------

console.log(Math.PI); //3.14..

let x= Math.round(3.8)

console.log(x); // 4 .round use for round value

// --for upper limit -- use Math.ceil();

let y= Math.ceil(1.1);
console.log(y); // 2 .round use for round value

// -- for lower limit -- use Maths.floor();

let k= Math.floor(1.1);
console.log(k); // 1

// -- for remove point -- use Maths.trunc();

let z= Math.trunc(6.7);
console.log(z); //6

// -- for num power -- use Maths.pow();

let a= Math.pow(10, 3);
console.log(a); //1000

// -- for num sqareroot -- use Maths.pow();

let b= Math.sqrt(4);
console.log(b); //2


// -- Display min num -- use Maths.min();

let c= Math.min(4, 100, -3, 60, 1);
console.log(c); // -3

// -- Display max num -- use Maths.max();

let d= Math.max(4, 100, -3, 60, 1);
console.log(d); // 100

// ---------------- Random number --------------
// Math.random() -- generate random number

let ab = Math.floor(Math.random()* 100);
console.log(ab); //random num

// generate two num mi min 10 to max 20

function getRandom(min, max){
    let xyz= Math.floor(Math.random() * (max - min)) + min;
    return xyz;
}
console.log(getRandom(10,20));












