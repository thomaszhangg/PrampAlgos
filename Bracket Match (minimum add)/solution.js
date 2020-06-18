// When given a problem involving matching parentheses, a stack usually comes to mind
// Let's initialize an empty stack, and as we traverse the given string, we'll either
// 1) push the current parenthesis onto our stack OR
// 2) pop the top of our stack IF that top element balances out the current parentheses we're on

// If we encounter an open paren, we'll push it onto the stack
// If we encounter a closing paren, we'll check the top of our stack.
// If the peek element of the stack is an open paren, then we simply pop it off and NOT push the current close on
// Imagine S = "()". We see an open - we push onto stack. Next we see a close and we can simply pop the stack and we're left with an empty stack meaning all is balanced
// Else, if the peek element is another close paren OR if its empty - then we push the closing paren onto the stack

// When we finish traversing the entire string, our stack will contain the unbalanced parentheses and we return the length of the stack

const minAddToMakeValid = (s) => {
  let stack = [];

  for (let paren of s) {
    if (paren === '(') {                            // push open parens on
      stack.push(paren);
    } else {                                        // when we encounter a closing paren
      if (stack[stack.length - 1] === '(') {        // lets check the top of our stack. if it's an open...
        stack.pop();                                // pop the open paren off as this cancels the closing paren we just encountered
      } else {
        stack.push(paren);                          // if the top of our stack is not an open OR our stack is empty, we'll push this closing paren on
      }
    }
  }
  return stack.length;                              // we'll be left with unbalanced parens, meaning we'll need this number of parens to balance them out
};



// Test
let input = "())("             // 2

console.log("We need to add a minimum of 2 parentheses to validate this input:", minAddToMakeValid(input))