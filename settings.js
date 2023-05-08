let currentVersion = JSON.parse(FileLib.read("kathAddons", "metadata.json")).version
import { @Vigilant, @ButtonProperty, @SwitchProperty, @SliderProperty } from 'Vigilance';
@Vigilant('KathAddons', 'Kath Addons', {
  getCategoryComparator: () => (a, b) => {
    const categories = ['General', 'Dungeons', 'Gardens', 'Party', 'Chat', 'Misc', 'Extra Info'];
    return categories.indexOf(a.name) - categories.indexOf(b.name);
  },
  getSubcategoryComparator: () => (a, b) => {
    const subcategories = ["General", "Info", "Other Projects", "Credits"];
    return subcategories.indexOf(a.getValue()[0].attributesExt.subcategory) -
      subcategories.indexOf(b.getValue()[0].attributesExt.subcategory);
  },
})

class Settings {
  // ! General

  @SwitchProperty({
    name: "Alert Sound",
    description: "Plays a sound when an alert gets displayed",
    category: "General",
    subcategory: "i dont know",
  })
  generalAlertSound = false;

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
    description: "&n&4Usage of this may resualt in a mute! Use at your own risk\n&rWill post peoples fails messages in all and party chat",
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
    description: "&n&4Usage of this may resualt in a mute! Use at your own risk\n&rWill post peoples death messages in all and party chat",
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
    description: "&n&4Wiki Swapper May not always work due to the fandom having different page urls then hypixel wiki sometimes\n&rSwaps out the hypixel wiki with the fandom wiki when using /wiki or /wikithis",
    category: "Chat",
    subcategory: "General",
  })
  chatWikiSwapper = false;

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
    description: "Waypoints to all the possible spawn locations for gifts in the jerrys workshop event",
    category: "Misc",
    subcategory: "General",
  })
  miscGiftWaypoints = false;

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
    name: "Auto Welcome Back",
    description: "A Simple Chat triggers module that alows you to welcome guild members back when they join and is highly customizable",
    category: "Extra Info",
    subcategory: "Other Projects",
    placeholder: "import"
  })
  otherProjectsAutoWelcomeBack() {
    ChatLib.command(`ct import AutoWelcomeBack`);
  };

  constructor() {
    this.initialize(this);
  }
}

export default new Settings;
