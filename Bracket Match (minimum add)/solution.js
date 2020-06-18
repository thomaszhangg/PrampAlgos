// When given a problem involving matching parentheses, a stack usually comes to mind
// Let's initialize an empty stack, and as we traverse the given string, we'll either 
// 1) push the current parenthesis onto our stack OR 
// 2) pop the top of our stack IF that top element balances out the current parentheses we're on

// If we encounter an open paren, we'll push it onto the stack
// If we encounter a closing paren, we'll only push it on IF 
// If there is an open paren at the top of the stack we can simply pop it off and NOT add the current closing paren
// Imagine S = "()". We see an open - we push onto stack. Next we see a close and we can simply pop the stack and we're left with an empty stack meaning all is balanced

// 
