const SecretKeyGenerator = require('./SecretKeyGenerator');
const HMACGenerator = require('./HMACGenerator');
const Rules = require("./Rules");
const rl = require('readline-sync');

class Step extends Rules {

    static generateComputerChoice(max) {
        return Math.floor(Math.random() * max);
    }

    static computerStep() {
        const SECRET_KEY = SecretKeyGenerator.generate();
        const computerChoice =  this.generateComputerChoice(this.elements.length)
        const HMAC = HMACGenerator.generate(SECRET_KEY, this.elements[computerChoice]);
        return {
            SECRET_KEY, HMAC, choice: this.elements[computerChoice]
        }
    }   
    
    static userStep() {
        console.log("Available moves:");
        this.elements.forEach((element, index) => {
            console.log(`${index + 1} - ${element}`);
        })
        console.log("0 - exit");
        console.log("? - help");
        const value = rl.question('Enter your move: ');
        return {
            choice: this.elements[value - 1],
            menuId: value,
        };
    }
}

module.exports = Step