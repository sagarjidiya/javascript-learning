
//Asignment operator
//Assigns right operand value to the left operand.

let x;
x=10;   
y=4;
x=y;

console.log(x); //4

let z;
x=10;
y=4;
z=x+y;
// x=x+2; //same x += 2;
// x -=y; //x=x-y;
// x *= y;  
// x /= y;
// x%=y;

console.log(x);
// --------------------

// let a=5;
// let b=5;
// console.log(a+b); //10

// in num+ string >> first js convert num to string therefor 55

let a=5; //number
let b='5'; //string
console.log(a+b);  //55

let j= "java"
let k= "script"
console.log(j+ " " +k); //use also concat()

// x++ & x--
//element me badhana hai x++ otherwise x--
let ab= 5;

ab++;
ab++;

console.log(ab);

let xy= 10;

xy--;

console.log(xy);

//Comparison & logical operator
// == Compares the equality of two operands without considering type.

//===(fisrt datatype compare & after value also compare)

//eqal value AND type

5===5     //-> true   see 5,5 both num first cond.. true & both eqal to >> true
6===5     //-> false
5==='5'  //-> false



// != not equal to
5!=5    //false
8!=5   //true

// !== not equal value or not equal type
5!==5    //--false
5!=="5"  //--true
5!==8    //--true

// greter than eqal to
8>=8 //true
8<=8 //true

//Logical operator 
// && [ And ]
// both condition true >> ans true
//one true other false >> ans false
(5<7 && 7>5) //true 
(5<7 && 7<5) // false

let m=5, n=10;
console.log((m!=n) && (m<n));

// || Or 
//one condition true other false >> True
//both condition false >> false
(5==5 || 4==1) //true
(5==2 || 1==2) //false

// ! not 
//! not operator decision ko ulta karta hai
!(6==5) //--true









  
