// <script src="jquery-3.7.1.min.js"></script>

$(document).ready(function () {
    // Declaring the comparison string
    var keyCombinationString = ""
    var triggerCode = "UUDDLRLRBA"

    // Event trigger for key that's pressed down. Picks up pressed key and adds it to string if it's one of the keys of Konami code
    $(document).keydown(function (event) {
        var keyPressed = event.key.toUpperCase(); // Changes string to upper cases so that it wouldn't matter if caps lock is on or off

        switch (keyPressed) {
            case "ARROWLEFT":
                var keyToString = "L";
                break;
            case "ARROWRIGHT":
                var keyToString = "R";
                break;
            case "ARROWUP":
                var keyToString = "U";
                break;
            case "ARROWDOWN":
                var keyToString = "D";
                break;
            case "A":
                var keyToString = "A";
                break;
            case "B":
                var keyToString = "B";
                break;
            default:
                keyToString = "";
                keyCombinationString = "";
        }
        keyCombinationString += keyToString;

        // Cleans up the string in case the input varies from triggerCode
        keyCombinationString = cleanupString(keyCombinationString);

        // Prints combination to screen (for debug)
        $("#showstring").text(keyCombinationString);

        // Makes a check to the input combination and triggers function if Konami code is triggered
        if (isKonamicode(keyCombinationString)) {
            konamicodeTriggered();
        };
    });

    // Check if keyboard combination is Konami code
    function isKonamicode(code) {
        if (triggerCode.match(code) == triggerCode) {
            return true;
        } else {
            return false;
        };
    }

    // Test function that is triggered by Konami code
    function konamicodeTriggered() {
        $("#root").text("Konami code has been triggered!");
    }

    // Cleans up the string (prevents that user can't form an endlessly long string)
    function cleanupString(stringToclean) {
        if (triggerCode.includes(stringToclean) == false) {
            if (stringToclean.endsWith("U")) {
                stringToclean = "U"
            } else if (stringToclean.endsWith("UU")) {
                stringToclean = "UU"
            } else {
                stringToclean = ""
            }
        }
        return stringToclean;
    }
});