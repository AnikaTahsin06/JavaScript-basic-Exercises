/*

    Understanding Closures in JavaScript:
    A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables—a scope chain. Closures are created every time a function is created, at function creation time.

    A closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, and they allow the inner function to access the outer function's variables and parameters, even after the outer function has finished executing.

    Why Are Closures Useful?:
    Closures are useful because they let you "remember" a function's state, even after the function has finished executing. They are often used for data privacy, as well as for maintaining state in asynchronous functions or callbacks. 

*/

// How Closures Work? Let's look at an example to understand closures better:
function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log("Example", outerVariable); // Accessing outerVariable inside innerFunction
    }

    return innerFunction;
}

const closureExample = outerFunction(); // outerFunction has finished executing
closureExample(); // Logs: 'I am outside!'

// Practical Problems with Solutions: 

// Problem 1: Counter with Closures: Create a function createCounter that returns a function that increments a counter.
function createCounter() {
    let count = 0;
    
    return () => {
        count ++;
        console.log("Problem 1: counter: ", count)
    }
}

const counter = createCounter()
counter()
counter()
counter()
// End problem 1


// Problem 2: Private Variables with Closures: Implement a function createSecretHolder(secret) that returns an object with two methods: getSecret (returns the secret) and setSecret(newSecret) (sets a new secret).
function createSecretHolder(secret) {
    let _secret = secret; // Private variable
  
    return {
      getSecret: function() { // Accessor method
        return _secret;
      },
      setSecret: function(newSecret) { // Mutator method
        _secret = newSecret;
      }
    };
  }
  
  const secretHolder = createSecretHolder('mySecret');
  console.log(secretHolder.getSecret()); // Output: 'mySecret'
  secretHolder.setSecret('newSecret');
  console.log(secretHolder.getSecret()); // Output: 'newSecret'
  
// Problem 3: Delayed Execution with Closures
