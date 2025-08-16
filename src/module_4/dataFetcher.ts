/**
 * DataFetcher
 * --------------------
 * Clase que simula un fetch tipado.
 * 
 * Conceptos:
 * - Uso de tipos condicionales dentro de clases.
 * - Ejemplo práctico: resultados distintos según el endpoint.
 */

type User = { id: number; name: string };
type Product = { id: number; title: string };

type FetchResult<T> = T extends "users"
  ? User[]
  : T extends "products"
    ? Product[]
    : unknown;

export class DataFetcher {
  public fetch<T extends string>(endpoint: T): FetchResult<T> {
    if (endpoint === "users") {
      return [{ id: 1, name: "Gregory" }] as FetchResult<T>;
    }
    if (endpoint === "products") {
      return [{ id: 1, title: "Laptop" }] as FetchResult<T>;
    }
    return "Not found" as unknown as FetchResult<T>;
  }
}
