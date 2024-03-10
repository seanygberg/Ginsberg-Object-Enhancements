// Same keys and values

function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
}

// Computed Property Names

var favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

// Object Methods

const instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName  + "says bye!";
    }
}

// createAnimal function

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet()

function createAnimal(species, verb, sound) {
    let resultingObject = {
        species,
        [verb]() {
            return sound;
        }
    }
    return resultingObject;
}