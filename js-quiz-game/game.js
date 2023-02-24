let newGame = confirm("\nХотите сыграть в викторину?");
let difficulty;
let easyWords = ["chip","hack","bro","bug","noob","lock","game","drop","clan","dota"];
let mediumWords = ["github","cyborg","robot","stack","","implant","trojan","debug","","config"];
let hardWords = ["android","teammate","adaptive","shitcode","console","implant","gamedev","backend","futurama","frontend"];
let wordsDif = [];
let lifes = 3;
let games = null;
let countLetters = null;
let randomInt = null;
let gameTime = new Date();
if (newGame == true) {
    difficulty = prompt("\nВыберите сложность:\n– Easy, слова 3–4 буквы\n– Medium, слова 5–6 бук\n– Hard, слова 7–8 букв\n\nВведите название уровня сложности ↓");
    alert("\nОбратите внимание, вся игра на английском.\n\nВводите ответы на все вопросы латиницей ↓");
    switch(difficulty) {
        case 'Easy':
            wordsDif = easyWords;
        break;
        case 'Middle':
            wordsDif = mediumWords;
        break;
        case 'Hard':
            wordsDif = hardWords;
        break;
        default:
        alert("\nК сожалению, не смогли понять вас :(\nПопробуйте выбрать сложность из предолженных вариантов");
    }
} else {
    alert("\nЧто же, может в другой раз…");
}
function playGame(wordsDif) {
        let word;
        let letterOrWord = confirm("\nХотите угадать букву?");
        if (letterOrWord = true) {
            randomInt = Math.floor(Math.random() * 10);
            word = wordsDif[randomInt];
            alert("\nВам попалось слово " + word);
            var wordHidden = word.replace(/./gi,"*");
            do {
                let letterTry = prompt(wordHidden + "\nВведите букву ↓");
                wordHiddenAr = word.split("");
                if (word.indexOf(letterTry) !== -1) {
                    for(i = 0; i < wordHiddenAr.length; i++) {
                        if(wordHiddenAr[i] == letterTry) {
                            wordHiddenAr[i] = letterTry;
                        } else if (wordHidden[i] == "*") {
                            wordHiddenAr[i] = "*";
                        }
                    }
                    wordHidden = wordHiddenAr.join("");
                    alert("\nВаше слово " + wordHidden);
                } else {
                    alert("\nТакой буквы в этом слове нет");
                    lifes -= 1;
                }
            } while ( wordHidden.match(/\*/) !== null && lifes > 0)
        } else {
            break;
    }
    alert("\nТри попытки закончились :-(\n\nНе огорчайтесь, в следующий раз вам обязательно повезет.");
}
playGame(wordsDif);