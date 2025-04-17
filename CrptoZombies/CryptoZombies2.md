# Contract의 불면성
> 1. 이더리움에 Contract를 배포하고 나면, Contract는 변하지 않는다  
>     * `Contract를 수정하거나 업데이트 할 수 없다는 말`
> 2. Contract로 배포한 최초의 코드는 항상, 블록체인에 영구적으로 존재

# OpenZeppelin의 Ownable Contract
<pre>
/**
 * @title Ownable
 * @dev Ownable 컨트랙트는 소유자 주소를 가지고 있으며,
 * 기본적인 권한 제어 기능을 제공함으로써 "사용자 권한" 구현을 간소화합니다.
 */
contract Ownable {
  address public owner;
  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

  /**
   * @dev 생성자: 컨트랙트를 배포한 계정을 최초 소유자로 설정합니다.
   */
  function Ownable() public {
    owner = msg.sender;
  }

  /**
   * @dev 소유자가 아닌 계정이 호출할 경우 예외를 발생시킵니다.
   */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  /**
   * @dev 현재 소유자가 컨트랙트의 소유권을 새로운 주소로 이전할 수 있도록 합니다.
   * @param newOwner 소유권을 넘겨줄 새로운 주소입니다.
   */
  function transferOwnership(address newOwner) public onlyOwner {
    require(newOwner != address(0));
    OwnershipTransferred(owner, newOwner);
    owner = newOwner;
  }
}
// 생성자(Constructor): function Ownable()는 생성자임
// 컨트랙트와 동일한 이름을 가진,생략할 수 있는 특별한 함수이지. 이 함수는 컨트랙트가 생성될 때 딱 한 번만 실행됨

// 함수 제어자(Function Modifier): modifier onlyOwner(). 제어자는 다른 함수들에 대한 접근을 제어하기 위해 사용되는 일종의 유사 함수임
// 보통 함수 실행 전의 요구사항 충족 여부를 확인하는 데에 사용함 onlyOwner의 경우에는 접근을 제한해서 오직 컨트랙트의 소유자만 해당 함수를 실행할 수 있도록 하기 위해 사용될 수 있음 

</pre>

# 함수 제어자
> 함수 제어자는 함수처럼 보이지만, function 키워드 대신 modifier 키워드를 사용  
> 사용자가 함수를 호출하듯이 직접 호출할 수 없음  
> 대신에 함수 정의부 끝에 해당 함수의 작동 방식을 바꾸도록 제어자의 이름을 붙일 수 있음

# Gas 
> ## 정의  
>    * 이더리움 DApp이 사용하는 연료  
>    * Solinity에서는 사용자들이 개발자가 만든 DApp의 함수를 실행할 때 마다 Gas라고 불리는 화폐를 지불
>    * 사용자는 이더를 이용해서 가스를 사기 때문에 DApp함수를 실행하려면 사용자들의 이더를 소모해야함
> ## 필요한 이유
>    * Gas를 사용하게 되면 의미 있는 작업만 하게 만들 수 있음.(공짜가 아니기에)
>    * 자원 사용량에 따라 공정하게 비용 부과
>    * 채굴자 / 검증자 보상(트랜잭션을 블록에 포함시키는 사람이 수고비로 가스를 받는다)
> ## Gas 아끼기
<pre>
struct NormalStruct {
  uint a;
  uint b;
  uint c;
}

struct MiniMe {
  uint32 a;
  uint32 b;
  uint c;
}

// `mini`는 구조체 압축을 했기 때문에 `normal`보다 가스를 조금 사용할 것이네.
NormalStruct normal = NormalStruct(10, 20, 30);
MiniMe mini = MiniMe(10, 20, 30); 
</pre>

# 시간 단위(Time Units)
> Solidity는 시간을 다룰 수 있는 단위계를 기본적으로 제공
> now변수를 쓰면 혅3ㅐ의 유닉스 타임스탬프값을 얻을 수 있음
<pre>
uint lastUpdated;

// `lastUpdated`를 `now`로 설정
function updateTimestamp() public {
  lastUpdated = now;
}

// 마지막으로 `updateTimestamp`가 호출된 뒤 5분이 지났으면 `true`를, 5분이 아직 지나지 않았으면 `false`를 반환
function fiveMinutesHavePassed() public view returns (bool) {
  return (now >= (lastUpdated + 5 minutes));
}
</pre>

# 인수를 가지는 함수제어자
<pre>
// 사용자의 나이를 저장하기 위한 매핑
mapping (uint => uint) public age;

// 사용자가 특정 나이 이상인지 확인하는 제어자
modifier olderThan(uint _age, uint _userId) {
  require (age[_userId] >= _age);
  _;
}

// 차를 운전하기 위햐서는 16살 이상이어야 하네(적어도 미국에서는).
// `olderThan` 제어자를 인수와 함께 호출하려면 이렇게 하면 되네:
function driveCar(uint _userId) public olderThan(16, _userId) {
  // 필요한 함수 내용들
}
</pre>

# view
> view 함수는 사용자에 의해 외부에서 호출되었을 때 Gas를 전혀 소모하지않음
> view 함수가 블록체인 상에서 실제로 어떤 것도 수정하지 않기 때문
> `함수에 view 표시를 하는 것은 web3.js에 이렇게 말하는 것과 같음. "이 함수는 실행할 때 사용자의 로컬 이더리움 노드에 질의만 날리면 되고, 블록체인에 어떤 트랜잭션도 만들지 않음"(트랜잭션은 모든 개별 노드에서 실행되어야 하고, 가스를 소모함)`

# 메모리에 배열 선언하기
<pre>
function getArray() external pure returns(uint[]) {
  // 메모리에 길이 3의 새로운 배열을 생성한다.
  uint[] memory values = new uint[](3);
  // 여기에 특정한 값들을 넣는다.
  values.push(1);
  values.push(2);
  values.push(3);
  // 해당 배열을 반환한다.
  return values;
}
// 가스 소모 측면에서 view(공짜) -> memory -> storage
</pre>
## storage
> solinity에서 비싼 연산 중 하나인 Storage `그중에서도 쓰기연산`
> 진짜 필요한 경우가 아니면 storage에 데이터를 쓰지 않는 것이 좋음

# for 반복문
<pre>
//예시 짝수로 구성된 배열을 만드는 코드
function getEvens() pure external returns(uint[]) {
  uint[] memory evens = new uint[](5);
  // 새로운 배열의 인덱스를 추적하는 변수
  uint counter = 0;
  // for 반복문에서 1부터 10까지 반복함
  for (uint i = 1; i <= 10; i++) {
    // `i`가 짝수라면...
    if (i % 2 == 0) {
      // 배열에 i를 추가함
      evens[counter] = i;
      // `evens`의 다음 빈 인덱스 값으로 counter를 증가시킴
      counter++;
    }
  }
  return evens;
}
</pre>