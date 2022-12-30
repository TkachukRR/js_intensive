export class LinkedList {
  data = [];

  _head = null;

  _tail = null;

  head() {
    return this._head;
  }

  tail() {
    return this._tail;
  }

  size() {
    return this.data.length;
  }

  add(data = "") {
    let listItem = {};
    if (!this.data.length) {
      listItem = { data: data, next: null };
    } else {
      listItem = { data: data, next: this.data[0] };
    }
    this.data = [listItem, ...this.data];
    this.setHeadAndTail();
  }

  remove() {
    if (!this.data.length) {
      console.error("LinkedList data пуст");
      return;
    }
    this.data = this.data.slice(0, this.data.length - 1);

    if (this.data.length) {
      this.data[this.data.length - 1].next = null;
    }
    this.setHeadAndTail();
  }

  indexOf(data) {
    if (!this.data.length) {
      console.error("LinkedList data пуст");
      return;
    }

    let index = this.data.findIndex((element) => element.data === data);

    if (index < 0) {
      return "Hет элемента с таким значением data";
    }
    return index;
  }

  addAt(data, index) {
    if (typeof index !== "number") {
      console.error(`index должен быть числом`);
      return;
    }
    if (index > this.data.length) {
      console.error(`index должен быть меньше или равен ${this.data.length}`);
      return;
    }
    if (index < 0) {
      console.error(`index должен быть положительным`);
      return;
    }

    this.data.splice(index, 0, { data: data, next: this.data[index] || null });

    if (index !== 0) {
      this.data[index - 1].next = this.data[index];
    }
    this.setHeadAndTail();
  }

  removeAt(index) {
    if (!this.data.length) {
      console.error("LinkedList data пуст");
      return;
    }
    if (typeof index !== "number") {
      console.error(`index должен быть числом`);
      return;
    }
    if (index > this.data.length - 1) {
      console.error(
        `index должен быть меньше или равен ${this.data.length - 1}`
      );
      return;
    }
    if (index < 0) {
      console.error(`index должен быть положительным`);
      return;
    }

    this.data.splice(index, 1);

    if (index) {
      this.data[index - 1].next = this.data[index];
    }

    if (index === this.data.length && this.data.length) {
      this.data[this.data.length - 1].next = null;
    }

    this.setHeadAndTail();
  }

  setHeadAndTail() {
    this._head = this.data[0] || null;
    this._tail = this.data[this.data.length - 1] || null;
  }
}
