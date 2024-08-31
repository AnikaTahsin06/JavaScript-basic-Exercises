const readline = require('readline');

// Create an interface to read from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter three numbers
rl.question('Enter three numbers separated by spaces: ', (input) => {
  // Split the input string into an array of numbers
  const numbers = input.split(' ').map(Number);

  // Check if three numbers are provided
  if (numbers.length !== 3) {
    console.log('Please enter exactly three numbers separated by spaces.');
    rl.close();
    return;
  }

  // Calculate the product of the three numbers
  const product = numbers.reduce((acc, curr) => acc * curr, 1);

  // Determine the sign of the product
  let sign;
  if (product > 0) {
    sign = '+';
  } else if (product < 0) {
    sign = '-';
  } else {
    sign = '0';
  }

  // Display the sign in an alert box
  console.log(`The sign is ${sign}.`);
  
  // Close the interface
  rl.close();
});
