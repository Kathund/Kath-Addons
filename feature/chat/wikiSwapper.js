import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register("chat", (event) => {
  try {
    if (!config.chatWikiSwapper) return;
    let ReceivedMessage = new Message(EventLib.getMessage(event));
    ReceivedMessage.getMessageParts().forEach((part) => {
      var part = part.getClickValue()
      if (part === null) return;
      if (!part.includes('https://wiki.hypixel.net/')) return;
      cancel(event)
      helperFunction.getWikiUrl(part.split("/").pop()).then(url => {
        const newMessage = new Message(
          new TextComponent("&7Click &e&lHERE &7to find it on the &6Better Wiki&7!&r").setClick("open_url", url).setHover("show_text", url));
        ChatLib.chat(`&r&7Found Item: &r&a${(part.split("/").pop()).replaceAll("_", " ")}&r`)
        ChatLib.chat(newMessage)
        ChatLib.chat('')
      })
    })
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
})

register("chat", (event) => {
  try {
    if (!config.chatWikiSwapper) return;
    var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
    if (message.includes("Found Item:")) {
      cancel(event)
    }
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
})
