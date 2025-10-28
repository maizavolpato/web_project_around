export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this.renderer = renderer;
    this.container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      this.renderer(item);
    });
  }

  addItem(element) {
    this.container.prepend(element);
  }
}
