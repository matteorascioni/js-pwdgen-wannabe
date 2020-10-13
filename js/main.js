// USER NAME REQUEST
var userName = prompt('Enter your name');

document.getElementById('username').innerHTML = 'Name: ' + userName;

// SURNAME REQUEST
var surName = prompt('Enter your surname');

document.getElementById('surname').innerHTML = 'Surname: ' + surName;

// FAVOURITE COLOR
var favouriteColor = prompt('Enter your favourite color');

document.getElementById('favouritecolor').innerHTML = 'Favourite color: ' + favouriteColor;

// PASSWORD
var passWord = userName + surName + favouriteColor;

document.getElementById('password').innerHTML = 'Password: ' + passWord;

// YEARS AND AGE SECTION
// CURRENTYEAR
var currentYear = 2020;

// AGE USER REQUEST
var ageUser = prompt('Enter your age');

document.getElementById('age').innerHTML = 'Age: ' + ageUser;

// BORN YEAR
var yearOfBirth = currentYear - ageUser;

document.getElementById('yearofbirth').innerHTML = 'Year of birth: ' + yearOfBirth;


















// COUNTRY OF BIRTH
var countryOfBirth = prompt('Enter your country');

document.getElementById('country').innerHTML = 'Country of birth: ' + countryOfBirth;

//  CITY OF BIRTH
var cityOfBirth = prompt('Enter your city of birth');

document.getElementById('city').innerHTML = 'City of birth: ' + cityOfBirth; 

// PHONE NUMBER
var phoneNumber = prompt('Enter your phone number');

document.getElementById('phone').innerHTML = 'Phone Number: ' + phoneNumber; 

