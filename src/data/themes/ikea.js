// IKEA 區 · The IKEA Trip — furniture, storage, textiles, hardware and the
// vocabulary of actually navigating the store and assembling the flat pack.
// Same item shape as the other themed areas.

export const IKEA = {
  id: 'ikea',
  icon: '🛋️',
  title: 'The IKEA Trip',
  titleZh: 'IKEA 區',
  blurb: '從 showroom 逛到自助取貨區，家具、收納、五金與組裝說明書上的字。',
  sections: [
    {
      id: 'living',
      icon: '🛋️',
      title: 'Living Room',
      titleZh: '客廳家具',
      blurb: '沙發、茶几、電視櫃——英式說法和美式不太一樣。',
      items: [
        { en: 'sofa', zh: '沙發', art: 'sofa', note: '英式 sofa，美式 couch；三人座叫 a three-seater。', example: 'We’re after a three-seater sofa that isn’t beige.', exampleZh: '我們想找一張不是米色的三人沙發。' },
        { en: 'sofa bed', zh: '沙發床', art: 'sofabed', note: '展開當床用，英國小公寓的救星；動詞 fold out。', example: 'The sofa bed folds out if anyone stays over.', exampleZh: '有人留宿的話沙發床可以展開。' },
        { en: 'armchair', zh: '單人扶手椅', art: 'armchair', note: '有扶手的單人椅；沒扶手的軟椅叫 easy chair。', example: 'That armchair in the corner is where the cat lives.', exampleZh: '角落那張扶手椅是貓的地盤。' },
        { en: 'footstool', zh: '腳凳', art: 'footstool', note: '英式 footstool，也叫 pouffe（軟墊圓凳）；美式 ottoman。', example: 'Put your feet up on the pouffe.', exampleZh: '把腳放在軟凳上休息。' },
        { en: 'coffee table', zh: '茶几', art: 'coffeetable', note: '沙發前的矮桌；靠沙發側邊的小桌叫 side table。', example: 'The coffee table has a shelf underneath for magazines.', exampleZh: '茶几下面有一層可以放雜誌。' },
        { en: 'TV unit', zh: '電視櫃', art: 'tvunit', note: '英式 TV unit / TV bench，美式 TV stand；IKEA 的 BESTÅ 系列。', example: 'The TV unit needs to hide all the cables.', exampleZh: '電視櫃要能把所有線材藏起來。' },
        { en: 'bookcase', zh: '書櫃', art: 'bookcase', note: '開放層架的書櫃，IKEA 的 BILLY 是全世界賣最好的。', example: 'Another BILLY bookcase — that’s the fourth one.', exampleZh: '又一個 BILLY 書櫃——這是第四個了。' },
        { en: 'shelving unit', zh: '層架櫃', art: 'shelving', note: '方格狀的 KALLAX 是典型；一格叫 a cube / compartment。', example: 'A four-by-four shelving unit fits the alcove perfectly.', exampleZh: '四乘四的層架櫃剛好塞進那個凹槽。' },
        { en: 'sideboard', zh: '餐邊櫃／矮櫃', art: 'sideboard', note: '低矮的長櫃，放餐具或當電視櫃；美式常叫 credenza。', example: 'The sideboard doubles as extra storage.', exampleZh: '餐邊櫃同時也是額外的收納空間。' },
        { en: 'rug', zh: '地毯（局部）', art: 'rug', note: 'rug 是可移動的區域地毯；整片鋪滿的是 carpet。', example: 'A rug will warm up all that laminate flooring.', exampleZh: '鋪張地毯能讓那片木地板看起來溫暖些。' }
      ]
    },
    {
      id: 'bedroom',
      icon: '🛏️',
      title: 'Bedroom',
      titleZh: '臥室家具與寢具',
      blurb: '英國床墊尺寸與寢具用語，和台灣完全不同。',
      items: [
        { en: 'double bed', zh: '雙人床（英制標準）', art: 'bed', note: '英國尺寸：single、double、king、super king，和美制不一樣，買床包要看清楚。', example: 'Is that a double or a king? The sheets are different.', exampleZh: '那是雙人床還是加大？床單尺寸不一樣。' },
        { en: 'bed frame', zh: '床架', art: 'bedframe', note: '床架和床墊（mattress）在英國通常分開賣。', example: 'The bed frame and mattress are sold separately.', exampleZh: '床架和床墊是分開賣的。' },
        { en: 'mattress', zh: '床墊', art: 'mattress', note: '軟硬度標 firm / medium / soft；記憶棉叫 memory foam。', example: 'We went for a medium-firm mattress in the end.', exampleZh: '我們最後選了中偏硬的床墊。' },
        { en: 'slatted bed base', zh: '床板條（排骨架）', art: 'slats', note: 'IKEA 床架常要另外買 slatted base；一條叫 a slat。', example: 'Don’t forget the slatted base — it’s not included.', exampleZh: '別忘了買床板條——那不含在裡面。' },
        { en: 'duvet', zh: '羽絨被／被芯', art: 'duvet', note: '英國人用 duvet 不用棉被；厚度用 tog 表示，10.5 tog 是四季款。', example: 'A four-point-five tog duvet is plenty for summer.', exampleZh: '四點五托格的被子夏天就夠了。' },
        { en: 'duvet cover', zh: '被套', art: 'duvetcover', note: '換被套是英國人公認最痛苦的家事之一。', example: 'Changing a duvet cover is a two-person job.', exampleZh: '換被套是兩個人的工作。' },
        { en: 'pillowcase', zh: '枕頭套', art: 'pillow', note: '一組床包叫 bedding set 或 bed linen（床單＋被套＋枕套）。', example: 'The bedding set comes with two pillowcases.', exampleZh: '這組寢具附兩個枕頭套。' },
        { en: 'wardrobe', zh: '衣櫃', art: 'wardrobe', note: '英式 wardrobe，美式 closet；嵌入牆的叫 built-in wardrobe。', example: 'A PAX wardrobe takes about four hours to build.', exampleZh: '一個 PAX 衣櫃大概要組四小時。' },
        { en: 'chest of drawers', zh: '五斗櫃', art: 'drawers', note: '英式標準說法；美式常說 dresser；一個抽屜是 a drawer。', example: 'The chest of drawers goes under the window.', exampleZh: '五斗櫃放在窗戶下面。' },
        { en: 'bedside table', zh: '床頭櫃', art: 'bedside', note: '英式 bedside table，美式 nightstand。', example: 'I need a bedside table with a drawer for my books.', exampleZh: '我需要一個有抽屜的床頭櫃放書。' },
        { en: 'blackout blind', zh: '遮光捲簾', art: 'blind', note: '英國夏天四點半就天亮，遮光簾是必需品；窗簾是 curtains。', example: 'You’ll want a blackout blind for the summer mornings.', exampleZh: '夏天早上你會需要遮光捲簾。' },
        { en: 'full-length mirror', zh: '穿衣鏡', art: 'mirror', note: '落地／全身鏡；掛牆的要用 wall fixings（壁掛五金）。', example: 'Fix the full-length mirror to the wall — it can tip.', exampleZh: '穿衣鏡要固定在牆上——它會倒。' }
      ]
    },
    {
      id: 'kitchen-dining',
      icon: '🍽️',
      title: 'Kitchen & Dining',
      titleZh: '廚房與餐廳區',
      blurb: '餐桌、櫥櫃與檯面，看樣品廚房時用得到。',
      items: [
        { en: 'dining table', zh: '餐桌', art: 'diningtable', note: '可延伸的叫 extendable table；四人份叫 seats four。', example: 'An extendable dining table seats six at a push.', exampleZh: '可延伸的餐桌勉強能坐六個人。' },
        { en: 'dining chair', zh: '餐椅', art: 'chair', note: '可疊放的叫 stackable chair；高腳的叫 bar stool。', example: 'Four dining chairs and two bar stools, please.', exampleZh: '四張餐椅和兩張高腳椅，謝謝。' },
        { en: 'kitchen island', zh: '中島', art: 'island', note: '獨立的工作檯面，附收納；小型可移動的叫 kitchen trolley。', example: 'A kitchen island gives you loads more worktop.', exampleZh: '中島能給你多很多的工作檯面。' },
        { en: 'worktop', zh: '流理檯面', art: 'worktop', note: '極英式：檯面叫 worktop，美式叫 countertop。', example: 'Wipe the worktop down before you start.', exampleZh: '開始前先把流理檯面擦一下。' },
        { en: 'wall cabinet', zh: '吊櫃', art: 'wallcabinet', note: '掛在牆上的上櫃；地上的叫 base cabinet / base unit。', example: 'The wall cabinets go up before the base units.', exampleZh: '吊櫃要在下櫃之前先裝。' },
        { en: 'cabinet door', zh: '櫃門', art: 'cabinetdoor', note: 'IKEA 廚房是櫃體（frame）與門片（fronts）分開選的。', example: 'You choose the frames and the fronts separately.', exampleZh: '櫃體和門片是分開選的。' },
        { en: 'drawer runner', zh: '抽屜滑軌', art: 'runner', note: '緩衝關閉的叫 soft-close runners，是加價選項。', example: 'Pay the extra for soft-close drawer runners.', exampleZh: '多花點錢買緩衝滑軌是值得的。' },
        { en: 'splashback', zh: '擋水牆面板', art: 'splashback', note: '爐台與水槽後方的防濺面板，英式 splashback，美式 backsplash。', example: 'A glass splashback is much easier to wipe down.', exampleZh: '玻璃擋水板擦起來容易多了。' },
        { en: 'crockery', zh: '碗盤餐具（陶瓷類）', art: 'crockery', note: '盤碗杯的統稱；刀叉是 cutlery，玻璃杯是 glassware。', example: 'We need crockery for six and some decent glasses.', exampleZh: '我們需要六人份的碗盤和幾個像樣的玻璃杯。' },
        { en: 'cutlery', zh: '刀叉餐具', art: 'cutlery', note: '英式 cutlery，美式 silverware / flatware；一組叫 a cutlery set。', example: 'A sixteen-piece cutlery set is about a tenner.', exampleZh: '十六件的餐具組大概十英鎊。' }
      ]
    },
    {
      id: 'storage-lighting',
      icon: '💡',
      title: 'Storage, Lighting & Textiles',
      titleZh: '收納、燈具與織品',
      blurb: 'IKEA 真正好賣的東西：箱子、燈和抱枕。',
      items: [
        { en: 'storage box', zh: '收納箱', art: 'storagebox', note: '有蓋的叫 box with lid；布質摺疊的叫 storage basket。', example: 'Everything goes in a storage box and under the bed.', exampleZh: '全部塞進收納箱然後推到床底下。' },
        { en: 'drawer divider', zh: '抽屜分隔盒', art: 'divider', note: '抽屜內分隔用；也叫 drawer organiser / insert，IKEA 常和抽屜櫃一起賣。', example: 'Drawer dividers changed my life, genuinely.', exampleZh: '抽屜分隔盒真的改變了我的人生。' },
        { en: 'coat rack', zh: '掛衣架', art: 'coatrack', note: '立式的叫 coat stand，掛牆的叫 coat rack / hooks。', example: 'Stick a coat rack by the front door.', exampleZh: '在大門旁邊裝個掛衣架。' },
        { en: 'shoe cabinet', zh: '鞋櫃', art: 'shoecabinet', note: '薄型翻蓋式的很受歡迎，因為英國玄關（hallway）都很窄。', example: 'A slim shoe cabinet is the only thing that fits.', exampleZh: '只有薄型鞋櫃塞得進去。' },
        { en: 'pendant light', zh: '吊燈', art: 'pendant', note: '從天花板垂下的單燈；一整組水晶燈叫 chandelier。', example: 'A pendant light over the dining table, low down.', exampleZh: '餐桌上方掛一盞吊燈，掛低一點。' },
        { en: 'floor lamp', zh: '落地燈', art: 'floorlamp', note: '英式也叫 standard lamp；桌上的是 table lamp。', example: 'A floor lamp in the corner instead of the big light.', exampleZh: '角落放盞落地燈，不要開大燈。' },
        { en: 'lampshade', zh: '燈罩', art: 'lampshade', note: 'IKEA 燈罩和燈座（lamp base / cord set）常常分開賣。', example: 'The shade and the cord set are sold separately.', exampleZh: '燈罩和燈線組是分開賣的。' },
        { en: 'bulb', zh: '燈泡', art: 'bulb', note: '接頭規格 bayonet（卡口，英國常見）或 screw fitting；亮度看 lumens。', example: 'Check whether you need bayonet or screw fitting.', exampleZh: '確認你要卡口的還是螺旋的燈泡。' },
        { en: 'cushion', zh: '抱枕', art: 'cushion', note: '英式 cushion，美式 throw pillow；枕心叫 cushion insert / pad。', example: 'The cushion cover and the insert are separate again.', exampleZh: '抱枕套和枕心又是分開賣的。' },
        { en: 'throw', zh: '沙發蓋毯', art: 'throw', note: '薄毯，鋪沙發或床尾用；厚的叫 blanket。', example: 'Chuck a throw over the sofa to hide the stains.', exampleZh: '在沙發上蓋條毯子把污漬遮住。' },
        { en: 'curtain pole', zh: '窗簾桿', art: 'curtainpole', note: '窗簾用 pole 或 track（軌道）；掛法叫 eyelet（環扣）或 pencil pleat。', example: 'You’ll need a curtain pole and some brackets.', exampleZh: '你會需要一支窗簾桿和幾個托架。' },
        { en: 'tealight holder', zh: '小蠟燭台', art: 'tealight', note: 'tealight 是那種鋁殼小蠟燭；scented candle 是香氛蠟燭。', example: 'Twenty tealights for a quid — always in the basket.', exampleZh: '二十個小蠟燭一英鎊——每次都會放進籃子。' }
      ]
    },
    {
      id: 'flatpack',
      icon: '🔧',
      title: 'Flat Pack & Tools',
      titleZh: '組裝五金與工具',
      blurb: '拆開紙箱以後，說明書上的每個零件都有名字。',
      items: [
        { en: 'flat pack', zh: '平整包裝家具（需自組）', art: 'flatpack', note: 'IKEA 的商業模式；動詞常說 to assemble / to put together。', example: 'It’s flat pack, so budget an evening for it.', exampleZh: '這是要自己組的，預留一個晚上吧。' },
        { en: 'Allen key', zh: '六角扳手', art: 'allenkey', note: '英式 Allen key，美式 hex key；IKEA 每盒都附一支。', example: 'There’s always a spare Allen key in the drawer.', exampleZh: '抽屜裡永遠有一支多的六角扳手。' },
        { en: 'cam lock', zh: '偏心輪連接件', art: 'camlock', note: '圓形金屬件轉半圈鎖住板材，IKEA 的招牌五金（cam and dowel）。', example: 'Turn the cam lock half a turn until it grips.', exampleZh: '把偏心輪轉半圈直到鎖緊。' },
        { en: 'dowel', zh: '木榫／圓木釘', art: 'dowel', note: '小圓木棒，插進孔裡對位；wooden dowel。', example: 'Tap the dowels in with a mallet, gently.', exampleZh: '用木槌輕輕把木榫敲進去。' },
        { en: 'screw', zh: '螺絲', art: 'screw', note: '十字頭叫 Phillips head，一字頭叫 flathead；螺帽是 nut。', example: 'Don’t overtighten the screws or you’ll strip the wood.', exampleZh: '螺絲別鎖太緊，會把木頭鎖滑牙。' },
        { en: 'bracket', zh: '固定托架', art: 'bracket', note: 'L 型金屬件；防倒固定牆上叫 anti-tip bracket。', example: 'Fix the anti-tip bracket to the wall — it’s not optional.', exampleZh: '防倒托架一定要鎖到牆上——這不是可選項。' },
        { en: 'wall plug', zh: '壁虎（膨脹塞）', art: 'wallplug', note: '英式 wall plug / rawlplug，美式 anchor；空心牆要用 plasterboard fixings。', example: 'Use proper wall plugs if it’s a plasterboard wall.', exampleZh: '如果是石膏板牆，要用專用的壁虎。' },
        { en: 'spirit level', zh: '水平儀', art: 'level', note: '英式 spirit level，美式 level；手機也有 app 可代用。', example: 'Check it with a spirit level before you drill.', exampleZh: '鑽孔前先用水平儀確認。' },
        { en: 'drill', zh: '電鑽', art: 'drill', note: '無線的叫 cordless drill；打混凝土要 hammer drill（震動鑽）。', example: 'You’ll need a hammer drill for a brick wall.', exampleZh: '磚牆要用震動電鑽。' },
        { en: 'screwdriver', zh: '螺絲起子', art: 'screwdriver', note: '起子頭叫 bit；一組叫 a screwdriver set。', example: 'Have you got a Phillips screwdriver handy?', exampleZh: '你手邊有十字起子嗎？' },
        { en: 'assembly instructions', zh: '組裝說明書', art: 'instructions', note: 'IKEA 說明書全是圖沒有字（wordless），所以全世界通用。', example: 'The instructions have no words, just that little bloke.', exampleZh: '說明書上沒有字，只有那個小人。' },
        { en: 'missing part', zh: '缺件', art: 'missingpart', note: '缺件可到 returns / customer service 免費補；零件編號叫 part number。', example: 'We’re one dowel short — back to customer service.', exampleZh: '我們少了一根木榫——回客服櫃檯吧。' }
      ]
    },
    {
      id: 'store-talk',
      icon: '🗺️',
      title: 'Navigating the Store',
      titleZh: '賣場動線與用語',
      blurb: '從展示區走到自助取貨區，最後在出口買一支冰淇淋。',
      items: [
        { en: 'showroom', zh: '展示區（樓上）', art: '🏠', note: 'IKEA 動線的第一段：布置好的樣品間，記下商品的貨架編號。', example: 'Write the aisle and bin number down in the showroom.', exampleZh: '在展示區把走道和貨架編號記下來。' },
        { en: 'Marketplace', zh: '生活用品自選區', art: '🧺', note: '展示區之後的自選賣場，鍋碗瓢盆抱枕都在這，最容易失控消費。', example: 'Nobody escapes the Marketplace with an empty trolley.', exampleZh: '沒有人能空著推車走出生活用品區。' },
        { en: 'self-serve furniture area', zh: '自助取貨區（倉庫）', art: '📦', note: '倉儲式貨架，自己照 aisle / bin 編號把箱子搬上推車。', example: 'Aisle 22, bin 14 — it’s in the self-serve area.', exampleZh: '二十二走道、十四號架——在自助取貨區。' },
        { en: 'aisle and bin number', zh: '走道與貨架編號', art: '🔢', note: '商品標籤上的兩個數字，是你在倉庫找到它的唯一線索。', example: 'Without the bin number you’ll be there all day.', exampleZh: '沒有貨架編號你會找一整天。' },
        { en: 'trolley', zh: '賣場推車', art: '🛒', note: 'IKEA 的平板推車叫 flatbed trolley，適合搬大箱子。', example: 'Grab a flatbed trolley, the wardrobe’s heavy.', exampleZh: '拿台平板推車，那個衣櫃很重。' },
        { en: 'click and collect', zh: '線上下單門市取貨', art: '📲', note: '線上買、到店取；送到家叫 home delivery。', example: 'We did click and collect to skip the queue.', exampleZh: '我們用線上取貨來避開排隊。' },
        { en: 'As-is / Bargain Corner', zh: '瑕疵品特價區', art: '🏷️', note: '展示品、退貨與微損商品的折扣區，撿便宜的人會直奔這裡。', example: 'Always check Bargain Corner on the way out.', exampleZh: '離場路上一定要繞去瑕疵特價區。' },
        { en: 'returns desk', zh: '退貨櫃檯', art: '↩️', note: 'IKEA 英國通常給 365 天退貨；要帶收據（receipt）。', example: 'Keep the receipt — you’ve got a year to return it.', exampleZh: '收據留著——你有一年可以退貨。' },
        { en: 'Småland', zh: '兒童遊戲區', art: '🧸', note: '免費托兒的球池區（瑞典文「小樂園」），有身高與時間限制。', example: 'Drop the kids at Småland and shop in peace.', exampleZh: '把小孩放到遊戲區，安靜地逛街。' },
        { en: 'meatballs', zh: '瑞典肉丸', art: '🍽️', note: '賣場餐廳的招牌，配 lingonberry jam（越橘果醬）；很多人是為它去的。', example: 'We only came for the meatballs, honestly.', exampleZh: '老實說我們只是為了肉丸來的。' },
        { en: 'checkout', zh: '結帳區', art: '💳', note: '自助結帳叫 self-scan；出口後還有熱狗攤（hot dog stand）。', example: 'Meet me by the checkouts when you’re done.', exampleZh: '你逛完在結帳區找我。' },
        { en: 'to assemble', zh: '組裝', art: '🔩', note: '正式用 assemble，口語說 put it together / build it。', example: 'It took two of us three hours to put it together.', exampleZh: '我們兩個人花了三小時把它組起來。' }
      ]
    }
  ]
}
