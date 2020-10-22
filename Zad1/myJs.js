var scoreHuman = 0;
var scoreAI = 0;

function Thunderdome(element) {

    var pScore = document.getElementById("pScore");
    var aiChoice = Math.floor(Math.random() * 3) + 1; // random int between 1 and 3 (inclusive) as the computer choice, 1 = kamen, 2 = škare, 3 = papir

    switch (element.getAttribute('id')) { 
        case "kamenBtn":
            switch (aiChoice) {
                case 1:
                    pScore.innerHTML += "Kamen" + " vs " + "Kamen! Rezultat je trenutno . . . Human " + scoreHuman + ":" + scoreAI + " " + "AI" + "</br>";
                    break;
                case 2:
                    ++scoreHuman;
                    pScore.innerHTML += "Kamen" + " vs " + "Škare! Rezultat je trenutno . . . <b>Human " + scoreHuman + ":" + scoreAI + " " + "AI" + "</b></br>";
                    break;
                case 3:
                    ++scoreAI;
                    pScore.innerHTML += "Kamen" + " vs " + "Papir! Rezultat je trenutno . . .  Human " + scoreHuman + ":" + scoreAI + " " + "AI" + "</br>";
                    break;
            }
            break;
        case "skareBtn":
            switch (aiChoice) {
                case 1:
                    ++scoreAI;
                    pScore.innerHTML += "Škare" + " vs " + "Kamen! Rezultat je trenutno . . . Human " + scoreHuman + ":" + scoreAI + " " + "AI" + "</br>";
                    break;
                case 2:
                    pScore.innerHTML += "Škare" + " vs " + "Škare! Rezultat je trenutno . . . Human " + scoreHuman + ":" + scoreAI + " " + "AI" + "</br>";
                    break;
                case 3:
                    ++scoreHuman;
                    pScore.innerHTML += "Škare" + " vs " + "Papir! Rezultat je trenutno . . . <b>Human " + scoreHuman + ":" + scoreAI + " " + "AI" + "</b></br>";
                    break;
            }
            break;
        case "papirBtn":
            switch (aiChoice) {
                case 1:
                    ++scoreHuman;
                    pScore.innerHTML += "Papir" + " vs " + "Kamen! Rezultat je trenutno . . . <b>Human " + scoreHuman + ":" + scoreAI + " " + "AI" + "</b></br>";
                    break;
                case 2:
                    ++scoreAI;
                    pScore.innerHTML += "Papir" + " vs " + "Škare! Rezultat je trenutno . . . Human " + scoreHuman + ":" + scoreAI + " " + "AI" + "</br>";
                    break;
                case 3:
                    pScore.innerHTML += "Papir" + " vs " + "Papir! Rezultat je trenutno . . . Human " + scoreHuman + ":" + scoreAI + " " + "AI" + "</br>";
                    break;
            }
            break;
    }
}
