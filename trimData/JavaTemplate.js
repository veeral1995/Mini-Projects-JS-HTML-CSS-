"use strict"
/*
	Veeral Patel
	10/2/14
	Javascript Template
*/

window.onload=function()
{

window.alert(">"+trim("   2   ")+"<");
window.alert(">"+trim("     ")+"<");
};

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