"use strict";
// Veeral Patel
// 12/8/14
// CISC 131 Graph


window.onload=function()
{
	var delimiters;
	var sentence;
	var setup;
	var graph;

	sentence=window.prompt("enter the values","");
	delimiters=", :";
	setup=stringToArray(sentence, delimiters);
	createGraph(setup,"quad");
}

function getDelimiterLocationsIn(source, delimiters)
{
	var i;
	var result;
	var next;
	var j;

	i=0;
	next=0;
	j=0;
	while(i<source.length)
	{
		next=i;
		while (delimiters.indexOf(source.charAt(next))<0)
		{
			next=next+1;
		}
		if(next-i!==0)
		{
			j= j + 1;
		}
		i=next+1;
	}
	result=new Array(j*2);
	i=0;
	j=0;
	while(i<source.length)
	{
		next=i;
		while (delimiters.indexOf(source.charAt(next))<0)
		{
			next=next+1;
		}
		if(next-i>0)
		{
			result[j]=i;
			result[j+1]=next;
			j=j+2;
		}
		i=next+1;
	}
	return result;
}

function stringToArray(source, delimiters)
{
	var i;
	var j;
	var sub;
	var result;
	var parse;

	i= 0;
	j= 0;
	sub=getDelimiterLocationsIn(source, delimiters);
	result=new Array(sub.length/2);
	while(i<result.length)
	{
		result[i]=source.substring(sub[j],sub[j+1]);
		j=j+2;
		i=i+1;
	}
	parse= parsing(result);
	return parse;
}

function parsing(array)
{
	var i;

	for(i=0; i<array.length; i++)
	{
		array[i]=parseInt(array[i]);
	}
	return array;
}

function createScaledArray(array, scale)
{
	var i;
	var result;

	i=0;
	result=new Array(array.length);
	while(i<array.length)
	{
		result[i]=(array[i]/scale)*100;
		i=i+1;
	}
	window.alert(result);
	return result;
}

function findHighest(array)
{
	var i;
	var result;
	var p;

	i=0;
	result=Math.abs(array[0]);
	while(i<array.length)
	{
		if(Math.abs(array[i])>result)
		{
			result=array[i];
		}
		i=i+1;
	}
	window.alert(result);
	p=parsing(result);
	return p;
}

function createGraph(array, ref)
{
	var i;
	var id;
	var classinfo;
	var content;
	var scale;
	var string;
	var string2;
	var elementType;
	var high;
	var low;

	i=0;
	elementType='div';
	string="";
	string2="";
	classinfo=' class="'+'column'+'"';
	scale=createScaledArray(array, findHighest(array));
	high=document.getElementById(ref+1);
	low=document.getElementById(ref+2);
	while(i<array.length)
	{
		if(array[i]!==undefined && array[i]>0)
		{
			content=array[i];
		}
		else
		{
			content="";
		}
		id=' id="'+("bar"+i)+'"';
		string=string+"<" + elementType + id + classinfo + ">" + content + "</" + elementType + ">";
		i=i+1;
	}
	i=0;
		while(i<(array.length))
	{
		if(array[i]<0)
		{
			content=array[i];
		}
		else
		{
			content="";
		}
		id=' id="'+("bar"+(array.length+i))+'"';
		string2=string2+"<" + elementType + id + classinfo + ">" + content + "</" + elementType + ">";
		i=i+1;
	}
	high.innerHTML=string;
	low.innerHTML=string2;
	for(i=0;i<array.length;i++)
	{
		if(array[i]>0)
		{
			id=document.getElementById("bar"+i);
			id.style.position = "relative";
			id.style.top = (100-scale[i]) + "%";
			id.style.height = scale[i] + "%";
			id.style.backgroundColor=getRandomRGB();
			document.getElementById("bar"+(array.length+i)).style.height= 3+ "em";
		}
		else
		{
			id=document.getElementById("bar"+(array.length+i));
			id.style.height=Math.abs(scale[i])+"%";
			id.style.backgroundColor=getRandomRGB();
			document.getElementById("bar"+i).style.height=3+"em";
		}
	}
}

function getRandomRGB()
{
	var redValue;
	var greenValue;
	var blueValue;
	var rgbValue;

	redValue=getRandomInteger(255);
	greenValue=getRandomInteger(255);
	blueValue=getRandomInteger(255);

	rgbValue="rgb(" + redValue + "," + greenValue + "," + blueValue +")";

	return rgbValue;
}

function getRandomInteger(upperLimit)
{
	var result;

	result=Math.floor(Math.random()*(upperLimit+1));

	return result;
}