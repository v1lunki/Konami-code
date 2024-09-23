function konamicodeListener() {
    // Declaring the comparison array
    var keyCombinationArray = [];
    const triggerCodeArray = ["ARROWUP", "ARROWUP", "ARROWDOWN", "ARROWDOWN", "ARROWLEFT", "ARROWRIGHT", "ARROWLEFT", "ARROWRIGHT", "B", "A"];

    // Event trigger for key that's pressed down. Picks up pressed key and adds it to array
    $(document).keydown(function (event) {
        keyCombinationArray.push(event.key.toUpperCase()); // Changes the key string to upper cases and adds it to the array

        // Cleans up the array in case the input varies from triggerCode
        cleanupArray();

        // Prints combination in console (for debug)
        console.log(keyCombinationArray);

        // Checks if konami code is launched
        if (isKonamicode()) {
            konamicodeTriggered();
        };
    });

    // Check if keyboard combination is Konami code
    function isKonamicode() {
        if (keyCombinationArray.toString() == triggerCodeArray.toString()) {
            return true;
        } else {
            return false;
        };
    }

    // Test function that is triggered by Konami code
    function konamicodeTriggered() {
        console.log("Konami code has been triggered!");
    }

    // Cleans up the array (prevents that user can't form an endlessly long array)
    function cleanupArray() {
        if (keyCombinationArray[keyCombinationArray.length - 1] != triggerCodeArray[keyCombinationArray.length - 1]) {
            if (keyCombinationArray[keyCombinationArray.length - 1] == triggerCodeArray[0]) {
                keyCombinationArray = []
                keyCombinationArray.push(triggerCodeArray[0]);
            } else {
                keyCombinationArray = []
            }
        }
    }
}