// let re = /\w{3}/;
// console.log(re.test('kishalay'))
// console.log('hi my name is kishalay'.search(re))
// console.log(re.exec('hi kishalay'))

/*
possible matches:
-hello kishalay ,you have 5 tasks remaining
-Grettings,Paul you have 1 tasks remaining
*/

let re = /^\w+, \w+\. You have \d+ tasks? remaining\.$/
console.log(re.exec('hello, kishalay. You have 5 tasks remaining.'))
console.log(re.test('Grettings, Paul. You have 1 task remaining.'))