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

// let promise = new Promise(function(resolve, reject){
//     let random_num= Math.random(); 
//     if (random_num >= 0.5) {
//         resolve("성공!");
//     } else {
//         reject("실패!");
//     }

// });
// async function run() {
//     try{
//         let result = await promise;
//         console.log(result);
//     }
//     catch(e){
//         console.log(e);
//     }
// }

// run();

// let promise = new Promise(function(resolve, reject){
//     let random_num = Math.random();
//     if (random_num >=0.7)
//     {
//         resolve("대성공");
//     }
//     else if(random_num >= 0.3){
//         resolve("성공");
//     }
//     else
//     {
//         reject("실패");
//     }
// });

// async function run() {  
//     try{
//         let result = await promise;
//         console.log(result);
//     }    
//     catch(error)
//     {
//         console.log(error);
//     }
// }
// run();

// async function getData() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getData();

// fetch("https://jsonplaceholder.typicode.com/posts/2")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));


// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method : "POST",
//     headers: {"Content-Type" : "application/json"},
//     body: JSON.stringify({
//       title:"POST 요청 연습",
//       body:"지금 우리는 POST 요청을 배우고 있다!",
//       userId:123
//     })
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// async function run(){
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts",{
//             method : "POST",
//             headers: {"Content-Type" : "application/json"},
//             body: JSON.stringify({
//                     title : "POST 요청연습",
//                     body : "지금 우리는 POST 요청을 배우고 있다!",
//                     userId: 123
//                 })
//         });
//         let data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
    
// }
// run();

// async function respons(){
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts",{
//             method : "POST",
//             headers:{"Content-Type":"application/json"},
//             body: JSON.stringify({  
//                 title: "심화 문제 작성",
//                 body: "POST 요청을 자유자재로 다룬다!",
//                 userId: 456})
//         });
//         let data = await response.json();
//         console.log(data.id);
//     }
//     catch(e){
//         console.log(e);
//     }
// }
// respons();

// async function send(){
//     try{
//         let respsonse = await fetch("https://jsonplaceholder.typicode.com/posts",{
//             method : "POST",
//             headers: {"Content-Type":"application/json"},
//             body:JSON.stringify({
//                 title: "HTML 연동 심화 문제",
//                 body: "버튼 클릭으로 POST 요청을 보냈다!",
//                 userId: 789
//             })
//         });
//         let data = await respsonse.json();
//         document.getElementById("result").innerText = data.title;

//     }catch(e){
//         console.log(e);
//     }
// }
// document.getElementById("sendBtn").addEventListener("click", send);

// async function send(){
//     try{
//         let response_1 = await fetch("https://jsonplaceholder.typicode.com/posts",{
//             method : "POST",
//             headers: {"Content-Type" : "application/json"},
//             body: JSON.stringify({
//                 title: "첫 번째 요청입니다",
//                 body: "첫 번째 요청 내용입니다",
//                 userId: 1
//             })
//         });
//         let data_1 = await response_1.json();
//         console.log(data_1.title);

//         let response_2 = await fetch("https://jsonplaceholder.typicode.com/posts",{
//             method : "POST",
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify({
//                 title: "두 번째 요청입니다",
//                 body: "두 번째 요청 내용입니다",
//                 userId: 2
//             })
//         });
//         let data_2 = await response_2.json();
//         console.log(data_2.title);
//     }catch(error){
//         console.log(error);
//     }
// }
// send();

// async function PostData(title, body ,userId) {
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts",{
//             method : "POST",
//             headers: {"Content-Type": "application/json"},
//             body:JSON.stringify({title,body,userId})
    
//         });
//         if(!response.ok){
//             throw new Error(`요청실패! 상태 코드: ${response.status}`);
//         }
    
//         let data = await response.json();
//         return data;
//     }
//     catch(error){
//         console.log("PostData 함수 내부 에러:",error.messgae);
//     }
// }

// async function send(){
//     try{
//         const data = await Promise.all([
//             PostData("첫 번째 요청입니다","첫 번재 요청 내용입니다.",1),
//             PostData("두 번째 요청입니다", "두 번째 요청 내용입니다", 2)
//         ])
        
//         data.forEach((b, index)=> {
//             console.log(`${index + 1}번째 요청 결과:`, b.title);
//         })
//         // let data1 = await PostData("첫 번째 요청입니다","첫 번재 요청 내용입니다.",1);
//         // console.log("첫 번째 요청 결과:",data1.title);
//         // let data2 = await PostData("두 번째 요청입니다", "두 번째 요청 내용입니다", 2);
//         // console.log("두 번째 요청 결과:", data2.title);

//     } catch (error) {
//         console.log("send 함수 에러:", error.message);
//     }
// }

// send();


document.getElementById("fetchBtn").addEventListener("click", async function() {
    try {
        // 1. 외부 API로 GET 요청
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // 2. 응답을 JSON 데이터로 변환
        const users = await response.json();

        // 3. ul 요소 가져오기
        const userList = document.getElementById("userList");
        userList.innerHTML = ""; // (기존 리스트 비우기)

        // 4. 받아온 사용자 중 5명만 출력
        users.slice(0, 5).forEach(user => {
            const li = document.createElement("li"); // li 태그 생성
            li.innerText = user.name;               // li에 이름 넣기
            userList.appendChild(li);               // ul에 추가하기
        });

    } catch (error) {
        // 5. 에러 발생 시
        console.log("에러 발생:", error.message);
    }
});


async function send() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method : "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({
                "title": "연습 문제입니다",
                "body": "지금은 POST 요청을 실습 중입니다.",
                "userId": 1
            })
        });
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log("잘못된 데이터 입니다.",error);
    }
    
}