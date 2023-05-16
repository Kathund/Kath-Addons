import { Promise } from '../../PromiseV2';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
import Settings from "../settings";
const config = Settings


let join = false;
register("postGuiRender", (mx, my, gui) => {
  if (!(gui instanceof net.minecraft.client.gui.GuiMainMenu)) return;
  if (!config.generalHypixelJoinner) return;
  if (join) return;
  join = true
  delay(150).then(() => Client.connect("play.hypixel.net")).then(() => join = true).then(() => delay(1000)).then(() => join = false)
})
