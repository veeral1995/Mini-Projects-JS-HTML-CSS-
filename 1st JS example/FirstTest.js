"use strict"
/*
	Veeral Patel
	9/16/14
	First Javascript Example
*/

window.onload=function()
{
var element;
element = document.getElementById("theBox");
element.onmouseover = sayHello;

element = document.getElementById("other");
element.onclick = sayGoodbye;
};

function sayHello ()
{
window.alert("Function Hello");
}

function sayGoodbye ()
{
window.alert("Function Goodbye");
}