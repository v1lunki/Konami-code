function konamicodeListener(onKonamicodeActivated) {
    // Declaring a counter for how many keys have been pressed in correct order
    var keyCombinationProgress = 0;
    const triggerCodeArray = ["ARROWUP", "ARROWUP", "ARROWDOWN", "ARROWDOWN", "ARROWLEFT", "ARROWRIGHT", "ARROWLEFT", "ARROWRIGHT", "B", "A"];

    // Event trigger for key that's pressed down. Picks up pressed key and compares it to the Konami code
    $(document).keydown(function (event) {
        checkforKonamicode(event.key.toUpperCase());

        // Prints keys and progress value in console (for debug)
        console.log(keyCombinationProgress);
        console.log(event.key.toUpperCase());

        // Checks if konami code is launched
        if (isKonamicode()) {
            onKonamicodeActivated();
        };
    });

    // Check if Konami code is entered
    function isKonamicode() {
        if (keyCombinationProgress == 10) {
            return true;
        } else {
            return false;
        };
    }

    // Function for checking each key input and whether it follows the Konami code
    function checkforKonamicode(key) {
        if (key != triggerCodeArray[keyCombinationProgress]) {
            if (key == triggerCodeArray[0]) {
                keyCombinationProgress = 1
            } else {
                keyCombinationProgress = 0
            }
        } else {
            keyCombinationProgress += 1
        };
    }
}
