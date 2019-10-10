// script to draw canvas
//var testcolor = document.getElementById('firsttest');

var global = 0;

function draw(firstColor, secondColor, thirdColor, fourthColor)
{
	//document.getElementsByClassName("color1").style.fill = firstColor;
	
	var firstColorElements = document.getElementsByClassName('color1');
	for(var i = 0; i < firstColorElements.length; i++)
	{
		firstColorElements[i].style.fill = firstColor;
	}
	
	
	var secondColorElements = document.getElementsByClassName('color2');
	for(var x = 0; x < secondColorElements.length; x++)
	{
		secondColorElements[x].style.fill = secondColor;
	}
	
	var thirdColorElements = document.getElementsByClassName('color3');
	for(var y = 0; y < thirdColorElements.length; y++)
	{
		if(document.getElementById('Complementary').checked)	// if complementary was selected
		{
			thirdColorElements[y].style.fill = firstColor;
		}
		
		thirdColorElements[y].style.fill = thirdColor;
	}
	
	var fourthColorElements = document.getElementsByClassName('color4');
	for(var z = 0; z < fourthColorElements.length; z++)
	{
		if(document.getElementById('Complementary').checked)// if complementary was selected
		{
			fourthColorElements[z].style.fill = secondColor;
		}
		else if(document.getElementById('TeTratic').checked)// if TeTratic was selected
		{
			fourthColorElements[z].style.fill = fourthColor;
		}
		else	// else 1 of the 3  triple color combination was selected
		{
			if(global == 0)
			{
				global++;
				fourthColorElements[z].style.fill = secondColor;
			}
			else if(global == 1)
			{
				global++;
				fourthColorElements[z].style.fill = thirdColor;
			}
			else
			{
				global = 0;
				fourthColorElements[z].style.fill = firstColor;
			}
		}
		
		
	}
	
	
	
	
	
}