"use strict"
/*
	Veeral Patel
	10/2/14
	Javascript Template
*/

window.onload=function()
{
	document.onclick= copyEven;
};

function copyEven ()
{
var x;
var i;
var y;
var result;

x= "Dictionary";
y= x.length;
result="";
i=0;
while (i<=y)
{
	result= result + x.charAt(i);
	i= i+2;
	}
window.alert(result);
}
























