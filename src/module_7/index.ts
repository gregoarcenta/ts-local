import { LogExecutionTime } from "./decorators/decorators";
import { ShapeFactory } from "./factory/shapes";
import { EventEmitter } from "./observer/observer";
import { Logger } from "./singleton/logger";
import {
  NoDiscount,
  ShoppingCart,
  TenPercentDiscount
} from "./strategy/discount";

export class Main {
  start() {
    console.log("======= Singleton Logger Example ======");

    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();

    logger1.log("Primer mensaje");
    logger2.log("Segundo mensaje");

    console.log("¿Son la misma instancia?", logger1 === logger2);
    console.log("Logs almacenados:", logger1.getLogs());

    console.log("\n======= Factory Shape Example ======");

    const circle = ShapeFactory.createShape("circle");
    const square = ShapeFactory.createShape("square");

    circle.draw(); // Dibujando un círculo
    square.draw(); // Dibujando un cuadrado

    console.log("\n======= Observer Pattern Example ======");
    const emitter = new EventEmitter();

    emitter.subscribe("login", (user) =>
      console.log("Usuario logueado:", user)
    );
    emitter.subscribe("logout", (user) =>
      console.log("Usuario deslogueado:", user)
    );

    emitter.emit("login", { id: 1, name: "Gregory" });
    emitter.emit("logout", { id: 1, name: "Gregory" });

    console.log("\n======= Strategy Pattern Example ======");

    const cart = new ShoppingCart(new NoDiscount());
    cart.checkout(100); // Precio final: 100

    cart.setStrategy(new TenPercentDiscount());
    cart.checkout(100); // Precio final: 90

    console.log("\n======= Decorators Example ======");
    class MathOps {
      @LogExecutionTime
      fibonacci(n: number): number {
        if (n <= 1) return n;
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
      }
    }

    const ops = new MathOps();
    console.log("Fib(10):", ops.fibonacci(4));
  }
}
