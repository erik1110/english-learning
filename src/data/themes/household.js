// 居家生活區 · Around the House — the everyday objects, actions and adjectives
// you need when something in the flat blocks, leaks, breaks or runs slowly.
// Same item shape as the other themed areas: { en, zh, art, note, example, exampleZh }

export const HOUSEHOLD = {
  id: 'household',
  icon: '🏠',
  title: 'Around the House',
  titleZh: '居家生活區',
  blurb: '水管堵住、水槽長蟲、烤箱上下火、Wi-Fi 太慢——生活裡真正會用到的物品、動作與形容詞。',
  sections: [
    {
      id: 'plumbing',
      icon: '🚰',
      title: 'Sinks, Drains & Plumbing',
      titleZh: '水槽、排水與水管',
      blurb: '「水管堵住了」到底怎麼說，還有怎麼跟房東描述。',
      items: [
        { en: 'blocked drain', zh: '排水管堵住', art: 'drain', note: '英式說 blocked，美式說 clogged。整句常說 “the drain is blocked” 或 “the sink’s blocked”。', example: 'The kitchen drain’s blocked again — the water just sits there.', exampleZh: '廚房排水管又堵住了——水就積在那裡不下去。' },
        { en: 'to drain slowly', zh: '排水很慢', art: '🐌', note: '還沒完全堵死的階段，說 “it’s draining slowly” 或 “it’s slow to drain”。', example: 'It’s not fully blocked, it’s just draining really slowly.', exampleZh: '它沒有完全堵死，只是排得很慢。' },
        { en: 'plughole', zh: '排水孔', art: 'plughole', note: '英式 plughole，美式 drain。頭髮堵住叫 hair caught in the plughole。', example: 'There’s a load of hair caught in the plughole.', exampleZh: '排水孔卡了一堆頭髮。' },
        { en: 'U-bend', zh: '存水彎（S 型管）', art: 'ubend', note: '水槽下方的彎管，堵塞多半發生在這裡；英式 U-bend，美式 P-trap。', example: 'Nine times out of ten the blockage is in the U-bend.', exampleZh: '十次有九次堵塞都在存水彎那裡。' },
        { en: 'plunger', zh: '通馬桶吸盤／皮搋子', art: 'plunger', note: '動詞也是 plunge；用力上下推叫 to plunge the sink。', example: 'Give it a good go with the plunger before you call anyone.', exampleZh: '找人來之前先用吸盤用力通一通。' },
        { en: 'drain unblocker', zh: '通管劑', art: '🧪', note: '化學通管劑；小蘇打加醋的土法叫 bicarb and vinegar。', example: 'Pour the drain unblocker down and leave it half an hour.', exampleZh: '把通管劑倒下去，放置半小時。' },
        { en: 'dripping tap', zh: '水龍頭在滴水', art: 'tap', note: '英式 tap，美式 faucet；持續滴水說 “the tap’s dripping”。', example: 'The dripping tap kept me awake all night.', exampleZh: '那個滴水的水龍頭害我整晚睡不著。' },
        { en: 'leak', zh: '漏水', art: '💧', note: '名詞與動詞同形；“there’s a leak under the sink” 是報修的標準句。', example: 'There’s a leak under the sink — the cupboard floor is soaked.', exampleZh: '水槽下面在漏水——櫃子底板都濕透了。' },
        { en: 'water pressure', zh: '水壓', art: '🚿', note: '水壓低說 low water pressure；蓮蓬頭沒力說 the shower’s weak。', example: 'The water pressure upstairs is terrible.', exampleZh: '樓上的水壓很糟。' },
        { en: 'limescale', zh: '水垢', art: '🪨', note: '英國多是硬水（hard water），水壺與水龍頭都會積水垢；除垢叫 to descale。', example: 'You have to descale the kettle every couple of months here.', exampleZh: '在這裡水壺每兩個月就得除一次水垢。' },
        { en: 'to gurgle', zh: '（排水時）咕嚕作響', art: '🫧', note: '堵塞前兆；“the sink’s gurgling” 表示排水不順。', example: 'The sink gurgles every time I run the washing machine.', exampleZh: '每次開洗衣機水槽就咕嚕咕嚕響。' },
        { en: 'to overflow', zh: '滿出來、溢出', art: '🌊', note: '名詞 overflow 也指水槽上方的防溢孔。', example: 'Turn it off — the sink’s about to overflow!', exampleZh: '快關掉——水槽要滿出來了！' }
      ]
    },
    {
      id: 'pests-damp',
      icon: '🪰',
      title: 'Pests, Damp & Cleaning',
      titleZh: '蟲害、潮濕與清潔',
      blurb: '水槽附近長小蟲、牆角發霉，這些狀況的道地說法。',
      items: [
        { en: 'fruit flies', zh: '果蠅', art: '🪰', note: '廚房水槽與果盤附近最常見的小飛蟲；一群叫 a swarm of fruit flies。', example: 'We’ve got fruit flies all round the fruit bowl again.', exampleZh: '果盤旁邊又有一堆果蠅了。' },
        { en: 'drain flies', zh: '（水槽）蛾蚋', art: '🪰', note: '也叫 sink flies 或 moth flies，幼蟲住在排水管的黏垢裡，是水槽長蟲的元凶。', example: 'Those little moth-like things are drain flies — they breed in the pipe.', exampleZh: '那些像小蛾的東西是蛾蚋——牠們在管子裡繁殖。' },
        { en: 'to breed', zh: '孳生、繁殖', art: '🥚', note: '“something is breeding in the drain” 就是「排水管裡有東西在孳生」。', example: 'Something’s breeding down there — we need to flush the pipe out.', exampleZh: '下面有東西在孳生——我們得把管子沖乾淨。' },
        { en: 'breeding ground', zh: '孳生溫床', art: '🦠', note: '固定說法：a breeding ground for…，指提供繁殖條件的地方。', example: 'A wet plughole is a perfect breeding ground for flies.', exampleZh: '潮濕的排水孔是小蟲最理想的孳生溫床。' },
        { en: 'to fester', zh: '（髒東西）發臭腐壞', art: '🤢', note: '形容食物殘渣或濕垃圾放著爛掉發臭。', example: 'Don’t leave the food waste to fester in the bin.', exampleZh: '別把廚餘放在垃圾桶裡發臭。' },
        { en: 'mould', zh: '霉', art: 'mould', note: '英式拼 mould，美式 mold；浴室黑霉叫 black mould。動詞用 to go mouldy。', example: 'There’s black mould creeping up the bathroom ceiling.', exampleZh: '浴室天花板上黑霉正在往上蔓延。' },
        { en: 'damp', zh: '（房屋）受潮', art: '💦', note: '英國租屋最常見的糾紛；牆上的濕斑叫 a damp patch，發霉味叫 musty。', example: 'There’s a damp patch on the wall behind the wardrobe.', exampleZh: '衣櫃後面的牆上有一塊濕斑。' },
        { en: 'condensation', zh: '冷凝水', art: '🪟', note: '冬天窗戶內側的水珠；通風不良造成，解法是 ventilate（通風）。', example: 'Wipe the condensation off the windows or you’ll get mould.', exampleZh: '把窗戶上的冷凝水擦掉，不然會發霉。' },
        { en: 'to ventilate', zh: '通風', art: '🌬️', note: '也常說 to air the room out（讓房間透氣）。', example: 'Open a window and air the place out for ten minutes.', exampleZh: '開個窗，讓房間透氣十分鐘。' },
        { en: 'bin', zh: '垃圾桶', art: 'bin', note: '英式 bin，美式 trash can；倒垃圾叫 to take the bins out，廚餘桶叫 food waste caddy。', example: 'It’s your turn to take the bins out.', exampleZh: '輪到你去倒垃圾了。' },
        { en: 'bleach', zh: '漂白水', art: '🧴', note: '通排水管與去霉都用；千萬別和其他清潔劑混用（never mix bleach with…）。', example: 'Pour some bleach down the plughole and leave it overnight.', exampleZh: '倒點漂白水到排水孔，放一整晚。' },
        { en: 'to scrub', zh: '刷洗', art: 'sponge', note: '用力刷；輕輕擦是 to wipe，抹布是 cloth，菜瓜布是 scourer。', example: 'You’ll have to scrub that properly — wiping won’t shift it.', exampleZh: '那個要好好刷——用擦的弄不掉。' }
      ]
    },
    {
      id: 'appliance-use',
      icon: '🔥',
      title: 'Working the Appliances',
      titleZh: '家電操作',
      blurb: '烤箱上下火、旋風、抽油煙機轉速——按鈕上的英文怎麼讀。',
      items: [
        { en: 'to preheat', zh: '預熱', art: 'oven', note: '英國食譜幾乎都以 “Preheat the oven to 180°C” 開頭；預熱好叫 up to temperature。', example: 'Preheat the oven to two hundred, fan one-eighty.', exampleZh: '烤箱預熱到兩百度，旋風的話一百八。' },
        { en: 'top and bottom heat', zh: '上下火（傳統模式）', art: 'oven', note: '烤箱旋鈕上兩條橫線的符號，也叫 conventional heat；適合蛋糕與需要底部上色的東西。', example: 'Use top and bottom heat for cakes, not the fan.', exampleZh: '烤蛋糕用上下火，不要用旋風。' },
        { en: 'fan setting', zh: '旋風模式', art: 'oven', note: '風扇符號；用旋風時溫度要比食譜低約 20°C（fan is twenty degrees lower）。', example: 'On the fan setting, knock twenty degrees off whatever the recipe says.', exampleZh: '用旋風模式的話，食譜溫度要減二十度。' },
        { en: 'grill element', zh: '上火加熱管', art: 'grill', note: '烤箱頂部的加熱管，英式 grill＝美式 broiler；只開上火叫 grill only。', example: 'Switch to the grill element for the last two minutes to brown the top.', exampleZh: '最後兩分鐘切到上火，把表面烤上色。' },
        { en: 'oven shelf', zh: '烤箱層架', art: 'coolingrack', note: '位置說法：top shelf / middle shelf / bottom shelf；食譜會指定放哪一層。', example: 'Middle shelf, and turn the tray round halfway through.', exampleZh: '放中層，烤到一半把烤盤轉個方向。' },
        { en: 'to turn it down', zh: '把火／溫度調小', art: '🔽', note: '調大是 turn it up；轉到最小是 turn it right down / down to the lowest setting。', example: 'Turn it down to one-sixty or the top will burn.', exampleZh: '調到一百六，不然表面會焦。' },
        { en: 'extractor fan', zh: '抽油煙機', art: 'extractor', note: '也叫 cooker hood；風量分段說 on the highest setting（開到最強）。', example: 'Whack the extractor fan on the highest setting before you fry fish.', exampleZh: '煎魚之前先把抽油煙機開到最強。' },
        { en: 'greasy filter', zh: '油膩的濾網', art: '🫧', note: '抽油煙機的金屬濾網（grease filter），可拆下用洗碗機洗。', example: 'The extractor filter is filthy — it can go in the dishwasher.', exampleZh: '抽油煙機濾網髒死了——可以丟洗碗機洗。' },
        { en: 'hob ring', zh: '爐口／爐頭', art: 'hob', note: '一個爐口叫 a ring 或 a burner；大爐口是 the big ring。', example: 'Stick the stockpot on the big ring at the back.', exampleZh: '把高湯鍋放到後面那個大爐口。' },
        { en: 'timer', zh: '定時器', art: '⏲️', note: '設定 set a timer for ten minutes；響了叫 the timer’s gone off。', example: 'Set a timer or you’ll forget it’s in there.', exampleZh: '設個定時器，不然你會忘記東西還在裡面。' },
        { en: 'to defrost', zh: '解凍', art: '❄️', note: '微波解凍功能叫 defrost setting；自然退冰叫 leave it to thaw。', example: 'Take it out tonight and leave it to defrost in the fridge.', exampleZh: '今晚拿出來，放冰箱裡解凍。' },
        { en: 'spin cycle', zh: '（洗衣機）脫水行程', art: 'dishwasher', note: '洗衣機行程叫 cycle；快洗是 quick wash，脫水轉速是 spin speed。', example: 'Put it on a quick wash with a fast spin.', exampleZh: '用快洗行程加高速脫水。' },
        { en: 'to be on the blink', zh: '（電器）快壞了、時好時壞', art: '⚠️', note: '很英式的口語，形容電器不穩定；同義 playing up。', example: 'The washing machine’s been on the blink for weeks.', exampleZh: '洗衣機已經時好時壞好幾週了。' }
      ]
    },
    {
      id: 'wifi',
      icon: '📶',
      title: 'Wi-Fi & Devices',
      titleZh: '網路與 3C',
      blurb: '網速太慢、卡卡的、訊號死角——抱怨網路的完整詞彙。',
      items: [
        { en: 'the Wi-Fi is slow', zh: 'Wi-Fi 很慢', art: 'router', note: '不說 “the wifi speed is slow”，直接說 the Wi-Fi’s slow 或 the internet’s slow 最自然。', example: 'The Wi-Fi’s so slow today I can’t even load a page.', exampleZh: '今天 Wi-Fi 慢到我連網頁都開不起來。' },
        { en: 'router', zh: '路由器／數據機', art: 'router', note: '英國通常一台合一，也叫 the box；重開機是 to reboot 或 turn it off and on again。', example: 'Have you tried turning the router off and on again?', exampleZh: '你有試過把路由器關掉再打開嗎？' },
        { en: 'to buffer', zh: '（影片）緩衝、轉圈圈', art: '⏳', note: '影片卡住轉圈就是 buffering；“it keeps buffering” 是最常見的抱怨。', example: 'The video keeps buffering every thirty seconds.', exampleZh: '影片每三十秒就卡住緩衝一次。' },
        { en: 'lag', zh: '延遲、卡頓', art: '🐢', note: '遊戲與視訊用；形容詞 laggy，動詞 to lag。', example: 'The connection’s really laggy — you keep freezing.', exampleZh: '網路延遲很嚴重——你一直卡住不動。' },
        { en: 'to cut out', zh: '（訊號）斷掉', art: '📵', note: '通話或連線突然中斷；也說 to drop out。', example: 'Sorry, you cut out — could you say that again?', exampleZh: '抱歉，你斷線了——可以再說一次嗎？' },
        { en: 'patchy signal', zh: '訊號不穩', art: '📡', note: 'patchy 是英式常用形容詞，指時有時無；同義 dodgy signal。', example: 'The signal’s a bit patchy in the back bedroom.', exampleZh: '後面那間臥室訊號有點不穩。' },
        { en: 'dead spot', zh: '訊號死角', art: '🚫', note: '家裡完全收不到訊號的地方；也叫 a blackspot。', example: 'The kitchen’s a total dead spot — no bars at all.', exampleZh: '廚房是完全的死角——一格訊號都沒有。' },
        { en: 'bars', zh: '訊號格數', art: '📶', note: '手機訊號用 bars 數；“two bars” 就是兩格。', example: 'I’ve only got one bar in here.', exampleZh: '我在這裡只有一格訊號。' },
        { en: 'broadband', zh: '寬頻', art: '🌐', note: '英式家用網路的統稱；光纖是 fibre，速度單位是 megs（Mbps 的口語）。', example: 'We’re paying for sixty megs and getting about ten.', exampleZh: '我們付的是六十兆的網速，實際只有十兆左右。' },
        { en: 'to run a speed test', zh: '測網速', art: '⚡', note: 'speed test 測 download speed（下載）與 upload speed（上傳）。', example: 'Run a speed test and see what you’re actually getting.', exampleZh: '測一下網速，看看你實際拿到多少。' },
        { en: 'extender', zh: '訊號延伸器', art: '📡', note: '也叫 Wi-Fi booster 或 mesh system（多台組網）。', example: 'A cheap extender sorted out the upstairs signal.', exampleZh: '一個便宜的訊號延伸器就解決了樓上的訊號問題。' },
        { en: 'to be on the same network', zh: '連到同一個網路', art: '🔗', note: '投影或印表機連不上時的第一句檢查。', example: 'Make sure you’re on the same network, not the guest one.', exampleZh: '確認你連的是同一個網路，不是訪客網路。' },
        { en: 'to charge', zh: '充電', art: '🔌', note: '充電線 charger / charging cable；沒電是 flat（英式）或 dead。', example: 'My phone’s completely flat — have you got a charger?', exampleZh: '我手機完全沒電了——你有充電器嗎？' }
      ]
    },
    {
      id: 'repairs',
      icon: '🔧',
      title: 'When Things Break',
      titleZh: '故障與修繕',
      blurb: '跳電、燈泡燒掉、暖氣不熱——報修時說得清楚。',
      items: [
        { en: 'the fuse has tripped', zh: '跳電了', art: 'fusebox', note: '英式說 the trip switch has gone 或 it’s tripped；配電箱叫 fuse box / consumer unit。', example: 'The whole kitchen’s dead — I think the fuse has tripped.', exampleZh: '整個廚房都沒電——我想是跳電了。' },
        { en: 'blown bulb', zh: '燈泡燒掉', art: 'bulb', note: '動詞 the bulb’s gone（英式最常說）或 it’s blown。', example: 'The bulb in the hallway’s gone again.', exampleZh: '走廊的燈泡又燒掉了。' },
        { en: 'socket', zh: '插座', art: 'socket', note: '英式 socket / plug socket，美式 outlet；延長線是 extension lead。', example: 'There’s only one socket in the whole room.', exampleZh: '整個房間只有一個插座。' },
        { en: 'radiator', zh: '暖氣片', art: 'radiator', note: '英國房子的主要暖氣；上半部不熱要 bleed the radiator（排氣）。', example: 'The radiator’s cold at the top — it needs bleeding.', exampleZh: '暖氣片上半部是冷的——需要排氣。' },
        { en: 'boiler', zh: '鍋爐（熱水暖氣主機）', art: 'boiler', note: '英國家庭熱水與暖氣的心臟；壞了叫 the boiler’s packed up。', example: 'No hot water — the boiler’s packed up again.', exampleZh: '沒熱水了——鍋爐又壞了。' },
        { en: 'thermostat', zh: '溫控器', art: 'thermostat', note: '設定室溫用；調高說 turn the thermostat up。', example: 'Whack the thermostat up a couple of degrees.', exampleZh: '把溫控器調高個兩度。' },
        { en: 'draughty', zh: '（有）穿堂風的、會灌風', art: '🌬️', note: '英式拼 draughty，美式 drafty；門縫灌風叫 a draught under the door。', example: 'This flat is so draughty in winter.', exampleZh: '這間公寓冬天灌風灌得很厲害。' },
        { en: 'wonky', zh: '歪掉的、不正的', art: '📐', note: '很英式的口語，形容架子、桌腳歪斜；同義 not straight。', example: 'That shelf is completely wonky.', exampleZh: '那個架子整個歪掉了。' },
        { en: 'to come loose', zh: '鬆掉', art: '🔩', note: '螺絲鬆了說 the screw’s come loose；桌腳晃叫 wobbly。', example: 'One of the table legs has come loose.', exampleZh: '桌腳有一支鬆掉了。' },
        { en: 'to jam', zh: '卡住', art: '🚪', note: '門窗、抽屜卡住；it’s jammed shut 是卡住打不開。', example: 'The window’s jammed — I can’t get it open.', exampleZh: '窗戶卡住了——我打不開。' },
        { en: 'to squeak', zh: '（發出）吱吱聲', art: '🔊', note: '門軸、地板的聲音；上油是 put some oil / WD-40 on it。', example: 'That door squeaks every single time.', exampleZh: '那扇門每次開都會吱吱叫。' },
        { en: 'landlord', zh: '房東', art: '🔑', note: '報修流程：report it to the landlord / letting agent；押金是 deposit。', example: 'I’ve reported it to the landlord twice already.', exampleZh: '我已經跟房東報修兩次了。' },
        { en: 'to get someone in', zh: '找人來（修）', art: '👷', note: '英式常用；水電工是 plumber，電工是 electrician，雜工是 handyman。', example: 'We’ll have to get a plumber in to look at it.', exampleZh: '我們得找水電工來看一下。' }
      ]
    },
    {
      id: 'housework',
      icon: '🧹',
      title: 'Housework & Tidying',
      titleZh: '家事與整理',
      blurb: '家事動詞很多是英式專屬，說錯會怪怪的。',
      items: [
        { en: 'to hoover', zh: '吸地', art: 'hoover', note: '英國人把吸塵器品牌 Hoover 當動詞用；美式說 to vacuum。', example: 'I’ll hoover the front room before they arrive.', exampleZh: '他們到之前我把客廳吸一吸。' },
        { en: 'to do the washing-up', zh: '洗碗', art: 'washingup', note: '英式是 washing-up；美式說 do the dishes。洗碗精是 washing-up liquid。', example: 'I cooked, so you’re doing the washing-up.', exampleZh: '我煮的，所以你洗碗。' },
        { en: 'to do the washing', zh: '洗衣服', art: '🧺', note: '注意區分：the washing 是衣服，the washing-up 是碗盤，差一個字差很多。', example: 'I’ve got three loads of washing to get through.', exampleZh: '我有三桶衣服要洗。' },
        { en: 'to hang the washing out', zh: '晾衣服', art: '🧷', note: '曬衣繩是 washing line，曬衣夾是 pegs；室內晾衣架是 clothes airer。', example: 'It’s sunny — hang the washing out while you can.', exampleZh: '出太陽了——趁現在把衣服晾出去。' },
        { en: 'to mop', zh: '拖地', art: 'mop', note: '拖把 mop，水桶 bucket；擦地板也可說 to give the floor a wipe。', example: 'Mop the kitchen floor, it’s sticky.', exampleZh: '拖一下廚房地板，黏黏的。' },
        { en: 'to wipe down', zh: '擦拭（表面）', art: 'sponge', note: '擦流理檯、桌面用；比 clean 更具體。', example: 'Wipe the worktops down before you go to bed.', exampleZh: '睡前把流理檯擦一擦。' },
        { en: 'to declutter', zh: '斷捨離、清掉雜物', art: '📦', note: '近年很流行的字；雜亂是 clutter，形容詞 cluttered。', example: 'We really need to declutter that spare room.', exampleZh: '我們真的該把那間空房清一清了。' },
        { en: 'to tidy up', zh: '收拾整理', art: '🧺', note: '英式 tidy up，美式 clean up；tidy 也可當形容詞（整齊的）。', example: 'Give me ten minutes to tidy up before they get here.', exampleZh: '給我十分鐘在他們來之前收拾一下。' },
        { en: 'to put a wash on', zh: '把衣服丟進去洗', art: 'dishwasher', note: '啟動洗衣機的固定說法；洗碗機是 to put the dishwasher on。', example: 'I’ll put a wash on before we head out.', exampleZh: '出門前我先開一桶洗衣。' },
        { en: 'to air out', zh: '通風、透氣', art: '🪟', note: '房間或衣物；也說 to give the room an airing。', example: 'Open the windows and air the bedroom out.', exampleZh: '開窗讓臥室透透氣。' },
        { en: 'chores', zh: '家務雜事', art: '📋', note: '複數用；分配家事叫 to split the chores。', example: 'We take turns with the chores each week.', exampleZh: '我們每週輪流做家事。' },
        { en: 'to run out of', zh: '（東西）用完了', art: '🫗', note: '生活必需品用完的標準說法。', example: 'We’ve run out of washing-up liquid again.', exampleZh: '洗碗精又用完了。' }
      ]
    },
    {
      id: 'describing',
      icon: '🔍',
      title: 'Describing the State of Things',
      titleZh: '描述狀態的形容詞',
      blurb: '從 spotless 到 grimy——把「髒」「亂」「悶」講得精準。',
      items: [
        { en: 'spotless', zh: '一塵不染的', art: '✨', note: '最高等級的乾淨；也可說 immaculate。', example: 'Her kitchen is always absolutely spotless.', exampleZh: '她的廚房永遠一塵不染。' },
        { en: 'grimy', zh: '積垢的、髒污的', art: '🫧', note: '指長期累積的黑垢，比 dirty 更具體、更嚴重。', example: 'The oven door is really grimy inside.', exampleZh: '烤箱門內側積垢很嚴重。' },
        { en: 'greasy', zh: '油膩的', art: '🍳', note: '廚房表面、抽油煙機濾網最常用。', example: 'Everything above the hob goes greasy so quickly.', exampleZh: '爐台上方的東西很快就變得油膩。' },
        { en: 'musty', zh: '有霉味的', art: '👃', note: '形容久沒通風的房間或衣櫃的味道。', example: 'The wardrobe smells a bit musty.', exampleZh: '衣櫃聞起來有點霉味。' },
        { en: 'stuffy', zh: '悶的、不通風的', art: '🥵', note: '空氣不流通、悶熱；反義是 airy。', example: 'It gets really stuffy in here with the door shut.', exampleZh: '門關著的話這裡會變得很悶。' },
        { en: 'cluttered', zh: '雜亂堆滿東西的', art: '📚', note: '不是髒，而是東西太多太亂；反義 minimal / tidy。', example: 'The desk is far too cluttered to work at.', exampleZh: '這張桌子太亂了根本沒辦法工作。' },
        { en: 'sluggish', zh: '（運作）遲緩的', art: '🐌', note: '形容排水、電腦、網路慢吞吞。', example: 'The laptop’s been really sluggish since the update.', exampleZh: '更新之後筆電變得很慢。' },
        { en: 'flimsy', zh: '不牢固的、單薄的', art: '📄', note: '形容便宜家具或包裝；反義是 sturdy。', example: 'The shelf’s too flimsy to hold all those books.', exampleZh: '這個架子太不牢固，撐不住那些書。' },
        { en: 'sturdy', zh: '結實的、牢固的', art: '🪵', note: '稱讚家具或工具耐用；同義 solid、well-made。', example: 'It’s not pretty, but it’s sturdy.', exampleZh: '它不好看，但很牢固。' },
        { en: 'stale', zh: '（食物）不新鮮的；（空氣）陳悶的', art: '🍞', note: '麵包放乾、空氣悶都用；食物壞掉是 off（英式）。', example: 'The bread’s gone stale — it’s only good for toast now.', exampleZh: '麵包放到不新鮮了——現在只能拿來烤吐司。' },
        { en: 'to go off', zh: '（食物）壞掉', art: '🥛', note: '極英式：milk goes off（牛奶壞了）；美式說 to go bad。', example: 'Smell the milk — I think it’s gone off.', exampleZh: '聞一下牛奶——我覺得它壞掉了。' },
        { en: 'scruffy', zh: '破舊的、邋遢的', art: '🧦', note: '形容外觀不整潔的東西或人，語氣不重。', example: 'The sofa’s looking a bit scruffy now.', exampleZh: '沙發現在看起來有點舊舊的。' }
      ]
    }
  ]
}
