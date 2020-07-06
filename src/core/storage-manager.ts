import { Client, ClientOptions, Collection } from 'discord.js';
import ConfigManager from './config-manager';

/**
 * Responsavel pela administração do Client Discord.
 * Client Eveby
 */
export default class StorageManager extends Client {
  storage: Collection<any, any>;

  constructor(config: ConfigManager, options: ClientOptions) {
    super(options);

    this.storage = new Collection();
    this.storage.set('config', config);
  }

  has(key: string): boolean {
    return this.storage.has(key);
  }

  set(key: string, val: any): void {
    this.storage.set(key, val);
  }

  get(key: string): any {
    return this.storage.get(key);
  }
}
