

let str= "javascript";

//templete litrel
let ab= `Language ${str}`;
console.log(ab);


//string concatenation

let string1= "Java";
let string2= "script";

let newString= string1 + " " +string2;   
console.log(newString); //Java script

// ----------
// print "hel'lo" otherwise use "he\"lo"  \"

let xy= "hel'lo"
console.log(xy);

// string indexing

 let langname="javascript";
 console.log (langname[0]); //j

//--------concat()-----------


let str1= "java";
let str2= "language";
 let str3= str.concat(str2);
 console.log("", str3);   //java language

 // ---------substr()-------------

//position start >0
//  length start > 1

// ab = text part(str4).substring(start position ,length)

 let str4 = "This is javascript tutorial. it is good"
 let substring= str4.substring(8,27);
 console.log(substring);   //javascript tutorial.
 
//-----indexOf()---------     // 
// find position text 

let abStr = "This is javascript tutorial. it is good";
let position = abStr.indexOf('good');
console.log(position); //35

//for last
let baStr = "This is javascript tutorial. it is good";
let lastPosition = baStr.lastIndexOf('is');
console.log(lastPosition); //32

//-----.trim() ---------   
    
// removing white space in text 
// for trimStart >start
// for trimEnd > end

let space =  "This is javascript tutorial. it is good";
let trimedStr= space.trim();
console.log(trimedStr);

/* toLocaleUpperCase() for uppercase txt
toLocaleLpperCase() for lowercase txt */

// --------replace()---------

let replace = "This is javascript tutorial. it is good";
let replaceStr= replace.replace('good', 'best');
console.log(replaceStr);

// ----------------includes()----------------

// any txt include in our content / op true,false

let mytxt = "This is javascript tutorial. it is good";
let newtxt= mytxt.includes('javascript');
console.log(newtxt);








