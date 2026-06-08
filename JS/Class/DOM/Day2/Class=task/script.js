const arr = [
  {
    teamAbbreivation: "CSK",
    teamFullName: "Chennai Super Kings",
    jerseyColorPrimary: "Yellow",
    jerseyColorSecondary: "Blue",
    captain: "Ruturaj Gaikwad",
    noOfTrophies: 5
  },
  {
    teamAbbreivation: "MI",
    teamFullName: "Mumbai Indians",
    jerseyColorPrimary: "Blue",
    jerseyColorSecondary: "Gold",
    captain: "Hardik Pandya",
    noOfTrophies: 5
  },
  {
    teamAbbreivation: "KKR",
    teamFullName: "Kolkata Knight Riders",
    jerseyColorPrimary: "Purple",
    jerseyColorSecondary: "Gold",
    captain: "Ajinkya Rahane",
    noOfTrophies: 3
  },
  {
    teamAbbreivation: "RCB",
    teamFullName: "Royal Challengers Bengaluru",
    jerseyColorPrimary: "Red",
    jerseyColorSecondary: "Blue", // Updated to reflect recent jersey refreshes
    captain: "Rajat Patidar",
    noOfTrophies: 1
  },
  {
    teamAbbreivation: "SRH",
    teamFullName: "Sunrisers Hyderabad",
    jerseyColorPrimary: "Orange",
    jerseyColorSecondary: "Black",
    captain: "Pat Cummins",
    noOfTrophies: 1
  },
  {
    teamAbbreivation: "RR",
    teamFullName: "Rajasthan Royals",
    jerseyColorPrimary: "Pink",
    jerseyColorSecondary: "Blue",
    captain: "Riyan Parag",
    noOfTrophies: 1
  },
  {
    teamAbbreivation: "DC",
    teamFullName: "Delhi Capitals",
    jerseyColorPrimary: "Blue",
    jerseyColorSecondary: "Red",
    captain: "Axar Patel",
    noOfTrophies: 0
  },
  {
    teamAbbreivation: "PBKS",
    teamFullName: "Punjab Kings",
    jerseyColorPrimary: "Red",
    jerseyColorSecondary: "Gold",
    captain: "Shreyas Iyer",
    noOfTrophies: 0
  },
  {
    teamAbbreivation: "GT",
    teamFullName: "Gujarat Titans",
    jerseyColorPrimary: "Blue",
    jerseyColorSecondary: "Gold",
    captain: "Shubman Gill",
    noOfTrophies: 1
  },
  {
    teamAbbreivation: "LSG",
    teamFullName: "Lucknow Super Giants",
    jerseyColorPrimary: "Blue",
    jerseyColorSecondary: "Red",
    captain: "Rishabh Pant",
    noOfTrophies: 0
  }
];


let span = document.querySelector('span');
let box = document.querySelector('#box');
let main = document.querySelector('main');
let button = document.querySelector('button');
let p = document.querySelector('p');


button.addEventListener('click',()=>{
    let random = arr[Math.floor(Math.random()*10)]
    span.innerHTML = `${random.teamAbbreivation}`;
    box.style.backgroundColor = `${random.jerseyColorSecondary}`;
    main.style.backgroundColor = `${random.jerseyColorPrimary}`;
    p.innerHTML = `Team Full Name : ${random.teamFullName},<br> Captain : ${random.captain} , <br>Number of trophies won : ${random.noOfTrophies}`
    
})

