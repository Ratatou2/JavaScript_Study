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