import { Collection } from 'discord.js';
import StorageManager from './storage-manager';

/**
 * Responsavel pelo carregamento dos eventos.
 */
export default class BootletsManager {
  storage: StorageManager;
  path!: string;

  constructor(storage: StorageManager) {
    this.storage = storage;

    this.setPath();
    this.setBootlet();
  }

  get config() {
    return this.storage.get('config');
  }

  private setPath() {
    this.path = this.config.get('path') + 'bootlets/';
  }

  private setBootlet() {
    this.storage.set('bootlets', new Collection());
  }

  async load(): Promise<any> {}

  async run(): Promise<any> {}
}
