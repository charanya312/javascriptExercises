function processArguments(primaryFunction, ...args) {
    return primaryFunction(...args);
  }
  
  // 💡 Example primary function:
  function multiply(x, y) {
    return x * y;
  }
  
  // 💡 Usage:
  console.log(processArguments(multiply, 3, 4)); // 12
  