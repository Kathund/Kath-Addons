import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register("chat", (event) => {
  if (!config.chatWikiSwapper) return;
  let ReceivedMessage = new Message(EventLib.getMessage(event));
  ReceivedMessage.getMessageParts()
  ReceivedMessage.getMessageParts().forEach((part) => {
    var part = part.getClickValue()
    if (part === null) return;
    if (!part.includes('https://wiki.hypixel.net/')) return;
    var id = part.split("/").pop();
    cancel(event)
    const newMessage = new Message(
      new TextComponent("&7Click &e&lHERE &7to find it on the &6Better Wiki&7!&r").setClick("open_url", `https://hypixel-skyblock.fandom.com/wiki/${id}`).setHover("show_text", `https://hypixel-skyblock.fandom.com/wiki/${id}`)
    );
    ChatLib.chat(newMessage)
  })
})
