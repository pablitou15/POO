const textForm = document.getElementById("textForm");
const textInput = document.getElementById("textInput");
const resultsContainer = document.getElementById("results-container");

textForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get the entered text
  const enteredText = textInput.value.trim();

  // Check if the text is not empty
  if (enteredText) {
    // Create a paragraph element to display the text
    const textParagraph = document.createElement("p");
    textParagraph.textContent = enteredText;

    // Append the paragraph element to the results container
    resultsContainer.appendChild(textParagraph);

    // Clear the input field for the next entry
    textInput.value = "";
  }
});
