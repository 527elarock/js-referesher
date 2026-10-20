// Demo data array we will use in all examples
const foods = ['Pizza', 'Tacos', 'Ice Cream', 'Burgers', 'Pasta']

// helper function: will display whatever HTML/text we pass into the #out div
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* 
  1) listFoods()
     - Use a for...of loop
     - Output all foods into the #out div (as <p> tags or list items)
*/
function listFoods () {

  let output = ''
    for (const food of foods){
      output += `<p> ${food}</p>`
    }


    render(output)

}

/* 
  2) numberedFoods()
     - Use a classic for loop with index
     - Output foods as an ordered list (<ol><li>...</li></ol>)
*/
function numberedFoods () {

  let output = `<ol class = "list-group list-group-numbered">`
    for( let i=0; i < foods.length; i++){
      output += `<li class = "list-group-item"> ${foods[i]}</li>`
    }

  

  output += `</ol>`
  render(output)


}

/* 
  3) filterFoods()
     - Prompt the user for a letter
     - Loop through foods
     - Only show foods that start with that letter
     - If no matches, display a "not found" message
*/
function filterFoods () {

  const letter = prompt ('Enter a letter to filter by:')
    if(!letter){
      render(`<p class = "text-muted"> Please enter a letter !!!!!!</p>`)
      return
    }

    const lower = letter.toLowerCase()
    const matches = foods.filter(f => f.toLowerCase().startsWith(lower)) 


    if(matches.length === 0){
      render(`<p class="m-0">No Foods found starting with '<strong>${letter}</strong>'</p>`)
      return
    }

    const list = matches.map(item => `<li class= "list-group-item">${item}</li>`).join()

    render(`<ul class = "list-group">${list}</ul>`)

}

/* 
  4) forEachFoods()
     - Use foods.forEach()
     - Output each food as a Bootstrap card
     - Cards should be placed in a centered row
*/
function forEachFoods () {

  let output = `<div class = "row g-3 justify-content-center">`
    foods.forEach(food => {
      output += ` 
      <div class = "col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
        <div class= "card shadow-sm w-100">
          <div class="card-body text-center">
            <h5 class="card-title mb-0">${food}</h5>
          </div>
        </div>
      </div>
      `
    })

    output += `</div>`
    render(output)

}

// ---- Event listeners (buttons) ----
document.getElementById('btnList').addEventListener('click', listFoods)
document.getElementById('btnNums').addEventListener('click', numberedFoods)
document.getElementById('btnFilter').addEventListener('click', filterFoods)
document.getElementById('btnForEach').addEventListener('click', forEachFoods)

//  ---------------STUDENT WORK SECTION--------------

// Task 1 — Uppercase List
function uppercaseList () {
  const upperFoods = foods.map(food => food.toUpperCase());

  let output = '<ul class="list-group">';

  for (const food of upperFoods) {
    output += `<li class="list-group-item">${food}</li>`;
  }

  output += '</ul>';
  render(output);
}


// Task 2 — Reverse List
function reverseList () {
  let output = '<ul class="list-group">';

  for (let i = foods.length - 1; i >= 0; i--) {
    output += `<li class="list-group-item">${foods[i]}</li>`;
  }

  output += '</ul>';
  render(output);
}


// Task 3 — Random Food Picker
function randomFoodPicker () {
  const randomIndex = Math.floor(Math.random() * foods.length);
  const food = foods[randomIndex];

  let output = `
    <div class="card shadow-sm text-center">
      <div class="card-body">
        <h5 class="card-title">Today's Pick</h5>
        <p class="card-text">${food}</p>
      </div>
    </div>
  `;

  render(output);
}


// Task 4 — Word Lengths
function wordLengths () {
  let output = '<ul class="list-group">';

  for (const food of foods) {
    output += `<li class="list-group-item">${food} — ${food.length} letters</li>`;
  }

  output += '</ul>';
  render(output);
}

// ---- Event listeners for the new buttons ----
// (Make sure to add matching buttons in index.html)
document.getElementById('btnUppercase').addEventListener('click', uppercaseList)
document.getElementById('btnReverse').addEventListener('click', reverseList)
document.getElementById('btnRandom').addEventListener('click', randomFoodPicker)
document.getElementById('btnLengths').addEventListener('click', wordLengths)
