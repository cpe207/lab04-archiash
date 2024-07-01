function primeNumber(a) {
  if(a % 2 == 0) return (a == 2 && a % 2 == 0) ? "YES" : "NO" ;
  for(let i = 3; i * i <= a; i += 2) if(a % i == 0) return "NO";  
  return "YES";
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
