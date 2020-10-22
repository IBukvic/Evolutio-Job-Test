function palindromeCheck() {

    var showResult = document.getElementById("showResult");
    var userText = document.getElementById("userTxt").value;

    var text = userText.replace(/[^a-zA-Z]+/g, "").toLowerCase(); // keep only a-z & A-Z characters
    var reversedText = text.split('').reverse().join(''); // reverse text for easy comparison

    if (text == reversedText) {
        showResult.innerHTML += "Palindrom</br>";
    } else {
        showResult.innerHTML += "Nije palindrom</br>";
    }

}
