// Decoradores y claves de metadata
import "reflect-metadata";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const META_PREFIX = Symbol("controller:prefix");
const META_ROUTES = Symbol("controller:routes");
const META_VALIDATOR = Symbol("method:validator");
const META_PARAMS = Symbol("method:params");

type RouteDef = { method: HttpMethod; path: string; key: string | symbol };
type ParamDef = { index: number; kind: "body" };

export const MetaKeys = {
  PREFIX: META_PREFIX,
  ROUTES: META_ROUTES,
  VALIDATOR: META_VALIDATOR,
  PARAMS: META_PARAMS,
} as const;

// ---------- Decoradores ----------

// Clase: @Controller('/users')
export function Controller(prefix: string) {
  return function (target: Function) {
    Reflect.defineMetadata(META_PREFIX, prefix, target.prototype);
  };
}

// Método base: @Route("GET", "/")
function Route(method: HttpMethod, path: string) {
  return function (
    target: any,
    propertyKey: string | symbol,
    _descriptor: PropertyDescriptor,
  ) {
    const routes: RouteDef[] = Reflect.getMetadata(META_ROUTES, target) ?? [];
    routes.push({ method, path, key: propertyKey });
    Reflect.defineMetadata(META_ROUTES, routes, target);
  };
}

// Azúcar sintáctico
export const Get = (path: string) => Route("GET", path);
export const Post = (path: string) => Route("POST", path);

// Parámetro: @Body()
export function Body(): ParameterDecorator {
  return (target, propertyKey, parameterIndex) => {
    const params: ParamDef[] =
      Reflect.getMetadata(META_PARAMS, target, propertyKey as string) ?? [];
    params.push({ index: parameterIndex, kind: "body" });
    Reflect.defineMetadata(META_PARAMS, params, target, propertyKey as string);
  };
}

// Método: @Validate(payload => string[] de errores)
export function Validate<T>(
  validator: (payload: T) => string[]
): MethodDecorator {
  return (target, propertyKey, _descriptor) => {
    Reflect.defineMetadata(META_VALIDATOR, validator, target, propertyKey!);
  };
}
