import StorageManager from './storage-manager';

/**
 * Responsavel por partilhar os objetos comuns entre
 * as classes principais de eventos e comandos.
 */
export default class AssistantManager {
  /**
   * Verifica a propriedade do objeto informado e
   * o instancia.
   * @param obj Objeto a ser instanceado.
   * @param storage Predefinições do Storage.
   */
  instance(obj: any, storage: StorageManager): any {
    return new obj[Object.keys(obj)[0]](storage);
  }

  /**
   * Transforma a primeira letra em maiuscula. (Capitalize)
   * @param context
   */
  caps(context: string): any {
    return context.charAt(0).toUpperCase() + context.slice(1);
  }
}
