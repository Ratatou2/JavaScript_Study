function calculateChange(payment, cost) {
    changes = payment - cost
    
    let fif_tho = 0
    let ten_tho = 0
    let five_tho = 0
    let one_tho = 0

    if (changes > 50000) {
        fif_tho += parseInt(changes / 50000)
        changes -= fif_tho * 50000
        if (changes > 10000) {
            ten_tho += parseInt(changes / 10000)
            changes -= ten_tho * 10000
            if (changes > 5000) {
                console.log(changes);
                five_tho += parseInt(changes / 5000)
                changes -= five_tho * 5000
                console.log(changes);
            
            if (changes >= 1000) {
                one_tho += parseInt(changes / 1000)
                changes -= one_tho * 1000
                    
                }
            }
        }
    }


    console.log(`50000원 지폐: ${fif_tho}장`);
    console.log(`10000원 지폐: ${ten_tho}장`);
    console.log(`5000원 지폐: ${five_tho}장`);
    console.log(`1000원 지폐: ${one_tho}장`);
  
  }
  
  // 테스트 코드
 calculateChange(100000, 33000);
  console.log('');
  calculateChange(500000, 378000);





  function calculateChange(payment, cost) {
    // 코드를 작성해 주세요.
    let change = payment - cost; // 거스름돈 총액
  
    function billCounting(amount) {
      const count = Math.floor(change / amount);
      change = change - amount * count;
      return count;
    }
  
    const fiftyCount = billCounting(50000);
    const tenCount = billCounting(10000);
    const fiveCount = billCounting(5000);
    const oneCount = billCounting(1000);
  
    console.log(`50000원 지폐: ${fiftyCount}장`);
    console.log(`10000원 지폐: ${tenCount}장`);
    console.log(`5000원 지폐: ${fiveCount}장`);
    console.log(`1000원 지폐: ${oneCount}장`);
  }
  
  calculateChange(100000, 33000);
  console.log('');
  calculateChange(500000, 378000);