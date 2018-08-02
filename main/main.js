module.exports = function main(str) {
  var s=str.toString();   //parseInt
  var a =parseInt(s);
  var sum=0;
  sum=a/100+(a/10)%10+a%10;
  return sum;
};
