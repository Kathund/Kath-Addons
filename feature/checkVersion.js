var currentVersion = JSON.parse(FileLib.read("kath", "metadata.json")).version
import * as helperFunction from "../helperFunctions.js";

try {
  helperFunction.getLatestVersion().then(latestVersion => {
    if (!currentVersion === latestVersion) {
      ChatLib.chat(`&dkath &6>&7 &cYour version of &6kath &7is outdated! &c(&6${currentVersion}&c) &7(&6${latestVersion}&7)`);
      ChatLib.chat(`&dkath &6>&7 &cPlease run &6/ct update kath`);
    }
  })
} catch (error) {
  console.log(error);
  ChatLib.chat(`&dkath &6>&7 &c${error}`);
}
