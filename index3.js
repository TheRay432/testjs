function formatNumber(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1).replace(".0", "") + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(".0", "") + "K";
  } else {
    return Math.round(number).toString();
  }
}

console.log(formatNumber(657.123)); // 输出: "657"
console.log(formatNumber(4500000.21)); // 输出: "4.5M"
console.log(formatNumber(4500000)); // 输出: "4.5M"
console.log(formatNumber(1000000)); // 输出: "1M"
console.log(formatNumber(2000)); // 输出: "2K"
console.log(formatNumber(500)); // 输出: "500"
