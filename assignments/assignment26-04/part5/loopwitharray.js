const numbers = [10, 5, 8, 20, 3, 15, 25];

for (const num of numbers) {
  if (num === 5) {
    console.log("Skipping 5!");
    continue; // Skip this iteration
  }
  if (num > 12) {
    console.log("Found a large number!");
    break; // Exit the loop
  }
  console.log(num); // Otherwise, print the number
}
