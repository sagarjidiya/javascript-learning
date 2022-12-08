// -------------- DOM (Document Object Model)------------------

    /*  Dom is a application programming interface (API) 

    FOR Manipulating Html & Xml Document 
     (add, remove and modifie part of the document/ Html)

     -- When web page is loaded , browser create 
        document object model of the page --

     --document object represent --> web page function(){
        alert("button was clicked !")
     }

     -- access any elemrnt in html > start access document obj

    */

    //  -------------------- DOM Events -------------------------

    // --- Event onclick() ---

    // The onclick event occurs when the user clicks on an HTML element.

    // <button id="btn-pri" onclick="btnClick()" >Click Me !</button>
 
    function btnClick(){
        alert("button was clicked")
    }
    //--- other way to click EventListener 
    /*  id/class var.addEventListener('event-name',function-name)       */

    let btn = document.getElementById("btn-pri");

    // btn.addEventListener('click',btnClick)

    // use anonmous function
    btn.addEventListener('click', function(){
        alert("button is clicked !")
    })

    btn.addEventListener('mouseover',function(){
        btn.style.color = "black"
        btn.style.background="yellow"
    })
    btn.addEventListener('mouseout',function(){
        console.log("mouseover is out")
        btn.style.color = "none"
        btn.style.background="none"
    })

    // --------- Remove addEventListener ------- 

    // <button id="btn-p">lear more!</button>

    let btnP= document.getElementById("btn-p")

    function click1(){
        alert("click1 is active");
    }
    function click2(){
        alert("click2 is active");
    }

    btnP.addEventListener('click',click1);
    btnP.addEventListener('click',click2);

    //remove click2() event
    btnP.removeEventListener('click',click2);

    // ------------------- Page load Event -------------------

    window.addEventListener('DOMContentLoaded', function(){
        console.log("Dom is created");
    })

    let img= document.getElementById("img1");

    img.addEventListener("load",function(){
        console.log("fully loaded");
    })

    
    
    

    




