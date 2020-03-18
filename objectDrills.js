"use strict";

// 1 object initializers and methods
const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water / this.flour) * 100;
  }
};

console.log(`flour: ${loaf.flour} | hydration: ${loaf.water}`);
console.log(loaf.hydration());

// 2 iterating over an object's properties
const myObj = {
  foo: "fighters",
  bar: "scuba",
  fum: "fumes",
  quux: "quiz",
  spam: "musabi"
};

function myKeys(myObj) {
  for (const key in myObj) {
    const value = myObj[key];
    console.log(key);
    console.log(value);
  }
}

myKeys(myObj);

// 3 arrays in objects
let obj = {
  meals: [
    "breakfast",
    "second breakfast",
    "elevenses",
    "lunch",
    "afternoon tea",
    "dinner",
    "supper"
  ]
};

console.log(obj.meals[3]);

// 4 Arrays of Objects
function person(person, job) {
  const validTypes = ["andy", "maggie", "sergio", "alex", "bruce"];
  if (!person || !job) throw new TypeError("Missing required attributes");
  if (!validTypes.includes(person)) throw new TypeError("Unknown person type");

  this.type = person;
  this.occupation = job;
}

const andy = new person("andy", "engineer");
console.log(andy.type);
console.log(andy.occupation);

const maggie = new person("maggie", "artist");
console.log(maggie.type);
console.log(maggie.occupation);

const sergio = new person("sergio", "machinist");
console.log(sergio.type);
console.log(sergio.occupation);

const alex = new person("alex", "gardener");
console.log(alex.type);
console.log(alex.occupation);

const bruce = new person("bruce", "engineer");
console.log(bruce.type);
console.log(bruce.occupation);

// 5 Properties that aren't there

const ob1 = {
  name: "Nick",
  jobTitle: "Software dev :3",
  boss: "evil tyrant 1"
};
const ob2 = {
  name: "Rick",
  jobTitle: "Aspiring artist",
  boss: "evil tyrant 2"
};
const ob3 = {
  name: "Bick",
  jobTitle: "brush manufacturer",
  boss: "evil tyrant 3"
};
const ob4 = {
  name: "Cick",
  jobTitle: "Useless",
  boss: "evil tyrant 4"
};
const ob5 = {
  name: "Lick",
  jobTitle: "Schnozberry expert"
};
const arrayBoss = [ob1, ob2, ob3, ob4, ob5];
arrayBoss.forEach(e => {
  if (e.boss) {
    console.log(`${e.jobTitle} ${e.name} reports to ${e.boss}.`);
  } else {
    console.log(`${e.jobTitle} ${e.name} doesn't report to anybody.`);
  }
});

// 6 Cracking the code
//object
const cypher = {
  2:'alpha',
  3:'bravo',
  4:'charlie',
  5:'delta',
  ' ': 'echo'
};

//get object keys
function decoder(cypher) {
  for (const key in cypher) {
  console.log(key);
  }  
  }
console.log(decoder(cypher));

//update and log object


// 7 Factory Functions with LORT
function createCharacter(
  nameofChar,
  nickNameOfChar,
  raceofChar,
  origOfChar,
  atkOfChar,
  defOfChar
) {
  return {
    Name: nameofChar,
    NickName: nickNameOfChar,
    Race: raceofChar,
    Origin: origOfChar,
    Attack: atkOfChar,
    Defense: defOfChar,
    describe: function() {
      console.log(`${this.Name} is a ${this.Race} from ${this.Origin}.`);
    },
    evaluateFight: function(character) {
      let x = 0;
      let y = 0;
      if (character.Defense <= this.Attack) {
        x = character.Defense - this.Attack;
      }
      if (this.Defense <= character.Attack) {
        y = this.Defense - character.Attack;
      }
      return `Your opponent takes ${x} damage and you receive ${y} damage`;
    }
  };
}
const characters = [
  createCharacter(
    "Gandalf the White",
    "gandalf",
    "Wizard",
    "Middle Earth",
    10,
    6
  ),
  createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1),
  createCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2),
  createCharacter(
    "Aragorn son of Arathorn",
    "aragorn",
    "Man",
    "Dunnedain",
    6,
    8
  ),
  createCharacter("Legolas", "legolas", "Elf", "Woodland Realm", 8, 5),
  createCharacter("Arwen Undomiel", "yolo", "Half-Elf", "Rivendell", 8, 5)
];
console.log("Finding Aragorn");
console.log(characters.find(e => e.NickName === "aragorn"));
console.log("Filtering hobbits");
console.log(characters.filter(e => e.Race === "Hobbit"));
console.log("Filtering attack above 5");
console.log(characters.filter(e => e.Attack > 5));

// BONUS: A Database Search
const HEROES = [
  { id: 1, name: "Captain America", squad: "Avengers" },
  { id: 2, name: "Iron Man", squad: "Avengers" },
  { id: 3, name: "Spiderman", squad: "Avengers" },
  { id: 4, name: "Superman", squad: "Justice League" },
  { id: 5, name: "Wonder Woman", squad: "Justice League" },
  { id: 6, name: "Aquaman", squad: "Justice League" },
  { id: 7, name: "Hulk", squad: "Avengers" }
];

function findOne(arr, query) {
  let reducedHeroesList = arr;

  Object.values(query).forEach(
    queryVal =>
      (reducedHeroesList = reducedHeroesList.filter(e =>
        Object.values(e).find(k => k === queryVal)
      ))
  );
  if (reducedHeroesList[0] === undefined) {
    return null;
  }
  return reducedHeroesList[0];
}

console.log(findOne(HEROES, { id: 1 }));
// { id: 1, name: 'Captain America', squad: 'Avengers' }

console.log(findOne(HEROES, { id: 10 }));
// null

console.log(findOne(HEROES, { id: 2, name: "Aquaman" }));
// null

console.log(findOne(HEROES, { id: 5, squad: "Justice League" }));
// { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

console.log(findOne(HEROES, { squad: "Justice League" }));
// { id: 4, name: 'Superman', squad: 'Justice League' }

// BONUS II: A Database Method
const Database = {
  store: {
    heroes: [
      { id: 1, name: "Captain America", squad: "Avengers" },
      { id: 2, name: "Iron Man", squad: "Avengers" },
      { id: 3, name: "Spiderman", squad: "Avengers" },
      { id: 4, name: "Superman", squad: "Justice League" },
      { id: 5, name: "Wonder Woman", squad: "Justice League" },
      { id: 6, name: "Aquaman", squad: "Justice League" },
      { id: 7, name: "Hulk", squad: "Avengers" }
    ]
  },
  findOne: function(query) {
    let reducedHeroesList = this.store.heroes;
    Object.values(query).forEach(
      queryVal =>
        (reducedHeroesList = reducedHeroesList.filter(e =>
          Object.values(e).find(k => k === queryVal)
        ))
    );
    if (reducedHeroesList[0] === undefined) {
      return null;
    }
    return reducedHeroesList[0];
  }
};

console.log(Database.findOne({ id: 2 }));
// { id: 2, name: 'Iron Man', squad: 'Avengers' }
