class circularQueTesting {
  constructor(capacity) {
    this.items = {};
    this.rear = -1;
    this.front = -1;
    this.capacity = capacity;
    this.currentLength = 0;
  }
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength = this.currentLength + 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
      return element + " added";
    }
    return "full";
  }
  isFull() {
    return this.capacity === this.currentLength;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  size() {
    return this.currentLength;
  }
  peek() {
    return this.items[this.front];
  }
  dequeue() {
    if (!this.isEmpty()) {
      const ele = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength = this.currentLength - 1;
      if (this.isEmpty()) {
        this.rear = -1;
        this.front = -1;
      }
      return ele;
    }
    return "empty nothing to dequeue";
  }
  print(){
    let i
    let str= ''
    for(i= this.front; i!= this.rear; i= (i+1)%this.capacity){
        str= str + this.items[i] + ' '
    }
    str= str + this.items[i] + ' '
    console.log(str);
  }
}

const cir = new circularQueTesting(5);
console.log("isEmpty: ", cir.isEmpty());
console.log("cir.enqueue(23): ", cir.enqueue(23));
console.log("cir.enqueue(23): ", cir.enqueue(15));
console.log("cir.enqueue(23): ", cir.enqueue(38));
console.log("cir.enqueue(23): ", cir.enqueue(85));
console.log("cir.enqueue(23): ", cir.enqueue(64));
console.log("cir.enqueue(23): ", cir.enqueue(82));
console.log("cir.enqueue(23): ", cir.dequeue());
console.log("cir.enqueue(23): ", cir.print());
