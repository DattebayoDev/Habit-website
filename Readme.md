# Things I forgot about:
Accessing Input Value Too Early: 
I tried to log habitInput.value immediately on page load, before the user interacted with the form. 
Improvement: Always retrieve input values after user action (e.g., form submission or button click).

Missing Event Listener: 
I didn’t have an event listener on the form to handle user input submission. 
Improvement: Use event listeners to capture form data and prevent default form behavior when needed.

Incorrect Button Attribute: 
The button tag had action="submit", which is not correct. 
Improvement: Use type="submit" for form submission buttons.

## Review: 
Arrow functions

## Dumb Mistakes 
I spent 2 hours, trying to figure out why my console was not logging my habit input's turns out I just needed to update the chrome browser. This made me feel very duumb. 