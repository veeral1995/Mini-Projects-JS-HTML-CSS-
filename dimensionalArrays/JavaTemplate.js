"use strict"
/*
	Veeral Patel
	10/28/14
	Javascript Template
*/

window.onload=function()
{
minToMax([6,24,14,1,4,57]);
};

function minToMax (array)
{
var i;
var min;
var u;
var minArray;
var result;
result = "";
min=0;
u=0;
minArray = new Array(u);
for (i=0;i<array.length;i=i+1)
{
		if(array[i]<array[min])
		{
			min=i;
			minArray[u] = array[min];
			u=u+1;
		}
}
window.alert(minArray);
}

function maxToMin (array)
{
	var i;
	var max;
	i=0;
	while (i<array[i].length)
	{
		if(array[i]>array[max])
		{
			max=i;
		}
		i=i+1;
	}
	return max;
}