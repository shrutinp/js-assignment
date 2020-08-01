var a=new Array();

function create(){
//var l=window.prompt("Enter list");
//console.log(l);
//a.push(l);
var idd=document.getElementById("list");

//var listItem = document.createElement('li');
//console.log(listItem);
//var text = document.createTextNode(l);
//listItem.appendChild(text);
//idd.appendChild(listItem);
    
console.log(a);
document.getElementById("list").innerHTML="";

//Enter elements to your list once you are dont just click on cancel
do
{
    l=window.prompt("Enter list");
    a.push(l);
}while(l!=null);
a.pop();//null is popped 
for (let i = 0; i < a.length; i++) {
 document.getElementById("list").innerHTML+=a[i]+"<br>";

}
}

function remove() {
    var re=window.prompt("Enter element to remove");
    for (let i = 0; i < a.length; i++) {

            if(re == a[i])
                //continue;
               console.log("spliceddd"+a.splice(i,1));
        
            console.log(a[i]);
            //document.getElementById("list").innerHTML+=a[i]+"<br>";
        }
        document.getElementById("list").innerHTML="";
       for (let i = 0; i < a.length; i++) {
            //if(re == a[i])
            //continue;
           document.getElementById("list").innerHTML+=a[i]+"<br>";
       }         
}