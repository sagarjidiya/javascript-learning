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

    /*  DOMContentLoaded : the browser fully loaded HTML,
    DOM tree is built, but external resources like pic..
    <img> and stylesheets may not yet have loaded. */

    /* Use load : external resources like pic..
    <img> and stylesheets have loaded */

    window.addEventListener('DOMContentLoaded', function(){
        console.log("Dom is created");
    });

    let img= document.getElementById("img1");
    //after img load >> load event is executed

    img.addEventListener('load',function(){
        console.log("fully loaded");
    });

    // -------------------- Mouse Event ----------------------

    // when display right click event use oncontextmenu="fun()" on html

    // <div class="box" oncontextmenu="rclick()"></div>

    function rclick(){
        alert("right click event");
    }

    // <div class="box" ondblclick="rclick()"></div>

    // for double click event use -- ondblclick="rclick()"

    function dblclick(){
        alert("double click event");
    }

    // onmouseup=" mouseup() -- when user relese mouse 
    // onmousedown=" formouse() -- when user press mouse
    // onmouseout -- event occur mouse is moved

    function mouseup(){
        alert(" event activated");
    }

    // --------------------- Key Down Event------------------

    // key down occurs when user press key on keyboard -- display all key-pressed

    window.addEventListener('keydown', checkkey)

    // two parameter same in function
    function checkkey(event){
        console.log(event.key)
    }

    // ---------------------- Scroll Event ------------------------------

    //The onscroll event occurs -- when an element's scrollbar is being scrolled.

    // function scrolling(){
    //     console.log("scrolling");
    // }
    // window.addEventListener("scroll",scrolling);

    //--check scrolling up or down

    // window.addEventListener("wheel",function(event){
    //     if(event.deltaY <0){
    //         console.log("scrolling up")
    //     }else if(event.deltaY > 0){
    //         console.log("scrolling down")
    //     }
    // });

    //change bg
    //pageYOffset >> use for scroll down px
    // window.addEventListener("scroll", function(){
    //     if (this.window.pageYOffset >150){
    //         this.document.body.style.background= "orange";
    //     }else{
    //         this.document.body.style.background= "white";
    //     }
    // });

    // ---------- input form event --------

    // <input type="text" id="form" placeholder="F Name">

    let formId = document.getElementById("form")

    function focusOn(){
        formId.style.background= "yellow";
    }

    function blurOn(){
        formId.style.background= "white"
    }

    formId.addEventListener('focus',focusOn); //for execute on click
    formId.addEventListener('blur',blurOn); // after execute

    //change value detect -- use 'change'
    formId.addEventListener('change',function(){
        console.log(this.value) //display enter value
    })
    //any value detect in input -- use 'input'
    formId.addEventListener('input',function(){
        console.log(this.value) //display enter value
    })

    // --------------- Event Bubbling & Event Capturing ----------------------

    /* Event Bubbling - Event start at most specific
    element and flow upword toword the least element. */

    /* first inner element active - child to parent

    When you click button >>

    button
    div ( with id contain)
    body
    html
    document             */

    /* Event Capturing - Event start at the least specific element
    and flow downword toword the most specific element.
    
    /* First upper element active - parent to child

    When you click button
    document
    html
    body
    div ( with id contain)
    button

    */

    /* addEventListener('event name',function,use-capture)

    use-capture default (false)-- event bubbling on
    use-capture default (true)-- event capturing on */  

    
    /*  Html 
    <div id="mydiv">
       <button id="btn">More</button>
    </div> */

    let a = document.getElementById("mydiv")

    let b= document.getElementById("btn")

    b.addEventListener('click', btnclicked);
    a.addEventListener('click', idclicked);

    document.body.addEventListener('click', bodyclicked);

    function btnclicked(event){
        console.log("btn was clicked")
        event.stopPropagation(); // use only btn click
    };

    function idclicked(event){
        console.log("id was clicked")
        event.stopPropagation(); // use only id click
    };

    function bodyclicked(event){
        console.log("body was clicked")
        event.stopPropagation(); // use only body click
    };
    /* default false /when click button | true / when clicked

    button was clicked                  body was clicked
    id was clicked                      id was clicked
    body was clicked                    button was clicked  
    */

    // --------------- Prevent default()--------------

    /* change natural behaviour in element - Prevent default()

     close the default action in element(tag) use -- Prevent default() */

    //pass parameter in function
    // event.preventDefault();

    /*      <a href="https://www.google.com" id="link>Click Here..</a>      */

    let link = document.getElementById("link")

    link.addEventListener('click', function(e){
        console.log('click activate')
        e.preventDefault();

    }) // a -- click is not work

    // <input type="checkbox" id="checkbox">

    let aCheck = document.getElementById("checkbox")

    aCheck.addEventListener('click', function(Nocheck){
         Nocheck.preventDefault();
    })


 

