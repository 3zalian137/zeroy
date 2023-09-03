// const user = {
//     theName: "Osama",
//     theAge: 39,
//     skills: ["HTML", "CSS", "JavaScript"],
//     addresses: {
//       egypt: "Cairo",
//       ksa: "Riyadh",
//     },
//   };

//   const {
//     theName: n,
//     theAge: a,
//     skills: [one, two, three],
//     addresses: { egypt: e },
//   } = user;

//   console.log(`my name is ${n}`);
//   console.log(`my age is: ${a}`);
//   console.log(`my skills is ${one} , ${three}`);



let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },

];




// function one () {
//   const {
//     title : t , age : a , available : aa  , skills : [one , tow]
//   } = 1;
//   if (available = true){
//     console.log("available");
//   }
// };

function numb(num) {
  const { title, age, available, skills } = myFriends[num - 1];
  console.log(title , age);
};

numb(2);