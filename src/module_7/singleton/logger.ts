// logger.ts
export class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  private constructor() {} // Constructor privado

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string) {
    const timestamp = new Date().toISOString();
    this.logs.push(`[${timestamp}] ${message}`);
    console.log(`[${timestamp}] ${message}`);
  }

  getLogs() {
    return [...this.logs];
  }
}