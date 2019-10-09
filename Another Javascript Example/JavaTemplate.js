"use strict"
/*
	Veeral Patel
	9/18/14
	Javascript Template
*/

window.onload=function()
{
test();
};

function test ()
{
	var x;
	 x = window.prompt ("Pick a Color","");
	var element;
	element=document.getElementById("theBox");
	element.style.backgroundColor = x;
}