// Define a function named divide_Numbers that takes two parameters: n1 and n2
function divide_Numbers(n1, n2) {
    // Check if n2 is equal to 0
    if (n2 === 0) {
      // If n2 is 0, throw an error indicating division by zero is not allowed
      throw new Error('Error: Division by zero is not allowed.');
    }  
    // If n2 is not 0, return the result of dividing n1 by n2
    return n1 / n2;
  }
  // Call the divide_Numbers function with arguments 8 and 3, then log the result to the console
  console.log(divide_Numbers(8, 3));
  // Call the divide_Numbers function with arguments 8 and 0, which will throw an error, and handle it
  console.log(divide_Numbers(8, 0));
  