"use strict"
/*
	Veeral Patel
	10/28/14
	Javascript Template
*/

window.onload=function()
{
window.alert(getMinimumCharacter("Veeral"));
};

function getMinimumCharacter (data)
{
	var i;
	var min;

	data=data.toLowerCase();

	i=0;

	if(data.length===0)
	{
		min=-1;
	}
	else
	{
		min=0;
	}

	while (i<data.length)
	{
		if (data.charAt(i)<data.charAt(min))
		{
			min=i;
		}
		i=i+1;
	}

		return min;
}

