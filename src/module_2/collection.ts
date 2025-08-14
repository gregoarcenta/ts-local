export class Collection<T extends { id: number }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(predicate: (item: T) => boolean): void {
    this.items = this.items.filter((item) => !predicate(item));
  }

  getAll(): T[] {
    return [...this.items];
  }

  map<U>(fn: (item: T) => U): U[] {
    return this.items.map(fn);
  }
  // Overloads
  find(id: number): T | undefined;
  find(predicate: (item: T) => boolean): T | undefined;

  // Implementación única
  find(arg: number | ((item: T) => boolean)): T | undefined {
    if (typeof arg === "number") {
      return this.items.find((item) => item.id === arg);
    } else {
      return this.items.find(arg);
    }
  }
}
