// https://bigfrontend.dev/problem/uncompress-string

/*
Given a compressed string, return its original form.

For example.

uncompress('3(ab)') // 'ababab'
uncompress('3(ab2(c))') // 'abccabccabcc'
a number k followed by a pair of parenthesis, meaning to repeat the substring inside the parenthesis by k times, k is positive integer.
inputs are guaranteed to be valid input like above example, there is no numerical digit in original form.


Notes:
    - Thoughts
        - How to iterate over a string to identify the numbers and what are the values that needs to be duplicated in which order? Maybe this can be done recursively, or using another data structure like an array to hold the values to iterate over, the number string needs to be converted to a number, will there be potentially 2+ size digits, how would I handle those?


    - Going over a solution:
        - I didn't think about the potential test cases where values could be possibly next to each other (I limited myself in this thought), and that if there wasn't any number then it would be just return that string

*/



const isNumeric = (str) => !isNaN(parseFloat(str)) && isFinite(Number(str))

function uncompress(str) {
 const stack = []

  for (const char of str) {
    if (char !== ')') {
      stack.push(char)
    } else {
      let word = ''
      let count = ''

      // find string
      while (stack.length && stack[stack.length - 1] !== '(') word = stack.pop() + word
      stack.pop() 

      // create repetition
      while (stack.length && isNumeric(stack[stack.length - 1])) count = stack.pop() + count
      stack.push(word.repeat(Number(count)))
    }
  }

  return stack.join('')
}


// Test Cases
let a = uncompress("3(ab)"); // 'ababab'
let b = uncompress("3(ab2(c))");
let c = uncompress("2(BFE1(dev))3(2(lover))");
let d = uncompress("3(B2(F1(E))).dev");
console.log(a);
console.log(b)
console.log(c);
console.log(d);
