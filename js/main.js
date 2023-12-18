// Function

//Functions consists of Reusable Code!

//Methods = built in Fucntions!
/* 
"Manny".toLowerCase(); // toLowercase() is a function
Math.random(); // another built in fucntion */

//Function declaration syntax:
/* function sum(num1, num2) {
  if (num2 === undefined) {
    return num1 + num1;
  }
  if (num1 === undefined) {
    return num2 + num2;
  }
  return num1 + num2;
}
console.log(sum(90, 10)); */

/* function getUsernameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUsernameFromEmail("user@GitHub.com")); */

//another way

/* const getUsernameFromEmail = function (email) {
  return email.slice(0, email.indexOf("@"));
};
console.log(getUsernameFromEmail("manny@mlo.com")); */

//another way

/* const getUsernameFromEmail = (email) => {
  return email.slice(0, email.indexOf("@"));
};
console.log(getUsernameFromEmail("jesusislord@mlo.com")); */

/* const toProperCase = (myName) => {
  return myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase();
};

console.log(toProperCase("september"));
 */
