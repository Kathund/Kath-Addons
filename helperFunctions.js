
export const removeColors = function removeColors(text) {
  const cleanText = text.replace(/§./g, "");
  return cleanText;
}
