function primeNumber(a) {
    let n = 1000
    if (typeof a === "number" && ! isNaN(a)){
      if (a >= n || a === 0 || a === 1) {
        return `Введенные данные ${typeof a} ${a} неверны`
      } else {
        for (let i = 2; i < a; i++) { 
          if (a % i === 0) { 
            return `Число ${a} не является простым`
          } else {
            return `Число ${a} является простым`
          }
        }
      }
    }
  }
  
  console.log(primeNumber(10))