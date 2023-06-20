import * as helperFunction from '../../helperFunctions.js';
import Settings from '../../settings';
const config = Settings;

register('chat', (event) => {
  try {
    var message = helperFunction.removeColors(ChatLib.getChatMessage(event).toString());
    const words = message.split(' ');
    const name = words.slice(0, words.indexOf('has')).join(' ');
    Client.showTitle(`&b&l${name}&r&f has arrived on your Garden!`, '', 1, 30, 1);
    if (!config.generalAlertSound) return;
    World.playSound('random.orb', 2, 1);
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}).setCriteria(/[A-Za-z]+ has arrived on your Garden/);
