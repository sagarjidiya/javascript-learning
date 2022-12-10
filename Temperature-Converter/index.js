

// ------for select both input------- 
/* after addevent with anonmouse function */

let cel= document.getElementById("cel")
let fah= document.getElementById("fah")

cel.addEventListener('input', function(){
  let c= this.value    //store value -- after convert fah..
   let f = ( c * 9/5 )+ 32
   fah.value=f; //store Fahrenheit
});

fah.addEventListener('input', function(){
    let f= this.value
    let c = (f - 32) * 5/9 
    if(!Number.isInteger(c)){      // atter point value 4 

        c= c.toFixed(4);
    }
    cel.value=c;    
}); 