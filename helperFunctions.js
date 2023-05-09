
export const removeColors = function removeColors(text) {
  const cleanText = text.replace(/§./g, "");
  return cleanText;
}
export const divider = "&a&m            &d&m            &e&m            &a&m            &d&m            &e&m            &a&m           &d&m           &e&m           &8\n";

export const showChangeMessage = () => {

  let stringArray = [
    `${divider}`,
    ChatLib.getCenteredText(`&dKath Addons has moved to kath`) + "\n",
    ChatLib.getCenteredText(`&d/ct delete KathAddons`) + "\n",
    ChatLib.getCenteredText(`&d/ct import Kath`) + "\n",
    ChatLib.getCenteredText(`&dThis message wont go away lmaooo`) + "\n",
    `\n${divider}`
  ]

  let finalText = ""
  stringArray.forEach((line) => {
    if (line == "-/*") return
    finalText += (!line.includes("-/-")) ? `\n${line}` : line.replace("-/-", "\n")
  })

  ChatLib.chat(finalText)
}
