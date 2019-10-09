"use strict"
/*
	Veeral Patel
	10/28/14
	Javascript Template
*/

window.onload=function()
{
window.alert(isPalindrome("Hannah"));

};

function isPalindrome(source)
{
var x;
var i;
var y;
var u;
var result;

x=source.toLowerCase();
source= " "+x+" ";
i=0;
u=0;
result = "";

while (i<source.length)
{
	result = result + x.charAt((x.length-1)-i);
	i=i+1;
}
y = source.indexOf(result);

if (y>0)
{
	return true;
}
else
{
	return false;
}
}

