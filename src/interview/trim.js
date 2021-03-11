

String.prototype.trim = function (){
  return this.replace(/^\s+|\s+$/g, '')
}

console.log('   a jf   '.trim())
console.log('   asdfaslkfjlasjf   '.trim())
console.log('asdfsa aslkfjlasjf   '.trim())
console.log('asdfsa aslkfjlasjf'.trim())
console.log('asdfsaaslkfjlasjf'.trim())
console.log('asdfsaaslkfjlasjf  '.trim())