# 주소
> 이더리움 블록체인은 은행 계좌와 같은 계정들로 이루어져 있다  
> 계정은 이더리움 블록체인상의 통화인 _이더_의 잔액을 가진다  
> 각 계정은 은행 계좌 번호와 같은 주소를 가지고 있는데 `이 주소는 특정 계정을 가리키는 고유 식별자`
<pre>
//크립토좀비 팀의 계정 주소
0x0cE446255506E92DF41614C46F1d6df9Cc969183
</pre>

# 매핑
> solidity에서 구조화된 데이터를 저장하는 또다른 방법
<pre>
// 금융 앱용으로, 유저의 계좌 잔액을 보유하는 uint를 저장한다: 
mapping (address => uint) public accountBalance;
// 혹은 userID로 유저 이름을 저장/검색하는 데 매핑을 쓸 수도 있다 
mapping (uint => string) userIdToName;
</pre>

# Msg.sender
> solidity에는 모든 함수에서 이용 가능한 특정 전역 변수들이 있다  
> 그 중의 하나가 현재 함수를 호출한 사람(or Smart Contract)의 주소를 가리키는 msg.sender
> `누가 이 함수를 실행시켰는지 확인할 수 있게 해주는 변수`
<pre>
mapping (address => uint) favoriteNumber;

function setMyNumber(uint _myNumber) public {
  // `msg.sender`에 대해 `_myNumber`가 저장되도록 `favoriteNumber` 매핑을 업데이트한다 `
  favoriteNumber[msg.sender] = _myNumber;
  // ^ 데이터를 저장하는 구문은 배열로 데이터를 저장할 떄와 동일하다 
}

function whatIsMyNumber() public view returns (uint) {`
  // sender의 주소에 저장된 값을 불러온다 
  // sender가 `setMyNumber`을 아직 호출하지 않았다면 반환값은 `0`이 될 것이다
  return favoriteNumber[msg.sender];
}
</pre>

# Require
> 이걸 활성화하게 되면 특정조건이 참이 아닐 때 함수가 에러 메시지를 방생하고 실행을 멈추게 된다
<pre>
function sayHiToVitalik(string _name) public returns (string) {
  // _name이 "Vitalik"인지 비교한다. 참이 아닐 경우 에러 메시지를 발생하고 함수를 벗어난다
  // (참고: 솔리디티는 고유의 스트링 비교 기능을 가지고 있지 않기 때문에 
  // 스트링의 keccak256 해시값을 비교하여 스트링 값이 같은지 판단한다)
  require(keccak256(_name) == keccak256("Vitalik"));
  // 참이면 함수 실행을 진행한다:
  return "Hi!";
}
</pre>

# 상속
> 보다 관리하기 쉽도록 하는 solidity 기능이 바로 contract 상속
<pre>
contract Doge {
  function catchphrase() public returns (string) {
    return "So Wow CryptoDoge";
  }
}

contract BabyDoge is Doge {
  function anotherCatchphrase() public returns (string) {
    return "Such Moon BabyDoge";
  }
}
</pre>

# import
> 다수의 파일이 있고 어떤 파일을 다른 파일로 불러오고 싶을 때
<pre>
import "./someothercontract.sol";

contract newContract is SomeOtherContract {

}
// ./는 동일한 폴더라는 뜻
</pre>

# Storage vs Memory
> 변수를 저장할 수 있는 공간
> * Storage
>     * 블록체인 상에 영구적으로 저장되는 변수
> * Memory
>     * 임시적으로 저장되는 변수
>     * Contract 함수에 대한 외부 호출들이 일어나는 사이에 지워진다

<pre>
contract SandwichFactory {
  struct Sandwich {
    string name;
    string status;
  }

  Sandwich[] sandwiches;

  function eatSandwich(uint _index) public {
    // Sandwich mySandwich = sandwiches[_index];

    // ^ 꽤 간단해 보이나, 솔리디티는 여기서 
    // `storage`나 `memory`를 명시적으로 선언해야 한다는 경고 메시지를 발생한다. 
    // 그러므로 `storage` 키워드를 활용하여 다음과 같이 선언해야 한다:
    Sandwich storage mySandwich = sandwiches[_index];
    // ...이 경우, `mySandwich`는 저장된 `sandwiches[_index]`를 가리키는 포인터이다.
    // 그리고 
    mySandwich.status = "Eaten!";
    // ...이 코드는 블록체인 상에서 `sandwiches[_index]`을 영구적으로 변경한다. 

    // 단순히 복사를 하고자 한다면 `memory`를 이용하면 된다: 
    Sandwich memory anotherSandwich = sandwiches[_index + 1];
    // ...이 경우, `anotherSandwich`는 단순히 메모리에 데이터를 복사하는 것이 된다. 
    // 그리고 
    anotherSandwich.status = "Eaten!";
    // ...이 코드는 임시 변수인 `anotherSandwich`를 변경하는 것으로 
    // `sandwiches[_index + 1]`에는 아무런 영향을 끼치지 않는다. 그러나 다음과 같이 코드를 작성할 수 있다: 
    sandwiches[_index + 1] = anotherSandwich;
    // ...이는 임시 변경한 내용을 블록체인 저장소에 저장하고자 하는 경우이다.
  }
}
</pre>