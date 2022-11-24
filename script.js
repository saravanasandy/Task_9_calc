//*************************   Front_End HTML_Code   **************************** */


let heading = document.createElement("h1");
heading.innerHTML = "Calculator";

let div1 = document.createElement("div");
div1.setAttribute("class","container");


let div2 = document.createElement("div");
div2.setAttribute("class","page");
div2.innerHTML = " 🙊🙉🙈 ";


let span = document.createElement("span");
span.setAttribute("class","text-right");
span.setAttribute("id","span");
span.innerHTML = "<p> </p>";



let br1 = br("br");

let input1 = document.createElement("input");
input1.setAttribute("type","text");
input1.setAttribute("id","input");
input1.setAttribute("class","text-right form-control");
input1.innerHTML = "0";


let br2 = br("br");
let br3 = br("br");


let btn1 = button("button","type","button","value","7","id","seven","class","bluecolor","7");
let btn2 = button("button","type","button","value","8","id","eight","class","bluecolor","8");
let btn3 = button("button","type","button","value","9","id","nine","class","bluecolor","9");
let btn4 = button("button","type","button","value","+","id","add","class","bluecolor","+");

let br4 = br("br");

let btn5 = button("button","type","button","value","4","id","four","class","bluecolor","4");
let btn6 = button("button","type","button","value","5","id","five","class","bluecolor","5");
let btn7 = button("button","type","button","value","6","id","six","class","bluecolor","6");
let btn8 = button("button","type","button","value","-","id","subtract","class","bluecolor","-");

let br5 = br("br");

let btn9 = button("button","type","button","value","1","id","one","class","bluecolor","1");
let btn10 = button("button","type","button","value","2","id","two","class","bluecolor","2");
let btn11 = button("button","type","button","value","3","id","three","class","bluecolor","3");
let btn12 = button("button","type","button","value","*","id","multi","class","bluecolor","*");

let br6 = br("br");

let btn13 = button("button","type","button","value","","id","clear","class","bluecolor","c");
let btn14 = button("button","type","button","value","0","id","zero","class","bluecolor","0");
let btn15 = button("button","type","button","value","","id","equal","class","bluecolor","=");
let btn16 = button("button","type","button","value","/","id","div","class","bluecolor","/");

div1.append(div2);
div2.append(span);
div2.append(br1);
div2.append(input1);
div2.append(br2);
div2.append(br3);

div2.append(btn1);
div2.append(btn2);
div2.append(btn3);
div2.append(btn4);
div2.append(br4);

div2.append(btn5);
div2.append(btn6);
div2.append(btn7);
div2.append(btn8);
div2.append(br5);

div2.append(btn9);
div2.append(btn10);
div2.append(btn11);
div2.append(btn12);
div2.append(br6);

div2.append(btn13);
div2.append(btn14);
div2.append(btn15);
div2.append(btn16);

document.body.append(heading,div1);








//***************************************  Functions    **************************** */

function br(elementName){
let br = document.createElement(elementName);
return br;
}


function button(elementName,eletype,typevalue,valuename,value,idname,idvalue,classname,classvalue,innervalue){
    let bn = document.createElement(elementName);
    bn.setAttribute(eletype,typevalue);
    bn.setAttribute(valuename,value);
    bn.setAttribute(idname,idvalue);
    bn.setAttribute(classname,classvalue);
    bn.innerHTML = innervalue ;
    return bn;
}


///*************************   Back_End  JS_Code   ********************************************* */



let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let mut = document.getElementById("multi");
let division = document.getElementById("div");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");

let page = document.querySelector(".page");

page.addEventListener("click",display);
clear.addEventListener("click",clearHistory);
equal.addEventListener("click",result);




document.body.addEventListener("keypress",keypress)

////******************************************** */
function display(e){
let span = document.querySelector("#span");
if (e.target.value===undefined) {
    span.innerHTML = span.innerHTML+""
} else {
    span.innerHTML = span.innerHTML+e.target.value;
}
}
//////***************************************** */
function clearHistory(){
    let span = document.querySelector("#span");
    span.innerHTML = ""
    let finalResult = document.querySelector("#input");
    finalResult.value = "0"
}

////******************************************************* */
function result(){
    let span = document.querySelector("#span");
    let finalResult = document.querySelector("#input");
    finalResult.value = eval(span.innerText);
   
}

/////************************************************************* */

function keypress(e){
    let span = document.querySelector("#span");
    if ((e.key).match(/[0-9]/)||e.key==="*" || e.key==="-" || e.key==="+" || e.key==="/") {
        span.innerText += e.key;
        console.log(e.key);
    } else if (e.key==="Enter") {
        result();
    }
}