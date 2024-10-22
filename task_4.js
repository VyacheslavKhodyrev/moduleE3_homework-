function numbers(a, b) {
    let intervalId = setInterval(function() {
      let i = a
      console.log(i)
      a++
      if (i === b) {
        clearInterval(intervalId)
      }
      
    }, 1000)
  }
  numbers(5, 15)