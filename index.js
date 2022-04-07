const Rules = require('./Rules');
const RulesTable = require('./RulesTable');
const Step = require('./Step')
  

const drawNextTurnIntro = () => {
    console.log("\n\n\n*******************************************")
    console.log("*******************************************")
    console.log("****************NEXT TURN******************")
    console.log("*******************************************")
    console.log("*******************************************\n\n\n")
}

const validateArguments = (items) => {
    const correctExample = "(F.e. 'Rock Paper Scissors')"
    if (items.length == 0) {
        console.log("You should specify playing elements " + "(F.e. 'node index.js Rock Paper Scissors')")
        return false;
    }
    if (items.length < 3) {
        console.log("Too few elements. Minimum: 3 elements... " + correctExample)
        return false;
    } else if (items.length % 2 == 0) {
        console.log("The number of elements should be odd... " + correctExample)
        return false;
    } else if (items.length != new Set(items).size) {
        console.log("Playing elements should be unique... " + correctExample)
        return false;
    }
    return true;
}

const main = async () => {
    if (!validateArguments(process.argv.slice(2))) return;

    Rules.generateGraph(process.argv.slice(2));

    while (true) {
        const cStep = Step.computerStep();

        console.log("HMAC: " + cStep.HMAC);

        const uStep = Step.userStep();

        if (uStep.menuId > 0 && uStep.menuId <= Rules.getElements().length) {
            console.log("Your move: " + uStep.choice);
            console.log("Computer move: " + cStep.choice);
            if (uStep.choice == cStep.choice) {
                console.log("Draw!");
            } else {
                console.log(Rules.getWinner(uStep.choice, cStep.choice) ? "You win!" : "You lose"); 
            }
            console.log("HMAC key: " + cStep.SECRET_KEY)
          
        } else if (uStep.menuId == 0) {
            console.log("Goodbye, sir");
            return;
        } else if (uStep.menuId == "?") {
            RulesTable.draw();
        } else {
            console.log("Unknown command");
        }
        drawNextTurnIntro();
    }    
}

main();