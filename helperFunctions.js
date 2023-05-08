import PogObject from "../PogData/index"

export const removeColors = function removeColors(text) {
  const cleanText = text.replace(/§./g, "");
  return cleanText;
}

export const divider = "&a&m            &d&m            &e&m            &a&m            &d&m            &e&m            &a&m           &d&m           &e&m           &8\n";

export const data = new PogObject("KathAddons", {
  "firstTimeMsg": false
}, "data/data.json")