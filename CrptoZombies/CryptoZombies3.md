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