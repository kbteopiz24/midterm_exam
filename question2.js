function filterEvenNumbers(numbers) {
    if (!Array.isArray(numbers)) {
      return; // Return an empty array if the input is not an array
    }
    return numbers.filter(function(number) {
      return number % 2 === 0;
    });
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = filterEvenNumbers(numbers);
  console.log(evenNumbers); // Output: [2, 4, 6]
  
  const emptyArray = filterEvenNumbers();
  console.log(emptyArray); // Output:
  
  const notAnArray = filterEvenNumbers(123);
  console.log(notAnArray); //output: