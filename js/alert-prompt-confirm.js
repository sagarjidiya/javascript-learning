

/*  alert 

 It shows a message and waits for the user to press “OK”.

alert('hello'); alert('javascript');

alert('Hello');[1,2,3].forEach(alert) 

*/

/* Prompt

 The function prompt accepts two arguments:

 result = prompt(title, [default]);

 title : The text to show the visitor.
 default :An optional the initial value for the input field.

*/
let age= prompt('How old are you', 20);
alert (`you are ${age} year old`);

let age2= prompt('Enter your age');

if(age2!=null){ 
    document.write(`Your age is ${age2}`);
} 
else{
    document.write('age field is blank');
}

/* confirm 

result = confirm(question);

confirm show a quetion with two button OK & CANCLE

*/

let response= confirm ('Are you sure, you want to delete');

if(response){

    alert('Deleted');
}else{
    alert ('Not Deleted');
}