1.purpose of continue:
it is used to skip the current iteration of loop in a program.it skips to next iteration.
for (let i = 1; i <= 4; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
//2 skiped.
2.purpose of break:
break is used to stop the loop after break no code in loop executes.
for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}
