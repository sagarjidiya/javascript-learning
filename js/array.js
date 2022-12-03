
// let book1= "Maths";
// let book2 = "English";
// let book3 = "Bio";
// let book4 = "Physics";

// console.log(book2);

//---------- Array-------------

// In array multiple value store in one variable

// let variable name = [digit, "string"];
// let variable name = new Array (digit, "string");

// ------another way---
// let book = new Array("Maths", "English", "Bio", "Physics");

// let book = ["Maths", "English", 9, "Physics"];
// book[1]= "Guj";      //change value array
// book.push("Hindi");
// console.log(book);  

// --- IN last Add value in array---- push()

// let book = ["Maths", "English", 9, "Physics"];
// book.push("Hindi"); // in last add value
// console.log(book); // "Maths", "English", 9, "Physics", "Hindi"

// --- IN START Add value in array---- unshift()

// let book = ["Maths", "English", 9, "Physics"];
// book.unshift("Php");
// console.log(book);

// --- IN Last Remove value in array----variable name.pop()
//  Two pop() > two element remove

// let book = ["Maths", "English", 9, "Physics"];
// book.pop();
// book.pop();
// console.log(book);

// Start Remove value---- variable name.shift()

// let book = ["Maths", "English", 9, "Physics"];
// book.shift();
// console.log(book);

//Any value remove var name.splice()
// var name.splice(position num)

let book= ["Maths", "English", 9, " Physics"];
book.splice(2,1);
console.log(book);

// for empty value > use variable name.[];

//variable is array or not

let xy= "Maths";

console.log(Array.isArray(xy));  //false

// convert variable to array---- split();

let words= " This is javascript program 1"
 let wordsArray = words.split(" ");
 console.log(wordsArray); 

 // convert array to variable---- join();

 let ba= ["Java", "php", "c++", 2];
 let text= ba.join(' ');
 console.log(text);  // java php c++ 2

//  array + array connect --- concat()

let book1 = ["Java", "php"];
let book2 = ["Js", "c++"];
let book3 = ["c", "html"];

let connectArray = book1.concat(book2, book3);
console.log(connectArray);

//--------- Multidimensional Array-------------
/* var name= [ ];
    var name=[
        [];
    ];
                      */

// Array into array called -- Multidimensional Array

let myBook = ["Maths", "Hindi", "Guj"];
 let bookwithPages= [
    ["Maths", ["200", "800"]], //0
    ["Hindi", "100"], //1
    ["Guj", "400"]   //2
 ];

 let fetch = bookwithPages[2][0];
 console.log(fetch); // Guj

//  -------------------------------
let xyBook= ["Maths", "Bio", "Science", "Maths2"];

// i=0 -- maths=0
// xyBook length -- 4
// first length find > after for loop start 0

bookLength= xyBook.length;

for(i=0; i < bookLength; i++){
    console.log(`Element ${i} is ${xyBook[i]} \n`);
}

xyBook.forEach(newBook)

function newBook(xyBook){
    console.log(xyBook);
}










