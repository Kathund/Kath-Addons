import * as helperFunction from "../helperFunctions.js";
import Settings from "../settings";
const config = Settings

import { Promise } from '../../PromiseV2';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// ! GUI
register("command", () => config.openGUI()).setName("kath");

// ! Limbo
register("command", () => ChatLib.say('§')).setName("limbo");

// ! Fast Transfer
register("command", (...args) => {
  try {
    if (args.length === 0) {
      throw new Error("You cannot transfer to no one");
    } else if (args[0] === Player.getName()) {
      throw new Error("You cannot transfer to yourself");
    } else {
      ChatLib.chat(`/p transfer ${args[0]}`);
    }
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}).setName("pt");

// ! Wiki Search
register("command", (...args) => {
  try {
    let url = "";

    if (config.chatWikiSwapper == true) {
      url = `https://hypixel-skyblock.fandom.com/wiki/Special:Search?query=${args.join("+")}`;
    } else if (config.chatWikiSwapper == false) {
      url = `https://wiki.hypixel.net/index.php?search=${args.join("+")}`;
    }

    const wikiMessage = new Message(
      new TextComponent(`Searched for ${args.join(" ")} using ${config.chatWikiSwapper ? "Fandom Wiki" : "Official Wiki"}`).setClick("open_url", url).setHover("show_text", url)
    );
    ChatLib.chat(wikiMessage)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}).setName("wikisearch");


register("command", () => {
  try {
    var banID = "";
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (var i = 0; i < 8; i++) {
      banID += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    delay(800).then(() => {
      helperFunction.data.fakeBanned = true;
      helperFunction.data.banID = banID;
      helperFunction.data.banTimestamp = Math.floor(Date.now() / 1000)
      helperFunction.data.save()

      const ChatComponentText = Java.type("net.minecraft.util.ChatComponentText");
      if (config.miscBanType === 0) {
        if (config.miscBanLength === 0) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f6d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 1) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f13d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 2) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f29d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 3) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f89d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 4) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f179d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 5) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f359d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 6) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are permanently banned from this server!\n§r\n§7Reason: §fCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        }
      } else if (config.miscBanType === 1) {
        if (config.miscBanLength === 0) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f6d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 1) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f13d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 2) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f29d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 3) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f89d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 4) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f179d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 5) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f359d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 6) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are permanently banned from this server!\n§r\n§7Reason: §fBoosting detected on one or multiple Skyblock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        }
      } else if (config.miscBanType === 2) {
        if (config.miscBanLength === 0) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f6d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 1) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f13d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 2) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f29d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 3) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f89d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 4) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f179d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 5) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are temporarily banned for §f359d 23h 59m 59s§c from this server!\n§r\n§7Reason: §fExtreme Chat Infraction.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        } else if (config.miscBanLength === 6) {
          Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are permanently banned from this server!\n§r\n§7Reason: §fExtreme Chat Infraction. \n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n§r\n§7Ban ID: §f#${banID}\n§7Sharing your Ban ID may affect the processing of your appeal!`))
        }
      } else if (config.miscBanType === 3) {
        Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(`§cYou are currently blocked from joining this server!\n§r\n§7Reason: §fYour username, ${Player.getName()}, is not allowed on the server and is breaking our rules.\n§7Find out more: §b§nhttps://www.hypixel.net/rules\n§r\n§cPlease change your Minecraft username before trying to join again.\n§cIf you believe your name has been falsely blocked, contact §b§nhttps://support.hypixel.net`))
      }
    })
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}).setName("getbanned");


// ! Discord commands
// ? off
register("command", () => {
  helperFunction.data.discordWarningMessage = false
  helperFunction.data.save();
  ChatLib.chat(`&dkath &6>&7 Turned&l&c off&r&7 discord warning message`)
}).setName("discordwarningoff");

// ? on 
register("command", () => {
  helperFunction.data.discordWarningMessage = true
  helperFunction.data.save();
  ChatLib.chat(`&dkath &6>&7 Turned&l&a on&r&7 the discord warning message`)
}).setName("discordwarningon");

// ! limbo command hider
register("chat", (e) => cancel(e)).setCriteria(/^Illegal characters in chat$/)

register('chat', (event) => {
  try {
    var message = helperFunction.removeColors((ChatLib.getChatMessage(event)).toString());
    if (message.includes(':100:') ||
      message.includes(':grin:') ||
      message.includes(':blush:') ||
      message.includes(':relieved:') ||
      message.includes(':relaxed:') ||
      message.includes(':laughing:') ||
      message.includes(':smiley:') ||
      message.includes(':joy:') ||
      message.includes(':innocent:') ||
      message.includes(':smile:') ||
      message.includes(':wink:') ||
      message.includes(':1234:') ||
      message.includes(':grinning:') ||
      message.includes(':slightly_smiling_face:') ||
      message.includes(':sweat_smile:') ||
      message.includes(':rofl:') ||
      message.includes(':grimacing:') ||
      message.includes(':stuck_out_tongue:') ||
      message.includes(':cowboy_hat_face:') ||
      message.includes(':roll_eyes:') ||
      message.includes(':upside_down_face:') ||
      message.includes(':heart_eyes:') ||
      message.includes(':stuck_out_tongue_closed_eyes:') ||
      message.includes(':yum:') ||
      message.includes(':worried:') ||
      message.includes(':frowning_face:') ||
      message.includes(':open_mouth:') ||
      message.includes(':persevere:') ||
      message.includes(':kissing_smiling_eyes:') ||
      message.includes(':hushed:') ||
      message.includes(':kissing:') ||
      message.includes(':kissing_heart:') ||
      message.includes(':sob:') ||
      message.includes(':kissing_closed_eyes:') ||
      message.includes(':mask:') ||
      message.includes(':face_with_thermometer:') ||
      message.includes(':face_with_head_bandage:') ||
      message.includes(':imp:') ||
      message.includes(':japanese_goblin:') ||
      message.includes(':smiley_cat:') ||
      message.includes(':stuck_out_tongue_winking_eye:') ||
      message.includes(':smile_cat:') ||
      message.includes(':smirk_cat:') ||
      message.includes(':sunglasses:') ||
      message.includes(':nerd_face:') ||
      message.includes(':clown_face:') ||
      message.includes(':hugs:') ||
      message.includes(':smirk:') ||
      message.includes(':no_mouth:') ||
      message.includes(':money_mouth_face:') ||
      message.includes(':neutral_face:') ||
      message.includes(':expressionless:') ||
      message.includes(':unamused:') ||
      message.includes(':open_hands:') ||
      message.includes(':fist:') ||
      message.includes(':metal:') ||
      message.includes(':point_left:') ||
      message.includes(':thinking:') ||
      message.includes(':lying_face:') ||
      message.includes(':flushed:') ||
      message.includes(':vulcan_salute:') ||
      message.includes(':disappointed:') ||
      message.includes(':pensive:') ||
      message.includes(':confused:') ||
      message.includes(':rage:') ||
      message.includes(':angry:') ||
      message.includes(':slightly_frowning_face:') ||
      message.includes(':tired_face:') ||
      message.includes(':scream:') ||
      message.includes(':confounded:') ||
      message.includes(':fearful:') ||
      message.includes(':weary:') ||
      message.includes(':selfie:') ||
      message.includes(':ear:') ||
      message.includes(':eyes:') ||
      message.includes(':dark_sunglasses:') ||
      message.includes(':lipstick:') ||
      message.includes(':dress:') ||
      message.includes(':sandal:') ||
      message.includes(':rescue_worker_helmet:') ||
      message.includes(':womans_hat:') ||
      message.includes(':mortar_board:') ||
      message.includes(':ring:') ||
      message.includes(':cat:') ||
      message.includes(':mouse:') ||
      message.includes(':triumph:') ||
      message.includes(':cry:') ||
      message.includes(':cold_sweat:') ||
      message.includes(':disappointed_relieved:') ||
      message.includes(':frowning:') ||
      message.includes(':sleepy:') ||
      message.includes(':hamster:') ||
      message.includes(':anguished:') ||
      message.includes(':drooling_face:') ||
      message.includes(':koala:') ||
      message.includes(':sweat:') ||
      message.includes(':panda_face:') ||
      message.includes(':penguin:') ||
      message.includes(':astonished:') ||
      message.includes(':boar:') ||
      message.includes(':beetle:') ||
      message.includes(':hatching_chick:') ||
      message.includes(':tiger2:') ||
      message.includes(':snail:') ||
      message.includes(':zipper_mouth_face:') ||
      message.includes(':crab:') ||
      message.includes(':turtle:') ||
      message.includes(':crocodile:') ||
      message.includes(':cow2:') ||
      message.includes(':dove:') ||
      message.includes(':rabbit2:') ||
      message.includes(':turkey:') ||
      message.includes(':dizzy_face:') ||
      message.includes(':shamrock:') ||
      message.includes(':herb:') ||
      message.includes(':rose:') ||
      message.includes(':sneezing_face:') ||
      message.includes(':nauseated_face:') ||
      message.includes(':sleeping:') ||
      message.includes(':poop:') ||
      message.includes(':zzz:') ||
      message.includes(':smiling_imp:') ||
      message.includes(':blossom:') ||
      message.includes(':shell:') ||
      message.includes(':jack_o_lantern:') ||
      message.includes(':full_moon:') ||
      message.includes(':waning_gibbous_moon:') ||
      message.includes(':waning_crescent_moon:') ||
      message.includes(':waxing_crescent_moon:') ||
      message.includes(':first_quarter_moon:') ||
      message.includes(':star:') ||
      message.includes(':star2:') ||
      message.includes(':sun_behind_small_cloud:') ||
      message.includes(':zap:') ||
      message.includes(':cloud_with_rain:') ||
      message.includes(':crescent_moon:') ||
      message.includes(':cloud_with_snow:') ||
      message.includes(':snowman:') ||
      message.includes(':skull:') ||
      message.includes(':japanese_ogre:') ||
      message.includes(':robot:') ||
      message.includes(':alien:') ||
      message.includes(':umbrella:') ||
      message.includes(':ghost:') ||
      message.includes(':joy_cat:') ||
      message.includes(':scream_cat:') ||
      message.includes(':kissing_cat:') ||
      message.includes(':crying_cat_face:') ||
      message.includes(':pouting_cat:') ||
      message.includes(':heart_eyes_cat:') ||
      message.includes(':raised_hands:') ||
      message.includes(':wave:') ||
      message.includes(':call_me_hand:') ||
      message.includes(':hot_pepper:') ||
      message.includes(':clap:') ||
      message.includes(':facepunch:') ||
      message.includes(':fist_left:') ||
      message.includes(':muscle:') ||
      message.includes(':raised_hand:') ||
      message.includes(':fist_right:') ||
      message.includes(':point_down:') ||
      message.includes(':pray:') ||
      message.includes(':cheese:') ||
      message.includes(':handshake:') ||
      message.includes(':v:') ||
      message.includes(':poultry_leg:') ||
      message.includes(':bread:') ||
      message.includes(':fries:') ||
      message.includes(':stuffed_flatbread:') ||
      message.includes(':ok_hand:') ||
      message.includes(':raised_hand_with_fingers_splayed:') ||
      message.includes(':point_up:') ||
      message.includes(':raised_back_of_hand:') ||
      message.includes(':point_right:') ||
      message.includes(':crossed_fingers:') ||
      message.includes(':curry:') ||
      message.includes(':point_up_2:') ||
      message.includes(':writing_hand:') ||
      message.includes(':nose:') ||
      message.includes(':tshirt:') ||
      message.includes(':eye:') ||
      message.includes(':womans_clothes:') ||
      message.includes(':necktie:') ||
      message.includes(':kimono:') ||
      message.includes(':custard:') ||
      message.includes(':jeans:') ||
      message.includes(':ramen:') ||
      message.includes(':footprints:') ||
      message.includes(':high_heel:') ||
      message.includes(':boot:') ||
      message.includes(':athletic_shoe:') ||
      message.includes(':mans_shoe:') ||
      message.includes(':tophat:') ||
      message.includes(':crown:') ||
      message.includes(':eyeglasses:') ||
      message.includes(':exploding_head:') ||
      message.includes(':basketball:') ||
      message.includes(':baseball:') ||
      message.includes(':school_satchel:') ||
      message.includes(':briefcase:') ||
      message.includes(':rugby_football:') ||
      message.includes(':pouch:') ||
      message.includes(':closed_umbrella:') ||
      message.includes(':goal_net:') ||
      message.includes(':handbag:') ||
      message.includes(':dog:') ||
      message.includes(':purse:') ||
      message.includes(':bear:') ||
      message.includes(':fox_face:') ||
      message.includes(':pig_nose:') ||
      message.includes(':bow_and_arrow:') ||
      message.includes(':pig:') ||
      message.includes(':cow:') ||
      message.includes(':rabbit:') ||
      message.includes(':tiger:') ||
      message.includes(':frog:') ||
      message.includes(':squid:') ||
      message.includes(':2nd_place_medal:') ||
      message.includes(':shrimp:') ||
      message.includes(':see_no_evil:') ||
      message.includes(':lion:') ||
      message.includes(':monkey_face:') ||
      message.includes(':speak_no_evil:') ||
      message.includes(':drum:') ||
      message.includes(':musical_keyboard:') ||
      message.includes(':ant:') ||
      message.includes(':octopus:') ||
      message.includes(':duck:') ||
      message.includes(':hatched_chick:') ||
      message.includes(':game_die:') ||
      message.includes(':chicken:') ||
      message.includes(':gorilla:') ||
      message.includes(':heart:') ||
      message.includes(':hear_no_evil:') ||
      message.includes(':horse:') ||
      message.includes(':honeybee:') ||
      message.includes(':eagle:') ||
      message.includes(':owl:') ||
      message.includes(':four:') ||
      message.includes(':five:') ||
      message.includes(':snake:') ||
      message.includes(':bird:') ||
      message.includes(':monkey:') ||
      message.includes(':baby_chick:') ||
      message.includes(':bug:') ||
      message.includes(':butterfly:') ||
      message.includes(':dolphin:') ||
      message.includes(':vertical_traffic_light:') ||
      message.includes(':wolf:') ||
      message.includes(':asterisk:') ||
      message.includes(':whale:') ||
      message.includes(':whale2:') ||
      message.includes(':bat:') ||
      message.includes(':blowfish:') ||
      message.includes(':tropical_fish:') ||
      message.includes(':unicorn:') ||
      message.includes(':sunrise_over_mountains:') ||
      message.includes(':spider:') ||
      message.includes(':ox:') ||
      message.includes(':elephant:') ||
      message.includes(':night_with_stars:') ||
      message.includes(':camel:') ||
      message.includes(':water_buffalo:') ||
      message.includes(':desert:') ||
      message.includes(':dromedary_camel:') ||
      message.includes(':rhinoceros:') ||
      message.includes(':pig2:') ||
      message.includes(':desktop_computer:') ||
      message.includes(':racehorse:') ||
      message.includes(':scorpion:') ||
      message.includes(':mc_planks:') ||
      message.includes(':mouse2:') ||
      message.includes(':mc_dirt:') ||
      message.includes(':lizard:') ||
      message.includes(':mc_red_sand:') ||
      message.includes(':fish:') ||
      message.includes(':mc_quartz_ore:') ||
      message.includes(':shark:') ||
      message.includes(':goat:') ||
      message.includes(':deer:') ||
      message.includes(':leopard:') ||
      message.includes(':mc_gold_block:') ||
      message.includes(':ram:') ||
      message.includes(':mc_iron_block:') ||
      message.includes(':sheep:') ||
      message.includes(':rat:') ||
      message.includes(':dog2:') ||
      message.includes(':mc_stone_brick:') ||
      message.includes(':dragon_face:') ||
      message.includes(':paw_prints:') ||
      message.includes(':rooster:') ||
      message.includes(':poodle:') ||
      message.includes(':cat2:') ||
      message.includes(':dragon:') ||
      message.includes(':chipmunk:') ||
      message.includes(':cactus:') ||
      message.includes(':palm_tree:') ||
      message.includes(':maple_leaf:') ||
      message.includes(':evergreen_tree:') ||
      message.includes(':ear_of_rice:') ||
      message.includes(':mc_gravel:') ||
      message.includes(':christmas_tree:') ||
      message.includes(':deciduous_tree:') ||
      message.includes(':seedling:') ||
      message.includes(':bamboo:') ||
      message.includes(':four_leaf_clover:') ||
      message.includes(':mc_magenta_wool:') ||
      message.includes(':leaves:') ||
      message.includes(':hibiscus:') ||
      message.includes(':tanabata_tree:') ||
      message.includes(':fallen_leaf:') ||
      message.includes(':sunflower:') ||
      message.includes(':wilted_flower:') ||
      message.includes(':tulip:') ||
      message.includes(':mc_red_wool:') ||
      message.includes(':mc_beacon:') ||
      message.includes(':cherry_blossom:') ||
      message.includes(':mc_portal:') ||
      message.includes(':spider_web:') ||
      message.includes(':bouquet:') ||
      message.includes(':mc_blaze:') ||
      message.includes(':chestnut:') ||
      message.includes(':mushroom:') ||
      message.includes(':earth_americas:') ||
      message.includes(':earth_asia:') ||
      message.includes(':earth_africa:') ||
      message.includes(':last_quarter_moon:') ||
      message.includes(':new_moon:') ||
      message.includes(':new_moon_with_face:') ||
      message.includes(':waxing_gibbous_moon:') ||
      message.includes(':mc_wither:') ||
      message.includes(':sparkles:') ||
      message.includes(':full_moon_with_face:') ||
      message.includes(':first_quarter_moon_with_face:') ||
      message.includes(':cloud_with_lightning_and_rain:') ||
      message.includes(':sun_with_face:') ||
      message.includes(':cloud:') ||
      message.includes(':sun_behind_rain_cloud:') ||
      message.includes(':sun_behind_large_cloud:') ||
      message.includes(':dizzy:') ||
      message.includes(':last_quarter_moon_with_face:') ||
      message.includes(':snowflake:') ||
      message.includes(':comet:') ||
      message.includes(':snowman_with_snow:') ||
      message.includes(':sunny:') ||
      message.includes(':fire:') ||
      message.includes(':cloud_with_lightning:') ||
      message.includes(':dash:') ||
      message.includes(':wind_face:') ||
      message.includes(':fog:') ||
      message.includes(':droplet:') ||
      message.includes(':open_umbrella:') ||
      message.includes(':tornado:') ||
      message.includes(':partly_sunny:') ||
      message.includes(':ocean:') ||
      message.includes(':green_apple:') ||
      message.includes(':boom:') ||
      message.includes(':pear:') ||
      message.includes(':tangerine:') ||
      message.includes(':grapes:') ||
      message.includes(':strawberry:') ||
      message.includes(':apple:') ||
      message.includes(':melon:') ||
      message.includes(':lemon:') ||
      message.includes(':pineapple:') ||
      message.includes(':kiwi_fruit:') ||
      message.includes(':watermelon:') ||
      message.includes(':carrot:') ||
      message.includes(':avocado:') ||
      message.includes(':potato:') ||
      message.includes(':corn:') ||
      message.includes(':sweet_potato:') ||
      message.includes(':peanuts:') ||
      message.includes(':croissant:') ||
      message.includes(':egg:') ||
      message.includes(':pancakes:') ||
      message.includes(':baguette_bread:') ||
      message.includes(':fried_egg:') ||
      message.includes(':bacon:') ||
      message.includes(':honey_pot:') ||
      message.includes(':pizza:') ||
      message.includes(':fried_shrimp:') ||
      message.includes(':taco:') ||
      message.includes(':burrito:') ||
      message.includes(':shallow_pan_of_food:') ||
      message.includes(':meat_on_bone:') ||
      message.includes(':stew:') ||
      message.includes(':fish_cake:') ||
      message.includes(':sushi:') ||
      message.includes(':rice:') ||
      message.includes(':hamburger:') ||
      message.includes(':rice_cracker:') ||
      message.includes(':dango:') ||
      message.includes(':shaved_ice:') ||
      message.includes(':spaghetti:') ||
      message.includes(':green_salad:') ||
      message.includes(':icecream:') ||
      message.includes(':birthday:') ||
      message.includes(':cake:') ||
      message.includes(':bento:') ||
      message.includes(':candy:') ||
      message.includes(':lollipop:') ||
      message.includes(':popcorn:') ||
      message.includes(':hotdog:') ||
      message.includes(':doughnut:') ||
      message.includes(':rice_ball:') ||
      message.includes(':cookie:') ||
      message.includes(':oden:') ||
      message.includes(':milk_glass:') ||
      message.includes(':chocolate_bar:') ||
      message.includes(':champagne:') ||
      message.includes(':tropical_drink:') ||
      message.includes(':ice_cream:') ||
      message.includes(':tea:') ||
      message.includes(':crazy_face:') ||
      message.includes(':face_with_monocle:') ||
      message.includes(':sake:') ||
      message.includes(':coffee:') ||
      message.includes(':face_with_raised_eyebrow:') ||
      message.includes(':shushing_face:') ||
      message.includes(':face_with_hand_over_mouth:') ||
      message.includes(':soccer:') ||
      message.includes(':star_struck:') ||
      message.includes(':tennis:') ||
      message.includes(':8ball:') ||
      message.includes(':football:') ||
      message.includes(':volleyball:') ||
      message.includes(':ping_pong:') ||
      message.includes(':badminton:') ||
      message.includes(':ice_hockey:') ||
      message.includes(':golf:') ||
      message.includes(':cricket:') ||
      message.includes(':ice_skate:') ||
      message.includes(':trophy:') ||
      message.includes(':boxing_glove:') ||
      message.includes(':martial_arts_uniform:') ||
      message.includes(':field_hockey:') ||
      message.includes(':1st_place_medal:') ||
      message.includes(':medal_military:') ||
      message.includes(':rosette:') ||
      message.includes(':ticket:') ||
      message.includes(':3rd_place_medal:') ||
      message.includes(':reminder_ribbon:') ||
      message.includes(':performing_arts:') ||
      message.includes(':art:') ||
      message.includes(':microphone:') ||
      message.includes(':headphones:') ||
      message.includes(':medal_sports:') ||
      message.includes(':guitar:') ||
      message.includes(':trumpet:') ||
      message.includes(':musical_score:') ||
      message.includes(':clapper:') ||
      message.includes(':circus_tent:') ||
      message.includes(':dart:') ||
      message.includes(':tickets:') ||
      message.includes(':saxophone:') ||
      message.includes(':video_game:') ||
      message.includes(':violin:') ||
      message.includes(':bowling:') ||
      message.includes(':space_invader:') ||
      message.includes(':cool:') ||
      message.includes(':up:') ||
      message.includes(':ok:') ||
      message.includes(':slot_machine:') ||
      message.includes(':free:') ||
      message.includes(':broken_heart:') ||
      message.includes(':zero:') ||
      message.includes(':one:') ||
      message.includes(':new:') ||
      message.includes(':two:') ||
      message.includes(':eight:') ||
      message.includes(':seven:') ||
      message.includes(':nine:') ||
      message.includes(':keycap_ten:') ||
      message.includes(':rotating_light:') ||
      message.includes(':airplane:') ||
      message.includes(':three:') ||
      message.includes(':artificial_satellite:') ||
      message.includes(':six:') ||
      message.includes(':tokyo_tower:') ||
      message.includes(':rocket:') ||
      message.includes(':anchor:') ||
      message.includes(':traffic_light:') ||
      message.includes(':construction:') ||
      message.includes(':checkered_flag:') ||
      message.includes(':mountain_snow:') ||
      message.includes(':volcano:') ||
      message.includes(':mount_fuji:') ||
      message.includes(':fountain:') ||
      message.includes(':mountain:') ||
      message.includes(':tent:') ||
      message.includes(':railway_track:') ||
      message.includes(':sunrise:') ||
      message.includes(':beach_umbrella:') ||
      message.includes(':desert_island:') ||
      message.includes(':cityscape:') ||
      message.includes(':city_sunrise:') ||
      message.includes(':watch:') ||
      message.includes(':city_sunset:') ||
      message.includes(':phone:') ||
      message.includes(':keyboard:') ||
      message.includes(':mc_podzol:') ||
      message.includes(':bridge_at_night:') ||
      message.includes(':mc_snow_grass:') ||
      message.includes(':computer:') ||
      message.includes(':printer:') ||
      message.includes(':mc_soulsand:') ||
      message.includes(':mc_sand:') ||
      message.includes(':mc_netherbrick:') ||
      message.includes(':mc_ice:') ||
      message.includes(':mc_water:') ||
      message.includes(':mc_grass:') ||
      message.includes(':mc_mycellium:') ||
      message.includes(':mc_emerald_block:') ||
      message.includes(':mc_netherrack:') ||
      message.includes(':mc_diamond_block:') ||
      message.includes(':mc_ender_portal:') ||
      message.includes(':mc_lava:') ||
      message.includes(':mc_redstone_ore:') ||
      message.includes(':mc_emerald_ore:') ||
      message.includes(':mc_iron_ore:') ||
      message.includes(':mc_diamond_ore:') ||
      message.includes(':mc_gold_ore:') ||
      message.includes(':mc_stone:') ||
      message.includes(':mc_quartz:') ||
      message.includes(':mc_brick:') ||
      message.includes(':mc_cobblestone:') ||
      message.includes(':mc_piston:') ||
      message.includes(':mc_sticky_piston:') ||
      message.includes(':mc_bedrock:') ||
      message.includes(':mc_redstone_lamp:') ||
      message.includes(':mc_tnt:') ||
      message.includes(':mc_redstone_block:') ||
      message.includes(':mc_jukebox:') ||
      message.includes(':mc_prismarine:') ||
      message.includes(':mc_hay:') ||
      message.includes(':mc_glowstone:') ||
      message.includes(':mc_dropper:') ||
      message.includes(':mc_lapis_lazuli_block:') ||
      message.includes(':mc_sponge:') ||
      message.includes(':mc_command_block:') ||
      message.includes(':mc_black_wool:') ||
      message.includes(':mc_blue_wool:') ||
      message.includes(':mc_cyan_wool:') ||
      message.includes(':mc_gray_wool:') ||
      message.includes(':mc_lapis_lazuli_ore:') ||
      message.includes(':mc_light_blue_wool:') ||
      message.includes(':mc_brown_wool:') ||
      message.includes(':mc_orange_wool:') ||
      message.includes(':mc_green_wool:') ||
      message.includes(':mc_purple_wool:') ||
      message.includes(':mc_light_gray_wool:') ||
      message.includes(':mc_yellow_wool:') ||
      message.includes(':mc_snow_block:') ||
      message.includes(':mc_lime_wool:') ||
      message.includes(':mc_obsidian:') ||
      message.includes(':mc_red_sandstone:') ||
      message.includes(':mc_endstone:') ||
      message.includes(':mc_pink_wool:') ||
      message.includes(':mc_white_wool:') ||
      message.includes(':mc_bookshelf:') ||
      message.includes(':mc_coal_block:') ||
      message.includes(':mc_slime_block:') ||
      message.includes(':mc_enderchest:') ||
      message.includes(':mc_coal_ore:') ||
      message.includes(':mc_chest:') ||
      message.includes(':mc_ghast:') ||
      message.includes(':mc_cave_spider:') ||
      message.includes(':mc_zombie_pigman:') ||
      message.includes(':mc_enderman:') ||
      message.includes(':mc_magma_cube:') ||
      message.includes(':mc_chicken:') ||
      message.includes(':mc_spider:') ||
      message.includes(':mc_cow:') ||
      message.includes(':mc_sheep:') ||
      message.includes(':mc_slime:') ||
      message.includes(':mc_villager:') ||
      message.includes(':mc_iron_golem:') ||
      message.includes(':mc_pig:') ||
      message.includes(':mc_ocelot:') ||
      message.includes(':mc_squid:') ||
      message.includes(':mc_wooden_axe:') ||
      message.includes(':mc_mooshroom:') ||
      message.includes(':mc_wooden_shovel:') ||
      message.includes(':mc_bow:') ||
      message.includes(':mc_wooden_hoe:') ||
      message.includes(':mc_arrow:') ||
      message.includes(':mc_wooden_sword:') ||
      message.includes(':mc_wooden_pickaxe:') ||
      message.includes(':mc_flint_and_steel:') ||
      message.includes(':mc_shears:') ||
      message.includes(':mc_fishing_rod:')) {
      cancel(event)
      ChatLib.chat(`${helperFunction.emojis((ChatLib.getChatMessage(event)).toString())}`)
    }
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
})