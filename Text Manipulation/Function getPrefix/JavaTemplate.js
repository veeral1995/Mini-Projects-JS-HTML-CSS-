"use strict"
/*
	Veeral Patel
	10/2/14
	Javascript Template
*/

window.onload=function()
{
	document.onclick= getPrefix;
	var source;
	source="Dictionary";
	var prefixLength;
	prefixLegth=5;
};

function getPrefix (source,prefixLength)
{
var x;
var i;
var y;
var u;
var result;

x= source;
y= x.length;
result="";
i=0;
while (i<=(u-1))
{
	result= result + x.charAt(i);
	i= i+1;
}
window.alert(result);
}






















