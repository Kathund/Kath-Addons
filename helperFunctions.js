import PogObject from "../PogData/index"
import Settings from "./settings";
import axios from "../axios";
const config = Settings


export const removeColors = function (text) {
  const cleanText = text.replace(/§./g, "");
  return cleanText;
}

export const divider = "&a&m            &d&m            &e&m            &a&m            &d&m            &e&m            &a&m           &d&m           &e&m           &8";

export const data = new PogObject("kath", {
  "firstTimeMsg": false,
  "updateMessage1_4_0": false,
  "discordWarningMessage": true,
  "fakeBanned": false,
  "banID": "",
  "banTimestamp": 0
}, "data/data.json")
data.autosave(2)

export const ShowFirstLoginMessage = () => {
  try {
    data.firstTimeMsg = true;
    data.save();
    let stringArray = [
      `${divider}`,
      ChatLib.getCenteredText(`&dkath &7- &e${JSON.parse(FileLib.read("kath", "metadata.json")).version} `) + "\n",
      ChatLib.getCenteredText(`&7Looks like this is your first using &dKath&7!`) + "\n",
      ChatLib.getCenteredText(`&7GUI command is &e/kath`) + "\n",
      ChatLib.getCenteredText(`&7Other commands`),
      ChatLib.getCenteredText(`&7< > = Required arguments, [ ] = Optional arguments`),
      ChatLib.getCenteredText(`&d/limbo &e- &7Sends to Limbo`),
      ChatLib.getCenteredText(`&d/wikisearch <search> &e- &7Searches the wiki for what you entered`),
      ChatLib.getCenteredText(`&d/pt <username> &e- &7Will transfer the party to the given username`),
      `\n${divider}`
    ]
    let finalText = ""
    stringArray.forEach((line) => {
      if (line == "-/*") return
      finalText += (!line.includes("-/-")) ? `\n${line}` : line.replace("-/-", "\n")
    })
    ChatLib.chat(finalText)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}


export const viewChangeLog1_4_0 = () => {
  try {
    const wikiSearch = new Message(
      new TextComponent("&7Added &e/wikisearch <search> &8(hover)").setHover("show_text", `Searches the wiki for the given information`)
    );
    const fastParty = new Message(
      new TextComponent("&7Added &e/pt <username> &8(hover)").setHover("show_text", `Will transfer the party to the given username`)
    );
    const errorCatching = new Message(
      new TextComponent("&7Added more error catching")
    );
    const throwing = new Message(
      new TextComponent("&7Leave on throw &8(hover)").setHover("show_text", 'Will auto post a message about how you are throwing into party chat then will leave the party')
    );
    const throwingBan = new Message(
      new TextComponent("&7Auto Ban on throw &8(hover)").setHover("show_text", 'Will display a fake ban message when throwing')
    );
    const antiProfileID = new Message(
      new TextComponent("&7Anti Profile id &8(hover)").setHover("show_text", 'Hides the profile id messages')
    );

    ChatLib.chat(divider)
    ChatLib.chat(`&dKath - &ev1.4.0`)
    ChatLib.chat(wikiSearch)
    ChatLib.chat(fastParty)
    ChatLib.chat(errorCatching)
    ChatLib.chat(throwing)
    ChatLib.chat(throwingBan)
    ChatLib.chat(antiProfileID)
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}

export const viewChangeLog1_3_1 = () => {
  try {
    const antiMysteryBox = new Message(
      new TextComponent("&7Fixed anti mystery box")
    );
    const firstInstall = new Message(
      new TextComponent("&7Fixed first install message")
    );
    const skyblockJoiner = new Message(
      new TextComponent("&7Fixed Skyblock joiner not working")
    );

    ChatLib.chat(divider)
    ChatLib.chat(`&dKath - &ev1.3.1`)
    ChatLib.chat(antiMysteryBox)
    ChatLib.chat(firstInstall)
    ChatLib.chat(skyblockJoiner)
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}

export const viewChangeLog1_3_0 = () => {
  try {
    const discordWarning = new Message(
      new TextComponent("&7Discord Warning &8(hover)").setHover("show_text", `Shows a warning about scams rats and other stuff like that when someone posts a discord invite link`)
    );
    const spelling = new Message(
      new TextComponent("&7Changed spelling in most files")
    );
    const wikiSwapper = new Message(
      new TextComponent("&7Fixed WikiSwapper so its less likely to fail")
    );
    const antiMysteryBox = new Message(
      new TextComponent("&7Added Anti Mystery Box &8(hover)").setHover("show_text", `Hides messages about the stupid mystery box`)
    );
    const serverJoiner = new Message(
      new TextComponent("&7Server Joiner &8(hover)").setHover("show_text", `Automatically joins a server when you open minecraft`)
    );
    const skyblockJoiner = new Message(
      new TextComponent("&7Skyblock Joiner &8(hover)").setHover("show_text", `Automatically joins skyblock when u join hypixel (needs guild motd to work)`)
    );

    ChatLib.chat(divider)
    ChatLib.chat(`&dKath - &ev1.3.0`)
    ChatLib.chat(discordWarning)
    ChatLib.chat(spelling)
    ChatLib.chat(wikiSwapper)
    ChatLib.chat(antiMysteryBox)
    ChatLib.chat(serverJoiner)
    ChatLib.chat(skyblockJoiner)
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}

export const viewChangeLog1_2_0 = () => {
  try {
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
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}

export const viewChangeLog1_1_2 = () => {
  try {
    const antiTip = new Message(
      new TextComponent("&7Fixed Anti Tip not working")
    );

    ChatLib.chat(divider)
    ChatLib.chat(`&dKath - &ev1.1.2`)
    ChatLib.chat(antiTip)
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}

export const viewChangeLog1_1_1 = () => {
  try {
    const limbo = new Message(
      new TextComponent("&7Fixed &e/limbo&r&7 not sending the user to limbo")
    );

    ChatLib.chat(divider)
    ChatLib.chat(`&dKath - &ev1.1.1`)
    ChatLib.chat(limbo)
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}

export const viewChangeLog1_1_0 = () => {
  try {
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
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}

export const viewChangeLog1_0_0 = () => {
  try {

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
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}

export const getWikiUrl = (item) => axios.get(`https://raw.githubusercontent.com/NotEnoughUpdates/NotEnoughUpdates-REPO/master/items/${item.toUpperCase()}.json`).then(data => data.data.info[0]).catch(e => { console.log(e) })

export const genID = () => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789012345678901234567890123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const removeRank = (username) => {
  return username.replace(/\[[\w+\+-]+] /, "")
}

export const calculateRemainingTime = (startingTimestamp) => {
  try {
    let length;
    if (config.miscBanLength === 0) { length = 7 * 24 * 60 * 60 }
    else if (config.miscBanLength === 1) { length = 14 * 24 * 60 * 60 }
    else if (config.miscBanLength === 2) { length = 30 * 24 * 60 * 60 }
    else if (config.miscBanLength === 3) { length = 90 * 24 * 60 * 60 }
    else if (config.miscBanLength === 4) { length = 180 * 24 * 60 * 60 }
    else if (config.miscBanLength === 5) { length = 360 * 24 * 60 * 60 }
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const elapsedTime = currentTimestamp - startingTimestamp;
    const remainingTime = length - elapsedTime;
    const days = Math.floor(remainingTime / (24 * 60 * 60));
    const hours = Math.floor((remainingTime / (60 * 60)) % 24);
    const minutes = Math.floor((remainingTime / 60) % 60);
    const seconds = remainingTime % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}
