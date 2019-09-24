// Start of the ColorWheel pie slice

//===========================================================================================================
//=============================== VARIABLE'S AND CLASS SECTION ==============================================
//===========================================================================================================

//PIESLICEANGLE CLASS
class pieSliceAngle
{
  constructor(startAngle, endAngle)
  {
    this.startAngle = startAngle;
    this.endAngle = endAngle;
  }
}

// 'selectedColor' is an array variable that will hold all the needed colors (ITS A GLOBAL VARIABLE)
var selectedColor = ["stuff", "stuff2", "stuff3", "stuff4"];

//Getting the colorWheelCanvas to draw on
var colorWheelElement = document.getElementById('colorWheelCanvas');
var colorWheelContext = colorWheelElement.getContext('2d');
    
// ARRAY THAT WILL HOLD ALL THE COLOR CODES FOR THE COLOR WHEEL
var firstCircle = ['#6b439b', '#a64499', '#e44097', '#ed1b24', '#f37020', '#f78f1e', '#ffc20f', '#fef200', '#8dfc07', '#00a88f', '#0092ce', '#0154a4'];
var secondCircle = ['#8869ad', '#b868ad', '#e966ac', '#f04950', '#f58d4e', '#f9a54b', '#fece3e', '#fff533', '#a3fd39', '#33b8a5', '#33a7d8', '#3276b5'];
var thirdCircle = ['#b7a5cd', '#d3a4ce', '#f1a3cd', '#f69195', '#f9bb94', '#fbc994', '#ffe18b', '#fef984', '#c8fd87', '#84d4c9', '#85cae7', '#85acd3'];	 

//Objects of pieSliceAngle classes that will hold 12 pie slices start and endpoint angles. google circle radians if you don't understand
pieSlice0 = new pieSliceAngle((3*Math.PI)/2, (5*Math.PI)/3);
pieSlice1 = new pieSliceAngle((5*Math.PI)/3, (11*Math.PI)/6);
pieSlice2 = new pieSliceAngle((11*Math.PI)/6, (2*Math.PI));
pieSlice3 = new pieSliceAngle(0, (Math.PI)/6);
pieSlice4 = new pieSliceAngle((Math.PI)/6, (Math.PI)/3);
pieSlice5 = new pieSliceAngle((Math.PI)/3, (Math.PI)/2);
pieSlice6 = new pieSliceAngle((Math.PI/2), (2*Math.PI)/3);
pieSlice7 = new pieSliceAngle((2*Math.PI)/3, (5*Math.PI)/6);
pieSlice8 = new pieSliceAngle((5*Math.PI)/6, Math.PI);
pieSlice9 = new pieSliceAngle(Math.PI, (7*Math.PI)/6);
pieSlice10 = new pieSliceAngle((7*Math.PI)/6, (4*Math.PI)/3);
pieSlice11 = new pieSliceAngle((4*Math.PI)/3, (3*Math.PI)/2);

//STORED ALL THE ABOVE PIESLICE RADIANS INTO AN ARRAY, SO AN ARRAY OF PIE SLICE ANGLE CLASSES
var pieSliceArray = [pieSlice0, pieSlice1, pieSlice2, pieSlice3, pieSlice4, pieSlice5, pieSlice6, pieSlice7, pieSlice8, pieSlice9, pieSlice10, pieSlice11];

//===========================================================================================================
//==================================== END OF VARIABLES======================================================
//===========================================================================================================

//===========================================================================================================
//==================================== DRAWING THE COLORWHEELS===============================================
//===========================================================================================================


