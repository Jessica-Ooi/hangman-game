/* Games */
let gamelist = [
	'The World Ends With You',
	'NeiR Automata',
	'Mystic Messenger',
	'Cytus',
	'Halo',
	'Super Mario Bros',
	'Assassins Creed',
	'Animal Crossing',
	'Doom',
	'Fez',
	'Persona',
	'Castlevania',
	'Hades',
	'Forza Horizon',
	'Destiny',
	'Fire Emblem',
	'Pokemon',
	'Dark Souls',
	'Bayonetta',
	'Street Fighter',
	'Bloodborne',
	'The Legend of Zelda',
	'Shadow of the Colossus',
	'Dishonored',
	'Dead Space',
	'Amnesia The Dark Descent',
	'Stardew Valley',
	'Metroid',
	'Final Fantasy',
	'Kingdom Hearts',
	'Mass Effect',
	'Red Dead Redemption',
	'Bioshock',
	'God of War',
	'Resident Evil',
	'Silent Hill',
	'Journey',
	'The Witcher',
	'Skyrim',
	'Space Invaders',
	'Pac Man',
	'Mario Kart',
	'Call of Duty',
	'Portal',
	'Grand Theft Auto',
	'Metal Gear',
	'The Last of Us',
	'Tetris',
	'Pong',
	'Minecraft',
	'Half Life',
	'PubG Battlegrounds',
	'Overwatch',
	'Terraria',
	'Wii Sports',
	'Diablo',
	'The Blair Witch',
	'The Evil Within',
	'Super Smash Bros',
	'Duck Hunt',
	'The Walking Dead',
	'Borderlands',
	'FIFA',
	'Nintendogs',
	'Sonic the Hedgehog',
	'Sims',
	'Jackbox',
	'Madden NFL',
	'Star Wars Battlefront',
	'Tomb Raider',
	'Monster Hunter',
	'Dragon Quest',
	'Gran Turismo',
	'Worms',
	'Mortal Combat',
	'Just Dance',
	'Mario Party',
	'Donkey Kong',
	'Battlefield',
	'Tekken',
	'Bejeweled',
	'Far Cry',
	'Crash Bandicoot',
	'Uncharted',
	'Guitar Hero',
	'Gears of War',
	'Kirby',
	'Mega Man',
	'Ace Attorney',
	'Medal of Honor',
	'Total War',
	'Counter Strike',
	'Shin Megami Tensei',
	'Devil Survivor',
	'Steins Gate',
	'Saints Row',
	'Gundam',
	'James Bond',
	'Command and Conquer',
	'Tales',
	'Splatoon',
	'Ratchet and Clank',
	'Devil May Cry',
	'Petz',
	'Age of Empires',
	'Dynasty Warriors',
	'Yakuza',
	'Yugioh',
	'Prince of Persia',
	'Frogger',
	'Spyro',
	'Watch Dogs',
	'Candy Crush',
	'Fruit Ninja',
	'League of Legends',
	'Among Us',
	'Angry Birds',
	'Flappy Bird',
	'Hearthstone',
	'Fate Grand Order',
	'Love Live School Idol Festival',
	'Bandori Bang Dream',
	'Dead By Daylight',
	'AFK Arena',
	'Raid Shadow Legends',
	'Arknights',
	'Dramatical Murder',
	'Brain Age',
	'Professor Layton and the Diabolical Box',
	'Cooking Mama',
	'Club Penguin',
	'Chrono Trigger',
	'Scribblenauts',
	'Spectrobes',
	'Star Fox',
	'Banjo Tooie',
	'Corpse Party',
	'Tony Hawk Pro Skater',
	'Fable',
	'Dance Central',
	'Dead or Alive',
	'Ninja Gaiden',
	'Tamagotchi',
	'Wario Land',
	'Game and Watch',
	'Octopath Traveler',
	'Pikmin',
	'Triangle Strategy',
	'Slime Rancher',
	'Qbert',
	'Dance Dance Revolution',
	'Beatmania',
	'Pump It Up',
	'Raiden',
	'Stargate',
	'Tron',
	'Lord of Vermillion',
	'Drawful',
	'Virtua Fighter',
	'Raving Rabbids',
	'Ikari Warriors',
	'Galaxian',
	'After Burner',
	'House of the Dead',
	'Out Run',
	'Marvel vs Capcom',
	'Spelunky',
	'Life is Strange',
	'The Grudge',
	'Lost Ark',
	'Warhammer',
	'Horizon Zero Dawn',
	'No Mans Sky',
	'Elden Ring',
	'Rune Factory',
	'Ghostwire Tokyo',
	'Death Stranding',
	'Evil Dead The Game',
	'Vampire the Masquerade',
	'Until Dawn',
	'Fall Guys',
    'Cuphead',
    'Disgaea',
    'Xenoblade Chronicles',
    'Cult of the Lamb',
    'Baba is You',
    'Cyberpunk 2077',
    'Ensemble Stars'
];

/* Hangman Game */

const youWon = "You Lived!";
const youLost = "You Died!";

function Game() {
    let word = gamelist[Math.floor(Math.random() * gamelist.length)];
    word = word.toUpperCase();
    let guessedLetters = [];
    let maskedWord = "";
    let incorrectGuesses = 0;
    let possibleGuesses = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let won = false;
    let lost = false;
    const maxGuesses = 7;

    for (let i = 0; i < word.length; i++) {
        let space = " ";
        let nextCharacter = word.charAt(i) === space ? space : "_";
        maskedWord += nextCharacter;
    }

    let guessWord = function (guessedWord) {
        guessedWord = guessedWord.toUpperCase();
        if (guessedWord === word) {
            guessAllLetters();
        }
        else {
            handleIncorrectGuess();
        }
    }

    let guessAllLetters = function () {
        for (let i = 0; i < word.length; i++) {
            guess(word.charAt(i));
        }
    }

    let guess = function (letter) {
        letter = letter.toUpperCase();
        if (!guessedLetters.includes(letter)) {
            guessedLetters.push(letter);
            possibleGuesses = possibleGuesses.replace(letter, "");
            if (word.includes(letter)) {
                let matchingIndexes = [];
                for (let i = 0; i < word.length; i++) {
                    if (word.charAt(i) === letter) {
                        matchingIndexes.push(i);
                    }
                }

                matchingIndexes.forEach(function (index) {
                    maskedWord = replace(maskedWord, index, letter);
                });

                if (!lost) {
                    won = maskedWord === word;
                }
            }
            else {
                handleIncorrectGuess();
            }
        }
    }

    let handleIncorrectGuess = function () {
        incorrectGuesses++;
        lost = incorrectGuesses >= maxGuesses;
        if (lost) {
            guessAllLetters();
        }
    }

    return {
        "getWord": function () { return word; },
        "getMaskedWord": function () { return maskedWord; },
        "guess": guess,
        "getPossibleGuesses": function () { return [...possibleGuesses]; },
        "getIncorrectGuesses": function () { return incorrectGuesses; },
        "guessWord": guessWord,
        "isWon": function () { return won; },
        "isLost": function () { return lost; },
    };
}

function replace(value, index, replacement) {
    return value.substr(0, index) + replacement + value.substr(index + replacement.length);
}

function listenForInput(game) {
    let guessLetter = function (letter) {
        if (letter) {
            let gameStillGoing = !game.isWon() &&
                !game.isLost();
            if (gameStillGoing) {
                game.guess(letter);
                render(game);
            }
        }
    };

    let handleClick = function (event) {
        if (event.target.classList.contains('guess')) {
            guessLetter(event.target.innerHTML);
        }
    }

    let handleKeyPress = function (event) {
        let letter = null;
        const A = 65;
        const Z = 90;
        const ENTER = 13;
        let isLetter = event.keyCode >= A && event.keyCode <= Z;
        let guessWordButton = document.getElementById("guessWordButton");
        let newGameButton = document.getElementById("newGameButton");
        let guessBox = document.getElementById("guessBox");
        let gameOver = guessBox.value === youWon || guessBox.value === youLost;

        if (event.target.id !== "guessBox" && isLetter) {
            letter = String.fromCharCode(event.keyCode);
        }
        else if (event.keyCode === ENTER && gameOver) {
            newGameButton.click();
        }
        else if (event.keyCode === ENTER && guessBox.value !== "") {
            guessWordButton.click();
        }
        guessLetter(letter);
    }

    document.addEventListener('keydown', handleKeyPress);
    document.body.addEventListener('click', handleClick);
}

function guessWord(game) {
    let gameStillGoing = !game.isWon() &&
        !game.isLost();
    let guessedWord = document.getElementById('guessBox').value;
    if (gameStillGoing) {
        game.guessWord(guessedWord);
        render(game);
    }
}

function render(game) {
    document.getElementById("word").innerHTML = game.getMaskedWord();
    document.getElementById("guesses").innerHTML = "";
    game.getPossibleGuesses().forEach(function (guess) {
        let innerHtml = "<span class='guess'>" + guess + "</span>";
        document.getElementById("guesses").innerHTML += innerHtml;
    });
    document.getElementById("hangmanImage").src = "hangman" + game.getIncorrectGuesses() + ".png";

    let guessBox = document.getElementById('guessBox');
    if (game.isWon()) {
        guessBox.value = youWon;
        guessBox.classList = "win";
    }
    else if (game.isLost()) {
        guessBox.value = youLost;
        guessBox.classList = "loss";
    }
    else {
        guessBox.value = "";
        guessBox.classList = "";
    }
}

function newGame() {
    history.go(0)
}

let game = new Game();
render(game);
listenForInput(game);