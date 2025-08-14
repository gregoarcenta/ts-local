/**
 * ConfigManager
 * --------------------
 * Clase para gestionar configuraciones de aplicación utilizando características avanzadas de TypeScript.
 * 
 * Características:
 * - Uso de tipos literales para valores permitidos.
 * - Propiedades `readonly` para inmutabilidad.
 * - Union & intersection types para flexibilidad de tipado.
 * - `as const` para asegurar valores constantes en tiempo de compilación.
 * - Herencia para extender funcionalidades de configuración.
 * 
 * Este ejemplo muestra cómo centralizar la configuración de una aplicación
 * manteniendo tipado estricto y extensibilidad.
 */

import { ExtendedConfig } from "./extendedConfig";

export class Main {
  private extendedConfig: ExtendedConfig = new ExtendedConfig(
    "development",
    "MyApp",
    "1.0.0",
    {
      port: 8080,
      debug: true
    }
  );

  constructor() {}

  start() {
    console.log(this.extendedConfig.getInfo());
    console.log(this.extendedConfig.getExtra()); // { port: 8080, debug: true }
  }
}
