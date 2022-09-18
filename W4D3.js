// Q-1) write a program to find the sum of the first n natural numbers,take the value of n by yourself?

function numberSum(N) {
  var total = 0;
    for(var i = 1; i <= N; i++){
      total += i;
    }
    return total;
}
console.log(numberSum(5))

