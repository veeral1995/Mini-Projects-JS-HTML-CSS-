"use strict";


//    Veeral Patel
//     10/27/14
//     CISC 131



window.onload=function()
{
var x;
x=document.getElementById("page");
x.innerHTML = createHTMLElement("div",null,"box","hello")+createHTMLElement("div","box1","box","goodbye");

};


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