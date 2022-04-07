class Rules {

    static graph = {}
    static elements = []


    static generateGraph(elements) {
        const quantity = elements.length;
        this.elements = elements;

        for (let i = 0; i < quantity; i++) {
            let row = [];
            for (let j = i + 1; j < i + quantity / 2; j++) {
                row.push(
                    j < quantity ? 
                    elements[j] 
                    : 
                    elements[Math.abs(quantity - j)]
                )
            }
            this.graph = {...this.graph, [elements[i]]: row}
        }
    }

    static getWinner(userElement, computerElement) {
        return this.graph[userElement].includes(computerElement)
    }

    static get() {
        return this.graph;
    }
    static getElements() {
        return this.elements;
    }
}

module.exports = Rules