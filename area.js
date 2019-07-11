/*

In this exercise, we will define 3 functions to calculate the areas of 3 different shapes:

rectangles
triangles
circles
Create the following 3 functions with the correct logic to calculate the area of that shape.

calculateRectangleArea(length, width)
calculateTriangleArea(base, height)
calculateCircleArea(radius)
The parameters to the functions will always be numbers.

Each function should return a number that corresponds to the area of the shape. Here is the math for each of the shapes:

rectangle: length × width
triangle: base × height / 2
circle: π × radius2
If any of the parameters are negative, the function should return undefined.

*/

const calculateRectangleArea = (length, width) => {
  let answer = length * width;
  if (answer <= 0) {
    return (answer = undefined);
  } else {
    return answer;
  }
}
const calculateTriangleArea = (base, height) => {
  let answer = (base * height) / 2;
  if (answer <= 0) {
    return (answer = undefined);
  } else {
    return answer;
  }
}
const calculateCircleArea = (radius) => {
  let answer = (radius * radius)
  if (answer <= 1) {
    return (answer = undefined);
  } else {
    return answer * Math.PI;
  }
}


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined