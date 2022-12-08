
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

// Add value -- object-name.property-name = value;
book.language = 'English';

// Change value -- object name.property-name = value;
book.firstName = 'js';    

//delete property -- delete object-name.property-name;
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
                                // array notation
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

//  ------------------- Math Object------------------

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

// -------------------- Date() Object --------------------

// two compalsory parameter write in date( year,month)

                //   year, month, date, time
let abc= new Date(2003,5,19, 10);

// for change date,year,t..
// abc.setMonth(1);
// abc.setFullYear(2022);
// abc.setTime(2);
// abc.setMinutes(2);

console.log(abc);

// for display time use obj-name.getTime();
// console.log(abc.getTime());

// for display time use obj-name.getFullYear();
// console.log(abc.getFullYear()); //2003

// for display time use obj-name.getMonth();
// console.log(abc.getMonth()); //5

// after 50day wich day?
let f= new Date ( "May 5, 2007 10:00:00");    

let findDate = new Date ( "May 19, 2003 10:00:00");       
                 //current date + 50 after set 
findDate.setDate(f.getDate()+ 50);
console.log(f);
console.log(findDate);

// -------------------- "new" keyword -----------------------------

// "new" keyword used to another way to write object

// let object-name = new Object();

let sub = new Object();

sub.name= "eng";
sub.language ="Guj"

console.log(sub.name);

// ----------Accessors getters & setters---------------

// getters function use to change the data after out of object & send >>f use get

let newBook = {
    name: "java",
    language: "script",

     get fullName(){

        return `${this.name} ${this.language}`;
    }, //java script

    setname (n){
        this.name.n.toUpperCase();
    }

};

console.log(newBook.fullName);


// ------------------- Object Constructor------------------

// Object is the collection of related data or functionality

/*   Sometimes we need a "blueprint" for creating many 
objects of the same "type".  */

/* It is considered good practice to name constructor
    functions with an upper-case first letter. */

    //Object Constructor function

    /* function Constructor-name(property-parameter-value){

    }   
    var newVar = new Constructor-name( value )
        console.log(Construc-name);
    
    */


    function Student(first,last,age,cls){
        // assign
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.class = cls;
        // this.nationality= "india";
        // this.name = function(){
        //     return this.firstName +" "+this.lastName;
        // }
    }

     var student2= new Student("krishna", "maruti", 10, 2); 
    var student2= new Student("raj", "shah", 30, 9);
    var student1= new Student("Ram", "maruti", 20, 4);

    // -- Add property in object student1--
    // student1.nationality = "india"

    // -- in constructor Add property --
    //    this.property-name = "value";
    Student.prototype.nationality = "india"

    //adding method in constru...
    Student.prototype.name= function(){
        return Student.firstName + ""+Student.lastName;
    }

    console.log(student1);
    // console.log(student2);

    // ------Prototypes------ 

    // using of prototypes we can write method & property out of Constructor

    //FOR ADD > Constructor-name after .prototype write compalsory

     /* -- in constructor Add property -- 
         Student.prototype.nationality = "india"    */
     
    //  ---------------Nested Object------------------

    // Object into object called -- Nested Object
    
    // user > personalInfo > address

    var user = {
        id: 101,
        email : "abc@gmail.com",
        personalInfo: {
            name: "john",
            age: 8,
            address:{
                city: "Delhi",
                state: "gujrat"
            }
        }
    };

    console.log(user.personalInfo.address);

    //Dom & select element continue in other js file





























