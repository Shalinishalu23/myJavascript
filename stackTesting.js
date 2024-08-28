class StackTesting {
  constructor() {
    this.items = {};
    this.head = 0;
  }
  isEmpty() {
    return this.head === 0;
  }
  peek() {
    return this.items[this.head - 1];
  }
  size() {
    return this.head;
  }
  print() {
   return this.items
  }
  push(element){
    this.items[this.head] = element
    this.head ++
    return element + ' added'
  }
  pop(){
    if(this.isEmpty()){
        return 'stack is empty'
    }
    const ele = this.items[this.head-1]
    delete this.items[this.head-1]
    this.head --
    return this.items[this.head-1] + ' deleted'
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

// const stack = new StackTesting()
// console.log('pop: ', stack.pop());
// console.log('isEmpty: ', stack.isEmpty());
// console.log('push: ', stack.push(23));
// console.log('isEmpty: ', stack.isEmpty());
// console.log('pop: ', stack.pop());
// console.log('push: ', stack.push(45));
// console.log('print: ', stack.print());
// console.log('peek: ', stack.peek());
// console.log('size: ', stack.size());
// console.log('push: ', stack.push(65));
// console.log('push: ', stack.push(75));
// console.log('print: ', stack.print());
// console.log('search: ', stack.search(12));
// console.log('search: ', stack.search(65));