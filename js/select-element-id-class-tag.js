
// select ele by id

/* <ul>
        <li> item 1</li>
        <li id="second"> item 2</li>
        <li> item 3</li>
    </ul> */

    // syntax:
    // document.getElementById(elementID)

    // document.getElementById("second");
    // // store in var
    //             //    Object | Method
    // let selectEle = document.getElementById("second");
    // console.log(selectEle);

    // // get value innerHTML property 

    // let selectEle = document.getElementById("second");
    // console.log(selectEle.innerHTML);

    // // for set value innerHTML property
    // selectEle.innerHTML= "<p>web program<p/>"

    // -------- document.getElementsByClassName(Class-name)----------

    /* <ul>
        <li class:"text-red"> item 1</li>
        <li> item 2</li>
        <li class:"text-red"> item 3</li>
    </ul> */

    // document.getElementsByClassName("class-name")
    //store in var

    let classSelect = document.getElementsByClassName("text-red bg-dark");
    console.log(classSelect.length);

    //multiple therefor use for loop
    //change in multiple class
    for(i=0; i<classSelect.length; i++){

        classSelect[i].innerHTML= "<p>my page<p/>";
    }

    // ----------------- document.getElementsByTagName------------------

    //html
    /* <h2>heading 1</h2>     
    <p>paragraph 1</p>       

    <h2>heading 2</h2>    
    <p>paragraph 2</p>        
    <h2>heading 3</h2>      
    <p>paragraph 3</p>   */   


    let selectTag = document.getElementsByTagName("h2");
    console.log(selectTag);

    // change h2 by for loop

    for(i=0; i<selectTag.length; i++){

        selectTag[i].innerHTML= "article name";
    }
    
    // //------------for change only two h2

    // <div id="div1">

    // <h2>heading 2</h2>
    // <p>paragraph 2</p>
    // <h2>heading 3</h2>
    // <p>paragraph 3</p>
    
    //  </div>

    let div1= document.getElementById("div1");

    let tagSelect= div1.getElementsByTagName("h2");

    for(i=0; i<tagSelect.length; i++){

        tagSelect[i].innerHTML= "blogs name";
    }

    // --------------------- Query selector-----------------------

    /*   The querySelector() method returns the first 
    element that matches a CSS selector.           */

    // The querySelectorAll() method returns a NodeList.
    
    // changes only first one use >> querySelector()
    // changes only multiplle  use >> querySelectorAll()

    //class= "text-black"
    // document.querySelector(".text-black");

    
    /* <h2>heading 1</h2>
    <p class="paragraph">paragraph 1</p>
    <div id="div1">

        <h2>heading 2</h2>
        <p class="paragraph">paragraph 2</p>
        <h2>heading 3</h2>
        <p class="paragraph">paragraph 3</p>
        
    </div>     */

    let ab= document.querySelectorAll("#div1 p.paragraph")
    console.log(ab);

    // collection of NodeList therefor

    for(i=0; i<ab.length; i++){

        ab[i].innerHTML= "new article section";
    }

    // ---------------------- Traversing element-------------------------

    // / Select parent element by using child >> called Traversing element
    
    /* <ul>
        <li id="first">list 1</li>
        <li>list 2</li>
        <li>list 3</li>
        <li>list 4</li>
    </ul>
    <ul id="list-a">
        <li>list a</li>
        <li>list b</li>
        <li>list c</li>
        <li>list d</li>
    </ul> */

    // Select parent element by using child -- called Traversing element
    //use > new var= child.parentElement

    let xy= document.getElementById("first"); //select li
    // for parent select
    let xyPrt = xy.parentElement; //select ul
    console.log(xyPrt); 

    // ---- select first child by using parent----

    //use > new var= parent var-name.firstElementChild;
    //for select last ele > new var= parent var-name.lastElementChild;


    /*<ul id="list-a">
    <li>list a</li>
    <li>list b</li>
    <li>list c</li>
    <li>list d</li>
    </ul> */

    //parent // id in parent  >> parent.firstElementChild
    let aPrt = document.getElementById("list-a");

    //-------for child select
    let childFirst = aPrt.firstElementChild;
    console.log(childFirst); //list a

    //------select all child use > parent.children
    let allChild = aPrt.children;
    console.log(allChild);

    //------select sibling ele 
    // for before id ele select > previousElementSibling;
    // for after id next ele select > nextElementSibling;

    /* <ul>
        <li>list x</li>
        <li id="list-y">list y</li>
        <li>list z</li>
    </ul> */ 

    //select list x

    let idY = document.getElementById("list-y")
    let preEle = idY.previousElementSibling; //select x
    console.log (preEle); 

    let newid = document.getElementById("list-y")
    let nextEle = newid.nextElementSibling; 
    console.log(nextEle);  //select z

// ----------------------------- innerHTML ----------------------------------

// ------ fetch html & change -----
let elm = document.getElementById("list-y")
let content = elm.innerHTML;    
 elm.innerHTML = "<p>js program<p/>";

console.log(content);

// change value
/* var-name.innerHTML= "value"
elm.innerHTML = "<p>js program<p/>"; */

// --------------------- Create & Append Element -------------------------------

/*  -----html------

<div id="text-white">
<p>this is p tag</p>
</div>     
*/

let txtId = document.getElementById("text-white");
// let pTag = document.getElementById("p-tag");

// // -- Create element----
let h1= document.createElement('h1');

//create text for h1
let text= document.createTextNode('this is h1 tag');

// after create element -- connect with div (id)

txtId.appendChild(h1); //h1 tag in after id
// document.body.appendChild(h1); //for body

h1.appendChild(text); //txt in h1

//-- Add class & id in h1 tag

h1.className ="lg-heading bg-dark"
h1.id ="home"

// -------------- Add li ele -----------

/* <ul id="book">
        <li>book1</li>
        <li>book2</li>
        <li>book3</li>
    </ul> */

    // first create id var >> after create ele > after append in id var

    let list1= document.getElementById("book"); //id var

    let list = document.createElement("li"); //create element

    list1.appendChild(list); // ele append in id var

    // list.textContent = "book 404"; //other way to txt ADD

    listText = document.createTextNode("book 4") //txt for li

    list.appendChild(listText) //txt append in ele

    // ---------------------- insert before element-----------------------------

    /* <ul id="book">
        <li>book1</li>
        <li>book2</li>
        <li>book3</li>
    </ul> */

    /*  To insert element before another 
    element, child ele of a parent ele -- use insert before ele */
 
    // parentNode.insertBefore(create ele, position) method:

    let liMenu = document.getElementById("book");

    let newLi = document.createElement("li");
    newLi.textContent= "maths book";

    // liMenu.appendChild(newLi);

    // ---- position for li ---
    let pos = liMenu.firstElementChild.nextElementSibling.nextElementSibling;

    liMenu.insertBefore(newLi, pos); // li between in book1 , b-2

    // li book2 or b-3 between >> one more nextElementSibling in position

    // -------------------------------------

    let parent = document.body;

    let newHead= document.createElement("H3");
    newHead.textContent= "my home page";

    // parent.appendChild(newHead); 

    let idBook = document.getElementById("book");

    parent.insertBefore(newHead,idBook) // h3 is upper on li

    // ---------------- Remove child element--- .removeChild()----------------

    /* <ul id="menu">
    <li>Home</li>
    <li>Product</li>
    <li>about</li>
    <li>Contact</li>
    </ul> */

    let menuLi = document.getElementById("menu");

    let eleLi = menuLi.firstElementChild.nextElementSibling;

    menuLi.removeChild(eleLi); //product dele

    //we can delete one more ele| one more .nextElemenetSibling add in select ele

    // remove all child
                                 //parent
    // document.body.removeChild(menuLi);

    // ---------------Clone (copy) Element-- .cloneNode()---------------------

    // Parent & child element copy by using clone

    /* <ul id="menu">
    <li>Home</li>
    <li>Product</li>
    <li>about</li>
    <li>Contact</li>
    </ul> */

    let aId= document.getElementById("menu");

    let cloneEle= aId.cloneNode(true);

    console.log(cloneEle);

    /*if you select only parent ele use > id var.cloneNode(false);

    if you select only parent & child ele also use > id var.cloneNode(true); */

    // document.body.appendChild(cloneEle); //one ul item other in body

    cloneEle.id= "books-menu";

    // --------------- Replace Element -- replaceChild()----------------------
    /*<ul id="items-page">
        <li>Home</li>
        <li>Product</li>
        <li>about</li>
    </ul>              */

    //xa = parent
    let xa = document.getElementById("items-page");

    let itemLi= document.createElement("li");
    itemLi.textContent= "service"

    let replace= xa.firstElementChild.nextElementSibling;

    xa.replaceChild(itemLi,replace); //service li add in product place

// ------------------ insert Adjacent Html-- insertAdjacentHTML()-----

//Add html element in four positon
// 1. beforebegin 2.afterbegin 3. beforeend 4. afterend

/*syntax
 parent.insertAdjacentHTML(position, element) */

//-- beforebegin
/* <div class="head">

      //afterbegin

    <h2>Heading</h2>
    <p>this is paragraph</p>

    //--beforeend

     </div>   */
     //--afterend

     let xb = document.getElementById("head");

     let html = "<h3>this is h3<h3/>"

     xb.insertAdjacentHTML("beforebegin",html);

    // ------------------------ Change Attribute .setAttribute()--------------

    // <button id="btn" class="txt-red">send</button>

    // id/class var.setAttribute("Name", "value")

    let btn = document.getElementById("btn")

    btn.setAttribute("name","form");

    //get value attribute -----getAttribute(name)

    let val= btn.getAttribute("id");
    console.log(val); //btn

    //remove attribute---- removeAttribute(name)

    let dele = btn.removeAttribute("class") //class remove

    // check attribute has in ele / true ,false--- hasAttribute(name)

    let checkAttri = btn.hasAttribute("id");
    console.log(checkAttri) //true

   // ----------------------- inline style--------------------------

   //<button id="btn" class="txt-red">send</button>

    let btn1= document.getElementById("btn")

    //for multiple style change use cssText
    btn1.style.cssText = "background-color: black; color:white;"

    //other way apply inline
   /*  btn1.setAttribute('style', 'color: yellow; background-color:black') 

    btn.style.color= "red"
*/
   // ------ Get computed css-- .getComputedStyle(id) -----

  btnId = document.getElementById("btn")
  let checkStyle = getComputedStyle(btn)
  console.log(checkStyle.color); //rgb(255, 255, 255)

//   ---------------- Change Classes -----------------------

//<button id="btn" class="txt-red">send</button>

//add class
  let aClass= document.getElementById("btn")

  //add class
  aClass.className = "text-center bg-dark"
  aClass.classList.add("lg-heading"); //other way

  //remove class
  aClass.classList.remove("text-center")

  //replace class
  aClass.classList.replace("lg-heading", "md-heading");

  // for class name list
  console.log(aClass.classList);

  //any class include in ele check >.contains true / false
  let checkClass = aClass.classList.contains("lg-heading");
  console.log(checkClass); // false 

  // allredy class include > remove -- class not include >> add
   aClass.classList.toggle("text-blue");

//    --------------- Get width & height --------------------

// let box = document.getElementsByClassName("box")

// let width = box.offsetWidth;
// let height = box.offsetHeight;

//offset height width -- border, padding,m also include

let box = document.querySelector('.box');
let width = box.offsetWidth;
let height = box.offsetHeight;

console.log(width); //202
console.log(height); //288

//  client height width -- not include border, m, p

let box1 = document.querySelector('.box');
let width1 = box1.clientWidth;
let height1 = box1.clientHeight;

console.log(width1); //200
console.log(height1); //286



























































