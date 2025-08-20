// decorators.ts
export function LogExecutionTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`Tiempo de ejecución de ${propertyKey}: ${end - start}ms`);
    return result;
  };
}
