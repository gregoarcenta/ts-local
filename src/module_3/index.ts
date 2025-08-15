/**
 * Utility types & advanced type manipulation
 * ------------------------------------------
 * Implementación de una clase genérica para almacenamiento y manipulación de entidades.
 * Incluye métodos de filtrado, actualización parcial, proyecciones de propiedades
 * y generación de índices tipados.
 *
 * Se utilizan features avanzadas de TypeScript como mapped types, keyof, typeof y
 * utilidades estándar para lograr flexibilidad y seguridad de tipos.
 */

import { EntityStore, type NonFunctionProps } from "./entityStore";
import { sampleProducts, type Product } from "./products";

export class Main {
  private store = new EntityStore<Product>();
  start() {
    sampleProducts.forEach((product) => this.store.add(product));

    console.log("Todos los productos:", this.store.getAll());

    console.log("Producto con ID 2:", this.store.getById(2));

    console.log(
      "Producto actualizado:",
      this.store.update(2, { price: 20, stock: 180 })
    );

    const product2 = this.store.getById(2)!;

    console.log(
      "Solo nombre y precio:",
      this.store.pick(product2, ["name", "price"])
    );

    console.log("Sin categoría:", this.store.omit(product2, ["category"]));

    console.log("Indexado por categoría:", this.store.indexBy("category"));
  }
}
