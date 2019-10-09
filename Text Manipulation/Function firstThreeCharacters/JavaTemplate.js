"use strict"
/*
	Veeral Patel
	10/2/14
	Javascript Template
*/

window.onload=function()
{
	document.onclick= firstThreeCharacters;
};

function firstThreeCharacters ()
{
var x;
var i;
var y;
var result;

x= "Dictionary";
y= x.length;
result="";
i=0;
while (i<=2)
{
	result= result + x.charAt(i);
	i= i+1;
}
window.alert(result);
}

























