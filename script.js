const account1 = {
  id: 'JS',
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  balance:3000
};

const account2 = {
  id: 'JD',
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  balance:4000
};

const account3 = {
  id: 'ST',
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  balance: 6000
};

const account4 = {
  id: 'SS',
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  balance:7000
};

const accounts = [account1, account2, account3, account4];


let loginBtn = document.querySelector(".login__btn");
let currentUser = 0;

loginBtn.addEventListener('click', () => {
  let user = document.getElementById("user").value;
  let pin = document.getElementById("pin").value;
  let welcome = document.querySelector(".welcome");
  let app = document.getElementById("application");
  let accountBalance = document.querySelector(".balance__value");
  document.getElementById("user").value = '';
  document.getElementById("pin").value = '';
  
  for (let i = 0; i < accounts.length; i++) {
    if (user === accounts[i].id && pin == accounts[i].pin) {
      currentUser = accounts[i];
      welcome.innerText = `Welcome Back ${accounts[i].owner}`;
      app.style.opacity = "1";
      accountBalance.innerText = `${currentUser.balance}€`;

      
      return;
    }
  }

  alert("Invalid Credentials");


});

let transferBtn = document.querySelector(".form__btn--transfer");

transferBtn.addEventListener('click', () => {
  let transferTo = document.querySelector(".form__input--to").value;
  let transferAmount = parseFloat(document.querySelector(".form__input--amount").value);
  let accountBalance = document.querySelector(".balance__value");
  document.querySelector(".form__input--to").value='';
  document.querySelector(".form__input--amount").value='';
  


  
    for (let i = 0; i < accounts.length; i++) {
      if (transferTo === accounts[i].id) {
        if (currentUser.balance >= transferAmount) {
          currentUser.balance -= transferAmount;
          accounts[i].balance += transferAmount;
          accountBalance.innerText = `${currentUser.balance}€`;
          console.log("Transfer successful");


          let movements = document.querySelector('.movements');

          let movementsRow = document.createElement('div');
          movementsRow.classList.add('movements__row');
  
          let movementsType = document.createElement('div');
          movementsType.classList.add('movements__type', 'movements__type--withdrawal');
          movementsType.innerHTML = 'Withdrawal';
  
          let movementsDate = document.createElement('div');
          movementsDate.classList.add('movements__date');
          movementsDate.innerHTML = new Date().toLocaleDateString();
  
          let movementsValue = document.createElement('div');
          movementsValue.classList.add('movements__value');
          movementsValue.innerText = `-${transferAmount}€`;
  
          movementsRow.appendChild(movementsType);
          movementsRow.appendChild(movementsDate);
          movementsRow.appendChild(movementsValue);
          movements.appendChild(movementsRow);
          return;
    
      } 
        
        else {
          console.log("Insufficient funds");
          alert("Insufficient funds");
          
        }
        
      }
    }
    alert("Recipient not found");
    
});

let loanBtn = document.querySelector(".form__btn--loan");
loanBtn.addEventListener('click', () => {
  let loanAmt = parseFloat(document.querySelector(".form__input--loan-amount").value);
  let accountBalance = document.querySelector(".balance__value");
 
  document.querySelector(".form__input--loan-amount").value='';

    
  currentUser.balance += loanAmt;
    accountBalance.innerText = `${currentUser.balance}€`;
    console.log("Loan added");

    let movements = document.querySelector('.movements');

          let movementsRow = document.createElement('div');
          movementsRow.classList.add('movements__row');
  
          let movementsType = document.createElement('div');
          movementsType.classList.add('movements__type', 'movements__type--deposit');
          movementsType.innerHTML = 'Deposit';
  
          let movementsDate = document.createElement('div');

          movementsDate.classList.add('movements__date');
          movementsDate.innerHTML = new Date().toLocaleDateString();
  
          let movementsValue = document.createElement('div');
          movementsValue.classList.add('movements__value');
          movementsValue.innerText = `${loanAmt}€`;
  
          movementsRow.appendChild(movementsType);
          movementsRow.appendChild(movementsDate);
          movementsRow.appendChild(movementsValue);
          movements.appendChild(movementsRow);
    
   
});

let closeBtn=document.querySelector(".form__btn--close")
closeBtn.addEventListener('click',()=>{
  let closeUser=document.querySelector(".form__input--user").value;
  let closePin=document.querySelector(".form__input--pin").value;
  document.querySelector(".form__input--user").value='';
  document.querySelector(".form__input--pin").value='';
  
  for(let i=0;i<accounts.length;i++){
    if(closeUser==currentUser.id){
      accounts.splice(i,1);
      console.log("account removed");
      return;
      
    }else{
      console.log("Not authorised to remove this account");
    }

  }
 
})
