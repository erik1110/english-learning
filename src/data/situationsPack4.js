// Situations pack 4 — practical life events & hobbies (garage/petrol, gardening,
// moving house, wedding planning, second-hand buying/selling, camping, gigs,
// library). Same shape: 3 dialogues per category, 11 lines each, alternating voices.

export const PACK4 = [
  {
    id: 'garage',
    title: 'Garage & Petrol Station',
    titleZh: '修車廠與加油站',
    icon: '⛽',
    blurb: '加油、修車、保養時實用的英式說法',
    scenarios: [
      {
        id: 'garage-repair',
        title: 'Booking the car in',
        titleZh: '預約修車',
        description: 'Explaining a problem to the mechanic.',
        lines: [
          { speaker: 'Mechanic', gender: 'male', text: 'Morning. What seems to be the trouble with her?', zh: '早安。這台車是出了什麼問題？' },
          { speaker: 'Claire', gender: 'female', text: 'There’s a weird grinding noise when I brake.', zh: '我踩煞車時會有奇怪的摩擦聲。' },
          { speaker: 'Mechanic', gender: 'male', text: 'Right. That’ll likely be the brake pads wearing thin.', zh: '好。八成是煞車來令片磨薄了。' },
          { speaker: 'Claire', gender: 'female', text: 'Is that dangerous to drive on?', zh: '這樣開車危險嗎？' },
          { speaker: 'Mechanic', gender: 'male', text: 'I wouldn’t leave it too long. Best to get it sorted.', zh: '我不建議拖太久。最好趕快處理。' },
          { speaker: 'Claire', gender: 'female', text: 'Could you take a look today?', zh: '今天能幫我看一下嗎？' },
          { speaker: 'Mechanic', gender: 'male', text: 'I can squeeze you in this afternoon. Leave her with me.', zh: '我下午可以幫你擠出時間。車先留我這。' },
          { speaker: 'Claire', gender: 'female', text: 'Roughly how much am I looking at?', zh: '大概要花多少錢？' },
          { speaker: 'Mechanic', gender: 'male', text: 'Around a hundred and twenty, parts and labour.', zh: '連零件帶工錢大約一百二十英鎊。' },
          { speaker: 'Claire', gender: 'female', text: 'That’s fine. Give me a ring when she’s ready?', zh: '可以。好了打電話給我好嗎？' },
          { speaker: 'Mechanic', gender: 'male', text: 'Will do. Should be done by about four.', zh: '沒問題。大概四點前會弄好。' }
        ]
      },
      {
        id: 'garage-petrol',
        title: 'Filling up with petrol',
        titleZh: '加油',
        description: 'Paying at the kiosk after filling up.',
        lines: [
          { speaker: 'Cashier', gender: 'female', text: 'Hiya, which pump are you on?', zh: '嗨，您是幾號加油機？' },
          { speaker: 'Joe', gender: 'male', text: 'Pump four, please. Forty quid’s worth.', zh: '四號，謝謝。加了四十英鎊。' },
          { speaker: 'Cashier', gender: 'female', text: 'Lovely. Anything else with that?', zh: '好的。還需要其他的嗎？' },
          { speaker: 'Joe', gender: 'male', text: 'Could I grab a bag of air for the tyres?', zh: '我可以用一下打氣機幫輪胎打氣嗎？' },
          { speaker: 'Cashier', gender: 'female', text: 'The air machine’s round the side, it’s free to use.', zh: '打氣機在側邊，免費使用。' },
          { speaker: 'Joe', gender: 'male', text: 'Brilliant. One of mine looks a bit flat.', zh: '太好了。我有一個胎看起來有點扁。' },
          { speaker: 'Cashier', gender: 'female', text: 'Best to check them all while you’re there.', zh: '既然要打，最好全部都檢查一下。' },
          { speaker: 'Joe', gender: 'male', text: 'Good idea. Oh, and a coffee for the road.', zh: '好主意。喔，再來杯咖啡路上喝。' },
          { speaker: 'Cashier', gender: 'female', text: 'Help yourself to the machine. That’s the petrol plus the coffee.', zh: '咖啡機自助。這是油錢加咖啡的費用。' },
          { speaker: 'Joe', gender: 'male', text: 'Card’s fine. Tap or chip?', zh: '刷卡就好。感應還是插卡？' },
          { speaker: 'Cashier', gender: 'female', text: 'Tap’s grand. There you go — safe driving!', zh: '感應就行。好了——小心開車！' }
        ]
      },
      {
        id: 'garage-mot',
        title: 'Picking up after an MOT',
        titleZh: '驗車後取車',
        description: 'Collecting the car after its annual test.',
        lines: [
          { speaker: 'Mechanic', gender: 'female', text: 'Good news — she’s passed her MOT.', zh: '好消息——它通過年度驗車了。' },
          { speaker: 'Tom', gender: 'male', text: 'Oh, thank goodness. No major issues, then?', zh: '喔，太好了。那沒什麼大問題囉？' },
          { speaker: 'Mechanic', gender: 'female', text: 'Nothing serious. A couple of advisories, though.', zh: '沒什麼嚴重的。不過有幾項建議事項。' },
          { speaker: 'Tom', gender: 'male', text: 'What sort of advisories?', zh: '哪一類的建議事項？' },
          { speaker: 'Mechanic', gender: 'female', text: 'The front tyres are getting low on tread.', zh: '前輪的胎紋有點淺了。' },
          { speaker: 'Tom', gender: 'male', text: 'Right. Do they need doing straight away?', zh: '好。需要馬上換嗎？' },
          { speaker: 'Mechanic', gender: 'female', text: 'Not urgently, but I’d sort them in the next month or so.', zh: '不急，但我會建議下個月左右處理掉。' },
          { speaker: 'Tom', gender: 'male', text: 'I’ll book that in. Did you top up the oil as well?', zh: '我會預約。你也順便補了機油嗎？' },
          { speaker: 'Mechanic', gender: 'female', text: 'I did, and the washer fluid while I was at it.', zh: '補了，順手也加了雨刷水。' },
          { speaker: 'Tom', gender: 'male', text: 'Champion. What do I owe you for the test?', zh: '太棒了。驗車費要付多少？' },
          { speaker: 'Mechanic', gender: 'female', text: 'Just the standard MOT fee. Here’s your certificate.', zh: '就標準的驗車費。這是您的合格證書。' }
        ]
      }
    ]
  },
  {
    id: 'gardening',
    title: 'Gardening',
    titleZh: '園藝',
    icon: '🌱',
    blurb: '種花種菜、整理庭院時的閒聊用語',
    scenarios: [
      {
        id: 'gardening-planting',
        title: 'Planting up the borders',
        titleZh: '整理花圃',
        description: 'Two neighbours chatting over the fence about the garden.',
        lines: [
          { speaker: 'Sue', gender: 'female', text: 'Your garden’s looking gorgeous this year.', zh: '你家花園今年看起來真美。' },
          { speaker: 'Roy', gender: 'male', text: 'Cheers! I’ve finally got the borders how I want them.', zh: '謝啦！我終於把花圃弄成我想要的樣子了。' },
          { speaker: 'Sue', gender: 'female', text: 'What have you put in along the back?', zh: '你後面那排種了什麼？' },
          { speaker: 'Roy', gender: 'male', text: 'Some lavender and a few foxgloves. The bees love them.', zh: '一些薰衣草和幾株毛地黃。蜜蜂超愛。' },
          { speaker: 'Sue', gender: 'female', text: 'Lovely. Mine are being eaten alive by slugs.', zh: '真好。我的都快被蛞蝓吃光了。' },
          { speaker: 'Roy', gender: 'male', text: 'Oh, they’re a nightmare. Try crushed eggshells round the stems.', zh: '喔，那些真是惡夢。試試在莖部周圍灑碎蛋殼。' },
          { speaker: 'Sue', gender: 'female', text: 'Does that actually work?', zh: '那真的有用嗎？' },
          { speaker: 'Roy', gender: 'male', text: 'It does for me. They don’t like crawling over it.', zh: '對我有用。牠們不喜歡爬過那些。' },
          { speaker: 'Sue', gender: 'female', text: 'I’ll give it a go. When should I prune the roses?', zh: '我來試試。玫瑰該什麼時候修剪？' },
          { speaker: 'Roy', gender: 'male', text: 'Late winter’s best, before the new growth comes through.', zh: '冬末最好，趕在新芽長出來之前。' },
          { speaker: 'Sue', gender: 'female', text: 'Thanks for the tips. Fancy a cuppa in the sun?', zh: '謝謝你的建議。要不要在太陽下喝杯茶？' }
        ]
      },
      {
        id: 'gardening-veg',
        title: 'Growing your own veg',
        titleZh: '自己種菜',
        description: 'Swapping advice on the vegetable patch.',
        lines: [
          { speaker: 'Dan', gender: 'male', text: 'I’m thinking of growing my own veg this year.', zh: '我在想今年要自己種菜。' },
          { speaker: 'Priya', gender: 'female', text: 'Good for you! What are you going to start with?', zh: '太好了！你打算先從什麼開始種？' },
          { speaker: 'Dan', gender: 'male', text: 'Probably tomatoes and a few herbs. Easy enough?', zh: '大概是番茄和一些香草。夠簡單吧？' },
          { speaker: 'Priya', gender: 'female', text: 'Tomatoes do really well in a sunny spot.', zh: '番茄在有陽光的地方長得很好。' },
          { speaker: 'Dan', gender: 'male', text: 'How often should I be watering them?', zh: '我該多久澆一次水？' },
          { speaker: 'Priya', gender: 'female', text: 'Little and often, especially once the fruit sets.', zh: '少量多次，尤其是開始結果之後。' },
          { speaker: 'Dan', gender: 'male', text: 'And do I need to feed them anything?', zh: '需要施什麼肥嗎？' },
          { speaker: 'Priya', gender: 'female', text: 'A tomato feed once a week works wonders.', zh: '每週施一次番茄專用肥效果超好。' },
          { speaker: 'Dan', gender: 'male', text: 'Brilliant. What about the herbs?', zh: '太好了。那香草呢？' },
          { speaker: 'Priya', gender: 'female', text: 'Pop them in pots so you can move them about.', zh: '種在盆子裡，這樣你可以隨意搬動。' },
          { speaker: 'Dan', gender: 'male', text: 'Smashing. I’ll get some seeds this weekend.', zh: '太棒了。我這週末去買些種子。' }
        ]
      },
      {
        id: 'gardening-shed',
        title: 'Tidying the shed',
        titleZh: '整理工具棚',
        description: 'A couple sorting out the garden shed.',
        lines: [
          { speaker: 'Mark', gender: 'male', text: 'Right, this shed is an absolute tip. Where do we start?', zh: '好，這工具棚簡直亂成一團。我們從哪開始？' },
          { speaker: 'Eve', gender: 'female', text: 'Let’s get everything out and have a proper sort.', zh: '我們把所有東西拿出來好好整理一遍。' },
          { speaker: 'Mark', gender: 'male', text: 'Half these tools are rusted to bits.', zh: '這些工具有一半都鏽光了。' },
          { speaker: 'Eve', gender: 'female', text: 'Chuck anything that’s past saving.', zh: '救不回來的就丟掉。' },
          { speaker: 'Mark', gender: 'male', text: 'There are about five empty plant pots here.', zh: '這裡大概有五個空花盆。' },
          { speaker: 'Eve', gender: 'female', text: 'Keep those — they always come in handy.', zh: '那些留著——總會用得上。' },
          { speaker: 'Mark', gender: 'male', text: 'And what about all this leftover paint?', zh: '那這些剩下的油漆呢？' },
          { speaker: 'Eve', gender: 'female', text: 'You can’t just bin paint, it has to go to the tip.', zh: '油漆不能直接丟垃圾桶，得拿去回收場。' },
          { speaker: 'Mark', gender: 'male', text: 'Right. Let’s put the hooks up for the bigger tools.', zh: '好。我們來裝掛鉤放大型工具。' },
          { speaker: 'Eve', gender: 'female', text: 'Good idea. It’ll save us tripping over everything.', zh: '好主意。這樣就不會被東西絆倒了。' },
          { speaker: 'Mark', gender: 'male', text: 'There. Looks ten times better already.', zh: '好了。已經看起來好上十倍了。' }
        ]
      }
    ]
  },
  {
    id: 'moving',
    title: 'Moving House',
    titleZh: '搬家',
    icon: '📦',
    blurb: '打包、搬運、安頓新家時的實用對話',
    scenarios: [
      {
        id: 'moving-packing',
        title: 'Packing up',
        titleZh: '打包',
        description: 'A couple boxing up the house before the move.',
        lines: [
          { speaker: 'Ben', gender: 'male', text: 'How are we doing for boxes? We’re running low.', zh: '紙箱還夠嗎？我們快用完了。' },
          { speaker: 'Mia', gender: 'female', text: 'There are a few more in the loft. I’ll grab them.', zh: '閣樓還有幾個。我去拿。' },
          { speaker: 'Ben', gender: 'male', text: 'Cheers. Shall we label everything by room?', zh: '謝啦。我們要按房間標示每個箱子嗎？' },
          { speaker: 'Mia', gender: 'female', text: 'Definitely, or we’ll never find anything at the other end.', zh: '一定要，不然搬到新家我們什麼都找不到。' },
          { speaker: 'Ben', gender: 'male', text: 'Wrap the glasses in newspaper so they don’t smash.', zh: '玻璃杯用報紙包好，才不會打破。' },
          { speaker: 'Mia', gender: 'female', text: 'Good thinking. Don’t overfill the boxes, though.', zh: '想得周到。不過別把箱子裝太滿。' },
          { speaker: 'Ben', gender: 'male', text: 'Why’s that?', zh: '為什麼？' },
          { speaker: 'Mia', gender: 'female', text: 'They get too heavy and the bottom drops out.', zh: '會太重，底部會破掉。' },
          { speaker: 'Ben', gender: 'male', text: 'Fair point. Let’s keep a “first night” box aside.', zh: '有道理。我們另外留一個「第一晚」的箱子吧。' },
          { speaker: 'Mia', gender: 'female', text: 'Kettle, mugs, teabags and the chargers.', zh: '水壺、馬克杯、茶包和充電線。' },
          { speaker: 'Ben', gender: 'male', text: 'The essentials! Right, back to it.', zh: '必需品！好，繼續打包。' }
        ]
      },
      {
        id: 'moving-day',
        title: 'Moving day',
        titleZh: '搬家當天',
        description: 'Directing the removal van on the big day.',
        lines: [
          { speaker: 'Remover', gender: 'male', text: 'Morning! Right, where do you want us to start?', zh: '早安！好，您要我們先從哪裡搬起？' },
          { speaker: 'Sara', gender: 'female', text: 'The big furniture first, if that’s easiest.', zh: '先搬大型家具，如果這樣比較方便的話。' },
          { speaker: 'Remover', gender: 'male', text: 'No problem. Is the sofa coming or staying?', zh: '沒問題。沙發要搬還是留下？' },
          { speaker: 'Sara', gender: 'female', text: 'Coming with us. Mind the door frame, it’s tight.', zh: '要帶走。小心門框，那裡很窄。' },
          { speaker: 'Remover', gender: 'male', text: 'We’ll tip it on its side. Anything fragile in here?', zh: '我們把它側過來。這裡有易碎品嗎？' },
          { speaker: 'Sara', gender: 'female', text: 'Those boxes by the window are all crockery.', zh: '窗邊那些箱子全是碗盤。' },
          { speaker: 'Remover', gender: 'male', text: 'We’ll load those last so they’re on top.', zh: '那些我們最後裝，放在最上面。' },
          { speaker: 'Sara', gender: 'female', text: 'Perfect. How long’s the drive to the new place?', zh: '太好了。開到新家要多久？' },
          { speaker: 'Remover', gender: 'male', text: 'About forty minutes if the traffic behaves.', zh: '如果路況順的話大約四十分鐘。' },
          { speaker: 'Sara', gender: 'female', text: 'Great. I’ll meet you there and let you in.', zh: '太好了。我在那邊跟你們碰面開門。' },
          { speaker: 'Remover', gender: 'male', text: 'Lovely. We’ll have the van loaded in no time.', zh: '好的。我們很快就會把車裝好。' }
        ]
      },
      {
        id: 'moving-settling',
        title: 'Settling into the new place',
        titleZh: '安頓新家',
        description: 'First evening in the new home, surrounded by boxes.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'Well, we’re in! It doesn’t feel real yet.', zh: '好啦，我們搬進來了！還感覺不太真實。' },
          { speaker: 'Anna', gender: 'female', text: 'I know. There are boxes absolutely everywhere.', zh: '我知道。到處都是箱子。' },
          { speaker: 'Tom', gender: 'male', text: 'Let’s not unpack it all tonight. Where’s the kettle?', zh: '今晚先別全拆。水壺在哪？' },
          { speaker: 'Anna', gender: 'female', text: 'In the first-night box, thank goodness I labelled it.', zh: '在「第一晚」的箱子裡，還好我有貼標籤。' },
          { speaker: 'Tom', gender: 'male', text: 'You’re a genius. The neighbours seem friendly.', zh: '你是天才。鄰居看起來很友善。' },
          { speaker: 'Anna', gender: 'female', text: 'The lady next door popped round with biscuits.', zh: '隔壁的太太還拿餅乾過來打招呼。' },
          { speaker: 'Tom', gender: 'male', text: 'How lovely. We’ll have to introduce ourselves properly.', zh: '真貼心。我們得好好去自我介紹一下。' },
          { speaker: 'Anna', gender: 'female', text: 'Definitely. Shall we just get a takeaway tonight?', zh: '當然。今晚我們乾脆叫外賣吧？' },
          { speaker: 'Tom', gender: 'male', text: 'Good plan. I can’t face cooking among all this.', zh: '好主意。在這堆東西裡我實在沒辦法煮飯。' },
          { speaker: 'Anna', gender: 'female', text: 'Let’s find the sofa, order a pizza and put our feet up.', zh: '我們把沙發找出來，叫個披薩，好好休息。' },
          { speaker: 'Tom', gender: 'male', text: 'Sounds perfect. Here’s to the new house!', zh: '聽起來太完美了。敬我們的新家！' }
        ]
      }
    ]
  },
  {
    id: 'wedding',
    title: 'Wedding Planning',
    titleZh: '婚禮籌備',
    icon: '💍',
    blurb: '挑場地、發喜帖、籌備婚禮時的對話',
    scenarios: [
      {
        id: 'wedding-venue',
        title: 'Choosing a venue',
        titleZh: '挑選場地',
        description: 'An engaged couple weighing up wedding venues.',
        lines: [
          { speaker: 'Lily', gender: 'female', text: 'So, did you like the barn venue we saw?', zh: '所以，你喜歡我們看的那個穀倉場地嗎？' },
          { speaker: 'Jake', gender: 'male', text: 'I loved it, but it’s a bit out of our budget.', zh: '我很愛，但有點超出我們的預算。' },
          { speaker: 'Lily', gender: 'female', text: 'True. The hotel was cheaper and includes catering.', zh: '是啊。那間飯店比較便宜，還含餐飲。' },
          { speaker: 'Jake', gender: 'male', text: 'That would take a lot off our plate, to be fair.', zh: '平心而論，那能幫我們省去不少麻煩。' },
          { speaker: 'Lily', gender: 'female', text: 'And it fits all hundred and twenty guests.', zh: '而且容得下我們全部一百二十位賓客。' },
          { speaker: 'Jake', gender: 'male', text: 'Is the date we want still available there?', zh: '我們想要的日期那邊還有嗎？' },
          { speaker: 'Lily', gender: 'female', text: 'Just the one Saturday in June, so we’d need to be quick.', zh: '六月只剩一個週六，所以我們得快點。' },
          { speaker: 'Jake', gender: 'male', text: 'Let’s not lose it. Shall we put a deposit down?', zh: '別錯過了。我們要付訂金嗎？' },
          { speaker: 'Lily', gender: 'female', text: 'I think so. It just feels right, doesn’t it?', zh: '我覺得要。感覺就是對的，對吧？' },
          { speaker: 'Jake', gender: 'male', text: 'It really does. Right, let’s call them first thing.', zh: '真的。好，我們明天一早就打電話。' },
          { speaker: 'Lily', gender: 'female', text: 'Eek, this is actually happening!', zh: '天啊，這真的要發生了！' }
        ]
      },
      {
        id: 'wedding-guests',
        title: 'The guest list',
        titleZh: '賓客名單',
        description: 'Working out who to invite.',
        lines: [
          { speaker: 'Jake', gender: 'male', text: 'We really need to nail down the guest list.', zh: '我們真的得把賓客名單定下來。' },
          { speaker: 'Lily', gender: 'female', text: 'I know. It keeps creeping up every time we look.', zh: '我知道。每次一看人數就一直往上加。' },
          { speaker: 'Jake', gender: 'male', text: 'Do we invite all the cousins, or keep it close?', zh: '我們要邀請所有表親，還是只請親近的？' },
          { speaker: 'Lily', gender: 'female', text: 'If we invite one, we have to invite them all.', zh: '只要請一個，就得全請。' },
          { speaker: 'Jake', gender: 'male', text: 'True. And what about plus-ones?', zh: '是啊。那攜伴呢？' },
          { speaker: 'Lily', gender: 'female', text: 'Only for people in long-term relationships, I’d say.', zh: '我覺得只限有穩定交往對象的人。' },
          { speaker: 'Jake', gender: 'male', text: 'Fair. That keeps the numbers sensible.', zh: '合理。這樣人數才不會失控。' },
          { speaker: 'Lily', gender: 'female', text: 'Are we doing kids, or making it adults-only?', zh: '我們要邀小孩，還是只限成人？' },
          { speaker: 'Jake', gender: 'male', text: 'Adults-only, but maybe not the immediate family.', zh: '只限成人，但直系親屬的小孩或許例外。' },
          { speaker: 'Lily', gender: 'female', text: 'Agreed. Right, let’s tot up where we’ve landed.', zh: '同意。好，我們來算算最後總共幾位。' },
          { speaker: 'Jake', gender: 'male', text: 'A hundred and ten. Phew, just under the limit.', zh: '一百一十位。呼，剛好在上限以內。' }
        ]
      },
      {
        id: 'wedding-speech',
        title: 'Nervous about the speech',
        titleZh: '為致詞緊張',
        description: 'The best man fretting about his speech.',
        lines: [
          { speaker: 'Sam', gender: 'male', text: 'I’m dreading this best man speech, I won’t lie.', zh: '老實說，我超怕這個伴郎致詞。' },
          { speaker: 'Holly', gender: 'female', text: 'You’ll be great. Have you written anything down?', zh: '你會很棒的。你寫了草稿嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'A few notes, but it doesn’t flow yet.', zh: '寫了一些重點，但還不夠順。' },
          { speaker: 'Holly', gender: 'female', text: 'Start with a funny story, then something heartfelt.', zh: '先講個有趣的小故事，再來點真情流露的。' },
          { speaker: 'Sam', gender: 'male', text: 'Good idea. How long should it be?', zh: '好主意。大概要多長？' },
          { speaker: 'Holly', gender: 'female', text: 'Five minutes, tops. Don’t let it drag on.', zh: '頂多五分鐘。別拖太長。' },
          { speaker: 'Sam', gender: 'male', text: 'And should I steer clear of the embarrassing stuff?', zh: '那些尷尬的事我該避開嗎？' },
          { speaker: 'Holly', gender: 'female', text: 'Keep it light — nothing that’ll make Grandma blush.', zh: '保持輕鬆——別講會讓奶奶臉紅的內容。' },
          { speaker: 'Sam', gender: 'male', text: 'Ha! Fair enough. Should I practise out loud?', zh: '哈！有道理。我該大聲練習嗎？' },
          { speaker: 'Holly', gender: 'female', text: 'Definitely, and time yourself while you do.', zh: '當然，而且練的時候順便計時。' },
          { speaker: 'Sam', gender: 'male', text: 'Right, I’ll run through it tonight. Thanks for the pep talk.', zh: '好，我今晚練一遍。謝謝你幫我打氣。' }
        ]
      }
    ]
  },
  {
    id: 'secondhand',
    title: 'Buying & Selling Second-hand',
    titleZh: '二手買賣',
    icon: '🏷️',
    blurb: '網拍、跳蚤市場、殺價時的口語',
    scenarios: [
      {
        id: 'secondhand-buying',
        title: 'Buying off a marketplace app',
        titleZh: '在二手平台買東西',
        description: 'Meeting a seller to collect a used item.',
        lines: [
          { speaker: 'Dan', gender: 'male', text: 'Hi, I’m here about the bike you’ve got listed.', zh: '您好，我來看您刊登的那台腳踏車。' },
          { speaker: 'Seller', gender: 'female', text: 'Oh great, here it is. Have a proper look.', zh: '喔太好了，就是這台。您好好看一下。' },
          { speaker: 'Dan', gender: 'male', text: 'It’s in decent nick. Why are you selling it?', zh: '車況不錯。您為什麼要賣？' },
          { speaker: 'Seller', gender: 'female', text: 'I’ve upgraded, so it’s just gathering dust.', zh: '我換新車了，所以它一直閒置生灰。' },
          { speaker: 'Dan', gender: 'male', text: 'Fair enough. Do the gears all work smoothly?', zh: '可以理解。變速都順嗎？' },
          { speaker: 'Seller', gender: 'female', text: 'They do, and I’ve just pumped the tyres up.', zh: '都順，而且我剛幫輪胎打過氣。' },
          { speaker: 'Dan', gender: 'male', text: 'Would you take forty for it?', zh: '四十英鎊您願意賣嗎？' },
          { speaker: 'Seller', gender: 'female', text: 'I was hoping for fifty, but let’s say forty-five.', zh: '我本來想賣五十，不過算你四十五吧。' },
          { speaker: 'Dan', gender: 'male', text: 'Forty-five it is. Cash alright for you?', zh: '那就四十五。付現可以嗎？' },
          { speaker: 'Seller', gender: 'female', text: 'Cash is perfect. I’ll mark it as sold.', zh: '付現最好。我把它標示成已售出。' },
          { speaker: 'Dan', gender: 'male', text: 'Lovely doing business with you. Cheers!', zh: '跟您交易很愉快。謝啦！' }
        ]
      },
      {
        id: 'secondhand-selling',
        title: 'Selling your old stuff',
        titleZh: '賣掉你的舊東西',
        description: 'Fielding a haggling buyer on the phone.',
        lines: [
          { speaker: 'Buyer', gender: 'male', text: 'Hi, is the sofa still up for grabs?', zh: '您好，那張沙發還在賣嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'It is, yeah. Are you interested?', zh: '還在喔。您有興趣嗎？' },
          { speaker: 'Buyer', gender: 'male', text: 'I am. Any marks or damage on it?', zh: '有。上面有什麼痕跡或損壞嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'There’s a tiny scuff on one arm, otherwise it’s mint.', zh: '一邊扶手有個小擦痕，其他都很新。' },
          { speaker: 'Buyer', gender: 'male', text: 'Would you do thirty instead of fifty?', zh: '可以算三十而不是五十嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'That’s a bit cheeky, to be honest. It’s barely used.', zh: '老實說有點殺太兇了。它幾乎沒用過。' },
          { speaker: 'Buyer', gender: 'male', text: 'Fair enough. Forty, and I’ll collect today?', zh: '有道理。四十，我今天就來搬？' },
          { speaker: 'Eve', gender: 'female', text: 'Go on then, if you can take it off my hands today.', zh: '好吧，只要你今天能把它搬走。' },
          { speaker: 'Buyer', gender: 'male', text: 'Brilliant. Will I need a van, or will it fit a car?', zh: '太好了。我需要租廂型車，還是轎車塞得下？' },
          { speaker: 'Eve', gender: 'female', text: 'You’ll want a van — it won’t squeeze in a car.', zh: '你會需要廂型車——轎車塞不進去。' },
          { speaker: 'Buyer', gender: 'male', text: 'No worries. I’ll borrow my mate’s and pop round at six.', zh: '沒問題。我借我朋友的，六點過去。' }
        ]
      },
      {
        id: 'secondhand-carboot',
        title: 'At a car boot sale',
        titleZh: '在跳蚤市場',
        description: 'Browsing bargains at a weekend car boot sale.',
        lines: [
          { speaker: 'Roy', gender: 'male', text: 'There’s some proper treasure here if you dig about.', zh: '只要你肯翻，這裡真有不少好東西。' },
          { speaker: 'Sue', gender: 'female', text: 'I love a good rummage. Ooh, look at these old records.', zh: '我超愛這種尋寶。喔，你看這些老唱片。' },
          { speaker: 'Roy', gender: 'male', text: 'How much are the records, mate?', zh: '老闆，這些唱片多少錢？' },
          { speaker: 'Stallholder', gender: 'male', text: 'A pound each, or three for two quid.', zh: '一張一英鎊，或三張兩英鎊。' },
          { speaker: 'Sue', gender: 'female', text: 'Bargain! I’ll take these three.', zh: '太划算了！我要這三張。' },
          { speaker: 'Roy', gender: 'male', text: 'And what about that old camera over there?', zh: '那邊那台舊相機呢？' },
          { speaker: 'Stallholder', gender: 'male', text: 'Five for that. It still works a treat.', zh: '那台五英鎊。還很好用。' },
          { speaker: 'Roy', gender: 'male', text: 'Would you take three?', zh: '三英鎊可以嗎？' },
          { speaker: 'Stallholder', gender: 'male', text: 'Go on, four and it’s yours.', zh: '好啦，四英鎊就賣你。' },
          { speaker: 'Roy', gender: 'male', text: 'Deal. Here’s a fiver, keep the change.', zh: '成交。這是五英鎊，零錢不用找了。' },
          { speaker: 'Sue', gender: 'female', text: 'Look at us, two for two. Cracking morning!', zh: '看看我們，兩個都買到了。美好的早晨！' }
        ]
      }
    ]
  },
  {
    id: 'camping',
    title: 'Camping & the Outdoors',
    titleZh: '露營與戶外',
    icon: '⛺',
    blurb: '搭帳篷、生火、露營趣事的對話',
    scenarios: [
      {
        id: 'camping-pitch',
        title: 'Putting up the tent',
        titleZh: '搭帳篷',
        description: 'Two friends wrestling with a tent on arrival.',
        lines: [
          { speaker: 'Jack', gender: 'male', text: 'Right, let’s get this tent up before it gets dark.', zh: '好，趁天黑前把帳篷搭好。' },
          { speaker: 'Beth', gender: 'female', text: 'Did you bring the instructions? I’m clueless.', zh: '你帶說明書了嗎？我完全不會。' },
          { speaker: 'Jack', gender: 'male', text: 'How hard can it be? Pass me those poles.', zh: '能有多難？把那些營柱遞給我。' },
          { speaker: 'Beth', gender: 'female', text: 'Famous last words. Which way round does it go?', zh: '這話可別說太早。它該朝哪個方向？' },
          { speaker: 'Jack', gender: 'male', text: 'The door should face away from the wind.', zh: '門口應該背對著風向。' },
          { speaker: 'Beth', gender: 'female', text: 'Good thinking. Hold that side while I peg it down.', zh: '想得周到。你扶著那邊，我來打營釘。' },
          { speaker: 'Jack', gender: 'male', text: 'Mind your fingers with that mallet!', zh: '用那把木槌時小心你的手指！' },
          { speaker: 'Beth', gender: 'female', text: 'Nearly there. The ground’s rock hard, though.', zh: '快好了。不過地面硬得跟石頭一樣。' },
          { speaker: 'Jack', gender: 'male', text: 'There — it’s actually standing up. Get in!', zh: '好了——它真的立起來了。太讚了！' },
          { speaker: 'Beth', gender: 'female', text: 'We make a good team. Now, where’s the kettle?', zh: '我們真是好搭檔。好，水壺在哪？' },
          { speaker: 'Jack', gender: 'male', text: 'First a brew, then we light the camp stove.', zh: '先泡杯茶，再點露營爐。' }
        ]
      },
      {
        id: 'camping-fire',
        title: 'Round the campfire',
        titleZh: '圍著營火',
        description: 'Settling in for the evening at the campsite.',
        lines: [
          { speaker: 'Aisha', gender: 'female', text: 'There’s nothing like a campfire, is there?', zh: '沒有什麼比得上營火，對吧？' },
          { speaker: 'Sam', gender: 'male', text: 'Honestly, this is the life. So peaceful out here.', zh: '說真的，這才是生活。這裡好寧靜。' },
          { speaker: 'Aisha', gender: 'female', text: 'Pass the marshmallows — I’m toasting some.', zh: '把棉花糖遞給我——我要烤幾個。' },
          { speaker: 'Sam', gender: 'male', text: 'Don’t let them catch fire like last time!', zh: '別像上次一樣讓它們燒起來！' },
          { speaker: 'Aisha', gender: 'female', text: 'Ha! That was once. I’m a pro now.', zh: '哈！那只有一次。我現在是高手了。' },
          { speaker: 'Sam', gender: 'male', text: 'Look at all those stars. You never see them in the city.', zh: '你看那滿天星星。在城市裡根本看不到。' },
          { speaker: 'Aisha', gender: 'female', text: 'I know. It’s magical, no light pollution at all.', zh: '是啊。好夢幻，完全沒有光害。' },
          { speaker: 'Sam', gender: 'male', text: 'Should we keep the fire going a bit longer?', zh: '我們要不要讓營火再燒久一點？' },
          { speaker: 'Aisha', gender: 'female', text: 'Just a bit. It’s starting to get a bit nippy.', zh: '再一下下就好。開始有點冷了。' },
          { speaker: 'Sam', gender: 'male', text: 'Chuck another log on, then. Cosy as anything.', zh: '那再加根木柴。超舒服的。' },
          { speaker: 'Aisha', gender: 'female', text: 'Perfect end to the day. Who knew camping could be this good?', zh: '一天完美的收尾。誰知道露營能這麼棒？' }
        ]
      },
      {
        id: 'camping-rain',
        title: 'Camping in the rain',
        titleZh: '雨中露營',
        description: 'Making the best of bad weather under canvas.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'It’s absolutely tipping it down out there.', zh: '外面雨下得超大。' },
          { speaker: 'Nina', gender: 'female', text: 'So much for the “dry spell” they promised.', zh: '他們說好的「乾燥天氣」呢，根本沒有。' },
          { speaker: 'Tom', gender: 'male', text: 'At least the tent’s holding up so far.', zh: '至少帳篷目前還撐得住。' },
          { speaker: 'Nina', gender: 'female', text: 'Touch wood. There’s a puddle forming by the door.', zh: '希望別烏鴉嘴。門口開始積水了。' },
          { speaker: 'Tom', gender: 'male', text: 'Shift the bags onto the groundsheet, quick.', zh: '快把背包移到地墊上。' },
          { speaker: 'Nina', gender: 'female', text: 'Done. Honestly, this is so typically British.', zh: '好了。老實說，這真是太英國了。' },
          { speaker: 'Tom', gender: 'male', text: 'We could make a run for the pub down the lane?', zh: '我們可以衝去巷子那頭的酒吧？' },
          { speaker: 'Nina', gender: 'female', text: 'In this? We’d be drenched in seconds.', zh: '這種天氣？我們幾秒就會濕透。' },
          { speaker: 'Tom', gender: 'male', text: 'Fair point. Cards and hot chocolate instead?', zh: '有道理。那改玩牌配熱可可？' },
          { speaker: 'Nina', gender: 'female', text: 'Now you’re talking. Deal me in.', zh: '這才像話。發牌給我吧。' },
          { speaker: 'Tom', gender: 'male', text: 'You know what? This is actually really cosy.', zh: '你知道嗎？其實這樣還挺溫馨的。' }
        ]
      }
    ]
  },
  {
    id: 'concert',
    title: 'Concerts & Gigs',
    titleZh: '演唱會',
    icon: '🎤',
    blurb: '買票、現場看演出、討論表演的對話',
    scenarios: [
      {
        id: 'concert-tickets',
        title: 'Getting tickets',
        titleZh: '搶票',
        description: 'Two friends scrambling for gig tickets online.',
        lines: [
          { speaker: 'Zoe', gender: 'female', text: 'Tickets go on sale at nine — are you ready?', zh: '票九點開賣——你準備好了嗎？' },
          { speaker: 'Ben', gender: 'male', text: 'Logged in and refreshing like mad.', zh: '登入了，瘋狂重新整理中。' },
          { speaker: 'Zoe', gender: 'female', text: 'I’m in the queue — forty thousand ahead of me!', zh: '我在排隊了——前面有四萬人！' },
          { speaker: 'Ben', gender: 'male', text: 'Same. Don’t refresh or you’ll lose your spot.', zh: '我也是。別重新整理，不然會掉到後面。' },
          { speaker: 'Zoe', gender: 'female', text: 'How much are the standing tickets again?', zh: '站票多少錢來著？' },
          { speaker: 'Ben', gender: 'male', text: 'About sixty, plus the dreaded booking fee.', zh: '大約六十，加上那個可怕的手續費。' },
          { speaker: 'Zoe', gender: 'female', text: 'It’s a rip-off, but I’m not missing this one.', zh: '根本是搶錢，但這場我絕不錯過。' },
          { speaker: 'Ben', gender: 'male', text: 'I’m through! How many shall I grab?', zh: '我進去了！要搶幾張？' },
          { speaker: 'Zoe', gender: 'female', text: 'Two, quick, before they sell out!', zh: '兩張，快，趁還沒賣光！' },
          { speaker: 'Ben', gender: 'male', text: 'Done! Payment confirmed — we’re going!', zh: '搞定！付款完成——我們要去了！' },
          { speaker: 'Zoe', gender: 'female', text: 'Yes! Best news all week. I can’t wait!', zh: '太好了！這禮拜最棒的消息。我等不及了！' }
        ]
      },
      {
        id: 'concert-night',
        title: 'At the gig',
        titleZh: '演出現場',
        description: 'Soaking up the atmosphere at a live show.',
        lines: [
          { speaker: 'Mia', gender: 'female', text: 'The atmosphere in here is electric!', zh: '這裡的氣氛超嗨！' },
          { speaker: 'Jay', gender: 'male', text: 'I know! Good shout getting here early for a spot.', zh: '對啊！還好我們早點來卡位。' },
          { speaker: 'Mia', gender: 'female', text: 'We can actually see the stage from here.', zh: '我們從這裡真的看得到舞台。' },
          { speaker: 'Jay', gender: 'male', text: 'The support act was better than I expected.', zh: '暖場樂團比我預期的好。' },
          { speaker: 'Mia', gender: 'female', text: 'Right? Do you want a drink before they come on?', zh: '對吧？正式開唱前你要喝點什麼嗎？' },
          { speaker: 'Jay', gender: 'male', text: 'The queue’s massive. Let’s wait till after.', zh: '排隊人超多。我們等結束後再買吧。' },
          { speaker: 'Mia', gender: 'female', text: 'Good call. Ooh, the lights are going down!', zh: '好主意。喔，燈光暗下來了！' },
          { speaker: 'Jay', gender: 'male', text: 'This is it — here they come!', zh: '就是現在——他們出場了！' },
          { speaker: 'Mia', gender: 'female', text: 'I’ve been waiting months for this!', zh: '我為這一刻等了好幾個月！' },
          { speaker: 'Jay', gender: 'male', text: 'Sing your heart out — no one’s judging!', zh: '盡情大聲唱——沒人會笑你！' },
          { speaker: 'Mia', gender: 'female', text: 'Best night ever. I never want it to end!', zh: '史上最棒的一晚。我真希望它別結束！' }
        ]
      },
      {
        id: 'concert-after',
        title: 'After the show',
        titleZh: '散場之後',
        description: 'Buzzing on the way home from the concert.',
        lines: [
          { speaker: 'Jay', gender: 'male', text: 'Wow. That was absolutely unreal.', zh: '哇。那真的太不真實了。' },
          { speaker: 'Mia', gender: 'female', text: 'My ears are ringing, but it was so worth it.', zh: '我耳朵在嗡嗡叫，但太值得了。' },
          { speaker: 'Jay', gender: 'male', text: 'The encore gave me goosebumps.', zh: '安可那段讓我起雞皮疙瘩。' },
          { speaker: 'Mia', gender: 'female', text: 'Same! When they played the old classic, I lost it.', zh: '我也是！他們唱那首老經典時，我整個失控。' },
          { speaker: 'Jay', gender: 'male', text: 'The whole crowd was singing every word.', zh: '全場觀眾每句都跟著唱。' },
          { speaker: 'Mia', gender: 'female', text: 'How are we getting home? The trains have stopped.', zh: '我們要怎麼回家？火車都停駛了。' },
          { speaker: 'Jay', gender: 'male', text: 'There’ll be a queue for taxis a mile long.', zh: '計程車一定排到天荒地老。' },
          { speaker: 'Mia', gender: 'female', text: 'Shall we just walk for a bit till it dies down?', zh: '我們要不要先走一段，等人潮散去？' },
          { speaker: 'Jay', gender: 'male', text: 'Good idea. Grab some chips on the way?', zh: '好主意。路上順便買點薯條？' },
          { speaker: 'Mia', gender: 'female', text: 'Now you’re talking. The perfect end to the night.', zh: '這才像話。今晚最完美的句點。' },
          { speaker: 'Jay', gender: 'male', text: 'We’ve got to do that again. Soon.', zh: '我們一定要再來一次。要快。' }
        ]
      }
    ]
  },
  {
    id: 'library',
    title: 'At the Library',
    titleZh: '圖書館',
    icon: '📚',
    blurb: '借書、辦證、找資料時的安靜對話',
    scenarios: [
      {
        id: 'library-join',
        title: 'Joining the library',
        titleZh: '辦借書證',
        description: 'Signing up for a library card.',
        lines: [
          { speaker: 'Librarian', gender: 'female', text: 'Hello, how can I help you today?', zh: '您好，今天有什麼能幫您？' },
          { speaker: 'Tom', gender: 'male', text: 'Hi, I’d like to join the library, please.', zh: '您好，我想辦借書證。' },
          { speaker: 'Librarian', gender: 'female', text: 'Of course. Have you got any proof of address?', zh: '當然。您有帶地址證明嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Yes, I’ve got a bank statement here.', zh: '有，我帶了一張銀行對帳單。' },
          { speaker: 'Librarian', gender: 'female', text: 'That’s perfect. I’ll get your card sorted now.', zh: '太好了。我現在幫您辦卡。' },
          { speaker: 'Tom', gender: 'male', text: 'How many books can I take out at once?', zh: '我一次能借幾本書？' },
          { speaker: 'Librarian', gender: 'female', text: 'Up to twelve, for three weeks at a time.', zh: '最多十二本，每次借三週。' },
          { speaker: 'Tom', gender: 'male', text: 'Brilliant. Can I renew them online?', zh: '太好了。可以線上續借嗎？' },
          { speaker: 'Librarian', gender: 'female', text: 'You can, as long as no one’s reserved them.', zh: '可以，只要沒有別人預約就行。' },
          { speaker: 'Tom', gender: 'male', text: 'Great. Do you have e-books as well?', zh: '太好了。你們也有電子書嗎？' },
          { speaker: 'Librarian', gender: 'female', text: 'We do — just download the app with your card number.', zh: '有的——用您的借書證號碼下載 App 就行。' }
        ]
      },
      {
        id: 'library-find',
        title: 'Finding a book',
        titleZh: '找一本書',
        description: 'Asking for help tracking down a title.',
        lines: [
          { speaker: 'Anna', gender: 'female', text: 'Excuse me, I’m struggling to find a book.', zh: '不好意思，我找不到一本書。' },
          { speaker: 'Librarian', gender: 'male', text: 'No problem. Do you know the title or author?', zh: '沒問題。您知道書名或作者嗎？' },
          { speaker: 'Anna', gender: 'female', text: 'It’s a history book, but I forget the exact title.', zh: '是一本歷史書，但我忘了確切書名。' },
          { speaker: 'Librarian', gender: 'male', text: 'Let me search the catalogue. What’s it about?', zh: '我來查一下館藏目錄。內容是關於什麼的？' },
          { speaker: 'Anna', gender: 'female', text: 'The Industrial Revolution, fairly recent I think.', zh: '工業革命，我想是蠻新出版的。' },
          { speaker: 'Librarian', gender: 'male', text: 'There are a few. Is it this one here?', zh: '有幾本。是這本嗎？' },
          { speaker: 'Anna', gender: 'female', text: 'That’s the one! Is it on the shelf?', zh: '就是這本！它在架上嗎？' },
          { speaker: 'Librarian', gender: 'male', text: 'It says it’s available, in the history section upstairs.', zh: '顯示是可借的，在樓上的歷史區。' },
          { speaker: 'Anna', gender: 'female', text: 'Whereabouts upstairs, roughly?', zh: '樓上大概在哪個位置？' },
          { speaker: 'Librarian', gender: 'male', text: 'Turn left at the top, under nine-four-two.', zh: '上樓後左轉，編號 942 那區。' },
          { speaker: 'Anna', gender: 'female', text: 'Thank you so much, you’ve been really helpful.', zh: '太感謝您了，您幫了大忙。' }
        ]
      },
      {
        id: 'library-fine',
        title: 'A late return',
        titleZh: '逾期還書',
        description: 'Returning a book past its due date.',
        lines: [
          { speaker: 'Joe', gender: 'male', text: 'Hi, I’m returning these, and one’s a bit overdue.', zh: '您好，我來還這些書，有一本逾期了一點。' },
          { speaker: 'Librarian', gender: 'female', text: 'Not to worry. Let me just scan them in.', zh: '別擔心。我幫您掃描歸還一下。' },
          { speaker: 'Joe', gender: 'male', text: 'How much do I owe in fines?', zh: '我要付多少逾期費？' },
          { speaker: 'Librarian', gender: 'female', text: 'It’s only a few days, so it’s just thirty pence.', zh: '才幾天而已，所以只要三十便士。' },
          { speaker: 'Joe', gender: 'male', text: 'Oh, that’s nothing. I thought it’d be loads.', zh: '喔，沒多少。我還以為會很多。' },
          { speaker: 'Librarian', gender: 'female', text: 'We cap the fines so it never gets out of hand.', zh: '我們有設逾期費上限，才不會變得太誇張。' },
          { speaker: 'Joe', gender: 'male', text: 'That’s good to know. Can I pay by card?', zh: '了解。我可以刷卡嗎？' },
          { speaker: 'Librarian', gender: 'female', text: 'Of course. There you go, all settled.', zh: '當然。好了，都結清了。' },
          { speaker: 'Joe', gender: 'male', text: 'Great. Could I take a couple more out today?', zh: '太好了。我今天可以再借幾本嗎？' },
          { speaker: 'Librarian', gender: 'female', text: 'Absolutely. Bring them to the desk when you’re ready.', zh: '當然。選好了拿到櫃台來就行。' },
          { speaker: 'Joe', gender: 'male', text: 'Will do. I’ll set a reminder this time!', zh: '好的。這次我會設個提醒！' }
        ]
      }
    ]
  }
]
