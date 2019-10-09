"use strict";


//    Veeral Patel
//     11/4/14
//     CISC 131



window.onload=function()
{

test1(" 0 "); //true
test1("    "); //false
test1("hello"); //true
test1("3"); //true
test1("  23 65  "); //false
test1("3.5"); //true
test1(new Date()); //true
test1(-.99); //true
test1(112); //true
test1(-112); //true

};

function isNumeric(data)
{
	return (Number(trim(data))!==null && Number(trim(data))!==isNaN >=0);
}

function isInteger(data)
{
	return (Number(trim(data))!==0 && Number(data)%1 === 0 >=0);
}

function test1(data)
{
	window.alert("value is: " + data + " isNumeric: " + isNumeric(data) + " isInteger: "
	 + isInteger(data));
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