var start= new Date().getTime();
var square = document.createElement("div");
var text = document.createElement("p");
var score=0;
function createBox(){
    var box = document.createElement("div");
    box.setAttribute("id","box"); 
    square.setAttribute("id","square");
    text.setAttribute("id","text"); 
    box.appendChild(square);
    square.innerHTML = '<font size="5">Click Here!</font>';
    document.body.appendChild(box);
    document.body.appendChild(text);
    square.addEventListener('click', handleClick);
}

function handleClick(){
    var end = new Date().getTime();
    var diff = end-start;
    var response = diff/1000;
    if(response < 2.5){
        score++;
        text.innerHTML = "Response time is " + response;
        start  = new Date().getTime();
        square.style.display = "none";
        setTimeout(changeAttr,1500);
    }
    else {
        text.innerHTML = "Your Response time is more than 2.5 i.e "+response+"<br>"+" Final Score:"+ score;
        square.removeEventListener('click', handleClick);
    }
}

function changeAttr(){
    square.style.display = "block";
    square.style.top = Math.floor(Math.random()*540) +'px';
    square.style.left = Math.floor(Math.random()*740) +'px';
}

createBox();