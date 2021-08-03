// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요.
function checkPrice(grade) {
	switch(grade) {
    case 'R':
      console.log(`R석은 ${RPrice}만원 입니다.`)
      break
    case 'VIP':
      console.log(`VIP석은 ${VIPPrice}만원 입니다.`)
      break
    case 'S':
      console.log(`S석은 ${SPrice}만원 입니다.`)
      break
    case 'A':
      console.log(`A석은 ${APrice}만원 입니다.`)
      break
    default:
      console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.')
  }
}

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');


for(let i = 1; i < 101; i++){
  if (i % 2 == 0){  // == 보다, ===가 더 좋다
    console.log(i)
  }
}


function printTriangle(height) {
  let printing = ''  //let으로 선언해주는게 좋음

	for (let i = 1; i <= height; i++){
    printing += '*'
    console.log(printing)
  }
  
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);


count = 1
while (count <= 100){
  if (count % 2 != 0) {
    console.log(count)
  }
  count ++
}



const N = 180;

let num = 1
let count = 0
while (num <= 180){
  if (N % num == 0){
    console.log(num)
    count ++
  }
  num ++
}

console.log(`${N}의 약수는 총 ${count}개입니다.`)