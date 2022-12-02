
/*loop/*
/* while loop

while(){

}    */

/* do while loop

do{

} while()   */

/* for loop 

for( variable name =value; varible condition; variable++){

} */


/*    while loop   */
// statement first bar hi false hai >> while execute nahi karega

// do while one time execute karta hi hai

// jab tak statement true tab tak loop chalega


/*work >> first condition check counter<=10 (true) >> print infinity
 after firs se counter<=10>> (infinity)*/
// therefor  use counter ++ >> after this counter=2; is counter<=10 >> op 10 time

let counter = 1;

while(counter<=10){
    document.write('javascript'); 
    counter++;
}

// reverse way
/*let counter =10;

while(counter >=1){
    document.write('php');
    counter--;
}*/

// ------------------------
// num devide by 2 % 0 >> even number

let newCounter = 1;
let sum = 0; //(store sum)

while(newCounter <=100){

    if(newCounter % 2==0){           //(check even hai ya nahi)
        sum = sum + newCounter;    //( sum + even number)   
    }
    newCounter++;
}
document.write(sum);

// let newCounter =1;
 
// while(newCounter <=100){
//     if(newCounter % 2==0){

//         sum=sum+newCounter;
//     }
//     newCounter++;
// }
// document.write(sum);
// newCounter++ ab counter 2 se 3 hoga condition check if>> false >> odd num

// -------------------------------------------------------------------
/* do while */
// condition-false, do while one time execute karta hi hai

/* work > first count increase kiya
 (ex.2) > fir condition check fcounter<=10*/

let fcounter =1;

do{
    document.write("html" + "<br/>");
    fcounter++; 
}while(fcounter<=10);
// -------------------------for loop----------------------------------
/*
for( variable name =value; varible condition; variable++){

Work >> first time > var name=value after > 
condition check <=10; > docu.write > var++ nahi jayega 

after sec time work >> first var++ (count++) increase karega >> after condi..value check
} */


for(let sCounter=1; sCounter<=10; sCounter++){
    document.write("CSS"+ "<br/>");
}

// ------------------ braek loop-----------------------

/*break work >>  bCounter 1 -- <=10 
(condition true) count value ==5 (condi.. false) >> count 5 break execute hoga*/

// after break loop use next program code not execute
/*  for(){

    if(condition){
        break;
    }
   } */

for(let bCounter=1; bCounter<=10; bCounter++){

    // break use 

    if(bCounter==5){
        break;
    }
    document.write(bCounter, "<br/>");

}
// ----------same use continue loop-----------

/*  for(){

    if(condition){
        continue..;
    }
   } */

/* after continue loop use particular if conditi. (bCounter==5) is break
after for loop is continue */

for(let bCounter=1; bCounter<=10; bCounter++){

    // continue use 

    if(bCounter==5){
        continue;
    }
    document.write(bCounter, "<br/>");

}

// ---------------------Nested loop------------------
/*for(){

    for(){
    }
} */
// nested loop me break lagake main loop me break lagana hai 
/* first label write outer: before main for loop
 for this label use after break*/

outer: for(let aCounter=1; aCounter <=10; aCounter++){

    // if(aCounter==5){
    //     continue;
    // }
    
    document.write(aCounter, "<br/>");

    //nested loopf
    for(let aCounter2=1; aCounter2 <3; aCounter2++){

        if(aCounter==5){
            break outer;
        }

        document.write("js script", "<br/>");
    }

}

for(let xyCounter=10; xyCounter<=20; xyCounter++){
    document.write(xyCounter,"</br>");


    for(let yxCounter=1; yxCounter<2; yxCounter++){

        if(xyCounter==14){
            continue;
        }
        document.write("count num")

    }
}
