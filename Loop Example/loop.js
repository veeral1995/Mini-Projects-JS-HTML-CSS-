"use strict"
/*
	Veeral Patel
	9/18/14
	Javascript Template
*/

window.onload=function()
{
var sum;
var count;
var upperLimit
sum=0;
count=0;
upperLimit = window.prompt("Enter a Number");
while (count<=upperLimit)
{
	sum=count+sum;
	count=count+1
}
	window.alert("sum of integers 0 through upperLimit is " + sum);
};
