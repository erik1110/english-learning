// Situations pack 8 — out and about & life stages (directions, car accidents/
// insurance, buying a used car, pet shop, evening classes, parents' evening,
// retirement, bookshop). 3 dialogues per category, 11 lines each, alternating voices.

export const PACK8 = [
  {
    id: 'directions',
    title: 'Asking for Directions',
    titleZh: '問路與迷路',
    icon: '🧭',
    blurb: '問路、看地圖、迷路求助時的實用對話',
    scenarios: [
      {
        id: 'directions-street',
        title: 'Lost in town',
        titleZh: '在市區迷路',
        description: 'Stopping a passer-by for directions.',
        lines: [
          { speaker: 'Sam', gender: 'male', text: 'Excuse me, sorry — could you help me find the museum?', zh: '不好意思，抱歉——您能幫我找博物館嗎？' },
          { speaker: 'Local', gender: 'female', text: 'Of course. It’s not far, just a five-minute walk.', zh: '當然。不遠，走五分鐘就到。' },
          { speaker: 'Sam', gender: 'male', text: 'Brilliant. Which way do I go?', zh: '太好了。我要往哪走？' },
          { speaker: 'Local', gender: 'female', text: 'Head straight down here and take the second left.', zh: '沿這條直走，第二個路口左轉。' },
          { speaker: 'Sam', gender: 'male', text: 'Second left, got it. Then what?', zh: '第二個左轉，知道了。然後呢？' },
          { speaker: 'Local', gender: 'female', text: 'Keep going past the church and it’s on your right.', zh: '經過教堂繼續走，它就在你右手邊。' },
          { speaker: 'Sam', gender: 'male', text: 'Can’t miss it, then?', zh: '所以不會錯過囉？' },
          { speaker: 'Local', gender: 'female', text: 'You can’t — it’s a big stone building with columns.', zh: '不會——是一棟有柱子的大石頭建築。' },
          { speaker: 'Sam', gender: 'male', text: 'Perfect. Is it walkable, or should I get the bus?', zh: '太好了。用走的可以嗎，還是該搭公車？' },
          { speaker: 'Local', gender: 'female', text: 'Honestly, you’ll be there before a bus comes.', zh: '老實說，你會比公車先到。' },
          { speaker: 'Sam', gender: 'male', text: 'Thank you so much, that’s really kind.', zh: '太感謝您了，您人真好。' }
        ]
      },
      {
        id: 'directions-driving',
        title: 'Directions while driving',
        titleZh: '開車問路',
        description: 'Navigating with a passenger when the sat nav fails.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'The sat nav’s lost signal. Can you read the map?', zh: '導航沒訊號了。你能看地圖嗎？' },
          { speaker: 'Anna', gender: 'female', text: 'I’ll try. Where are we trying to get to again?', zh: '我試試。我們是要去哪來著？' },
          { speaker: 'Tom', gender: 'male', text: 'The garden centre, just off the ring road.', zh: '園藝中心，就在環城路旁。' },
          { speaker: 'Anna', gender: 'female', text: 'Right, take the next exit at the roundabout.', zh: '好，下個圓環走那個出口。' },
          { speaker: 'Tom', gender: 'male', text: 'Which exit, first or second?', zh: '哪個出口，第一還是第二？' },
          { speaker: 'Anna', gender: 'female', text: 'The second, signposted for the retail park.', zh: '第二個，指標寫往購物園區。' },
          { speaker: 'Tom', gender: 'male', text: 'Got it. Then is it left or right?', zh: '知道了。然後左轉還右轉？' },
          { speaker: 'Anna', gender: 'female', text: 'Left at the lights, then it’s signposted.', zh: '紅綠燈左轉，之後就有指標了。' },
          { speaker: 'Tom', gender: 'male', text: 'Good. Shout if I need to turn.', zh: '好。要轉的話喊我一聲。' },
          { speaker: 'Anna', gender: 'female', text: 'Will do. Actually, there it is, on the left!', zh: '會的。其實，到了，在左邊！' },
          { speaker: 'Tom', gender: 'male', text: 'Nice one. We got there without the sat nav!', zh: '太棒了。沒靠導航我們也到了！' }
        ]
      },
      {
        id: 'directions-station',
        title: 'Finding the station',
        titleZh: '找車站',
        description: 'A tourist asking how to get to the train station.',
        lines: [
          { speaker: 'Tourist', gender: 'female', text: 'Hi, sorry — how do I get to the train station from here?', zh: '嗨，抱歉——請問從這裡怎麼去火車站？' },
          { speaker: 'Local', gender: 'male', text: 'It’s a fair walk, about fifteen minutes.', zh: '要走一段，大約十五分鐘。' },
          { speaker: 'Tourist', gender: 'female', text: 'Oh, okay. Is it straightforward to find?', zh: '喔，好。容易找嗎？' },
          { speaker: 'Local', gender: 'male', text: 'Fairly. Go down the high street to the end.', zh: '還算容易。沿著大街走到底。' },
          { speaker: 'Tourist', gender: 'female', text: 'Down to the very end?', zh: '一直走到最底？' },
          { speaker: 'Local', gender: 'male', text: 'Yes, then turn right at the big roundabout.', zh: '對，然後在那個大圓環右轉。' },
          { speaker: 'Tourist', gender: 'female', text: 'Right at the roundabout. And after that?', zh: '圓環右轉。然後呢？' },
          { speaker: 'Local', gender: 'male', text: 'Follow the brown signs — they point the way.', zh: '跟著棕色的標誌走——會指引你。' },
          { speaker: 'Tourist', gender: 'female', text: 'Brilliant. Is there a quicker way, by any chance?', zh: '太好了。有沒有更快的路？' },
          { speaker: 'Local', gender: 'male', text: 'You could hop on the number nine bus outside.', zh: '你可以搭外面的九號公車。' },
          { speaker: 'Tourist', gender: 'female', text: 'Even better. Thanks ever so much!', zh: '那更好了。非常感謝！' }
        ]
      }
    ]
  },
  {
    id: 'caraccident',
    title: 'Car Accidents & Insurance',
    titleZh: '車禍與保險理賠',
    icon: '💥',
    blurb: '擦撞、交換資料、保險理賠時的對話',
    scenarios: [
      {
        id: 'caraccident-bump',
        title: 'A minor bump',
        titleZh: '輕微擦撞',
        description: 'Exchanging details after a small collision.',
        lines: [
          { speaker: 'Mark', gender: 'male', text: 'Are you alright? That was a bit of a bump.', zh: '你還好嗎？剛剛撞得有點大。' },
          { speaker: 'Eve', gender: 'female', text: 'I’m fine, just a bit shaken. You?', zh: '我沒事，只是有點受驚。你呢？' },
          { speaker: 'Mark', gender: 'male', text: 'No harm done. Let’s swap details, just in case.', zh: '沒受傷。我們交換一下資料，以防萬一。' },
          { speaker: 'Eve', gender: 'female', text: 'Good idea. There’s a scratch on your bumper.', zh: '好主意。你的保險桿有道刮痕。' },
          { speaker: 'Mark', gender: 'male', text: 'And a small dent on yours, I’m afraid.', zh: '恐怕你的也有個小凹痕。' },
          { speaker: 'Eve', gender: 'female', text: 'Let’s take some photos for the insurance.', zh: '我們拍些照片給保險用。' },
          { speaker: 'Mark', gender: 'male', text: 'Sensible. Can I get your name and number?', zh: '明智。可以給我你的姓名和電話嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Of course. And your registration too, please.', zh: '當然。也麻煩給我你的車牌號碼。' },
          { speaker: 'Mark', gender: 'male', text: 'Here you go. Shall we leave it to the insurers?', zh: '給你。我們交給保險公司處理好嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Yes, no need to involve anyone else.', zh: '好，不用牽扯到其他人。' },
          { speaker: 'Mark', gender: 'male', text: 'Agreed. Glad we’re both okay, that’s the main thing.', zh: '同意。還好我們都沒事，這才最重要。' }
        ]
      },
      {
        id: 'caraccident-claim',
        title: 'Making a claim',
        titleZh: '提出理賠',
        description: 'Phoning the insurance company.',
        lines: [
          { speaker: 'Agent', gender: 'female', text: 'Thanks for calling. How can I help?', zh: '感謝來電。有什麼能幫您？' },
          { speaker: 'Mark', gender: 'male', text: 'Hi, I’d like to make a claim after a minor accident.', zh: '您好，我發生了輕微車禍，想提出理賠。' },
          { speaker: 'Agent', gender: 'female', text: 'Sorry to hear that. Was anyone hurt?', zh: '很遺憾。有人受傷嗎？' },
          { speaker: 'Mark', gender: 'male', text: 'No, thankfully, just some damage to both cars.', zh: '還好沒有，只是兩台車都有些損傷。' },
          { speaker: 'Agent', gender: 'female', text: 'Good. Have you got the other driver’s details?', zh: '很好。您有對方駕駛的資料嗎？' },
          { speaker: 'Mark', gender: 'male', text: 'Yes, name, number and registration.', zh: '有，姓名、電話和車牌。' },
          { speaker: 'Agent', gender: 'female', text: 'Perfect. And do you have any photos?', zh: '太好了。有照片嗎？' },
          { speaker: 'Mark', gender: 'male', text: 'I do — I can email them straight over.', zh: '有——我可以馬上用郵件傳過去。' },
          { speaker: 'Agent', gender: 'female', text: 'Lovely. I’ll set up the claim and arrange repairs.', zh: '好的。我來開立理賠並安排維修。' },
          { speaker: 'Mark', gender: 'male', text: 'Will my premium go up because of this?', zh: '我的保費會因此調高嗎？' },
          { speaker: 'Agent', gender: 'female', text: 'It may at renewal, but I’ll talk you through it.', zh: '續約時可能會，但我會跟您說明清楚。' }
        ]
      },
      {
        id: 'caraccident-garage',
        title: 'Dropping the car off for repairs',
        titleZh: '送修受損車輛',
        description: 'Leaving the car at the body shop.',
        lines: [
          { speaker: 'Mechanic', gender: 'male', text: 'Morning. This the car from the insurance claim?', zh: '早安。這就是保險理賠那台車嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'That’s the one. It’s the dent on the door.', zh: '就是這台。是車門上的凹痕。' },
          { speaker: 'Mechanic', gender: 'male', text: 'Let’s have a look. Ah yes, and a bit of a scratch.', zh: '我看看。啊對，還有道刮痕。' },
          { speaker: 'Eve', gender: 'female', text: 'How long will it take to sort?', zh: '修好要多久？' },
          { speaker: 'Mechanic', gender: 'male', text: 'A couple of days, with the respray.', zh: '加上重新烤漆，大約兩天。' },
          { speaker: 'Eve', gender: 'female', text: 'Do I get a courtesy car in the meantime?', zh: '這期間我有代步車嗎？' },
          { speaker: 'Mechanic', gender: 'male', text: 'You do — it’s covered by your policy.', zh: '有——您的保單有涵蓋。' },
          { speaker: 'Eve', gender: 'female', text: 'Oh good. Is the paint an exact match?', zh: '喔太好了。烤漆顏色會一模一樣嗎？' },
          { speaker: 'Mechanic', gender: 'male', text: 'We colour-match it, so you won’t see the join.', zh: '我們會調色比對，您看不出接縫。' },
          { speaker: 'Eve', gender: 'female', text: 'Brilliant. You’ll ring me when it’s ready?', zh: '太好了。好了會打電話給我嗎？' },
          { speaker: 'Mechanic', gender: 'male', text: 'I’ll give you a bell the minute it’s done.', zh: '一弄好我馬上打給您。' }
        ]
      }
    ]
  },
  {
    id: 'usedcar',
    title: 'Buying a Used Car',
    titleZh: '買二手車',
    icon: '🚙',
    blurb: '看車、試駕、殺價時的實用對話',
    scenarios: [
      {
        id: 'usedcar-viewing',
        title: 'Looking the car over',
        titleZh: '檢視車況',
        description: 'Inspecting a second-hand car before buying.',
        lines: [
          { speaker: 'Dealer', gender: 'male', text: 'Here she is. Lovely little runner, this one.', zh: '就是這台。這台車況很好，很好開。' },
          { speaker: 'Tom', gender: 'male', text: 'How many miles has it done?', zh: '它跑了多少英里？' },
          { speaker: 'Dealer', gender: 'male', text: 'Just under sixty thousand. Full service history.', zh: '不到六萬。有完整保養紀錄。' },
          { speaker: 'Tom', gender: 'male', text: 'Has it had any accidents or repairs?', zh: '它有出過事故或修過嗎？' },
          { speaker: 'Dealer', gender: 'male', text: 'None at all. One careful owner from new.', zh: '完全沒有。一手車主，從新車就很愛惜。' },
          { speaker: 'Tom', gender: 'male', text: 'What about the MOT and the tyres?', zh: '那驗車和輪胎呢？' },
          { speaker: 'Dealer', gender: 'male', text: 'Fresh MOT, and the tyres have loads of tread.', zh: '剛驗過，輪胎胎紋也很足。' },
          { speaker: 'Tom', gender: 'male', text: 'Mind if I take it for a test drive?', zh: '介意我試駕一下嗎？' },
          { speaker: 'Dealer', gender: 'male', text: 'Not at all. Here are the keys.', zh: '完全不介意。鑰匙給您。' },
          { speaker: 'Tom', gender: 'male', text: 'Great. I’ll see how she handles.', zh: '太好了。我來看看它操控如何。' },
          { speaker: 'Dealer', gender: 'male', text: 'Take your time. She drives like a dream.', zh: '慢慢來。它開起來超順。' }
        ]
      },
      {
        id: 'usedcar-haggle',
        title: 'Haggling over the price',
        titleZh: '殺價',
        description: 'Negotiating the price after the test drive.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'It drives nicely. What’s your best price?', zh: '開起來不錯。你最低能給多少？' },
          { speaker: 'Dealer', gender: 'male', text: 'It’s up at four and a half grand.', zh: '標價是四千五。' },
          { speaker: 'Tom', gender: 'male', text: 'There’s a bit of wear on the seats, though.', zh: '不過座椅有點磨損。' },
          { speaker: 'Dealer', gender: 'male', text: 'Fair point. What were you thinking?', zh: '有道理。您心中的價位是？' },
          { speaker: 'Tom', gender: 'male', text: 'Would you take four thousand cash?', zh: '付現四千你願意嗎？' },
          { speaker: 'Dealer', gender: 'male', text: 'That’s a bit tight. Meet me at four-two?', zh: '這有點低。四千二如何，各退一步？' },
          { speaker: 'Tom', gender: 'male', text: 'Four-one, and you throw in a full tank.', zh: '四千一，再幫我加滿油。' },
          { speaker: 'Dealer', gender: 'male', text: 'Go on, you’ve got yourself a deal.', zh: '好吧，成交。' },
          { speaker: 'Tom', gender: 'male', text: 'Brilliant. Does it come with a warranty?', zh: '太好了。有附保固嗎？' },
          { speaker: 'Dealer', gender: 'male', text: 'Three months, parts and labour included.', zh: '三個月，含零件和工錢。' },
          { speaker: 'Tom', gender: 'male', text: 'Perfect. Let’s sort the paperwork, then.', zh: '完美。那我們來辦手續吧。' }
        ]
      },
      {
        id: 'usedcar-paperwork',
        title: 'Sorting the paperwork',
        titleZh: '辦理過戶手續',
        description: 'Finalising the sale and transfer.',
        lines: [
          { speaker: 'Dealer', gender: 'male', text: 'Right, I just need a couple of signatures.', zh: '好，我需要您簽幾個名。' },
          { speaker: 'Tom', gender: 'male', text: 'No problem. Do I sort the logbook?', zh: '沒問題。行照過戶我來處理嗎？' },
          { speaker: 'Dealer', gender: 'male', text: 'I’ll handle the transfer of ownership online.', zh: '我會在線上辦理過戶。' },
          { speaker: 'Tom', gender: 'male', text: 'Great. And when does the tax need sorting?', zh: '太好了。那牌照稅什麼時候要辦？' },
          { speaker: 'Dealer', gender: 'male', text: 'You’ll need to tax it before you drive off.', zh: '您開走前就得先繳。' },
          { speaker: 'Tom', gender: 'male', text: 'I can do that on my phone now, can’t I?', zh: '我現在用手機就能繳，對吧？' },
          { speaker: 'Dealer', gender: 'male', text: 'You can, with the reference from the logbook.', zh: '可以，用行照上的參考號碼就行。' },
          { speaker: 'Tom', gender: 'male', text: 'And I should sort insurance before I leave too.', zh: '我離開前也該先辦好保險。' },
          { speaker: 'Dealer', gender: 'male', text: 'Definitely. Never drive without it.', zh: '絕對要。沒保險千萬別開。' },
          { speaker: 'Tom', gender: 'male', text: 'Done. Insured and taxed. Ready to go!', zh: '搞定。保險和牌照稅都辦好了。可以上路了！' },
          { speaker: 'Dealer', gender: 'male', text: 'Enjoy the car. Any issues, give me a ring.', zh: '好好享受這台車。有任何問題打給我。' }
        ]
      }
    ]
  },
  {
    id: 'petshop',
    title: 'At the Pet Shop',
    titleZh: '寵物店與美容',
    icon: '🐶',
    blurb: '買飼料、寵物美容、挑用品時的對話',
    scenarios: [
      {
        id: 'petshop-supplies',
        title: 'Buying pet supplies',
        titleZh: '買寵物用品',
        description: 'Stocking up for a new puppy.',
        lines: [
          { speaker: 'Assistant', gender: 'female', text: 'Hiya, can I help you find anything?', zh: '嗨，需要幫您找什麼嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'Yes, we’ve just got a puppy and need the basics.', zh: '對，我們剛養了隻小狗，需要基本用品。' },
          { speaker: 'Assistant', gender: 'female', text: 'Congratulations! What breed have you got?', zh: '恭喜！是什麼品種？' },
          { speaker: 'Sam', gender: 'male', text: 'A little spaniel. He’s into everything!', zh: '一隻小獵犬。他什麼都要玩！' },
          { speaker: 'Assistant', gender: 'female', text: 'Ha, they’re lively. You’ll want puppy food first.', zh: '哈，牠們很活潑。您會先需要幼犬飼料。' },
          { speaker: 'Sam', gender: 'male', text: 'Which would you recommend for his age?', zh: '以他的年紀您會推薦哪種？' },
          { speaker: 'Assistant', gender: 'female', text: 'This one’s gentle on their tummies.', zh: '這款對牠們的腸胃很溫和。' },
          { speaker: 'Sam', gender: 'male', text: 'Great. We’ll need a collar and lead too.', zh: '太好了。我們還需要項圈和牽繩。' },
          { speaker: 'Assistant', gender: 'female', text: 'Of course. And some chew toys to save your furniture!', zh: '當然。再來些咬咬玩具，拯救您的家具！' },
          { speaker: 'Sam', gender: 'male', text: 'Ha, good thinking. He’s already eyeing the sofa.', zh: '哈，想得周到。他已經在盯著沙發了。' },
          { speaker: 'Assistant', gender: 'female', text: 'Let me grab a basket — you’ll need a few bits.', zh: '我去拿個籃子——您需要不少東西。' }
        ]
      },
      {
        id: 'petshop-grooming',
        title: 'Booking a grooming session',
        titleZh: '預約寵物美容',
        description: 'Arranging a wash and trim for the dog.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'Hi, I’d like to book my dog in for a groom.', zh: '您好，我想幫我的狗預約美容。' },
          { speaker: 'Groomer', gender: 'male', text: 'Lovely. What sort of coat does he have?', zh: '好的。他是什麼樣的毛？' },
          { speaker: 'Eve', gender: 'female', text: 'Quite long and curly — it mats easily.', zh: '相當長又捲——很容易打結。' },
          { speaker: 'Groomer', gender: 'male', text: 'We’ll do a wash, trim and de-matting, then.', zh: '那我們幫他洗澡、修剪加除毛結。' },
          { speaker: 'Eve', gender: 'female', text: 'Perfect. Could you keep the length fairly short?', zh: '太好了。可以剪短一點嗎？' },
          { speaker: 'Groomer', gender: 'male', text: 'No problem. Trim the nails as well?', zh: '沒問題。指甲也要修嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Yes please, he hates having them done at home.', zh: '好，麻煩了，他在家最討厭剪指甲。' },
          { speaker: 'Groomer', gender: 'male', text: 'We’ll be gentle. Is he okay with the dryer?', zh: '我們會輕輕的。他能接受吹風機嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Mostly, as long as it’s not too loud.', zh: '大致可以，只要不要太大聲。' },
          { speaker: 'Groomer', gender: 'male', text: 'We’ll keep it low. He’ll be done in about an hour.', zh: '我們會開小聲。他大約一小時就好。' },
          { speaker: 'Eve', gender: 'female', text: 'Brilliant. I’ll pop back then. Be good, boy!', zh: '太好了。那我等等回來。要乖喔，寶貝！' }
        ]
      },
      {
        id: 'petshop-advice',
        title: 'Asking for advice',
        titleZh: '諮詢飼養建議',
        description: 'Getting advice about a fussy eater.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'My cat’s gone really fussy with her food.', zh: '我的貓最近吃飯變得很挑。' },
          { speaker: 'Assistant', gender: 'female', text: 'Oh, cats can be like that. Has anything changed?', zh: '喔，貓常常這樣。有什麼改變嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Not really. She just turns her nose up at it.', zh: '沒什麼。她就是對食物嗤之以鼻。' },
          { speaker: 'Assistant', gender: 'female', text: 'Have you tried warming the food slightly?', zh: '您試過把食物稍微加溫嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'No — does that actually make a difference?', zh: '沒有——那真的有差嗎？' },
          { speaker: 'Assistant', gender: 'female', text: 'It brings out the smell, which tempts them.', zh: '會把香味帶出來，吸引牠們。' },
          { speaker: 'Tom', gender: 'male', text: 'Worth a go. Should I switch brands?', zh: '值得一試。我該換牌子嗎？' },
          { speaker: 'Assistant', gender: 'female', text: 'Try it gradually, mixing the old with the new.', zh: '慢慢換，把舊的和新的混在一起。' },
          { speaker: 'Tom', gender: 'male', text: 'Good shout. Any particular flavour you’d suggest?', zh: '好建議。您會推薦哪種口味？' },
          { speaker: 'Assistant', gender: 'female', text: 'Most fussy ones can’t resist this fish range.', zh: '大多數挑食的貓都抗拒不了這個魚肉系列。' },
          { speaker: 'Tom', gender: 'male', text: 'I’ll give it a try. Thanks for all the tips.', zh: '我來試試。謝謝您這些建議。' }
        ]
      }
    ]
  },
  {
    id: 'eveningclass',
    title: 'Evening Classes & Learning',
    titleZh: '進修與才藝課',
    icon: '🎨',
    blurb: '報名課程、上才藝班、學新技能時的對話',
    scenarios: [
      {
        id: 'eveningclass-signup',
        title: 'Signing up for a course',
        titleZh: '報名課程',
        description: 'Enrolling on an evening pottery class.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'Hi, I’m interested in the evening pottery course.', zh: '您好，我對晚間陶藝課程有興趣。' },
          { speaker: 'Tutor', gender: 'male', text: 'Wonderful! Have you done any pottery before?', zh: '太好了！您之前做過陶藝嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'None at all — I’m a complete beginner.', zh: '完全沒有——我是徹底的新手。' },
          { speaker: 'Tutor', gender: 'male', text: 'No worries, the course starts from scratch.', zh: '別擔心，課程從零開始教。' },
          { speaker: 'Eve', gender: 'female', text: 'Great. How long does it run for?', zh: '太好了。課程上多久？' },
          { speaker: 'Tutor', gender: 'male', text: 'Ten weeks, every Tuesday from seven.', zh: '十週，每週二晚上七點開始。' },
          { speaker: 'Eve', gender: 'female', text: 'And is everything provided, or do I bring tools?', zh: '工具都有提供，還是我要自備？' },
          { speaker: 'Tutor', gender: 'male', text: 'All materials are included in the fee.', zh: '所有材料都含在費用裡。' },
          { speaker: 'Eve', gender: 'female', text: 'Perfect. Are there still spaces left?', zh: '太好了。還有名額嗎？' },
          { speaker: 'Tutor', gender: 'male', text: 'A couple. I’d sign up soon to be sure.', zh: '還剩幾個。保險起見我建議盡早報名。' },
          { speaker: 'Eve', gender: 'female', text: 'I’ll do it now. I’ve always wanted to try this.', zh: '我現在就報。我一直都想試試。' }
        ]
      },
      {
        id: 'eveningclass-language',
        title: 'A language class',
        titleZh: '語言課',
        description: 'First night at a beginners’ Spanish class.',
        lines: [
          { speaker: 'Teacher', gender: 'female', text: 'Welcome, everyone. Why are you learning Spanish?', zh: '歡迎大家。你們為什麼想學西班牙文？' },
          { speaker: 'Dan', gender: 'male', text: 'We’re moving there next year, so it’s essential.', zh: '我們明年要搬去那裡，所以很必要。' },
          { speaker: 'Teacher', gender: 'female', text: 'How exciting! Do you know any Spanish yet?', zh: '太令人興奮了！你會一些西班牙文嗎？' },
          { speaker: 'Dan', gender: 'male', text: 'Only “hola” and “gracias”, embarrassingly.', zh: '尷尬的是只會「你好」和「謝謝」。' },
          { speaker: 'Teacher', gender: 'female', text: 'That’s a perfect place to start. Don’t worry.', zh: '那是完美的起點。別擔心。' },
          { speaker: 'Dan', gender: 'male', text: 'I’m a bit nervous about speaking out loud.', zh: '我有點害怕開口說。' },
          { speaker: 'Teacher', gender: 'female', text: 'Everyone is at first. We learn by making mistakes.', zh: '一開始大家都這樣。我們從錯誤中學習。' },
          { speaker: 'Dan', gender: 'male', text: 'That’s reassuring. Is there much homework?', zh: '這讓我安心。功課多嗎？' },
          { speaker: 'Teacher', gender: 'female', text: 'Just a little practice each week — nothing scary.', zh: '每週一點點練習——不可怕的。' },
          { speaker: 'Dan', gender: 'male', text: 'Great. I really want to give it my best shot.', zh: '太好了。我真的想全力以赴。' },
          { speaker: 'Teacher', gender: 'female', text: 'That attitude will take you far. ¡Vamos!', zh: '這種態度會讓你進步很多。我們開始吧！' }
        ]
      },
      {
        id: 'eveningclass-progress',
        title: 'How’s the course going?',
        titleZh: '課程上得如何',
        description: 'Two classmates comparing notes after a few weeks.',
        lines: [
          { speaker: 'Holly', gender: 'female', text: 'How are you finding the course so far?', zh: '你覺得這課程到目前為止如何？' },
          { speaker: 'Sam', gender: 'male', text: 'I’m loving it, actually. Harder than I expected.', zh: '其實我很喜歡。比我想的難。' },
          { speaker: 'Holly', gender: 'female', text: 'Same. But I’m surprised how much I’ve picked up.', zh: '我也是。但我很訝異自己學了這麼多。' },
          { speaker: 'Sam', gender: 'male', text: 'The teacher makes it really easy to follow.', zh: '老師教得很好懂。' },
          { speaker: 'Holly', gender: 'female', text: 'She does. Did you manage the homework?', zh: '是啊。你功課做完了嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'Most of it. I got stuck on the last bit.', zh: '大部分。最後一段卡住了。' },
          { speaker: 'Holly', gender: 'female', text: 'We could go through it together before class.', zh: '我們可以上課前一起看。' },
          { speaker: 'Sam', gender: 'male', text: 'That’d be brilliant, thanks.', zh: '那太好了，謝謝。' },
          { speaker: 'Holly', gender: 'female', text: 'No bother. It sticks better when you explain it.', zh: '別客氣。教別人反而記得更牢。' },
          { speaker: 'Sam', gender: 'male', text: 'True. Fancy a coffee before we head in?', zh: '是啊。進教室前要不要先喝杯咖啡？' },
          { speaker: 'Holly', gender: 'female', text: 'Go on then. We can revise over a brew.', zh: '好啊。我們可以邊喝邊複習。' }
        ]
      }
    ]
  },
  {
    id: 'parentseve',
    title: 'Parents’ Evening',
    titleZh: '學校家長會',
    icon: '🏫',
    blurb: '與老師談孩子在校表現的對話',
    scenarios: [
      {
        id: 'parentseve-progress',
        title: 'Talking to the teacher',
        titleZh: '與老師談表現',
        description: 'Discussing a child’s progress at school.',
        lines: [
          { speaker: 'Teacher', gender: 'female', text: 'Thanks for coming in. Take a seat.', zh: '謝謝您來。請坐。' },
          { speaker: 'Mum', gender: 'female', text: 'Thank you. So, how is Leo getting on?', zh: '謝謝。那麼，Leo 表現如何？' },
          { speaker: 'Teacher', gender: 'female', text: 'Really well. He’s come on leaps and bounds.', zh: '非常好。他進步神速。' },
          { speaker: 'Mum', gender: 'female', text: 'That’s lovely to hear. How’s his reading?', zh: '聽到真開心。他的閱讀如何？' },
          { speaker: 'Teacher', gender: 'female', text: 'Above average now. He reads with real confidence.', zh: '現在高於平均了。他讀得很有自信。' },
          { speaker: 'Mum', gender: 'female', text: 'And how does he get on with the other children?', zh: '那他跟其他孩子相處得如何？' },
          { speaker: 'Teacher', gender: 'female', text: 'Very well. He’s kind and always includes others.', zh: '非常好。他很善良，總會把別人一起拉進來。' },
          { speaker: 'Mum', gender: 'female', text: 'Is there anything he needs to work on?', zh: '有什麼是他需要加強的嗎？' },
          { speaker: 'Teacher', gender: 'female', text: 'Just his maths confidence, but he’s improving.', zh: '就是數學的信心，不過他正在進步。' },
          { speaker: 'Mum', gender: 'female', text: 'We’ll practise a bit more at home.', zh: '我們會在家多練習一些。' },
          { speaker: 'Teacher', gender: 'female', text: 'That would help. Overall, you should be very proud.', zh: '那會有幫助。整體來說，您應該很驕傲。' }
        ]
      },
      {
        id: 'parentseve-concern',
        title: 'Raising a concern',
        titleZh: '反映擔憂',
        description: 'A parent gently flagging a worry.',
        lines: [
          { speaker: 'Dad', gender: 'male', text: 'There was something I wanted to mention, actually.', zh: '其實有件事我想提一下。' },
          { speaker: 'Teacher', gender: 'male', text: 'Of course. What’s on your mind?', zh: '當然。您在擔心什麼？' },
          { speaker: 'Dad', gender: 'male', text: 'Mia’s been a bit quiet and reluctant to come in.', zh: 'Mia 最近有點沉默，不太想來上學。' },
          { speaker: 'Teacher', gender: 'male', text: 'Thank you for telling me. Has she said why?', zh: '謝謝您告訴我。她有說原因嗎？' },
          { speaker: 'Dad', gender: 'male', text: 'Not really, but something’s clearly bothering her.', zh: '沒有，但顯然有事困擾她。' },
          { speaker: 'Teacher', gender: 'male', text: 'I’ll keep a close eye on her in class.', zh: '我會在課堂上多留意她。' },
          { speaker: 'Dad', gender: 'male', text: 'I’d really appreciate that.', zh: '那我非常感激。' },
          { speaker: 'Teacher', gender: 'male', text: 'Sometimes it’s a small friendship issue.', zh: '有時候是小小的交友問題。' },
          { speaker: 'Dad', gender: 'male', text: 'That had crossed my mind, to be honest.', zh: '老實說，我也想過這點。' },
          { speaker: 'Teacher', gender: 'male', text: 'Let’s touch base again in a couple of weeks.', zh: '我們過兩週再聊聊狀況。' },
          { speaker: 'Dad', gender: 'male', text: 'Thank you. It’s a weight off knowing you’ll watch out.', zh: '謝謝您。知道您會留意，我安心多了。' }
        ]
      },
      {
        id: 'parentseve-options',
        title: 'Choosing subjects',
        titleZh: '選課討論',
        description: 'Discussing an older child’s subject choices.',
        lines: [
          { speaker: 'Teacher', gender: 'female', text: 'So, Jess needs to pick her options soon.', zh: '那麼，Jess 很快就要選課了。' },
          { speaker: 'Mum', gender: 'female', text: 'Yes, we’re not sure which way she should go.', zh: '對，我們不確定她該往哪個方向走。' },
          { speaker: 'Teacher', gender: 'female', text: 'What does she enjoy most at the moment?', zh: '她目前最喜歡什麼？' },
          { speaker: 'Mum', gender: 'female', text: 'She loves art, but she’s strong at science too.', zh: '她很愛美術，但理科也很強。' },
          { speaker: 'Teacher', gender: 'female', text: 'She could keep both options open at this stage.', zh: '她現階段可以兩邊都保留。' },
          { speaker: 'Mum', gender: 'female', text: 'That’s reassuring. We don’t want to limit her.', zh: '這讓人安心。我們不想限制她。' },
          { speaker: 'Teacher', gender: 'female', text: 'A good balance gives her plenty of choices later.', zh: '均衡的組合能讓她日後有很多選擇。' },
          { speaker: 'Mum', gender: 'female', text: 'Does she need a language as well?', zh: '她也需要選一門語言嗎？' },
          { speaker: 'Teacher', gender: 'female', text: 'It’s recommended, and she’s a natural at French.', zh: '建議要，而且她法文很有天分。' },
          { speaker: 'Mum', gender: 'female', text: 'Then we’ll encourage her to keep that up.', zh: '那我們會鼓勵她繼續學下去。' },
          { speaker: 'Teacher', gender: 'female', text: 'Lovely. Let’s sit down with her and decide together.', zh: '很好。我們跟她一起坐下來討論決定吧。' }
        ]
      }
    ]
  },
  {
    id: 'retirement',
    title: 'Retirement',
    titleZh: '退休生活',
    icon: '🌅',
    blurb: '退休規劃、餞別、享受新生活的對話',
    scenarios: [
      {
        id: 'retirement-plans',
        title: 'Planning for retirement',
        titleZh: '規劃退休',
        description: 'A couple thinking ahead about life after work.',
        lines: [
          { speaker: 'Geoff', gender: 'male', text: 'I can hardly believe I retire next year.', zh: '我簡直不敢相信明年就要退休了。' },
          { speaker: 'Carol', gender: 'female', text: 'It’s come round so fast, hasn’t it?', zh: '時間過得真快，對吧？' },
          { speaker: 'Geoff', gender: 'male', text: 'I keep wondering how I’ll fill my days.', zh: '我一直在想要怎麼打發每一天。' },
          { speaker: 'Carol', gender: 'female', text: 'You’ve always said you’d take up golf again.', zh: '你一直說要重拾高爾夫。' },
          { speaker: 'Geoff', gender: 'male', text: 'True. And we could finally do some travelling.', zh: '是啊。而且我們終於可以去旅行了。' },
          { speaker: 'Carol', gender: 'female', text: 'I’d love that. Somewhere warm in the winter.', zh: '我很想。冬天去個溫暖的地方。' },
          { speaker: 'Geoff', gender: 'male', text: 'We should check the pension covers it all.', zh: '我們該確認退休金夠不夠支應。' },
          { speaker: 'Carol', gender: 'female', text: 'Let’s see a financial adviser, just to be safe.', zh: '保險起見，我們去找個財務顧問吧。' },
          { speaker: 'Geoff', gender: 'male', text: 'Good idea. I don’t want to worry about money.', zh: '好主意。我不想為錢操心。' },
          { speaker: 'Carol', gender: 'female', text: 'After all these years, you’ve earned a proper rest.', zh: '辛苦這麼多年，你值得好好休息。' },
          { speaker: 'Geoff', gender: 'male', text: 'We both have. Here’s to the next chapter.', zh: '我們都是。敬人生的下一章。' }
        ]
      },
      {
        id: 'retirement-farewell',
        title: 'A leaving do at work',
        titleZh: '職場餞別會',
        description: 'Saying goodbye to a retiring colleague.',
        lines: [
          { speaker: 'Priya', gender: 'female', text: 'So, this is your last day. How are you feeling?', zh: '所以，今天是你最後一天。感覺如何？' },
          { speaker: 'Geoff', gender: 'male', text: 'A bit emotional, honestly. Forty years here.', zh: '老實說有點感傷。在這待了四十年。' },
          { speaker: 'Priya', gender: 'female', text: 'You’ll be sorely missed around here.', zh: '這裡的人會非常想念你。' },
          { speaker: 'Geoff', gender: 'male', text: 'That’s kind. It’s been like a second family.', zh: '謝謝。這裡就像我的第二個家。' },
          { speaker: 'Priya', gender: 'female', text: 'We’ve got a little something for you, actually.', zh: '其實我們替你準備了個小禮物。' },
          { speaker: 'Geoff', gender: 'male', text: 'Oh, you shouldn’t have. That’s very thoughtful.', zh: '喔，你們不用這樣的。太貼心了。' },
          { speaker: 'Priya', gender: 'female', text: 'Everyone chipped in. There’s a card too.', zh: '大家一起湊的。還有一張卡片。' },
          { speaker: 'Geoff', gender: 'male', text: 'I’ll treasure it. Promise you’ll all keep in touch.', zh: '我會珍惜的。答應我你們要保持聯絡。' },
          { speaker: 'Priya', gender: 'female', text: 'Of course. You have to pop in for a brew.', zh: '當然。你一定要回來喝杯茶。' },
          { speaker: 'Geoff', gender: 'male', text: 'I will, often. Right, who’s coming to the pub?', zh: '我會的，常常回來。好，誰要去酒吧？' },
          { speaker: 'Priya', gender: 'female', text: 'All of us! First round’s on the team.', zh: '我們全部！第一輪團隊請客。' }
        ]
      },
      {
        id: 'retirement-life',
        title: 'Enjoying retirement',
        titleZh: '享受退休',
        description: 'Catching up on how retired life is going.',
        lines: [
          { speaker: 'Sue', gender: 'female', text: 'So, how’s retirement treating you?', zh: '那麼，退休生活過得如何？' },
          { speaker: 'Roy', gender: 'male', text: 'Honestly? Busier than when I was working!', zh: '老實說？比上班時還忙！' },
          { speaker: 'Sue', gender: 'female', text: 'Ha, everyone says that. What keeps you busy?', zh: '哈，大家都這麼說。什麼讓你這麼忙？' },
          { speaker: 'Roy', gender: 'male', text: 'The allotment, mostly, and minding the grandkids.', zh: '主要是菜園，還有顧孫子。' },
          { speaker: 'Sue', gender: 'female', text: 'That sounds lovely. Do you miss work at all?', zh: '聽起來很棒。你會懷念工作嗎？' },
          { speaker: 'Roy', gender: 'male', text: 'Not the job, but I do miss the people.', zh: '不懷念工作，但我懷念那些人。' },
          { speaker: 'Sue', gender: 'female', text: 'You still see them, though?', zh: '你還有跟他們見面嗎？' },
          { speaker: 'Roy', gender: 'male', text: 'Now and then, for a coffee or a round of golf.', zh: '偶爾，喝個咖啡或打場高爾夫。' },
          { speaker: 'Sue', gender: 'female', text: 'That’s the best of both worlds, really.', zh: '這真是兩全其美。' },
          { speaker: 'Roy', gender: 'male', text: 'It is. I just wish I’d done it sooner!', zh: '是啊。我只後悔沒早點退休！' },
          { speaker: 'Sue', gender: 'female', text: 'Ha! Enjoy every minute, you’ve earned it.', zh: '哈！好好享受每一刻，你應得的。' }
        ]
      }
    ]
  },
  {
    id: 'bookshop',
    title: 'At the Bookshop',
    titleZh: '逛書店',
    icon: '📖',
    blurb: '找書、要推薦、訂書時的書店對話',
    scenarios: [
      {
        id: 'bookshop-recommend',
        title: 'Asking for a recommendation',
        titleZh: '請店員推薦',
        description: 'Looking for a good read with the bookseller’s help.',
        lines: [
          { speaker: 'Amy', gender: 'female', text: 'Hi, could you recommend a good novel?', zh: '您好，能推薦一本好看的小說嗎？' },
          { speaker: 'Bookseller', gender: 'male', text: 'Of course. What sort of thing do you enjoy?', zh: '當然。您喜歡哪一類的？' },
          { speaker: 'Amy', gender: 'female', text: 'I love a good thriller, something gripping.', zh: '我很愛驚悚小說，要扣人心弦的。' },
          { speaker: 'Bookseller', gender: 'male', text: 'This one’s flying off the shelves at the moment.', zh: '這本最近賣得超快。' },
          { speaker: 'Amy', gender: 'female', text: 'Oh, I’ve heard of that. Is it any good?', zh: '喔，我聽過。它好看嗎？' },
          { speaker: 'Bookseller', gender: 'male', text: 'I couldn’t put it down — a real page-turner.', zh: '我一翻開就停不下來——讓人欲罷不能。' },
          { speaker: 'Amy', gender: 'female', text: 'Sold! Is it part of a series?', zh: '成交！它是系列作品嗎？' },
          { speaker: 'Bookseller', gender: 'male', text: 'It is, but it works perfectly as a standalone.', zh: '是的，但單獨看也完全沒問題。' },
          { speaker: 'Amy', gender: 'female', text: 'Perfect. Have you got it in paperback?', zh: '太好了。有平裝本嗎？' },
          { speaker: 'Bookseller', gender: 'male', text: 'We do, just over here. Shall I grab it?', zh: '有，就在這邊。要我幫您拿嗎？' },
          { speaker: 'Amy', gender: 'female', text: 'Yes please. Thanks for the recommendation!', zh: '好，麻煩了。謝謝您的推薦！' }
        ]
      },
      {
        id: 'bookshop-order',
        title: 'Ordering a book in',
        titleZh: '訂書',
        description: 'Asking the shop to order an out-of-stock title.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'Hi, do you have this title in stock?', zh: '您好，這本書有現貨嗎？' },
          { speaker: 'Bookseller', gender: 'female', text: 'Let me check the system for you. One moment.', zh: '我幫您查一下系統。稍等。' },
          { speaker: 'Tom', gender: 'male', text: 'No worries. I couldn’t see it on the shelves.', zh: '沒關係。我在架上沒看到。' },
          { speaker: 'Bookseller', gender: 'female', text: 'Ah, we’re out of stock, but I can order it in.', zh: '啊，目前沒貨，但我可以幫您訂。' },
          { speaker: 'Tom', gender: 'male', text: 'How long would that take?', zh: '那要多久？' },
          { speaker: 'Bookseller', gender: 'female', text: 'Usually two to three working days.', zh: '通常是兩到三個工作天。' },
          { speaker: 'Tom', gender: 'male', text: 'That’s fine. Do I pay now or on collection?', zh: '沒問題。我現在付還是取書時付？' },
          { speaker: 'Bookseller', gender: 'female', text: 'On collection is fine. I’ll take your number.', zh: '取書時付就好。我登記一下您的電話。' },
          { speaker: 'Tom', gender: 'male', text: 'Of course. Will you text when it arrives?', zh: '當然。書到了會傳訊息給我嗎？' },
          { speaker: 'Bookseller', gender: 'female', text: 'We will, as soon as it comes in.', zh: '會的，一到貨就通知您。' },
          { speaker: 'Tom', gender: 'male', text: 'Brilliant. Thanks for sorting that.', zh: '太好了。謝謝您幫忙處理。' }
        ]
      },
      {
        id: 'bookshop-gift',
        title: 'Buying a book as a gift',
        titleZh: '買書當禮物',
        description: 'Choosing a present for a friend who loves cooking.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'I’m after a gift for a friend who loves cooking.', zh: '我想買禮物給一個熱愛烹飪的朋友。' },
          { speaker: 'Bookseller', gender: 'male', text: 'Lovely. We’ve got a brilliant cookery section.', zh: '太好了。我們有很棒的烹飪書區。' },
          { speaker: 'Eve', gender: 'female', text: 'Anything that’s a bit special?', zh: '有什麼比較特別的嗎？' },
          { speaker: 'Bookseller', gender: 'male', text: 'This one’s gorgeous — beautiful photos throughout.', zh: '這本很美——從頭到尾都是漂亮的照片。' },
          { speaker: 'Eve', gender: 'female', text: 'Oh, that is lovely. Is it quite beginner-friendly?', zh: '喔，真美。它對新手友善嗎？' },
          { speaker: 'Bookseller', gender: 'male', text: 'Very — clear steps, nothing too fiddly.', zh: '非常——步驟清楚，不會太繁瑣。' },
          { speaker: 'Eve', gender: 'female', text: 'Perfect. Could you gift-wrap it for me?', zh: '太好了。可以幫我包成禮物嗎？' },
          { speaker: 'Bookseller', gender: 'male', text: 'Of course. Any particular paper?', zh: '當然。有想要哪種包裝紙嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Something simple. Could you pop a bow on it?', zh: '簡單一點的。可以加個蝴蝶結嗎？' },
          { speaker: 'Bookseller', gender: 'male', text: 'Consider it done. Would you like a gift receipt?', zh: '包在我身上。需要附禮品收據嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Yes please. Thank you, that’s really kind.', zh: '好，麻煩了。謝謝您，您人真好。' }
        ]
      }
    ]
  }
]
