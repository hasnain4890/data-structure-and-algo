function sum_par(array, number) {
  for (let i = 0; i < array.length; i++) {
    // let one = array[i];
    // console.log(one);

    // for (let j = i + 1; j < array.length; j++) {
    //   var second = array[j];
    // }
    if (array[i] + array[i + 1] == number) {
      return [array[i], array[i + 1]];
    }
  }
}
res = sum_par([1, 2, 3, 5, -8, 6, 7, 8, 9], 15);
console.log(res);
