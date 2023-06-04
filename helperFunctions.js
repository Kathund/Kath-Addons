import PogObject from "../PogData/index"
import Settings from "./settings";
import axios from "../axios";
const config = Settings



export const emojis = function (text) {
  try {
    console.log('before')
    console.log(text)
    text = text.replaceAll(':100:', '娀')
      .replaceAll(':grin:', '娄')
      .replaceAll(':blush:', '娍')
      .replaceAll(':relieved:', '娒')
      .replaceAll(':relaxed:', '娐')
      .replaceAll(':laughing:', '娊')
      .replaceAll(':smiley:', '娇')
      .replaceAll(':joy:', '娅')
      .replaceAll(':innocent:', '娋')
      .replaceAll(':smile:', '娈')
      .replaceAll(':wink:', '娌')
      .replaceAll(':1234:', '威')
      .replaceAll(':grinning:', '娂')
      .replaceAll(':slightly_smiling_face:', '娎')
      .replaceAll(':sweat_smile:', '娉')
      .replaceAll(':rofl:', '娆')
      .replaceAll(':grimacing:', '娃')
      .replaceAll(':stuck_out_tongue:', '娚')
      .replaceAll(':cowboy_hat_face:', '娟')
      .replaceAll(':roll_eyes:', '娦')
      .replaceAll(':upside_down_face:', '娏')
      .replaceAll(':heart_eyes:', '娓')
      .replaceAll(':stuck_out_tongue_closed_eyes:', '娙')
      .replaceAll(':yum:', '娑')
      .replaceAll(':worried:', '娫')
      .replaceAll(':frowning_face:', '娱')
      .replaceAll(':open_mouth:', '娷')
      .replaceAll(':persevere:', '娲')
      .replaceAll(':kissing_smiling_eyes:', '娖')
      .replaceAll(':hushed:', '娻')
      .replaceAll(':kissing:', '娕')
      .replaceAll(':kissing_heart:', '娔')
      .replaceAll(':sob:', '婃')
      .replaceAll(':kissing_closed_eyes:', '娗')
      .replaceAll(':mask:', '婉')
      .replaceAll(':face_with_thermometer:', '婊')
      .replaceAll(':face_with_head_bandage:', '婋')
      .replaceAll(':imp:', '婐')
      .replaceAll(':japanese_goblin:', '婒')
      .replaceAll(':smiley_cat:', '婗')
      .replaceAll(':stuck_out_tongue_winking_eye:', '娘')
      .replaceAll(':smile_cat:', '婘')
      .replaceAll(':smirk_cat:', '婛')
      .replaceAll(':sunglasses:', '娝')
      .replaceAll(':nerd_face:', '娜')
      .replaceAll(':clown_face:', '娞')
      .replaceAll(':hugs:', '娠')
      .replaceAll(':smirk:', '娡')
      .replaceAll(':no_mouth:', '娢')
      .replaceAll(':money_mouth_face:', '娛')
      .replaceAll(':neutral_face:', '娣')
      .replaceAll(':expressionless:', '娤')
      .replaceAll(':unamused:', '娥')
      .replaceAll(':open_hands:', '婮')
      .replaceAll(':fist:', '婧')
      .replaceAll(':metal:', '婹')
      .replaceAll(':point_left:', '婵')
      .replaceAll(':thinking:', '娧')
      .replaceAll(':lying_face:', '娨')
      .replaceAll(':flushed:', '娩')
      .replaceAll(':vulcan_salute:', '婻')
      .replaceAll(':disappointed:', '娪')
      .replaceAll(':pensive:', '娮')
      .replaceAll(':confused:', '娯')
      .replaceAll(':rage:', '娭')
      .replaceAll(':angry:', '娬')
      .replaceAll(':slightly_frowning_face:', '娰')
      .replaceAll(':tired_face:', '娴')
      .replaceAll(':scream:', '娸')
      .replaceAll(':confounded:', '娳')
      .replaceAll(':fearful:', '娹')
      .replaceAll(':weary:', '娵')
      .replaceAll(':selfie:', '婽')
      .replaceAll(':ear:', '媀')
      .replaceAll(':eyes:', '媃')
      .replaceAll(':dark_sunglasses:', '媞')
      .replaceAll(':lipstick:', '媋')
      .replaceAll(':dress:', '媈')
      .replaceAll(':sandal:', '媏')
      .replaceAll(':rescue_worker_helmet:', '媕')
      .replaceAll(':womans_hat:', '媓')
      .replaceAll(':mortar_board:', '媖')
      .replaceAll(':ring:', '媟')
      .replaceAll(':cat:', '媢')
      .replaceAll(':mouse:', '媣')
      .replaceAll(':triumph:', '娶')
      .replaceAll(':cry:', '娾')
      .replaceAll(':cold_sweat:', '娺')
      .replaceAll(':disappointed_relieved:', '娿')
      .replaceAll(':frowning:', '娼')
      .replaceAll(':sleepy:', '婁')
      .replaceAll(':hamster:', '媤')
      .replaceAll(':anguished:', '娽')
      .replaceAll(':drooling_face:', '婀')
      .replaceAll(':koala:', '媩')
      .replaceAll(':sweat:', '婂')
      .replaceAll(':panda_face:', '媨')
      .replaceAll(':penguin:', '媺')
      .replaceAll(':astonished:', '婅')
      .replaceAll(':boar:', '嫄')
      .replaceAll(':beetle:', '嫋')
      .replaceAll(':hatching_chick:', '媽')
      .replaceAll(':tiger2:', '嫜')
      .replaceAll(':snail:', '嫊')
      .replaceAll(':zipper_mouth_face:', '婆')
      .replaceAll(':crab:', '嫏')
      .replaceAll(':turtle:', '嫒')
      .replaceAll(':crocodile:', '嫚')
      .replaceAll(':cow2:', '嫟')
      .replaceAll(':dove:', '嫮')
      .replaceAll(':rabbit2:', '嫲')
      .replaceAll(':turkey:', '嫭')
      .replaceAll(':dizzy_face:', '婄')
      .replaceAll(':shamrock:', '嫾')
      .replaceAll(':herb:', '嫽')
      .replaceAll(':rose:', '嬈')
      .replaceAll(':sneezing_face:', '婈')
      .replaceAll(':nauseated_face:', '婇')
      .replaceAll(':sleeping:', '婌')
      .replaceAll(':poop:', '婎')
      .replaceAll(':zzz:', '婍')
      .replaceAll(':smiling_imp:', '婏')
      .replaceAll(':blossom:', '嬋')
      .replaceAll(':shell:', '嬑')
      .replaceAll(':jack_o_lantern:', '嬐')
      .replaceAll(':full_moon:', '嬖')
      .replaceAll(':waning_gibbous_moon:', '嬗')
      .replaceAll(':waning_crescent_moon:', '嬙')
      .replaceAll(':waxing_crescent_moon:', '嬛')
      .replaceAll(':first_quarter_moon:', '嬜')
      .replaceAll(':star:', '嬤')
      .replaceAll(':star2:', '嬥')
      .replaceAll(':sun_behind_small_cloud:', '嬪')
      .replaceAll(':zap:', '嬲')
      .replaceAll(':cloud_with_rain:', '嬯')
      .replaceAll(':crescent_moon:', '嬣')
      .replaceAll(':cloud_with_snow:', '嬶')
      .replaceAll(':snowman:', '嬷')
      .replaceAll(':skull:', '婓')
      .replaceAll(':japanese_ogre:', '婑')
      .replaceAll(':robot:', '婖')
      .replaceAll(':alien:', '婕')
      .replaceAll(':umbrella:', '嬾')
      .replaceAll(':ghost:', '婔')
      .replaceAll(':joy_cat:', '婙')
      .replaceAll(':scream_cat:', '婝')
      .replaceAll(':kissing_cat:', '婜')
      .replaceAll(':crying_cat_face:', '婞')
      .replaceAll(':pouting_cat:', '婟')
      .replaceAll(':heart_eyes_cat:', '婚')
      .replaceAll(':raised_hands:', '婠')
      .replaceAll(':wave:', '婢')
      .replaceAll(':call_me_hand:', '婣')
      .replaceAll(':hot_pepper:', '孕')
      .replaceAll(':clap:', '婡')
      .replaceAll(':facepunch:', '婦')
      .replaceAll(':fist_left:', '婨')
      .replaceAll(':muscle:', '婯')
      .replaceAll(':raised_hand:', '婬')
      .replaceAll(':fist_right:', '婩')
      .replaceAll(':point_down:', '婴')
      .replaceAll(':pray:', '婰')
      .replaceAll(':cheese:', '孞')
      .replaceAll(':handshake:', '婱')
      .replaceAll(':v:', '婪')
      .replaceAll(':poultry_leg:', '孢')
      .replaceAll(':bread:', '孜')
      .replaceAll(':fries:', '孧')
      .replaceAll(':stuffed_flatbread:', '孨')
      .replaceAll(':ok_hand:', '婫')
      .replaceAll(':raised_hand_with_fingers_splayed:', '婸')
      .replaceAll(':point_up:', '婲')
      .replaceAll(':raised_back_of_hand:', '婭')
      .replaceAll(':point_right:', '婶')
      .replaceAll(':crossed_fingers:', '婺')
      .replaceAll(':curry:', '孵')
      .replaceAll(':point_up_2:', '婳')
      .replaceAll(':writing_hand:', '婼')
      .replaceAll(':nose:', '媁')
      .replaceAll(':tshirt:', '媅')
      .replaceAll(':eye:', '媂')
      .replaceAll(':womans_clothes:', '媄')
      .replaceAll(':necktie:', '媇')
      .replaceAll(':kimono:', '媊')
      .replaceAll(':custard:', '宀')
      .replaceAll(':jeans:', '媆')
      .replaceAll(':ramen:', '孰')
      .replaceAll(':footprints:', '媍')
      .replaceAll(':high_heel:', '媎')
      .replaceAll(':boot:', '媐')
      .replaceAll(':athletic_shoe:', '媒')
      .replaceAll(':mans_shoe:', '媑')
      .replaceAll(':tophat:', '媔')
      .replaceAll(':crown:', '媗')
      .replaceAll(':eyeglasses:', '媝')
      .replaceAll(':exploding_head:', '定')
      .replaceAll(':basketball:', '宝')
      .replaceAll(':baseball:', '実')
      .replaceAll(':school_satchel:', '媘')
      .replaceAll(':briefcase:', '媜')
      .replaceAll(':rugby_football:', '客')
      .replaceAll(':pouch:', '媙')
      .replaceAll(':closed_umbrella:', '媠')
      .replaceAll(':goal_net:', '宧')
      .replaceAll(':handbag:', '媛')
      .replaceAll(':dog:', '媡')
      .replaceAll(':purse:', '媚')
      .replaceAll(':bear:', '媧')
      .replaceAll(':fox_face:', '媦')
      .replaceAll(':pig_nose:', '媮')
      .replaceAll(':bow_and_arrow:', '宬')
      .replaceAll(':pig:', '媭')
      .replaceAll(':cow:', '媬')
      .replaceAll(':rabbit:', '媥')
      .replaceAll(':tiger:', '媪')
      .replaceAll(':frog:', '媯')
      .replaceAll(':squid:', '媰')
      .replaceAll(':2nd_place_medal:', '害')
      .replaceAll(':shrimp:', '媲')
      .replaceAll(':see_no_evil:', '媵')
      .replaceAll(':lion:', '媫')
      .replaceAll(':monkey_face:', '媳')
      .replaceAll(':speak_no_evil:', '媷')
      .replaceAll(':drum:', '寀')
      .replaceAll(':musical_keyboard:', '宿')
      .replaceAll(':ant:', '嫌')
      .replaceAll(':octopus:', '媱')
      .replaceAll(':duck:', '媿')
      .replaceAll(':hatched_chick:', '媾')
      .replaceAll(':game_die:', '寉')
      .replaceAll(':chicken:', '媹')
      .replaceAll(':gorilla:', '媴')
      .replaceAll(':heart:', '富')
      .replaceAll(':hear_no_evil:', '媶')
      .replaceAll(':horse:', '嫅')
      .replaceAll(':honeybee:', '嫇')
      .replaceAll(':eagle:', '嫀')
      .replaceAll(':owl:', '嫁')
      .replaceAll(':four:', '寗')
      .replaceAll(':five:', '寘')
      .replaceAll(':snake:', '嫐')
      .replaceAll(':bird:', '媻')
      .replaceAll(':monkey:', '媸')
      .replaceAll(':baby_chick:', '媼')
      .replaceAll(':bug:', '嫈')
      .replaceAll(':butterfly:', '嫉')
      .replaceAll(':dolphin:', '嫖')
      .replaceAll(':vertical_traffic_light:', '寥')
      .replaceAll(':wolf:', '嫃')
      .replaceAll(':asterisk:', '寞')
      .replaceAll(':whale:', '嫘')
      .replaceAll(':whale2:', '嫙')
      .replaceAll(':bat:', '嫂')
      .replaceAll(':blowfish:', '嫕')
      .replaceAll(':tropical_fish:', '嫓')
      .replaceAll(':unicorn:', '嫆')
      .replaceAll(':sunrise_over_mountains:', '寱')
      .replaceAll(':spider:', '嫍')
      .replaceAll(':ox:', '嫞')
      .replaceAll(':elephant:', '嫣')
      .replaceAll(':night_with_stars:', '寶')
      .replaceAll(':camel:', '嫢')
      .replaceAll(':water_buffalo:', '嫝')
      .replaceAll(':desert:', '寲')
      .replaceAll(':dromedary_camel:', '嫡')
      .replaceAll(':rhinoceros:', '嫤')
      .replaceAll(':pig2:', '嫩')
      .replaceAll(':desktop_computer:', '対')
      .replaceAll(':racehorse:', '嫨')
      .replaceAll(':scorpion:', '嫎')
      .replaceAll(':mc_planks:', '尀')
      .replaceAll(':mouse2:', '嫫')
      .replaceAll(':mc_dirt:', '射')
      .replaceAll(':lizard:', '嫑')
      .replaceAll(':mc_red_sand:', '将')
      .replaceAll(':fish:', '嫔')
      .replaceAll(':mc_quartz_ore:', '尋')
      .replaceAll(':shark:', '嫗')
      .replaceAll(':goat:', '嫥')
      .replaceAll(':deer:', '嫠')
      .replaceAll(':leopard:', '嫛')
      .replaceAll(':mc_gold_block:', '尒')
      .replaceAll(':ram:', '嫦')
      .replaceAll(':mc_iron_block:', '尓')
      .replaceAll(':sheep:', '嫧')
      .replaceAll(':rat:', '嫪')
      .replaceAll(':dog2:', '嫯')
      .replaceAll(':mc_stone_brick:', '尛')
      .replaceAll(':dragon_face:', '嫶')
      .replaceAll(':paw_prints:', '嫴')
      .replaceAll(':rooster:', '嫬')
      .replaceAll(':poodle:', '嫰')
      .replaceAll(':cat2:', '嫱')
      .replaceAll(':dragon:', '嫵')
      .replaceAll(':chipmunk:', '嫳')
      .replaceAll(':cactus:', '嫷')
      .replaceAll(':palm_tree:', '嫻')
      .replaceAll(':maple_leaf:', '嬄')
      .replaceAll(':evergreen_tree:', '嫹')
      .replaceAll(':ear_of_rice:', '嬅')
      .replaceAll(':mc_gravel:', '尫')
      .replaceAll(':christmas_tree:', '嫸')
      .replaceAll(':deciduous_tree:', '嫺')
      .replaceAll(':seedling:', '嫼')
      .replaceAll(':bamboo:', '嬀')
      .replaceAll(':four_leaf_clover:', '嫿')
      .replaceAll(':mc_magenta_wool:', '尶')
      .replaceAll(':leaves:', '嬂')
      .replaceAll(':hibiscus:', '嬆')
      .replaceAll(':tanabata_tree:', '嬁')
      .replaceAll(':fallen_leaf:', '嬃')
      .replaceAll(':sunflower:', '嬇')
      .replaceAll(':wilted_flower:', '嬉')
      .replaceAll(':tulip:', '嬊')
      .replaceAll(':mc_red_wool:', '尺')
      .replaceAll(':mc_beacon:', '屆')
      .replaceAll(':cherry_blossom:', '嬌')
      .replaceAll(':mc_portal:', '层')
      .replaceAll(':spider_web:', '嬒')
      .replaceAll(':bouquet:', '嬍')
      .replaceAll(':mc_blaze:', '届')
      .replaceAll(':chestnut:', '嬏')
      .replaceAll(':mushroom:', '嬎')
      .replaceAll(':earth_americas:', '嬓')
      .replaceAll(':earth_asia:', '嬕')
      .replaceAll(':earth_africa:', '嬔')
      .replaceAll(':last_quarter_moon:', '嬘')
      .replaceAll(':new_moon:', '嬚')
      .replaceAll(':new_moon_with_face:', '嬞')
      .replaceAll(':waxing_gibbous_moon:', '嬝')
      .replaceAll(':mc_wither:', '屛')
      .replaceAll(':sparkles:', '嬧')
      .replaceAll(':full_moon_with_face:', '嬟')
      .replaceAll(':first_quarter_moon_with_face:', '嬠')
      .replaceAll(':cloud_with_lightning_and_rain:', '嬰')
      .replaceAll(':sun_with_face:', '嬢')
      .replaceAll(':cloud:', '嬮')
      .replaceAll(':sun_behind_rain_cloud:', '嬭')
      .replaceAll(':sun_behind_large_cloud:', '嬬')
      .replaceAll(':dizzy:', '嬦')
      .replaceAll(':last_quarter_moon_with_face:', '嬡')
      .replaceAll(':snowflake:', '嬵')
      .replaceAll(':comet:', '嬨')
      .replaceAll(':snowman_with_snow:', '嬸')
      .replaceAll(':sunny:', '嬩')
      .replaceAll(':fire:', '嬳')
      .replaceAll(':cloud_with_lightning:', '嬱')
      .replaceAll(':dash:', '嬺')
      .replaceAll(':wind_face:', '嬹')
      .replaceAll(':fog:', '嬼')
      .replaceAll(':droplet:', '嬿')
      .replaceAll(':open_umbrella:', '嬽')
      .replaceAll(':tornado:', '嬻')
      .replaceAll(':partly_sunny:', '嬫')
      .replaceAll(':ocean:', '孁')
      .replaceAll(':green_apple:', '孂')
      .replaceAll(':boom:', '嬴')
      .replaceAll(':pear:', '孄')
      .replaceAll(':tangerine:', '孅')
      .replaceAll(':grapes:', '孉')
      .replaceAll(':strawberry:', '孊')
      .replaceAll(':apple:', '孃')
      .replaceAll(':melon:', '孋')
      .replaceAll(':lemon:', '孆')
      .replaceAll(':pineapple:', '孎')
      .replaceAll(':kiwi_fruit:', '孏')
      .replaceAll(':watermelon:', '孈')
      .replaceAll(':carrot:', '孔')
      .replaceAll(':avocado:', '子')
      .replaceAll(':potato:', '孖')
      .replaceAll(':corn:', '字')
      .replaceAll(':sweet_potato:', '存')
      .replaceAll(':peanuts:', '孙')
      .replaceAll(':croissant:', '孛')
      .replaceAll(':egg:', '孟')
      .replaceAll(':pancakes:', '孡')
      .replaceAll(':baguette_bread:', '孝')
      .replaceAll(':fried_egg:', '孥')
      .replaceAll(':bacon:', '孠')
      .replaceAll(':honey_pot:', '孚')
      .replaceAll(':pizza:', '孪')
      .replaceAll(':fried_shrimp:', '孤')
      .replaceAll(':taco:', '孬')
      .replaceAll(':burrito:', '孭')
      .replaceAll(':shallow_pan_of_food:', '孯')
      .replaceAll(':meat_on_bone:', '季')
      .replaceAll(':stew:', '孱')
      .replaceAll(':fish_cake:', '孲')
      .replaceAll(':sushi:', '孳')
      .replaceAll(':rice:', '孷')
      .replaceAll(':hamburger:', '学')
      .replaceAll(':rice_cracker:', '學')
      .replaceAll(':dango:', '孺')
      .replaceAll(':shaved_ice:', '孻')
      .replaceAll(':spaghetti:', '孫')
      .replaceAll(':green_salad:', '孮')
      .replaceAll(':icecream:', '孽')
      .replaceAll(':birthday:', '孿')
      .replaceAll(':cake:', '孾')
      .replaceAll(':bento:', '孴')
      .replaceAll(':candy:', '宁')
      .replaceAll(':lollipop:', '宂')
      .replaceAll(':popcorn:', '宄')
      .replaceAll(':hotdog:', '孩')
      .replaceAll(':doughnut:', '宅')
      .replaceAll(':rice_ball:', '孶')
      .replaceAll(':cookie:', '宆')
      .replaceAll(':oden:', '孹')
      .replaceAll(':milk_glass:', '宇')
      .replaceAll(':chocolate_bar:', '它')
      .replaceAll(':champagne:', '宏')
      .replaceAll(':tropical_drink:', '宎')
      .replaceAll(':ice_cream:', '孼')
      .replaceAll(':tea:', '宑')
      .replaceAll(':crazy_face:', '宓')
      .replaceAll(':face_with_monocle:', '宔')
      .replaceAll(':sake:', '宐')
      .replaceAll(':coffee:', '宒')
      .replaceAll(':face_with_raised_eyebrow:', '宕')
      .replaceAll(':shushing_face:', '宖')
      .replaceAll(':face_with_hand_over_mouth:', '宗')
      .replaceAll(':soccer:', '宜')
      .replaceAll(':star_struck:', '宙')
      .replaceAll(':tennis:', '宠')
      .replaceAll(':8ball:', '宣')
      .replaceAll(':football:', '实')
      .replaceAll(':volleyball:', '审')
      .replaceAll(':ping_pong:', '宥')
      .replaceAll(':badminton:', '宦')
      .replaceAll(':ice_hockey:', '宨')
      .replaceAll(':golf:', '室')
      .replaceAll(':cricket:', '宪')
      .replaceAll(':ice_skate:', '宫')
      .replaceAll(':trophy:', '宯')
      .replaceAll(':boxing_glove:', '宭')
      .replaceAll(':martial_arts_uniform:', '宮')
      .replaceAll(':field_hockey:', '宩')
      .replaceAll(':1st_place_medal:', '宲')
      .replaceAll(':medal_military:', '宱')
      .replaceAll(':rosette:', '家')
      .replaceAll(':ticket:', '宷')
      .replaceAll(':3rd_place_medal:', '宴')
      .replaceAll(':reminder_ribbon:', '宵')
      .replaceAll(':performing_arts:', '容')
      .replaceAll(':art:', '宺')
      .replaceAll(':microphone:', '宼')
      .replaceAll(':headphones:', '宽')
      .replaceAll(':medal_sports:', '宰')
      .replaceAll(':guitar:', '寃')
      .replaceAll(':trumpet:', '寂')
      .replaceAll(':musical_score:', '宾')
      .replaceAll(':clapper:', '寅')
      .replaceAll(':circus_tent:', '宻')
      .replaceAll(':dart:', '寈')
      .replaceAll(':tickets:', '宸')
      .replaceAll(':saxophone:', '寁')
      .replaceAll(':video_game:', '密')
      .replaceAll(':violin:', '寄')
      .replaceAll(':bowling:', '寋')
      .replaceAll(':space_invader:', '寇')
      .replaceAll(':cool:', '寐')
      .replaceAll(':up:', '寏')
      .replaceAll(':ok:', '寎')
      .replaceAll(':slot_machine:', '寊')
      .replaceAll(':free:', '寒')
      .replaceAll(':broken_heart:', '寍')
      .replaceAll(':zero:', '寓')
      .replaceAll(':one:', '寔')
      .replaceAll(':new:', '寑')
      .replaceAll(':two:', '寕')
      .replaceAll(':eight:', '寛')
      .replaceAll(':seven:', '寚')
      .replaceAll(':nine:', '寜')
      .replaceAll(':keycap_ten:', '寝')
      .replaceAll(':rotating_light:', '察')
      .replaceAll(':airplane:', '寠')
      .replaceAll(':three:', '寖')
      .replaceAll(':artificial_satellite:', '寢')
      .replaceAll(':six:', '寙')
      .replaceAll(':tokyo_tower:', '寨')
      .replaceAll(':rocket:', '寡')
      .replaceAll(':anchor:', '寣')
      .replaceAll(':traffic_light:', '實')
      .replaceAll(':construction:', '寤')
      .replaceAll(':checkered_flag:', '寧')
      .replaceAll(':mountain_snow:', '寫')
      .replaceAll(':volcano:', '寭')
      .replaceAll(':mount_fuji:', '寬')
      .replaceAll(':fountain:', '審')
      .replaceAll(':mountain:', '寪')
      .replaceAll(':tent:', '寮')
      .replaceAll(':railway_track:', '寯')
      .replaceAll(':sunrise:', '寰')
      .replaceAll(':beach_umbrella:', '寳')
      .replaceAll(':desert_island:', '寴')
      .replaceAll(':cityscape:', '寵')
      .replaceAll(':city_sunrise:', '寸')
      .replaceAll(':watch:', '寺')
      .replaceAll(':city_sunset:', '对')
      .replaceAll(':phone:', '寻')
      .replaceAll(':keyboard:', '寽')
      .replaceAll(':mc_podzol:', '封')
      .replaceAll(':bridge_at_night:', '寷')
      .replaceAll(':mc_snow_grass:', '尃')
      .replaceAll(':computer:', '导')
      .replaceAll(':printer:', '寿')
      .replaceAll(':mc_soulsand:', '專')
      .replaceAll(':mc_sand:', '將')
      .replaceAll(':mc_netherbrick:', '尊')
      .replaceAll(':mc_ice:', '對')
      .replaceAll(':mc_water:', '導')
      .replaceAll(':mc_grass:', '専')
      .replaceAll(':mc_mycellium:', '尅')
      .replaceAll(':mc_emerald_block:', '尐')
      .replaceAll(':mc_netherrack:', '尉')
      .replaceAll(':mc_diamond_block:', '少')
      .replaceAll(':mc_ender_portal:', '尌')
      .replaceAll(':mc_lava:', '小')
      .replaceAll(':mc_redstone_ore:', '尕')
      .replaceAll(':mc_emerald_ore:', '尔')
      .replaceAll(':mc_iron_ore:', '尗')
      .replaceAll(':mc_diamond_ore:', '尖')
      .replaceAll(':mc_gold_ore:', '尘')
      .replaceAll(':mc_stone:', '尚')
      .replaceAll(':mc_quartz:', '尞')
      .replaceAll(':mc_brick:', '尝')
      .replaceAll(':mc_cobblestone:', '尙')
      .replaceAll(':mc_piston:', '尠')
      .replaceAll(':mc_sticky_piston:', '尡')
      .replaceAll(':mc_bedrock:', '尜')
      .replaceAll(':mc_redstone_lamp:', '尟')
      .replaceAll(':mc_tnt:', '尤')
      .replaceAll(':mc_redstone_block:', '尣')
      .replaceAll(':mc_jukebox:', '尥')
      .replaceAll(':mc_prismarine:', '尧')
      .replaceAll(':mc_hay:', '尩')
      .replaceAll(':mc_glowstone:', '尪')
      .replaceAll(':mc_dropper:', '尢')
      .replaceAll(':mc_lapis_lazuli_block:', '尬')
      .replaceAll(':mc_sponge:', '尦')
      .replaceAll(':mc_command_block:', '尨')
      .replaceAll(':mc_black_wool:', '尮')
      .replaceAll(':mc_blue_wool:', '尯')
      .replaceAll(':mc_cyan_wool:', '就')
      .replaceAll(':mc_gray_wool:', '尲')
      .replaceAll(':mc_lapis_lazuli_ore:', '尭')
      .replaceAll(':mc_light_blue_wool:', '尴')
      .replaceAll(':mc_brown_wool:', '尰')
      .replaceAll(':mc_orange_wool:', '尷')
      .replaceAll(':mc_green_wool:', '尳')
      .replaceAll(':mc_purple_wool:', '尹')
      .replaceAll(':mc_light_gray_wool:', '尻')
      .replaceAll(':mc_yellow_wool:', '尽')
      .replaceAll(':mc_snow_block:', '尾')
      .replaceAll(':mc_lime_wool:', '尵')
      .replaceAll(':mc_obsidian:', '局')
      .replaceAll(':mc_red_sandstone:', '屁')
      .replaceAll(':mc_endstone:', '屃')
      .replaceAll(':mc_pink_wool:', '尸')
      .replaceAll(':mc_white_wool:', '尼')
      .replaceAll(':mc_bookshelf:', '屇')
      .replaceAll(':mc_coal_block:', '居')
      .replaceAll(':mc_slime_block:', '尿')
      .replaceAll(':mc_enderchest:', '屉')
      .replaceAll(':mc_coal_ore:', '屄')
      .replaceAll(':mc_chest:', '屈')
      .replaceAll(':mc_ghast:', '屌')
      .replaceAll(':mc_cave_spider:', '屋')
      .replaceAll(':mc_zombie_pigman:', '屍')
      .replaceAll(':mc_enderman:', '屎')
      .replaceAll(':mc_magma_cube:', '屏')
      .replaceAll(':mc_chicken:', '屒')
      .replaceAll(':mc_spider:', '屑')
      .replaceAll(':mc_cow:', '展')
      .replaceAll(':mc_sheep:', '屔')
      .replaceAll(':mc_slime:', '屐')
      .replaceAll(':mc_villager:', '屗')
      .replaceAll(':mc_iron_golem:', '屘')
      .replaceAll(':mc_pig:', '屓')
      .replaceAll(':mc_ocelot:', '屚')
      .replaceAll(':mc_squid:', '屖')
      .replaceAll(':mc_wooden_axe:', '屝')
      .replaceAll(':mc_mooshroom:', '屙')
      .replaceAll(':mc_wooden_shovel:', '屟')
      .replaceAll(':mc_bow:', '屡')
      .replaceAll(':mc_wooden_hoe:', '屠')
      .replaceAll(':mc_arrow:', '屢')
      .replaceAll(':mc_wooden_sword:', '屜')
      .replaceAll(':mc_wooden_pickaxe:', '属')
      .replaceAll(':mc_flint_and_steel:', '層')
      .replaceAll(':mc_shears:', '履')
      .replaceAll(':mc_fishing_rod:', '屣')

    console.log('after')
    console.log(text)
    return text;
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}


export const removeColors = function (text) {
  const cleanText = text.replace(/§./g, "");
  return cleanText;
}

export const divider = "&a&m            &d&m            &e&m            &a&m            &d&m            &e&m            &a&m           &d&m           &e&m           &8";

export const data = new PogObject("kath", {
  "firstTimeMsg": false,
  "updateMessage1_4_0": false,
  "discordWarningMessage": true,
  "fakeBanned": false,
  "banID": "",
  "banTimestamp": 0
}, "data/data.json")
data.autosave(2)

export const ShowFirstLoginMessage = () => {
  try {
    data.firstTimeMsg = true;
    data.save();
    let stringArray = [
      `${divider}`,
      ChatLib.getCenteredText(`&dkath &7- &e${JSON.parse(FileLib.read("kath", "metadata.json")).version} `) + "\n",
      ChatLib.getCenteredText(`&7Looks like this is your first using &dKath&7!`) + "\n",
      ChatLib.getCenteredText(`&7GUI command is &e/kath`) + "\n",
      ChatLib.getCenteredText(`&7Other commands`),
      ChatLib.getCenteredText(`&7< > = Required arguments, [ ] = Optional arguments`),
      ChatLib.getCenteredText(`&d/limbo &e- &7Sends to Limbo`),
      ChatLib.getCenteredText(`&d/wikisearch <search> &e- &7Searches the wiki for what you entered`),
      ChatLib.getCenteredText(`&d/pt <username> &e- &7Will transfer the party to the given username`),
      `\n${divider}`
    ]
    let finalText = ""
    stringArray.forEach((line) => {
      if (line == "-/*") return
      finalText += (!line.includes("-/-")) ? `\n${line}` : line.replace("-/-", "\n")
    })
    ChatLib.chat(finalText)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}


export const viewChangeLog1_4_0 = () => {
  try {
    const wikiSearch = new Message(
      new TextComponent("&7Added &e/wikisearch <search> &8(hover)").setHover("show_text", `Searches the wiki for the given information`)
    );
    const fastParty = new Message(
      new TextComponent("&7Added &e/pt <username> &8(hover)").setHover("show_text", `Will transfer the party to the given username`)
    );
    const errorCatching = new Message(
      new TextComponent("&7Added more error catching")
    );
    const throwing = new Message(
      new TextComponent("&7Leave on throw &8(hover)").setHover("show_text", 'Will auto post a message about how you are throwing into party chat then will leave the party')
    );
    const throwingBan = new Message(
      new TextComponent("&7Auto Ban on throw &8(hover)").setHover("show_text", 'Will display a fake ban message when throwing')
    );
    const antiProfileID = new Message(
      new TextComponent("&7Anti Profile id &8(hover)").setHover("show_text", 'Hides the profile id messages')
    );

    ChatLib.chat(divider)
    ChatLib.chat(`&dKath - &ev1.4.0`)
    ChatLib.chat(wikiSearch)
    ChatLib.chat(fastParty)
    ChatLib.chat(errorCatching)
    ChatLib.chat(throwing)
    ChatLib.chat(throwingBan)
    ChatLib.chat(antiProfileID)
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}

export const viewChangeLog1_3_1 = () => {
  try {
    const antiMysteryBox = new Message(
      new TextComponent("&7Fixed anti mystery box")
    );
    const firstInstall = new Message(
      new TextComponent("&7Fixed first install message")
    );
    const skyblockJoiner = new Message(
      new TextComponent("&7Fixed Skyblock joiner not working")
    );

    ChatLib.chat(divider)
    ChatLib.chat(`&dKath - &ev1.3.1`)
    ChatLib.chat(antiMysteryBox)
    ChatLib.chat(firstInstall)
    ChatLib.chat(skyblockJoiner)
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}

export const viewChangeLog1_3_0 = () => {
  try {
    const discordWarning = new Message(
      new TextComponent("&7Discord Warning &8(hover)").setHover("show_text", `Shows a warning about scams rats and other stuff like that when someone posts a discord invite link`)
    );
    const spelling = new Message(
      new TextComponent("&7Changed spelling in most files")
    );
    const wikiSwapper = new Message(
      new TextComponent("&7Fixed WikiSwapper so its less likely to fail")
    );
    const antiMysteryBox = new Message(
      new TextComponent("&7Added Anti Mystery Box &8(hover)").setHover("show_text", `Hides messages about the stupid mystery box`)
    );
    const serverJoiner = new Message(
      new TextComponent("&7Server Joiner &8(hover)").setHover("show_text", `Automatically joins a server when you open minecraft`)
    );
    const skyblockJoiner = new Message(
      new TextComponent("&7Skyblock Joiner &8(hover)").setHover("show_text", `Automatically joins skyblock when u join hypixel (needs guild motd to work)`)
    );

    ChatLib.chat(divider)
    ChatLib.chat(`&dKath - &ev1.3.0`)
    ChatLib.chat(discordWarning)
    ChatLib.chat(spelling)
    ChatLib.chat(wikiSwapper)
    ChatLib.chat(antiMysteryBox)
    ChatLib.chat(serverJoiner)
    ChatLib.chat(skyblockJoiner)
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}

export const viewChangeLog1_2_0 = () => {
  try {
    const wikiSwapper = new Message(
      new TextComponent("&7Wiki Swapper &8(hover)").setHover("show_text", `&l&4Wiki Swapper May not always work due to the fandom having different page urls then hypixel wiki sometimes&r\nSwaps out the hypixel wiki with the fandom wiki when using /wiki or /wikithis`)
    );
    const dungeonRestart = new Message(
      new TextComponent("&7Removed Auto Dungeon Restart due to ban chances")
    );
    const removeSpiritBear = new Message(
      new TextComponent("&7Removed Spirit Bear ESP due to ban chances")
    );
    const changeSpritBow = new Message(
      new TextComponent("&7Changed Spirit Bow ESP to a waypoint")
    );
    const newFiles = new Message(
      new TextComponent("&7Moved everything into its own file for better backend")
    );
    const changeLog = new Message(
      new TextComponent("&7Added Change log for when the module updates")
    );

    ChatLib.chat(divider)
    ChatLib.chat(`&dKath - &ev1.2.0`)
    ChatLib.chat(wikiSwapper)
    ChatLib.chat(dungeonRestart)
    ChatLib.chat(removeSpiritBear)
    ChatLib.chat(changeSpritBow)
    ChatLib.chat(newFiles)
    ChatLib.chat(changeLog)
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}

export const viewChangeLog1_1_2 = () => {
  try {
    const antiTip = new Message(
      new TextComponent("&7Fixed Anti Tip not working")
    );

    ChatLib.chat(divider)
    ChatLib.chat(`&dKath - &ev1.1.2`)
    ChatLib.chat(antiTip)
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}

export const viewChangeLog1_1_1 = () => {
  try {
    const limbo = new Message(
      new TextComponent("&7Fixed &e/limbo&r&7 not sending the user to limbo")
    );

    ChatLib.chat(divider)
    ChatLib.chat(`&dKath - &ev1.1.1`)
    ChatLib.chat(limbo)
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}

export const viewChangeLog1_1_0 = () => {
  try {
    const quiver = new Message(
      new TextComponent("&7Made quiver alert also support the notification for 10 arrows")
    );
    const dungeonRestart = new Message(
      new TextComponent("&7Added Auto Dungeon Restart &8(hover)").setHover("show_text", `&n&4Usage of this may result in a BAN! Use at your own risk&r\nAutomatically restarts the dungeon after the dungeon ends`)
    );
    const gui = new Message(
      new TextComponent("&7Changed how the GUI is ordered &8(hover)").setHover("show_text", `Will reset the end users config`)
    );
    const antiNon = new Message(
      new TextComponent("&7Added Anti Non &8(hover)").setHover("show_text", `Hiding messages from a player under a set skyblock level (needs skyblock levels in chat on)`)
    );
    const sbe = new Message(
      new TextComponent("&7Added Anti SBE &8(hover)").setHover("show_text", `Hiding any message containing [SBE] in it`)
    );
    const antiTip = new Message(
      new TextComponent("&7Added Anti Tip &8(hover)").setHover("show_text", `Sick of the auto tip messages? Just hide them`)
    );
    const coopChat = new Message(
      new TextComponent("&7Added Coop Chat Ping &8(hover)").setHover("show_text", `Plays the ding sound when someone types in coop chat`)
    );
    const limbo = new Message(
      new TextComponent("&7Added &e/limbo &8(hover)").setHover("show_text", `Sends the user to limbo`)
    );
    const alertSound = new Message(
      new TextComponent("&7Added Alert Sound &8(hover)").setHover("show_text", `Plays a sound when an alert gets displayed`)
    );
    const quiz = new Message(
      new TextComponent("&7Added quiz fail message to cyber bully dungeons")
    );

    ChatLib.chat(divider)
    ChatLib.chat(`&dKath Addons - &ev1.1.0`)
    ChatLib.chat(quiver)
    ChatLib.chat(dungeonRestart)
    ChatLib.chat(gui)
    ChatLib.chat(antiNon)
    ChatLib.chat(sbe)
    ChatLib.chat(antiTip)
    ChatLib.chat(coopChat)
    ChatLib.chat(limbo)
    ChatLib.chat(alertSound)
    ChatLib.chat(quiz)
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}

export const viewChangeLog1_0_0 = () => {
  try {

    const bloodReady = new Message(
      new TextComponent("&7Added Blood Ready &8(hover)").setHover("show_text", `Displays a message on your screen when the watcher has spawned all the mobs`)
    );
    const cyberBullyDungeons = new Message(
      new TextComponent("&7Cyber Bully Dungeons &8(hover)").setHover("show_text", `Displays a message on your screen when the watcher has spawned all the mobs`)
    );
    const spiritBow = new Message(
      new TextComponent("&7F4/M4 Spirit Bow ESP &8(hover)").setHover("show_text", `&l&4Usage of this may result in a ban! Use at your own risk\nShows a box around the spirit bow`)
    );
    const spiritBear = new Message(
      new TextComponent("&7F4/M4 Spirit Bear ESP &8(hover)").setHover("show_text", `&l&4Usage of this may result in a ban! Use at your own risk&r\n Shows a box around the spirit bear`)
    );
    const visitorAlert = new Message(
      new TextComponent("&7Visitor Alert &8(hover)").setHover("show_text", `Shows a warning on your screen when a visitor joins your garden`)
    );
    const autoPartyAccept = new Message(
      new TextComponent("&7Auto party accept &8(hover)").setHover("show_text", `Will auto accept any party invite sent to you`)
    );
    const fragBot = new Message(
      new TextComponent("&7Frag bot &8(hover)").setHover("show_text", `Turns your account into a frag bot`)
    );
    const arrowWarning = new Message(
      new TextComponent("&7Arrow Warning &8(hover)").setHover("show_text", `Shows a warning on your screen when you have 50 arrows left`)
    );
    const giftWaypoints = new Message(
      new TextComponent("&7Gift Waypoints &8(hover)").setHover("show_text", `Waypoints to all the possible spawn locations for gifts in the Jerry's workshop event`)
    );
    const cyberBully = new Message(
      new TextComponent("&7Cyber Bully &8(hover)").setHover("show_text", `&4&lUsage of this may result in a mute! Use at your own risk&r\nWill post peoples death messages in all and party chat`)
    );
    const antiGexp = new Message(
      new TextComponent("&7Anti GEXP &8(hover)").setHover("show_text", `Hides the gexp messages when playing skyblock`)
    );
    const antiJoin = new Message(
      new TextComponent("&7Anti MVP+/++ Join Messages &8(hover)").setHover("show_text", `Hides the MVP+/++ lobby join messages from showing up in your chat`)
    );
    const antiHype = new Message(
      new TextComponent("&7Anti Hype Messages &8(hover)").setHover("show_text", `Hides the max hype messages from showing up in your chat`)
    );
    const antiCombo = new Message(
      new TextComponent("&7Anti Combo &8(hover)").setHover("show_text", `A settings that makes it so u cant be combed and it will auto combo for u (hides the combo messages from the grandma wolf)`)
    );
    ChatLib.chat(divider)
    ChatLib.chat(`&dKath Addons - &ev1.0.0`)
    ChatLib.chat(bloodReady)
    ChatLib.chat(cyberBullyDungeons)
    ChatLib.chat(spiritBow)
    ChatLib.chat(spiritBear)
    ChatLib.chat(visitorAlert)
    ChatLib.chat(autoPartyAccept)
    ChatLib.chat(fragBot)
    ChatLib.chat(arrowWarning)
    ChatLib.chat(giftWaypoints)
    ChatLib.chat(cyberBully)
    ChatLib.chat(antiGexp)
    ChatLib.chat(antiJoin)
    ChatLib.chat(antiHype)
    ChatLib.chat(antiCombo)
    ChatLib.chat(divider)
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}

export const getWikiUrl = (item) => axios.get(`https://raw.githubusercontent.com/NotEnoughUpdates/NotEnoughUpdates-REPO/master/items/${item.toUpperCase()}.json`).then(data => data.data.info[0]).catch(e => { console.log(e) })

export const genID = () => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789012345678901234567890123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const removeRank = (username) => {
  return username.replace(/\[[\w+\+-]+] /, "")
}

export const calculateRemainingTime = (startingTimestamp) => {
  try {
    let length;
    if (config.miscBanLength === 0) { length = 7 * 24 * 60 * 60 }
    else if (config.miscBanLength === 1) { length = 14 * 24 * 60 * 60 }
    else if (config.miscBanLength === 2) { length = 30 * 24 * 60 * 60 }
    else if (config.miscBanLength === 3) { length = 90 * 24 * 60 * 60 }
    else if (config.miscBanLength === 4) { length = 180 * 24 * 60 * 60 }
    else if (config.miscBanLength === 5) { length = 360 * 24 * 60 * 60 }
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const elapsedTime = currentTimestamp - startingTimestamp;
    const remainingTime = length - elapsedTime;
    const days = Math.floor(remainingTime / (24 * 60 * 60));
    const hours = Math.floor((remainingTime / (60 * 60)) % 24);
    const minutes = Math.floor((remainingTime / 60) % 60);
    const seconds = remainingTime % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } catch (error) {
    console.log(error);
    ChatLib.chat(`&dkath &6>&7 &c${error}`);
  }
}
