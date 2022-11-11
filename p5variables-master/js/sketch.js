//we declare a variable by putting 'var' infront of it
//var can be changed
//let is similar to var
//and const (constant) cannot be changed
var firstName = 'Indy'; //string variable in quotation marks, can be syntax or grammar (words)
var thisIsAnInteger = 100; //integer (number)
var thisIsABoolean = true //a true or false value (or 1 or 0)
var thisIsAnUndefinedVar; //no value assigned
var thisIsNull = null; //a value of null (nothing) it considered an independant value
//array is a collection of values
//objct is also a type of var (a collection)
//some vaiables should be put at the top of the code so that it can have 'global status' and can be used throughput the code

//these are examples of system variables;
    //mouseX
    //mouseY
    //width
    //height

var tips;

//'=' is an ASSIGNMENT OPERATOR to
//'==' is an equal to value
//'!=' is not equal
//'!==' is not equal value or data type
//'>' is greater than
//'<' is less than
//'>=' is greater than or equal to
//'<=' is less than or equal to
var ellipseX = 400;
var ellipseY = 400;

//GLOBAL variables cannot be put into 'function' 
//more info on what we did can be found on Chris' notes on Notion

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent("p5container");
    console.log(firstName);
    background(220);
    var tops; //this declares a LOCAL variable that can only be used in that function

}


function draw() {
    

    fill(255, 255, 255);
    ellipse(mouseX, mouseY, 100);

    console.log(width, height);
}