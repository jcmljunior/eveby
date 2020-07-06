export interface ConfigManagerConfig {
  /**
   * Define chave e valor nas configurações do projeto.
   * @param options { key: 'value', data: [1,2,3] }
   */
  register(options: any): void;
}
