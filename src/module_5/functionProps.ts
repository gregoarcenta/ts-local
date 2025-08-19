/**
 * Utils<T>
 * --------------------
 * Clase con tipos genéricos personalizados y métodos prácticos.
 *
 * Aprendizaje:
 * - Extraer solo propiedades de función (`FunctionProps`).
 * - Crear versiones promisificadas de métodos (`PromisifyMethods`).
 */

import { log } from "console";

type FunctionProps<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K];
};

type PromisifyMethods<T> = {
  [K in keyof FunctionProps<T>]: T[K] extends (...args: infer A) => infer R
    ? (...args: A) => Promise<R>
    : never;
};

export class Sample {
  foo(x: number) {
    return x * 2;
  }
  bar(y: string) {
    return y + "!";
  }
}

export class Utils<T> {
  public promisifyMethods(obj: T): PromisifyMethods<T> {
    const result: any = {};
    const proto = Object.getPrototypeOf(obj);

    for (const key of Object.getOwnPropertyNames(proto)) {
      const value = obj[key as keyof T];
    //   console.log(`Processing key: ${key}, value type: ${typeof value}`);

      if (typeof value === "function" && key !== "constructor") {
        result[key] = (...args: any[]) =>
          Promise.resolve((value as (...args: any[]) => any).apply(obj, args));
      }
    }

    return result;
  }
}
