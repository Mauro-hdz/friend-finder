
// Not sure about this yet, just an idea
// function newPerson(name, favFood, answers) {
//     this.name = name,
//     this.favFood = favFood,
//     this.answers = answers
// };

// var someone = new newPerson(Bobby, Pizza, [1,2,3,4,5,1,2,3,4,5]);

document.getElementById("dropdown-item").addEventListener("click", function(event){
    event.preventDefault()
  });

let peopleArray =[
    {
        "name":"Ahmed",
  "favoriteFood":"Tacos",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
    },
]
module.exports = peopleArray;