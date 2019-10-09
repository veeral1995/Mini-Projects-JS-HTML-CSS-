"use strict"
/*
	Veeral Patel
	11/24/14
	Coloring Function
*/

var applyColor;
window.onload=function()
{
document.getElementById("drawingPalette").innerHTML = createDrawingCanvas("littlebox",850,820,"littlebox","startOfRow");
createColorChoices("drawingColorPalette",'box',["turquoise","yellow","blue","white","purple",getRandomRGB(),getRandomRGB(),"green","gray"],updateCurrentColor);
createColorChoices("canvasColorPalette",'square',["turquoise","yellow","blue","white","purple","red",getRandomRGB(),getRandomRGB(),"gray"],updateCanvasColor);

var i;
for(i=0;i<875;i=i+1)
{
	document.getElementById("littlebox"+i).onmouseover = colorTheBox;
	}


};

function setColoringMode ( )
{

}

function coloringIsTurnedOn ()
{

}

function updateCurrentColor()
{
var box;
box = document.getElementById("colorbox");
box.style.backgroundColor = this.style.backgroundColor;
}

function updateCanvasColor()
{
var area;
var i;
area = document.getElementById("drawingPalette");
area.style.backgroundColor = this.style.backgroundColor;
}

function getCurrentColor()
{
    var element;

    element=document.getElementById("colorbox");
    return element.style.backgroundColor;

}

function colorTheBox ()
{
	this.style.backgroundColor = getCurrentColor();
}


function createDrawingCanvas (prefixId,rows,columns,className,firstBox)
{
	var html;
	var count;
	var i;
	var j;
	var classInfo;
	html = "";
	count = 0;
	i=0;
	j=0;

	if (i<rows)
	{
		classInfo = className + " " + firstBox;
	}
	else
	{
	return html;
	}
	while (j<columns)
	{
		html = "<div class="+prefixId+ " " + "id="+(className+j)+"></div>" + html;
		//classInfo = className;
		//count = count+1;
		j=j+1;
	}
	//else
	//{
	//i=i+1;
	//}
	return html;
}

function createColorChoices(palette,prefixId,colorArray,functioncall)
{
var x;
var result;
var i;
var template;
result="";
x = document.getElementById(palette);

for (i=0;i<colorArray.length;i=i+1)
{
	result=result+createHTMLElement('div',prefixId+i,prefixId,null);
}
x.innerHTML=result;
for (i=0;i<colorArray.length;i=i+1)
{
	template = document.getElementById(prefixId+i);
	template.style.backgroundColor = colorArray[i];
	document.getElementById(prefixId+i).onmouseover = functioncall;
	document.getElementById(prefixId+i).onclick = setColorChoice;
}
}

function setColorChoice ()
{
var x;
x = window.prompt("What Color would You Like The Rectangle To Be");
if (x==="")
{
this.style.backgroundColor = updateCurrentColor;
}
else
{
this.style.backgroundColor = x;
}
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


function countElementsWithIdPrefixOf(idPrefix)

{
	var count;

	var element;

	var prefix;


	prefix="box"

	count = 0;

	element=document.getElementById(prefix+count);


	while(element!==null)

	{

	count = count+1;

	element=document.getElementById(prefix+count);

	}

	return count;

}


function getRandomRGB()

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