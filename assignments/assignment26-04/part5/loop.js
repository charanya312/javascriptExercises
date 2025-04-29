for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0) {
      continue; // Skip numbers divisible by 5
    }
    if (i > 15) {
      break; // Exit loop if number is greater than 15
    }
    console.log(i);
  }
  