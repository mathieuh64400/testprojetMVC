let y = Math.random() * Math.random();

let x = Math.trunc(y * 15);
console.log(x);

let eltref = document.getElementById("ref");

console.log(eltref);

for (let i = 0; i <= x ; i++) {

  
  let list = document.createElement("ol");
  list.classList.add("die-list");
  list.classList.add("even-roll");
 
  list.setAttribute("data-roll", "1");
  list.innerHTML = `
   <li class="die-item" data-side="1">
  <span class="dot"></span>
</li>
<li class="die-item" data-side="2">
  <span class="dot"></span>
  <span class="dot"></span>
</li>
<li class="die-item" data-side="3">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</li>
<li class="die-item" data-side="4">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</li>
<li class="die-item" data-side="5">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</li>
<li class="die-item" data-side="6">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</li>;`
  console.log(i);
  list.id = "die-"+i;

  // console.log(list.id);
  
  eltref.append(list);
  
  // console.log(typeof list);
  document.getElementById("die-"+i).addEventListener("click", rollDice);
}


let dice = [...document.querySelectorAll(".die-list")];
console.log(dice);

function rollDice() {

  dice.forEach(die => {
    toggleClasses(die);
    die.dataset.roll = getRandomNumber(1, 6);
  });
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


