const triggerCodeArray = ["ARROWUP", "ARROWUP", "ARROWDOWN", "ARROWDOWN", "ARROWLEFT", "ARROWRIGHT", "ARROWLEFT", "ARROWRIGHT", "B", "A"];

// Check if Konami code is entered
function isKonamicode(keyCombinationProgress) {
    if (keyCombinationProgress == 10) {
        return true;
    } else {
        return false;
    };
}

// Function for checking each key input and whether it follows the Konami code
function checkforKonamicode(key, keyCombinationProgress) {
    if (key != triggerCodeArray[keyCombinationProgress]) {
        if (key == triggerCodeArray[0]) {
            keyCombinationProgress = 1
        } else {
            keyCombinationProgress = 0
        }
    } else {
        keyCombinationProgress += 1
    };
    return keyCombinationProgress
}

module.exports = { isKonamicode, checkforKonamicode };