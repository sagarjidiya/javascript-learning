
// -------------------- BOM ( Browser Object Model) -------------------

// The browser object model is used to interact with the browse

/* The Window object represents the window object

Window object created by automatically by browser        */ 

 /* -- global variable are properties of window object
    -- global function are methods of window object          */

    var x= "hello!"
    console.log(window.x); //hello!

    let xy= "hello!"
    console.log(window.xy); //undefine let not use

    // -- automaticaly open another window
    // window.open(url, Name, features);

    // <button id="btn">Google</button>

    let btn= document.getElementById("btn")
    let url = "https://www.google.com";
    let features = "height=500, width=500";

    btn.addEventListener('click', function(){
       win= window.open(url, 'google', features);
    });
    //change  link

    let btn1 = document.getElementById("btn1")

    btn1.addEventListener('click', function(){
        win.close() //close google
    });

    // -------------- Time out & Time interval --------------
    // To execute the function only once, use setTimeout() method

    let timeout =setTimeout(myfunction, 2000);

    function myfunction(){

        alert("subscribe now")
    }
    //clear timeout
    clearTimeout(timeout);

    /*---- setInterval 
    setInterval(function, sec) 1 second = 1000 milliseconds.

    The setInterval() method calls a function 
    at specified intervals (in milliseconds). */

    let timeinter = setInterval(fun, 2000)

    function fun(){
        console.log("subscribe now")
    }
    clearInterval(timeinter);

    // ---------------------- Location Object----------------------

    console.log(location.href) //href
    console.log(location.pathname) //protocol with href
    console.log(location.hostname)
    console.log(location.protocol) //file:

    