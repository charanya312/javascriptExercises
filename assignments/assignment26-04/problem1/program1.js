function createCounter() {
    let count = 0;
    function incrementCounter() {
    count++;
    return count;
    }
    return incrementCounter;
    }
    const counterA = createCounter();
    console.log(counterA()); // Expected: 1, Actual: 1
    console.log(counterA()); // Expected: 2, Actual: 2
    const counterB = createCounter();
    console.log(counterB());//Actual:1