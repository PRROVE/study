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
> Solidity는 시간을 다룰 수 있는 단위계를 기본적으로 제공.