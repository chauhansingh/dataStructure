class Node {
    constructor(newData, newNext, newPrivious) {
        this.next = newNext;
        this.privious = newPrivious;
        this.data = newData;
    }
    //getter
    getData() {
        return this.data;
    }
    getNextNode() {
        return this.next;
    }
    getPriviousNode() {
        return this.privious;
    }

    //setter
    setData(newData) {
        this.data = newData;
    }
    setNextNode(newNextNode) {
        this.next = newNextNode;
    }
    setPriviousNode(newPriviousNode) {
        this.Privious = newPriviousNode;
    }

}