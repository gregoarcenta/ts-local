import { Config, type Env } from "./config";

type ExtraConfig = {
  port: number;
  debug: boolean;
}

export class ExtendedConfig extends Config {
  private readonly extra: ExtraConfig;

  constructor(env: Env, appName: string, version: string, extra: ExtraConfig) {
    super(env, appName, version);
    this.extra = extra;
  }

  public getExtra(): ExtraConfig {
    return this.extra;
  }
}