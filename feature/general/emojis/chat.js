import * as helperFunction from "../../../helperFunctions.js";
import Settings from "../../../settings";
const config = Settings

register("chat", (event) => {
  if (!config.generalEmojis) return;
  const message = ChatLib.getChatMessage(event, false)
  const match = message.match(/:\w+:/g)
  if (!match) return
  cancel(event)
  ChatLib.chat(`${helperFunction.emojis(ChatLib.getChatMessage(event))}`)
})