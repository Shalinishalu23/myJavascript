class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
    return value + " added";
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  print() {
    let current = this.head;
    let str = "";
    while (current !== null) {
      str = str + current.value + ",";
      current = current.next;
    }
    return str
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      console.log("this.before: ", this.head);
      current.next = node;
      console.log("this.after: ", this.head);
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return "cannot insert";
    } else if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      console.log("node: ", node);
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
      this.size++;
    }
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return "Invalid to remove";
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = removedNode.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      removedNode = current.next;
      current.next = removedNode.next;
    }
    this.size--;
    return removedNode.value + " removed " + index;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return "no linked list to remove";
    }
    let current = this.head;
    if (value === current.value) {
      this.head = current.next;
      this.size--;
      return value + "0 index value removed";
    } else {
      while (current.next && current.next.value !== value)
        current = current.next;
    }
    if (current.next) {
      const removedNode = current.next;
      current.next = removedNode.next;
      this.size--;
      return value;
    }
    return value + " out of linked list";
  }
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
      i++;
    }
    return -1
  }
  reverse(){
    if(this.isEmpty()){
      return 'empty so cant reverse'
    }
    let prev = null
    let next
    let current = this.head
    while(current){
      next = current.next
      current.next = prev;
      prev = current
      current = next
    }
    this.head = prev
  }
}

const linkedList = new LinkedList();
console.log("isEmpty: ", linkedList.isEmpty());
console.log("reverse: ", linkedList.reverse());
console.log("getSize: ", linkedList.getSize());
console.log("prepend: ", linkedList.prepend(23));
console.log("getSize: ", linkedList.getSize());
console.log("isEmpty: ", linkedList.isEmpty());
console.log("prepend: ", linkedList.prepend(45));
console.log("prepend: ", linkedList.prepend(56));
console.log("prepend: ", linkedList.prepend(68));
console.log("print", linkedList.print());
console.log("append: ", linkedList.append(16));
console.log("append: ", linkedList.append(5));
console.log("print", linkedList.print());
console.log("insert: ", linkedList.insert(34, -1));
console.log("insert: ", linkedList.insert(77, 0));
console.log("insert: ", linkedList.insert(1, 7));
console.log("insert: ", linkedList.insert(33, 4));
// console.log("removeFrom: ", linkedList.removeFrom(-1));
// console.log("removeFrom: ", linkedList.removeFrom(9));
// console.log("removeFrom: ", linkedList.removeFrom(0));
// console.log("removeFrom: ", linkedList.removeFrom(5));
// console.log("removeValue: ", linkedList.removeValue(77));
console.log("removeValue: ", linkedList.removeValue(56));
console.log("removeValue: ", linkedList.removeValue(3));
console.log("search: ", linkedList.search(56));
console.log("search: ", linkedList.search(23));
console.log("print", linkedList.print());
console.log("reverse: ", linkedList.reverse());
console.log("print", linkedList.print());
