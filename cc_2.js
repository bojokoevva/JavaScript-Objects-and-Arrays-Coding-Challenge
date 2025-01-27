let products = ["Laptop", "Smartphone", "Headphones", "Monitor", "Keyboard"];

// Add a new product
products.push("Mouse");

// Remove the last product
products.pop();

// Log the updated list
console.log(products);

let scores = [85, 90, 78, 92, 88];

// Update the second score
scores[1] = 95;

// Calculate the average score
let average = scores.reduce((total, score) => total + score, 0) / scores.length;

// Log the updated array and average score
console.log(scores);
console.log("Average score:", average);
