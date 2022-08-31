function oddCount(n){
    let count = 0;
    for (let i = 0; i < n; i++){
      if (i % 2 === 1){
        count ++;
      }
    }
    return count;
  }

  console.log(5%2)
  console.log(oddCount(15023))