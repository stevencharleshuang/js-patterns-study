class EventObserver {
  constructor() {
    this.observers = [];
  }
  
  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((item) => {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(item => item.call());
  }
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', () => click.subscribe(getCurMilliseconds));

document.querySelector('.unsub-ms').addEventListener('click', () => click.unsubscribe(getCurMilliseconds));

document.querySelector('.sub-s').addEventListener('click', () => click.subscribe(getCurSeconds));

document.querySelector('.unsub-s').addEventListener('click', () => click.unsubscribe(getCurSeconds));

document.querySelector('.fire').addEventListener('click', () => click.fire());

// Click Handler
const getCurMilliseconds = () => console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);

const getCurSeconds = () => console.log(`Current Seconds: ${new Date().getSeconds()}`);

