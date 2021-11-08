canvas = document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
carw=100
carh=180
carx=425
cary=115
function add() {
    backgroundimgtag=new Image()
    backgroundimgtag.onload=uploadBackground
    backgroundimgtag.src="parkingLot.jpg"
    rovatag=new Image()
    rovatag.onload=uploadCar
    rovatag.src="car2.png"
}
function uploadBackground() {
    ctx.drawImage(backgroundimgtag, 0, 0, canvas.width, canvas.height) 
}
function uploadCar() {
    ctx.drawImage(rovatag, carx, cary, carw, carh) 
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (cary >= 75) {
        cary -= 3
        uploadBackground()
        uploadCar()
        console.log("Up " + cary)
    }
}

function down()
{
	if (cary <= 300) {
        cary += 3
        uploadBackground()
        uploadCar()
        console.log("Down " + cary)
    }
}

function left()
{
	if (carx >= 0) {
        carx -= 3
        uploadBackground()
        uploadCar()
        console.log("Up " + carx)
    }
}

function right()
{
	if (carx <= 700) {
        carx += 3
        uploadBackground()
        uploadCar()
        console.log("Down " + carx)
    }
}
