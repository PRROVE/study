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