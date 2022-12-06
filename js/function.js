

//---------- Function------

    // for(i=1; i <=10; i++){
    //     document.write(`2 * ${i}= ${2*i}`);
    //     document.write("<br/>");
    // }
    /* JavaScript function is defined with the function keyword, 
     followed by parentheses ()                    */

    /*  Function names can contain letters, digits, underscores, 
     and dollar signs (same rules as variables).         */

    //function declaration

    /* function name(parameter1, parameter2, parameter3) {
        // code to be executed
      }                         */

    //   --EX---
                    //parameter
    function MulTable(num){
        for(i=0; i<=10; i++){

            document.write(`${num} x ${i}= ${num *i}`);
            document.write("<br/>");
        }
    }

    // MulTable(1); //argument
    // document.write("<br/>");
    // MulTable(2);
    // document.write("<br/>");

    function Add(){
        arguments
        document.write(num1 + num2);
    }
        //argument
    Add(10, 30);   //40
    Add(50, 30);   //40
    Add(2, 10);   //40

    //--------Argument object-------- 
    // argument is a array 
    // all argument passed store in this array

    function Add(){

        let sum=0;
        if(arguments.length==0){
            console.log("No arguments passed");
        } else{
            for(let i=0; i<arguments.length; i++){
                sum= sum+(arguments[i]);
            }
            console.log(sum);
        }
    }

    Add(10,5);

    //----Returning value--    

    //return multiple value you can store value array

    function addValue(a,b){
            let pluse= a+b;
            return pluse;
    }
        let xyz = addValue(100,5);
         console.log(xyz);

     
    //  Local variable & global variable

    /* - global---
    //Define out of function 
     global var work- in function & also out of function  */
     
    // - local----
    // Define in function
    // local var work - not work out of function
    //in local var >> same name var.. we can use different dif.. function

    let car = "Swift";   //global variable

    function add(){

        let result = 50; //local variable
        console.log(result);
        console.log(car);
        
    }

    add();

    //----------Anonymous Function------------ 

    //in anonmous function does not have any name
    // anonmous function assign with variable

    //Function expression
    let show= function (){
        console.log("Hello Js");
    };

    show();      //call func..

    // why use this function?
    //any function execute for one time we can use --Anonymous Function
    //and also use another function in parameter > passed this function

    // setTimeout(function name, time);

    // function show1(){
    //     console.log("js script")
    // }
    // this function is call after 3 sec >  we can use setTimeout

    setTimeout(function (){
        console.log("js script");
    }, 3000)   //3s > 3000 ml sec

    // ---- Immediately invoked function-----
    // first all function close in ( all function (){} ) (); < immediate invoked
    //function make and execute also in one

    (function (){
        console.log("js function");
        alert("js function");
    }) ();







