class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
  prepend(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
    return value;
  }
  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
    return value;
  }
  print(point, side) {
    if (this.isEmpty()) {
      return;
    }
    let current = this[point];
    let str = "";
    while (current) {
      str = str + current.value + " ";
      current = current[side];
    }
    return str;
  }
  reverse() {
    let tailValue = this.tail;
    let headValue = this.head;
    let current = this.head;
    let previousNode = null;
    let next;
    while (current) {
      next = current.next;
      current.next = previousNode;
      previousNode = current;
      current = next;
    }
    this.tail = headValue;
    this.head = tailValue;
  }
  reverse1() {
    let current = this.head;
    let temp = null;
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
  removeHead() {
    let current = this.head;
    let startElement = current.next;
    current.prev = null;
    current.next = null;
    current.value = null;
    this.head = startElement;
    this.size--;
    return current.value;
  }
  removeTail() {
    let current = this.tail;
    let startElement = current.prev;
    current.prev = null;
    current.next = null;
    current.value = null;
    this.tail = startElement;
    this.size--;
    return current.value;
  }
}

const dl = new DoublyLinkedList();
console.log("getSize: ", dl.getSize());
console.log("isEmpty: ", dl.isEmpty());
console.log("prepend: ", dl.prepend(23));
console.log("prepend: ", dl.prepend(33));
console.log("prepend: ", dl.prepend(43));
console.log("append: ", dl.append(13));
console.log("append: ", dl.append(3));
console.log("append: ", dl.append(0));
// console.log("printHead: ", dl.print("head", "next"));
// console.log("printTail: ", dl.print("tail", "prev"));
// // dl.reverse1();
// console.log("printTail: ", dl.print("tail", "prev"));
console.log("removeHead: ", dl.removeHead());
console.log("printHead: ", dl.print("head", "next"));
console.log("removeTail: ", dl.removeTail());
console.log("printHead: ", dl.print("head", "next"));
