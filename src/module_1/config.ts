// Definimos los tipos base
export type Env = "production" | "development";

// Definimos el objeto de configuración como readonly y literal
export class Config {
  // Propiedades readonly
  private readonly env: Env;
  private readonly appName: string;
  private readonly version: string;

  constructor(env: Env, appName: string, version: string) {
    this.env = env;
    this.appName = appName;
    this.version = version;
  }

  // Getters para exponer los valores
  public getEnv(): Env {
    return this.env;
  }

  public getAppName(): string {
    return this.appName;
  }

  public getVersion(): string {
    return this.version;
  }

  // Método para mostrar configuración básica
  public getInfo(): string {
    return `App: ${this.appName} v${this.version} running in ${this.env} mode`;
  }
}
