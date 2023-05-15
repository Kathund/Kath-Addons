import PogObject from "../PogData/index"

export const removeColors = function (text) {
  const cleanText = text.replace(/§./g, "");
  return cleanText;
}

export const divider = "&a&m            &d&m            &e&m            &a&m            &d&m            &e&m            &a&m           &d&m           &e&m           &8\n";

export const data = new PogObject("kath", {
  "firstTimeMsg": false,
  "updateMessage1_3_0": false,
  "discordWarningMessage": true
}, "data/data.json")

export const ShowFirstLoginMessage = () => {
  data.firstTimeMsg = true;
  data.save();

  let stringArray = [
    `${divider}`,
    ChatLib.getCenteredText(`&dKath Addons -${JSON.parse(FileLib.read("kath", "metadata.json")).version} `) + "\n",
    ChatLib.getCenteredText(`&8Looks like this is your first using &dKath8!`) + "\n",
    ChatLib.getCenteredText(`&8GUI command is &e/kath`) + "\n",
    ChatLib.getCenteredText(`&8Other commands`),
    ChatLib.getCenteredText(`&8/limbo - Sends to Limbo`),
    `\n${divider}`
  ]

  let finalText = ""
  stringArray.forEach((line) => {
    if (line == "-/*") return
    finalText += (!line.includes("-/-")) ? `\n${line}` : line.replace("-/-", "\n")
  })

  ChatLib.chat(finalText)
}

export const viewChangeLog1_3_0 = () => {
  const discordWarning = new Message(
    new TextComponent("&7Discord Warning &8(hover)").setHover("show_text", `Shows a warning about scams rats and other stuff like that when someone posts a discord invite link`)
  );
  const spelling = new Message(
    new TextComponent("&7Changed spelling in most files")
  );

  ChatLib.chat(divider)
  ChatLib.chat(`&dKath - &ev1.3.0`)
  ChatLib.chat(discordWarning)
  ChatLib.chat(spelling)
  ChatLib.chat(divider)
}

export const viewChangeLog1_2_0 = () => {
  const wikiSwapper = new Message(
    new TextComponent("&7Wiki Swapper &8(hover)").setHover("show_text", `&l&4Wiki Swapper May not always work due to the fandom having different page urls then hypixel wiki sometimes&r\nSwaps out the hypixel wiki with the fandom wiki when using /wiki or /wikithis`)
  );
  const dungeonRestart = new Message(
    new TextComponent("&7Removed Auto Dungeon Restart due to ban chances")
  );
  const removeSpiritBear = new Message(
    new TextComponent("&7Removed Spirit Bear ESP due to ban chances")
  );
  const changeSpritBow = new Message(
    new TextComponent("&7Changed Spirit Bow ESP to a waypoint")
  );
  const newFiles = new Message(
    new TextComponent("&7Moved everything into its own file for better backend")
  );
  const changeLog = new Message(
    new TextComponent("&7Added Change log for when the module updates")
  );

  ChatLib.chat(divider)
  ChatLib.chat(`&dKath - &ev1.2.0`)
  ChatLib.chat(wikiSwapper)
  ChatLib.chat(dungeonRestart)
  ChatLib.chat(removeSpiritBear)
  ChatLib.chat(changeSpritBow)
  ChatLib.chat(newFiles)
  ChatLib.chat(changeLog)
  ChatLib.chat(divider)
}

export const viewChangeLog1_1_2 = () => {
  const antiTip = new Message(
    new TextComponent("&7Fixed Anti Tip not working")
  );

  ChatLib.chat(divider)
  ChatLib.chat(`&dKath - &ev1.1.2`)
  ChatLib.chat(antiTip)
  ChatLib.chat(divider)
}

export const viewChangeLog1_1_1 = () => {
  const limbo = new Message(
    new TextComponent("&7Fixed &e/limbo&r&7 not sending the user to limbo")
  );

  ChatLib.chat(divider)
  ChatLib.chat(`&dKath - &ev1.1.1`)
  ChatLib.chat(limbo)
  ChatLib.chat(divider)
}

export const viewChangeLog1_1_0 = () => {
  const quiver = new Message(
    new TextComponent("&7Made quiver alert also support the notification for 10 arrows")
  );
  const dungeonRestart = new Message(
    new TextComponent("&7Added Auto Dungeon Restart &8(hover)").setHover("show_text", `&n&4Usage of this may result in a BAN! Use at your own risk&r\nAutomatically restarts the dungeon after the dungeon ends`)
  );
  const gui = new Message(
    new TextComponent("&7Changed how the GUI is ordered &8(hover)").setHover("show_text", `Will reset the end users config`)
  );
  const antiNon = new Message(
    new TextComponent("&7Added Anti Non &8(hover)").setHover("show_text", `Hiding messages from a player under a set skyblock level (needs skyblock levels in chat on)`)
  );
  const sbe = new Message(
    new TextComponent("&7Added Anti SBE &8(hover)").setHover("show_text", `Hiding any message containing [SBE] in it`)
  );
  const antiTip = new Message(
    new TextComponent("&7Added Anti Tip &8(hover)").setHover("show_text", `Sick of the auto tip messages? Just hide them`)
  );
  const coopChat = new Message(
    new TextComponent("&7Added Coop Chat Ping &8(hover)").setHover("show_text", `Plays the ding sound when someone types in coop chat`)
  );
  const limbo = new Message(
    new TextComponent("&7Added &e/limbo &8(hover)").setHover("show_text", `Sends the user to limbo`)
  );
  const alertSound = new Message(
    new TextComponent("&7Added Alert Sound &8(hover)").setHover("show_text", `Plays a sound when an alert gets displayed`)
  );
  const quiz = new Message(
    new TextComponent("&7Added quiz fail message to cyber bully dungeons")
  );

  ChatLib.chat(divider)
  ChatLib.chat(`&dKath Addons - &ev1.1.0`)
  ChatLib.chat(quiver)
  ChatLib.chat(dungeonRestart)
  ChatLib.chat(gui)
  ChatLib.chat(antiNon)
  ChatLib.chat(sbe)
  ChatLib.chat(antiTip)
  ChatLib.chat(coopChat)
  ChatLib.chat(limbo)
  ChatLib.chat(alertSound)
  ChatLib.chat(quiz)
  ChatLib.chat(divider)
}

export const viewChangeLog1_0_0 = () => {

  const bloodReady = new Message(
    new TextComponent("&7Added Blood Ready &8(hover)").setHover("show_text", `Displays a message on your screen when the watcher has spawned all the mobs`)
  );
  const cyberBullyDungeons = new Message(
    new TextComponent("&7Cyber Bully Dungeons &8(hover)").setHover("show_text", `Displays a message on your screen when the watcher has spawned all the mobs`)
  );
  const spiritBow = new Message(
    new TextComponent("&7F4/M4 Spirit Bow ESP &8(hover)").setHover("show_text", `&l&4Usage of this may result in a ban! Use at your own risk\nShows a box around the spirit bow`)
  );
  const spiritBear = new Message(
    new TextComponent("&7F4/M4 Spirit Bear ESP &8(hover)").setHover("show_text", `&l&4Usage of this may result in a ban! Use at your own risk&r\n Shows a box around the spirit bear`)
  );
  const visitorAlert = new Message(
    new TextComponent("&7Visitor Alert &8(hover)").setHover("show_text", `Shows a warning on your screen when a visitor joins your garden`)
  );
  const autoPartyAccept = new Message(
    new TextComponent("&7Auto party accept &8(hover)").setHover("show_text", `Will auto accept any party invite sent to you`)
  );
  const fragBot = new Message(
    new TextComponent("&7Frag bot &8(hover)").setHover("show_text", `Turns your account into a frag bot`)
  );
  const arrowWarning = new Message(
    new TextComponent("&7Arrow Warning &8(hover)").setHover("show_text", `Shows a warning on your screen when you have 50 arrows left`)
  );
  const giftWaypoints = new Message(
    new TextComponent("&7Gift Waypoints &8(hover)").setHover("show_text", `Waypoints to all the possible spawn locations for gifts in the Jerry's workshop event`)
  );
  const cyberBully = new Message(
    new TextComponent("&7Cyber Bully &8(hover)").setHover("show_text", `&4&lUsage of this may result in a mute! Use at your own risk&r\nWill post peoples death messages in all and party chat`)
  );
  const antiGexp = new Message(
    new TextComponent("&7Anti GEXP &8(hover)").setHover("show_text", `Hides the gexp messages when playing skyblock`)
  );
  const antiJoin = new Message(
    new TextComponent("&7Anti MVP+/++ Join Messages &8(hover)").setHover("show_text", `Hides the MVP+/++ lobby join messages from showing up in your chat`)
  );
  const antiHype = new Message(
    new TextComponent("&7Anti Hype Messages &8(hover)").setHover("show_text", `Hides the max hype messages from showing up in your chat`)
  );
  const antiCombo = new Message(
    new TextComponent("&7Anti Combo &8(hover)").setHover("show_text", `A settings that makes it so u cant be combed and it will auto combo for u (hides the combo messages from the grandma wolf)`)
  );
  ChatLib.chat(divider)
  ChatLib.chat(`&dKath Addons - &ev1.0.0`)
  ChatLib.chat(bloodReady)
  ChatLib.chat(cyberBullyDungeons)
  ChatLib.chat(spiritBow)
  ChatLib.chat(spiritBear)
  ChatLib.chat(visitorAlert)
  ChatLib.chat(autoPartyAccept)
  ChatLib.chat(fragBot)
  ChatLib.chat(arrowWarning)
  ChatLib.chat(giftWaypoints)
  ChatLib.chat(cyberBully)
  ChatLib.chat(antiGexp)
  ChatLib.chat(antiJoin)
  ChatLib.chat(antiHype)
  ChatLib.chat(antiCombo)
  ChatLib.chat(divider)
}
