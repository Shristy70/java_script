// console.log("helllllllllllll");
// console.log("this is external page");

document.write("<h1>'shristy gour'</h1>");
// document.write(
//   "<p>hey everyone ! I am shristy gour i am doing BCA from IES university bhopal  and I am here , learning Web development and it is great experience to me. my short term goal i want to be a full stack web developer and long term goal is i want to be a placed a big MNC company and achieve success.    </p>"
// );
// alert("error");

const pi = 3.14;
let r = 5;
let area = pi * 5 * 5;

// console.log(`area of circle ${area}`);

// let a = 9;
// let b = 7;
// conole.log(a + b);

// let a = parseInt(prompt("enter a number 1: "))
// let b = parseInt(prompt("enter a number 2: "))
// console.log(a+b);

// let a = parseInt(prompt("enter a number 1: "));
// let b = parseInt(prompt("enter a number 2: "));
// // console.log(a+b);
// let temp = a;
// a = b;
// b = temp;
// console.log(a + "  " + b);

// ----------------------if else==================================
// let a = parseInt(prompt("enter a num"));

// if(a>0){
//     alert("num is +ve");
// }
// else{
//     alert("num is -ve");
// }

//write a program fine number is even or odd

// let a = parseInt(prompt("enter a num"));

// if (a % 2 == 0) {
//   alert("num is even");
// } else {
//   alert("num is odd");
// }
// let amount = parseInt(prompt("enter a num"));
// if (amount >= 100 && amount <= 500) {
//   console.log("you buy toffee");
// } else if (amount <= 501 && amount <= 900) {
//   console.log("you buy a special gift ");
// } else if (amount>= 901 && amount <= 2800) {
//   console.log("you go to watching movie");
// } else {
//   console.log("you enter wrong amount");
// }

/*   

nested if else ------------------------------

if(condition){

  if(cond){

  }
  else{

  }
}
else{

}

ques:-

user enter age :
let age = parseInt(prompt("enter a age"));

if (age >= 18) {
  let a = parseInt(prompt("enter a 1 if your are eligible for vot"));
  if (a == 1) {
    alert("your are indian eligible vote");
  } else {
    alert("are you not indian");
  }
} else {
  alert("your not eligible for vote");
}

============================function -========================
set of intersection and block of code
1.
function decleration
2.
function defination
3.
function calling.
-----------------function callig--------------
function_name();

function fun(){
  alert("function is running");
}
fun();

function fun() {
  let a = 90;
  let b = 90;
  console.log(a + b);
}

fun();
*/
// function rohan() {
//   alert("rohan sumosa khilayga");
// }

// rohan();

// function  " user define " four type
// 1. without parameter
// 2. with parameter and no value
// 3. with parameter and return value
// 4. without parameter and with return vaue.

// 1.. without parameter

// function rohan() {
//   alert("rohan sumosa khilayga");
// }

// rohan();

//   4. without parameter and with return vaue.
// function fun() {
//   const a = parseInt(prompt("enter 1 number "));
//   const b = parseInt(prompt("enter 2 number "));
//   return a + b;
// }
// let c = fun();
// alert(c);

// 3. with parameter and return value   // parameter or argument are work as a input----

// function sq(a) {
//   return a * a;
// }
// let b = parseInt(prompt("enter a number "));
// let u = sq(b);
// let s = parseInt(prompt("enter a nu for sum "));
// console.log(u + s);

// ===========document object model(dom)===================
// when we change the html and css code with the help of javascript we use dom with the help of dom we change the html and css all the html tages are work as node in js and text are called textnode
// THREE TYPE WE  TARGET THE TAG
// 1. id
// 2. class
// 3. target

// let o = document.getElementById("content");
// console.log(o);
// o.innerHTML = "clouds";
// let p = document.getElementById("p");
// console.log(p);
// p.innerHTML = "<h4> hey everyone ! this is shristygour</h4>";   // we can also add tags in inner.html
//get elementbyid function hota h jo single node/value return karta h .
// getElementsByClassName return listnode inthe form of array with the help of indexing work.
//getElementsByTagName is return listnode inthe form of array with the help of indexing work.
// let h2 = document.getElementsByClassName("h2");
// console.log(h2);
// h2[1].style.backgroundColor = "pink";
// h2[0].innerHTML = "sssssssssssssssssssssssssssssssssssssssssssssssssssssssss";
// h2[1].innerHTML = "shri";

// let c = document.getElementsByTagName("li");
// console.log(c);
// c[2].innerHTML = "shristy ";
// for (let i = 0; i < c.length; i++) {
//   console.log(c[i]);
// }
// for (let i = 0; i < 10; i++) {
//   if (i % 2 != 0) {
//     c[i].style.backgroundColor = "pink";
//   }
// }
/*
===========================img change======================
*/
// let img = document.getElementById("img");
// img.src = "white1.jpg";

// let d = document.body;
// console.log(d);
// let h = document.head;
// console.log(h);

// let r = document.getElementById("rohan");
// r.style.backgroundColor = "pink";
// r.style.textAlign = "center";
// r.style.padding = "20px";
// r.style.color = "purple";
// r.style.fontSize = "50px";
// r.style.border = "3px solid grey";
// r.style.fontStyle = "italic";
// r.style.textShadow = "2px 3px 3px black";

// ul.style.fontSize = "40px";
// ul.style.color = "purple";
// ul.style.textShadow = "2px 3px 4px pink";
// ul.style.padding = "5px";
// ul.style.fontStyle = "italic";

// let newEl = document.createElement("h1");
// console.log(newEl);
// let newText = document.createTextNode("cybrom");
// console.log(newText);
// newEl.appendChild(newText);
// console.log(newEl);

// let di = document.getElementById("div");
// di.appendChild(newEl);

// let p = document.createElement("p");
// let te = document.createTextNode("hey guys!");

// p.appendChild(te);

// let bb = document.body;
// bb.appendChild(p);
// p.style.backgroundColor = "pink";
/*
============================events are action that perform by user=======================================
function fun(){
  alert("function is working");
}
================== 1. mouse event and   2.keyboard events two types of event===================================
onclick.
2. dblclick.
3. oncontextmenu  //right click
onmouse all are event in the even function call

classList object h jo add karta h property css ki class ko add()function h   div1.classList.add();
 div1.classList.toggle("main"); both add and remove.
 div1.classList.remove(); remove the classList
 a.setAttribute("href", "https://www.google.com") is a set arrtribut function that set the attribut in js two things are used first {href}attribute or "link where we go"
onsubmit="fun()" form handeler

return false are using to brek the referes when form submit




















 

*/

// function fun1() {
//   document.body.style.backgroundColor = "pink";
// }

// let f1 = document.getElementById("fun1");
// f1.style.backgroundColor = "pink";
// f1.style.padding = "20px";

// function fun2() {
//   document.body.style.backgroundColor = "red";
// }
// let f2 = document.getElementById("fun2");
// f2.style.backgroundColor = "red";
// f2.style.padding = "20px";

// function fun3() {
//   document.body.style.backgroundColor = "yellow";
// }

// let f3 = document.getElementById("fun3");
// f3.style.backgroundColor = "yellow";
// f3.style.padding = "20px";

// function fun4() {
//   document.body.style.backgroundColor = "green";
// }
// let f4 = document.getElementById("fun4");
// f4.style.backgroundColor = "green";
// f4.style.padding = "20px";

// function fun() {
//   let b = document.getElementById("main");
//   b.style.display = "block";
// }

// function fun5() {
//   let b = document.getElementById("main");
//   b.style.display = "none";
// }

// function on() {
//   let bt2 = document.getElementById("on2");
//   bt2.style.display = "block";
// }

// function on2() {
//   alert("working");
// }

// function fun1() {
//   alert("double click");
// }

// function fun2() {
//   alert("enter");
// }
// function fun3() {
//   alert("context menu");
// }

// function fun4() {
//   alert("leaving");
// }

// let im = parseInt(document.getElementById("im").value);
//             let im2 = parseInt(document.getElementById("im2").value);
//            let h1 = document.getElementById("h1");
//           h1.innerHTML = im + im2;
//             let c = im + im2;
//             alert(c);
// function fun() {
//   let a = document.getElementById("main");
//   a.style.display = "block";
// }

// function fin() {
//   let a = document.getElementById("main");
//   a.style.display = "none";
// }

/*
it is third type of function
==================arrow funtion use when sigal code is execute==================
let a = ()=>{};
console.log(c)==whole arrow function are enter, so we call   c();
()=>{return value},*/


  // four types arrow function use 
        // let a = (a, b) => {
        //     return (a + b);
        // }
        // console.log(a(3, 4));
        // let b = () => { return 'q' }
        // console.log(b());

        // let a = (a) => (a * a * a);
        // console.log(a(3));
        // let s = (w) => w;
        // console.log(s(4));

        // let c = r => r;
        // console.log(c(5));

        // call back function are higher oder function;
        // function fun( (dd)=>{}){


        // };

        /*
        setInterval(function , Time);
        setInterval(() => { return console.log("bye"); }, 5000);
        setInterval(function () {
            console.log("hello shristy");
        }, 2000)
        

        <form action="
    " id="f">
        <label for="">name</label>
        <input type="text"><br><br>
        <label for="">email</label>
        <input type="text"><br><br>
        <label for="">pass</label>
        <input type="text"><br>

    </form>


        <script>
        setTimeout(() => {
            alert("hey!!")
            document.getElementById("f").style.display = "block";
        }, 3000);

    </script>
        */
        
    //cybrom.sort();   //are short he data ascending order
        //console.log(cybrom);
let ct = document("contact");
       if(isNaN(ct))