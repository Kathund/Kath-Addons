import Settings from "./settings";
const config = Settings

register("command", () => config.openGUI()).setName("kath");
register("command", () => ChatLib.say('§')).setName("limbo");

register("chat", function (event) {
  const message = (ChatLib.getChatMessage(event)).toString()
  if (message.includes('Illegal characters in chat')) {
    cancel(event)
  }
})

// ! Dungeons

import './feature/dungeons/bloodReady.js'
import './feature/dungeons/cyberBullyDungeons.js'
import './feature/dungeons/spiritBow.js';

// ! Gardens

import './feature/gardens/visitorAlert.js';

// ! Party

import './feature/party/autoPartyAccept.js';
import './feature/party/fragBot.js';

// ! Chat

import './feature/chat/antiCombo.js';
import './feature/chat/antiGexp.js';
import './feature/chat/antiHype.js';
import './feature/chat/antiMVPJoin.js';
import './feature/chat/antiNon.js';
import './feature/chat/antiSBE.js';
import './feature/chat/antiTip.js';
import './feature/chat/coopChatPing.js';
import './feature/chat/cyberBully.js';
import './feature/chat/wikiSwapper.js';

// ! Misc

import './feature/misc/arrowWarning.js';
import './feature/misc/giftWaypoints.js';

// ! Other

import './feature/firstInstall.js';
import './feature/changeLog.js';
