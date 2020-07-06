import { EvebyConfig } from '../@types/index';
import ConfigManager from './config-manager';
import StorageManager from './storage-manager';

/**
 * Classe responsavel pela administração do projeto.
 */
export default class Eveby implements EvebyConfig {
  config: ConfigManager;
  storage: StorageManager;

  bootlets: any;
  addons: any;

  constructor() {
    this.config = new ConfigManager();
    this.storage = new StorageManager(this.config, {});
  }

  async load(): Promise<any> {}

  async run(): Promise<any> {}
}
