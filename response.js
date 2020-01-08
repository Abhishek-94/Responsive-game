var start= new Date().getTime();
var square = document.createElement("div");
var text = document.createElement("p");
var score=0;
function createBox(){
    var box= document.createElement("div");
    box.setAttribute("id","box"); 
    square.setAttribute("id","square");
    text.setAttribute("id","text"); 
    box.appendChild(square);
    document.body.appendChild(box);
    document.body.appendChild(text);
    square.addEventListener('click',handleClick);
}

function handleClick(){
    var end = new Date().getTime();
    var diff = end-start;
    var response = diff/1000;
    if(response < 2.5){
        score++;
        text.innerHTML="Response time is "+response;
        start= new Date().getTime();
        square.style.display = "none";
        setTimeout(changeAttr,1500);
    }
    else {
        text.innerHTML="Game Over Final Score: "+score;
        square.removeEventListener('click',handleClick);
    }
}

function changeAttr(){
    square.style.display = "block";
    square.style.top = Math.floor(Math.random()*550)+'px';
    square.style.left = Math.floor(Math.random()*750)+'px';
}

createBox();