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

let employee = {
    name: "John Doe",
    age: 30,
    department: "Sales",
    isActive: true
};

// Update the department
employee.department = "Marketing";

// Add a new property for position
employee.position = "Manager";

// Log the updated object
console.log(employee);

let customers = [
    { name: "Alice", email: "alice@example.com", purchaseAmount: 150 },
    { name: "Bob", email: "bob@example.com", purchaseAmount: 200 },
    { name: "Charlie", email: "charlie@example.com", purchaseAmount: 250 }
];

// Add a new customer
customers.push({ name: "David", email: "david@example.com", purchaseAmount: 300 });

// Log the entire customer list
console.log(customers);