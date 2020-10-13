// USER NAME REQUEST
var userName = prompt('Enter your name');

document.getElementById('username').innerHTML = 'Name: ' + userName;

// SECOND NAME REQUEST
var surName = prompt('Enter your surname');

document.getElementById('surname').innerHTML = 'Surname: ' + surName;

// YEARS AND AGE SECTION
// CURRENTYEAR
var annoAttuale = 2020;

// AGE USER REQUEST
var ageUser = prompt('Enter your age');

document.getElementById('age').innerHTML = 'Age: ' + ageUser;

// BORN YEAR
var annoNascita = annoAttuale - ageUser;

console.log(annoNascita);

//USER CITY OF BIRTH
var cityOfBirth = prompt('Enter your city of birth');

document.getElementById('city').innerHTML = 'City of birth: ' + cityOfBirth; 

// PHONE NUMBER
var phoneNumber = prompt('Enter your phone number');

document.getElementById('phone').innerHTML = 'Phone Number: ' + phoneNumber; 

// STARRED COLOR
var favouriteColor = prompt('Enter your favourite color');

document.getElementById('favouritecolor').innerHTML = 'Favourite color: ' + favouriteColor;

