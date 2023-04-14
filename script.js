function fibonacci(num) {
// your code here

	 if (num < 2) {
    return num;
  }
  
  let fibPrev = 0;
  let fibCurr = 1;
  
  for (let i = 2; i <= num; i++) {
    let temp = fibPrev;
    fibPrev = fibCurr;
    fibCurr = temp + fibCurr;
  }
  
  return fibCurr;
}

module.exports = fibonacci;
