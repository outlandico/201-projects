function guessMyFavoriteSport() {
    let favoriteBaseballTeam = ["Dodgers", "Angels", "Orioles", "Padres"];
    let guess = prompt("Guess one of my favorite sport teams");
    guess = guess.toLowerCase();

        if (guess === "angels") {
        document.write("You know it!" + guess + " is my favorite team!");
    } else {
        document.write("I'm sorry to hear that!");
    }
}

function askMilitaryService() {
    let answer = prompt("Have you served in the military? (yes/no)");
    answer = answer.toLowerCase();
    if (answer === "yes") {
        document.write("Thank you for your service.");
    } else if (answer === "no") {
        document.write("Thank you for letting us know.");
    } else {
        document.write("Invalid response. Please answer with 'yes' or 'no'.");
    }
}

function askAboutBeachLiving() {
    let answer = prompt("Do you live by the beach? (yes/no)");
    answer = answer.toLowerCase();
    if (answer === "yes") {
        document.write("That's awesome! Living by the beach must be great.");
        console.log("That's awesome! Living by the beach must be great.");
        alert("That's awesome! Living by the beach must be great.");
    } else if (answer === "no") {
        document.write("That's okay. There are still plenty of other great places to live.");
        console.log("That's okay. There are still plenty of other great places to live.");
        alert("That's okay. There are still plenty of other great places to live.");
    } else {
        document.write("Invalid response. Please answer with 'yes' or 'no'.");
        console.log("Invalid response. Please answer with 'yes' or 'no'.");
        alert("Invalid response. Please answer with 'yes' or 'no'.");
    }
}

function askAboutCollection() {
    let answer = prompt("Do you have a collection? (yes/no)");
    answer = answer.toLowerCase();
    if (answer === "yes") {
        document.write("That's awesome!");
        alert("That's interesting!");
    } else if (answer === "no") {
        document.write("That's okay.");
        alert("That's okay.");
    } else {
        document.write("Invalid response. Please answer with 'yes' or 'no'.");
        alert("Invalid response. Please answer with 'yes' or 'no'.");
    }
}


function askAboutGraphicDesignExperience() {
    let answer = prompt("Do you have experience in graphic design? (yes/no)");
    answer = answer.toLowerCase();
    if (answer === "yes") {
        document.write("That's great!");
        alert("That's great!");
    } else if (answer === "no") {
        document.write("That's okay. Graphic design is an interesting field!");
        alert("That's okay. Graphic design is an interesting field!");
    } else {
        document.write("Invalid response. Please answer with 'yes' or 'no'.");
        alert("Invalid response. Please answer with 'yes' or 'no'.");
    }
}

