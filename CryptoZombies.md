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
<pre>
string greeting = "What's up dog";

function sayHello() public returns (string) {
  return greeting;
}
// return을 사용하여 반환하고자 하는 종류 선언
</pre>

### 함수제어자

<pre>
function sayHello() public view returns (string) {}
// view 함수는 데이터를 보기만 하고 변경하지 않는다는 뜻
</pre>
<pre>
function _multiply(uint a, uint b) private pure returns (uint) {
  return a * b;
}
// pure 앱에서 어떤 데이터도 접근하지 않는 것을 의미
// 사칙연산을 할 경우에 사용
</pre>

## Keccak256과 형 변환
> 이더리움은 SHA3의 한 버전인 keccak256를 내장 해시 함수로 가지고 있지. 해시 함수는 기본적으로 입력 스트링을 랜덤 256비트 16진수로 매핑  
> `Keccak- 원래 개발된 해시 함수 이름` `SHA3- Keccak을 바탕으로 NIST가 정식 표준화된 버전`  
> `Keccak256- Keccak이 256비트 버전` `매핑- 입력과 출력을 이어주는 관계`
<pre>
예시 의사 난수 발생기

//6e91ec6b618bb462a4a6ee5aa2cb0e9cf30f7a052bb467b0ba58b8748c00d2e5
keccak256("aaaab");
//b1f078126895a1424524de5321b339ab00408010b7cf0e6ed451514981e58aa9
keccak256("aaaac");

// b- > c 한글자만 바꼇는데 해쉬값이 바뀜
</pre>

### 형 변환
<pre>
uint8 a = 5;
uint b = 6;
// a * b가 uint8이 아닌 uint를 반환하기 때문에 에러 메시지가 난다:
uint8 c = a * b; 
// b를 uint8으로 형 변환해서 코드가 제대로 작동하도록 해야 한다:
uint8 c = a * uint8(b); 
</pre>

## 이벤트
> 나의 컨트랙트가 블록체인 상에서 자네 앱의 사용자 단에서 무언가 액션이 발생했을 때 의사소통하는 방법
<pre>
// 이벤트를 선언한다
event IntegersAdded(uint x, uint y, uint result);

function add(uint _x, uint _y) public {
  uint result = _x + _y;
  // 이벤트를 실행하여 앱에게 add 함수가 실행되었음을 알린다:
  IntegersAdded(_x, _y, result);
  return result;
}
</pre>

---

# Web3.js
> 이더리움은 Web3.js라고하는 자바스크립트 라이브러리를 가지고 있음  
> `블록체인서 데이터를 읽고 쓰고 싶을때`  
> `smart contract에 함수를 호출하거나 이벤트를 받을때`  
> js에서 이러한 것들을 가능하게 해주는 Web3.js  
 * 종류  
     * Web1- 읽기(정적 웹사이트)
     * web2- 읽기 + 쓰기(페이스북, 유튜브 같은 플랫폼) 
     * web3- 읽기 + 쓰기 + 소유(블록체인 기반, 탈중앙화된 웹)  
 * 할 수 있는 일  
     * 블록 정보 가져오기- 	블록 번호, 트랜잭션, 해시 등
     * smart contract 호출- 	함수 실행 (read/write)
     * 이더 전송- 계좌 간 ETH 송금
     * event 리스닝- 컨트랙트에서 emit 한 이벤트 감지
     * 계정정보- 사용자의 지갑 주소 확인
     * 서명- 사용자의 키로 메시지 서명 