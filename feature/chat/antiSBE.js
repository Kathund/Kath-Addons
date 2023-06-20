import * as helperFunction from '../../helperFunctions.js';
import Settings from '../../settings';
const config = Settings;

register('chat', (event) => {
  try {
    var message = helperFunction.removeColors(ChatLib.getChatMessage(event).toString());
    if (!config.chatAntiSBE) return;
    if (message.includes('[SBE]')) {
      cancel(event);
    }
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
});
