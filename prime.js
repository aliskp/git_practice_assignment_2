function checkPrime(num) {
  let count = 0;
  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 1) {
    return "Prime";
  } else {
    return "Not Prime";
  }
}
console.log(checkPrime(7));
