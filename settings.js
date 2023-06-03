import * as helperFunctions from "./helperFunctions.js";
let currentVersion = JSON.parse(FileLib.read("kath", "metadata.json")).version
import { @Vigilant, @TextProperty, @ButtonProperty, @SwitchProperty, @SliderProperty, @SelectorProperty } from 'Vigilance';
@Vigilant('kath', 'kath', {
  getCategoryComparator: () => (a, b) => {
    const categories = ['General', 'Dungeons', 'Gardens', 'Party', 'Chat', 'QOL', 'Misc', 'Extra Info', 'Change Log'];
    return categories.indexOf(a.name) - categories.indexOf(b.name);
  },
  // getSubcategoryComparator: () => (a, b) => {
  //   const subcategorys = ["General", "Funny", "Info", "Other Projects", "Credits", "Change Log"];
  //   return subcategorys.indexOf(a.getValue()[0].attributesExt.subcategory) -
  //     subcategorys.indexOf(b.getValue()[0].attributesExt.subcategory);
  // },
})

class Settings {
  // ! General

  @SwitchProperty({
    name: "Alert Sound",
    description: "Plays a sound when an alert gets displayed",
    category: "General",
    subcategory: "Not General",
  })
  generalAlertSound = false;

  @SwitchProperty({
    name: "Show Change log",
    description: "Shows a message in chat with the change log when the module updates",
    category: "General",
    subcategory: "Not General",
  })
  generalShowChangeLog = false;

  // ! Dungeons

  @SwitchProperty({
    name: "Blood Ready",
    description: "Displays a message on your screen when the watcher has spawned all the mobs",
    category: "Dungeons",
    subcategory: "General",
  })
  dungeonsBloodAlert = false;

  @SwitchProperty({
    name: "Cyber Bully Dungeons",
    description: "&n&4Usage of this may result in a mute! Use at your own risk\n&rWill post peoples fails messages in all and party chat",
    category: "Dungeons",
    subcategory: "General",
  })
  dungeonsCyberBully = false;

  @SwitchProperty({
    name: "Spirit Bow Waypoint",
    description: "Shows a waypoint from where the spirit bow drops",
    category: "Dungeons",
    subcategory: "General",
  })
  dungeonsSpiritBowWaypoint = false;

  // ! Gardens

  @SwitchProperty({
    name: "Visitor Alert",
    description: "Shows a warning on your screen when a visitor joins your garden",
    category: "Gardens",
    subcategory: "General",
  })
  gardenVisitorAlert = false;

  // ! Party

  @SwitchProperty({
    name: "Auto party accept",
    description: "Will auto accept any party invite sent to you",
    category: "Party",
    subcategory: "General",
  })
  partyAccept = false;

  @SwitchProperty({
    name: "Frag bot",
    description: "Turns your account into a frag bot",
    category: "Party",
    subcategory: "General",
  })
  partyFragBot = false;

  // ! Chat

  @SwitchProperty({
    name: "Anti GEXP",
    description: "Hides the gexp messages when playing skyblock",
    category: "Chat",
    subcategory: "General",
  })
  chatAntiGexp = false;

  @SwitchProperty({
    name: "Anti MVP+/++ Join Messages",
    description: "Hides the MVP+/++ lobby join messages from showing up in your chat",
    category: "Chat",
    subcategory: "General",
  })
  chatAntiMVPPlusPlus = false;

  @SwitchProperty({
    name: "Anti Hype Messages",
    description: "Hides the max hype messages from showing up in your chat",
    category: "Chat",
    subcategory: "General",
  })
  chatAntiHypeLimit = false;

  @SwitchProperty({
    name: "Anti Combo",
    description: "A settings that makes it so u cant be comboed and it will auto combo for u (hides the combo messages from the grandma wolf)",
    category: "Chat",
    subcategory: "General",
  })
  chatAntiCombo = false;

  @SliderProperty({
    name: "Anti Non",
    description: "Hidding messages from a player under a set skyblock level (needs skyblock levels in chat on)",
    category: "Chat",
    subcategory: "General",
    min: 0,
    max: 400
  })
  chatAntiNon = 20;

  @SwitchProperty({
    name: "Anti SBE",
    description: "Hidding any message containing [SBE] in it",
    category: "Chat",
    subcategory: "General",
  })
  chatAntiSBE = false;

  @SwitchProperty({
    name: "Coop Chat Ping",
    description: "Plays the ding sound when someone types in coop chat",
    category: "Chat",
    subcategory: "General",
  })
  chatCoopPing = false;

  @SwitchProperty({
    name: "Cyber Bully",
    description: "&n&4Usage of this may result in a mute! Use at your own risk\n&rWill post peoples death messages in all and party chat",
    category: "Chat",
    subcategory: "General",
  })
  chatCyberBully = false;

  @SwitchProperty({
    name: "Anti Tip",
    description: "Hides auto tip msgs",
    category: "Chat",
    subcategory: "General",
  })
  chatAntiTip = false;

  @SwitchProperty({
    name: "Wiki Swapper",
    description: "Swaps out the hypixel wiki with the fandom wiki when using /wiki or /wikithis",
    category: "Chat",
    subcategory: "General",
  })
  chatWikiSwapper = false;

  @SwitchProperty({
    name: "Anti Mystery Box",
    description: "Hides messages about the stupid mystery box",
    category: "Chat",
    subcategory: "General",
  })
  chatAntiMysteryBox = false;

  @SwitchProperty({
    name: "Anti Profile ID",
    description: "Hides the profile id messages",
    category: "Chat",
    subcategory: "General",
  })
  chatAntiProfile = false;

  // ! QOL

  @SwitchProperty({
    name: "Server Joiner",
    description: "Automatically joins a server when you open minecraft",
    category: "QOL",
    subcategory: "General",
  })
  qolServerJoiner = false;

  @TextProperty({
    name: 'Server IP',
    description: 'Server IP to join when opening minecraft',
    category: 'QOL',
    subcategory: 'General',
    placeholder: 'play.hypixel.net',
  })
  qolServerIP = 'play.hypixel.net';

  @SwitchProperty({
    name: "Skyblock Joiner",
    description: "Automatically joins skyblock when u join hypixel (needs guild motd to work)",
    category: "QOL",
    subcategory: "General",
  })
  qolSkyblockJoiner = false;

  // ! Misc

  @SwitchProperty({
    name: "Arrow Warning",
    description: "Shows a warning on your screen when you have 50 or 10 arrows left",
    category: "Misc",
    subcategory: "General",
  })
  miscArrowWarning = false;

  @SwitchProperty({
    name: "Gift Waypoints",
    description: "Waypoints to all the possible spawn locations for gifts in the jerry's workshop event",
    category: "Misc",
    subcategory: "General",
  })
  miscGiftWaypoints = false;

  @SwitchProperty({
    name: "Leave on throw",
    description: "Will auto post a message about how you are throwing into party chat then will leave the party",
    category: "Misc",
    subcategory: "Funny"
  })
  miscLeaveOnThrow = true;

  @SwitchProperty({
    name: "Ban on throw",
    description: "Will give a fake ban when you die",
    category: "Misc",
    subcategory: "Funny"
  })
  miscBanOnThrow = true;

  @SelectorProperty({
    name: "Ban Length",
    description: "How long do you want the ban to be",
    category: "Misc",
    subcategory: "Funny",
    options: ['7d', '14d', '30d', '90d', '180d', '360d', 'Perm'],
  })
  miscBanLength = 3;

  @SelectorProperty({
    name: "Ban Type",
    description: "What ban reason do you want",
    category: "Misc",
    subcategory: "Funny",
    options: ['Cheating', 'Boosting', 'Chat Infraction', 'Username'],
  })
  miscBanType = 1;

  // ! Extra Info

  @ButtonProperty({
    name: "&6&lVersion",
    description: `Current Module Version ${currentVersion}`,
    category: "Extra Info",
    subcategory: "Info",
    placeholder: " "
  })
  creditsVersion() { };

  @ButtonProperty({
    name: "&b&lDeveloper",
    description: "Made by Udderly_cool or Kathund#2004 - Dm me on discord if you have any issues or suggestions",
    category: "Extra Info",
    subcategory: "Info",
    placeholder: " "
  })
  infoDev() { };

  @ButtonProperty({
    name: "&b&lZickles",
    description: "Dumb ass who made a pr (Made ban on throw)",
    category: "Extra Info",
    subcategory: "Info",
    placeholder: " "
  })
  infoZickles() { };

  @ButtonProperty({
    name: "Auto Welcome Back",
    description: "A Simple Chat triggers module that allows you to welcome guild members back when they join and is highly customizable",
    category: "Extra Info",
    subcategory: "Other Projects",
    placeholder: "import"
  })
  otherProjectsAutoWelcomeBack() {
    ChatLib.command(`ct import AutoWelcomeBack`);
  };

  // ? Change Logs

  @ButtonProperty({
    name: "v1.4.0",
    description: "View the change log for v1.4.0",
    category: "Change Log",
    subcategory: "Change Log",
    placeholder: "Show In Chat",
  })
  changeLog1_4_0() {
    helperFunctions.viewChangeLog1_4_0();
  };

  @ButtonProperty({
    name: "v1.3.1",
    description: "View the change log for v1.3.1",
    category: "Change Log",
    subcategory: "Change Log",
    placeholder: "Show In Chat",
  })
  changeLog1_3_1() {
    helperFunctions.viewChangeLog1_3_1();
  };

  @ButtonProperty({
    name: "v1.3.0",
    description: "View the change log for v1.3.0",
    category: "Change Log",
    subcategory: "Change Log",
    placeholder: "Show In Chat",
  })
  changeLog1_3_0() {
    helperFunctions.viewChangeLog1_3_0();
  };

  @ButtonProperty({
    name: "v1.2.0",
    description: "View the change log for v1.2.0",
    category: "Change Log",
    subcategory: "Change Log",
    placeholder: "Show In Chat",
  })
  changeLog1_2_0() {
    helperFunctions.viewChangeLog1_2_0();
  };

  @ButtonProperty({
    name: "v1.1.2",
    description: "View the change log for v1.1.2",
    category: "Change Log",
    subcategory: "Change Log",
    placeholder: "Show In Chat",
  })
  changeLog1_1_2() {
    helperFunctions.viewChangeLog1_1_2();
  };

  @ButtonProperty({
    name: "v1.1.1",
    description: "View the change log for v1.1.1",
    category: "Change Log",
    subcategory: "Change Log",
    placeholder: "Show In Chat",
  })
  changeLog1_1_1() {
    helperFunctions.viewChangeLog1_1_1();
  };

  @ButtonProperty({
    name: "v1.1.0",
    description: "View the change log for v1.1.0",
    category: "Change Log",
    subcategory: "Change Log",
    placeholder: "Show In Chat",
  })
  changeLog1_1_0() {
    helperFunctions.viewChangeLog1_1_0();
  };

  @ButtonProperty({
    name: "v1.0.0",
    description: "View the change log for v1.0.0",
    category: "Change Log",
    subcategory: "Change Log",
    placeholder: "Show In Chat",
  })
  changeLog1_0_0() {
    helperFunctions.viewChangeLog1_0_0();
  };

  constructor() {
    this.initialize(this);
  }
}

export default new Settings;
