import "reflect-metadata";
import { type HttpMethod, MetaKeys } from "./decorators";

type Handler = (body?: unknown) => unknown;

export class Router {
  private table = new Map<string, Handler>();

  register(controllerInstance: any) {
    const proto = Object.getPrototypeOf(controllerInstance);
    const prefix: string = Reflect.getMetadata(MetaKeys.PREFIX, proto) ?? "";
    const routes =
      (Reflect.getMetadata(MetaKeys.ROUTES, proto) as
        | { method: HttpMethod; path: string; key: string | symbol }[]
        | undefined) ?? [];
        

    for (const r of routes) {
      const fullPath = `${prefix}${r.path}`.replace(/\/+/g, "/");
      const key = this.key(r.method, fullPath);
      const method = controllerInstance[r.key].bind(controllerInstance);

      // Empaquetamos ejecución con validación e inyección @Body()
      const handler: Handler = (body?: unknown) => {
        // 1) Validación si existe
        const validator =
          Reflect.getMetadata(MetaKeys.VALIDATOR, proto, r.key as string) ??
          null;
        if (validator) {
          const errors: string[] = validator(body);
          if (errors.length) {
            return { ok: false, errors };
          }
        }

        // 2) Parámetros: solo soportamos @Body() para mantenerlo simple
        const paramDefs =
          Reflect.getMetadata(MetaKeys.PARAMS, proto, r.key as string) ?? [];
        if (paramDefs.length === 0) {
          return method(); // sin parámetros
        }
        const args: unknown[] = [];
        for (const p of paramDefs) {
          if (p.kind === "body") args[p.index] = body;
        }
        return method(...args);
      };
      this.table.set(key, handler);
      console.log(`(router) Registered ${r.method} ${fullPath}`);
    }
  }

  handle(method: HttpMethod, path: string, body?: unknown) {
    const handler = this.table.get(this.key(method, path));
    if (!handler) return { ok: false, error: "Route not found" };
    return handler(body);
  }

  private key(method: HttpMethod, path: string) {
    return `${method} ${path}`;
  }
}
