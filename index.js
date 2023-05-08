import * as helperFunction from "./helperFunctions.js";
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

ShowFirstLoginMessage = () => {
  helperFunction.data.firstTimeMsg = true;
  helperFunction.data.save();

  let stringArray = [
    `${helperFunction.divider}`,
    ChatLib.getCenteredText(`&dKath Addons`) + "\n",
    ChatLib.getCenteredText(`&8Looks like this is your first using &dKaths Addons&8!`) + "\n",
    ChatLib.getCenteredText(`&8GUI command is &e/kath`) + "\n",
    ChatLib.getCenteredText(`&8Other commands`),
    ChatLib.getCenteredText(`&8/limbo - Sends to Limbo`),
    `\n${helperFunction.divider}`
  ]

  let finalText = ""
  stringArray.forEach((line) => {
    if (line == "-/*") return
    finalText += (!line.includes("-/-")) ? `\n${line}` : line.replace("-/-", "\n")
  })

  ChatLib.chat(finalText)
}

register("worldLoad", () => {
  if (helperFunction.data.firstTimeMsg === true) return
  ShowFirstLoginMessage()
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
