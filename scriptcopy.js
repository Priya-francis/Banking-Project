// 'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  id: 'JS',
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  id: 'JD',
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  id: 'ST',
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  id: 'SS',
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


/////////////////////////////////////////////////
function myFunc(){
  console.log("function called");
  let user=document.querySelector(".login__input--user").value;
  // console.log(user);
  let pin=document.querySelector(".login__input--pin").value;
  let welcome=document.querySelector(".welcome")
  welcome.innerText=("Welcome Back" + + user)

  // console.log(pin);
  // let nameSpan=document.getElementById("nameSpan");
  // nameSpan.innerText=("Welcome Back" + + user)

 
}