"use strict";


//    Veeral Patel
//     10/17/14
//     CISC 131



window.onload=function()
{
window.alert(getNumericPrefix("43abc"));
window.alert(getNumericPrefix("104abc45"));
window.alert(getNumericPrefix("15.72abc"));
window.alert(getNumericPrefix("93abc"));
};


function getNumericPrefix (data)
{
	var i;
	var u;
	var result;

	i=0;
	u=0;
	result="";
	
	if (data.charAt(i) === "-")
	{
		result=
	//while (i<data.length && !isNaN(data.charAt(i)))
	//{
	//	result = result + data.charAt(i);
		i=i+1;
	//}
	//return Number(result);
}