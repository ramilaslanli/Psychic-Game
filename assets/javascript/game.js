const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let wins = 0
let loss = 0
let guess_left = 10
let guess = ' '

document.getElementById('wins').innerHTML = wins
document.getElementById('loss').innerHTML = loss

function newWord() {
    let random = Math.floor(Math.random() * alphabet.length);
    return alphabet[random];
}

let answer = newWord();
// alert(answer)

document.addEventListener('keydown', logKey);

function logKey(a) {
    if (a.key == "Enter") {
        if (document.getElementById('inp').value == answer) {
            wins++
            document.getElementById('wins').textContent = wins;
            document.getElementById('guess_left').innerHTML -= 1;
            document.getElementById('guess').innerHTML += document.getElementById('inp').value + " "
            document.getElementById('guess_left').innerHTML = 10
            document.getElementById('guess').innerHTML = guess
            answer = newWord();
            // alert(answer)
            if (document.getElementById('guess_left').innerHTML == 0) {
                alert("Şansınız bitdi")
                document.getElementById('guess_left').innerHTML = 10

            }

        } else {
            document.getElementById('guess_left').innerHTML -= 1;
            document.getElementById('guess').innerHTML += document.getElementById('inp').value + " "
            if (document.getElementById('guess_left').innerHTML == 0) {
                alert("Şansınız bitdi")
                loss++
                document.getElementById('loss').innerHTML = loss
                document.getElementById('guess_left').innerHTML = 10
                document.getElementById('guess').innerHTML = guess
            }
        }
    }
}