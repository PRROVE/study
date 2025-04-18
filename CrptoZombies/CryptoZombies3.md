# Payable
<pre>
contract OnlineStore {
  function buySomething() external payable {
    // 함수 실행에 0.001이더가 보내졌는지 확실히 하기 위해 확인:
    require(msg.value == 0.001 ether);
    // 보내졌다면, 함수를 호출한 자에게 디지털 아이템을 전달하기 위한 내용 구성:
    transferThing(msg.sender);
  }
}
</pre>

# 출금
<pre>
//이더를 인출하는 함수
contract GetPaid is Ownable {
  function withdraw() external onlyOwner {
    owner.transfer(this.balance);
    // this는 현재 컨트랙트 자제츨 가리킴 
    // this.balance 이 컨트랙트가 가지고 있는 이더의 총량
  }
}
</pre>

# 난수
<pre>
// 1부터 100 사이의 무작위 숫자를 생성:
uint randNonce = 0;
uint random = uint(keccak256(now, msg.sender, randNonce)) % 100;
randNonce++;
uint random2 = uint(keccak256(now, msg.sender, randNonce)) % 100;
</pre>

# Token
> 블록체인에서 디지털 자산을 의미한다.

## ERC-20 vs ERC-721 차이점 정리

| 항목               | ERC-20 (Fungible Token)                            | ERC-721 (Non-Fungible Token)                       |
|--------------------|-----------------------------------------------------|----------------------------------------------------|
| 토큰 종류          | 대체 가능 토큰 (Fungible)                          | 대체 불가능 토큰 (Non-Fungible, NFT)              |
| 대표적 용도        | 암호화폐, 포인트, 유틸리티 토큰 등                | 디지털 아트, 게임 아이템, 수집품, 티켓 등         |
| 토큰의 고유성      | 모두 동일 (가치와 성질이 동일)                    | 각 토큰이 고유한 ID를 가짐                         |
| 전송 방식          | `transfer(address, amount)`                        | `safeTransferFrom(address, address, tokenId)`     |
| 보유 확인 방식      | `balanceOf(address)` → 수량 반환                   | `ownerOf(tokenId)` → 소유자 주소 반환             |
| 승인 방식          | `approve(spender, amount)`                         | `approve(spender, tokenId)`                        |
| 표준화된 ID        | 없음                                                | 있음 (`uint256 tokenId`)                          |
| 대표 이벤트        | `Transfer`, `Approval`                             | `Transfer`, `Approval`                             |
| 사용성             | 토큰의 수량 중심, 수량 간 계산 가능               | 개별 토큰 중심, 각각의 식별과 관리가 중요         |
| 주요 라이브러리     | OpenZeppelin `ERC20.sol`                           | OpenZeppelin `ERC721.sol`                          |

<pre>
contract ERC721 {
  event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);
  event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);

  function balanceOf(address _owner) public view returns (uint256 _balance);
  function ownerOf(uint256 _tokenId) public view returns (address _owner);
  function transfer(address _to, uint256 _tokenId) public;
  function approve(address _to, uint256 _tokenId) public;
  function takeOwnership(uint256 _tokenId) public;
}
</pre>

# balanceOf & ownerOf
> balanceOf
<pre>
function balanceOf(address _owner) public view returns (uint256 _balance);
//함수는 단순히 address를 받아, 해당 address가 토큰을 얼마나 가지고 있는지 반환
</pre>
> ownerOf
<pre>
function ownerOf(uint256 _tokenId) public view returns (address _owner);
//함수는 토큰 ID(우리의 경우에는 좀비 ID)를 받아, 이를 소유하고 있는 사람의 address를 반환
</pre>