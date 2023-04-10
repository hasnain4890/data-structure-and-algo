// function mostFrequentItem(data) {

//   count = 0;
//   for (i = 0; i < data.length; i++) {
//     for (j = i; j < data.length; j++) {
//       if (data[i] == data[j]) {
//         item.push(data[i]);
//         count++;
//         return ["this is whole array", item, "item has come", count, "times"];
//       }
//     }
//   }
// }
// res = mostFrequentItem(["hasnain"]);
// console.log(res);

function uniqueSum(string) {
  arr = [];
  counter = 0;
  for (i = 0; i < string.length; i++) {
    if (!arr.includes(string[i])) {
      arr.push(string[i]);
      counter++;
    }
  }
  str = arr;
  join = str.join("");
  //   return [join, counter];
  return counter;
}
res = uniqueSum("hasnain");
console.log(res);
