// let time = document.querySelector(".time");
// let ampm = document.querySelector("#pmam");
// let xxx = document.querySelector("#xxx");

// setInterval(() => {
//   let date = new Date();
//   //   time.innerHTML = date;
//   let hours = date.getHours(); //19
//   let minutes = date.getMinutes(); //31
//   let second = date.getSeconds(); //28
//   let dateget = date.getDate();
//   let day = date.getDay();
//   let fullyear = date.getFullYear();
//   let Month = date.getMonth();

//   time.innerHTML = `${hours}:${minutes}:${second}`;
//   xxx.innerHTML = `${dateget}.${day}.${fullyear}.${Month}`;

//   let pmam1 = date.toLocaleTimeString(); //7:31:28 PM
//   let pmam2 = date.toLocaleString(); //1/10/2025, 7:31:28 PM
//   let pmam3 = date.toLocaleDateString(); //1/10/2025

//   ampm.innerHTML = `${pmam1}<br> ${pmam2}<br> ${pmam3}`;
// });
// /*********************************************************************** */

let clock = document.querySelector("#clock");

// setInterval(() => {
//   let clockNew = new Date();
//   let clock1 = clockNew.toLocaleTimeString();
//   clock.innerHTML = clock1;
// });

let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

setInterval(() => {
  let clock = new Date();
  let hours = clock.getHours();

  hour.innerHTML = hours;
});

setInterval(() => {
  let clock = new Date();
  let minutes = clock.getMinutes();

  minute.innerHTML = `${minutes}`;
});

setInterval(() => {
  let clock = new Date();
  let seconds = clock.getSeconds();

  second.innerHTML = `${seconds}`;
});
