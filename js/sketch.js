//var can be changed, let is similar to var, and const (constant) cannot be changed
var firstName = 'Indy'; //string variable in quotation marks, can be syntax or grammar (words)
var thisIsAnInteger = 100; //integer (number)
var thisIsABoolean = true //a true or false value (or 1 or 0)
var thisIsAnUndefinedVar; //no value assigned
var thisIsNull = null; //a value of null (nothing) it considered an independant value
//array is a collection of values
//objct is also a type of var (a collection)
//vaiables should be put at the top of the code so that it can have 'global status' and can be used throughput the code

var ellipseX = 400;
var ellipseY = 400;

//variables cannot be put into 'function' 

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent("p5container");
    console.log(firstName);
    background(220);

}


function draw() {
    

    fill(255, 255, 255);
    ellipse(mouseX, mouseY, 100);

    console.log(width, height);
}