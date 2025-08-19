/**
 * ModelMapper<T>
 * --------------------
 * Clase que permite mapear propiedades de un objeto según un conjunto de keys.
 * 
 * Aprendizaje:
 * - Uso de `Pick` y `Omit` dinámico con genéricos.
 * - Composición de tipos genéricos.
 */

export class ModelMapper<T> {
  public pick<K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;
    keys.forEach((key) => (result[key] = obj[key]));
    return result;
  }

  public omit<K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    const result = { ...obj } as T;
    keys.forEach((key) => delete result[key]);
    return result;
  }
}
