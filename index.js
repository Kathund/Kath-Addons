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

import './feture/dungeons/bloodReady.js'
import './feture/dungeons/cyberBullyDungeons.js'
import './feture/dungeons/spiritBow.js';

// ! Gardens

import './feture/gardens/visitorAlert.js';

// ! Party

import './feture/party/autoPartyAccept.js';
import './feture/party/fragBot.js';

// ! Chat

import './feture/chat/antiCombo.js';
import './feture/chat/antiGexp.js';
import './feture/chat/antiHype.js';
import './feture/chat/antiMVPJoin.js';
import './feture/chat/antiNon.js';
import './feture/chat/antiSBE.js';
import './feture/chat/antiTip.js';
import './feture/chat/coopChatPing.js';
import './feture/chat/cyberBully.js';
import './feture/chat/wikiSwapper.js';

// ! Misc

import './feture/misc/arrowWarning.js';
import './feture/misc/giftWaypoints.js';
