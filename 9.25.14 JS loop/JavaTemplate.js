"use strict"
/*
	Veeral Patel
	9/18/14
	Javascript Template
*/

window.onload=function()
{
var prefix;
var count;
var element;

prefix = "Box";
count=0;
element=document.getElementById(prefix+count);

while (element!==null)
{
	element.style.backgroundColor= getRandomRGB();
	count=count+1;
	element=document.getElementById(prefix+count);
};
window.alert("There are " + count + " element(s)");
document.onclick= ColorItRed;
counter ();
}

function ColorItRed()
{
	var boxxy;
	var i;
	i=randomInteger(6);
	boxxy=document.getElementById("Box"+i);
	boxxy.style.backgroundColor= "red";

}


function getRandomRGB ()
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