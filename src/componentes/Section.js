export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this.renderer = renderer;
    this.container = document.querySelector(containerSelector);
  }

  renderItems() {
    console.log("render items");
    console.log(this._items);
    this._items.forEach((item) => {
      console.log(item);
      this.renderer(item);
    });
  }

  addItem(element) {
    console.log(this._items);
    this.container.append(element);
  }
}
