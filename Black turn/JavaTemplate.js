"use strict"
/*
	Veeral Patel
	10/10/14
	Javascript Template
*/

  window.onload = function()
  {
	var i;
	var colors;
	i = 0;
	while (i<4)
	{
		document.getElementById ("square" + i).onmouseover = makeItBlack;
		i=i+1;
	}

  };
  
function makeItBlack()
	{
		this.style.backgroundColor = "black";
		}
		