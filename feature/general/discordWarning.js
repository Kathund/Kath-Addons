import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (!message.includes("discord.gg")) return;
  const warningMessage = new Message(
    new TextComponent("&c&lWARNING: &r&cDiscord servers can host contain malware, rats and other malicious software &r&7(Click here to read more about how to stay safe)").setClick("open_url", `insert link`).setHover("show_text", `insert link`)
  );
  const disableMessage = new Message(
    new TextComponent("&c&lWARNING: &r&c Click here to disable this message").setClick("open_url", `a`).setHover("show_text", `a`)
  );
  ChatLib.chat(warningMessage)
  ChatLib.chat(disableMessage)

})
