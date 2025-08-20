// shapes.ts
interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw() { console.log("Dibujando un círculo"); }
}

class Square implements Shape {
  draw() { console.log("Dibujando un cuadrado"); }
}

// factory.ts
export class ShapeFactory {
  static createShape(type: "circle" | "square"): Shape {
    if (type === "circle") return new Circle();
    if (type === "square") return new Square();
    throw new Error("Shape no soportada");
  }
}

