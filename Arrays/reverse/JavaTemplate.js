"use strict";


//    Veeral Patel
//     10/17/14
//     CISC 131



window.onload=function()
{
window.alert(reverse(['Veeral','Patel','CISC']));
};


function reverse (array)
{
	var i;
	var result;

	result = new Array(i);
	i=0;

while (i<=array.length)
{
	result[i] = array[array.length-i];
	i=i+1;
}
return result;
}