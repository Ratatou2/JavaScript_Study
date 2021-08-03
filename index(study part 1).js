console.log(typeof 12412)

let num = 233

console.log(num)

let test = 124
console.log(test)
console.log(Number(test))


let year = 2021
let month = 12
let day = 18
console.log(`믱믱믱 ${year} 믱믱믱 ${month} amlamldmladml ${day}`)


function makeTwice(num) {
    return num * num
}

console.log(makeTwice(year))
console.log(2 ** 2)


function calcWage(name, time, wage) {
    let total = time * wage;
  
    console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`); // 코드를 채워 넣으세요.
  }
  
  calcWage('김윤식', 208, 11340);
  calcWage('성규재', 175, 12160);
  calcWage('손태웅', 161, 13070);
  calcWage('허우선', 222, 10980);



  // 숫자형과 문자열 재료
let material1 = 3;
let material2 = '3';
let material3 = 10;
let material4 = '4';
let material5 = 4;

// 연산 결과
let result1;
let result2;

// 연산을 통해 result1에 문자열 '34'를, result2에 숫자형 34를 만들어 넣어주세요.
result1 = material1 + material4
result2 = material1 * material3 + material5

// 테스트 코드
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);



function logParticipant(name) {
    console.log(`${name}(이)가 대화에 참여했습니다.`)
}

// 테스트 코드
logParticipant('동수');
logParticipant('윤하');
logParticipant('재준');
logParticipant('동훈');
logParticipant('영희');
logParticipant('신욱');


function expressMultiplication(num1, num2) {
  console.log(`${num1} * ${num2} = ${num1 * num2}`)
}

// 테스트 코드
expressMultiplication(3, 4);
expressMultiplication(3, 2);
expressMultiplication(7, 5);
expressMultiplication(8, 9);
expressMultiplication(5, 5);
expressMultiplication(9, 9);


function calculateRectangleArea(width, height) {
  return width * height
}


// 테스트 코드
let area1 = calculateRectangleArea(3, 4); // 가로 3, 세로 4인 직사각형의 넓이 계산
let area2 = calculateRectangleArea(5, 8); // 가로 5, 세로 8인 직사각형의 넓이 계산
let area3 = calculateRectangleArea(7, 2); // 가로 7, 세로 2인 직사각형의 넓이 계산

console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);


function orderSetMenu(sandwich, drink='스프라이트') {
  console.log(`주문하신 ${sandwich}, ${drink} 세트메뉴 나왔습니다!`)
}


// 테스트 코드
orderSetMenu('코드웨잇 클럽');
orderSetMenu('터키베이컨 아보카도', '코카콜라');
orderSetMenu('코드웨잇 멜트');
orderSetMenu('이탈리안 비엠티', '닥터페퍼');
orderSetMenu('에그마요', '환타 오렌지');


// 아래에 adultTag, teenagerTag, errorTag, transferTag라는 변수들을 작성해 주세요.
const adultTag = '삑!'
const teenagerTag = '삑삑!'
const errorTag = '삑삑삑!'
const transferTag = '환승입니다.'

// 아래에 tagCase파라미터를 가지는 tagNotification 함수를 작성해 주세요.
function tagNotification(type) {
  console.log(`${type}`)
}


// 테스트 코드
tagNotification(adultTag);
tagNotification(teenagerTag);
tagNotification(transferTag);
tagNotification(errorTag);
tagNotification(adultTag);


// 파라미터 height을 활용하는 checkHeight 함수를 완성하세요.
function checkHeight(height) {
	if (height < 140){
    console.log('탑승이 불가능합니다.')
  }
  else console.log('탑승이 가능합니다')
}

// 테스트 코드
checkHeight(140);
checkHeight(135);
checkHeight(170);


function printGrade(midtermScore, finalScore){
	let totalScore = midtermScore + finalScore;
  if (totalScore >= 90){console.log('A')}
  else if (totalScore >= 80){console.log('B')}
  else if (totalScore >= 70){console.log('C')}
  else if (totalScore >= 60){console.log('D')}
  else console.log('F')
}

// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);


let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

function whatShouldICallYou(yourAge, yourGender) {
  if (myAge === yourAge){return callFriend}
  else if (myAge > yourAge) {
    if (yourGender === 'male'){return callYoungerBrother}
    else if (yourGender === 'female'){ return callYoungerSister}
  }
  else if (myAge < yourAge) {
    if (yourGender === 'male'){return callOlderBrother}
    else if (yourGender === 'female'){ return callOlderSister}
  }
}

// 테스트 코드
let result11 = whatShouldICallYou(25, 'female');
let result22 = whatShouldICallYou(20, 'male');
let result33 = whatShouldICallYou(26, 'female');
let result44 = whatShouldICallYou(30, 'male');
let result55 = whatShouldICallYou(31, 'female');

console.log(result11);
console.log(result22);
console.log(result33);
console.log(result44);
console.log(result55);