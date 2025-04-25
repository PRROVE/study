document.getElementById("printBtn").addEventListener("click",function(){
    let hobby = document.getElementById("hobbyInput").value;
    document.getElementById("hobbyOutput").innerText = "당신의 취미는 " + hobby + "이군요!";
})

