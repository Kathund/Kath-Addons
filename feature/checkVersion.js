var currentVersion = JSON.parse(FileLib.read("kath", "metadata.json")).version;
import * as helperFunction from "../helperFunctions.js";

try {
  helperFunction.getLatestVersion().then((latestVersion) => {
    if (currentVersion != latestVersion) {
      ChatLib.chat(
        `&dkath &6>&7 &cYour version of &6kath &cis outdated! &c(&6Current ${currentVersion}&c) (&6Latest ${latestVersion}&c)`
      );
      ChatLib.chat(`&dkath &6>&7 &cPlease run &6/ct update kath`);
    }
  });
} catch (error) {
  console.log(error);
  ChatLib.chat(`&dkath &6>&7 &c${error}`);
}
