const dmode = document.getElementById('dark');
dmode.onclick = function changeColor(){
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';
   
}// attr.classList.toggle('blue');
//dmode.classList.toggle('black')


const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
    
}
var n=prompt("Enter name");

document.getElementById("aa").innerHTML+=n+"\n Welcome to our page";

// clock();

setInterval(clock,1000);
