//js for this was fun, I enjoyed working with APIs and making a joke generator. - JF//

// Getting the HTML elements where the jokes will show up
const jokeDisplay = document.getElementById("joke-display"); // setup goes here
const punchlineDisplay = document.getElementById("punchline-display"); // punchline goes here
const newJokeBtn = document.getElementById("new-joke"); // button to get new joke

// This is a function to fetch a joke and display it
function fetchJoke() {
  // Show a loading message while waiting for the joke
  jokeDisplay.textContent = "Loading a hilarious setup..";
  punchlineDisplay.textContent = "Hold tight for the punchline..";

  // Fetching from the JokeAPI (so fetch :-p)
  fetch(
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
  )
    .then((response) => response.json()) // convert the response to JSON
    .then((data) => {
      // Puts the setup and delivery from the API into the page
      jokeDisplay.textContent = data.setup;
      punchlineDisplay.textContent = data.delivery;
    })
    .catch((error) => {
      // In case something goes wrong
      console.log("Oops, something went wrong:", error);
      jokeDisplay.textContent = "Hmm.. no joke this time 😅";
      punchlineDisplay.textContent = "";
    });
}

// Call the function once when the page loads
fetchJoke();

// Call the function again when the button is clicked
newJokeBtn.addEventListener("click", fetchJoke);
