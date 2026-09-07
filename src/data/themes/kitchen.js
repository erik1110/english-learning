// 廚房烹飪區 · The Kitchen — cookware, utensils, appliances and cooking verbs
// as they are actually named in British kitchens and recipes.
// Same item shape as the supermarket area: { en, zh, art, note, example, exampleZh }

export const KITCHEN = {
  id: 'kitchen',
  icon: '🍳',
  title: 'The Kitchen',
  titleZh: '廚房烹飪區',
  blurb: '鍋具、刀具、小工具、家電到烹調動詞——英國食譜看得懂、廚房用得上。',
  sections: [
    {
      id: 'pots-pans',
      icon: '🍳',
      title: 'Pots & Pans',
      titleZh: '鍋具',
      blurb: '英式食譜叫得出名字的每一口鍋。',
      items: [
        { en: 'frying pan', zh: '平底煎鍋', art: 'fryingpan', note: '英式 frying pan，美式 skillet；不沾的叫 non-stick。', example: 'Get the frying pan properly hot before the oil goes in.', exampleZh: '下油前先把平底鍋燒夠熱。' },
        { en: 'saucepan', zh: '單柄湯鍋', art: 'saucepan', note: '有直邊和長柄，煮醬汁與義大利麵用；大的叫 large saucepan。', example: 'Bring a large saucepan of salted water to the boil.', exampleZh: '把一大鍋加鹽的水煮滾。' },
        { en: 'stockpot', zh: '高湯鍋', art: 'stockpot', note: '深而高的雙耳大鍋，熬高湯與煮大量湯品；容量以公升標示。', example: 'Everything goes in the stockpot and simmers all day.', exampleZh: '全部丟進高湯鍋，小火燉一整天。' },
        { en: 'casserole dish', zh: '燉鍋（可進烤箱）', art: 'casserole', note: '厚重帶蓋的鑄鐵鍋，爐上煎完直接進烤箱；Le Creuset 是英國家庭的傳家寶。', example: 'Brown the meat, then put the lid on and into the oven.', exampleZh: '把肉煎上色，蓋上蓋子送進烤箱。' },
        { en: 'griddle pan', zh: '條紋煎鍋', art: 'griddlepan', note: '底部有凸起條紋，能煎出烤肉的焦痕（char lines）。', example: 'A griddle pan gives you those proper barbecue stripes.', exampleZh: '條紋煎鍋能煎出漂亮的烤肉紋。' },
        { en: 'wok', zh: '炒鍋', art: 'wok', note: '碳鋼鍋要開鍋養鍋（season the wok）；大火快炒叫 wok hei。', example: 'The wok needs to be smoking before anything goes in.', exampleZh: '炒鍋要燒到冒煙才下料。' },
        { en: 'roasting tin', zh: '烤肉盤', art: 'roastingtin', note: '英式 roasting tin，美式 roasting pan；深邊能接肉汁做 gravy。', example: 'Put the veg under the joint in the roasting tin.', exampleZh: '把蔬菜鋪在烤肉盤裡的肉塊下面。' },
        { en: 'baking tray', zh: '烤盤（平的）', art: 'bakingtray', note: '英式 baking tray / baking sheet；鋪 baking parchment 防沾。', example: 'Spread them out on a baking tray, don’t crowd it.', exampleZh: '在烤盤上攤開，不要擠在一起。' },
        { en: 'steamer', zh: '蒸鍋／蒸籃', art: 'steamer', note: '疊在鍋上的 steamer basket，或竹製的 bamboo steamer。', example: 'Stack the steamer baskets over the boiling pan.', exampleZh: '把蒸籃疊在滾水鍋上。' },
        { en: 'pressure cooker', zh: '壓力鍋', art: 'pressurecooker', note: '英國近年流行電子式的 multi-cooker；燉牛腱一小時搞定。', example: 'The pressure cooker does a stew in forty minutes.', exampleZh: '壓力鍋四十分鐘就能燉好一鍋。' },
        { en: 'slow cooker', zh: '慢燉鍋', art: 'slowcooker', note: '英國家庭超愛，早上丟進去、下班就有飯吃；也叫 Crock-Pot。', example: 'Chuck it all in the slow cooker before work.', exampleZh: '上班前把材料全丟進慢燉鍋。' },
        { en: 'colander', zh: '瀝水盆', art: 'colander', note: '大孔的瀝麵籃；細網的叫 sieve，用途不同別混用。', example: 'Drain the pasta in a colander but save a cup of water.', exampleZh: '用瀝水盆把麵瀝乾，但留一杯麵水。' },
        { en: 'lid', zh: '鍋蓋', art: 'lid', note: '食譜常寫 with the lid ajar（蓋子留縫）或 lid on / off。', example: 'Simmer with the lid ajar for twenty minutes.', exampleZh: '鍋蓋留一條縫，小火燉二十分鐘。' }
      ]
    },
    {
      id: 'knives',
      icon: '🔪',
      title: 'Knives & Boards',
      titleZh: '刀具與砧板',
      blurb: '刀的種類、磨刀的動詞，還有切法。',
      items: [
        { en: 'chef’s knife', zh: '主廚刀', art: 'chefknife', note: '20 公分左右的萬用刀，八成的工作都用它；英式也叫 cook’s knife。', example: 'One decent chef’s knife beats a block of cheap ones.', exampleZh: '一把像樣的主廚刀勝過一整組便宜刀。' },
        { en: 'paring knife', zh: '削皮小刀', art: 'paringknife', note: '短刃、靈活，去蒂、削小東西用。', example: 'Use a paring knife to hull the strawberries.', exampleZh: '用削皮小刀去掉草莓蒂。' },
        { en: 'bread knife', zh: '麵包刀', art: 'breadknife', note: '鋸齒刃（serrated），切麵包和番茄都靠它。', example: 'A serrated bread knife slices tomatoes beautifully.', exampleZh: '鋸齒麵包刀切番茄超漂亮。' },
        { en: 'carving knife', zh: '切肉長刀', art: 'carvingknife', note: '長而窄，配 carving fork 切週日烤肉；動詞 to carve。', example: 'Dad always carves the joint at the table.', exampleZh: '爸爸總是在餐桌上切那塊烤肉。' },
        { en: 'cleaver', zh: '剁刀／中式菜刀', art: 'cleaver', note: '厚重寬刃，剁骨用；中式薄刃的叫 Chinese cleaver。', example: 'You need a cleaver to get through those ribs.', exampleZh: '要剁開那些排骨得用剁刀。' },
        { en: 'chopping board', zh: '砧板', art: 'board', note: '英式 chopping board，美式 cutting board；生熟食要分開用。', example: 'Keep a separate chopping board for raw meat.', exampleZh: '生肉要用另一塊砧板。' },
        { en: 'sharpening steel', zh: '磨刀棒', art: 'steel', note: '每次用前順一下刀鋒（hone），真正磨利要用 whetstone（磨刀石）。', example: 'Hone it on the steel before every use.', exampleZh: '每次用之前先在磨刀棒上順一下。' },
        { en: 'to dice', zh: '切丁', art: '🔲', note: 'dice 是方丁，chop 是隨意切塊，slice 是切片，julienne 是細絲。', example: 'Dice the onion finely — about half a centimetre.', exampleZh: '洋蔥切細丁——大約半公分。' },
        { en: 'to mince', zh: '剁碎', art: '🌀', note: '英式 mince 也當名詞用（絞肉）；蒜末就是 minced garlic。', example: 'Mince the garlic or crush it, whichever you prefer.', exampleZh: '蒜頭剁碎或壓碎都可以。' },
        { en: 'to score', zh: '劃刀', art: '➖', note: '在表面淺劃格紋，讓油脂融出或入味，常用於豬皮與魚身。', example: 'Score the skin at one-centimetre intervals.', exampleZh: '在皮上每隔一公分劃一刀。' }
      ]
    },
    {
      id: 'utensils',
      icon: '🥄',
      title: 'Utensils & Gadgets',
      titleZh: '手持工具與小道具',
      blurb: '抽屜裡那一堆叫不出名字的東西，一次搞定。',
      items: [
        { en: 'wooden spoon', zh: '木匙', art: 'woodenspoon', note: '不刮傷鍋子，也是英國媽媽拿來威脅小孩的傳統道具。', example: 'Stir it with a wooden spoon so you don’t scratch the pan.', exampleZh: '用木匙攪，才不會刮傷鍋子。' },
        { en: 'spatula', zh: '鍋鏟／刮刀', art: 'spatula', note: '英式的 spatula 常指軟矽膠刮刀；翻面的鏟子叫 fish slice 或 turner。', example: 'Scrape the bowl out with a spatula — waste nothing.', exampleZh: '用刮刀把碗刮乾淨——別浪費。' },
        { en: 'fish slice', zh: '煎鏟（有縫的）', art: 'fishslice', note: '這是最英式的字：有縫隙的翻面鏟，不只用來翻魚。', example: 'Slide the fish slice right under and flip in one go.', exampleZh: '把煎鏟整個滑到底下，一次翻面。' },
        { en: 'whisk', zh: '打蛋器', art: 'whisk', note: '球形的叫 balloon whisk；動詞 to whisk（打發）。', example: 'Whisk the egg whites to stiff peaks.', exampleZh: '把蛋白打到硬性發泡。' },
        { en: 'tongs', zh: '料理夾', art: 'tongs', note: '永遠複數；a pair of tongs 才是一支。', example: 'Turn the steaks with tongs, never a fork.', exampleZh: '用夾子翻牛排，千萬別用叉子。' },
        { en: 'ladle', zh: '湯杓', art: 'ladle', note: '深碗狀長柄杓，盛湯與舀高湯用。', example: 'Add the stock a ladleful at a time.', exampleZh: '高湯一杓一杓慢慢加。' },
        { en: 'peeler', zh: '削皮刀', art: 'peeler', note: '英式常用 Y 型的 speed peeler；也能刨蔬菜薄片。', example: 'Use the peeler to make courgette ribbons.', exampleZh: '用削皮刀把櫛瓜削成長薄片。' },
        { en: 'grater', zh: '刨絲器', art: 'grater', note: '四面的叫 box grater；細長的微刨刀叫 microplane，磨皮屑用。', example: 'Grate the cheese on the coarse side of the box grater.', exampleZh: '起司用四面刨的粗孔那面刨。' },
        { en: 'sieve', zh: '細網篩', art: 'sieve', note: '細目的網篩，過篩麵粉與濾醬汁；粗孔瀝水的是 colander。', example: 'Sift the flour through a sieve to get the lumps out.', exampleZh: '把麵粉過篩，去掉結塊。' },
        { en: 'masher', zh: '搗泥器', art: 'masher', note: '壓馬鈴薯泥用；要更細滑就用 potato ricer（壓泥器）。', example: 'A ricer gives you much smoother mash than a masher.', exampleZh: '壓泥器做出來的薯泥比搗泥器細滑多了。' },
        { en: 'rolling pin', zh: '擀麵棍', art: 'rollingpin', note: '擀派皮用；也能拿來拍碎堅果和敲肉。', example: 'Roll the pastry out between two sheets of parchment.', exampleZh: '把派皮夾在兩張烘焙紙間擀開。' },
        { en: 'measuring jug', zh: '量杯（有刻度壺）', art: 'jug', note: '英國食譜用毫升與公克，很少用杯；量固體要用 scales（電子秤）。', example: 'Four hundred millilitres in the measuring jug.', exampleZh: '量杯裡裝四百毫升。' },
        { en: 'kitchen scales', zh: '廚房電子秤', art: 'scales', note: '永遠複數；英式烘焙靠秤重，不像美式靠量杯。', example: 'British baking lives and dies by the scales.', exampleZh: '英式烘焙成敗全靠那台秤。' },
        { en: 'garlic press', zh: '壓蒜器', art: 'garlicpress', note: '主廚普遍看不起它，但家裡超好用；也叫 garlic crusher。', example: 'Chefs hate it, but the garlic press saves time.', exampleZh: '廚師都嫌棄，但壓蒜器真的省時間。' },
        { en: 'can opener', zh: '開罐器', art: 'canopener', note: '英式也叫 tin opener，因為罐頭叫 tin。', example: 'Where’s the tin opener gone this time?', exampleZh: '開罐器這次又跑哪去了？' },
        { en: 'oven glove', zh: '隔熱手套', art: 'ovenglove', note: '英式常見長條雙頭的 double oven glove；美式叫 oven mitt。', example: 'Both hands in the oven glove — that tin is heavy.', exampleZh: '兩隻手都套進隔熱手套——那盤很重。' },
        { en: 'tea towel', zh: '擦碗布', art: 'teatowel', note: '極英國的物品：擦碗、當隔熱墊、蓋發酵麵團都靠它。', example: 'Cover the dough with a damp tea towel.', exampleZh: '用濕擦碗布蓋住麵團。' },
        { en: 'skewer', zh: '串籤／測熟籤', art: 'skewer', note: '烤肉串用，也用來戳蛋糕測熟（comes out clean）。', example: 'Stick a skewer in — if it comes out clean, it’s done.', exampleZh: '插根籤進去——抽出來乾淨就是烤好了。' }
      ]
    },
    {
      id: 'bakeware',
      icon: '🧁',
      title: 'Baking Kit',
      titleZh: '烘焙用具',
      blurb: 'Bake Off 節目裡出現的那些模具與名詞。',
      items: [
        { en: 'cake tin', zh: '蛋糕模', art: 'caketin', note: '英式 tin，美式 pan；20 公分圓模是 a 20cm round tin。', example: 'Grease and line a twenty-centimetre cake tin.', exampleZh: '在二十公分蛋糕模上抹油鋪紙。' },
        { en: 'loaf tin', zh: '吐司／磅蛋糕模', art: 'loaftin', note: '長方形深模，烤麵包與香蕉蛋糕用；1lb 與 2lb 是常見尺寸。', example: 'A two-pound loaf tin is the standard size.', exampleZh: '兩磅的吐司模是標準尺寸。' },
        { en: 'muffin tray', zh: '瑪芬烤盤', art: 'muffintray', note: '十二連模；英國拿它烤 Yorkshire puddings 和 mince pies。', example: 'A twelve-hole muffin tray does Yorkshires perfectly.', exampleZh: '十二連瑪芬盤烤約克夏布丁剛剛好。' },
        { en: 'baking parchment', zh: '烘焙紙', art: 'parchment', note: '英式 baking parchment / greaseproof paper；錫箔是 tin foil。', example: 'Line the tray with baking parchment first.', exampleZh: '先在烤盤上鋪一張烘焙紙。' },
        { en: 'cooling rack', zh: '冷卻架', art: 'coolingrack', note: '讓底部散熱不濕軟；英式也叫 wire rack。', example: 'Turn the cake out onto a wire rack straight away.', exampleZh: '蛋糕要立刻倒扣到冷卻架上。' },
        { en: 'piping bag', zh: '擠花袋', art: 'pipingbag', note: '搭配 nozzle（花嘴）；動詞 to pipe。', example: 'Pipe the icing in little rosettes.', exampleZh: '把糖霜擠成一朵朵小玫瑰。' },
        { en: 'pastry brush', zh: '烘焙刷', art: 'pastrybrush', note: '刷蛋液（egg wash）或融化奶油用。', example: 'Brush the pastry with an egg wash before baking.', exampleZh: '派皮烤前刷上蛋液。' },
        { en: 'mixing bowl', zh: '調理盆', art: 'mixingbowl', note: '大的攪拌盆；隔水加熱叫 over a pan of simmering water（bain-marie）。', example: 'Melt the chocolate in a bowl over simmering water.', exampleZh: '巧克力用隔水加熱的盆子融化。' }
      ]
    },
    {
      id: 'appliances',
      icon: '⚡',
      title: 'Appliances',
      titleZh: '廚房家電與設備',
      blurb: '烤箱刻度、水壺、抽油煙機的英式說法。',
      items: [
        { en: 'hob', zh: '爐台／瓦斯爐面', art: 'hob', note: '極英式的字：爐面叫 hob，美式叫 stovetop / cooktop；on the hob = 在爐上。', example: 'Leave it bubbling away on the hob.', exampleZh: '讓它在爐上繼續滾著。' },
        { en: 'oven', zh: '烤箱', art: 'oven', note: '英國食譜寫 fan oven（旋風）溫度要比一般低 20°C；gas mark 是瓦斯刻度。', example: 'Preheat the oven to one-eighty, or one-sixty fan.', exampleZh: '烤箱預熱到一百八十度，旋風的話一百六。' },
        { en: 'grill', zh: '上火燒烤（烤箱上層）', art: 'grill', note: '陷阱字：英式 grill 是烤箱上火（美式 broiler）；美式 grill 是烤肉架（英式 barbecue）。', example: 'Pop it under the grill to brown the top.', exampleZh: '放到上火下面把表面烤上色。' },
        { en: 'extractor fan', zh: '抽油煙機', art: 'extractor', note: '也叫 cooker hood / extractor hood。', example: 'Put the extractor fan on before you start frying.', exampleZh: '開始煎之前先開抽油煙機。' },
        { en: 'kettle', zh: '電熱水壺', art: 'kettle', note: '英國家庭的核心設備；put the kettle on 幾乎等於「我們來談談」。', example: 'I’ll put the kettle on — you look like you need a brew.', exampleZh: '我去燒水——你看起來需要來杯茶。' },
        { en: 'toaster', zh: '烤麵包機', art: 'toaster', note: '烤好的吐司叫 toast（不可數）；a slice of toast 才是一片。', example: 'Two slices of toast and the kettle’s already on.', exampleZh: '兩片烤吐司，水已經在燒了。' },
        { en: 'microwave', zh: '微波爐', art: 'microwave', note: '動詞也是 microwave；口語常說 ping it 或 nuke it。', example: 'Just ping it for two minutes.', exampleZh: '微波兩分鐘就好。' },
        { en: 'blender', zh: '果汁機／調理機', art: 'blender', note: '手持的叫 stick blender / hand blender，打濃湯超方便。', example: 'Blitz the soup with a stick blender in the pan.', exampleZh: '直接用手持調理棒在鍋裡把湯打碎。' },
        { en: 'food processor', zh: '食物處理機', art: 'processor', note: '刀盤式，切碎揉麵都行；和 blender（打液體）用途不同。', example: 'Pulse it in the food processor, don’t purée it.', exampleZh: '用食物處理機點按幾下，別打成泥。' },
        { en: 'air fryer', zh: '氣炸鍋', art: 'airfryer', note: '英國近年因電費飆漲而爆紅，因為比烤箱省電。', example: 'Everyone got an air fryer when the energy bills went up.', exampleZh: '電費漲的時候每個人都買了氣炸鍋。' },
        { en: 'dishwasher', zh: '洗碗機', art: 'dishwasher', note: '標 dishwasher safe 表示可進洗碗機；stack the dishwasher = 把碗盤排進去。', example: 'Is this pan dishwasher safe or does it need doing by hand?', exampleZh: '這鍋子能進洗碗機還是要手洗？' },
        { en: 'washing-up', zh: '洗碗（這件事）', art: 'washingup', note: '名詞：do the washing-up；洗碗精是 washing-up liquid（美式 dish soap）。', example: 'I cooked, so you’re doing the washing-up.', exampleZh: '我煮的，所以碗你洗。' }
      ]
    },
    {
      id: 'cooking-verbs',
      icon: '📖',
      title: 'Recipe Verbs',
      titleZh: '食譜動詞',
      blurb: '看懂英國食譜的關鍵：這些動詞的火力與時間都不一樣。',
      items: [
        { en: 'to sauté', zh: '中大火快炒（少油）', art: '🔥', note: '油少、火大、常翻動；比 fry 更輕快。', example: 'Sauté the mushrooms until the water has cooked off.', exampleZh: '把蘑菇炒到水分收乾。' },
        { en: 'to sweat', zh: '小火炒軟出水（不上色）', art: '💧', note: '英式食譜的關鍵動詞：低溫讓洋蔥出水變透明但不變褐。', example: 'Sweat the onions gently — you don’t want any colour.', exampleZh: '洋蔥小火炒軟——不要讓它上色。' },
        { en: 'to brown / to sear', zh: '煎上色／大火封面', art: '🟤', note: '製造梅納反應的焦香；brown the mince = 把絞肉煎到變色。', example: 'Sear the beef in batches or it’ll just steam.', exampleZh: '牛肉分批煎，不然只會變成用蒸的。' },
        { en: 'to simmer', zh: '小滾／微滾', art: '♨️', note: '水面偶爾冒泡但不翻騰；比 boil 溫和，燉煮都用它。', example: 'Bring it to the boil, then reduce to a simmer.', exampleZh: '先煮滾，再轉小火微滾。' },
        { en: 'to blanch', zh: '汆燙', art: '🫧', note: '快速燙過再冰鎮（refresh in ice water）保色保脆。', example: 'Blanch the beans for two minutes and refresh them.', exampleZh: '四季豆燙兩分鐘後冰鎮。' },
        { en: 'to braise', zh: '半水燉煮', art: '🍲', note: '先煎上色再加少量液體、蓋蓋子慢煮；適合牛腱、羊腱。', example: 'Braise the shanks in stock for three hours.', exampleZh: '羊腱用高湯燉三小時。' },
        { en: 'to reduce', zh: '收汁', art: '📉', note: '開蓋煮讓水分蒸發、味道濃縮；reduce by half = 收到一半。', example: 'Reduce the sauce by half until it coats the spoon.', exampleZh: '醬汁收到一半，能掛在湯匙上為止。' },
        { en: 'to deglaze', zh: '嗆鍋溶底', art: '🍷', note: '倒酒或高湯把鍋底焦香（the bits / fond）刮起來做醬汁。', example: 'Deglaze the pan with a splash of wine.', exampleZh: '倒一點酒把鍋底的焦香刮起來。' },
        { en: 'to fold in', zh: '翻拌（輕柔混合）', art: '🌀', note: '烘焙用語：用切拌方式保留空氣，不要攪到消泡。', example: 'Fold the flour in gently — don’t knock the air out.', exampleZh: '輕輕把麵粉翻拌進去——別把空氣打掉。' },
        { en: 'to rest', zh: '靜置（肉）', art: '⏸️', note: '肉離火後靜置讓肉汁回流；rest for ten minutes 是牛排的標準。', example: 'Rest the meat for ten minutes before you carve it.', exampleZh: '切之前先讓肉靜置十分鐘。' },
        { en: 'to season', zh: '調味（鹽與胡椒）', art: '🧂', note: 'season to taste = 依口味調味；英國食譜幾乎每道都有這句。', example: 'Taste it and season generously at the end.', exampleZh: '最後嚐一下，大方地調味。' },
        { en: 'to prove', zh: '發酵麵團', art: '🍞', note: '英式 to prove，美式 to proof；leave to prove until doubled in size。', example: 'Leave the dough to prove until it’s doubled.', exampleZh: '讓麵團發到兩倍大。' },
        { en: 'to knead', zh: '揉麵', art: '👐', note: '揉到麵團光滑有彈性（smooth and elastic）。', example: 'Knead for ten minutes until it’s smooth and elastic.', exampleZh: '揉十分鐘直到麵團光滑有彈性。' },
        { en: 'to whisk / to beat', zh: '打發／攪打', art: '🥄', note: 'whisk 用打蛋器打入空氣；beat 是用力攪勻，力道更大。', example: 'Beat the butter and sugar until pale and fluffy.', exampleZh: '把奶油和糖打到顏色變淺、蓬鬆。' },
        { en: 'to drizzle', zh: '淋上細細一道', art: '🫒', note: '細細地淋，量很少；drizzle of olive oil 是食譜常客。', example: 'Drizzle a little olive oil over the top before serving.', exampleZh: '上桌前在上面淋一點橄欖油。' },
        { en: 'to garnish', zh: '擺上裝飾配料', art: '🌿', note: '最後放上香草或配料；garnish with chopped parsley 很常見。', example: 'Garnish with parsley and a wedge of lemon.', exampleZh: '用香芹和一角檸檬做裝飾。' }
      ]
    }
  ]
}
