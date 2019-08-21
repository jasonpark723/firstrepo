function a() {
  console.log("hello");
}
console.log("Dojo");
//Dojo

function a() {
  console.log("hello");
  return 15;
}
x = a();
console.log("x is", x);
//hello
//x is 15

function a(n) {
  console.log("n is", n);
  return n + 15;
}
x = a(3);
console.log("x is", x);
//n is 3
//x is 18

function a(n) {
  //n=3
  console.log("n is", n);
  y = n * 2; //y=6
  return y;
}
x = a(3) + a(5); //x=6+10
console.log("x is", x);
//n is 3
//n is 5
//x is 16

function op(a, b) {
  c = a + b;
  console.log("c is", c);
  return c;
}
x = op(2, 3) + op(3, 5);
console.log("x is", x);
//c is 5
//c is 8
//x is 13

function op(a, b) {
  c = a + b;
  console.log("c is", c);
  return c;
}
x = op(2, 3) + op(3, op(2, 1)) + op(op(2, 1), op(2, 3));
console.log("x is", x);
//c is 5
//c is 3
//c is 6
//c is 3
//c is 5
//c is 8
//x is 19

var x = 15;
function a() {
  var x = 10;
}
console.log(x);
a();
console.log(x);
//15
//15

function multiply(x, y) {
  console.log(x);
  console.log(y);
}
b = multiply(2, 3);
console.log(b);
//2
//3
//undefined

function multiply(x, y) {
  return x * y;
}
b = multiply(2, 3);
console.log(b);
console.log(multiply(5, 2));
//6
//10

var x = [1, 2, 3, 4, 5, 10];
for (var i = 0; i < 5; i++) {
  i = i + 3;
  console.log(i);
}
//3
//7

var x = 15;
console.log(x);
function awesome() {
  var x = 10;
  console.log(x);
}
console.log(x);
awesome();
console.log(x);
//15
//15
//10
//15

for (var i = 0; i < 15; i += 2) {
  console.log(i);
}
//0
//2
//4
//6
//8
//10
//12
//14

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 2; j++) {
    console.log(i * j);
  }
}
//0
//0
//0
//1
//0
//2

function looping(x, y) {
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < x; j++) {
      console.log(i * j);
    }
  }
}
z = looping(3, 3);
console.log(z);
//  0
//  0
//  0
//  0
//  1
//  2
//  0
//  2
//  4

function looping(x, y) {
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      console.log(i * j);
    }
  }
  return x * y;
}
z = looping(3, 5);
console.log(z);
0;
0;
0;
0;
0;
0;
1;
2;
3;
4;
0;
2;
4;
6;
8;
15;

function printUpTo(x) {
  // your code here
  if (x < 0) {
    console.log("negative number");
    return false;
  }
  for (var i = 1; i <= x; i++) {
    console.log(i);
  }
}
printUpTo(1000); // should print all the integers from 1 to 1000
y = printUpTo(-10); // should return false
console.log(y); // should print false

function printSum(x) {
  var sum = 0;
  //your code here
  for (var i = 0; i <= x; i++) {
    sum += i;
    console.log(i, sum);
  }
  return sum;
}
y = printSum(255); // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y); // should print 32640

function printSumArray(x) {
  var sum = 0;
  for (var i = 0; i < x.length; i++) {
    //your code here
    sum += x[i];
  }
  return sum;
}
console.log(printSumArray([1, 2, 3])); // should log 6

//BONUS
function LargestElement(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
