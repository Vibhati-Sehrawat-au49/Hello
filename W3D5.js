// Q-1) Assign a variable a year, and check if the leap year or not?
// The year is multiple of 400.
// The year is multiple of 4 and not multiple of 100.

let year = 2024
if (year%4==0 || year%100!=0 && year%400==0)
  console.log('Is a Leap year');
else
  console.log("Isn't a Leap year");
