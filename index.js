import * as helperFunction from "./helperFunctions.js";
import renderBeaconBeam from "../BeaconBeam";
import RenderLib from "../RenderLib";
import Settings from "./settings";
const config = Settings
const Waypoints = [[-24, 76, 97], [-1, 79, 113], [-13, 78, 105], [-1, 76, 81], [27, 76, 51], [26, 86, 43], [-15, 76, 11], [-18, 93, 20], [-17, 87, 49], [-18, 79, 33], [10, 76, 70], [17, 77, 90], [-22, 77, 56], [-40, 76, 80], [-26, 78, 42], [21, 77, 34], [4, 82, 100], [23, 87, 27], [-25, 76, 69], [19, 86, 71]];

register("command", () => config.openGUI()).setName("kath");
register("command", () => ChatLib.command('/ac §')).setName("limbo");

register("chat", function (event) {
  const message = (ChatLib.getChatMessage(event)).toString()
  if (message.includes('Illegal characters in chat')) {
    cancel(event)
  }
})

register("chat", function (event) {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (message.startsWith("-----------------------------------------------------") && message.includes('has invited you to join their party!')) {
    if (!config.partyAccept) return;
    const pattern = /(?:\[(\w+)\]\s+)?(\w+)\s+has invited you to join their party!/;
    const match = message.match(pattern);
    if (!match) return;
    const username = match[2];
    ChatLib.command(`p accept ${username}`);
  }
})

register("chat", function (event) {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (message.startsWith("-----------------------------------------------------") && message.includes('has invited you to join their party!')) {
    if (!config.partyFragBot) return;
    const pattern = /(?:\[(\w+)\]\s+)?(\w+)\s+has invited you to join their party!/;
    const match = message.match(pattern);
    if (!match) return;
    const username = match[2];
    ChatLib.command(`p accept ${username}`);
    setTimeout(function () {
      ChatLib.command(`p leave`);
    }, 5000);
  }
});

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (message.includes("[BOSS] The Watcher: That will be enough for now.")) {
    if (!config.dungeonsBloodAlert) return;
    Client.showTitle("&cBlood Ready!", "", 1, 30, 1)
    if (!config.generalAlertSound) return;
    World.playSound("random.orb", 2, 1);
  }
})

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (message.includes("You only have 50") && message.includes("left in your Quiver!") || message.includes("You only have 10") && message.includes("left in your Quiver!")) {
    if (!config.miscArrowWarning) return;
    Client.showTitle("&cLow Arrows!", "", 1, 30, 1);
    if (!config.generalAlertSound) return;
    World.playSound("random.orb", 2, 1);
  }
})

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (message.includes("has arrived on your Garden!")) {
    if (!config.gardenVisitorAlert) return;
    const words = message.split(' ');
    const name = words.slice(0, words.indexOf('has')).join(' ');
    Client.showTitle(`&b&l${name} &r&fhas arrived on your Garden!`, "", 1, 30, 1);
    if (!config.generalAlertSound) return;
    World.playSound("random.orb", 2, 1);
  }
})

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (!config.chatCyberBully) return;
  if (message.startsWith(" ☠") && message.includes("was killed by")) {
    ChatLib.command(`pc ${message}`);
    ChatLib.command(`ac ${message}`);
  }
})

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (!config.dungeonsCyberBully) return;
  if (message.startsWith("PUZZLE FAIL!") && message.includes("Yikes!") || message.includes("[STATUE] Oruo the Omniscient") && message.includes("chose the wrong answer!")) {
    ChatLib.command(`pc ${message}`);
    ChatLib.command(`ac ${message}`);
  }
})

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (!config.chatAntiGexp) return;
  if (message.startsWith("You earned") && message.includes("from playing SkyBlock!")) {
    cancel(event)
  }
})

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (!config.chatAntiMVPPlusPlus) return;
  if (message.includes("joined the lobby!")) {
    cancel(event)
  }
})

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (!config.chatAntiHypeLimit) return;
  if (message.includes("You have reached your Hype limit! Add Hype to Prototype Lobby minigames by right-clicking with the Hype Diamond!")) {
    cancel(event)
  }
})

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (!config.chatAntiCombo) return;
  if (message.includes("Kill Combo")) {
    cancel(event)
  }
})

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (!config.chatAntiSBE) return;
  if (message.includes("[SBE]")) {
    cancel(event)
  }
})

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (!config.chatAntiTip) return;
  if (!message.includes("tipped")) return;
  cancel(event)
})

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (config.chatAntiNon === 0) return;
  if (message.includes("[") && message.includes("]")) {
    var pattern = /\[(\d+)\]/;
    var match = message.match(pattern)
    if (!match) return;
    if (config.chatAntiNon <= parseInt(match[1])) return;
    cancel(event)
  }
})

register("chat", () => {
  if (!config.chatCoopPing) return;
  World.playSound("random.orb", 2, 1);
}).setCriteria("&r&bCo-op > ${*}");

register("renderWorld", () => {
  if (!config.miscGiftWaypoints) return;
  let scoreboardInfoData = (Scoreboard.getLines()).join()
  if (!scoreboardInfoData.includes("Jerry's Workshop")) return;
  Waypoints.forEach(waypoint => {
    renderBeaconBeam(waypoint[0], waypoint[1], waypoint[2], 0, 153, 153, 1, false)
  });
})

let bows = [];

register("renderWorld", () => {
  bows.forEach(bow => {
    if (config.dungeonsSpiritBowESP && bow.getName().includes("Spirit Bow")) {
      RenderLib.drawEspBox(bow.getRenderX(), bow.getRenderY(), bow.getRenderZ(), 1, 1.5, 0, 255, 187, 1, true)
    } else if (config.spiritBearEsp && bow.getName().includes("Spirit Bear")) {
      RenderLib.drawEspBox(bow.getRenderX(), bow.getRenderY(), bow.getRenderZ(), 1, 1.5, 0, 255, 187, 1, true)
    }
  })
})

register("step", () => {
  if (!config.dungeonsSpiritBearESP && !config.dungeonsSpiritBowESP) return;
  new Thread(() => bows = World.getAllEntities().filter(e => e.getName().includes("Spirit"))).start();
}).setFps(2)

register('chat', (event) => {
  var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
  if (!config.dungeonsAutoRestart) return;
  if (message.includes("Catacombs Experience")) {
    new Thread(() => {
      Thread.sleep(config.dungeonsAutoRestartDelay)
      let scoreboardInfoData = Scoreboard.getLines()
      let scoreboardInfo = scoreboardInfoData.join()
      if (scoreboardInfo.includes("(F1)")) ChatLib.command(`joindungeon catacombs 1`)
      if (scoreboardInfo.includes("(F2)")) ChatLib.command(`joindungeon catacombs 2`)
      if (scoreboardInfo.includes("(F3)")) ChatLib.command(`joindungeon catacombs 3`)
      if (scoreboardInfo.includes("(F4)")) ChatLib.command(`joindungeon catacombs 4`)
      if (scoreboardInfo.includes("(F5)")) ChatLib.command(`joindungeon catacombs 5`)
      if (scoreboardInfo.includes("(F6)")) ChatLib.command(`joindungeon catacombs 6`)
      if (scoreboardInfo.includes("(F7)")) ChatLib.command(`joindungeon catacombs 7`)
      if (scoreboardInfo.includes("(M1)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 1`)
      if (scoreboardInfo.includes("(M2)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 2`)
      if (scoreboardInfo.includes("(M3)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 3`)
      if (scoreboardInfo.includes("(M4)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 4`)
      if (scoreboardInfo.includes("(M5)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 5`)
      if (scoreboardInfo.includes("(M6)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 6`)
      if (scoreboardInfo.includes("(M7)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 7`)
    }).start()
  }
})