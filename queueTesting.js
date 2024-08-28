class QueueTesting {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  size() {
    return this.rear - this.front;
  }
  peek() {
    return this.items[this.front];
  }
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
    return element + " added";
  }
  dequeue() {
    if (this.isEmpty()) {
      return "queue is empty";
    }
    let ele = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return ele + "deleted";
  }
  print() {
    return this.items;
  }
  search(element) {
    for (const [key, value] of Object.entries(this.items)) {
      if (value === element) {
        return [key, value];
      }
    }
    return "not found";
  }
}

const que = new QueueTesting();
console.log("isEmpty", que.isEmpty());
console.log("enqueue", que.enqueue(23));
console.log("enqueue", que.enqueue(35));
console.log("enqueue", que.enqueue(48));
console.log("size", que.size());
console.log("print", que.print());
console.log("peek", que.peek());
console.log("dequeue", que.dequeue());
console.log("size", que.size());
console.log("search", que.search(35));
console.log("search", que.search(23));
