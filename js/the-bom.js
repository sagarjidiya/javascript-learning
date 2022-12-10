
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

    //redirect btn
    // <button id="btn-redirect">Redirect To Google</button>

    function redirect(){
        // window.location= "https://www.google.com/"
        // href.location= "https://www.google.com/" //another way redirect
        location.assign("https://www.google.com/") //store in history
        location.replace("https://www.google.com/")
        location.reload() // for refresh
    }

    // ---------------------- Navigator Object -----------------------

    /* The navigator object contains information about the browser.

    console.log(navigator.appName);       //Netscape
    console.log(navigator.appVersion);    //Version
    console.log(navigator.appCodeName);   //Mozilla */
    console.log(navigator.cookieEnabled);  //true 
    console.log(navigator.doNotTrack);     //1
    console.log(navigator.languages);     // en-Us

    //------------------- screen object--------------

    // The screen object contains information about the visitor's screen.

    console.log(screen.availHeight) //728
    console.log(screen.availWidth) //1366
    console.log(screen.colorDepth) //24
    console.log(screen.orientation) //landscape-primary



