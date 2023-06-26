// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];

// Function to check if any two numbers add to zero
function hasPairWithZeroSum(array) {
  let set = new Set();

  for (let num of array) {
    if (set.has(-num)) {
      return true;
    }
    set.add(num);
  }

  return false;
}

// Check if the array has a pair with zero sum
console.log(hasPairWithZeroSum(array));

// Examples
let examples = [
    [1, 4, 11, 2, 37, -4],
    [0, 21, 33, 6, 0, -9],
    [0, 1, 2, 3, 4, 5]
  ];
  
  for (let k = 0; k < examples.length; k++) {
    let array = examples[k];
    let foundPair = false;
  
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === 0) {
          foundPair = true;
          break;
        }
      }
      if (foundPair) {
        break;
      }
    }
  
    console.log("Example", k + 1 + ":", foundPair);
  }
  