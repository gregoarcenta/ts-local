
/**
 * Main del Módulo 6
 * - Registra el controlador en el router
 * - Ejecuta pruebas de rutas
 */
import "reflect-metadata";
import { Router } from "./router";
import { UserController, CreateUserDto } from "./controllers";

export class Main {
  start() {
    console.log("=== Módulo 6: Decoradores y Metaprogramación ===");
    const router = new Router();
    const users = new UserController();
    router.register(users);

    console.log("\n-- GET /users --");
    console.log(router.handle("GET", "/users/")); // []

    console.log("\n-- POST /users (payload inválido) --");
    console.log(
      router.handle("POST", "/users/", { name: "Gr", email: "bad" })
    );
    // { ok:false, errors: ["name: mínimo 3 caracteres", "email: formato inválido"] }

    console.log("\n-- POST /users (payload válido) --");
    console.log(
      router.handle("POST", "/users/", new CreateUserDto("Gregory", "g@mail.com"))
    );
    // { ok:true, user:{ id:1, name:"Gregory", email:"g@mail.com" } }

    console.log("\n-- GET /users --");
    console.log(router.handle("GET", "/users/")); // [{ id:1, ... }]
  }
}
