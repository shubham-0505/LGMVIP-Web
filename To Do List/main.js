let addToDoButton = document.getElementById('btn'); // creating a variable for button
let toDoContainer = document.getElementById('toDoContainer'); // creating a variable for to do activities
let inputField = document.getElementById('inputField'); // creating a variable for input field

document.addEventListener('keypress', function (e) { // activity should be added by pressing 'enter' key as well

   if (e.key === 'Enter') {
      var paragraph = document.createElement('p')
      paragraph.innerText = inputField.value;
      paragraph.classList.add('activityStyling');
      toDoContainer.appendChild(paragraph);
      inputField.value = "";
      e.preventDefault();

      paragraph.addEventListener('click', function () {
         paragraph.style.textDecoration = "line-through"; // line through a activity to indicate that its done
      })
      paragraph.addEventListener('dblclick', function () {
         toDoContainer.removeChild(paragraph); // double click to remove a activity
      })
   }
});

addToDoButton.addEventListener('click', function () {
   var paragraph = document.createElement('p') // creating a paragraph when user clicks add button
   paragraph.innerText = inputField.value; // the text in paragraph will be equal to 
   // to do activity that user enters
   paragraph.classList.add('activityStyling'); // styling the paragraph
   toDoContainer.appendChild(paragraph); // appending the paragraph to the container with activity
   inputField.value = ""; // value of inputField will be null string once the activity is added


   paragraph.addEventListener('click', function () {
      paragraph.style.textDecoration = "line-through"; // line through a activity to indicate that its done
   })
   paragraph.addEventListener('dblclick', function () {
      toDoContainer.removeChild(paragraph); // double click to remove a activity
   })
});