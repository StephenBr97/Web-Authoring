//The actual canvas element
var canvas;

//allows you to draw stuff on the canvas
var ctx;

//variable for time starting at 0
var time = 0;

//function for radians
function rads(a)
{
	return a * 0.0174533;
}


var images =
[
	
	"images/image4.png"
	
];

function changeColor(angle)
{
	var range = document.getElementById("range");
	var img = document.getElementById("van");
	
	range.value = angle;
	
	//Get the value of the slider (between 0 and 360)
	var value = range.value;
	
	//Build the filter value (hue-rotate for changing colour)
	var strVal = "hue-rotate(" + value + "deg);";
  
	console.log(strVal);
	
	//Set the filter attribute
	img.setAttribute("style", "filter: " + strVal);
}




// this allows the DOM to load.
window.onload = function()
{

	
	var img = document.getElementById("van");
	var range = document.getElementById("range");

	range.addEventListener("input", function()
	{
		//Get the value of the slider (between 0 and 360)
		var value = range.value;
		
		//Build the filter value (hue-rotate for changing colour)
		var strVal = "hue-rotate(" + value + "deg);";
	  
		//Set the filter attribute
		img.setAttribute("style", "filter: " + strVal);
	  
	  console.log(strVal);
	});

}


//This draw function allows canvas manipulation 
function draw()
{
	///          x   y
	//                    w   h
	ctx.fillRect(20, 20, 900, 900);

	ctx.beginPath();
	ctx.arc(100,100,60, rads(time), Math.PI * 2)
	ctx.strokeStyle = "#ff29ff";
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(100,100,40, rads(time), Math.PI * 2)
	ctx.strokeStyle = "#323922";
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(100,100,50, rads(time), Math.PI * 2)
	ctx.strokeStyle = "#222222";
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(100,100,70, rads(time), Math.PI * 2)
	ctx.strokeStyle = "#ff0292";
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.arc(100,100,10, rads(time), Math.PI * 2)
	ctx.strokeStyle = "red";
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.arc(100,100,20, rads(time), Math.PI * 2)
	ctx.strokeStyle = "blue";
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.arc(100,100,30, rads(time), Math.PI * 2)
	ctx.strokeStyle = "green";
	ctx.stroke();
	ctx.closePath();
	
	time++;
}



