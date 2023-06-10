import * as helperFunctions from "./helperFunctions.js";
let currentVersion = JSON.parse(FileLib.read("kath", "metadata.json")).version
import { @Vigilant, @TextProperty, @ButtonProperty, @SwitchProperty, @SliderProperty, @SelectorProperty } from 'Vigilance';
@Vigilant('kath', 'kath', {
  getCategoryComparator: () => (a, b) => {
    const categories = ['General', 'Dungeons', 'Emojis', 'Gardens', 'Party', 'Chat', 'QOL', 'Misc', 'Extra Info', 'Change Log'];
    return categories.indexOf(a.name) - categories.indexOf(b.name);
  },
  // getSubcategoryComparator: () => (a, b) => {
  //   const subcategorys = ["General", "Funny", "Info", "Other Projects", "Credits", "Change Log"];
  //   return subcategorys.indexOf(a.getValue()[0].attributesExt.subcategory) -
  //     subcategorys.indexOf(b.getValue()[0].attributesExt.subcategory);
  // },
})

class Settings {
  // ! General

  @SwitchProperty({
    name: "Alert Sound",
    description: "Plays a sound when an alert gets displayed",
    category: "General",
    subcategory: "Not General",
  })
  generalAlertSound = false;

  @SwitchProperty({
    name: "Show Change log",
    description: "Shows a message in chat with the change log when the module updates",
    category: "General",
    subcategory: "Not General",
  })
  generalShowChangeLog = false;

  // ! Dungeons

  @SwitchProperty({
    name: "Blood Ready",
    description: "Displays a message on your screen when the watcher has spawned all the mobs",
    category: "Dungeons",
    subcategory: "General",
  })
  dungeonsBloodAlert = false;

  @SwitchProperty({
    name: "Cyber Bully Dungeons",
    description: "&n&4Usage of this may result in a mute! Use at your own risk\n&rWill post peoples fails messages in all and party chat",
    category: "Dungeons",
    subcategory: "General",
  })
  dungeonsCyberBully = false;

  @SwitchProperty({
    name: "Spirit Bow Waypoint",
    description: "Shows a waypoint from where the spirit bow drops",
    category: "Dungeons",
    subcategory: "General",
  })
  dungeonsSpiritBowWaypoint = false;

  // ! Emojis
  // ? Options

  @SwitchProperty({
    name: "Emojis",
    description: "Converts :skull: to the skull emoji in mc chat",
    category: "Emojis",
    subcategory: "Info",
  })
  emojisToggle = false;

  @ButtonProperty({
    name: "Emojis texture pack",
    description: "Link to download the emojis texture pack that is required for the emojis to work",
    category: "Emojis",
    subcategory: "Info",
    placeholder: "Download",
  })
  emojisDownload() {
    // ! place holder url
    java.awt.Desktop.getDesktop().browse(new java.net.URI("https://github.com/Kathund/kath/releases/download/1.3.1/kath-1.3.1.zip"))
  };

  // ? Emojis
  @ButtonProperty({
      name: "100",
      description: "Will replace :100: with the 100 emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娀"
    })
    emoji100() { };


    @ButtonProperty({
      name: "grin",
      description: "Will replace :grin: with the grin emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娄"
    })
    emojiGrin() { };


    @ButtonProperty({
      name: "blush",
      description: "Will replace :blush: with the blush emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娍"
    })
    emojiBlush() { };


    @ButtonProperty({
      name: "relieved",
      description: "Will replace :relieved: with the relieved emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娒"
    })
    emojiRelieved() { };


    @ButtonProperty({
      name: "relaxed",
      description: "Will replace :relaxed: with the relaxed emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娐"
    })
    emojiRelaxed() { };


    @ButtonProperty({
      name: "laughing",
      description: "Will replace :laughing: with the laughing emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娊"
    })
    emojiLaughing() { };


    @ButtonProperty({
      name: "smiley",
      description: "Will replace :smiley: with the smiley emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娇"
    })
    emojiSmiley() { };


    @ButtonProperty({
      name: "joy",
      description: "Will replace :joy: with the joy emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娅"
    })
    emojiJoy() { };


    @ButtonProperty({
      name: "innocent",
      description: "Will replace :innocent: with the innocent emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娋"
    })
    emojiInnocent() { };


    @ButtonProperty({
      name: "smile",
      description: "Will replace :smile: with the smile emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娈"
    })
    emojiSmile() { };


    @ButtonProperty({
      name: "wink",
      description: "Will replace :wink: with the wink emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娌"
    })
    emojiWink() { };


    @ButtonProperty({
      name: "1234",
      description: "Will replace :1234: with the 1234 emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "威"
    })
    emoji1234() { };


    @ButtonProperty({
      name: "grinning",
      description: "Will replace :grinning: with the grinning emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娂"
    })
    emojiGrinning() { };


    @ButtonProperty({
      name: "slightly_smiling_face",
      description: "Will replace :slightly_smiling_face: with the slightly_smiling_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娎"
    })
    emojiSlightly_smiling_face() { };


    @ButtonProperty({
      name: "sweat_smile",
      description: "Will replace :sweat_smile: with the sweat_smile emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娉"
    })
    emojiSweat_smile() { };


    @ButtonProperty({
      name: "rofl",
      description: "Will replace :rofl: with the rofl emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娆"
    })
    emojiRofl() { };


    @ButtonProperty({
      name: "grimacing",
      description: "Will replace :grimacing: with the grimacing emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娃"
    })
    emojiGrimacing() { };


    @ButtonProperty({
      name: "stuck_out_tongue",
      description: "Will replace :stuck_out_tongue: with the stuck_out_tongue emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娚"
    })
    emojiStuck_out_tongue() { };


    @ButtonProperty({
      name: "cowboy_hat_face",
      description: "Will replace :cowboy_hat_face: with the cowboy_hat_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娟"
    })
    emojiCowboy_hat_face() { };


    @ButtonProperty({
      name: "roll_eyes",
      description: "Will replace :roll_eyes: with the roll_eyes emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娦"
    })
    emojiRoll_eyes() { };


    @ButtonProperty({
      name: "upside_down_face",
      description: "Will replace :upside_down_face: with the upside_down_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娏"
    })
    emojiUpside_down_face() { };


    @ButtonProperty({
      name: "heart_eyes",
      description: "Will replace :heart_eyes: with the heart_eyes emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娓"
    })
    emojiHeart_eyes() { };


    @ButtonProperty({
      name: "stuck_out_tongue_closed_eyes",
      description: "Will replace :stuck_out_tongue_closed_eyes: with the stuck_out_tongue_closed_eyes emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娙"
    })
    emojiStuck_out_tongue_closed_eyes() { };


    @ButtonProperty({
      name: "yum",
      description: "Will replace :yum: with the yum emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娑"
    })
    emojiYum() { };


    @ButtonProperty({
      name: "worried",
      description: "Will replace :worried: with the worried emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娫"
    })
    emojiWorried() { };


    @ButtonProperty({
      name: "frowning_face",
      description: "Will replace :frowning_face: with the frowning_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娱"
    })
    emojiFrowning_face() { };


    @ButtonProperty({
      name: "open_mouth",
      description: "Will replace :open_mouth: with the open_mouth emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娷"
    })
    emojiOpen_mouth() { };


    @ButtonProperty({
      name: "persevere",
      description: "Will replace :persevere: with the persevere emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娲"
    })
    emojiPersevere() { };


    @ButtonProperty({
      name: "kissing_smiling_eyes",
      description: "Will replace :kissing_smiling_eyes: with the kissing_smiling_eyes emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娖"
    })
    emojiKissing_smiling_eyes() { };


    @ButtonProperty({
      name: "hushed",
      description: "Will replace :hushed: with the hushed emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娻"
    })
    emojiHushed() { };


    @ButtonProperty({
      name: "kissing",
      description: "Will replace :kissing: with the kissing emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娕"
    })
    emojiKissing() { };


    @ButtonProperty({
      name: "kissing_heart",
      description: "Will replace :kissing_heart: with the kissing_heart emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娔"
    })
    emojiKissing_heart() { };


    @ButtonProperty({
      name: "sob",
      description: "Will replace :sob: with the sob emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婃"
    })
    emojiSob() { };


    @ButtonProperty({
      name: "kissing_closed_eyes",
      description: "Will replace :kissing_closed_eyes: with the kissing_closed_eyes emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娗"
    })
    emojiKissing_closed_eyes() { };


    @ButtonProperty({
      name: "mask",
      description: "Will replace :mask: with the mask emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婉"
    })
    emojiMask() { };


    @ButtonProperty({
      name: "face_with_thermometer",
      description: "Will replace :face_with_thermometer: with the face_with_thermometer emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婊"
    })
    emojiFace_with_thermometer() { };


    @ButtonProperty({
      name: "face_with_head_bandage",
      description: "Will replace :face_with_head_bandage: with the face_with_head_bandage emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婋"
    })
    emojiFace_with_head_bandage() { };


    @ButtonProperty({
      name: "imp",
      description: "Will replace :imp: with the imp emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婐"
    })
    emojiImp() { };


    @ButtonProperty({
      name: "japanese_goblin",
      description: "Will replace :japanese_goblin: with the japanese_goblin emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婒"
    })
    emojiJapanese_goblin() { };


    @ButtonProperty({
      name: "smiley_cat",
      description: "Will replace :smiley_cat: with the smiley_cat emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婗"
    })
    emojiSmiley_cat() { };


    @ButtonProperty({
      name: "stuck_out_tongue_winking_eye",
      description: "Will replace :stuck_out_tongue_winking_eye: with the stuck_out_tongue_winking_eye emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娘"
    })
    emojiStuck_out_tongue_winking_eye() { };


    @ButtonProperty({
      name: "smile_cat",
      description: "Will replace :smile_cat: with the smile_cat emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婘"
    })
    emojiSmile_cat() { };


    @ButtonProperty({
      name: "smirk_cat",
      description: "Will replace :smirk_cat: with the smirk_cat emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婛"
    })
    emojiSmirk_cat() { };


    @ButtonProperty({
      name: "sunglasses",
      description: "Will replace :sunglasses: with the sunglasses emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娝"
    })
    emojiSunglasses() { };


    @ButtonProperty({
      name: "nerd_face",
      description: "Will replace :nerd_face: with the nerd_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娜"
    })
    emojiNerd_face() { };


    @ButtonProperty({
      name: "clown",
      description: "Will replace :clown: with the clown emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娞"
    })
    emojiClown() { };


    @ButtonProperty({
      name: "hugs",
      description: "Will replace :hugs: with the hugs emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娠"
    })
    emojiHugs() { };


    @ButtonProperty({
      name: "smirk",
      description: "Will replace :smirk: with the smirk emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娡"
    })
    emojiSmirk() { };


    @ButtonProperty({
      name: "no_mouth",
      description: "Will replace :no_mouth: with the no_mouth emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娢"
    })
    emojiNo_mouth() { };


    @ButtonProperty({
      name: "money_mouth_face",
      description: "Will replace :money_mouth_face: with the money_mouth_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娛"
    })
    emojiMoney_mouth_face() { };


    @ButtonProperty({
      name: "neutral_face",
      description: "Will replace :neutral_face: with the neutral_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娣"
    })
    emojiNeutral_face() { };


    @ButtonProperty({
      name: "expressionless",
      description: "Will replace :expressionless: with the expressionless emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娤"
    })
    emojiExpressionless() { };


    @ButtonProperty({
      name: "unamused",
      description: "Will replace :unamused: with the unamused emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娥"
    })
    emojiUnamused() { };


    @ButtonProperty({
      name: "open_hands",
      description: "Will replace :open_hands: with the open_hands emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婮"
    })
    emojiOpen_hands() { };


    @ButtonProperty({
      name: "fist",
      description: "Will replace :fist: with the fist emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婧"
    })
    emojiFist() { };


    @ButtonProperty({
      name: "metal",
      description: "Will replace :metal: with the metal emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婹"
    })
    emojiMetal() { };


    @ButtonProperty({
      name: "point_left",
      description: "Will replace :point_left: with the point_left emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婵"
    })
    emojiPoint_left() { };


    @ButtonProperty({
      name: "thinking",
      description: "Will replace :thinking: with the thinking emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娧"
    })
    emojiThinking() { };


    @ButtonProperty({
      name: "lying_face",
      description: "Will replace :lying_face: with the lying_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娨"
    })
    emojiLying_face() { };


    @ButtonProperty({
      name: "flushed",
      description: "Will replace :flushed: with the flushed emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娩"
    })
    emojiFlushed() { };


    @ButtonProperty({
      name: "vulcan_salute",
      description: "Will replace :vulcan_salute: with the vulcan_salute emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婻"
    })
    emojiVulcan_salute() { };


    @ButtonProperty({
      name: "disappointed",
      description: "Will replace :disappointed: with the disappointed emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娪"
    })
    emojiDisappointed() { };


    @ButtonProperty({
      name: "pensive",
      description: "Will replace :pensive: with the pensive emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娮"
    })
    emojiPensive() { };


    @ButtonProperty({
      name: "confused",
      description: "Will replace :confused: with the confused emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娯"
    })
    emojiConfused() { };


    @ButtonProperty({
      name: "rage",
      description: "Will replace :rage: with the rage emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娭"
    })
    emojiRage() { };


    @ButtonProperty({
      name: "angry",
      description: "Will replace :angry: with the angry emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娬"
    })
    emojiAngry() { };


    @ButtonProperty({
      name: "slightly_frowning_face",
      description: "Will replace :slightly_frowning_face: with the slightly_frowning_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娰"
    })
    emojiSlightly_frowning_face() { };


    @ButtonProperty({
      name: "tired_face",
      description: "Will replace :tired_face: with the tired_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娴"
    })
    emojiTired_face() { };


    @ButtonProperty({
      name: "scream",
      description: "Will replace :scream: with the scream emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娸"
    })
    emojiScream() { };


    @ButtonProperty({
      name: "confounded",
      description: "Will replace :confounded: with the confounded emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娳"
    })
    emojiConfounded() { };


    @ButtonProperty({
      name: "fearful",
      description: "Will replace :fearful: with the fearful emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娹"
    })
    emojiFearful() { };


    @ButtonProperty({
      name: "weary",
      description: "Will replace :weary: with the weary emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娵"
    })
    emojiWeary() { };


    @ButtonProperty({
      name: "selfie",
      description: "Will replace :selfie: with the selfie emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婽"
    })
    emojiSelfie() { };


    @ButtonProperty({
      name: "ear",
      description: "Will replace :ear: with the ear emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媀"
    })
    emojiEar() { };


    @ButtonProperty({
      name: "eyes",
      description: "Will replace :eyes: with the eyes emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媃"
    })
    emojiEyes() { };


    @ButtonProperty({
      name: "dark_sunglasses",
      description: "Will replace :dark_sunglasses: with the dark_sunglasses emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媞"
    })
    emojiDark_sunglasses() { };


    @ButtonProperty({
      name: "lipstick",
      description: "Will replace :lipstick: with the lipstick emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媋"
    })
    emojiLipstick() { };


    @ButtonProperty({
      name: "dress",
      description: "Will replace :dress: with the dress emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媈"
    })
    emojiDress() { };


    @ButtonProperty({
      name: "sandal",
      description: "Will replace :sandal: with the sandal emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媏"
    })
    emojiSandal() { };


    @ButtonProperty({
      name: "rescue_worker_helmet",
      description: "Will replace :rescue_worker_helmet: with the rescue_worker_helmet emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媕"
    })
    emojiRescue_worker_helmet() { };


    @ButtonProperty({
      name: "womans_hat",
      description: "Will replace :womans_hat: with the womans_hat emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媓"
    })
    emojiWomans_hat() { };


    @ButtonProperty({
      name: "mortar_board",
      description: "Will replace :mortar_board: with the mortar_board emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媖"
    })
    emojiMortar_board() { };


    @ButtonProperty({
      name: "ring",
      description: "Will replace :ring: with the ring emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媟"
    })
    emojiRing() { };


    @ButtonProperty({
      name: "cat",
      description: "Will replace :cat: with the cat emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媢"
    })
    emojiCat() { };


    @ButtonProperty({
      name: "mouse",
      description: "Will replace :mouse: with the mouse emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媣"
    })
    emojiMouse() { };


    @ButtonProperty({
      name: "triumph",
      description: "Will replace :triumph: with the triumph emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娶"
    })
    emojiTriumph() { };


    @ButtonProperty({
      name: "cry",
      description: "Will replace :cry: with the cry emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娾"
    })
    emojiCry() { };


    @ButtonProperty({
      name: "cold_sweat",
      description: "Will replace :cold_sweat: with the cold_sweat emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娺"
    })
    emojiCold_sweat() { };


    @ButtonProperty({
      name: "disappointed_relieved",
      description: "Will replace :disappointed_relieved: with the disappointed_relieved emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娿"
    })
    emojiDisappointed_relieved() { };


    @ButtonProperty({
      name: "frowning",
      description: "Will replace :frowning: with the frowning emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娼"
    })
    emojiFrowning() { };


    @ButtonProperty({
      name: "sleepy",
      description: "Will replace :sleepy: with the sleepy emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婁"
    })
    emojiSleepy() { };


    @ButtonProperty({
      name: "hamster",
      description: "Will replace :hamster: with the hamster emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媤"
    })
    emojiHamster() { };


    @ButtonProperty({
      name: "anguished",
      description: "Will replace :anguished: with the anguished emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "娽"
    })
    emojiAnguished() { };


    @ButtonProperty({
      name: "drooling_face",
      description: "Will replace :drooling_face: with the drooling_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婀"
    })
    emojiDrooling_face() { };


    @ButtonProperty({
      name: "koala",
      description: "Will replace :koala: with the koala emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媩"
    })
    emojiKoala() { };


    @ButtonProperty({
      name: "sweat",
      description: "Will replace :sweat: with the sweat emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婂"
    })
    emojiSweat() { };


    @ButtonProperty({
      name: "panda_face",
      description: "Will replace :panda_face: with the panda_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媨"
    })
    emojiPanda_face() { };


    @ButtonProperty({
      name: "penguin",
      description: "Will replace :penguin: with the penguin emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媺"
    })
    emojiPenguin() { };


    @ButtonProperty({
      name: "astonished",
      description: "Will replace :astonished: with the astonished emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婅"
    })
    emojiAstonished() { };


    @ButtonProperty({
      name: "boar",
      description: "Will replace :boar: with the boar emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嫄"
    })
    emojiBoar() { };


    @ButtonProperty({
      name: "beetle",
      description: "Will replace :beetle: with the beetle emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嫋"
    })
    emojiBeetle() { };


    @ButtonProperty({
      name: "hatching_chick",
      description: "Will replace :hatching_chick: with the hatching_chick emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媽"
    })
    emojiHatching_chick() { };


    @ButtonProperty({
      name: "tiger2",
      description: "Will replace :tiger2: with the tiger2 emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嫜"
    })
    emojiTiger2() { };


    @ButtonProperty({
      name: "snail",
      description: "Will replace :snail: with the snail emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嫊"
    })
    emojiSnail() { };


    @ButtonProperty({
      name: "zipper_mouth_face",
      description: "Will replace :zipper_mouth_face: with the zipper_mouth_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婆"
    })
    emojiZipper_mouth_face() { };


    @ButtonProperty({
      name: "crab",
      description: "Will replace :crab: with the crab emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嫏"
    })
    emojiCrab() { };


    @ButtonProperty({
      name: "turtle",
      description: "Will replace :turtle: with the turtle emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嫒"
    })
    emojiTurtle() { };


    @ButtonProperty({
      name: "crocodile",
      description: "Will replace :crocodile: with the crocodile emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嫚"
    })
    emojiCrocodile() { };


    @ButtonProperty({
      name: "cow2",
      description: "Will replace :cow2: with the cow2 emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嫟"
    })
    emojiCow2() { };


    @ButtonProperty({
      name: "dove",
      description: "Will replace :dove: with the dove emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嫮"
    })
    emojiDove() { };


    @ButtonProperty({
      name: "rabbit2",
      description: "Will replace :rabbit2: with the rabbit2 emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嫲"
    })
    emojiRabbit2() { };


    @ButtonProperty({
      name: "turkey",
      description: "Will replace :turkey: with the turkey emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嫭"
    })
    emojiTurkey() { };


    @ButtonProperty({
      name: "dizzy_face",
      description: "Will replace :dizzy_face: with the dizzy_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婄"
    })
    emojiDizzy_face() { };


    @ButtonProperty({
      name: "shamrock",
      description: "Will replace :shamrock: with the shamrock emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嫾"
    })
    emojiShamrock() { };


    @ButtonProperty({
      name: "herb",
      description: "Will replace :herb: with the herb emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嫽"
    })
    emojiHerb() { };


    @ButtonProperty({
      name: "rose",
      description: "Will replace :rose: with the rose emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬈"
    })
    emojiRose() { };


    @ButtonProperty({
      name: "sneezing_face",
      description: "Will replace :sneezing_face: with the sneezing_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婈"
    })
    emojiSneezing_face() { };


    @ButtonProperty({
      name: "nauseated_face",
      description: "Will replace :nauseated_face: with the nauseated_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婇"
    })
    emojiNauseated_face() { };


    @ButtonProperty({
      name: "sleeping",
      description: "Will replace :sleeping: with the sleeping emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婌"
    })
    emojiSleeping() { };


    @ButtonProperty({
      name: "poop",
      description: "Will replace :poop: with the poop emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婎"
    })
    emojiPoop() { };


    @ButtonProperty({
      name: "zzz",
      description: "Will replace :zzz: with the zzz emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婍"
    })
    emojiZzz() { };


    @ButtonProperty({
      name: "smiling_imp",
      description: "Will replace :smiling_imp: with the smiling_imp emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婏"
    })
    emojiSmiling_imp() { };


    @ButtonProperty({
      name: "blossom",
      description: "Will replace :blossom: with the blossom emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬋"
    })
    emojiBlossom() { };


    @ButtonProperty({
      name: "shell",
      description: "Will replace :shell: with the shell emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬑"
    })
    emojiShell() { };


    @ButtonProperty({
      name: "jack_o_lantern",
      description: "Will replace :jack_o_lantern: with the jack_o_lantern emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬐"
    })
    emojiJack_o_lantern() { };


    @ButtonProperty({
      name: "full_moon",
      description: "Will replace :full_moon: with the full_moon emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬖"
    })
    emojiFull_moon() { };


    @ButtonProperty({
      name: "waning_gibbous_moon",
      description: "Will replace :waning_gibbous_moon: with the waning_gibbous_moon emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬗"
    })
    emojiWaning_gibbous_moon() { };


    @ButtonProperty({
      name: "waning_crescent_moon",
      description: "Will replace :waning_crescent_moon: with the waning_crescent_moon emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬙"
    })
    emojiWaning_crescent_moon() { };


    @ButtonProperty({
      name: "waxing_crescent_moon",
      description: "Will replace :waxing_crescent_moon: with the waxing_crescent_moon emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬛"
    })
    emojiWaxing_crescent_moon() { };


    @ButtonProperty({
      name: "first_quarter_moon",
      description: "Will replace :first_quarter_moon: with the first_quarter_moon emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬜"
    })
    emojiFirst_quarter_moon() { };


    @ButtonProperty({
      name: "star",
      description: "Will replace :star: with the star emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬤"
    })
    emojiStar() { };


    @ButtonProperty({
      name: "star2",
      description: "Will replace :star2: with the star2 emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬥"
    })
    emojiStar2() { };


    @ButtonProperty({
      name: "sun_behind_small_cloud",
      description: "Will replace :sun_behind_small_cloud: with the sun_behind_small_cloud emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬪"
    })
    emojiSun_behind_small_cloud() { };


    @ButtonProperty({
      name: "zap",
      description: "Will replace :zap: with the zap emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬲"
    })
    emojiZap() { };


    @ButtonProperty({
      name: "cloud_with_rain",
      description: "Will replace :cloud_with_rain: with the cloud_with_rain emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬯"
    })
    emojiCloud_with_rain() { };


    @ButtonProperty({
      name: "crescent_moon",
      description: "Will replace :crescent_moon: with the crescent_moon emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬣"
    })
    emojiCrescent_moon() { };


    @ButtonProperty({
      name: "cloud_with_snow",
      description: "Will replace :cloud_with_snow: with the cloud_with_snow emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬶"
    })
    emojiCloud_with_snow() { };


    @ButtonProperty({
      name: "snowman",
      description: "Will replace :snowman: with the snowman emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬷"
    })
    emojiSnowman() { };


    @ButtonProperty({
      name: "skull",
      description: "Will replace :skull: with the skull emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婓"
    })
    emojiSkull() { };


    @ButtonProperty({
      name: "japanese_ogre",
      description: "Will replace :japanese_ogre: with the japanese_ogre emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婑"
    })
    emojiJapanese_ogre() { };


    @ButtonProperty({
      name: "robot",
      description: "Will replace :robot: with the robot emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婖"
    })
    emojiRobot() { };


    @ButtonProperty({
      name: "alien",
      description: "Will replace :alien: with the alien emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婕"
    })
    emojiAlien() { };


    @ButtonProperty({
      name: "umbrella",
      description: "Will replace :umbrella: with the umbrella emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "嬾"
    })
    emojiUmbrella() { };


    @ButtonProperty({
      name: "ghost",
      description: "Will replace :ghost: with the ghost emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婔"
    })
    emojiGhost() { };


    @ButtonProperty({
      name: "joy_cat",
      description: "Will replace :joy_cat: with the joy_cat emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婙"
    })
    emojiJoy_cat() { };


    @ButtonProperty({
      name: "scream_cat",
      description: "Will replace :scream_cat: with the scream_cat emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婝"
    })
    emojiScream_cat() { };


    @ButtonProperty({
      name: "kissing_cat",
      description: "Will replace :kissing_cat: with the kissing_cat emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婜"
    })
    emojiKissing_cat() { };


    @ButtonProperty({
      name: "crying_cat_face",
      description: "Will replace :crying_cat_face: with the crying_cat_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婞"
    })
    emojiCrying_cat_face() { };


    @ButtonProperty({
      name: "pouting_cat",
      description: "Will replace :pouting_cat: with the pouting_cat emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婟"
    })
    emojiPouting_cat() { };


    @ButtonProperty({
      name: "heart_eyes_cat",
      description: "Will replace :heart_eyes_cat: with the heart_eyes_cat emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婚"
    })
    emojiHeart_eyes_cat() { };


    @ButtonProperty({
      name: "raised_hands",
      description: "Will replace :raised_hands: with the raised_hands emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婠"
    })
    emojiRaised_hands() { };


    @ButtonProperty({
      name: "wave",
      description: "Will replace :wave: with the wave emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婢"
    })
    emojiWave() { };


    @ButtonProperty({
      name: "call_me_hand",
      description: "Will replace :call_me_hand: with the call_me_hand emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婣"
    })
    emojiCall_me_hand() { };


    @ButtonProperty({
      name: "hot_pepper",
      description: "Will replace :hot_pepper: with the hot_pepper emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "孕"
    })
    emojiHot_pepper() { };


    @ButtonProperty({
      name: "clap",
      description: "Will replace :clap: with the clap emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婡"
    })
    emojiClap() { };


    @ButtonProperty({
      name: "facepunch",
      description: "Will replace :facepunch: with the facepunch emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婦"
    })
    emojiFacepunch() { };


    @ButtonProperty({
      name: "fist_left",
      description: "Will replace :fist_left: with the fist_left emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婨"
    })
    emojiFist_left() { };


    @ButtonProperty({
      name: "muscle",
      description: "Will replace :muscle: with the muscle emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婯"
    })
    emojiMuscle() { };


    @ButtonProperty({
      name: "raised_hand",
      description: "Will replace :raised_hand: with the raised_hand emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婬"
    })
    emojiRaised_hand() { };


    @ButtonProperty({
      name: "fist_right",
      description: "Will replace :fist_right: with the fist_right emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婩"
    })
    emojiFist_right() { };


    @ButtonProperty({
      name: "point_down",
      description: "Will replace :point_down: with the point_down emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婴"
    })
    emojiPoint_down() { };


    @ButtonProperty({
      name: "pray",
      description: "Will replace :pray: with the pray emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婰"
    })
    emojiPray() { };


    @ButtonProperty({
      name: "cheese",
      description: "Will replace :cheese: with the cheese emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "孞"
    })
    emojiCheese() { };


    @ButtonProperty({
      name: "handshake",
      description: "Will replace :handshake: with the handshake emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婱"
    })
    emojiHandshake() { };


    @ButtonProperty({
      name: "v",
      description: "Will replace :v: with the v emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婪"
    })
    emojiV() { };


    @ButtonProperty({
      name: "poultry_leg",
      description: "Will replace :poultry_leg: with the poultry_leg emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "孢"
    })
    emojiPoultry_leg() { };


    @ButtonProperty({
      name: "bread",
      description: "Will replace :bread: with the bread emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "孜"
    })
    emojiBread() { };


    @ButtonProperty({
      name: "fries",
      description: "Will replace :fries: with the fries emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "孧"
    })
    emojiFries() { };


    @ButtonProperty({
      name: "stuffed_flatbread",
      description: "Will replace :stuffed_flatbread: with the stuffed_flatbread emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "孨"
    })
    emojiStuffed_flatbread() { };


    @ButtonProperty({
      name: "ok_hand",
      description: "Will replace :ok_hand: with the ok_hand emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婫"
    })
    emojiOk_hand() { };


    @ButtonProperty({
      name: "raised_hand_with_fingers_splayed",
      description: "Will replace :raised_hand_with_fingers_splayed: with the raised_hand_with_fingers_splayed emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婸"
    })
    emojiRaised_hand_with_fingers_splayed() { };


    @ButtonProperty({
      name: "point_up",
      description: "Will replace :point_up: with the point_up emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婲"
    })
    emojiPoint_up() { };


    @ButtonProperty({
      name: "raised_back_of_hand",
      description: "Will replace :raised_back_of_hand: with the raised_back_of_hand emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婭"
    })
    emojiRaised_back_of_hand() { };


    @ButtonProperty({
      name: "point_right",
      description: "Will replace :point_right: with the point_right emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婶"
    })
    emojiPoint_right() { };


    @ButtonProperty({
      name: "crossed_fingers",
      description: "Will replace :crossed_fingers: with the crossed_fingers emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婺"
    })
    emojiCrossed_fingers() { };


    @ButtonProperty({
      name: "curry",
      description: "Will replace :curry: with the curry emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "孵"
    })
    emojiCurry() { };


    @ButtonProperty({
      name: "point_up_2",
      description: "Will replace :point_up_2: with the point_up_2 emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婳"
    })
    emojiPoint_up_2() { };


    @ButtonProperty({
      name: "writing_hand",
      description: "Will replace :writing_hand: with the writing_hand emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "婼"
    })
    emojiWriting_hand() { };


    @ButtonProperty({
      name: "nose",
      description: "Will replace :nose: with the nose emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媁"
    })
    emojiNose() { };


    @ButtonProperty({
      name: "tshirt",
      description: "Will replace :tshirt: with the tshirt emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媅"
    })
    emojiTshirt() { };


    @ButtonProperty({
      name: "eye",
      description: "Will replace :eye: with the eye emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媂"
    })
    emojiEye() { };


    @ButtonProperty({
      name: "womans_clothes",
      description: "Will replace :womans_clothes: with the womans_clothes emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媄"
    })
    emojiWomans_clothes() { };


    @ButtonProperty({
      name: "necktie",
      description: "Will replace :necktie: with the necktie emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媇"
    })
    emojiNecktie() { };


    @ButtonProperty({
      name: "kimono",
      description: "Will replace :kimono: with the kimono emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媊"
    })
    emojiKimono() { };


    @ButtonProperty({
      name: "custard",
      description: "Will replace :custard: with the custard emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "宀"
    })
    emojiCustard() { };


    @ButtonProperty({
      name: "jeans",
      description: "Will replace :jeans: with the jeans emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媆"
    })
    emojiJeans() { };


    @ButtonProperty({
      name: "ramen",
      description: "Will replace :ramen: with the ramen emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "孰"
    })
    emojiRamen() { };


    @ButtonProperty({
      name: "footprints",
      description: "Will replace :footprints: with the footprints emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媍"
    })
    emojiFootprints() { };


    @ButtonProperty({
      name: "high_heel",
      description: "Will replace :high_heel: with the high_heel emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媎"
    })
    emojiHigh_heel() { };


    @ButtonProperty({
      name: "boot",
      description: "Will replace :boot: with the boot emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媐"
    })
    emojiBoot() { };


    @ButtonProperty({
      name: "athletic_shoe",
      description: "Will replace :athletic_shoe: with the athletic_shoe emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媒"
    })
    emojiAthletic_shoe() { };


    @ButtonProperty({
      name: "mans_shoe",
      description: "Will replace :mans_shoe: with the mans_shoe emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媑"
    })
    emojiMans_shoe() { };


    @ButtonProperty({
      name: "tophat",
      description: "Will replace :tophat: with the tophat emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媔"
    })
    emojiTophat() { };


    @ButtonProperty({
      name: "crown",
      description: "Will replace :crown: with the crown emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媗"
    })
    emojiCrown() { };


    @ButtonProperty({
      name: "eyeglasses",
      description: "Will replace :eyeglasses: with the eyeglasses emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媝"
    })
    emojiEyeglasses() { };


    @ButtonProperty({
      name: "exploding_head",
      description: "Will replace :exploding_head: with the exploding_head emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "定"
    })
    emojiExploding_head() { };


    @ButtonProperty({
      name: "basketball",
      description: "Will replace :basketball: with the basketball emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "宝"
    })
    emojiBasketball() { };


    @ButtonProperty({
      name: "baseball",
      description: "Will replace :baseball: with the baseball emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "実"
    })
    emojiBaseball() { };


    @ButtonProperty({
      name: "school_satchel",
      description: "Will replace :school_satchel: with the school_satchel emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媘"
    })
    emojiSchool_satchel() { };


    @ButtonProperty({
      name: "briefcase",
      description: "Will replace :briefcase: with the briefcase emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媜"
    })
    emojiBriefcase() { };


    @ButtonProperty({
      name: "rugby_football",
      description: "Will replace :rugby_football: with the rugby_football emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "客"
    })
    emojiRugby_football() { };


    @ButtonProperty({
      name: "pouch",
      description: "Will replace :pouch: with the pouch emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媙"
    })
    emojiPouch() { };


    @ButtonProperty({
      name: "closed_umbrella",
      description: "Will replace :closed_umbrella: with the closed_umbrella emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媠"
    })
    emojiClosed_umbrella() { };


    @ButtonProperty({
      name: "goal_net",
      description: "Will replace :goal_net: with the goal_net emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "宧"
    })
    emojiGoal_net() { };


    @ButtonProperty({
      name: "handbag",
      description: "Will replace :handbag: with the handbag emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媛"
    })
    emojiHandbag() { };


    @ButtonProperty({
      name: "dog",
      description: "Will replace :dog: with the dog emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媡"
    })
    emojiDog() { };


    @ButtonProperty({
      name: "purse",
      description: "Will replace :purse: with the purse emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媚"
    })
    emojiPurse() { };


    @ButtonProperty({
      name: "bear",
      description: "Will replace :bear: with the bear emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媧"
    })
    emojiBear() { };


    @ButtonProperty({
      name: "fox_face",
      description: "Will replace :fox_face: with the fox_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媦"
    })
    emojiFox_face() { };


    @ButtonProperty({
      name: "pig_nose",
      description: "Will replace :pig_nose: with the pig_nose emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媮"
    })
    emojiPig_nose() { };


    @ButtonProperty({
      name: "bow_and_arrow",
      description: "Will replace :bow_and_arrow: with the bow_and_arrow emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "宬"
    })
    emojiBow_and_arrow() { };


    @ButtonProperty({
      name: "pig",
      description: "Will replace :pig: with the pig emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媭"
    })
    emojiPig() { };


    @ButtonProperty({
      name: "cow",
      description: "Will replace :cow: with the cow emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媬"
    })
    emojiCow() { };


    @ButtonProperty({
      name: "rabbit",
      description: "Will replace :rabbit: with the rabbit emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媥"
    })
    emojiRabbit() { };


    @ButtonProperty({
      name: "tiger",
      description: "Will replace :tiger: with the tiger emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媪"
    })
    emojiTiger() { };


    @ButtonProperty({
      name: "frog",
      description: "Will replace :frog: with the frog emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媯"
    })
    emojiFrog() { };


    @ButtonProperty({
      name: "squid",
      description: "Will replace :squid: with the squid emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媰"
    })
    emojiSquid() { };


    @ButtonProperty({
      name: "2nd_place_medal",
      description: "Will replace :2nd_place_medal: with the 2nd_place_medal emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "害"
    })
    emoji2nd_place_medal() { };


    @ButtonProperty({
      name: "shrimp",
      description: "Will replace :shrimp: with the shrimp emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媲"
    })
    emojiShrimp() { };


    @ButtonProperty({
      name: "see_no_evil",
      description: "Will replace :see_no_evil: with the see_no_evil emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媵"
    })
    emojiSee_no_evil() { };


    @ButtonProperty({
      name: "lion",
      description: "Will replace :lion: with the lion emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媫"
    })
    emojiLion() { };


    @ButtonProperty({
      name: "monkey_face",
      description: "Will replace :monkey_face: with the monkey_face emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媳"
    })
    emojiMonkey_face() { };


    @ButtonProperty({
      name: "speak_no_evil",
      description: "Will replace :speak_no_evil: with the speak_no_evil emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "媷"
    })
    emojiSpeak_no_evil() { };


    @ButtonProperty({
      name: "drum",
      description: "Will replace :drum: with the drum emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "寀"
    })
    emojiDrum() { };


    @ButtonProperty({
      name: "musical_keyboard",
      description: "Will replace :musical_keyboard: with the musical_keyboard emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "宿"
    })
    emojiMusical_keyboard() { };
    @ButtonProperty({
      name: "mc_wooden_pickaxe",
      description: "Will replace :mc_wooden_pickaxe: with the mc_wooden_pickaxe emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "属"
    })
    emojiMc_wooden_pickaxe() { };


    @ButtonProperty({
      name: "mc_flint_and_steel",
      description: "Will replace :mc_flint_and_steel: with the mc_flint_and_steel emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "層"
    })
    emojiMc_flint_and_steel() { };


    @ButtonProperty({
      name: "mc_shears",
      description: "Will replace :mc_shears: with the mc_shears emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "履"
    })
    emojiMc_shears() { };


    @ButtonProperty({
      name: "mc_fishing_rod",
      description: "Will replace :mc_fishing_rod: with the mc_fishing_rod emoji",
      category: "Emojis",
      subcategory: "Preview Emojis",
      placeholder: "屣"
    })
    emojiMc_fishing_rod() { };
    
  // ! Gardens

  @SwitchProperty({
    name: "Visitor Alert",
    description: "Shows a warning on your screen when a visitor joins your garden",
    category: "Gardens",
    subcategory: "General",
  })
  gardenVisitorAlert = false;

  // ! Party

  @SwitchProperty({
    name: "Auto party accept",
    description: "Will auto accept any party invite sent to you",
    category: "Party",
    subcategory: "General",
  })
  partyAccept = false;

  @SwitchProperty({
    name: "Frag bot",
    description: "Turns your account into a frag bot",
    category: "Party",
    subcategory: "General",
  })
  partyFragBot = false;

  // ! Chat

  @SwitchProperty({
    name: "Anti GEXP",
    description: "Hides the gexp messages when playing skyblock",
    category: "Chat",
    subcategory: "General",
  })
  chatAntiGexp = false;

  @SwitchProperty({
    name: "Anti MVP+/++ Join Messages",
    description: "Hides the MVP+/++ lobby join messages from showing up in your chat",
    category: "Chat",
    subcategory: "General",
  })
  chatAntiMVPPlusPlus = false;

  @SwitchProperty({
    name: "Anti Hype Messages",
    description: "Hides the max hype messages from showing up in your chat",
    category: "Chat",
    subcategory: "General",
  })
  chatAntiHypeLimit = false;

  @SwitchProperty({
    name: "Anti Combo",
    description: "A settings that makes it so u cant be comboed and it will auto combo for u (hides the combo messages from the grandma wolf)",
    category: "Chat",
    subcategory: "General",
  })
  chatAntiCombo = false;

  @SliderProperty({
    name: "Anti Non",
    description: "Hidding messages from a player under a set skyblock level (needs skyblock levels in chat on)",
    category: "Chat",
    subcategory: "General",
    min: 0,
    max: 400
  })
  chatAntiNon = 20;

  @SwitchProperty({
    name: "Anti SBE",
    description: "Hidding any message containing [SBE] in it",
    category: "Chat",
    subcategory: "General",
  })
  chatAntiSBE = false;

  @SwitchProperty({
    name: "Coop Chat Ping",
    description: "Plays the ding sound when someone types in coop chat",
    category: "Chat",
    subcategory: "General",
  })
  chatCoopPing = false;

  @SwitchProperty({
    name: "Cyber Bully",
    description: "&n&4Usage of this may result in a mute! Use at your own risk\n&rWill post peoples death messages in all and party chat",
    category: "Chat",
    subcategory: "General",
  })
  chatCyberBully = false;

  @SwitchProperty({
    name: "Anti Tip",
    description: "Hides auto tip msgs",
    category: "Chat",
    subcategory: "General",
  })
  chatAntiTip = false;

  @SwitchProperty({
    name: "Wiki Swapper",
    description: "Swaps out the hypixel wiki with the fandom wiki when using /wiki or /wikithis",
    category: "Chat",
    subcategory: "General",
  })
  chatWikiSwapper = false;

  @SwitchProperty({
    name: "Anti Mystery Box",
    description: "Hides messages about the stupid mystery box",
    category: "Chat",
    subcategory: "General",
  })
  chatAntiMysteryBox = false;

  @SwitchProperty({
    name: "Anti Profile ID",
    description: "Hides the profile id messages",
    category: "Chat",
    subcategory: "General",
  })
  chatAntiProfile = false;

  // ! QOL

  @SwitchProperty({
    name: "Server Joiner",
    description: "Automatically joins a server when you open minecraft",
    category: "QOL",
    subcategory: "General",
  })
  qolServerJoiner = false;

  @TextProperty({
    name: 'Server IP',
    description: 'Server IP to join when opening minecraft',
    category: 'QOL',
    subcategory: 'General',
    placeholder: 'play.hypixel.net',
  })
  qolServerIP = 'play.hypixel.net';

  @SwitchProperty({
    name: "Skyblock Joiner",
    description: "Automatically joins skyblock when u join hypixel (needs guild motd to work)",
    category: "QOL",
    subcategory: "General",
  })
  qolSkyblockJoiner = false;

  // ! Misc

  @SwitchProperty({
    name: "Arrow Warning",
    description: "Shows a warning on your screen when you have 50 or 10 arrows left",
    category: "Misc",
    subcategory: "General",
  })
  miscArrowWarning = false;

  @SwitchProperty({
    name: "Gift Waypoints",
    description: "Waypoints to all the possible spawn locations for gifts in the jerry's workshop event",
    category: "Misc",
    subcategory: "General",
  })
  miscGiftWaypoints = false;

  @SwitchProperty({
    name: "Leave on throw",
    description: "Will auto post a message about how you are throwing into party chat then will leave the party",
    category: "Misc",
    subcategory: "Funny"
  })
  miscLeaveOnThrow = true;

  @SwitchProperty({
    name: "Ban on throw",
    description: "Will give a fake ban when you die",
    category: "Misc",
    subcategory: "Funny"
  })
  miscBanOnThrow = true;

  @SwitchProperty({
    name: "Crash on throw",
    description: "Will crash your game when you die",
    category: "Misc",
    subcategory: "Funny"
  })
  miscCrashOnThrow = false;

  @SelectorProperty({
    name: "Ban Length",
    description: "How long do you want the ban to be",
    category: "Misc",
    subcategory: "Funny",
    options: ['7d', '14d', '30d', '90d', '180d', '360d', 'Perm'],
  })
  miscBanLength = 3;

  @SelectorProperty({
    name: "Ban Type",
    description: "What ban reason do you want",
    category: "Misc",
    subcategory: "Funny",
    options: ['Cheating', 'Boosting', 'Chat Infraction', 'Username'],
  })
  miscBanType = 1;

  // ! Extra Info

  @ButtonProperty({
    name: "&6&lVersion",
    description: `Current Module Version ${currentVersion}`,
    category: "Extra Info",
    subcategory: "Info",
    placeholder: " "
  })
  creditsVersion() { };

  @ButtonProperty({
    name: "&b&lDeveloper",
    description: "Made by Udderly_cool or Kathund#2004 - Dm me on discord if you have any issues or suggestions",
    category: "Extra Info",
    subcategory: "Info",
    placeholder: " "
  })
  infoDev() { };

  @ButtonProperty({
    name: "&b&lZickles",
    description: "Dumb ass who made a pr (Made ban on throw)",
    category: "Extra Info",
    subcategory: "Info",
    placeholder: " "
  })
  infoZickles() { };

  @ButtonProperty({
    name: "Auto Welcome Back",
    description: "A Simple Chat triggers module that allows you to welcome guild members back when they join and is highly customizable",
    category: "Extra Info",
    subcategory: "Other Projects",
    placeholder: "import"
  })
  otherProjectsAutoWelcomeBack() {
    ChatLib.command(`ct import AutoWelcomeBack`);
  };

  // ? Change Logs

  @ButtonProperty({
    name: "v1.4.0",
    description: "View the change log for v1.4.0",
    category: "Change Log",
    subcategory: "Change Log",
    placeholder: "Show In Chat",
  })
  changeLog1_4_0() {
    helperFunctions.viewChangeLog1_4_0();
  };

  @ButtonProperty({
    name: "v1.3.1",
    description: "View the change log for v1.3.1",
    category: "Change Log",
    subcategory: "Change Log",
    placeholder: "Show In Chat",
  })
  changeLog1_3_1() {
    helperFunctions.viewChangeLog1_3_1();
  };

  @ButtonProperty({
    name: "v1.3.0",
    description: "View the change log for v1.3.0",
    category: "Change Log",
    subcategory: "Change Log",
    placeholder: "Show In Chat",
  })
  changeLog1_3_0() {
    helperFunctions.viewChangeLog1_3_0();
  };

  @ButtonProperty({
    name: "v1.2.0",
    description: "View the change log for v1.2.0",
    category: "Change Log",
    subcategory: "Change Log",
    placeholder: "Show In Chat",
  })
  changeLog1_2_0() {
    helperFunctions.viewChangeLog1_2_0();
  };

  @ButtonProperty({
    name: "v1.1.2",
    description: "View the change log for v1.1.2",
    category: "Change Log",
    subcategory: "Change Log",
    placeholder: "Show In Chat",
  })
  changeLog1_1_2() {
    helperFunctions.viewChangeLog1_1_2();
  };

  @ButtonProperty({
    name: "v1.1.1",
    description: "View the change log for v1.1.1",
    category: "Change Log",
    subcategory: "Change Log",
    placeholder: "Show In Chat",
  })
  changeLog1_1_1() {
    helperFunctions.viewChangeLog1_1_1();
  };

  @ButtonProperty({
    name: "v1.1.0",
    description: "View the change log for v1.1.0",
    category: "Change Log",
    subcategory: "Change Log",
    placeholder: "Show In Chat",
  })
  changeLog1_1_0() {
    helperFunctions.viewChangeLog1_1_0();
  };

  @ButtonProperty({
    name: "v1.0.0",
    description: "View the change log for v1.0.0",
    category: "Change Log",
    subcategory: "Change Log",
    placeholder: "Show In Chat",
  })
  changeLog1_0_0() {
    helperFunctions.viewChangeLog1_0_0();
  };

  constructor() {
    this.initialize(this);
  }
}

export default new Settings;
