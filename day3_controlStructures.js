function compare(a, b, c) {
  if (a > b && a > c) {
    console.log("a is large");
  } else if (b > a && b > c) {
    console.log("b is large");
  } else if (c > a && c > b) {
    console.log("c is large");
  }
}
console.log(compare(1, 2, 3));

//Switch case
function dayPicker(dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 4:
      dayName = "Monday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;

    default:
      dayName = "Nahi bata kya kar lega";
  }
  return dayName;
}

console.log("The day is : " + dayPicker(7));

console.log("The grade is : " + Grade(80));

function Grade(marks) {
  let grade;

  switch (true) {
    case marks >= 90:
      grade = "A";
      break;
    case marks >= 80:
      grade = "B";
      break;
    case marks >= 70:
      grade = "C";
      break;
    case marks >= 60:
      grade = "D";
      break;
    case marks >= 50:
      grade = "E";
      break;
    case marks >= 0:
      grade = "F";
      break;
    default:
      grade = "Invalid marks";
      break;
  }

  return grade;
}

// Example usage
console.log("The grade is: " + Grade(95)); // Outputs: The grade is: A
console.log("The grade is: " + Grade(85)); // Outputs: The grade is: B
console.log("The grade is: " + Grade(75)); // Outputs: The grade is: C
console.log("The grade is: " + Grade(65)); // Outputs: The grade is: D
console.log("The grade is: " + Grade(55)); // Outputs: The grade is: E
console.log("The grade is: " + Grade(45)); // Outputs: The grade is: F

function OddOrEven(num) {
  if (num % 2 == 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}
console.log(OddOrEven(10));

// function for leap year
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

console.log(isLeapYear(2024));
