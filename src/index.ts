import Eveby from './core/eveby';

const bot = new Eveby();

bot
  .load()
  .then(() => bot.run())
  .finally(() => console.log('Done!'));
