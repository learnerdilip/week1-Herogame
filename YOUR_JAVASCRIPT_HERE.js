// Write your JS here
// the hero object
const hero = {
  name: 'Don Corleone',
  health: 10,
  heroic: true,
  inventory: [],
  weapon: {
    type: 'test',
    damage: 2
  }
}

// functions
function rest(person) {
  if(person.health !== 10) {
    hero.health = 10
    person.health =10
  } else {
    alert('Hero is Super Healthy already!!')
  }
  displayStats()
  return person
}
 
function pickUpItem(person,weapon) {
  hero.inventory.push({
    type: 'dagger',
    damage: 2
  })
  person.inventory.push(weapon)
  displayStats()
}

function equipWeapon(person) {
  if(hero.inventory.length !== 0) {
    hero.weapon = hero.inventory[0]
  }
  person.inventory.unshift(person.weapon)
  displayStats()
} 

// Event(click) handling for game items
document.querySelector('#inn').addEventListener('click', rest)
document.querySelector('#dagger').addEventListener('click', pickUpItem)
document.querySelector('#bag').addEventListener('click', equipWeapon)

// deletes the enemy on clicking
document.querySelector('#enemy').addEventListener('click', removeEnemy)
function removeEnemy() {
  document.querySelector('#enemy').style.visibility = 'hidden'
}

// adding the name of the player
window.onload = function () {
  const name = prompt("Please enter your name")
  document.getElementById('getName').innerText = `Welcome ${name} hero!!`
}


// Displaying the stats
function displayStats() {
  console.log("The display stats")
  document.querySelector('#healthStat').innerText = hero.health
  document.querySelector('#heroName').innerText = hero.name
  document.querySelector('#bagContent').innerText = hero.inventory.type
}