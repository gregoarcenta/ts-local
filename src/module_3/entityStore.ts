import { log } from "console";

export class EntityStore<T extends { id: string | number }> {
  private data: T[] = [];

  add(entity: T): void {
    this.data.push(entity);
  }

  getAll(): Readonly<T>[] {
    return this.data;
  }

  getById(id: number): T | undefined {
    return this.data.find((entity) => entity.id === id);
  }

  update(id: number, changes: Partial<T>): T | undefined {
    const entity = this.getById(id);
    if (entity) {
      Object.assign(entity, changes);
      return entity;
    }
    return entity;
  }

  pick<K extends keyof T>(entity: T, keys: K[]): Pick<T, K> {
    const picked = {} as Pick<T, K>;
    keys.forEach((key) => {
      picked[key] = entity[key];
    });
    return picked;
  }

  omit<K extends keyof T>(entity: T, keys: K[]): Omit<T, K> {
    const result = { ...entity };
    for (const key of keys) {
      delete result[key];
    }
    return result;
  }

  indexBy<K extends keyof T>(key: K): Record<string, T> {
    return this.data.reduce((acc, item) => {
      acc[String(item[key])] = item;
      return acc;
    }, {} as Record<string, T>);
  }
}

// 🔹 Tipos utilitarios avanzados
type FunctionProps<T> = { 
  [K in keyof T as T[K] extends (...args: any) => any ? K : never]: T[K] 
};

type PromisifyMethods<T> = {
  [K in keyof FunctionProps<T>]: T[K] extends (...args: infer A) => infer R 
    ? (...args: A) => Promise<R> 
    : never
};

export type NonFunctionProps<T> = { 
  [K in keyof T as T[K] extends Function ? never : K]: T[K] 
};

type ValueOf<T> = T[keyof T];
