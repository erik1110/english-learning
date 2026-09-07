// 機場與旅遊區 · Airport & Travel — check-in to customs, plus hotels, transport
// and the vocabulary you need when the trip goes wrong.
// Same item shape as the other themed areas.

export const TRAVEL = {
  id: 'travel',
  icon: '✈️',
  title: 'Airport & Travel',
  titleZh: '機場與旅遊區',
  blurb: '報到、安檢、海關、機上、住宿與當地交通——一趟旅程從頭到尾的英文。',
  sections: [
    {
      id: 'check-in',
      icon: '🧳',
      title: 'Check-in & Baggage',
      titleZh: '報到與行李',
      blurb: '櫃檯會問的問題，和行李的各種說法。',
      items: [
        { en: 'check-in desk', zh: '報到櫃檯', art: '🛄', note: '動詞分開寫：to check in；名詞連字號：the check-in desk。自助機叫 self-service kiosk。', example: 'Which check-in desk is it for the Bangkok flight?', exampleZh: '飛曼谷的班機在哪個報到櫃檯？' },
        { en: 'boarding pass', zh: '登機證', art: '🎫', note: '手機上的叫 mobile boarding pass；印出來的叫 a printed one。', example: 'Have your boarding pass and passport ready.', exampleZh: '請把登機證和護照準備好。' },
        { en: 'hold luggage', zh: '託運行李', art: '🧳', note: '英式 hold luggage / checked baggage；託運動作是 to check a bag in。', example: 'Are you checking any bags into the hold today?', exampleZh: '您今天有要託運行李嗎？' },
        { en: 'hand luggage', zh: '手提行李', art: '🎒', note: '英式 hand luggage，美式 carry-on；尺寸限制叫 size restrictions。', example: 'Just hand luggage — I’m only away two nights.', exampleZh: '只有手提行李——我只去兩晚。' },
        { en: 'baggage allowance', zh: '行李額度', art: '⚖️', note: '重量上限；超重叫 excess baggage，要付 excess baggage fee。', example: 'What’s the baggage allowance on this fare?', exampleZh: '這個票價的行李額度是多少？' },
        { en: 'overweight', zh: '超重', art: '🏋️', note: '行李超重說 the bag’s overweight；櫃檯會叫你 take something out。', example: 'Your case is two kilos overweight, I’m afraid.', exampleZh: '不好意思，您的行李箱超重兩公斤。' },
        { en: 'to weigh', zh: '秤重', art: '⚖️', note: '“pop it on the scales” 是櫃檯人員的常用說法。', example: 'Pop your bag on the scales for me.', exampleZh: '請把行李放到磅秤上。' },
        { en: 'luggage tag', zh: '行李條', art: '🏷️', note: '貼在行李上的條碼標籤；行李收據叫 baggage receipt，領行李出問題時要用。', example: 'Keep the baggage receipt in case anything goes missing.', exampleZh: '行李收據留著，萬一行李不見要用。' },
        { en: 'fragile', zh: '易碎品', art: '🫙', note: '要求貼易碎標籤：Could you mark it as fragile?', example: 'Could you put a fragile sticker on this one?', exampleZh: '這件可以幫我貼易碎標籤嗎？' },
        { en: 'aisle or window', zh: '走道或靠窗', art: '💺', note: '劃位時會問；中間位子叫 middle seat，緊急出口排叫 emergency exit row。', example: 'Would you prefer an aisle or a window seat?', exampleZh: '您想要走道還是靠窗的座位？' },
        { en: 'to check through', zh: '（行李）直掛到目的地', art: '🔁', note: '轉機時問：Is my bag checked through to the final destination?', example: 'Is my luggage checked through, or do I collect it in Dubai?', exampleZh: '我的行李有直掛嗎，還是要在杜拜領出來？' },
        { en: 'departures board', zh: '出境航班資訊看板', art: '🛫', note: '看板上的狀態：on time、delayed、boarding、gate closing、final call。', example: 'The departures board still says gate not announced.', exampleZh: '看板上還是顯示登機門未公布。' }
      ]
    },
    {
      id: 'security',
      icon: '🛂',
      title: 'Security & Departures',
      titleZh: '安檢與出境大廳',
      blurb: '安檢人員真正會對你說的那幾句。',
      items: [
        { en: 'security', zh: '安檢', art: '🛂', note: '過安檢說 to go through security；排隊等待叫 the queue for security。', example: 'Security took nearly an hour this morning.', exampleZh: '今天早上過安檢花了將近一小時。' },
        { en: 'tray', zh: '安檢盤', art: '🗳️', note: '安檢人員會說 “put everything in the tray”。', example: 'Coat, belt and laptop in the tray, please.', exampleZh: '請把外套、皮帶和筆電放進盤子裡。' },
        { en: 'liquids', zh: '液體', art: '🧴', note: '100ml 規定：liquids in a clear resealable bag；超過會被 confiscated（沒收）。', example: 'All liquids need to be in a clear plastic bag.', exampleZh: '所有液體都要裝在透明塑膠袋裡。' },
        { en: 'to take your laptop out', zh: '把筆電拿出來', art: '💻', note: '安檢常用祈使句；有些機場已經不需要了（you can leave it in）。', example: 'You’ll need to take your laptop out of the bag.', exampleZh: '您需要把筆電從包包裡拿出來。' },
        { en: 'body scanner', zh: '人體掃描儀', art: '🚶', note: '走進去叫 step into the scanner；金屬探測門是 metal detector。', example: 'Step into the scanner and hold your arms up.', exampleZh: '請走進掃描儀並把手舉高。' },
        { en: 'pat-down', zh: '人工搜身檢查', art: '🤚', note: '被抽檢時會說 “I just need to do a quick pat-down”。', example: 'I’m just going to do a quick pat-down, is that alright?', exampleZh: '我要做一下簡單的人工檢查，可以嗎？' },
        { en: 'to set off the alarm', zh: '（金屬探測）發出警報', art: '🚨', note: '常見原因：皮帶、鑰匙、髮夾。', example: 'My belt set the alarm off again.', exampleZh: '我的皮帶又讓警報響了。' },
        { en: 'departure lounge', zh: '出境候機大廳', art: '🪑', note: '登機門開放前待的地方；貴賓室叫 the lounge。', example: 'We’ve got two hours to kill in the departure lounge.', exampleZh: '我們要在候機大廳耗兩個小時。' },
        { en: 'duty free', zh: '免稅商店', art: '🛍️', note: '免稅額度叫 duty-free allowance；超過要 declare（申報）。', example: 'Everyone gets funnelled through duty free these days.', exampleZh: '現在每個人都被動線引導穿過免稅店。' },
        { en: 'boarding gate', zh: '登機門', art: '🚪', note: '換登機門叫 a gate change；廣播會說 “gate change for flight…”。', example: 'There’s been a gate change — we’re at 42 now.', exampleZh: '登機門換了——我們現在在四十二號。' },
        { en: 'final call', zh: '最後登機廣播', art: '📢', note: '順序是 boarding → last call / final call → gate closing。', example: 'That’s the final call for our flight — run!', exampleZh: '那是我們班機的最後廣播——快跑！' },
        { en: 'to board', zh: '登機', art: '✈️', note: '分批登機叫 boarding by group / by row；優先登機是 priority boarding。', example: 'They’re boarding rows twenty and above now.', exampleZh: '他們現在開放第二十排以後的旅客登機。' }
      ]
    },
    {
      id: 'customs',
      icon: '🛃',
      title: 'Immigration & Customs',
      titleZh: '入境與海關',
      blurb: '入境官與海關會問的問題，以及該怎麼答。',
      items: [
        { en: 'passport control', zh: '證照查驗', art: '🛂', note: '也叫 immigration 或 border control；排隊分 UK/EU passports 與 all other passports。', example: 'The queue at passport control was massive.', exampleZh: '證照查驗的隊伍超長。' },
        { en: 'e-gates', zh: '自動通關閘門', art: '🚧', note: '英國開放部分國籍使用；掃護照晶片與臉部辨識（facial recognition）。', example: 'You can use the e-gates with a biometric passport.', exampleZh: '持晶片護照可以走自動通關。' },
        { en: 'purpose of visit', zh: '入境目的', art: '❓', note: '標準答案：business、tourism、visiting family、studying。', example: '“What’s the purpose of your visit?” “Tourism — two weeks.”', exampleZh: '「您此行的目的是什麼？」「觀光——兩週。」' },
        { en: 'length of stay', zh: '停留天數', art: '📅', note: '常問 How long are you staying?；回答 “Ten days.” 就好，不用整句。', example: 'How long are you planning to stay in the UK?', exampleZh: '您預計在英國停留多久？' },
        { en: 'return ticket', zh: '回程機票', art: '🎫', note: '入境官可能要求出示；也可能問 proof of onward travel（續程證明）。', example: 'Do you have a return ticket you can show me?', exampleZh: '您有回程機票可以出示嗎？' },
        { en: 'to declare', zh: '申報', art: '📝', note: '海關核心動詞；“Do you have anything to declare?” 是經典問句。', example: 'Do you have anything to declare?', exampleZh: '您有任何要申報的物品嗎？' },
        { en: 'nothing to declare', zh: '無須申報（綠線）', art: '🟢', note: '綠色通道 the green channel；紅色是 the red channel（有物品要申報）。', example: 'Green channel if you’ve got nothing to declare.', exampleZh: '沒有東西要申報就走綠色通道。' },
        { en: 'duty-free allowance', zh: '免稅攜帶額度', art: '🍾', note: '菸酒有數量上限，超過要繳 duty（關稅）與 VAT。', example: 'You’re over the allowance, so there’ll be duty to pay.', exampleZh: '您超過免稅額度了，需要繳關稅。' },
        { en: 'prohibited items', zh: '禁止攜帶物品', art: '🚫', note: '英國嚴禁攜帶肉類與乳製品入境；受限制的叫 restricted items。', example: 'Meat and dairy are prohibited items coming into the UK.', exampleZh: '肉類和乳製品是禁止帶入英國的物品。' },
        { en: 'to be searched', zh: '被開箱檢查', art: '🔎', note: '海關抽查說 to pull someone aside（把人叫到旁邊）。', example: 'They pulled me aside and searched my case.', exampleZh: '他們把我叫到旁邊，開箱檢查我的行李。' },
        { en: 'baggage reclaim', zh: '行李提領區', art: '🛄', note: '英式 baggage reclaim，美式 baggage claim；轉盤是 carousel。', example: 'Our bags are on carousel four.', exampleZh: '我們的行李在四號轉盤。' },
        { en: 'customs', zh: '海關', art: '🛃', note: '過海關 to go through customs；海關人員是 customs officer。', example: 'We got through customs without being stopped.', exampleZh: '我們過海關沒有被攔下來。' },
        { en: 'visa', zh: '簽證', art: '📗', note: '免簽是 visa-free 或 visa waiver；英國的電子許可叫 ETA。', example: 'You’ll need an ETA before you fly, even visa-free.', exampleZh: '就算免簽，飛之前也要先申請電子許可。' }
      ]
    },
    {
      id: 'on-board',
      icon: '💺',
      title: 'On Board',
      titleZh: '機艙內',
      blurb: '座位、行李櫃、亂流與轉機。',
      items: [
        { en: 'cabin crew', zh: '空服員', art: '👩‍✈️', note: '整體叫 cabin crew；單一人員叫 flight attendant。', example: 'Cabin crew, doors to manual and cross-check.', exampleZh: '客艙組員，艙門調至手動並交叉檢查。' },
        { en: 'overhead locker', zh: '行李置物櫃', art: '🧳', note: '英式 overhead locker，美式 overhead bin；滿了說 the lockers are full。', example: 'Could you put that in the overhead locker, please?', exampleZh: '可以請您把那個放進上方置物櫃嗎？' },
        { en: 'to stow', zh: '收好、放妥', art: '📥', note: '機上廣播用字：stow your bag under the seat in front。', example: 'Please stow your bag under the seat in front of you.', exampleZh: '請把您的包包放到前方座位下方。' },
        { en: 'tray table', zh: '餐桌板', art: '🍽️', note: '起降時要 stow the tray table（收起餐桌板）。', example: 'Tray tables up and seats upright for landing.', exampleZh: '降落前請收起餐桌板並將椅背豎直。' },
        { en: 'upright position', zh: '（椅背）直立狀態', art: '🪑', note: '固定用語 in the upright position；把椅背放倒是 to recline。', example: 'Please return your seat to the upright position.', exampleZh: '請將您的座椅調回直立狀態。' },
        { en: 'turbulence', zh: '亂流', art: '🌪️', note: '輕微是 light turbulence，嚴重是 severe；顛簸的口語是 bumpy。', example: 'It’s going to get a bit bumpy — we’re hitting some turbulence.', exampleZh: '會有點顛簸——我們遇到一些亂流。' },
        { en: 'seatbelt sign', zh: '安全帶指示燈', art: '🔔', note: '亮燈叫 the seatbelt sign is on；熄燈是 switched off。', example: 'The seatbelt sign has been switched off.', exampleZh: '安全帶指示燈已經熄滅。' },
        { en: 'connecting flight', zh: '轉機班機', art: '🔀', note: '轉機時間叫 layover（美式）或 stopover；過境是 transit。', example: 'I’ve got a connecting flight in Amsterdam.', exampleZh: '我在阿姆斯特丹要轉機。' },
        { en: 'layover', zh: '轉機停留時間', art: '⏳', note: '短說 a tight connection（時間很趕），長說 a long layover。', example: 'It’s a tight connection — only fifty minutes.', exampleZh: '轉機時間很趕——只有五十分鐘。' },
        { en: 'jet lag', zh: '時差', art: '😴', note: '形容詞 jet-lagged；倒時差叫 to get over the jet lag。', example: 'I’m completely jet-lagged — I woke up at four.', exampleZh: '我時差超嚴重——四點就醒了。' },
        { en: 'aisle', zh: '走道', art: '🚶', note: '和超市走道同字，s 不發音；走道座位是 an aisle seat。', example: 'I always book an aisle seat on long flights.', exampleZh: '長途飛行我一定訂走道座位。' },
        { en: 'to land', zh: '降落', art: '🛬', note: '起飛是 to take off；準點是 on time，提早是 ahead of schedule。', example: 'We should be landing about twenty minutes early.', exampleZh: '我們應該會提早二十分鐘左右降落。' }
      ]
    },
    {
      id: 'stay',
      icon: '🏨',
      title: 'Where You Stay',
      titleZh: '住宿',
      blurb: '訂房、入住、退房，還有房型的英式說法。',
      items: [
        { en: 'to check in', zh: '辦理入住', art: '🔑', note: '退房是 to check out；提早寄放行李叫 luggage storage。', example: 'Check-in is from three, but you can leave your bags.', exampleZh: '三點開始入住，但您可以先寄放行李。' },
        { en: 'reception', zh: '櫃檯', art: '🛎️', note: '英式 reception，美式 front desk；櫃檯人員是 receptionist。', example: 'Just drop the key at reception when you leave.', exampleZh: '離開時把鑰匙放在櫃檯就好。' },
        { en: 'double room', zh: '雙人房（一張大床）', art: '🛏️', note: 'twin room 是兩張單人床，double 是一張大床——訂房別搞錯。', example: 'Is that a double or a twin? We’d rather have twin beds.', exampleZh: '那是大床房還是兩小床？我們比較想要兩張單人床。' },
        { en: 'en suite', zh: '房內附衛浴', art: '🚿', note: '英式常用；沒有的話是 shared bathroom（共用衛浴）。', example: 'All the rooms are en suite except the attic one.', exampleZh: '除了閣樓那間，所有房間都附衛浴。' },
        { en: 'key card', zh: '房卡', art: '💳', note: '失效說 the key card’s stopped working，要拿去 reactivate。', example: 'My key card’s stopped working again.', exampleZh: '我的房卡又失效了。' },
        { en: 'breakfast included', zh: '含早餐', art: '🍳', note: '英式旅館常見 full English breakfast；不含早餐是 room only。', example: 'Is breakfast included, or is it extra?', exampleZh: '有含早餐嗎，還是要另外付費？' },
        { en: 'deposit', zh: '押金', art: '💷', note: '刷卡預授權叫 to hold an amount on your card。', example: 'They take a fifty-pound deposit on the card.', exampleZh: '他們會在卡上預刷五十英鎊押金。' },
        { en: 'late check-out', zh: '延後退房', art: '🕐', note: '可以問 Is a late check-out possible?；通常要加價。', example: 'Any chance of a late check-out on Sunday?', exampleZh: '週日有可能延後退房嗎？' },
        { en: 'self-catering', zh: '有廚房可自炊的住宿', art: '🍳', note: '英式用語，指公寓式住宿；含三餐是 full board，含早晚餐是 half board。', example: 'We booked a self-catering flat so we can cook.', exampleZh: '我們訂了有廚房的公寓，可以自己煮。' },
        { en: 'B&B', zh: '民宿（附早餐）', art: '🏡', note: 'bed and breakfast 的縮寫，英國鄉間非常普遍。', example: 'We stayed in a lovely little B&B in the Cotswolds.', exampleZh: '我們住在科茲窩一間很棒的小民宿。' },
        { en: 'hostel', zh: '青年旅館', art: '🛌', note: '多人房叫 a dorm；單人房叫 a private room。', example: 'A six-bed dorm was all they had left.', exampleZh: '他們只剩六人房的床位了。' },
        { en: 'to book', zh: '預訂', art: '📱', note: '英式 to book，美式 to make a reservation；已訂滿是 fully booked。', example: 'Book it now — it’ll be fully booked by tonight.', exampleZh: '現在就訂——今晚之前就會訂滿了。' }
      ]
    },
    {
      id: 'getting-around',
      icon: '🚆',
      title: 'Getting Around',
      titleZh: '當地交通',
      blurb: '買票、搭車、租車，英式說法和美式差很多。',
      items: [
        { en: 'single ticket', zh: '單程票', art: '🎟️', note: '英式 single，美式 one-way；來回票是 return（美式 round trip）。', example: 'A single to Oxford, please.', exampleZh: '請給我一張到牛津的單程票。' },
        { en: 'return ticket', zh: '來回票', art: '🎟️', note: '當日來回叫 day return；英國常常來回票比單程只貴一點點。', example: 'A day return is barely more than a single.', exampleZh: '當日來回票只比單程貴一點點。' },
        { en: 'platform', zh: '月台', art: '🚉', note: '英式 platform，美式 track；廣播會說 the train on platform three。', example: 'The Manchester train leaves from platform nine.', exampleZh: '往曼徹斯特的火車在九號月台發車。' },
        { en: 'the Tube', zh: '倫敦地鐵', art: '🚇', note: '倫敦專用暱稱；其他城市說 the metro 或 the underground。', example: 'It’s three stops on the Tube from here.', exampleZh: '從這裡搭地鐵三站就到了。' },
        { en: 'to tap in', zh: '（感應卡）刷進站', art: '💳', note: '出站是 tap out；忘了刷出會被收 maximum fare（最高票價）。', example: 'Don’t forget to tap out or they’ll charge you the maximum fare.', exampleZh: '別忘了出站刷卡，不然會被收最高票價。' },
        { en: 'coach', zh: '長途巴士', art: '🚌', note: '英式陷阱字：coach 是長途巴士，bus 是市區公車。', example: 'The coach to Bristol takes about two and a half hours.', exampleZh: '到布里斯托的長途巴士大約要兩個半小時。' },
        { en: 'taxi rank', zh: '計程車招呼站', art: '🚕', note: '英式 taxi rank，美式 taxi stand；招手叫車是 to hail a cab。', example: 'There’s a taxi rank just outside arrivals.', exampleZh: '入境大廳外面就有計程車招呼站。' },
        { en: 'hire car', zh: '租來的車', art: '🚗', note: '英式 car hire，美式 car rental；還車是 to drop the car off。', example: 'We picked the hire car up at the airport.', exampleZh: '我們在機場取的租車。' },
        { en: 'petrol', zh: '汽油', art: '⛽', note: '英式 petrol，美式 gas；柴油是 diesel，加油站是 petrol station。', example: 'Fill it up with petrol before you drop it off.', exampleZh: '還車前先把油加滿。' },
        { en: 'motorway', zh: '高速公路', art: '🛣️', note: '英式 motorway（M25 之類），美式 highway / freeway；塞車是 a traffic jam。', example: 'The motorway was at a standstill for an hour.', exampleZh: '高速公路整整塞了一小時動彈不得。' },
        { en: 'roundabout', zh: '圓環', art: '🔄', note: '英國到處都是；出口說 take the second exit（走第二個出口）。', example: 'Take the second exit at the roundabout.', exampleZh: '在圓環走第二個出口。' },
        { en: 'to change', zh: '轉乘', art: '🔀', note: '“change at Reading” 是英國火車廣播的固定句型。', example: 'You’ll need to change at Reading for Bath.', exampleZh: '要去巴斯的話你得在雷丁轉車。' }
      ]
    },
    {
      id: 'gone-wrong',
      icon: '⚠️',
      title: 'When It Goes Wrong',
      titleZh: '旅途出狀況',
      blurb: '誤點、行李遺失、超賣——爭取權益時要用的字。',
      items: [
        { en: 'delayed', zh: '誤點的', art: '⏰', note: '看板上的 delayed；延誤多久說 delayed by two hours。', example: 'Our flight’s delayed by three hours.', exampleZh: '我們的班機誤點三小時。' },
        { en: 'cancelled', zh: '取消的', art: '❌', note: '英式拼雙 l；被改到別班叫 to be rebooked onto another flight。', example: 'The flight’s been cancelled — they’re rebooking everyone.', exampleZh: '班機取消了——他們正在幫大家改訂。' },
        { en: 'to miss a connection', zh: '沒趕上轉機', art: '🏃', note: '因為前段誤點造成的，航空公司通常有義務安排後續。', example: 'If we’re this late we’ll miss our connection.', exampleZh: '這麼晚的話我們會趕不上轉機。' },
        { en: 'lost luggage', zh: '行李遺失', art: '🧳', note: '報失叫 to report it at the baggage desk；填的表格叫 a PIR。', example: 'My case didn’t come out — where do I report lost luggage?', exampleZh: '我的行李箱沒出來——遺失行李要去哪裡申報？' },
        { en: 'delayed baggage', zh: '行李延遲抵達', art: '📦', note: '比遺失常見；航空公司會 deliver it to your address（送到你住的地方）。', example: 'They said the bag’s delayed and they’ll deliver it tomorrow.', exampleZh: '他們說行李延遲，明天會送到。' },
        { en: 'overbooked', zh: '超賣的', art: '🙅', note: '航空公司賣超座位；自願讓位叫 to volunteer to be bumped，會拿補償。', example: 'The flight’s overbooked — they’re asking for volunteers.', exampleZh: '這班超賣了——他們正在徵求自願讓位的旅客。' },
        { en: 'compensation', zh: '賠償金', art: '💷', note: '歐洲／英國有明確規定（EU261 / UK261），長時間延誤可申請。', example: 'You can claim compensation if it’s over three hours.', exampleZh: '延誤超過三小時就可以申請賠償。' },
        { en: 'to claim', zh: '申請理賠', art: '📄', note: '保險理賠 to make a claim；收據是 receipts，要留著。', example: 'Keep all your receipts so you can claim later.', exampleZh: '所有收據都留著，之後才能申請理賠。' },
        { en: 'travel insurance', zh: '旅遊保險', art: '🛡️', note: '涵蓋範圍叫 cover；自負額是 excess（英式）或 deductible（美式）。', example: 'Does your travel insurance cover cancellations?', exampleZh: '你的旅遊保險有涵蓋取消嗎？' },
        { en: 'refund', zh: '退款', art: '↩️', note: '全額退款 a full refund；改票是 to change the booking。', example: 'Am I entitled to a full refund?', exampleZh: '我有權要求全額退款嗎？' },
        { en: 'to be stranded', zh: '被困住、回不去', art: '🆘', note: '因罷工或天候被困在機場；罷工是 strike，industrial action。', example: 'We were stranded at the airport overnight.', exampleZh: '我們整晚被困在機場。' },
        { en: 'pickpocket', zh: '扒手', art: '👜', note: '動詞 to be pickpocketed；報警叫 to report it to the police，報案單是 police report。', example: 'Watch your bag — this street’s known for pickpockets.', exampleZh: '看好你的包——這條街扒手很有名。' }
      ]
    }
  ]
}
