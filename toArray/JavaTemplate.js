"use strict";

//    Veeral Patel
//     11/4/14
//     CISC 131

window.onload=function()
{

var array;
var dataFromUser;
var delimiters;
var message;

dataFromUser = "0012:, 34,5.50000,6:    hello,-2,            watch";
delimiters = ",;:";

array = toArray(dataFromUser, delimiters);
window.alert("The array returned by toArray function is:\n" + getArrayInfo(array));

array = trimElements(array);
window.alert("The array returned by trimElements function is:\n" + getArrayInfo(array));

array = packArray(array);
window.alert("The array returned by packArray function is:\n" + getArrayInfo(array));

message = convertToNumber(array);
window.alert("The array returned by convertToNumber function is:\n" + getArrayInfo(array));

window.alert("The String returned by convertToNumber function is: " + message);
};

function packArray(array)
{
	var i;
	var u;
	var packedArray;
	
	packedArray = new Array(u);
	i=0;
	u=0;
	
	while (i<array.length)
	{
		if (array[i] !== null && array[i] !== "")
		{
			packedArray[u] = array[i];
			u=u+1;
		}
		i=i+1;
		}
			return packedArray;
			}
			
function convertToNumber (array)
{
	var i;
	var numArray;
	var str;
	var u;
	
	numArray = new Array(u)
	i=0;
	str = "";
	u=0;
	
	while (i<array.length)
	{
		if (!isNaN(Number(array[i])))
		{
			array[u] = Number(array[i]);
			u=u+1;
		}
		else 
		{
			array[u] = array[i];
			u=u+1;
			str = str + "," + array[i];
		}
			i=i+1;
	}
	
	return str;
}

function getArrayInfo(array)
{
	var result;
	var i;

	i = 0;
	result = "";

	while(i < array.length)
	{
		result = result + "[" + i + "]" + " " + array[i] + "\n";
		i = i + 1;
	}//while
	return ("Array contains " + array.length + " elements.\n" + result);
}

function trimElements (array)
{
	var cutArray;
	var i;
	
	i=0;
	cutArray = new Array(array.length);
	while (i<array.length)
	{
		cutArray[i] = trim(array[i]);
		i=i+1;
		}
		return cutArray;
		}

function toArray (dataFromUser, delimiters)
{
	var i;
	var result;
	var corArray;
	var dataArray;
	var start;
	var count;
	i=0;
	count=0;
	result = "";
	corArray = getCoordinates(dataFromUser, delimiters);

	while (i<dataFromUser.length)
	{
		if (dataFromUser.charAt(i) == null)
		{
			dataFromUser= dataFromUser + "";
		}
		if (delimiters.charAt(i) == null)
		{
			delimiters = delimiters + "";
		}
		if (delimiters == "")
		{
			delimiters = delimiters + " \n\r\t\f";
		}
		dataFromUser = dataFromUser + "";
		i=i+1;
	}

	dataArray = new Array(corArray.length + 1);
	start = 0;
	i=0;

	while(i < dataArray.length)
	{
		dataArray[i] = dataFromUser.substring(start, corArray[i]);
		start = corArray[i] + 1;
		i = i + 1;
	}//while
	return dataArray;
}
	
function getCoordinates(dataFromUser,delimiters)
{
	var i;
	var result;
	var u;

	result = new Array(u);
	i = 0;
	u = 0;

	while(i < dataFromUser.length)
	{
		if(delimiters.indexOf(dataFromUser.charAt(i)) >= 0)
		{
			result[u] = dataFromUser.indexOf(delimiters.charAt(i), (i + 1) - 1);
			u = u + 1;
		}
		i = i + 1;
	}
	return result;
}

function trim(data)
{
		var whitespace;
		var start;
		var y;
		var end;
		var result;

		y=data.length;
		if (typeof data === "string")
		{
				whitespace = " \n\r\t\f";
				start = 0;
				while (start<y && whitespace.indexOf(data.charAt(start)) >=0)
				{
					start=start+1;
				}
				end=y-1;
				while (end>=0 && whitespace.indexOf(data.charAt(end)) >=0)
				{
					end=end-1;
				}
				if (end<start)
				{
					result="";
				}
				else
				{
					result=data.substring(start,end+1);
		}
		}
else
{
		result=data;
	}
return result;
}