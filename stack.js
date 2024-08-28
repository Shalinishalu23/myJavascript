class Stack {
  constructor() {
    this.items = {};
    this.head = 0;
  }
  push(element) {
    this.items[this.head] = element;
    this.head++;
    return element
  }
  pop() {
    const item = this.items[this.head - 1];
    delete this.items[this.head - 1];
    this.head--;
    return item;
  }
  peek() {
    return this.items[this.head - 1];
  }
  size() {
    return this.head;
  }
  isEmpty() {
    return this.head === 0;
  }
  print() {
    console.log("this.items: ", this.items);
  }
  search(element){
    for(const [key, value] of Object.entries(this.items) ){
        if(value === element){
            return {value, key: parseInt(key)}
        }
    }
    return 'not found'
  }
}

// const stack1 =new Stack()
// console.log('stack.push(3): ', stack1.push(5));
// console.log('stack.push(3): ', stack1.push(34));
// console.log('stack.push(3): ', stack1.pop());
// console.log('stack.push(3): ', stack1.push(96));
// console.log('stack.peek(3): ', stack1.peek());
// console.log('stack.push(3): ', stack1.push(65));
// console.log('stack.size(3): ', stack1.size());
// console.log('stack.push(3): ', stack1.push(93));
// console.log('stack.isEmpty(3): ', stack1.isEmpty());
// console.log('stack.pop(3): ', stack1.pop());
// console.log('stack.print(3): ', stack1.print());
