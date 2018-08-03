module.exports = function main(str) {
  var a=parseInt(str)
  var sum=0;
  sum=a/100+(a/10)%10+a%10;
  return sum;
};
