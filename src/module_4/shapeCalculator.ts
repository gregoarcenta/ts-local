/**
 * ShapeCalculator
 * --------------------
 * Clase que calcula el área de diferentes figuras geométricas.
 *
 * Conceptos:
 * - Uso de "discriminated unions" en clases.
 * - Narrowing con `switch` y tipo `never` para exhaustividad.
 *
 */

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number };

export class ShapeCalculator {
  area(shape: Shape): number {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.side ** 2;
      case "rectangle":
        return shape.width * shape.height;
      default:
        // `never` asegura que tratamos todos los casos
        const _exhaustive: never = shape;
        throw new Error(`Unknown shape: ${_exhaustive}`);
    }
  }
}
