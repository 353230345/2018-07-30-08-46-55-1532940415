module.exports = function main(str) {
  var i=str+0;
  var a=i*1   //parseInt
  var sum=0;
  sum=a/100+(a/10)%10+a%10;
  return sum;
};
