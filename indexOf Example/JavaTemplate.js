"use strict"
/*
	Veeral Patel
	10/2/14
	Javascript Template
*/

window.onload=function()
{
	window.alert(endsIn());
	window.alert(startsWith());

};
function endsIn (what, suffix)
{
	var what;
	var suffix;
	var i;
	var x;

	i=0;
	what = "veeral";
	suffix = "ral";

	x= suffix.charAt(suffix.length-1)

	while (i<suffix.length && what.indexOf(x))
	{
		i=i+1;
	}
	return (i<what.length)
}

function startsWith (what, prefix)
{
		var what;
		var prefix;
		var i;
		var x;

		i=0;
		what = "computer";
		prefix = "tire";

		x= prefix.charAt(0)

		while (i<prefix.length && what.indexOf(x))
		{
			i=i+1;
		}
	return (i<what.length)
}
