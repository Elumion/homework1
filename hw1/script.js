// uah usd eur rub gbp - available currency
// currency in usd
let uah = 26.282;
let usd = 1;
let eur = 0.863;
let gbp = 0.734;
let rub = 71.79;

let checker = true;

while (checker) {

    let currencyStr = prompt("Enter your current currency (uah, usd, eur, rub, gbp)");
    // check if correct input
    while (currencyStr != "uah" &&
        currencyStr != "usd" &&
        currencyStr != "eur" &&
        currencyStr != "rub" &&
        currencyStr != "gbp"
    ) {
        currencyStr = prompt("Error, try again. Enter currency (uah, usd, eur, rub, gbp):");
    }

    let currencyNum =
        currencyStr == "uah" ? uah :
            currencyStr == "usd" ? usd :
                currencyStr == "eur" ? eur :
                    currencyStr == "gbp" ? gbp : rub;

    let amount = prompt("Enter your amount of money:");
    // check if correct input
    while (isNaN(amount) || amount < 0) {
        amount = prompt("Error, try again. Enter your amount of money:");
    }

    let convertToStr = prompt("Enter currency that you want to convert to (uah, usd, eur, rub, gbp):");
    // check if correct input
    while (convertToStr != "uah" &&
        convertToStr != "usd" &&
        convertToStr != "eur" &&
        convertToStr != "rub" &&
        convertToStr != "gbp"
    ) {
        convertToStr = prompt("Error, try again. Enter currency that you want to convert to (uah, usd, eur, rub, gbp):");
    }

    let convertToNum =
        convertToStr == "uah" ? uah :
            convertToStr == "usd" ? usd :
                convertToStr == "eur" ? eur :
                    convertToStr == "gbp" ? gbp : rub;

    let convertedWallet = +((amount / currencyNum) * convertToNum).toFixed(3);

    alert(`Your ${amount}${currencyStr} = ${convertedWallet}${convertToStr}`);

    checker = confirm("Repeat convertation?");
}

