"use strict"
/*
	Veeral Patel
	11/7/14
	Confetti
*/

window.onload=function()
{
window.onclick=create;

};

function create()
{
	var i;

	i=0;

	createConfetti("dot",200);

	while(i<100)
	{
		window.setTimeout(function() {makeConfettiFall();},100*i);
		i=i+1;
	}
}

function createConfetti (idPrefix, howMany)
{
	var i;
	var result;
	var pageId;
	var id;

	i=0;
	result="";
	pageId=document.getElementById("page");

while (i<=howMany)
{
	result=result+createHTMLElement('span',idPrefix+i,'confetti','&bull;');
	i=i+1;
	}

pageId.innerHTML=result;
i=0;

while(i<=howMany)
	{
		id=document.getElementById(idPrefix+i);

		id.style.color=getRandomRGB();
		id.style.top=getRandomInteger(pageId.offsetHeight-document.getElementById(idPrefix+i).offsetHeight-4)+'px';
		id.style.left=getRandomInteger(pageId.offsetWidth-document.getElementById(idPrefix+i).offsetWidth-4)+'px';

		i=i+1;
	}
}

function trim(data)
{
		var whitespace;
		var start;
		var y;
		var end;
		var result;

		whitespace = " \n\r\t\f";
		y=data.length;
		start = 0;
		end=y-1;
		result="";
		if (typeof data === "string")
		{
				while (start<y && whitespace.indexOf(data.charAt(start)) >=0)
				{
					start=start+1;
				}

				while (end>=0 && whitespace.indexOf(data.charAt(end)) >=0)
				{
					end=end-1;
				}
				if (end<start)
				{
				}
				else
				{
					result=data.substring(start,end);
		}
		}

		return data
		return result;

}


function getRandomRGB()


{

	var blue;

	var green;

	var red;


	red = getRandomInteger(255);

	green = getRandomInteger(255);

	blue = getRandomInteger(255);


	return ("rgb("+red + "," + green + "," + blue + ")");

}

function getRandomInteger(upperLimit)
{
	var result;

	result=Math.floor(Math.random()*(upperLimit+1));

	return result;
}

function createHTMLElement (elementType, id, classInfo, content)
{
if (elementType===null)
{
	elementType = "";
}
if (id===null)
{
	id = "";
}
if (classInfo===null)
{
	classInfo = "";
}
if (content===null)
{
	content = "";
}

elementType = trim(elementType);
id = trim(id);
classInfo = trim(classInfo);

if(elementType.length>0)
{
	elementType="elementType="+elementType+" ";
}
if (id.length>0)
{
	id="id="+id+" ";
}
if(classInfo.length>0)
{
	classInfo="class="+classInfo+" ";
}
if(content.length>0)
{
	content=content+ " ";
}

return "<" +elementType+id+classInfo+">"+content+"</"+elementType+">";
}

function move(prefix, leftBoundary, rightBoundary, maxSideMovement,maxDownMovement)
{
	var i;
	var id;

	i=0;

	while(document.getElementById(prefix+i)!=null)
	{
		id = document.getElementById(prefix+i);

		id.style.top = getNumericPrefix(id.style.top) + getRandomInteger(maxDownMovement-1)+"px";
		id.style.left = getNumericPrefix(id.style.left) + Math.min(Math.max(getRandomInteger(maxSideMovement-1),leftBoundary),rightBoundary)+"px";

		i=i+1;
	}

}

function makeConfettiFall()
{
	document.getElementById("page").style.borderBottomStyle="hidden";

	move("dot",0,document.getElementById("page").style.width,3,3)
}

function getNumericPrefix(data)
{
	var numbers;
	var i;
	var result;

	result="0";
	i=0;
	numbers="1234567890";

	if(data!="")
	{
		result="";

		if(data.charAt(i)==="-")
		{
			result=result+data.charAt(i);
			i=i+1
		}

		if(data.charAt(i)==="+")
		{
			i=i+1;
		}

		if(numbers.indexOf(data.charAt(i)<0))
		{
			result="0";
		}

		while(i<data.length && numbers.indexOf(data.charAt(i))>=0)
		{
			result=result+data.charAt(i);
			i=i+1;
		}

		if(data.charAt(i)===".")
		{
			result=result+data.charAt(i);

			i=i+1;

			while(i<data.length && numbers.indexOf(data.charAt(i))>=0)
			{
				result=result+data.charAt(i);
				i=i+1;
			}
		}
	}

	return Number(result);
}


