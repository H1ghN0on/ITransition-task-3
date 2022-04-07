
const Rules = require("./Rules")

class RulesTable extends Rules {
    static convertGraphToTable() {

        let structDatas = [];
        Object.keys(this.graph).forEach(key => {
            let newObject = {};
            this.elements.forEach(element => {
                newObject[element] = this.graph[key].includes(element) ? "WIN" : "LOSE";
            })
            newObject["myId"] = key;
            newObject[key] = "DRAW";
            structDatas.push(newObject)
        })
        return structDatas.reduce((obj, {myId, ...x}) => { obj[myId] = x; return obj}, {})

    }

    static draw() {
        console.table(this.convertGraphToTable())
    }
}

module.exports = RulesTable