"use strict"
/*
	Veeral Patel
	10/1/14
	Javascript Template
*/
  window.onload = function()  {    setColor ("box"+0, getRandomRGB() );    setColor("box"+1, getRandomRGB() );    setColor("box"+2, getRandomRGB() );    setColor("box"+3, getRandomRGB() );    document.onkeypress=swapRandom;	var idPrefix;	idPrefix = "box";
	var right;	right = document.getElementById("right");	var left;	left = document.getElementById("left");	right.onclick=rightArrowClicked;	left.onclick=leftArrowClicked;  };
function leftArrowClicked(){	shiftBackgroundColorsToLeft("box");}
function rightArrowClicked(){	shiftBackgroundColorsToRight ("box");}
function setColor (idOfElement, Color){	var one;	one = document.getElementById("box0");	one.style.backgroundColor= getRandomRGB();
	var three;	three = document.getElementById("box1");	three.style.backgroundColor= getRandomRGB();  var two;	two = document.getElementById("box2");	two.style.backgroundColor= getRandomRGB();
	var four;	four = document.getElementById("box3");	four.style.backgroundColor= getRandomRGB();}function swapRandom(){	var x;	var y;
	x= randomInteger(3);	y= randomInteger(3);
	swapBackgroundColor("box"+x,"box"+y);	}
function randomInteger(upperLimit){	var result;	return Math.floor(Math.random()*(upperLimit+1));	return result;}
function getRandomRGB(){	var blue;	var green;	var red;
	red = randomInteger(255);	green = randomInteger(255);	blue = randomInteger(255);	return ("rgb("+red + "," + green + "," + blue + ")");}
function swapBackgroundColor(firstId,secondId){	var element1;	var element2;	var tmp;	element1=document.getElementById(firstId);	element2=document.getElementById(secondId);	tmp=element1.style.backgroundColor;	element1.style.backgroundColor=element2.style.backgroundColor;	element2.style.backgroundColor=tmp;}
function countElementsWithIdPrefixOf(idPrefix){	var count;	var element;	var prefix;	prefix="box"	count = 0;	element=document.getElementById(prefix+count);	while(element!==null)	{		count = count+1;		element=document.getElementById(prefix+count);	}
	return count;}
function shiftBackgroundColorsToLeft (idPrefix)
{	var numberOfElements;	var i;	var firstId;	var secondId;
	numberOfElements= countElementsWithIdPrefixOf(idPrefix);	i=0;	while (i<numberOfElements-1)	{		firstId=idPrefix+i;		secondId=idPrefix+(i+1);		swapBackgroundColor(secondId,firstId);		i=i+1;	}}
function shiftBackgroundColorsToRight (idPrefix){	var numberOfElements;	var i;	var firstId;	var secondId;	i=0;	numberOfElements= countElementsWithIdPrefixOf(idPrefix);	numberOfElements= numberOfElements-1;	while (i<=numberOfElements)	{		firstId=idPrefix+numberOfElements;		secondId=idPrefix+(numberOfElements-1);		swapBackgroundColor(firstId,secondId);		numberOfElements= numberOfElements-1;	}}