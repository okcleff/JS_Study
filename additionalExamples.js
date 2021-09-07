let students = [
  {id: 1, name: 'James', age: 30},
  {id: 2, name: 'Tim', age: 29},
  {id: 3, name: 'John', age: 40},
  {id: 4, name: 'Brian', age: 25}
];

const result = students.filter(studentAge => studentAge.age >= 30);
// 화살표 함수를 활용해볼까요?

console.log(result);

// --------------------------------------------------------------------------------------------------

let teamOfTheYear2020 = ['Neymar', 'Lewandowski', 'C.Ronaldo', 'Messi', 'KDB', 'Thiago', 'A.Davies', 'van Dijk', 'Ramos', 'Kimmich', 'Neuer'];
let teamOfTheYear2019 = ['Mane', 'Lewandowski', 'C.Ronaldo', 'Messi', 'KDB', 'de Jong', 'Robertson', 'van Dijk', 'de Ligt', 'Alexander-Arnold', 'Alisson'];

let worldClass = [];

function whoIsWorldClass (year1, year2) {
  for (i = 0; i < year1.length; i++) {
    for (j = 0; j < year2.length; j++) {
      if(year1[i] === year2[j]) {
        worldClass.push(year1[i]);
      }
    }
  }
}

whoIsWorldClass(teamOfTheYear2020, teamOfTheYear2019);
console.log(worldClass);