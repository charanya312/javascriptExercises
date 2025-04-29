function delayedGreeter(names) {
    for (var i = 0;i<names.length;i++) {
    setTimeout(function() {
    console.log(`Hello, ${names[i]}!`);
    }, i * 1000);
}
}
    delayedGreeter(['Alice','Bob','charlie']);
This will give output as hello undefined for entire array.var is having function scope and all three setTimeout  share same i value and by the time timeouts execute i===3.
//using IIFE it can be resolved
function delayedGreeterCorrected(names) {
  for (var i = 0; i < names.length; i++) {
    (function(index) {
      setTimeout(function() {
        console.log(`Hello, ${names[index]}!`);
      }, index * 1000);
    })(i);
  }
}
here IIFE always create new scope for variable and capture i value store in index so settimeout function has own index .
//using let  it can be resolved
function delayedGreeterLet(names) {
  for (let i = 0; i < names.length; i++) {
    setTimeout(function() {
      console.log(`Hello, ${names[i]}!`);
    }, i * 1000);
  }
}
this will work and print hello with array names because let has block scope so closure create inside function and store i value.