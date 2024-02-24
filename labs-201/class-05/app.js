let score = 0; // Initialize score variable

function guessMyFavoriteSport() {
    let favoriteTeams = ["rams", "angels", "kings", "lakers"];
    let guess = prompt("Guess one of my favorite sport teams");
    guess = guess.toLowerCase();

    if (favoriteTeams.includes(guess)) {
        alert("You know it!");
        score++; // Increment score
    } else {
        alert("I'm sorry to hear that!");
    }
    updateScore();
}

function askMilitaryService() {
    let answer = prompt("Did you serve in the Military? (yes/no)");
    answer = answer.toLowerCase();
    if (answer === "yes") {
        score++; // Increment score
        alert("Thank you for your Service!");
    } else if (answer === "no") {
        alert("Thank you for your input!");
    }
    updateScore();
}
function askAboutBeachLiving() {
    let answer = prompt("Do you live by the beach? (yes/no)");
    answer = answer.toLowerCase();
    if (answer === "yes") {
        score++; // Increment score
        alert("That's cool, so do I!");
    } else if (answer === "no") {
        alert("That's okay. There are still plenty of other great places to live.");
    }
    updateScore();
}

function askAboutCollection() {
    let answer = prompt("Do you have a collection? (yes/no)");
    answer = answer.toLowerCase();
    if (answer === "yes") {
        score++; // Increment score
        alert("That's awesome!");
    } else if (answer === "no") {
        alert("That's okay.");
    }
    updateScore();
}

function askAboutGraphicDesignExperience() {
    let answer = prompt("Do you have experience in graphic design? (yes/no)");
    answer = answer.toLowerCase();
    if (answer === "yes") {
        score++; // Increment score
        alert("That's great!");
    } else if (answer === "no") {
        alert("That's okay. Graphic design is an interesting field!");
    }
    updateScore();
}

function guessFavoriteColor() {
    const favoriteColors = ["blue", "green", "red", "yellow"];
    let attempts = 6;

    for (let i = 0; i < attempts; i++) {
        let guess = prompt("Guess my favorite color (you have " + (attempts - i) + " attempts):").toLowerCase();

        if (favoriteColors.includes(guess)) {
            score++; // Increment score
            break;
        }
    }
    updateScore();
}

// Function to display messages to the user
function setMessage(message, color) {
    document.getElementById("message").textContent = message;
    document.getElementById("message").style.color = color;
}

// Function to update the score display
function updateScore() {
    document.getElementById("score").innerHTML = "Score: " + score;
}

// Function to check the user's guess
function checkGuess() {
    // Increment the number of attempts
    attempts++;

    // Get the user's guess from the input field
    const guess = parseInt(document.getElementById("guessInput").value);

    // Check if the guess is a valid number
    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage("Please enter a valid number between 1 and 100.", "red");
        return;
    }

    // Check if the guess is correct
    if (guess === randomNumber) {
        setMessage(`Congratulations! You guessed the correct number (${randomNumber})!`, "green");
    } else if (attempts === 5) {
        setMessage(`Sorry, you've used all 5 attempts. The correct number was ${randomNumber}.`, "red");
    } else {
        let message;
        if (guess < randomNumber) {
            message = "Too low! Try again.";
        } else {
            message = "Too high! Try again.";
        }
        setMessage(message, "red");
    }
}

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", randomNumber);

// Track the number of attempts
let attempts = 0;

// Function to reset the game
function resetGame() {
    // Generate a new random number
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("New random number:", randomNumber);

    // Reset attempts counter
    attempts = 0;

    // Clear the input field and message
    document.getElementById("guessInput").value = "";
    setMessage("", "black");
}

