# 크립토 좀비 
> [https://cryptozombies.io/ko/course](https://cryptozombies.io/ko/course)  
> - Crypto는 `암호화폐` or `블록체인`을 의미하는 용어  
> - Zombies는 크립토좀비 게임 내에서 다루는 주제로, 게임 형식으로 스마트 계약을 배우는 요소  
> - Solidity는 스마트 계약을 작성하기 위한언어

## 좀비 DNA
> 16자리 정수로 DNA를 정의 `8356281049284737`
> * 실제 DNA처럼 각 부분은 좀비가 가진 개별 특성과 매핑됨  
>    * Mapping은 특정 키(숫자, 문자열 등)와 값(특성, 객체 등)을 연결하는 연관 배열 또는 해시맵  
>         * 연관 배열 - `키-값 쌍으로 데이터를 저장하는 자료구조, 파이썬의 dictnary같음`  
>         * 해시맵 - `연관 배열을 해시 함수를 사용하여 키를 해시값으로 변환, 그 해시값을 이용해 데이터를 저장하는 방식`  

## Contract
> Solidity 코드는 Contract안에 싸여있음 `Smart Contract는 스마트계약으로 블록체인 기반으로 되어있는 모든계약이행을 뜻한다.`
<pre>
pragma solidity ^0.4.19;

contract HelloWorld {

} 
`contract는 smart contract를 정의하는 키워드. HelloWorld라는 이름을 가진 계약. {} 안에는 변수나 함수가 들어가게 된다.`
`pragma solidity ^0.4.19 = 솔리디티 0.4.19 버전을 선언이라는 뜻`
</pre>


## 상태 변수 & 정수
> 상태변수는 contract 저장소에 영구적으로 저장된다. 즉, 이더리움 블록체인에 기록 `DB에서 데이터를 쓰는것과 동일`
<pre>contract Example {

  uint myUnsignedInteger = 100;

  }
  `myUnsignedInteger 변수 영구적으로 저장`
</pre>

### unit
> uint자료형 = 부호없는 정수,값이 음수가 아니어야 한다는 의미
> * 종류
>     1. unin8 = `8비트 부호없는 정수`
>     2. unin16 = `16비트 부호없는 정수`
>     2. unin32 = `32비트 부호없는 정수`
>     2. unin256 = `256비트 부호없는 정수`

## 수학연산
> * 덧셈 = `x+y`
> * 뺄셈 = `x-y`
> * 몫나눗셈 = `x/y`
> * 나머지 나눗셈= `x%y`
> * 곱셈= `x*y`
> * 제곱= `x**2`


### 구조체
> 여러 개의 데이터를 하나로 묶을 수 있는 방법
<pre>struct Person {
  uint age;
  string name;
}</pre>

### 배열
> 여러 명의 사람 정보를 저장하기 위한 모음집
<pre>
// 2개의 원소를 담을 수 있는 고정 길이의 배열:
uint[2] fixedArray;

// 또다른 고정 배열으로 5개의 스트링을 담을 수 있다:
string[5] stringArray;

// 동적 배열은 고정된 크기가 없으며 계속 크기가 커질 수 있다:
uint[] dynamicArray;

// 이는 동적 배열로, 원소를 계속 추가할 수 있다.
Person[] people; 
</pre>

### public
> solidity는 public배열을 위해 gitter 메소드를 자동적으로 생성  
> `Getter = 데이터를 읽기 위한 함수, Method = 객체의 동작을 정의하는 함수`
> `Getter Method = 객체의 속성 값을 읽어오는 동작을 정의하는 함수, 즉 외부에서 안전하게 가져오는 역할을 하는 메소드`

## 함수선언
> 함수 인자명을 언더스코어(_)로 시작해서 전역 변수와 구별하는 것이 관례이네 (의무는 아님)
<pre>
function eatHamburgers(string _name, uint _amount) {

}</pre>

## 구조체와 배열 활용하기
<pre>
// 새로운 사람을 생성한다:
Person satoshi = Person(172, "Satoshi");

// 이 사람을 배열에 추가한다:
people.push(satoshi);

//한 줄로 표현
people.push(Person(16, "Vitalik"));
</pre>
<pre>
array.push()는 무언가를 배열의 끝에 추가해서 모든 원소가 순서를 유지하도록 한다

// numbers 배열은 [5, 10, 15]과 같다.
uint[] numbers;
numbers.push(5);
numbers.push(10);
numbers.push(15);
</pre>

## Private / Public 함수
> * Private의 필요성  
> solidity에서 함수는 기본적으로 Public으로 선언  
> `누구나 내 컨트랙트의 함수를 호출하고 코드를 실행 할 수있다는 의미`  
> `이는 즉, 언제든지 내 컨트랙트를 공격에 취약하게 만들 수 있다`
* Private 함수 선언 방법
<pre>
uint[] numbers;

function _addToArray(uint _number) private {
  numbers.push(_number);
}
// private는 컨트랙트 내의 다른 함수들만이 이 함수를 호출하여 numbers 배열로 무언가를 추가할 수 있다는 것을 의미
</pre>

## 함수 더 알아보기

### 반환값