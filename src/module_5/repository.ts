/**
 * Repository<T>
 * --------------------
 * Clase genérica que simula un repositorio de datos tipado.
 * 
 * Aprendizaje:
 * - Genéricos con restricciones dinámicas (`T extends { id: number }`).
 * - CRUD básico tipado.
 * - Reutilización de lógica sin repetir tipos.
 */

export class Repository<T extends { id: number }> {
  private items: T[] = [];

  public add(item: T): void {
    this.items.push(item);
  }

  public getAll(): T[] {
    return [...this.items];
  }

  public getById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  public update(id: number, changes: Partial<T>): T | undefined {
    const item = this.getById(id);
    if (item) Object.assign(item, changes);
    return item;
  }

  public remove(id: number): boolean {
    const originalLength = this.items.length;
    this.items = this.items.filter((i) => i.id !== id);
    return this.items.length < originalLength;
  }
}
