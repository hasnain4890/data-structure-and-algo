function fab(number) {
  let n1 = 0;
  let n2 = 1;
  var next;
  for (i = 0; i <= number; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
  }
}
fab(6);
