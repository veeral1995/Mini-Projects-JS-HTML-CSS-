"use strict"
/*
	Veeral Patel
	12/4/14
	Game Of Life
*/

window.onload=function()
{
var gameBoardArray;
var tmpArray;
var i;
var j;

gameBoardArray = create2dArray(88, 88, getDeadValue());
tmpArray = copy2dArray(gameBoardArray);

createGameBoard(gameBoardArray);
createFirstGeneration(gameBoardArray);

for(i=0; i<87; i=i+1)
{
for(j=0; j < 87; j++)
{
if(gameBoardArray[i][j] === getLiveValue())
{
document.getElementById('r'+i+'c'+j).style.backgroundColor = getLiveColor();
}
else
{
document.getElementById('r'+i+'c'+j).style.backgroundColor = getDeadColor();
}
}
}
window.setInterval( function() {applyRules(gameBoardArray, tmpArray);}, 500);
};

function getDeadValue (){return 0;}

function getLiveValue (){return 1;}

function isAlive (cell){if (cell == getLiveValue()){return true;}else{return false;}}

function getLiveColor (){return "white";}

function getDeadColor (){return "black";}

function isInArray(array2d, row, col)
{
if(row >= 0 && row < array2d.length && col >= 0 && col < array2d.length >=0)
{
return true;
}
else
{
return false;
}
}

function applyRules(array2d, tmpArray)
{
var i;
var j;

for(i = 0; i < array2d.length; i++)
{
for(j = 0; j < array2d[i].length; j++)
{
tmpArray[i][j] = countLivingNeighborsOf(array2d, i, j);
}
}

for(i = 0; i < array2d.length; i++)
{
for(j = 0; j < array2d[i].length; j++)
{
if(tmpArray[i][j]<2)
{
array2d[i][j]=0;
}
if(tmpArray[i][j]>3)
{
array2d[i][j]=0;
}
if(tmpArray[i][j]===3)
{
array2d[i][j]=1;
}
if(array2d[i][j]===1)
{
document.getElementById('r' + i + 'c' + j).style.backgroundColor = getLiveColor();
}
else
{
document.getElementById('r' + i + 'c' + j).style.backgroundColor = getDeadColor();
}
}
}
}

function countLivingNeighborsOf(array2d, row, col)
{
var count;
count = 0;
if(isInArray(array2d,row+1,col) && isAlive(array2d[row + 1][col]))
{
count=count+1;
}
if(isInArray(array2d,row-1,col) && isAlive(array2d[row - 1][col]))
{
count=count+1;
}
if(isInArray(array2d,row,col+1) && isAlive(array2d[row][col + 1]))
{
count=count+1;
}
if(isInArray(array2d,row,col-1) && isAlive(array2d[row][col - 1]))
{
count=count+1;
}
if(isInArray(array2d,row+1,col+1) && isAlive(array2d[row + 1][col + 1]))
{
count=count+1;
}
if(isInArray(array2d,row-1,col-1) && isAlive(array2d[row - 1][col - 1]))
{
count=count+1;
}
if(isInArray(array2d,row-1,col+1) && isAlive(array2d[row - 1][col + 1]))
{
count=count+1;
}
if(isInArray(array2d,row+1,col-1) && isAlive(array2d[row + 1][col - 1]))
{
count=count+1;
}
return count;
}

function createFirstGeneration (array2d)
{
	var i;
	var j;
	var k;
	var row;
	var col;

	for (i=0; i<array2d.length;i++)
	{
	for (j=0; j<array2d[i].length;j++)
	{
	if (i===j || i==j || (j+i)%2===0)
	{
		array2d[i][j] = getLiveValue();
		}
}

}
}

function createGameBoard(array2d)
{
	var finalString;
	var board;
	board = document.getElementById('gameBoard');
	var i;
	var j;
	var pageId;
	j = 0;
	finalString = "";

	for(i=0;i<88;i++)
	{
		for(j = 0; j < 88; j++)
		{
			if(j === 0)
			{
				finalString = finalString + createHTMLElement('div', 'r'+i+'c'+j,'cell',null);
			}
			else
			{
				finalString = finalString + createHTMLElement('div', 'r'+i+'c'+j,'cell',null);
			}
		}
	}
	board.innerHTML=finalString;
}


function create2dArray (rows, columns, initialValue)
{
    var i;
    var j;
    var array2d;

    array2d = new Array(rows);

    for(i = 0; i < array2d.length; i++)
    {
        array2d[i] = new Array(columns);
    }

    for(i = 0; i < array2d.length; i++)
    {
        for(j = 0; j < array2d[i].length; j++)
        {
            array2d[i][j] = initialValue;
        }
    }
    return array2d;
}

function copy2dArray (array2d)
{
    var i;
    var j;
    var result;

    result = new Array(array2d.length);

    for(i = 0; i < result.length; i++)
    {
        result[i] = new Array(array2d[i].length);
        for(j = 0; j<result[i].length; j++)
        {
            result[i][j] = array2d[i][j];
        }
    }
    return result;
}

function createHTMLElement(elementType, id, classInfo, content)
{
	if(id===null)
	{
		id="";
	}
	if(classInfo===null)
	{
		classInfo="";
	}
	if(content===null)
	{
		content="";
	}
	//Sets all null values to zero length strings

	elementType=trim(elementType);
	id=trim(id);
	classInfo=trim(classInfo);
	//trims everything but content

	if(id.length>0)
	{
		id=' id="'+id+'"';
	}
	if(classInfo.length>0)
	{
		classInfo=' class="'+classInfo+'"';
	}
	//if class has at least 1 non whitespace character class=
	//will be concatonated onto the id name

	return "<" + elementType + id + classInfo + ">" + content + "</" + elementType + ">";
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