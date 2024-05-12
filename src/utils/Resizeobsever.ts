export default class Resizeobserver {
  resizer: ResizeObserver | undefined;
  constructor() {}
  observer(container: Element, fn: (ob: ResizeObserverEntry) => void) {
    this.resizer = new ResizeObserver((entries) => {
      fn(entries[0]);
    });
    this.resizer.observe(container);
  }

  unobserve() {
    this.resizer?.disconnect();
  }
}
