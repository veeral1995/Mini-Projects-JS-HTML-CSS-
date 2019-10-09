"use strict";


//    Veeral Patel
//     10/17/14
//     CISC 131



window.onload=function()
{
window.alert(getPartialMatches(["Mississippi", "Sissy", "sudan", "Missouri", "Pineapple"], "iss"));
};


function getPartialMatches (anArray, aString)
{
	var i;
	var result;

	i=0;
	result = new Array(i);

	while (i<anArray.length)
	{

		if (anArray[i].indexOf(aString) >=0)
		{
			result [i] = anArray[i];
		}
		i=i+1;
	}
return result;
}
