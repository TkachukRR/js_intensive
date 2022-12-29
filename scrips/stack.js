export class myStack {
  data = [];

  push(newTask) {
    this.data = [newTask, ...this.data];
  }

  pop() {
    if (!this.data.length) {
      return;
    }
    this.data = this.data.slice(0, this.data.length - 1);
  }

  peek() {
    if (!this.data.length) {
      return "Stack is empty";
    }
    return this.data[0];
  }

  length() {
    if (!this.data.length) {
      return "Stack is empty";
    }
    return this.data.length;
  }
}
