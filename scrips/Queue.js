export class Queue {
  data = [];
  enqueue(newTask) {
    this.data = [newTask, ...this.data];
  }
  dequeue() {
    this.data = this.data.slice(0, this.data.length - 1);
  }
  front() {
    if (!this.data.length) {
      return "Queue is empty";
    }

    return this.data[this.data.length - 1];
  }
  isEmpty() {
    if (this.data.length) {
      return false;
    }
    return true;
  }
  size() {
    if (this.data.length) {
      return "Queue is empty";
    }
    return this.data.length;
  }
}
