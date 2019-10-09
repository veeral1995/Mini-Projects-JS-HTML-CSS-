"use strict"
/*
	Veeral Patel
	10/2/14
	Javascript Template
*/

window.onload=function()
{
	reverse("Veeral");
};

function reverse (source)
{
var i;
var y;
var result;

y= source.length;
result="";
i=0;
while (i<=y)
{
	result= result + source.charAt(y-i);
	i= i+1;
	}
	window.alert(result);
}
























