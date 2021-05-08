/* +\    i want to produce 10 circles with different colour everytime it refreshes 
+\   i am also testing whether i can add id to js for it to work and it appears to work */

var red;
var green;
var blue;
var styleRGB;
var html = "";   //already set this as string and += to add to it

function randonRGBcolors() {
	return Math.floor( Math.random() * 256 );
}

for (var i = 1; i <= 10; i += 1) {
	red = randonRGBcolors();
	green = randonRGBcolors();
	blue = randonRGBcolors();
	styleRGB = "style='background-color: rgb(" + red + ", " + green + ", " + blue + ");'";
	html += "<div id='js1' " + styleRGB + "></div>";
};

document.write(html);
	/* +\   D.W write in full is  :=    
	<div id='jsdiv' style='background-color: rgb(red, green, blue);'></div>
	
	+\    rgb says 255 colours but ther is a total of 256 because the 0 is added too as it is a colour too, 0-255
	
	+\    in the Math.random , you do not need the + 1 because you want to include the 0 in rgb so just type the total unit which is 256 .
	    and you will never get 256 because Math.random() never reaches 1 so you will never get 256,    the range is 0.00000... - 255.99999..., and with Math.floor it is 0-255*/