javascript also work with functions like other programming language.
1.how js handles number of arguments:
if we pass less arguments than paramters shows  missing parameters.if we pass more arguments extra will be ignored until they use.
2.Rest Paramter:
    It is mainly used to collect extra arguments into array it always be last parameter in function.
    function example(a, b, ...rest) {
  console.log(a);    // first argument
  console.log(b);    // second argument
  console.log(rest); // array of remaining arguments
}

example(1, 2, 3, 4); 
// Output: 1, 2, [3, 4]

3.sumall function using RestParameter
function sumAll(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}
console.log(sumAll(1, 0, 3));         // 4
console.log(sumAll(1, 20, 30, 4));  // 55
