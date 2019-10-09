"use strict"
/*
	Veeral Patel
	10/2/14
	Javascript Template
*/

window.onload=function()
{
	document.onclick= evenFirstOddLast;
};

function evenFirstOddLast ()
{
var x;
var i;
var y;
var u;
var result;

x= "Dictionary";
y= x.length;
result="";
i=0;
u=1;
while (i<=y)
{
	result= result + x.charAt(i);
	i= i+2;
}
while (u<=y)
{
	result= result + x.charAt(u);
	u= u+2;
	}
window.alert(result);
}
























