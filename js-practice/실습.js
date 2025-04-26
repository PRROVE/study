//let timeid;

//document.getElementById("startBtn").addEventListener("click",function(){
//    timeid = setInterval(function(){
//        console.log("동작 중...");
//    },1000);
//})

//document.getElementById("stopBtn").addEventListener("click",function(){
//    clearInterval(timeid);
//    document.getElementById("status").innerText ="출력 중";
//})

// // 구조 분해 할당 연습
// let numbers = [10,20,30];
// let [a,b,c] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);

// // map()연습
// let numbers2 =[1,2,3,4];
// let fMap= numbers2.map(num => num * 2);
// console.log(fMap);

// // filter()연습
// let numbers3 = [5,12,8,130,44];
// let filr  = numbers3.filter(num => num >= 10);
// console.log(filr);

// // 콜백 
// function greet(name) {
//     console.log("안녕하세요, " + name + "님!");
//   }
  
// function processUserInput(a) {
//     let name = "철수";
//     a(name); // 넘겨받은 함수를 호출하면서 name을 전달
// }
  
// processUserInput(greet);
  
// Promise 
// 비동기 작업이 끝난 뒤에 결과를 "약속"하는 객체
// let promise = new Promise(function(resolve, reject) {
//     // 작업이 성공하면
//     resolve("성공!");
  
//     // 작업이 실패하면
//     reject("실패!");
//   });
  
//   promise.then(function(result) {
//     console.log(result); // "성공!" 출력
//   }).catch(function(error) {
//     console.log(error); // 실패했을 때 에러 출력
//   });

// async function work() {
//     let result = await new Promise (function(resolve , reject){
//         setTimeout(()=> resolve("2초 후 작업 완료!"),2000);
//     })
//     console.log(result);
// }
// work();
// let promise = new Promise (function(resolve , reject){
//     setTimeout(()=> resolve("2초 후 작업 완료!"));
// })
// promise.then(result => console.log(result));

// let promise = new Promise(function(resolve,reject){
//     setTimeout(()=> reject("실패했습니다."),1000);
// })
// promise.catch(error=> console.log(error));

// async function fail() {
//     try{
//         let error = await new Promise(function(resolve,reject){
//             setTimeout(()=> reject("실패했습니다."),1000);
//         }) 
//     }catch(e){
//         console.log(e);
//     }    
// }
// fail();

let promise = new Promise(function(resolve, reject){
    let random_num= Math.random(); // 0~1 사이의 랜덤 숫자
    if (random_num >= 0.5) {
        resolve("성공!");
    } else {
        reject("실패!");
    }

})