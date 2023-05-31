import * as helperFunction from "../../helperFunctions.js";
import Settings from "../../settings";
const config = Settings

register('chat', (event) => {
  try {
    var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
    if (!message.includes("discord.gg")) return;
    if (!helperFunction.data.discordWarningMessage) return;
    const warningMessage = new Message(
      new TextComponent("&c&lWARNING: &r&cDiscord servers can host contain scams, malware, rats and other malicious software &r&7(Click here to read more about how to stay safe)").setClick("open_url", `https://hypixel.net/threads/all-about-skyblock-account-stealing-part-ii.5231557/`).setHover("show_text", `All about SkyBlock Account Stealing - Part II`)
    );
    const disableMessage = new Message(
      new TextComponent("&c&lWARNING: &r&c Click here to disable this message").setClick("run_command", `/discordwarningoff`).setHover("show_text", `/discordwarningoff`)
    );
    ChatLib.chat(warningMessage)
    ChatLib.chat(disableMessage)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dAutoWB &6> &c${error}`);
  }
})
