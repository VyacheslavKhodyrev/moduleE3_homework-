function oneNumber(a) {
    return function(b) {
      return a + b
    }
  }
  
  const resultFunc = oneNumber(5)
  
  console.log(resultFunc(6));