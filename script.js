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
let mode = 'light'
  // Implement a light/dark mode toggle using CSS root variables.
  // create
  const toggleBackground = document.getElementById('btn-toggleBackground');
  onclick = () => {
    // document.documentElement.style.cssText = "--secondary-color"
    if (mode === 'light') {
      document.body.style.backgroundColor = "var(--primary-color)";
      document.querySelector('header').style.backgroundColor = "var(--secondary-color)";
      mode = 'dark'
    } else {
      document.body.style.backgroundColor = "var(--secondary-color)";
      document.querySelector('header').style.backgroundColor = "var(--primary-color)";
      mode = 'light'
    }
  }
  // now I need it to toggle back to the original color

  
  
  const root = document.documentElement

  toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('secondary');
    root.classList.toggle('green-mode');
  })
  


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




  document.addEventListener("DOMContentLoaded", () => {
    // Get or create #data-container
    let container = document.getElementById('data-container');
    if (!container) {
        container = document.createElement("div");
        container.id = "data-container";
        document.body.appendChild(container); // Append to body if not found
    }

    // Check if the elements exist, if not, create them
    let quoteElement = document.getElementById("quote");
    let authorElement = document.getElementById("author");

    if (!quoteElement) {
        quoteElement = document.createElement("div");
        quoteElement.id = "quote";
        container.appendChild(quoteElement);
    }
    
    const lineBreak = document.createElement("br");
    container.appendChild(lineBreak);

    if (!authorElement) {
        authorElement = document.createElement("div");
        authorElement.id = "author";
        container.appendChild(authorElement);
    }

    // Define API URL
    const api_url ="https://thequoteshub.com/api/";

    async function getapi(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);

            // Update the existing elements
            quoteElement.textContent = `"${data.text}"`;
            authorElement.textContent = `- ${data.author}`;
        } catch (error) {
            console.error("Error fetching quote:", error);
            quoteElement.textContent = "Failed to load quote. Please try again later.";
        }
    }

    // Call the function
    getapi(api_url);
});

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


renderItems(dataItems)

