const input = require('sync-input')

let countWins = 0;
let countLosts = 0;



console.log("H A N G M A N")

function gamePlay() {
    const words = ["python", "java", "swift", "javascript"]
    const word = words[Math.floor(Math.random() * words.length)]
    guessed = ""
    missed = ""
    const mask = (w) => [...w].reduce((acc, ch) => acc + (guessed.includes(ch) ? ch : '-'), "");
    let nAttempts = 8
    while (nAttempts) {
        const ch = input(`\n${mask(word)}\nInput a letter: `)
        if (ch.length != 1) {
            console.log("Please, input a single letter.")
        } else if (!/[a-z]/.test(ch)) {
            console.log("Please, enter a lowercase letter from the English alphabet.")
        } else if (guessed.includes(ch) || missed.includes(ch)) {
            console.log("You've already guessed this letter.")
        } else if (word.includes(ch)) {
            guessed += ch
            if (!mask(word).includes('-')) break;
        } else {
            missed += ch
            console.log("That letter doesn't appear in the word.")
            nAttempts--
        }
    }
    let win = `You guessed the word ${word}!\nYou survived!`;
    let lost = "You lost!";
    console.log(nAttempts ? win : lost);

    if (nAttempts  > 0) {
        countWins++;
    } else {
        countLosts++;
    }

}

function results() {
    console.log(`You won: ${countWins} times`)
    console.log(`You lost: ${countLosts} times`)
}



let exit = true;
while (exit) {
    console.log('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:');
    let choice = input();
    switch (choice) {
        case "play":
            gamePlay();
            break;
        case "results":
            results();
            break;
        case "exit":
            exit = false;
            break;
    }

}

