Each time createCounter() is called, a new count variable is created in execution space. This means:
counterA and counterB each have their own separate count variables.
When you call counterA() twice, it increments its own count.
When you call counterB(), it starts  from its own count = 0
    some developers assume that same count variable is shared when functon called but it not happens due to closures.
    