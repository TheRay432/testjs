function solution(N) {
  function sum(num) {
    return num
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  const sumN = sum(N);
  let nextI = N + 1;
  while (true) {
    if (sum(nextI) === 2 * sumN) {
      return nextI;
    }
    nextI++;
  }
}

console.log(solution(7));
