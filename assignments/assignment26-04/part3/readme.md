1.closure:
closure is a function remember the variables from outer scope in which they created,even after outer one executed.so in this increment and decrement carry their own count from function.
2.greeting function:
function createGreeting(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}
const sayHi = createGreeting("Hi");
console.log(sayHi("Charanya")); // Hi, Charanya!

const sayWelcome = createGreeting("Welcome");
console.log(sayWelcome("Friend")); // Welcome, Friend!
3&4:
function createSecretHolder(secret) {
  let hiddenSecret = secret;
  return {
    getSecret: function() {
      return hiddenSecret;
    },
    setSecret: function(newSecret) {
      hiddenSecret = newSecret;
    }
  };
}
const mySecret = createSecretHolder("My diary password");
console.log(mySecret.getSecret()); // My diary password
mySecret.setSecret("New top-secret info!");
console.log(mySecret.getSecret()); // New top-secret info!
console.log(mySecret.hiddenSecret); // undefined ❌ (you can’t peek inside!)
    hiddensecret is not visible to outside only 2 methods getsecret and set secret has access to change it.