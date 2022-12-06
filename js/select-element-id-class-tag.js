
// select ele by id

/* <ul>
        <li> item 1</li>
        <li id="second"> item 2</li>
        <li> item 3</li>
    </ul> */

    // syntax:
    document.getElementById(elementID)

    document.getElementById("second");
    // store in var
                //    Object | Method
    let selectEle = document.getElementById("second");
    console.log(selectEle);

    // get value innerHTML property 

    // let selectEle = document.getElementById("second");
    // console.log(selectEle.innerHTML);

    // for set value innerHTML property
    selectEle.innerHTML= "<p>web program<p/>"

    // -------- document.getElementsByClassName(Class-name)----------

    /* <ul>
        <li class:"text-red"> item 1</li>
        <li> item 2</li>
        <li class:"text-red"> item 3</li>
    </ul> */

    // document.getElementsByClassName("class-name")
    //store in var

    let seleClass = document.getElementsByClassName("text-red");
    console.log(seleClass.length);



