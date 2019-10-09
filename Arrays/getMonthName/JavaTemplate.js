"use strict";


//    Veeral Patel
//     10/17/14
//     CISC 131



window.onload=function()
{
window.alert(getMonthName([7]));
};


function getMonthName (monthNumber)
{
	var i;
	var result;
	var anArray;

	i=0;
	anArray = ['Jan','Feb','March','April','May','June','July','August','Sept','Oct','Nov','Dec'];

if (monthNumber<=12)
{
	result = anArray[monthNumber-1];
}
return result;
}
