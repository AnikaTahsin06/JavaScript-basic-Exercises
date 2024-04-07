// Define a function named validateInteger which takes a parameter 'number'
function validateInteger(number) 
{
  // Check if the given number is not an integer using Number.isInteger() method
  if (!Number.isInteger(number)) 
  {
    // If the number is not an integer, throw an error with a specific message
    throw new Error('Invalid number. Please input an integer.');
  }
  // Log a message indicating that the number is valid
  console.log('Number is valid:', number);
}

// Example usage:
try {
  // Call validateInteger function with an integer argument (12)
  validateInteger(12); // Valid integer
  // Call validateInteger function with a non-integer argument (2.12)
  validateInteger(2.12); // Throws an error
} catch (error) {
  // Catch any errors thrown by the validateInteger function and log the error message
  console.log('Error:', error.message);
}
