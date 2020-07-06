import { EvebyConfig } from '../@types/index';
import ConfigManager from './config-manager';
import StorageManager from './storage-manager';
import BootletsManager from './bootlets-manager';
import AddonsManager from './addons-manager';

/**
 * Classe responsavel pela administração do projeto.
 */
export default class Eveby implements EvebyConfig {
  config: ConfigManager;
  storage: StorageManager;

  bootlets: BootletsManager;
  addons: AddonsManager;

  constructor() {
    this.config = new ConfigManager();
    this.config.register({ path: process.cwd() + '/dist/spices/' });

    this.storage = new StorageManager(this.config, {});

    this.bootlets = new BootletsManager(this.storage);
    this.addons = new AddonsManager();
  }

  async load(): Promise<any> {}

  async run(): Promise<any> {
    console.log(this.bootlets);
  }
}
