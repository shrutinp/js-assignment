var ss=00,mm=00,hh=00,a;
function init() {
document.getElementById("time").innerHTML=hh+":"+mm+":"+ss;
}
function start() {
    //var hh,mm,ss;
    a=setInterval(()=>
    {
        ss++;
        if(ss>60)
        {
            ss=0;
            mm+=1;
        }
        if(mm>60)
        {
            mm=0;
            hh+=1;
        }
        document.getElementById("time").innerHTML=hh+":"+mm+":"+ss;
    }
    ,1000);
}
function stop() {
    clearInterval(a);
    console.log(a);
}
function reset() {
    hh=0;
    mm=0;
    ss=0;
    document.getElementById("time").innerHTML=hh+":"+mm+":"+ss;
    stop();
}