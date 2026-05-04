class PubSub {
  constructor() {
    this.subscribers = {};
  }

  // Subscribe to an event, returns a disposal function
  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    
    // Add callback to the list
    this.subscribers[event].push(callback);
    console.log(`Subscribed to: ${event}`);

    // Return function to unsubscribe (disposal)
    return () => {
      this.unsubscribe(event, callback);
    };
  }

  // Unsubscribe a specific callback
  unsubscribe(event, callbackToRemove) {
    if (this.subscribers[event]) {
      this.subscribers[event] = this.subscribers[event].filter(
        (cb) => cb !== callbackToRemove
      );
      console.log(`Unsubscribed from: ${event}`);
    }
  }

  // Publish/trigger an event
  publish(event, data) {
    if (this.subscribers[event]) {
      this.subscribers[event].forEach((callback) => callback(data));
    }
  }
}

// --- Usage ---
const pubSub = new PubSub();

// 1. Subscribe and receive disposal function
const unsubscribe = pubSub.subscribe('user:login', (data) => {
  console.log('User logged in:', data);
});

// 2. Publish an event
pubSub.publish('user:login', { name: 'Alice' });

// 3. Dispose of the subscription
unsubscribe();

// 4. No message logged here
pubSub.publish('user:login', { name: 'Bob' });
