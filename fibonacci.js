function fibonacci(num) {
let previous = 0
let current = 1
let next = 0

if(num === 0){
  return 0
} else{
      
for (i = 1; num > i; i++){
  next = previous + current
     previous = current
    current = next
         
  }
}
return total
}
module.exports = fibonacci;


// F(n) = F(n - 1) + F(n - 2)