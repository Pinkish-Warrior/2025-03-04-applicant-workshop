// import...

// Toggle hidden information
const toggleButton = document.getElementById('btn-toggle1');
const hiddenInfo = document.querySelector('.hidden-info');

toggleButton.addEventListener('click', () => {
    hiddenInfo.classList.toggle('hidden-info');
});

// Change background color of the box
const colorButton = document.getElementById('btn-change-color');
const colorBox = document.getElementById('color-box');

colorButton.addEventListener('click', () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
});

// Form submission handling
const form = document.getElementById('feedback-form');
const formResponse = document.getElementById('form-response');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;
    formResponse.textContent = `Thank you, ${name}, for your feedback: "${feedback}"`;
    form.reset();
});

// Function to render the items on data-container
function renderItems(items) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear previous content
  
    items.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `<p>${item}</p>`;
      container.appendChild(div);
    });
  }

// Add list section

const dataSection = document.getElementById('data-section')
const dataSectionHeader = dataSection.querySelector('h2')

dataSectionHeader.textContent = 'Section 4: Shopping List'
dataSectionHeader.className = 'shopping-list-header'

const newForm = document.createElement('form')
dataSection.appendChild(newForm)

const listInputLabel = document.createElement('label')
listInputLabel.htmlFor = 'shopping-list'
listInputLabel.textContent = 'Add item:'
newForm.appendChild(listInputLabel)

const listInput = document.createElement('input')
listInput.type = 'text'
listInput.id = 'shopping-list'
listInput.name = 'shopping-list'
newForm.appendChild(listInput)

const addItemButton = document.createElement('button')
addItemButton.type = 'button'
addItemButton.textContent = 'Add'
newForm.appendChild(addItemButton)

const clearItemButton = document.createElement('button')
clearItemButton.type = 'button'
clearItemButton.textContent = 'Clear'
newForm.appendChild(clearItemButton)

const listContainer = document.createElement('ul')
dataSection.appendChild(listContainer)

addItemButton.addEventListener('click', (event) => {
  addToList(listInput.value)
  listInput.value = ''
})

function addToList(item) {
  listContainer.innerHTML += `<li>${item}</li>`
}

clearItemButton.addEventListener('click', (event) => {
  listContainer.innerHTML = ''
})




/* IDEAS FOR ADDITIONAL INTERACTIONS

1. Add functionality to highlight the navigation link of the current section as the user scrolls.
2. Implement a light/dark mode toggle using CSS root variables.
3. Create a dynamic list where users can add and remove items.
4. Add validation to the feedback form to ensure name and feedback are not empty.
5. Use localStorage to save the user's name for personalized greetings.
6. Animate the color change of the box with a smooth transition.
7. Display a live character counter for the feedback textarea.
8. Implement drag-and-drop functionality for rearranging items in a list.
9. Add a countdown timer to a section, resetting after it reaches zero.
10. Fetch and display data from a public API (e.g., random jokes or quotes).

*/

// Call the render function on page load or when needed
renderItems(dataItems);