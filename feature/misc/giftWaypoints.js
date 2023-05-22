const Waypoints = [[-24, 76, 97], [-1, 79, 113], [-13, 78, 105], [-1, 76, 81], [27, 76, 51], [26, 86, 43], [-15, 76, 11], [-18, 93, 20], [-17, 87, 49], [-18, 79, 33], [10, 76, 70], [17, 77, 90], [-22, 77, 56], [-40, 76, 80], [-26, 78, 42], [21, 77, 34], [4, 82, 100], [23, 87, 27], [-25, 76, 69], [19, 86, 71]];
import renderBeaconBeam from "../../../BeaconBeam";
import Settings from "../../settings";
const config = Settings

register("renderWorld", () => {
  try {
    if (!config.miscGiftWaypoints) return;
    let scoreboardInfoData = (Scoreboard.getLines()).join()
    if (!scoreboardInfoData.includes("Jerry's Workshop")) return;
    Waypoints.forEach(waypoint => {
      renderBeaconBeam(waypoint[0], waypoint[1], waypoint[2], 0, 153, 153, 1, true)
    });
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&AutoWB &6> &c${error}`);
  }
})
