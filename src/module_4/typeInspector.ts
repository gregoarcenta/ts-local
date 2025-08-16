/**
 * TypeInspector
 * --------------------
 * Clase para inspeccionar tipos usando condicionales.
 * 
 * Conceptos:
 * - Uso de "T extends U ? X : Y".
 * - Ejemplo con ReturnType personalizado usando infer.
 */

type IsString<T> = T extends string ? "yes" : "no";

type FunctionReturn<T> = T extends (...args: any[]) => infer R ? R : never;

function greet(name: string) {
  return `Hello, ${name}`;
}

export class TypeInspector {
  public testString<T>(value: T): IsString<T> {
    return (typeof value === "string" ? "yes" : "no") as IsString<T>;
  }

  public getReturnType(): FunctionReturn<typeof greet> {
    return greet("Gregory"); // string
  }
}
