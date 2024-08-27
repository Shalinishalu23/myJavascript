class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.currentLength = 0;
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }
  size() {
    return this.currentLength;
  }
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength = this.currentLength + 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const element = this.items[this.front];
    this.items[this.front] = null;
    this.currentLength -= 1;
    this.front = (this.front + 1) % this.capacity;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    return element;
  }
  print() {
    if (this.isEmpty()) {
      return "empty";
    } else {
      let str = "";
      let i;
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        console.log("i: ", this.items[i]);
        str = str + this.items[i] + " ";
      }
      str = str + this.items[i] + " ";
      console.log("str: ", str);
    }
  }
}

const cirQue = new CircularQueue(4);
console.log("cirQue: ", cirQue.enqueue(2));
console.log("cirQue: ", cirQue.enqueue(56));
console.log("cirQue: ", cirQue.enqueue(78));
console.log("cirQue: ", cirQue.enqueue(100));
console.log("cirQue: ", cirQue.dequeue());
console.log("cirQue: ", cirQue.enqueue(23));
console.log("cirQue: ", cirQue.dequeue());
console.log("cirQue: ", cirQue.print());
