class Queue {
  constructor() {
    this.item = {}
    this.front = 0
    this.rear = 0
  }
  enqueue(element) {
    this.item[this.rear] = element;
    this.rear++
    return element;
  }
  peek(){
   return this.item[this.front]
  }
  size(){
    return this.rear- this.front
  }
  isEmpty(){
    return this.rear- this.front===0
  }
  dequeue(){
    const ele = this.item[this.front]
    delete this.item[this.front]
    this.front++
    return ele
  }
  search(element) {
    for (const [key, value] of Object.entries(this.item)) {
      if (value === element) {
        return [key, value];
      }
    }
    return "not found";
  }
}


// const que = new Queue()
// console.log('que.enqueue(5): ', que.enqueue(5));
// console.log('que.enqueue(5): ', que.enqueue(7));
// console.log('que.enqueue(5): ', que.enqueue(43));
// console.log('que.enqueue(5): ', que.size());
// console.log('que.enqueue(5): ', que.peek());
// console.log('que.enqueue(5): ', que.isEmpty());
// console.log('que.enqueue(5): ', que.dequeue());