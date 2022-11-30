//Data type

//type of operator
//string
//number
//booleans
//undefind
//null
//BigInit
//Symbool

let age= "10";
let firstName= "ram";

console.log(typeof firstName);

//convert number to string
age= age+"";
console.log(typeof(age));

//convert string to num
let myStr=+"34"
console.log(typeof myStr);

//num to str
let aGe ="18";
aGe=Number(aGe);    
console.log(typeof age);

//string concatenation

let string1= "Java";
let string2= "script";

let newString= string1 + " " +string2;   
console.log(newString); //Java script

//use backtis &$
let about= ` my name is ${firstName} age is ${age}`
console.log(about);

// ----------
// print "hel'lo" otherwise use "he\"lo"  \"

let xy= "hel'lo"
console.log(xy);

//boolean datatype >> Booleans can have two values: true or false

let yx= 4<5;
console.log(yx); //true

let x=5;
let y=5;
let z=6;
console.log(x==z);
