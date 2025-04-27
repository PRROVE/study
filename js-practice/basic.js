var result = 10 + 20;

console.log(result)

//변수를 만들기 위해서는 var, let, const가 필요하다 var는 재할당과 재선언이 가능하며 let은 재선언만 가능하고 const는 절대적으로 바뀌지 않는다.
//변수를 만들면 undefined가 기본형이며 정의되지 않은 None 같은 느낌이지만 js에서는 undefined또한 자료형으로 쳐준다.
// data type(원시): numbertype stringtype booleantype undefiendtype nulltype symboltype 

console.log(score); // undefined

var score;
score=80;

console.log(score); //80

//c언어에서는 undefined가 아닌 실행되지않는 js의 특징중 하나로 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 변수 호이스팅이다.

var string;
string ='문자열'; //작은따옴표
string ="문자열"; //큰따옴표
string =`문자열`; //백틱

var template = `<ul>
    <li><a href="#">Home</a></li>
</ul>;`

console.log(template);
//템플릿 리터널 내에서는 이스케이프 시퀸스를 사용하지않고도 줄바꿈이 허용되며, 모든 공백도 있는 그대로 적용된다.
//템플릿 리터널 -> ES6부터 사용하는 새로운 문자열 표기법이 도입

var first ='Ung-mo';
var last = 'Lee';

console.log('My name is '+ first +' '+last+'.');
//python 처럼 문자열에 +해서 출력 가능

//조건문
if (age >= 19) {
  console.log("성인입니다.");
  // 조건이 참일 때 실행할 코드
} else {
  console.log("미성년자입니다.");
}

//반복문
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  
//함수  
function sayHello() {
  console.log("안녕하세요!");
}

sayHello(); // 함수 실행
 
//리턴
function add(a, b) {
    return a + b;
  }
  
  let result = add(3, 5); // 👉 8
  console.log(result);

//배열
let fruits = ["사과", "바나나", "포도"];

console.log(fruits[0]); // 👉 "사과"
console.log(fruits[2]); // 👉 "포도"

fruits.push("오렌지");     // 뒤에 추가
fruits.pop();              // 마지막 제거

//객체
let person = {
    name: "철수",
    age: 25,
    isStudent: true
  };

console.log(person.name);      // 👉 "철수"
console.log(person["age"]);    // 👉 25

// 스코프 
// 스코프 종류 | 설명
// 전역 스코프(Global) | 함수 밖에서 선언된 변수 → 어디서든 사용 가능
// 지역 스코프(Local) | 함수 안에서 선언된 변수 → 그 함수 안에서만 사용 가능

let globalVar = "전역";

function test() {
  let localVar = "지역";
  console.log(globalVar); // 가능
  console.log(localVar);  // 가능
}

console.log(globalVar); // 가능
console.log(localVar);  // ❌ 에러! 함수 밖에서는 localVar 못 씀

// 호이스팅
var x;          // 먼저 선언만 끌어올림
console.log(x); // undefined
x = 5;          // 값은 나중에 할당됨

//비동기 & 동기

// 동기(수선대로 하나씩 처리 하는방식)
// - 한 작업이 끝나야 다음 작업을 시작할 수 있어 
// - 앞에 있는 코드가 끝나기 전까지는 절대 뒤에 있는 코드 실행 안함
console.log("1번 작업"); // 1번 작업
console.log("2번 작업"); // 2번 작업
console.log("3번 작업"); // 3번 작업
// 1번작업 -> 2번작업 -> 3번작업

// 비동기(먼저 끝나는 작업부터 처리)
// - 어떤 작업은 기다리지 않고, 다른 작업부터 처리할 수 있어
// - 시간이 오래 걸리는 작업(서버 통신, 파일 다운로드)을 기다리지 않고 나머지 코드를 계속 실행

// 처리해야하는 이유
// - 웹 페이지가 멈추지 않게 하려고
// - 만약 서버에 데이터를 요청했는데, 응답이 5초 걸린다고 해봐
// - 동기 방식이라면 -> 5초 동안 웹페이지 멈춰서 아무것도 못함 (순차적인 방식이라)
// - 비동기 방식이라면 -> 요청 보내놓고, 사용자는 계속 다른 작업 가능(잠깐 미루는게 가능하기 때문)
// 사용자 경험(UX)향상
// - 버튼을 눌러도 바로 반응
// - 스크롤도 매끄럽게
// - 애니메이션이나 알림도 끊김없이 처리 가능
// => 비동기는 웹을 "빠르고 부드럽게" 만들어준다/
console.log("1번 작업"); 

setTimeout(function() {
  console.log("2번 작업 (3초 후)");
}, 3000);

console.log("3번 작업");
// 1번작업 -> 3번작업 -> 2번작업(3초뒤에 출력)

// 화살표 함수
// 기존 함수 선언보다 훨씬 간단하게 짧게 쓸 수 있는 방법
const add = (a, b) => {
  return a + b;
}

//더 간단하게
const add = (a, b) => a + b;

// 구조 분해 할당(Desturcturing)
// 객체나 배열에서 필요한 값을 한번에 뽑아내는 문법
let arr = [1, 2, 3];
let [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// spread 와 Rest
// spread 배열이나 객체를 펼칠 때 사용
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];

console.log(newArr); 
// [1, 2, 3, 4, 5]

// Rest 나머지 값들을 모아서 배열로 만듦
let [a, ...rest] = [1, 2, 3, 4];

console.log(a);    // 1
console.log(rest); // [2, 3, 4]

//map & filter
// map 배열의 모든 요소를 변형해서 새로운 배열 만들기
let numbers = [1, 2, 3];

let doubled = numbers.map(num => num * 2);

console.log(doubled); 
// [2, 4, 6]

// filter 배열에서 조건을 만족하는 요소만 골라서 새로운 배열 만들기
let numbers = [1, 2, 3, 4, 5];

let evens = numbers.filter(num => num % 2 === 0);

console.log(evens); 
// [2, 4]

// 콜백 함수
function greet(name) {
    console.log("안녕하세요, " + name + "님!");
  }
  
function processUserInput(a) {
    let name = "철수";
    a(name); // 넘겨받은 함수를 호출하면서 name을 전달
}
  
processUserInput(greet);
  
// Promise 
// 비동기 작업이 끝난 뒤에 결과를 "약속"하는 객체
let promise = new Promise(function(resolve, reject) {
  // 작업이 성공하면
  resolve("성공!");

  // 작업이 실패하면
  reject("실패!");
});

promise.then(function(result) {
  console.log(result); // "성공!" 출력
}).catch(function(error) {
  console.log(error); // 실패했을 때 에러 출력
});

// async & await 
//async 키워드를 함수 앞에 붙인다.
//await 키워드를 비동기 작업 앞에 붙인다.
async function work() {
  let result = await new Promise((resolve) => {
    setTimeout(() => resolve("작업 완료!"), 1000);
  });

  console.log(result); 
}

work();

// fetch()로 서버데이터 불러오기
// "fetch()"는 서버에 요청(Request)을 보내고, 응답(Response)을 받아오는 함수

//기본 형태
fetch(요청할_주소)
  .then(response => response.json()) // 응답을 JSON 데이터로 변환
  .then(data => console.log(data))    // 변환된 데이터 출력
  .catch(error => console.log(error)); // 에러 처리

// POST는 서버로 "새로운 데이터"를 보낼 때 사용하는 HTTP 메소드
//기본 형태
fetch(요청할_주소, {
  method: "POST",            // 1. 요청 방식을 POST로
  headers: {                 // 2. 보낼 데이터의 타입을 명시
    "Content-Type": "application/json"
  },
  body: JSON.stringify({     // 3. 보낼 데이터 (JSON 문자열로 변환)
    key1: "value1",
    key2: "value2"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

