import ConfigManager from '../../core/config-manager';
import StorageManager from '../../core/storage-manager';

export interface EvebyConfig {
  config: ConfigManager;
  storage: StorageManager;

  load(): Promise<any>;
  run(): Promise<any>;
}
