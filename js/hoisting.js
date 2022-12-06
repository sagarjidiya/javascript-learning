
// Hoisting-----------

// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

function hello(){
    console.log("hello js")
}
hello();


hello();

function hello(){
    console.log("hello js")

}
// moving declarations to the top >> called hoisting
// hoisting only > declarations

var x;
console.log(x)
x=7; //undefine
// in x usr no value declare x = undefine

//--------- The let and const Keywords

// let and const are hoisted to the top of the block, but not initialized.

// Using a let variable before it is declared will result in a -- ReferenceError.--

// console.log(a);
// let a;
//  a= 10; //intialization error

 

