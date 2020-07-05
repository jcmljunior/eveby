import { Client } from 'discord.js';
import ConfigManager from './config-manager';

/**
 * Responsavel pela administração do Client Discord.
 * Client Eveby
 */
export default class StorageManager extends Client {
  config: ConfigManager;

  constructor(config: ConfigManager, options: any) {
    super(options);
    this.config = config;
  }
}
