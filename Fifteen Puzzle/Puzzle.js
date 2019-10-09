"use strict";
/*
Veeral Patel
Javascript Test
*/
window.onload=function()
{

	var i;
	var element;
	var button;

	i = 0;

	while(element !== null)
	{
		element = document.getElementById("square" + i);
		getTileElement(i);
		i = i + 1;
	}//while

	button = document.getElementById("button");
	button.onclick = randomizeTiles;
};
function randomizeTiles()
{
	var i;

	i = 0;

	while(i < 16)
	{
		swapInfo(document.getElementById("square" + randomInteger(15)), document.getElementById("square" + randomInteger(15)));
		i = i + 1;
	}//while
}

function randomInteger(upperLimit)
{
	var result;
	result = Math.floor(Math.random() * (upperLimit + 1));
	return result;
}

function getTileElement(tileNumber)
{
	var element;
	element = document.getElementById("square" + tileNumber);
	return element;
}
function swapInfo(element1, element2)
{
	var tmp;

	tmp = element1.innerHTML;
	element1.innerHTML = element2.innerHTML;
	element2.innerHTML = tmp;

	tmp = element1.className;
	element1.className = element2.className;
	element2.className = tmp;

	tmp = element1.id;
	element1.id = element2.id;
	element2.id = tmp;
}
function getEmptyTile()
{
	document.getElementsByClassName('emptyTile')[0];
}

