
/* if input 1, "y", "yes" output > continue
if input 0, "n", "no" output > end*/

    // let input;
    // input="1";

    if(input===1){  //3 eqal to beacause compare krna string hai ya num
        document.write('continue...');
    }else if(input==="y"){
        document.write("continue...");
    }else if(input==="yes"){
        document.write("continue...");
    }else if(input===0){    
        document.write("end");
    }else if(input==="n"){
        document.write("end");
    }else if(input==="no"){
        document.write("end");
    }else {
        document.write("wrong input");
    }

    //Switch
    //comparison ===

    /*  switch(compare variable name :){
        case >> after ,name jisko compare karna hai :
        break; (after case,compalsory write break;)    
    }  */

    /*ager break n lagaye >> input value line by line 
    compare karta hai >> sahi input true ho jane per compare karna bandh karta hai 
    >> after all op print*/
    

    //input jis ko compare krna hai

    let input;
    input="1";

    switch(input){

        case 1: //if (input===1)
        document.write("continue..");
        break;
        case "y": //if (input==="y")
        document.write("continue");
        break;
        case "yes": //if (input=== "yes")
        document.write("continue");
        break;
        case 0: //if (input===0)
        document.write("end");
        break;
        case "n": //if (input==="n")
        document.write("end");
        break;
        case "no": //if (input==="no")
        document.write("end");
        break;
        default :
        document.write("wrong input");
    }

    // Another way to write

    // let input;
    // input= "y";

    // switch(input){

    //     case 1:
    //     case "y":    
    //     case "yes":
    //     document.write("continue...");    
    //     break;
    //     case 0:
    //     case "n":
    //     case "no":
    //     document.write("end");        
    //     break;
    //     default :
    //     document.write("wrong input");

    // }