import renderBeaconBeam from "../BeaconBeam"
import RenderLib from "../RenderLib"
import Settings from "./settings";
const config = Settings
const Waypoints = [[7, 87, 85], [41, 79, 81], [76, 76, 55], [91, 76, 38], [78, 77, 40], [82, 78, 26], [61, 78, 92], [94, 77, 42], [63, 76, 95], [103, 74, 98], [50, 80, 88], [35, 80, 71], [45, 79, 70], [79, 80, 73], [50, 76, 52], [95, 76, 58], [98, 78, 75], [55, 79, 34], [64, 78, 28], [58, 79, 89], [90, 77, 46], [60, 76, 51], [45, 79, 49], [89, 77, 84], [92, 74, 108], [75, 82, 20], [47, 77, 65], [97, 80, 77], [42, 77, 58], [51, 76, 52], [55, 80, 38], [63, 76, 52], [52, 75, 45], [73, 79, 52], [66, 81, 28], [78, 74, 99], [104, 78, 68], [39, 80, 73], [43, 79, 73], [36, 80, 80], [95, 76, 59], [97, 75, 70], [97, 81, 77], [46, 80, 84], [32, 80, 74], [43, 77, 50], [50, 79, 34], [90, 77, 38], [98, 77, 76], [73, 76, 31], [91, 77, 27]];

register("command", () => config.openGUI()).setName("kath");

register("chat", function (event) {
  const message = (ChatLib.getChatMessage(event)).toString()
  if (message.startsWith("-----------------------------------------------------") && message.includes('has invited you to join their party!')) {
    if (!config.partyAccept) return;
    const pattern = /(?:\[(\w+)\]\s+)?(\w+)\s+has invited you to join their party!/;
    const match = message.match(pattern);
    if (!match) return;
    const username = match[2]; // Extract the username
    ChatLib.command(`p accept ${username}`);
  }
})

register("chat", function (event) {
  var message = (ChatLib.getChatMessage(event)).toString();
  if (message.startsWith("-----------------------------------------------------") && message.includes('has invited you to join their party!')) {
    if (!config.partyFragBot) return;
    const pattern = /(?:\[(\w+)\]\s+)?(\w+)\s+has invited you to join their party!/;
    const match = message.match(pattern);
    if (!match) return;
    const username = match[2]; // Extract the username
    ChatLib.command(`p accept ${username}`);
    setTimeout(function () {
      ChatLib.command(`p leave`);
    }, 5000);
  }
});

register('chat', (event) => {
  var message = (ChatLib.getChatMessage(event)).toString();
  if (message.includes("[BOSS] The Watcher: That will be enough for now.")) {
    if (!config.dungeonsBloodAlert) return;
    Client.showTitle("&cBlood Ready!", "", 1, 30, 1)
  }
})

register('chat', (event) => {
  var message = (ChatLib.getChatMessage(event)).toString();
  if (message.includes("You only have 50") && message.includes("left in your Quiver!")) {
    if (!config.miscArrowWarning) return;
    Client.showTitle("&cLow Arrows!", "", 1, 30, 1)
  }
})

register('chat', (event) => {
  var message = (ChatLib.getChatMessage(event)).toString();
  if (message.includes("has arrived on your Garden!")) {
    if (!config.gardenVisitorAlert) return;
    const words = message.split(' ');
    const name = words.slice(0, words.indexOf('has')).join(' ');
    Client.showTitle(`&b&l${name} &r&fhas arrived on your Garden!`, "", 1, 30, 1)
  }
})

register('chat', (event) => {
  var message = (ChatLib.getChatMessage(event)).toString();
  if (!config.miscCyberBully) return;
  if (message.startsWith(" ☠") && message.includes("was killed by")) {
    ChatLib.command(`pc ${message}`);
    ChatLib.command(`ac ${message}`);
  }
})

register('chat', (event) => {
  var message = (ChatLib.getChatMessage(event)).toString();
  if (!config.dungeonsCyberBully) return;
  if (message.startsWith("PUZZLE FAIL!") && message.includes("Yikes!")) {
    ChatLib.command(`pc ${message}`);
    ChatLib.command(`ac ${message}`);
  }
})

register('chat', (event) => {
  var message = (ChatLib.getChatMessage(event)).toString();
  if (!config.miscAntiGexp) return;
  if (message.startsWith("You earned") && message.includes("from playing SkyBlock!")) {
    cancel(event)
  }
})

register('chat', (event) => {
  var message = (ChatLib.getChatMessage(event)).toString();
  if (!config.miscAntiMVPPlusPlus) return;
  if (message.includes("joined the lobby!")) {
    cancel(event)
  }
})

register('chat', (event) => {
  var message = (ChatLib.getChatMessage(event)).toString();
  if (!config.miscAntiHypeLimit) return;
  if (message.includes("You have reached your Hype limit! Add Hype to Prototype Lobby minigames by right-clicking with the Hype Diamond!")) {
    cancel(event)
  }
})

register('chat', (event) => {
  var message = (ChatLib.getChatMessage(event)).toString();
  if (!config.miscAntiCombo) return;
  if (message.includes("Kill Combo")) {
    cancel(event)
  }
})

register("renderWorld", () => {
  if (!config.miscGiftWaypoints) return;
  Waypoints.forEach(waypoint => {
    renderBeaconBeam(waypoint[0], waypoint[1], waypoint[2], 0, 153, 153, 1, false)
  });
})

let boss = false;
let bows = [];

register("worldLoad", () => {
  boss = false;
})

register("chat", () => {
  if (!config.dungeonsSpiritBowESP) return;
  if (!config.dungeonsSpiritBearESP) return;
  boss = true;
}).setCriteria(/\[BOSS\] Thorn.+/)

register("renderWorld", () => {
  if (!boss) return;
  bows.forEach(bow => {
    if (config.dungeonsSpiritBowESP && bow.getName().includes("Spirit Bow")) {
      RenderLib.drawBaritoneEspBox(bow.getRenderX(), bow.getRenderY(), bow.getRenderZ(), .75, 5, 255, 215, 0, 1, false)
    } else if (config.spiritBearEsp && bow.getName().includes("Spirit Bear")) {
      RenderLib.drawBaritoneEspBox(bow.getRenderX(), bow.getRenderY(), bow.getRenderZ(), .75, 5, 0, 215, 0, 1, false)
    }
  })
})

register("step", () => {
  if (!boss) return;
  if (!config.dungeonsSpiritBearESP && !config.dungeonsSpiritBowESP) return;
  new Thread(() => bows = World.getAllEntities().filter(e => e.getName().includes("Spirit"))).start();
}).setFps(2)