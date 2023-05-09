import PogObject from "../PogData/index"

export const removeColors = function (text) {
  const cleanText = text.replace(/§./g, "");
  return cleanText;
}

export const divider = "&a&m            &d&m            &e&m            &a&m            &d&m            &e&m            &a&m           &d&m           &e&m           &8\n";

export const data = new PogObject("KathAddons", {
  "firstTimeMsg": false,
  "updateMessage1_2_0": false
}, "data/data.json")

export const ShowFirstLoginMessage = () => {
  data.firstTimeMsg = true;
  data.save();

  let stringArray = [
    `${divider}`,
    ChatLib.getCenteredText(`&dKath Addons`) + "\n",
    ChatLib.getCenteredText(`&8Looks like this is your first using &dKaths Addons&8!`) + "\n",
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

export const viewChangeLog1_2_0 = () => {
  const wikiSwapper = new Message(
    new TextComponent("&7Wiki Swapper").setHover("show_text", `&l&4Wiki Swapper May not always work due to the fandom having different page urls then hypixel wiki sometimes&r\nSwaps out the hypixel wiki with the fandom wiki when using /wiki or /wikithis`)
  );
  const dungeonRestart = new Message(
    new TextComponent("&7Removed Auto Dungeon Restart due to ban chances")
  );
  const removeSpiritBear = new Message(
    new TextComponent("&7Removed Spirit Bear ESP due to ban chances")
  );
  const changeSpritBow = new Message(
    new TextComponent("&7Changed Spirit Bow ESP to a wapoint")
  );
  const newFiles = new Message(
    new TextComponent("&7Moved everything into its own file for better backend")
  );
  const changeLog = new Message(
    new TextComponent("&7Added Change log for when the module updates")
  );

  let stringArray = [
    `${divider}`,
    ChatLib.getCenteredText(`&dKath Addons - &ev1.2.0`) + "\n",
    ChatLib.getCenteredText(wikiSwapper) + "\n",
    ChatLib.getCenteredText(dungeonRestart) + "\n",
    ChatLib.getCenteredText(removeSpiritBear) + "\n",
    ChatLib.getCenteredText(changeSpritBow) + "\n",
    ChatLib.getCenteredText(newFiles) + "\n",
    ChatLib.getCenteredText(changeLog) + "\n",
    `\n${divider}`
  ]

  let finalText = ""
  stringArray.forEach((line) => {
    if (line == "-/*") return
    finalText += (!line.includes("-/-")) ? `\n${line}` : line.replace("-/-", "\n")
  })

  ChatLib.chat(finalText)
}

export const viewChangeLog1_1_2 = () => {
  const antiTip = new Message(
    new TextComponent("&7Fixed Anti Tip not working")
  );

  let stringArray = [
    `${divider}`,
    ChatLib.getCenteredText(`&dKath Addons - &ev1.1.2`) + "\n",
    ChatLib.getCenteredText(antiTip) + "\n",
    `\n${divider}`
  ]

  let finalText = ""
  stringArray.forEach((line) => {
    if (line == "-/*") return
    finalText += (!line.includes("-/-")) ? `\n${line}` : line.replace("-/-", "\n")
  })

  ChatLib.chat(finalText)
}

export const viewChangeLog1_1_1 = () => {
  const limbo = new Message(
    new TextComponent("&7Fixed &e/limbo&r not sending the user to limbo")
  );

  let stringArray = [
    `${divider}`,
    ChatLib.getCenteredText(`&dKath Addons - &ev1.1.1`) + "\n",
    ChatLib.getCenteredText(limbo) + "\n",
    `\n${divider}`
  ]

  let finalText = ""
  stringArray.forEach((line) => {
    if (line == "-/*") return
    finalText += (!line.includes("-/-")) ? `\n${line}` : line.replace("-/-", "\n")
  })

  ChatLib.chat(finalText)
}

export const viewChangeLog1_1_0 = () => {
  const quiver = new Message(
    new TextComponent("&7Made quiver alert also support the notification for 10 arrows")
  );
  const dungeonRestart = new Message(
    new TextComponent("&7Added Auto Dungeon Restart").setHover("show_text", `&n&4Usage of this may resualt in a BAN! Use at your own risk&r\nAutomatically restarts the dungeon after the dungeon ends`)
  );
  const gui = new Message(
    new TextComponent("&7Changed how the GUI is ordered (Will reset the end users config)")
  );
  const antiNon = new Message(
    new TextComponent("&7Added Anti Non").setHover("show_text", `Hidding messages from a player under a set skyblock level (needs skyblock levels in chat on)`)
  );
  const sbe = new Message(
    new TextComponent("&7AAdded Anti SBE").setHover("show_text", `Hidding any message containing [SBE] in it`)
  );
  const antiTip = new Message(
    new TextComponent("&7Added Anti Tip").setHover("show_text", `Sick of the auto tip messages? Just hide them`)
  );
  const coopChat = new Message(
    new TextComponent("&7Added Coop Chat Ping1").setHover("show_text", `Plays the ding sound when someone types in coop chat`)
  );
  const limbo = new Message(
    new TextComponent("&7Added &e/limbo").setHover("show_text", `Sneds the user to limbo`)
  );
  const alertSound = new Message(
    new TextComponent("&7Added Alert Sound").setHover("show_text", `Plays a sound when an alert gets displayed`)
  );
  const quiz = new Message(
    new TextComponent("&7Added quiz failmessage to cyber bully dungeons")
  );


  let stringArray = [
    `${divider}`,
    ChatLib.getCenteredText(`&dKath Addons - &ev1.1.0`) + "\n",
    ChatLib.getCenteredText(quiver) + "\n",
    ChatLib.getCenteredText(dungeonRestart) + "\n",
    ChatLib.getCenteredText(gui) + "\n",
    ChatLib.getCenteredText(antiNon) + "\n",
    ChatLib.getCenteredText(sbe) + "\n",
    ChatLib.getCenteredText(antiTip) + "\n",
    ChatLib.getCenteredText(coopChat) + "\n",
    ChatLib.getCenteredText(limbo) + "\n",
    ChatLib.getCenteredText(alertSound) + "\n",
    ChatLib.getCenteredText(quiz) + "\n",
    `\n${divider}`
  ]

  let finalText = ""
  stringArray.forEach((line) => {
    if (line == "-/*") return
    finalText += (!line.includes("-/-")) ? `\n${line}` : line.replace("-/-", "\n")
  })

  ChatLib.chat(finalText)
}

export const viewChangeLog1_0_0 = () => {

  const bloodReady = new Message(
    new TextComponent("&7Added Blood Ready").setHover("show_text", `Displays a message on your screen when the watcher has spawned all the mobs`)
  );
  const cyberBullyDungeons = new Message(
    new TextComponent("&7Cyber Bully Dungeons").setHover("show_text", `Displays a message on your screen when the watcher has spawned all the mobs`)
  );
  const spiritBow = new Message(
    new TextComponent("&7F4/M4 Spirit Bow ESP").setHover("show_text", `&l&4Usage of this may resualt in a ban! Use at your own risk\nShows a box arround the spirit bow`)
  );
  const spiritBear = new Message(
    new TextComponent("&7M4 Spirit Bear ESP").setHover("show_text", `&l&4Usage of this may resualt in a ban! Use at your own risk&r\n Shows a box arround the spirit bear`)
  );
  const visitorAlert = new Message(
    new TextComponent("&7Visitor Alert").setHover("show_text", `Shows a warning on your screen when a visitor joins your garden`)
  );
  const autoPartyAccept = new Message(
    new TextComponent("&7Auto party accept").setHover("show_text", `Will auto accept any party invite sent to you`)
  );
  const fragBot = new Message(
    new TextComponent("&7Frag bot").setHover("show_text", `Turns your account into a frag bot`)
  );
  const arrowWarning = new Message(
    new TextComponent("&7Arrow Warning").setHover("show_text", `Shows a warning on your screen when you have 50 arrows left`)
  );
  const giftWaypoints = new Message(
    new TextComponent("&7Gift Waypoints").setHover("show_text", `Waypoints to all the possible spawn locations for gifts in the jerrys workshop event`)
  );
  const cyberBully = new Message(
    new TextComponent("&7Cyber Bully").setHover("show_text", `&4&lUsage of this may resualt in a mute! Use at your own risk&r\nWill post peoples death messages in all and party chat`)
  );
  const antiGexp = new Message(
    new TextComponent("&7Anti GEXP").setHover("show_text", `Hides the gexp messages when playing skyblock`)
  );
  const antiJoin = new Message(
    new TextComponent("&7Anti MVP+/++ Join Messages").setHover("show_text", `Hides the MVP+/++ lobby join messages from showing up in your chat`)
  );
  const antiHype = new Message(
    new TextComponent("&7Anti Hype Messages").setHover("show_text", `Hides the max hype messages from showing up in your chat`)
  );
  const antiCombo = new Message(
    new TextComponent("&7Anti Combo").setHover("show_text", `A settings that makes it so u cant be comboed and it will auto combo for u (hides the combo messages from the grandma wolf)`)
  );


  let stringArray = [
    `${divider}`,
    ChatLib.getCenteredText(`&dKath Addons - &ev1.1.0`) + "\n",
    ChatLib.getCenteredText(bloodReady) + "\n",
    ChatLib.getCenteredText(cyberBullyDungeons) + "\n",
    ChatLib.getCenteredText(spiritBow) + "\n",
    ChatLib.getCenteredText(spiritBear) + "\n",
    ChatLib.getCenteredText(visitorAlert) + "\n",
    ChatLib.getCenteredText(autoPartyAccept) + "\n",
    ChatLib.getCenteredText(fragBot) + "\n",
    ChatLib.getCenteredText(arrowWarning) + "\n",
    ChatLib.getCenteredText(giftWaypoints) + "\n",
    ChatLib.getCenteredText(cyberBully) + "\n",
    ChatLib.getCenteredText(antiGexp) + "\n",
    ChatLib.getCenteredText(antiHype) + "\n",
    ChatLib.getCenteredText(antiCombo) + "\n",
    `\n${divider}`
  ]

  let finalText = ""
  stringArray.forEach((line) => {
    if (line == "-/*") return
    finalText += (!line.includes("-/-")) ? `\n${line}` : line.replace("-/-", "\n")
  })

  ChatLib.chat(finalText)
}
