"use strict"
/*
	Veeral Patel
	9/18/14
	Javascript Template
*/

window.onload=function()
{
	var count;
	var prefix;
	prefix = "square";
	count = countElementsWithIdPrefixOf (prefix);
	window.alert(count + " element(s) have the prefix of " + prefix);
	setRandomBackgroundColorOfElementsWithIdPrefixOf (prefix);
};

function countElementsWithIdPrefixOf (prefix)
{
	var count;
	var element;
	count=0;
	element=document.getElementById(prefix+count);

	while (element!==null)
	{
			count=count+1;
			element=document.getElementById(prefix+count);


	}
	return count;
}
function setRandomBackgroundColorOfElementsWithIdPrefixOf (prefix)
{
	var i;
	var element;
	var count;
	element=document.getElementById(prefix+i);
	i=0;
	count= countElementsWithIdPrefixOf(prefix);

	while (i<count)
	{
			element=document.getElementById(prefix+i);
			element.style.backgroundColor= getRandomRGB();
			i=i+1;
			}
}
function getRandomRGB (prefix)
{
		var blue;
		var green;
		var red;
		red = randomInteger(255);
		green = randomInteger(255);
		blue = randomInteger(255);

		return ("rgb("+red + "," + green + "," + blue + ")");
}
function randomInteger(upperLimit)
{
	var result;
	return Math.floor(Math.random()*(upperLimit+1));
	return result;
}