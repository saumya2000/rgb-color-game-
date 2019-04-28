var numsquares=6;
var colors=[];
var pickedcolor;
var squares=document.querySelectorAll(".square");
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var modebuttons=document.querySelectorAll(".mode");

init();

function init(){
  setupmodebuttons();
  setupsquares();
  reset();
}

function setupmodebuttons(){
     for (var i = 0; i < modebuttons.length; i++) {
    modebuttons[i].addEventListener("click",function(){
        modebuttons[0].classList.remove("selected");
        modebuttons[1].classList.remove("selected");
       this.classList.add("selected");

       if(this.textContent==="Easy"){
        numsquares=3;
       }else{
        numsquares=6;
       }

       reset();
    });
}
}

function setupsquares(){  
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click",function(){
        var clickedcolor = this.style.background;
        if(clickedcolor === pickedcolor){
            messagedisplay.textContent="Correct";
            resetbutton.textContent="Play Again?";
            changecolors(clickedcolor);
            h1.style.background=clickedcolor;
        }
        else{
            this.style.background="#232323";
            messagedisplay.textContent="Try Again";
            resetbutton.textContent="New Colors";
        }

    });
}
}

function reset(){
    colors=generaterandomcolors(numsquares);
     //pick a new random color from array
     pickedcolor=pickcolor();
     //change color display to match picked color
     colordisplay.textContent=pickedcolor;
     this.textContent="New Colors";
     messagedisplay.textContent="";
     //change colors of squares
     for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display="block";
            squares[i].style.background=colors[i];
        }else{
             squares[i].style.display="none";
        }


        
     }
h1.style.background="steelblue";
}

// easybtn.addEventListener("click",function(){
//     hardbtn.classList.remove("selected");
//     easybtn.classList.add("selected");
//      numsquares=3;
//     colors=generaterandomcolors(numsquares);
//     pickedcolor=pickcolor();
//     colordisplay.textContent=pickedcolor;
//     for (var i = 0; i < squares.length; i++) {
//     	if (colors[i]) {
//     	squares[i].style.background=colors[i];
//     }
//     else{
//     	squares[i].style.display="none";
//     }
//     }
// });

// hardbtn.addEventListener("click",function(){
//     hardbtn.classList.add("selected");
//     easybtn.classList.remove("selected");
//     numsquares=6;
//     colors=generaterandomcolors(numsquares);
//     pickedcolor=pickcolor();
//     colordisplay.textContent=pickedcolor;
//     for (var i = 0; i < squares.length; i++) {
    	
//     	squares[i].style.background=colors[i];
//        	squares[i].style.display="block";
//     }
// });


resetbutton.addEventListener("click",function(){
	reset();
});

function changecolors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background=color;
	}
}

function pickcolor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generaterandomcolors(num){
	//make an array
	//add num random colors to array
	//return that array
	var arr=[]
	for (var i = 0; i < num; i++) {
		arr.push(randomcolor());

	}
	return arr;
}

function randomcolor(){
var r=Math.floor(Math.random() * 256);
var g=Math.floor(Math.random() * 256);
var b=Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b + ")";
}
