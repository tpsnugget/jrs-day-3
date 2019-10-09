// JavaScript Exercises
var ul = document.getElementById('ul')
var i = 0

function displayAnswer(answer, i) {
   var display = document.createElement('li')
   display.textContent = 'The answer to question ' + i + ') is: ' + answer
   ul.appendChild(display)
}

// =============================================================================
// 1) Write a program that displays the result of 5+6+7+8+9+10.

var answer = 5 + 6 + 7 + 8 + 9 + 10
displayAnswer(answer, ++i)

// =============================================================================
// 2) Write a function that returns the perimeter of a rectangle with a width of 5 and a height of 8.
function question2(a, b) {
   return a + b
}

var answer = question2(5, 8)
displayAnswer(answer, ++i)

// =============================================================================
// 3) Write a new function that returns the perimeter of a rectangle with the width 
//    and height being specified as arguments to the function.
function question3(w, h) {
   return 2 * w + 2 * h
}

var answer = question3(5, 8)
displayAnswer(answer, ++i)

// =============================================================================
// 4) Write a function that converts fahrenheit, given as an argument, to celcius.
function question4(f) {
   return (f - 32) * (5 / 9)
}

var answer = question4(212)
displayAnswer(answer, ++i)

// =============================================================================
// 5) Write a function that converts celcius, given as an argumen, to fahrenheit.
function question5(c) {
   return (9 / 5) * c + 32
}

var answer = question5(0)
displayAnswer(answer, ++i)

// =============================================================================
// 6) Write a function that calculates tip with 2 arguments, the bill and the tip percentage.
//    Use the build-in JS toFixed() method to round the answer to two decimal places.
function question6(bill, percent) {
   var tip = bill * percent / 100
   return tip.toFixed(2)
}

var answer = question6(91.98, 20)
displayAnswer(answer, ++i)

// =============================================================================
// 7) Write a function that takes a number as an argument and returns the sum of each individual digit.
//    So an input of 998 would return 26 (because 9 + 9 + 8) is 26.
function question7(num) {
   var loop = true
   var sum = 0
   while (loop) {
      sum += num % 10
      num = Math.trunc(num / 10)
      if (num < 1) { loop = false }
   }
   return sum
}

var answer = question7(998)
displayAnswer(answer, ++i)

// =============================================================================
// 8) Write the same function above, but that takes an input from the built-in browser function, prompt().
// function question8(num) {
//    var loop = true
//    var sum = 0
//    while(loop) {
//       sum += num % 10
//       num = Math.trunc(num / 10)
//       if (num < 1) {loop = false}
//    }
//    return sum
// }

// var answer = question8(prompt())
// displayAnswer(answer, ++i)

// =============================================================================
// 8a) Write a function that takes an argument in seconds and specifies the equivalent number of years.
function question8a(secs) {
   return secs / 60 / 60 / 24 / 365
}

var answer = question8a(31536000)
displayAnswer(answer, ++i)

// =============================================================================
// 9) Write a function that returns the current date and time.
function question9() {
   // Number of milliseconds since Jan 1, 1970, UTC
   var msec = Date.now()

   var now = new Date()
   console.log(now)

   // Correct for Eastern Time, still in msec
   msec -= 4 * 60 * 60 * 1000

   // Number of years since Jan 1, 1970 in Eastern Time, this is in year.decimal format
   var year = msec / 1000 / 60 / 60 / 24 / 365

   // Calculate the month, this is in month.decimal year format
   var month = year - 49

   month *= 12
   // Month is 0 referenced, this is month.decimal format
   month += 1

   // Julian day of the year
   var days = (year - 49) * 365
   // Remove the leap days
   days = days - 12

   switch (Math.trunc(month)) {
      case 1:
         currentMonth = 'January'
         day = days
         break;
      case 2:
         currentMonth = 'February'
         day = days - 31
         break;
      case 3:
         currentMonth = 'March'
         day = days - 31 - 28
         break;
      case 4:
         currentMonth = 'April'
         day = days - 31 - 28 - 31
         break;
      case 5:
         currentMonth = 'May'
         day = days - 31 - 28 - 31 - 30
         break;
      case 6:
         currentMonth = 'June'
         day = days - 31 - 28 - 31 - 30 - 31
         break;
      case 7:
         currentMonth = 'July'
         day = days - 31 - 28 - 31 - 30 - 31 - 30
         break;
      case 8:
         currentMonth = 'August'
         day = days - 31 - 28 - 31 - 30 - 31 - 30 - 31
         break;
      case 9:
         currentMonth = 'September'
         day = days - 31 - 28 - 31 - 30 - 31 - 30 - 31 - 31
         break;
      case 10:
         currentMonth = 'October'
         day = days - 31 - 28 - 31 - 30 - 31 - 30 - 31 - 31 - 30
         break;
      case 11:
         currentMonth = 'November'
         day = days - 31 - 28 - 31 - 30 - 31 - 30 - 31 - 31 - 30 - 31
         break;
      case 12:
         currentMonth = 'December'
         day = days - 31 - 28 - 31 - 30 - 31 - 30 - 31 - 31 - 30 - 31 - 30
         break;
   }

   var currentYear = Math.trunc(year + 1970)

   return day + ' ' + currentMonth + ', ' + currentYear
}

var answer = question9()
displayAnswer(answer, ++i)

// =============================================================================
// 10) Write a function that returns the date 33 days from now.
function question10() {

}

var answer = question10()
displayAnswer(answer, ++i)

// =============================================================================
// 11) Write a function that returns the mean of an array of numbers.
function question11(arr) {
   var sum = 0
   for (var i = 0; i < arr.length; i++) {
      sum += arr[i]
   }
   return sum
}
myArray = [1, 2, 3]
var answer = question11(myArray)
displayAnswer(answer, ++i)

// =============================================================================
// 12) Write a function that randomly generates a number between 1 and 12, and returns
//     the name of the corresponding month.
function question12() {
   var currentMonth = ''
   var num = Math.random() * 13

   while (num === 0) {
      num = Math.random() * 13
   }

   num = Math.trunc(num)

   switch (num) {
      case 1:
         currentMonth = 'January'
         break;
      case 2:
         currentMonth = 'February'
         break;
      case 3:
         currentMonth = 'March'
         break;
      case 4:
         currentMonth = 'April'
         break;
      case 5:
         currentMonth = 'May'
         break;
      case 6:
         currentMonth = 'June'
         break;
      case 7:
         currentMonth = 'July'
         break;
      case 8:
         currentMonth = 'August'
         break;
      case 9:
         currentMonth = 'September'
         break;
      case 10:
         currentMonth = 'October'
         break;
      case 11:
         currentMonth = 'November'
         break;
      case 12:
         currentMonth = 'December'
         break;
   }
   return currentMonth
}

var answer = question12()
displayAnswer(answer, ++i)

// =============================================================================
// 13) Write a function that takes three numbers as arguments, and returns the same 3 numbers
//     in increasing order (more specifically, non-decreasing order if multiple numbers are the same).
function question13(a, b, c) {
   var myArray = [a, b, c]
   return myArray.sort()
}

var answer = question13(3, 2, 1)
displayAnswer(answer, ++i)

// =============================================================================
// 14) Write a function that returns the appropriate boolean value if a given string argument is
//     a palindrome, where the string is the same when reversed. Examples of palindromes are "racecar" and "3003".
//     Ex: isPalindrome("racecar") returns true. isPalindrome("racecars") returns false.
function question14(str) {
   var answer = true
   for (var i = 0; i < str.length; i++) {
      if (str[i] !== str[str.length - 1 - i]) { answer = false }
   }
   return answer
}
var str = 'racecar'
var answer = question14(str)
displayAnswer(answer, ++i)

// =============================================================================
// 15) Write a function that returns true when two inputs are equivalent when
//     using coercion, but not equivalent without coercion.
//     Ex: isCoerced(5,"5") returns true. isCoerced(5,5) returns false. isCoerced(4,"shoe") returns false.
function question15(a, b) {
   if (a == b && a !==b) {
      return true
   }
   else {return false}
}
var a = 4
var b = 'shoe'
var answer = question15(a, b)
displayAnswer(answer, ++i)

// =============================================================================
// 16) Write a function called isEven() that returns true if a given argument is even.
function isEven(num) {
   if (num % 2 === 0) { return true }
   else { return false }
}

var answer = isEven(22)
displayAnswer(answer, ++i)

// =============================================================================
// 17) Write a function called isOdd() that returns true if a given argument is odd.
//     Do this by only using the isEven() function you wrote previously.
function isOdd(num) {
   return !isEven(num)
}

var answer = isOdd(23)
displayAnswer(answer, ++i)

// =============================================================================
// 18) Write a function that returns true if a given argument is a multiple of 3.
//     Examples of multiples of 3 are 0,3,6,9 ...
function question18(num) {
   if (num % 3 === 0) { return true }
   else { return false }
}

var answer = question18(6)
displayAnswer(answer, ++i)

// =============================================================================
// 19) Write a function that takes two arguments. Check if the first argument is 
//     the multiple of the second argument. Return the appropriate boolean.
//     Ex. checkMultiple(20,5) returns true. checkMultiple(21,5) returns false.
function question19(a, b) {
   if (a % b === 0) { return true }
   else { return false }
}

var answer = question19(21, 5)
displayAnswer(answer, ++i)

// =============================================================================
// 20) Write a function that takes an array of numbers as an argument and returns
//     the smallest number in the array.
function question20(arr) {
   var myArray = arr.sort()
   return myArray[0]
}

var answer = question20([1, 2, 3, 0, 5, 7])
displayAnswer(answer, ++i)

// =============================================================================
// 21) Write a function that returns the largest integer n where n*n is still less
//     than 12,000. (Hint 1, use a while loop). (Hint 2, you don't need an argument).
function question21() {
   var n = 0
   var loop = true
   while (loop) {
      if (n * n < 12000) {
         n += 1
      }
      else { loop = false }
   }
   return n - 1
}

var answer = question21()
displayAnswer(answer, ++i)

// =============================================================================
// 22) Write a function that returns the largest integer n where n*n is still less than a given argument.
//     Ex. smallestN(5) would return 2, because 2*2 is 4, which is smaller than 5, but 3*3 is 9, which is larger than 5. 
function question22(num) {
   var n = 0
   var loop = true
   while (loop) {
      if (n * n < num) {
         n += 1
      }
      else { loop = false }
   }
   return n - 1
}


var answer = question22(10)
displayAnswer(answer, ++i)

// =============================================================================
// 23) Write a function that takes a string as an argument and returns the reverse of that string.

// FIX ME
// FIX ME
// FIX ME
// FIX ME


function question23(str) {
   for (var i = 0; i < str.length; i++) {
      myNewStr.push(str[str.length - 1 - i])
      console.log(myNewStr[i])
   }
   myNewStr = myNewStr.toString()
   var index = myNewStr.indexOf(',')
   console.log(index)
   console.log(myNewStr)
   myNewStr.slice(index, 1)
   console.log(myNewStr)
   return myNewStr
}
var myNewStr = []
var answer = question23('mystring')
displayAnswer(answer, ++i)

// =============================================================================
// 24) Write a function that counts the occurences of a specific element in an array, specified as a function argument.
//     For example, for the array [5,7,12,5,3,3,5], the function countOccurences(3) would return a value of 2.
function question24(num, arr) {
   var count = 0
   for (var i = 0; i < arr.length; i++) {
      if (num === arr[i]) {
         count += 1
      }
   }
   return count
}

var answer = question24(3, [5, 7, 12, 5, 3, 3, 5])
displayAnswer(answer, ++i)

// =============================================================================
// 25) Write a function that returns a multidimensional array that contains number
//     of occurences for every element of an array.
//     For example, for the array [5,7,12,5,3,3,5], the function countAllOccurences(array)
//     would return: [[5,3],[7,1],[12,1],[3,2]]
function question25() {

}

var answer = question25([5, 7, 12, 5, 3, 3, 5])
displayAnswer(answer, ++i)

// =============================================================================
// 26) Write a function that takes an array of numbers as an input, and checks to
//     see if the array is sorted in non-decreasing order. (i.e. each element in
//     the array is less than or equal to the next element.) Return a Boolean.
function question26(arr) {
   var sorted = true
   for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
         sorted = false
      }
   }
   return sorted
}
// not sorted [5, 7, 12, 5, 3, 3, 5]
var answer = question26([1, 2, 4, 6, 8, 9])
displayAnswer(answer, ++i)

// =============================================================================
// 27) Write a function that takes an array of numbers as an argument and sorts 
//     them in increasing order.
function question27(arr) {
   var temp = 0
   var thereWasASwap = true
   while (thereWasASwap) {
      thereWasASwap = false
      for (var i = 0; i < arr.length - 1; i++) {
         if (arr[i] > arr[i + 1]) {
            temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            thereWasASwap = true
         }
      }
   }
   return arr
}

var answer = question27([5, 7, 12, 5, 3, 3, 5])
displayAnswer(answer, ++i)

// =============================================================================
// 28) Write a function that takes two sorted arrays of numbers as arguments, and
//     returns one new sorted array containing the numbers from both of the arrays
//     given as arguments. Call this function merge().
function merge(arr1, arr2) {
   var newArr = []
   for (var i = 0; i < arr1.length; i++) {
      newArr.push(arr1[i])
   }
   for (var i = 0; i < arr2.length; i++) {
      newArr.push(arr2[i])
   }
   newArr = question27(newArr)
   return newArr
}

var answer = merge([1, 5, 9], [2, 3, 4, 6, 7, 8])
displayAnswer(answer, ++i)

// =============================================================================
// 29) Leibniz's formula can compute pi. the formula is given below:
//     pi = 4 * (1 - (1/3) + (1/5) - (1/7) + (1/9) - (1/11) + ...).
//     The elipsis (the three dots) means this pattern continues forever.
//     Notice that the operators ( + and - ) alternate each time.
//     Write a function called calculatePi(), that takes an argument that specifies the number 
//     of terms to calculate from (don't include the 4 in the count) with this formula
//     and returns the value. For example if you said:
//     Ex. calculatePi(5) would return the result of the first 5 terms in the parentheses,
//     meaning 1 through (1/9) in this case.
function calculatePi(num) {
   var pi = 4
   var multiplier = 1
   var denom = 1
   if (num <= 1) {
      return pi
   }
   else {
      for (var i = 2; i <= num; i++) {
         denom +=2
         if (i % 2 === 0) {
            multiplier -= 1 / denom
         }
         else {
            multiplier += 1 / denom
         }
      }
      return pi * multiplier
   }
}

var answer = calculatePi(5)
displayAnswer(answer, ++i)

// =============================================================================