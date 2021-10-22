class LinkedList {
    constructor(newData) {
        this.head = new Node(newData);
        this.size = 1;
    }
    //setter
    setHead(newNode) {
        this.head = newNode;
    }
    //setter
    getHead() {
        return this.head;
    }
    addAtEnd(newData) {
        let tempNode = this.head;
        while (tempNode.getNextNode() != null) {
            tempNode = tempNode.getNextNode();
        }
        tempNode.setNextNode(new Node(newData));
        this.size++;
    }
    getAt(index) {
        if (index == 0) {
            return this.head.getNextNode().getData();
        }
        else {
            let tempNode = this.head;
            for (let i = 0; i < index; i++) {
                tempNode = tempNode.getNextNode();
            }
            return tempNode.getData();
        }
    }

}