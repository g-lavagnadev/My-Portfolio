// Make a autocomplete in the searchbar:
let recipeslist = ["pizza", "focaccia", "tiramisu", "pesto", "carbonara"]; // Create array with the list of recipes
let input = document.querySelector('input'); // Select the first input in the HTML and call it input*/
    input.addEventListener('keyup', function(event) { // Add event listener to input: listen when a key is released and do the f(x)...
        let suggestions = ''; // Create empty string called suggestions*/
        let counter = 0;
        if (input.value) { // If input has a value (aka if the user wrote)...
                for (word of recipeslist) { // ...loop each word in the recipe list
                        if (word.startsWith(input.value)) { // ...if the word looped starts the same as the input
                                suggestions += `<li><a href="${word}.html">${word}</a></li>`; // ...add a <li> element with that word in it
                                counter++;
                                if (counter == 2) {
                                        break
                                }
                        }
                }
        }
        document.querySelector('ul').innerHTML = suggestions; // select the first <ul> element and change the HTML to copy "suggestions"
});


// Star rating system (just offline, non saving):
const stars = document.querySelectorAll('.stars'); //Select all the stars class and put it in a list of nodes*/
for (let star of stars) { // loop throgh the nodes and call each "star" //
        star.addEventListener('click', function(event) { // When the user clicks on a star
        event.target.setAttribute('src', 'pics/starfull.svg') // change the pic to a full star. The pics are saved in pics/star.svg and pics/starfull.svg
        for (let i = 0; i <= 5; i++) { // Do a loop from 1 to 5
                if (stars[i] == event.target) { // if the star 1-5 is the event target (clicked)
                        for (let j = 0 ; j <= i; j++) { // do a loop of the previous stars...
                        stars[j].setAttribute('src', 'pics/starfull.svg') // and change the pic of each of them
                }};
                };
        });
};



