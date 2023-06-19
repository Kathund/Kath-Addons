import * as helperFunction from "../helperFunctions.js";
import Settings from "../settings";
const config = Settings;

// ! GUI
register("command", () => config.openGUI()).setName("kath");
register("command", () => console.log(config.generalShowChangeLog)).setName(
  "checkversion"
);
register("command", () => (config.generalShowChangeLog = true)).setName(
  "settest"
);
register("command", () => config.save()).setName("saveconfig");

register("worldLoad", () => {
  try {
    console.log("updating ")
    helperFunction.config.generalAlertSound = config.generalAlertSound;
    helperFunction.config.generalShowChangeLog = config.generalShowChangeLog;
    helperFunction.config.dungeonsBloodAlert = config.dungeonsBloodAlert;
    helperFunction.config.dungeonsCyberBully = config.dungeonsCyberBully;
    helperFunction.config.emojisToggle = config.emojisToggle;
    helperFunction.config.gardenVisitorAlert = config.gardenVisitorAlert;
    helperFunction.config.partyAccept = config.partyAccept;
    helperFunction.config.partyFragBot = config.partyFragBot;
    helperFunction.config.chatAntiGexp = config.chatAntiGexp;
    helperFunction.config.chatAntiMVPPlusPlus = config.chatAntiMVPPlusPlus;
    helperFunction.config.chatAntiHypeLimit = config.chatAntiHypeLimit;
    helperFunction.config.chatAntiCombo = config.chatAntiCombo;
    helperFunction.config.chatAntiNon = config.chatAntiNon;
    helperFunction.config.chatAntiSBE = config.chatAntiSBE;
    helperFunction.config.chatCoopPing = config.chatCoopPing;
    helperFunction.config.chatCyberBully = config.chatCyberBully;
    helperFunction.config.chatAntiTip = config.chatAntiTip;
    helperFunction.config.chatWikiSwapper = config.chatWikiSwapper;
    helperFunction.config.chatAntiMysteryBox = config.chatAntiMysteryBox;
    helperFunction.config.chatAntiProfile = config.chatAntiProfile;
    helperFunction.config.qolServerJoiner = config.qolServerJoiner;
    helperFunction.config.qolServerIP = config.qolServerIP;
    helperFunction.config.qolSkyblockJoiner = config.qolSkyblockJoiner;
    helperFunction.config.miscArrowWarning = config.miscArrowWarning;
    helperFunction.config.miscGiftWaypoints = config.miscGiftWaypoints;
    helperFunction.config.miscLeaveOnThrow = config.miscLeaveOnThrow;
    helperFunction.config.miscBanOnThrow = config.miscBanOnThrow;
    helperFunction.config.miscCrashOnThrow = config.miscCrashOnThrow;
    helperFunction.config.miscBanLength = config.miscBanLength;
    helperFunction.config.miscBanType = config.miscBanType;
    helperFunction.config.save();
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
});

register("gameUnload", () => {
  try {
    helperFunction.config.generalAlertSound = config.generalAlertSound;
    helperFunction.config.generalShowChangeLog = config.generalShowChangeLog;
    helperFunction.config.dungeonsBloodAlert = config.dungeonsBloodAlert;
    helperFunction.config.dungeonsCyberBully = config.dungeonsCyberBully;
    helperFunction.config.emojisToggle = config.emojisToggle;
    helperFunction.config.gardenVisitorAlert = config.gardenVisitorAlert;
    helperFunction.config.partyAccept = config.partyAccept;
    helperFunction.config.partyFragBot = config.partyFragBot;
    helperFunction.config.chatAntiGexp = config.chatAntiGexp;
    helperFunction.config.chatAntiMVPPlusPlus = config.chatAntiMVPPlusPlus;
    helperFunction.config.chatAntiHypeLimit = config.chatAntiHypeLimit;
    helperFunction.config.chatAntiCombo = config.chatAntiCombo;
    helperFunction.config.chatAntiNon = config.chatAntiNon;
    helperFunction.config.chatAntiSBE = config.chatAntiSBE;
    helperFunction.config.chatCoopPing = config.chatCoopPing;
    helperFunction.config.chatCyberBully = config.chatCyberBully;
    helperFunction.config.chatAntiTip = config.chatAntiTip;
    helperFunction.config.chatWikiSwapper = config.chatWikiSwapper;
    helperFunction.config.chatAntiMysteryBox = config.chatAntiMysteryBox;
    helperFunction.config.chatAntiProfile = config.chatAntiProfile;
    helperFunction.config.qolServerJoiner = config.qolServerJoiner;
    helperFunction.config.qolServerIP = config.qolServerIP;
    helperFunction.config.qolSkyblockJoiner = config.qolSkyblockJoiner;
    helperFunction.config.miscArrowWarning = config.miscArrowWarning;
    helperFunction.config.miscGiftWaypoints = config.miscGiftWaypoints;
    helperFunction.config.miscLeaveOnThrow = config.miscLeaveOnThrow;
    helperFunction.config.miscBanOnThrow = config.miscBanOnThrow;
    helperFunction.config.miscCrashOnThrow = config.miscCrashOnThrow;
    helperFunction.config.miscBanLength = config.miscBanLength;
    helperFunction.config.miscBanType = config.miscBanType;
    helperFunction.config.save();
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
});

// Save config on game unload
register("gameUnload", () => helperFunction.config.save());

// ! Limbo
register("command", () => ChatLib.say("§")).setName("limbo");

// ! Fast Transfer
register("command", (...args) => {
  try {
    if (args.length === 0) {
      throw new Error("You cannot transfer to no one");
    } else if (args[0] === Player.getName()) {
      throw new Error("You cannot transfer to yourself");
    } else {
      ChatLib.chat(`/p transfer ${args[0]}`);
    }
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}).setName("pt");

// ! Wiki Search
register("command", (...args) => {
  try {
    let url = "";

    if (config.chatWikiSwapper == true) {
      url = `https://hypixel-skyblock.fandom.com/wiki/Special:Search?query=${args.join(
        "+"
      )}`;
    } else if (config.chatWikiSwapper == false) {
      url = `https://wiki.hypixel.net/index.php?search=${args.join("+")}`;
    }

    const wikiMessage = new Message(
      new TextComponent(
        `Searched for ${args.join(" ")} using ${
          config.chatWikiSwapper ? "Fandom Wiki" : "Official Wiki"
        }`
      )
        .setClick("open_url", url)
        .setHover("show_text", url)
    );
    ChatLib.chat(wikiMessage);
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}).setName("wikisearch");

// ! Discord commands
// ? off
register("command", () => {
  try {
    helperFunction.data.discordWarningMessage = false;
    helperFunction.data.save();
    ChatLib.chat(`&dkath &6>&7 Turned&l&c off&r&7 discord warning message`);
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 7c${error}`);
  }
}).setName("discordwarningoff");

// ? on
register("command", () => {
  try {
    helperFunction.data.discordWarningMessage = true;
    helperFunction.data.save();
    ChatLib.chat(`&dkath &6>&7 Turned&l&a on&r&7 the discord warning message`);
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 7c${error}`);
  }
}).setName("discordwarningon");

// ! limbo command hider
register("chat", (e) => cancel(e)).setCriteria(/^Illegal characters in chat$/);

// ! EMOJIS
register("command", () => {
  try {
    ChatLib.chat(helperFunction.divider);
    ChatLib.chat("");
    ChatLib.chat(
      `&dkath &6> &cWARNING &6- &7Anyone that already has emojis turned on will have an issue with this example. &r&7To fix this, turn off emojis in the kath settings and then run the command again.`
    );
    ChatLib.chat("");
    ChatLib.chat("&dkath &6>&7 INTRODUCING emojis in minecraft!");
    ChatLib.chat(
      "&dkath &6>&7 These emojis work by converting :skull: to 婓 client side"
    );
    ChatLib.chat(
      "&dkath &6>&7 Then by using the custom texture pack it will convert 婓 into a skull emoji"
    );
    ChatLib.chat(
      "&dkath &6>&7 The texture pack is made to be fully customizable so this means you can change what the emojis look like"
    );
    ChatLib.chat(
      "&dkath &6>&7 The texture pack download can be found in the gui &6- &7/kath &6-> &7emojis &6-> &7Texture Pack Download"
    );
    ChatLib.chat("");
    ChatLib.chat(helperFunction.divider);
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 7c${error}`);
  }
}).setName("emojiinfo");
