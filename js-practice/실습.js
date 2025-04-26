let timeid;

document.getElementById("startBtn").addEventListener("click",function(){
    timeid = setInterval(function(){
        console.log("동작 중...");
    },1000);
})

document.getElementById("stopBtn").addEventListener("click",function(){
    clearInterval(timeid);
    document.getElementById("status").innerText ="출력 중";
})
