
// for if else 

/*for condition true
if(){
}

for condition false
if(){
} else {}*/

/* for others messeage
if(){

}else if(){

}else{
    
}*/


let age = 19;
let hasWotercard = 'no'

if(age>=15 && hasWotercard == 'yes'){

    alert('You can vote !');
} else if(age>=15 && hasWotercard !='yes'){
    alert('Get your woter id card !')

}
else {
    alert('You can not vote !')
}

// age is valid but no wotercard we can use other else if for message get card


// for nested if

// ager age 14 above hai
// if(age>=15){

//     if(hasWotercard='yes'){

//         alert('you can vote!')
//     }else{
//         alert('get your card!')
//     }
    

// }else {
//     alert('you can not vote!')
// }

//---------------
// user alredy login option logout > user logout option login

let isLoggedin= 0; //if 0 for loggedout 1 for login

if(isLoggedin ==0){
    document.write('login');
}else{
    document.write('logout');
}

// ternery oprator ? : 
// use for assignment
// use for short if else condition 

let option= isLoggedin==1 ? "logout" : "login";
     //condition               true      false
     document.write(option);

    //  --- after login user undefine rahe--
    // ?? same work or ||

    let user;

    // user = "saga";
    alert(user ?? "Guest user")