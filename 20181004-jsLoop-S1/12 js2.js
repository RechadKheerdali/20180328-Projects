/* experiement with second 10 random colour but this time refactoring to make randon colour into extra functions in order for it to be useful outside the 10 random colour squares . so basicall im refactoring to ensure reusability*/

function print(message) {
	return document.write(message);
}

function randomRGB() {
	return Math.floor( Math.random() * 256 );
};

function RGB() {
	var colours = "rgb(";
	colours += randomRGB() + ", ";   //red
	colours += randomRGB() + ", ";   //green
    colours += randomRGB() + ");"    //blue
	return colours;
};   // this equates to -    rgb(red, green, blue);     but of course 0-255 are whats inside the colours

var html = "";

for (var j = 0; j < 10; j++) {
	html += "<div id='js2' style='background-color: " + RGB() + "'></div>";
}   // equates to-   "<div id='js2' style='background-color: RGB()'></div>"

	print(html);


/* +.    remember to set html to string otherwise the number confuses the computer and will not know what is string or number
+.   remember the the for loop store the information and you use D.W to print it after its finish its loop 
+.   even D.W is made into a function for reusability. print();
*/


for (var i = 2; i <= 24; i += 2) {
  console.log(i);
}   // nothing special here just testing