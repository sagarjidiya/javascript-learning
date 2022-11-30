
/* if input 1, "y", "yes" output > continue
if input 0, "n", "no" output > end*/

    let input;
    input="1";

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

    //comparison ===

    //input jis ko compare krna hai
    switch(input){

        case 1:
    }