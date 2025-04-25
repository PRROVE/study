document.getElementById("greetBtn").addEventListener("click",function(){
    let name = document.getElementById("nameInput").value;
    document.getElementById("output").innerText = "안녕하세요"  + name + "님";
})