"use strict"
/*
	Veeral Patel
	10/28/14
	Javascript Template
*/

window.onload=function()
{
window.alert(getMinimum(["aardvark","Zebra"]));
};

function getMinimum (array)
{
	var i;
	var min;

	//array=array[i].toLowerCase();

	i=0;

	if(array.length===0)
	{
		min=-1;
	}
	else
	{
		min=0;
	}

	while (i<array.length)
	{
			array[i]=array[i].toLowerCase(array[i]);
			if (array[i]<array[min])
			{
				min=i;
			}
			i=i+1;
		}

			return min;
	}

