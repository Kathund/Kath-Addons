import PogObject from "../PogData/index"

export const removeColors = function (text) {
  const cleanText = text.replace(/§./g, "");
  return cleanText;
}

export const divider = "&a&m            &d&m            &e&m            &a&m            &d&m            &e&m            &a&m           &d&m           &e&m           &8\n";

export const data = new PogObject("KathAddons", {
  "firstTimeMsg": false,
  "updateMessage120": false
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

export const showUpdateMessage = () => {
  data.updateMessage120 = true;
  data.save();
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
    ChatLib.getCenteredText(`&dKath Addons - ${JSON.parse(FileLib.read("kathAddons", "metadata.json")).version}`) + "\n",
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