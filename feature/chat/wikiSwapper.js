import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register("chat", (event) => {
  if (!config.chatWikiSwapper) return;
  let ReceivedMessage = new Message(EventLib.getMessage(event));
  ReceivedMessage.getMessageParts().forEach((part) => {
    var part = part.getClickValue()
    if (part === null) return;
    if (!part.includes('https://wiki.hypixel.net/')) return;
    cancel(event)
    const newMessage = new Message(
      new TextComponent("&7Click &e&lHERE &7to find it on the &6Better Wiki&7!&r").setClick("open_url", helperFunction.getWikiUrl(part.split("/").pop())).setHover("show_text", helperFunction.getWikiUrl(part.split("/").pop()))
    );
    ChatLib.chat(newMessage)
  })
})
