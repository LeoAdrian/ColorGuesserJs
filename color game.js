// array of colors
var numSquares=6;
var colors=generateRandomColors(numSquares);
// picking a color from the "colors" array
var pickedColor=pickColor();
// selecting the squares on html
var squares=document.querySelectorAll(".square");
// selecting the RGB part from h1
var colorDisplay=document.getElementById("colorDisplay");
// replacing the RGB with the code
colorDisplay.textContent=pickedColor;
// try again message
var messageDisplay=document.getElementById("message");
var bannerDisplay=document.querySelector("#banner");
var containerDisplay=document.querySelector("#container1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors=generateRandomColors(3);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(i=0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else {
			squares[i].style.display="none";
		}
	}
})
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(i=0; i<squares.length; i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";

	}
})

resetButton.addEventListener("click", function(){
	// generate all new colors
	colors=generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor=pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent=pickedColor;
	for(i=0; i < squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
		containerDisplay.style.backgroundColor="#232323"
		resetButton.textContent="New Colors"
	}
})

colorDisplay.textContent=pickedColor;
// giving each square a color from the array
for (var i=0; i< squares.length; i++){
	squares[i].style.backgroundColor=colors[i];
	// creating the rounded borders
	squares[i].style.borderRadius="40px"
}
function upp(b){
    return b.slice(0,3).toUpperCase()+b.slice(3);
}
for(var i=0; i < squares.length; i++){
squares[i].addEventListener("click",function(ev){
	var color=ev.target.style.backgroundColor;
	if (color === pickedColor){
		messageDisplay.textContent="Correct"
		changeColors(color);
		containerDisplay.style.backgroundColor=color;
		containerDisplay.style.transition="1s";
				resetButton.textContent="Play Again?"
	}
	else {
		this.style.backgroundColor="#232323"
		this.style.transition="1s"
		messageDisplay.textContent="Try Again"
	}
})
}

// function pickRandomProperty(obj) {
//     var result;
//     var count = 0;
//     for (var prop in obj)
//         if (Math.random() < 1/++count)
//            result = prop;
//     return result;
// }

function pickColor(c){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function changeColors(color){
	for (i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=color;
	}
}

function generateRandomColors(num){
	// make an array
	var arr=[]
	// add num random colors to array
	for (var i=0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor())
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a red from 0-255
	// pick a green from 0-255
	// pick a blue from 0-255
	var red=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	return "rgb("+red+", "+ green + ", " + blue+")";
}
