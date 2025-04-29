 given  
 const myObject = {
  z: 1,
  a: 2,
  10: 3,
  b: 4,
  2: 5,
  c: 6
};
1.why properties not in defined order:
js object takes all keys as strings.numeric are store in ascending and other in insertion order.
2:
for-in is used to arrange numeric in ascending and other in insertion order.
3:
Object.keys(obj) returns an array of string keys.

The order is:
All numeric keys sorted numerically.
All non-numeric keys, in the order they were added.
So both for...in and Object.keys() follow the same general rule.
4:
create object with mixed types:
const mixedKeys = {
  d: "dog",
  100: "one hundred",
  a: "apple",
  2: "two",
  50: "fifty",
  z: "zebra"
};

// For...in loop:
for (const key in mixedKeys) {
  console.log(key, mixedKeys[key]);
}

// Object.keys
console.log(Object.keys(mixedKeys));
