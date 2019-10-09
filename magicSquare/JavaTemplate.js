"use strict";

//     Veeral Patel
//     12/2/2014
//     Magic Square
window.onload=function()
{
	var input;
	input = Number(window.prompt("Please enter and odd integer greater than 2",""));

	if(input <= 2 && input%2 === 0)
	{
		window.alert("Invalid Input");
	}
	else
	{
		HTMLInput(createMagicSquare("test",input));
	}
}

function HTMLInput(array)
{
	var result;
	var containerId;
	var i;
	var j;
	var pageId;
	j = 0;
	pageId="body";
	containerId = "hold";
	result = "";
	for(i=0;i<array.length;i=i+1)
	{

		for(j=0;j<array[i].length;j=j+1)
		{
			if(j === 0)
			{
				result = result + createHTMLElement('div', containerId+i,'innerBox endRow',array[i][j]);
			}
			else
			{
				result = result + createHTMLElement('div', containerId+i,'innerBox',array[i][j]);
			}
		}
	}

	document.body.innerHTML=result;
}

function createHTMLElement (elementType, id, classInfo, content)
{
elementType = trim(elementType);
id = trim(id);
classInfo = trim(classInfo);

if (elementType===null)
{
	elementType = "";
}
if (id===null)
{
	id = "";
}
else
{
	id= ' id="'+ id + '"';
}
if (classInfo===null)
{
	classInfo = "";
}
else
{
	classInfo= ' class="'+ classInfo + '"';
}
if (content===null)
{
	content = "";
}

return "<" +elementType+id+classInfo+">"+content+"</"+elementType+">";
}


function createMagicSquare(containerElement,order)
{
	var i;
	var j;
	var u;
	var resultArray;
	resultArray = new Array(order);

	for(i = 0; i < order; i++){resultArray[i] = new Array(order);}
	for(i = 0; i < order; i++)
	{
		for(j = 0; j < order; j++){resultArray[i][j] = NaN;}
	}
	i = 0;
	j = Math.floor(order/2);
	u = 1;
	while(u < (order*order))
	{
		resultArray[i][j] = u;
		i = i - 1;
		j = j + 1;
		u = u + 1;

		if(i < 0 && j < order)
		{
			i = order-1;
		}
		else if(i >= 0 && j >= order)
		{
			j = 0;
		}
		else if(i < 0 && j >= order)
		{
			j = order - 1;
			i = 1;
		}
		if(isNaN(resultArray[i][j])===false)
		{
			i = i + 2;
			j = j - 1;
		}
	}
	i = order-1;
	j = Math.floor(order/2);
	resultArray[i][j] = u;

	return resultArray;
}

function trim(data)
{
	var start;
	var end;
	var result;
	var whitespace

	if(typeof data === "string")
	{
		whitespace=" \n\r\f\t";
		result="";
		start=0;
		end=data.length-1;

		while(start<data.length && whitespace.indexOf(data.charAt(start))>=0)
		{
			start=start+1;
		}


		while(end>=0 && whitespace.indexOf(data.charAt(end))>=0)
		{
			end=end-1;
		}

		if(end<start)
		{
			return result;
		}
		else
		{
			return data.substring(start,end+1);
		}
	}
	else
	{
		return data;
	}
}