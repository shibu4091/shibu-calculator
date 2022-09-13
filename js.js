// h1=document.querySelector("h1");
// val=" ";

// function change() {
//     val=document.querySelector("input").value;
//     h1.innerHTML=val;
// }

// function data() {
//     h1.innerHTML=val;
// }

function add(){
    var num1, num2, sum;
    num1 = parseInt(document.getElementById("first").value);
    num2 = parseInt(document.getElementById("second").value);
    sum = num1 + num2;
    document.getElementById("answer").value = sum;
}
function minus(){
    var num1, num2, minus;
    num1 = parseInt(document.getElementById("first").value);
    num2 = parseInt(document.getElementById("second").value);
    minus = num1 - num2;
    document.getElementById("answer").value = minus;
}
function multiply(){
    var num1, num2, multiply;
    num1 = parseInt(document.getElementById("first").value);
    num2 = parseInt(document.getElementById("second").value);
    multiply = num1 * num2;
    document.getElementById("answer").value = multiply;
}
function divide(){
    var num1, num2, divide;
    num1 = parseInt(document.getElementById("first").value);
    num2 = parseInt(document.getElementById("second").value);
    divide = num1 / num2;
    document.getElementById("answer").value = divide;
}