let currentVersion = JSON.parse(FileLib.read("kathAddons", "metadata.json")).version
import { @Vigilant, @ButtonProperty, @SwitchProperty } from 'Vigilance';
@Vigilant('KathAddons', 'Kath Addons', {
    getCategoryComparator: () => (a, b) => {
        const categories = ['Settings', 'Extra Info'];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    },
    getSubcategoryComparator: () => (a, b) => {
        const subcategories = ["Dungeons", "Gardens", "Party", "Misc", "Info", "Other Projects", "Credits"];
        return subcategories.indexOf(a.getValue()[0].attributesExt.subcategory) -
            subcategories.indexOf(b.getValue()[0].attributesExt.subcategory);
    },
})

class Settings {
    @SwitchProperty({
        name: "Blood Ready",
        description: "Displays a message on your screen when the watcher has spawned all the mobs",
        category: "Settings",
        subcategory: "Dungeons",
    })
    dungeonsBloodAlert = false;

    @SwitchProperty({
        name: "Cyber Bully Dungeons",
        description: "&n&4Usage of this may resualt in a mute! Use at your own risk\n&rWill post peoples fails messages in all and party chat",
        category: "Settings",
        subcategory: "Dungeons",
    })
    dungeonsCyberBully = false;

    @SwitchProperty({
        name: "Auto Dungeon Restart",
        description: "&n&4Usage of this may resualt in a ban! Use at your own risk\n&rAutomatically restarts the dungeon after the dungeon ends",
        category: "Settings",
        subcategory: "Dungeons",
    })
    dungeonsAutoRestart = false;

    @SliderProperty({
        name: "Auto Dungeon delay",
        description: "Change how long the delay is (in milliseconds - 1000ms = 1 second)",
        category: "Settings",
        subcategory: "Dungeons",
        min: 1000,
        max: 3000
    })
    dungeonsAutoRestartDelay = 12000;

    @SwitchProperty({
        name: "F4/M4 Spirit Bow ESP",
        description: "&n&4Usage of this may resualt in a ban! Use at your own risk\n&rShows a box arround the spirit bow",
        category: "Settings",
        subcategory: "Dungeons",
    })
    dungeonsSpiritBowESP = false;

    @SwitchProperty({
        name: "F4/M4 Spirit Bear ESP",
        description: "&n&4Usage of this may resualt in a ban! Use at your own risk\n&rShows a box arround the spirit bear",
        category: "Settings",
        subcategory: "Dungeons",
    })
    dungeonsSpiritBearESP = false;

    @SwitchProperty({
        name: "Visitor Alert",
        description: "Shows a warning on your screen when a visitor joins your garden",
        category: "Settings",
        subcategory: "Gardens",
    })
    gardenVisitorAlert = false;

    @SwitchProperty({
        name: "Auto party accept",
        description: "Will auto accept any party invite sent to you",
        category: "Settings",
        subcategory: "Party",
    })
    partyAccept = false;

    @SwitchProperty({
        name: "Frag bot",
        description: "Turns your account into a frag bot",
        category: "Settings",
        subcategory: "Party",
    })
    partyFragBot = false;

    @SwitchProperty({
        name: "Arrow Warning",
        description: "Shows a warning on your screen when you have 50 or 10 arrows left",
        category: "Settings",
        subcategory: "Misc",
    })
    miscArrowWarning = false;

    @SwitchProperty({
        name: "Gift Waypoints",
        description: "Waypoints to all the possible spawn locations for gifts in the jerrys workshop event",
        category: "Settings",
        subcategory: "Misc",
    })
    miscGiftWaypoints = false;

    @SwitchProperty({
        name: "Cyber Bully",
        description: "&n&4Usage of this may resualt in a mute! Use at your own risk\n&rWill post peoples death messages in all and party chat",
        category: "Settings",
        subcategory: "Misc",
    })
    miscCyberBully = false;

    @SwitchProperty({
        name: "Anti GEXP",
        description: "Hides the gexp messages when playing skyblock",
        category: "Settings",
        subcategory: "Misc",
    })
    miscAntiGexp = false;

    @SwitchProperty({
        name: "Anti MVP+/++ Join Messages",
        description: "Hides the MVP+/++ lobby join messages from showing up in your chat",
        category: "Settings",
        subcategory: "Misc",
    })
    miscAntiMVPPlusPlus = false;

    @SwitchProperty({
        name: "Anti Hype Messages",
        description: "Hides the max hype messages from showing up in your chat",
        category: "Settings",
        subcategory: "Misc",
    })
    miscAntiHypeLimit = false;

    @SwitchProperty({
        name: "Anti Combo",
        description: "A settings that makes it so u cant be comboed and it will auto combo for u (hides the combo messages from the grandma wolf)",
        category: "Settings",
        subcategory: "Misc",
    })
    miscAntiCombo = false;

    @SliderProperty({
        name: "Anti Non",
        description: "Hidding messages from a player under a set skyblock level (needs skyblock levels in chat on)",
        category: "Settings",
        subcategory: "Misc",
        min: 0,
        max: 398
    })
    miscAntiNon = 20;

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
        ChatLib.command(`ct improt AutoWelcomeBack`);
    };

    constructor() {
        this.initialize(this);
    }
}

export default new Settings;
