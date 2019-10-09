"use strict"
/*
	Veeral Patel
	9/18/14
	Javascript Template
*/

window.onload=function()
{
document.onclick= test;
};

function haveUserSetColor ();
{
window.prompt ("What Background Color Would You Like?");
}

function test ():
{
	window.prompt ("Pick a Color");
	var element;
	element=document.getElementById("theBox");
	element.onclick=haveUserSetColor();
}