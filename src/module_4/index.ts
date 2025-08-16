/**
 * Main - Módulo 4
 * --------------------
 * Punto de entrada del módulo.
 * Ejecuta todas las clases para mostrar Narrowing, Guards y Tipos condicionales.
 */

import { DataFetcher } from "./dataFetcher";
import { PetHandler } from "./petHandler";
import { ShapeCalculator } from "./shapeCalculator";
import { TypeInspector } from "./typeInspector";

export class Main {
  start() {
    console.log("=== Módulo 4 ===");

    // 1. Narrowing
    const calc = new ShapeCalculator();
    console.log("Circle area:", calc.area({ kind: "circle", radius: 10 })); // ~314.16
    console.log("Square area:", calc.area({ kind: "square", side: 5 })); // 25
    console.log(
      "rectangle area:",
      calc.area({ kind: "rectangle", width: 4, height: 6 })
    ); // 24

    // 2. Type Guards
    const pets = new PetHandler();
    console.log(pets.move({ swim: () => "I am swimming!" }));
    console.log(pets.move({ fly: () => "I am flying!" }));

    // 3. Tipos condicionales
    const inspector = new TypeInspector();
    console.log(inspector.testString("hello")); // yes
    console.log(inspector.testString(123)); // no
    console.log(inspector.getReturnType()); // Hello, Gregory

    // 4. Ejercicio final
    const fetcher = new DataFetcher();

    console.log(fetcher.fetch("users")); // [ { id: 1, name: 'Gregory' } ]
    console.log(fetcher.fetch("products")); // [ { id: 1, title: 'Laptop' } ]
    console.log(fetcher.fetch("orders")); // "Not found"
  }
}
