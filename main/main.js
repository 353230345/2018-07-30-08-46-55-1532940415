module.exports = function main(str) {
  var a=parseInt(str)
  if(str>=0&&str<1000){
	   var sum=0;
       sum=a/100+(a/10)%10+a%10;
       return sum;
  }else{
	   break;
  }
 
};
