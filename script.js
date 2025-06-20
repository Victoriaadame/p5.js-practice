function setup() //called once and program starts
{
   createCanvas(400,400);
   background(220);
   translate(width/2, height / 2); // Move origin to center of canvas
   drawAxesWithTicks(); //draws the axes
}
  
function draw() //This runs in a loop to update the display
{
   line(0,400,400,0); 
   rect(0,0,100,100);
   rect(100,100,100,100);
   rect(200,200,100,100);
   rect(300,300,100,100);

if(mouseIsPressed) //if mouse is pressed
   {

   ellipse(mouseX, mouseY, 20, 20); //draws a circle at the mouse position
   }
}


function drawAxes() //draws the axes
{
   stroke(0);
   strokwWeight(2);
   line(-400, 0, 400);
   line(0, -height / 2, 0, height / 2);

   Fill(0);
   noStroke();
   textSize(12);
   textAlign(CENTER, CENTER);
   
   for( let x = -400; x <= 400; x += 10) {
      stroke(0);
      strokeWeight(1);
      line(x, -5, x, 5); // vertical lines
      line(-5, x, 5, x); // horizontal lines
      
   }

}