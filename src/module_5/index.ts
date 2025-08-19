import { log } from "console";
import { Sample, Utils } from "./functionProps";
import { ModelMapper } from "./ModelMapper";
import { Repository } from "./repository";

type User = { id: number; name: string; email: string };
type Product = { id: number; name: string; price: number; stock: number };

export class Main {
  start() {
    console.log("=== Módulo 5 ===");

    // 1. Repository
    const userRepo = new Repository<User>();
    userRepo.add({ id: 1, name: "Gregory", email: "g@example.com" });
    userRepo.add({ id: 2, name: "Alice", email: "a@example.com" });
    console.log(userRepo.getAll()); // 2 usuarios
    console.log(userRepo.getById(2)); // Alice
    userRepo.update(2, { name: "Alice Updated" });
    console.log(userRepo.getById(2)?.name); // "Alice Updated"
    userRepo.remove(1);
    console.log(userRepo.getAll().length); // 1

    // 2. ModelMapper
    const mapper = new ModelMapper<Product>();
    const p: Product = { id: 1, name: "Laptop", price: 1500, stock: 10 };
    console.log(mapper.pick(p, ["id", "name"])); // { id: 1, name: "Laptop" }
    console.log(mapper.omit(p, ["stock"])); // { id: 1, name: "Laptop", price: 1500 }

    // 3. Utils & PromisifyMethods
    const utils = new Utils<Sample>();
    const pObj = utils.promisifyMethods(new Sample())
    pObj.foo(5).then(console.log); // 10
    pObj.bar("Hi").then(console.log); // "Hi!"
  }
}
