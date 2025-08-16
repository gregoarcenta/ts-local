/**
 * PetHandler
 * --------------------
 * Clase que usa type guards para diferenciar entre tipos de mascotas.
 * 
 * Conceptos:
 * - `pet is Fish` → método que actúa como type guard.
 * - Uso dentro de otra función para decidir comportamiento.
 */

type Fish = { swim: () => string };
type Bird = { fly: () => string };

export class PetHandler {
  private isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }

  public move(pet: Fish | Bird): string {
    if (this.isFish(pet)) {
      return pet.swim();
    }
    return pet.fly();
  }
}
