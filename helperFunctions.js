import PogObject from "../PogData/index"

export const removeColors = function (text) {
  const cleanText = text.replace(/§./g, "");
  return cleanText;
}

export const divider = "&a&m            &d&m            &e&m            &a&m            &d&m            &e&m            &a&m           &d&m           &e&m           &8\n";

export const data = new PogObject("KathAddons", {
  "firstTimeMsg": false
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