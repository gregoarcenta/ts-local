/**
 * Collection<T>
 * --------------------
 * Clase genérica en TypeScript para administrar colecciones tipadas.
 * 
 * Características:
 * - Almacenamiento seguro mediante tipado genérico <T>.
 * - Restricción de tipo para asegurar propiedad `id: number`.
 * - Métodos para agregar, eliminar, listar y transformar elementos.
 * - Búsqueda flexible mediante sobrecarga de métodos (por ID o predicado).
 * - Encapsulación de datos mediante propiedades privadas.
 * 
 * Este ejemplo utiliza un tipo `User` para demostrar su funcionamiento.
 */


import { Collection } from "./collection";

type User = { id: number; name: string };

export class Main {
  private users = new Collection<User>();

  constructor() {}

  start() {
    this.users.add({ id: 1, name: "Gregory" });
    this.users.add({ id: 2, name: "Alice" });
    this.users.add({ id: 3, name: "Bob" });

    // 1. Mostrar todos los usuarios
    const users = this.users.getAll();
    console.log("1. Todos los usuarios:", JSON.stringify(users));
    // Salida esperada: [ { id: 1, name: 'Gregory' }, { id: 2, name: 'Alice' }, { id: 3, name: 'Bob' } ]

    // 2. Buscar usuario por ID
    const userById = this.users.find(2);
    console.log("2. Usuario con id=2:", userById);
    // Salida esperada: { id: 2, name: 'Alice' }

    // 3. Buscar usuario por predicado (nombre === "Gregory")
    const userByName = this.users.find((u) => u.name === "Gregory");
    console.log('3. Usuario con nombre "Gregory":', userByName);
    // Salida esperada: { id: 1, name: 'Gregory' }

    // 4. Eliminar usuario con id = 1
    this.users.remove((u) => u.id === 1);
    const usersAfterRemove = this.users.getAll();
    console.log(
      "4. Usuarios después de eliminar id=1:",
      JSON.stringify(usersAfterRemove)
    );
    // Salida esperada: [ { id: 2, name: 'Alice' }, { id: 3, name: 'Bob' } ]

    // 5. Usar map para obtener solo los nombres de los usuarios restantes
    const userNames = this.users.map((u) => u.name);
    console.log("5. Nombres de usuarios restantes:", userNames);
    // Salida esperada: [ 'Alice', 'Bob' ]
  }
}
