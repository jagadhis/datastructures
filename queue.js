function queue() {
  collection = ["ab"];
  this.print = () => {
    console.log(collection);
  };
  this.enqueue = (element) => {
    collection.push(element);
  };
  this.dequeue = () => {
    return collection.shift();
  };
  this.front = () => {
    return collection[0];
  };
  this.size = () => {
    return collection.length;
  };
  this.isempty = () => {
    return collection.length === 0;
  };
}

var que = new queue();
var que1 = new queue();
que.enqueue("a");
que.enqueue("b");
que.print();

que.dequeue();

console.log(que.front());
que.print();
