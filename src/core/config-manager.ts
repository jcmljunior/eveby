import { Collection } from 'discord.js';
import { ConfigManagerConfig } from '../@types';
import _config from '../config';

/**
 * Responsavel pela administração das configurações do projeto.
 */
export default class ConfigManager implements ConfigManagerConfig {
  private config: Collection<any, any>;

  constructor() {
    this.config = new Collection();
    this.register(_config);
  }

  register(options: any): void {
    for (const key in options) {
      if (typeof options[key] === 'object') {
        /**
         * Define a coleção LV1
         * Define os valores relacionado a chave atual.
         */
        this.config.set(key, new Collection());
        for (const [key2, val2] of Object.entries(options[key])) {
          if (typeof val2 === 'object') {
            /**
             * Define a coleção LV2
             * Define os valores relacionado a chave atual.
             */
            this.config.get(key).set(key2, new Collection());
            for (const [key3, val3] of Object.entries(options[key][key2])) {
              if (typeof val3 === 'object') {
                this.config.get(key).get(key2).set(key3, val3);
              } else {
                this.config.get(key).set(key2, val2);
              }
            }
          } else {
            this.config.get(key).set(key2, val2);
          }
        }
      } else {
        this.config.set(key, options[key]);
      }
    }
  }

  has(key: string): boolean {
    return this.config.has(key);
  }

  set(key: string, val: any): boolean {
    this.config.set(key, val);
    return this.has(key);
  }

  get(key: string): any {
    return this.config.get(key);
  }
}
