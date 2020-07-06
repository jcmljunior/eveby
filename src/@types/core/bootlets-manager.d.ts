import StorageManager from '../../core/storage-manager';

export interface BootletsManagerConfig {
  /**
   * Define o Client Eveby.
   */
  storage: StorageManager;

  /**
   * Define o local dos eventos.
   */
  path: string;

  /**
   * Define o local dos eventos.
   */
  setPath(): void;

  /**
   * Define a coleção de eventos.
   */
  setBootlet(): void;
}
