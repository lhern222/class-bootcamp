function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  //for(let i = str.length-1; i > 0; i--){
    //hello
    //newString +=str[i];
  //}                                     this can be a little more difficult 
  return str.split('').reverse().join('');
  // ^^this is an easier way in writing it 
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  return this.reverse(str) === str; //this will return true or false 
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
  //replace the first letter with an uppercase
  ['this','is', 'a', 'test' ];
  return str.split(' ').map((word) =>{
    word.subtracting(0,1).toUpperCase();
  } ).join(" ") //create the space on purpose, so you can have the word split 
};

module.exports = Algo;
