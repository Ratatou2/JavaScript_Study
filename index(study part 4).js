// 구구단
function multiply_table(){
  for (let i = 1; i < 10; i++){
    for (let j = 1; j < 10; j ++){
      console.log(`${i} * ${j} = ${i * j}`)
    }
  }
}

multiply_table()


// Fibonacci

let a = 0
let b = 1

function fibo(){
  for (let i = 1; i <= 50; i++){
    //if (i === 1) {console.log(i)}
    console.log(b)  

    let temp = a
    a = b
    b += temp
  }
}

fibo()


let myVoca = {
  function: '함수',
  variable: '변수',
  constant: '상수',
  local: '지역의',
  global: '전반적인'
};

console.log(myVoca);
console.log(myVoca.local);
console.log(myVoca.constant);
console.log(myVoca.function);

console.log('mt?')



let myVoca = {
	function: '함수',
	variable: '변수',
	constant: '상수',
	local: '지역의',
	global: '전반적인',
};

// 1. 이미 외운 단어 3개를 삭제해 주세요.
delete myVoca.function
delete myVoca.constant
delete myVoca.local


console.log(myVoca);
console.log(myVoca.constant);


// 2. 오늘 외울 단어 4개를 추가해 주세요.
myVoca.extend = '확장하다'
myVoca.export = '내보내다'
myVoca.import = '불러오다'
myVoca['default value'] = '기본값'


console.log(myVoca);
console.log(myVoca.export);


// 3. default value의 뜻을 출력해 주세요.
console.log(myVoca['default value'])




// 응용
let myVoca = {
	addVoca: function(word, mean){
		return myVoca[word] = mean
	},
	deleteVoca: function(word) {
		return delete myVoca[word]
	},
	printVoca: function(word){
		return console.log(`"${word}"의 뜻은 "${myVoca[word]}"입니다.`);
	}
 };

  
  // addVoca메소드 테스트 코드
  myVoca.addVoca('parameter', '매개 변수');
  myVoca.addVoca('element', '요소');w
  myVoca.addVoca('property', '속성');
  console.log(myVoca);
  
  // deleteVoca메소드 테스트 코드
  myVoca.deleteVoca('parameter');
  myVoca.deleteVoca('element');
  console.log(myVoca);
  
  // printVoca메소드 테스트 코드
  myVoca.printVoca('property');




  let hyesoonScore = {
    '데이터 모델링의 이해': 10,
    '데이터 모델과 성능': 8,
    'SQL 기본': 22,
    'SQL 활용': 18,
    'SQL 최적화 기본 원리': 20,
  };
  
  let minsoonScore = {
    '데이터 모델링의 이해': 14,
    '데이터 모델과 성능': 8,
    'SQL 기본': 12,
    'SQL 활용': 4,
    'SQL 최적화 기본 원리': 16,
  };
  
  function passChecker(scoreObject) {
    ans = 0 
    for (subject in scoreObject) {
      ans += scoreObject[subject]
    }
    if (ans >= 60){
      console.log('축하합니다! 합격입니다!')
    }
    else{
      console.log('아쉽지만 불합격입니다..');
    }
  }
  
  passChecker(hyesoonScore);
  passChecker(minsoonScore);


// 두 날짜간의 차이값 구하기
let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

function workDayCalc(startDate) {
	let diff_day = (today - jaeSangStart) / (1000 * 60 * 60 * 24) + 1
	
	console.log(`오늘은 입사한 지 ${diff_day}일째 되는 날 입니다.`);
}

workDayCalc(jaeSangStart);


// 모범답안
let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

function workDayCalc(startDate) {
  // 여기에 코드를 작성해 주세요.
  let timeDiff = today.getTime() - startDate.getTime();
  let dayDiff = timeDiff / 1000 / 60 / 60 / 24;

  console.log(`오늘은 입사한 지 ${dayDiff + 1}일째 되는 날 입니다.`);
}

workDayCalc(jaeSangStart);



// 배열 요소 모두 print 
let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

for (subject in dataType){
	console.log(dataType[subject]);
}



// 섭씨 화씨로 바꾸기(for in 별로 추천 안하는 방식이라고 함)
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

for (subject in celsiusTemps){
	F = (celsiusTemps[subject] * 9 / 5) + 32
	fahrenheitTemps[subject] = F
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);


// 모범 답안
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

for (let i = 0; i < celsiusTemps.length; i++) {
  fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5) + 32
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);






// splice 연습
let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요.
fruits.splice(1, 1, '사과', '청포도')


// fruits 배열의 첫 번째 요소를 삭제해 주세요.
fruits.splice(0, 1)


// ages 배열에 마지막 요소를 삭제해 주세요.
ages.splice(-1, 1)


// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요.
ages.splice(2, 2, 26, 28)



// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요.
numbers.splice(0, 0, 1, 2, 3, 5, 8, 9)



// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요.
i = 0
while (i < numbers.length){
	if (numbers[i] % 2 == 0){
		i++
	}
	else {
		numbers.splice(i, 1)
	}
}


// 테스트 코드
console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
console.log(numbers);




// 배열내 갯수 카운트
// 투표 결과 리스트
let votes = [
	'이재식', '이재식', '이규하', '이규하', '이규하',
	'이재식', '이재식', '이규하', '이규하', '이재식',
	'이규하', '이규하', '이규하', '이규하', '이재식',
	'이재식', '이규하', '이재식', '이재식', '이재식',
	'이재식', '이재식', '이규하', '이규하', '이규하',
	'이규하', '이규하', '이재식', '이규하', '이규하',
	'이규하', '이규하', '이재식', '이규하', '이규하',
	'이규하', '이재식', '이재식', '이재식', '이규하',
  ];
  
  // 후보별 득표수 객체
let voteCounter = {}


// votes 배열을 이용해서 voteCounter 객체를 정리하기
for (let name of votes) {
	
	if (!(name in voteCounter)) {
		voteCounter[name] = 1	
	} else {
		voteCounter[name] += 1
	}
}
  
  // 후보별 득표수 출력
  console.log(voteCounter);



// 다차원 배열
  let groups = [
    ['영준', '캡틴'], 
    ['태순', '우재'],
    ['재훈', '지웅'],
    ['윤형', '동욱'],
    ['규식', '소원'],
  ];
  
  let teams = [
    [],
    [],
  ];
  
  for (team of groups) {
    teams[0].push(team[0])
    teams[1].push(team[1])
  }
  
  
  // 테스트 코드
  console.log(teams[0]);
  console.log(teams[1]);




  // 세금 계산하기
  function interestCalculator(rate, money, month) {
	interest = money * month * (month + 1) / 2 * rate/12

	console.log(interest.toFixed(0))
}



// 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
interestCalculator(0.043, 800000, 24);

// 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우
interestCalculator(0.043, 600000, 24);