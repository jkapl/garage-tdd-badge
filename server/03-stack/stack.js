class Stack {
    constructor () {
        this.stack = [];
    }

    size () {
        return this.stack.length;
    }

    push (element) {
        this.stack.push(element);
        return this;
    }

    pop () {
        this.stack.pop();
        return this
    }
}

module.exports = Stack;