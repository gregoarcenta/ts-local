// observer.ts
type Callback = (data: any) => void;

export class EventEmitter {
  private events: Record<string, Callback[]> = {};

  subscribe(event: string, callback: Callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  }

  emit(event: string, data: any) {
    this.events[event]?.forEach((cb) => cb(data));
  }
}

