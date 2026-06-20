// Situations pack 10 — hobbies, family help & celebrations (florist, bike shop,
// marathon training, yoga, childminder, fishing, BBQ, Christmas). 3 dialogues per
// category, 11 lines each, alternating voices.

export const PACK10 = [
  {
    id: 'florist',
    title: 'At the Florist’s',
    titleZh: '花店訂花',
    icon: '💐',
    blurb: '挑花、訂花束、節日送花時的對話',
    scenarios: [
      {
        id: 'florist-bouquet',
        title: 'Ordering a bouquet',
        titleZh: '訂一束花',
        description: 'Choosing flowers for a special occasion.',
        lines: [
          { speaker: 'Florist', gender: 'female', text: 'Morning! Are you after something special?', zh: '早安！您想找什麼特別的嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Yes, a bouquet for my mum’s birthday.', zh: '對，要一束花給我媽媽慶生。' },
          { speaker: 'Florist', gender: 'female', text: 'Lovely. Does she have any favourite flowers?', zh: '真好。她有特別喜歡的花嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'She loves anything colourful, really.', zh: '她其實很愛任何色彩繽紛的花。' },
          { speaker: 'Florist', gender: 'female', text: 'Then a mixed seasonal bouquet would be perfect.', zh: '那當季的綜合花束就很適合。' },
          { speaker: 'Tom', gender: 'male', text: 'Could you make it nice and bright?', zh: '可以做得漂亮鮮豔一點嗎？' },
          { speaker: 'Florist', gender: 'female', text: 'Of course. Would you like a gift card with it?', zh: '當然。要附一張卡片嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Yes please. Just “Happy Birthday, love Tom”.', zh: '好，麻煩了。寫「生日快樂，Tom 上」就好。' },
          { speaker: 'Florist', gender: 'female', text: 'Will do. Are you taking them, or shall we deliver?', zh: '沒問題。您要自取，還是我們配送？' },
          { speaker: 'Tom', gender: 'male', text: 'Could you deliver them tomorrow morning?', zh: '可以明天早上送嗎？' },
          { speaker: 'Florist', gender: 'female', text: 'Absolutely. She’ll be thrilled with these.', zh: '當然。她收到一定會超開心。' }
        ]
      },
      {
        id: 'florist-funeral',
        title: 'Flowers for a sympathy gift',
        titleZh: '訂慰問花',
        description: 'Arranging a tasteful sympathy arrangement.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'Hi, I need some flowers, but for a sad occasion.', zh: '您好，我需要訂花，但是用於哀傷的場合。' },
          { speaker: 'Florist', gender: 'male', text: 'I’m sorry. Were you thinking of a sympathy arrangement?', zh: '我很遺憾。您是想要慰問花嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Yes, for a friend who’s recently lost her mum.', zh: '對，給一位最近失去母親的朋友。' },
          { speaker: 'Florist', gender: 'male', text: 'Something gentle and understated, perhaps?', zh: '也許做得柔和、樸素一點？' },
          { speaker: 'Eve', gender: 'female', text: 'Exactly. Soft colours would feel right.', zh: '沒錯。柔和的色調比較適合。' },
          { speaker: 'Florist', gender: 'male', text: 'Whites and pale pinks always work beautifully.', zh: '白色和淺粉紅總是很合適又好看。' },
          { speaker: 'Eve', gender: 'female', text: 'That sounds lovely. Could you add a small note?', zh: '聽起來很好。可以附一張小卡嗎？' },
          { speaker: 'Florist', gender: 'male', text: 'Of course. What would you like it to say?', zh: '當然。您想寫什麼？' },
          { speaker: 'Eve', gender: 'female', text: 'Just “Thinking of you”. Keep it simple.', zh: '寫「想念你、與你同在」就好。簡單一點。' },
          { speaker: 'Florist', gender: 'male', text: 'That’s perfect. I’ll have it ready this afternoon.', zh: '很合適。我今天下午會準備好。' },
          { speaker: 'Eve', gender: 'female', text: 'Thank you for being so thoughtful about it.', zh: '謝謝您處理得這麼細心。' }
        ]
      },
      {
        id: 'florist-plants',
        title: 'Buying a houseplant',
        titleZh: '買盆栽',
        description: 'Asking for an easy-care plant for the home.',
        lines: [
          { speaker: 'Dan', gender: 'male', text: 'I’d like a houseplant, but I’m terrible with them.', zh: '我想買盆栽，但我超不會養。' },
          { speaker: 'Florist', gender: 'female', text: 'Ha, you’re not alone! Let’s find a hardy one.', zh: '哈，你不孤單！我們來找個好養的。' },
          { speaker: 'Dan', gender: 'male', text: 'Something that survives a bit of neglect?', zh: '那種被冷落一下也死不了的？' },
          { speaker: 'Florist', gender: 'female', text: 'This one’s almost impossible to kill, honestly.', zh: '老實說，這盆幾乎養不死。' },
          { speaker: 'Dan', gender: 'male', text: 'Perfect. How often do I need to water it?', zh: '太好了。我多久要澆一次水？' },
          { speaker: 'Florist', gender: 'female', text: 'Once a week is plenty. Let it dry out between.', zh: '一週一次就很夠。中間讓土乾掉。' },
          { speaker: 'Dan', gender: 'male', text: 'And does it need much light?', zh: '它需要很多光嗎？' },
          { speaker: 'Florist', gender: 'female', text: 'No, it’s happy in a shady corner.', zh: '不用，它在陰暗的角落也活得好好的。' },
          { speaker: 'Dan', gender: 'male', text: 'Brilliant. That sounds about my level!', zh: '太好了。這聽起來符合我的程度！' },
          { speaker: 'Florist', gender: 'female', text: 'You’ll be fine. Just don’t overwater it.', zh: '你沒問題的。只要別澆太多水。' },
          { speaker: 'Dan', gender: 'male', text: 'Noted. I’ll do my best to keep it alive!', zh: '記住了。我會盡力讓它活著！' }
        ]
      }
    ]
  },
  {
    id: 'bikeshop',
    title: 'At the Bike Shop',
    titleZh: '單車店',
    icon: '🚲',
    blurb: '買車、修車、保養單車時的實用對話',
    scenarios: [
      {
        id: 'bikeshop-buy',
        title: 'Buying a bike',
        titleZh: '買單車',
        description: 'Choosing the right bike for commuting.',
        lines: [
          { speaker: 'Assistant', gender: 'male', text: 'Hiya, after a new bike? What’s it mainly for?', zh: '嗨，要找新單車嗎？主要用途是什麼？' },
          { speaker: 'Amy', gender: 'female', text: 'Commuting to work, mostly on roads.', zh: '通勤上班，大多走馬路。' },
          { speaker: 'Assistant', gender: 'male', text: 'Then a hybrid would suit you nicely.', zh: '那混合型單車很適合您。' },
          { speaker: 'Amy', gender: 'female', text: 'What’s the difference from a road bike?', zh: '它跟公路車有什麼不同？' },
          { speaker: 'Assistant', gender: 'male', text: 'It’s comfier and more upright for town riding.', zh: '它更舒適、騎姿更直立，適合市區。' },
          { speaker: 'Amy', gender: 'female', text: 'That sounds ideal. Can I try one out?', zh: '聽起來很理想。我可以試騎嗎？' },
          { speaker: 'Assistant', gender: 'male', text: 'Of course. Let me set the saddle for your height.', zh: '當然。我幫您依身高調整坐墊。' },
          { speaker: 'Amy', gender: 'female', text: 'That feels great. Does it come with lights?', zh: '感覺很棒。有附車燈嗎？' },
          { speaker: 'Assistant', gender: 'male', text: 'Not included, but I’d strongly recommend a set.', zh: '沒附，但我強烈建議裝一組。' },
          { speaker: 'Amy', gender: 'female', text: 'Add some, and a lock too, please.', zh: '幫我加一組，再加一個鎖，謝謝。' },
          { speaker: 'Assistant', gender: 'male', text: 'Good thinking. I’ll get you all set up.', zh: '想得周到。我幫您全部裝好。' }
        ]
      },
      {
        id: 'bikeshop-puncture',
        title: 'A puncture repair',
        titleZh: '補破胎',
        description: 'Bringing in a bike with a flat tyre.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'Hi, I’ve got a flat. Can you take a look?', zh: '您好，我的輪胎沒氣了。可以看一下嗎？' },
          { speaker: 'Mechanic', gender: 'female', text: 'Course. Front or back?', zh: '當然。前輪還後輪？' },
          { speaker: 'Tom', gender: 'male', text: 'The back one. It went down this morning.', zh: '後輪。今天早上就沒氣了。' },
          { speaker: 'Mechanic', gender: 'female', text: 'Let’s have a look. Ah, there’s a thorn in it.', zh: '我看看。啊，有根刺扎進去了。' },
          { speaker: 'Tom', gender: 'male', text: 'Can it be patched, or do I need a new tube?', zh: '能補嗎，還是要換新內胎？' },
          { speaker: 'Mechanic', gender: 'female', text: 'A new tube’s safest — it’s a clean tear.', zh: '換新內胎最保險——是個很乾淨的裂口。' },
          { speaker: 'Tom', gender: 'male', text: 'Fair enough. How long will it take?', zh: '有道理。要多久？' },
          { speaker: 'Mechanic', gender: 'female', text: 'Ten minutes. I’ll check the tyre while I’m at it.', zh: '十分鐘。我順便檢查一下外胎。' },
          { speaker: 'Tom', gender: 'male', text: 'Brilliant. Could you pump the front up too?', zh: '太好了。前輪也能幫我打氣嗎？' },
          { speaker: 'Mechanic', gender: 'female', text: 'Already on it. Both will be spot on.', zh: '已經在弄了。兩輪都會弄到剛剛好。' },
          { speaker: 'Tom', gender: 'male', text: 'Cheers. You’ve saved my ride home.', zh: '謝啦。你救了我的回家路。' }
        ]
      },
      {
        id: 'bikeshop-service',
        title: 'Booking a service',
        titleZh: '預約保養',
        description: 'Arranging a full bike service.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'My bike’s due a service. Can I book it in?', zh: '我的單車該保養了。可以預約嗎？' },
          { speaker: 'Mechanic', gender: 'male', text: 'Of course. When did it last have one?', zh: '當然。它上次保養是什麼時候？' },
          { speaker: 'Eve', gender: 'female', text: 'Honestly, not since I bought it.', zh: '老實說，從買來就沒保養過。' },
          { speaker: 'Mechanic', gender: 'male', text: 'Then I’d go for the full service.', zh: '那我會建議做完整保養。' },
          { speaker: 'Eve', gender: 'female', text: 'What does that include?', zh: '那包含哪些？' },
          { speaker: 'Mechanic', gender: 'male', text: 'Gears, brakes, a clean and a full safety check.', zh: '變速、煞車、清潔，加上完整的安全檢查。' },
          { speaker: 'Eve', gender: 'female', text: 'The brakes have been a bit spongy lately.', zh: '煞車最近有點軟綿綿的。' },
          { speaker: 'Mechanic', gender: 'male', text: 'I’ll bleed them and adjust the pads.', zh: '我會幫你排氣並調整來令片。' },
          { speaker: 'Eve', gender: 'female', text: 'Great. Roughly what will it cost?', zh: '太好了。大概要多少錢？' },
          { speaker: 'Mechanic', gender: 'male', text: 'Around forty, more if it needs new parts.', zh: '大約四十英鎊，要換零件的話會多一點。' },
          { speaker: 'Eve', gender: 'female', text: 'That’s fine. I’ll drop it in on Saturday.', zh: '沒問題。我週六送過來。' }
        ]
      }
    ]
  },
  {
    id: 'marathon',
    title: 'Marathon Training',
    titleZh: '馬拉松訓練',
    icon: '🏅',
    blurb: '長跑訓練、補給、賽前準備的對話',
    scenarios: [
      {
        id: 'marathon-training',
        title: 'Building up the miles',
        titleZh: '累積里程',
        description: 'Comparing training notes with a running buddy.',
        lines: [
          { speaker: 'Jay', gender: 'male', text: 'How far did you get on your long run yesterday?', zh: '你昨天長跑跑了多遠？' },
          { speaker: 'Holly', gender: 'female', text: 'Eighteen miles. My legs are paying for it today.', zh: '十八英里。今天我的腿在還債。' },
          { speaker: 'Jay', gender: 'male', text: 'Eighteen, nice! That’s the longest yet, isn’t it?', zh: '十八英里，讚！這是目前最遠的吧？' },
          { speaker: 'Holly', gender: 'female', text: 'It is. The last few miles were brutal, though.', zh: '是啊。不過最後幾英里超痛苦。' },
          { speaker: 'Jay', gender: 'male', text: 'Did you take any gels to keep your energy up?', zh: '你有吃能量膠維持體力嗎？' },
          { speaker: 'Holly', gender: 'female', text: 'A couple, but I think I left it too late.', zh: '吃了兩個，但我覺得太晚才補。' },
          { speaker: 'Jay', gender: 'male', text: 'Take them earlier next time, before you flag.', zh: '下次早點補，趁你還沒沒力前。' },
          { speaker: 'Holly', gender: 'female', text: 'Good shout. How’s your training going?', zh: '好建議。你的訓練如何？' },
          { speaker: 'Jay', gender: 'male', text: 'Slowly but surely. Trying not to overdo it.', zh: '慢慢來但很穩。盡量別練過頭。' },
          { speaker: 'Holly', gender: 'female', text: 'Smart. Injuries are the real enemy.', zh: '聰明。受傷才是真正的敵人。' },
          { speaker: 'Jay', gender: 'male', text: 'Exactly. Rest days are training too.', zh: '沒錯。休息日也是訓練的一部分。' }
        ]
      },
      {
        id: 'marathon-injury',
        title: 'A niggling injury',
        titleZh: '惱人的小傷',
        description: 'Worrying about a sore knee before the race.',
        lines: [
          { speaker: 'Holly', gender: 'female', text: 'My knee’s been giving me grief all week.', zh: '我的膝蓋整週都在折磨我。' },
          { speaker: 'Jay', gender: 'male', text: 'Oh no, with the race so close. Is it bad?', zh: '喔不，比賽都快到了。很嚴重嗎？' },
          { speaker: 'Holly', gender: 'female', text: 'A dull ache, mostly going downhill.', zh: '隱隱作痛，主要是下坡的時候。' },
          { speaker: 'Jay', gender: 'male', text: 'Have you rested it, or are you pushing through?', zh: '你有休息嗎，還是硬撐？' },
          { speaker: 'Holly', gender: 'female', text: 'Pushing through, which I know is daft.', zh: '硬撐，我知道這很傻。' },
          { speaker: 'Jay', gender: 'male', text: 'Honestly, back off for a few days.', zh: '老實說，先暫停個幾天。' },
          { speaker: 'Holly', gender: 'female', text: 'But I’ll lose my fitness so close to the race.', zh: '但這麼接近比賽，我會掉體能。' },
          { speaker: 'Jay', gender: 'male', text: 'You won’t in a few days. It’s tapering anyway.', zh: '幾天不會的。反正現在是減量期。' },
          { speaker: 'Holly', gender: 'female', text: 'True. Better to start healthy than injured.', zh: '是啊。健康上場比帶傷上場好。' },
          { speaker: 'Jay', gender: 'male', text: 'Exactly. Ice it, rest it, and you’ll be fine.', zh: '沒錯。冰敷、休息，你會沒事的。' },
          { speaker: 'Holly', gender: 'female', text: 'You’re right. Sense talked into me, thanks.', zh: '你說得對。被你勸醒了，謝謝。' }
        ]
      },
      {
        id: 'marathon-raceday',
        title: 'On race day',
        titleZh: '比賽當天',
        description: 'Nervous excitement at the start line.',
        lines: [
          { speaker: 'Holly', gender: 'female', text: 'This is it. I can’t believe race day’s here.', zh: '就是今天了。我不敢相信比賽日到了。' },
          { speaker: 'Jay', gender: 'male', text: 'You’ve trained for months. You’re ready.', zh: '你練了好幾個月。你準備好了。' },
          { speaker: 'Holly', gender: 'female', text: 'The crowd’s huge. My stomach’s in knots.', zh: '人潮好多。我緊張得胃打結。' },
          { speaker: 'Jay', gender: 'male', text: 'That’s just adrenaline. It’ll settle once you start.', zh: '那只是腎上腺素。一起跑就會平復。' },
          { speaker: 'Holly', gender: 'female', text: 'Remember, don’t go off too fast.', zh: '記住，別一開始衝太快。' },
          { speaker: 'Jay', gender: 'male', text: 'Exactly. Settle into your pace and enjoy it.', zh: '沒錯。穩住自己的配速，好好享受。' },
          { speaker: 'Holly', gender: 'female', text: 'Will you be at the finish line?', zh: '你會在終點等我嗎？' },
          { speaker: 'Jay', gender: 'male', text: 'Right there cheering, with a banner.', zh: '就在那裡幫你加油，還帶了布條。' },
          { speaker: 'Holly', gender: 'female', text: 'That means so much. Okay, this is happening.', zh: '這對我意義重大。好，要開始了。' },
          { speaker: 'Jay', gender: 'male', text: 'Go get that medal. I’m so proud of you.', zh: '去拿下那面獎牌。我超以你為傲。' },
          { speaker: 'Holly', gender: 'female', text: 'Here goes. See you in a few hours!', zh: '出發了。幾小時後見！' }
        ]
      }
    ]
  },
  {
    id: 'yoga',
    title: 'Yoga & Mindfulness',
    titleZh: '瑜伽與冥想',
    icon: '🧘',
    blurb: '上瑜伽課、放鬆、紓壓時的對話',
    scenarios: [
      {
        id: 'yoga-class',
        title: 'A beginners’ yoga class',
        titleZh: '瑜伽初學課',
        description: 'A first try at a gentle yoga session.',
        lines: [
          { speaker: 'Teacher', gender: 'female', text: 'Welcome. Is this your first class with us?', zh: '歡迎。這是您第一次來上課嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'It is. I’m not very flexible, I’m afraid.', zh: '是的。恐怕我身體不太柔軟。' },
          { speaker: 'Teacher', gender: 'female', text: 'That’s absolutely fine. Yoga isn’t a competition.', zh: '完全沒關係。瑜伽不是比賽。' },
          { speaker: 'Sam', gender: 'male', text: 'Good to know. I just want to de-stress, really.', zh: '了解。我其實只是想紓壓。' },
          { speaker: 'Teacher', gender: 'female', text: 'Perfect. Just listen to your body and breathe.', zh: '很好。傾聽你的身體，好好呼吸就行。' },
          { speaker: 'Sam', gender: 'male', text: 'Should I push into the stretches?', zh: '伸展時該用力推到底嗎？' },
          { speaker: 'Teacher', gender: 'female', text: 'Never force it. Ease in only as far as it’s comfy.', zh: '絕對不要硬撐。只伸展到舒服的範圍。' },
          { speaker: 'Sam', gender: 'male', text: 'Okay. My balance is all over the place!', zh: '好。我的平衡感一團糟！' },
          { speaker: 'Teacher', gender: 'female', text: 'Fix your eyes on one spot — it really helps.', zh: '把目光定在一個點上——很有幫助。' },
          { speaker: 'Sam', gender: 'male', text: 'Oh, that does steady me. Clever.', zh: '喔，這真的讓我穩多了。真聰明。' },
          { speaker: 'Teacher', gender: 'female', text: 'You’re doing wonderfully. Just relax into it.', zh: '你做得很棒。放鬆地融入就好。' }
        ]
      },
      {
        id: 'yoga-stress',
        title: 'Feeling stressed',
        titleZh: '感到壓力很大',
        description: 'A friend suggesting ways to unwind.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'I’ve been so stressed lately, I can’t switch off.', zh: '我最近壓力好大，根本停不下來。' },
          { speaker: 'Holly', gender: 'female', text: 'Oh, that’s rough. What’s on your plate?', zh: '喔，那真難熬。是什麼讓你忙不過來？' },
          { speaker: 'Eve', gender: 'female', text: 'Work’s manic, and my head won’t quiet down.', zh: '工作忙瘋了，腦子也靜不下來。' },
          { speaker: 'Holly', gender: 'female', text: 'Have you tried any breathing exercises?', zh: '你試過呼吸練習嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Not really. Do they actually help?', zh: '沒怎麼試。那真的有用嗎？' },
          { speaker: 'Holly', gender: 'female', text: 'Honestly, even five minutes makes a difference.', zh: '老實說，哪怕五分鐘都有差。' },
          { speaker: 'Eve', gender: 'female', text: 'I struggle to sit still, that’s the thing.', zh: '問題是我很難靜靜坐著。' },
          { speaker: 'Holly', gender: 'female', text: 'Try a guided app, then. It walks you through it.', zh: '那試試引導式 App。它會一步步帶你。' },
          { speaker: 'Eve', gender: 'female', text: 'Maybe a gentle walk would help clear my head too.', zh: '也許散個步也能讓我腦子清醒一點。' },
          { speaker: 'Holly', gender: 'female', text: 'Definitely. Be kind to yourself, you deserve a break.', zh: '當然。對自己好一點，你值得休息。' },
          { speaker: 'Eve', gender: 'female', text: 'Thank you. I really needed to hear that.', zh: '謝謝你。我真的需要聽到這些話。' }
        ]
      },
      {
        id: 'yoga-meditation',
        title: 'Trying meditation',
        titleZh: '嘗試冥想',
        description: 'Learning to meditate for the first time.',
        lines: [
          { speaker: 'Guide', gender: 'male', text: 'Get comfortable, and gently close your eyes.', zh: '找個舒服的姿勢，輕輕閉上眼睛。' },
          { speaker: 'Amy', gender: 'female', text: 'Okay. My mind’s already racing, though.', zh: '好。不過我的思緒已經狂奔了。' },
          { speaker: 'Guide', gender: 'male', text: 'That’s normal. Just notice the thoughts and let them go.', zh: '這很正常。只要覺察那些念頭，再讓它們流過。' },
          { speaker: 'Amy', gender: 'female', text: 'I keep thinking about my to-do list.', zh: '我一直想到我的待辦清單。' },
          { speaker: 'Guide', gender: 'male', text: 'Bring your focus back to your breathing.', zh: '把注意力帶回你的呼吸。' },
          { speaker: 'Amy', gender: 'female', text: 'Should I breathe in a special way?', zh: '我要用特別的方式呼吸嗎？' },
          { speaker: 'Guide', gender: 'male', text: 'Just slow and natural. In through the nose.', zh: '只要緩慢自然。用鼻子吸氣。' },
          { speaker: 'Amy', gender: 'female', text: 'It’s harder than it looks to stay focused.', zh: '要保持專注比看起來難多了。' },
          { speaker: 'Guide', gender: 'male', text: 'Every time you drift, just gently come back.', zh: '每次分心了，溫柔地回來就好。' },
          { speaker: 'Amy', gender: 'female', text: 'Oh, I actually feel a bit calmer.', zh: '喔，我其實覺得平靜了一些。' },
          { speaker: 'Guide', gender: 'male', text: 'That’s it. A little each day goes a long way.', zh: '就是這樣。每天一點點，效果會很大。' }
        ]
      }
    ]
  },
  {
    id: 'childminder',
    title: 'Childcare & Babysitting',
    titleZh: '托嬰與保母',
    icon: '🧸',
    blurb: '找保母、托嬰、交代注意事項的對話',
    scenarios: [
      {
        id: 'childminder-interview',
        title: 'Meeting a childminder',
        titleZh: '面談保母',
        description: 'Parents discussing care for their toddler.',
        lines: [
          { speaker: 'Mum', gender: 'female', text: 'Thanks for seeing us. We’re after some childcare.', zh: '謝謝您撥空。我們在找托嬰服務。' },
          { speaker: 'Minder', gender: 'female', text: 'Lovely to meet you. How old is your little one?', zh: '很高興見到你們。孩子幾歲？' },
          { speaker: 'Mum', gender: 'female', text: 'He’s just turned two and into everything.', zh: '他剛滿兩歲，什麼都要碰。' },
          { speaker: 'Minder', gender: 'female', text: 'Ha, that’s a fun age. How many days a week?', zh: '哈，這年紀很好玩。一週幾天？' },
          { speaker: 'Mum', gender: 'female', text: 'Three days, while we’re both at work.', zh: '三天，我們兩個上班的時候。' },
          { speaker: 'Minder', gender: 'female', text: 'I can do that. Does he have any allergies?', zh: '我可以。他有過敏嗎？' },
          { speaker: 'Mum', gender: 'female', text: 'Just a mild dairy intolerance, nothing serious.', zh: '只是輕微的乳製品不耐，不嚴重。' },
          { speaker: 'Minder', gender: 'female', text: 'Noted. I’ll keep meals dairy-free to be safe.', zh: '記下了。保險起見我餐點會避開乳製品。' },
          { speaker: 'Mum', gender: 'female', text: 'That’s reassuring. What’s a typical day like?', zh: '這讓人安心。一般一天的安排是怎樣？' },
          { speaker: 'Minder', gender: 'female', text: 'Play, a walk, lunch, then a nap in the afternoon.', zh: '玩耍、散步、午餐，下午再睡個午覺。' },
          { speaker: 'Mum', gender: 'female', text: 'That sounds perfect. He’ll love it here.', zh: '聽起來太完美了。他會很喜歡這裡。' }
        ]
      },
      {
        id: 'childminder-handover',
        title: 'Leaving instructions',
        titleZh: '交代注意事項',
        description: 'A quick handover before heading out.',
        lines: [
          { speaker: 'Dad', gender: 'male', text: 'Thanks for babysitting. Here’s everything you need.', zh: '謝謝你來顧小孩。你需要的都在這。' },
          { speaker: 'Sitter', gender: 'female', text: 'No problem. What time’s bedtime?', zh: '沒問題。幾點睡覺？' },
          { speaker: 'Dad', gender: 'male', text: 'Seven for her, after a story.', zh: '她七點，講完故事後睡。' },
          { speaker: 'Sitter', gender: 'female', text: 'Got it. And is she allowed a snack before bed?', zh: '知道了。睡前可以吃點心嗎？' },
          { speaker: 'Dad', gender: 'male', text: 'A little milk and some fruit is fine.', zh: '一點牛奶和一些水果就好。' },
          { speaker: 'Sitter', gender: 'female', text: 'Lovely. Where can I reach you if I need to?', zh: '好的。需要的話我怎麼聯絡你們？' },
          { speaker: 'Dad', gender: 'male', text: 'Our numbers are on the fridge, and we’re ten minutes away.', zh: '我們的號碼貼在冰箱上，我們離這十分鐘。' },
          { speaker: 'Sitter', gender: 'female', text: 'Perfect. Any TV or screen-time rules?', zh: '太好了。有電視或螢幕時間的規定嗎？' },
          { speaker: 'Dad', gender: 'male', text: 'Half an hour max, then it’s bath and bed.', zh: '最多半小時，然後就洗澡睡覺。' },
          { speaker: 'Sitter', gender: 'female', text: 'No worries at all. Go and enjoy your evening.', zh: '完全沒問題。你們去好好享受今晚吧。' },
          { speaker: 'Dad', gender: 'male', text: 'Thank you. We won’t be too late.', zh: '謝謝你。我們不會太晚回來。' }
        ]
      },
      {
        id: 'childminder-back',
        title: 'How did it go?',
        titleZh: '回來後問狀況',
        description: 'Checking in after an evening out.',
        lines: [
          { speaker: 'Mum', gender: 'female', text: 'We’re back! How were they for you?', zh: '我們回來了！他們乖嗎？' },
          { speaker: 'Sitter', gender: 'female', text: 'Good as gold, honestly. No trouble at all.', zh: '老實說，乖得不得了。完全沒鬧。' },
          { speaker: 'Mum', gender: 'female', text: 'Oh, what a relief. Did she go down okay?', zh: '喔，鬆了一口氣。她有乖乖睡嗎？' },
          { speaker: 'Sitter', gender: 'female', text: 'Out like a light after one story.', zh: '講完一個故事就秒睡。' },
          { speaker: 'Mum', gender: 'female', text: 'Amazing. Did she eat her fruit?', zh: '太棒了。她有吃水果嗎？' },
          { speaker: 'Sitter', gender: 'female', text: 'Every bit, and asked for more!', zh: '一口都不剩，還想再要！' },
          { speaker: 'Mum', gender: 'female', text: 'Ha, typical. Was there anything you needed?', zh: '哈，一如往常。有什麼你需要的嗎？' },
          { speaker: 'Sitter', gender: 'female', text: 'Not at all. You’d left everything ready.', zh: '完全沒有。你們什麼都準備好了。' },
          { speaker: 'Mum', gender: 'female', text: 'Thank you so much. You’ve been a lifesaver.', zh: '太感謝你了。你真是救星。' },
          { speaker: 'Sitter', gender: 'female', text: 'Any time. They’re a pleasure to look after.', zh: '隨時。照顧他們很愉快。' },
          { speaker: 'Mum', gender: 'female', text: 'Let me sort you out, and I’ll book you again soon.', zh: '我來結算給你，下次再找你。' }
        ]
      }
    ]
  },
  {
    id: 'fishing',
    title: 'Fishing',
    titleZh: '釣魚',
    icon: '🎣',
    blurb: '釣魚、聊漁獲、河邊放鬆的對話',
    scenarios: [
      {
        id: 'fishing-day',
        title: 'A day by the river',
        titleZh: '河邊的一天',
        description: 'Two mates settling in for a relaxing fishing trip.',
        lines: [
          { speaker: 'Roy', gender: 'male', text: 'Perfect spot, this. Nice and quiet.', zh: '這地點太完美了。又安靜又舒服。' },
          { speaker: 'Geoff', gender: 'male', text: 'Couldn’t agree more. What are you using for bait?', zh: '完全同意。你用什麼餌？' },
          { speaker: 'Roy', gender: 'male', text: 'Just maggots today. They never let me down.', zh: '今天用蛆。它們從沒讓我失望過。' },
          { speaker: 'Geoff', gender: 'male', text: 'Fair enough. The water’s a bit murky, mind.', zh: '有道理。不過水有點濁。' },
          { speaker: 'Roy', gender: 'male', text: 'That can be good, actually. Less spooked.', zh: '其實這可能是好事。魚比較不會被嚇到。' },
          { speaker: 'Geoff', gender: 'male', text: 'True. Right, line’s in. Now we wait.', zh: '是啊。好，線下水了。現在就等吧。' },
          { speaker: 'Roy', gender: 'male', text: 'That’s the best bit — no rush, no stress.', zh: '這才是最棒的——不急，沒壓力。' },
          { speaker: 'Geoff', gender: 'male', text: 'Pour us a tea from the flask, would you?', zh: '從保溫瓶幫我倒杯茶好嗎？' },
          { speaker: 'Roy', gender: 'male', text: 'Here you go. Oh — I think I’ve got a bite!', zh: '給你。喔——我好像上鉤了！' },
          { speaker: 'Geoff', gender: 'male', text: 'Steady, don’t reel too fast. Ease it in.', zh: '穩住，別收太快。慢慢收。' },
          { speaker: 'Roy', gender: 'male', text: 'Got him! A decent size, too. What a start!', zh: '釣到了！還挺大隻的。開門紅！' }
        ]
      },
      {
        id: 'fishing-beginner',
        title: 'Teaching a beginner',
        titleZh: '教新手',
        description: 'Showing someone how to cast for the first time.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'Right, hold the rod like this and relax your grip.', zh: '好，像這樣握竿，手別太緊。' },
          { speaker: 'Amy', gender: 'female', text: 'Okay. How do I actually cast it out?', zh: '好。那要怎麼把線甩出去？' },
          { speaker: 'Tom', gender: 'male', text: 'Flick the rod forward and release the line.', zh: '把竿往前一甩，同時放線。' },
          { speaker: 'Amy', gender: 'female', text: 'Like that? Oh, it barely went anywhere!', zh: '像這樣嗎？喔，幾乎沒甩出去！' },
          { speaker: 'Tom', gender: 'male', text: 'Not bad for a first go. Let the rod do the work.', zh: '第一次不錯了。讓竿子去出力。' },
          { speaker: 'Amy', gender: 'female', text: 'There — that one went much further!', zh: '看——這次甩遠多了！' },
          { speaker: 'Tom', gender: 'male', text: 'Lovely cast. Now keep an eye on the float.', zh: '甩得漂亮。現在盯著浮標。' },
          { speaker: 'Amy', gender: 'female', text: 'What am I looking for, exactly?', zh: '我到底要看什麼？' },
          { speaker: 'Tom', gender: 'male', text: 'If it bobs under, that’s a fish. Strike then.', zh: '如果它沉下去，就是有魚。那時就揚竿。' },
          { speaker: 'Amy', gender: 'female', text: 'This is surprisingly relaxing, actually.', zh: '其實這出乎意料地放鬆。' },
          { speaker: 'Tom', gender: 'male', text: 'That’s the magic of it. Patience is everything.', zh: '這就是它的魅力。耐心就是一切。' }
        ]
      },
      {
        id: 'fishing-catch',
        title: 'Comparing the catch',
        titleZh: '比較漁獲',
        description: 'Wrapping up the day and counting the fish.',
        lines: [
          { speaker: 'Geoff', gender: 'male', text: 'So, how did you do today?', zh: '那麼，你今天收穫如何？' },
          { speaker: 'Roy', gender: 'male', text: 'Five in total, one a real whopper.', zh: '總共五條，其中一條超大。' },
          { speaker: 'Geoff', gender: 'male', text: 'Go on, how big was it?', zh: '說吧，多大？' },
          { speaker: 'Roy', gender: 'male', text: 'Honestly, about this long. No word of a lie.', zh: '老實說，差不多這麼長。絕無虛言。' },
          { speaker: 'Geoff', gender: 'male', text: 'Ha! The one that always grows in the telling.', zh: '哈！每次講就越長那種。' },
          { speaker: 'Roy', gender: 'male', text: 'I’ve got a photo to prove it, cheeky!', zh: '我有照片可以證明，少臭屁！' },
          { speaker: 'Geoff', gender: 'male', text: 'Fair enough. I only managed two myself.', zh: '好啦。我自己只釣到兩條。' },
          { speaker: 'Roy', gender: 'male', text: 'Still, a lovely day out, win or lose.', zh: '不過不管收穫如何，都是美好的一天。' },
          { speaker: 'Geoff', gender: 'male', text: 'Couldn’t have asked for better weather.', zh: '天氣再好不過了。' },
          { speaker: 'Roy', gender: 'male', text: 'Same time next week?', zh: '下週同一時間？' },
          { speaker: 'Geoff', gender: 'male', text: 'Wouldn’t miss it. I’ll bring the flask.', zh: '絕不錯過。我帶保溫瓶。' }
        ]
      }
    ]
  },
  {
    id: 'bbq',
    title: 'A Barbecue',
    titleZh: '烤肉聚會',
    icon: '🍖',
    blurb: '辦烤肉、招待客人、夏日聚會的對話',
    scenarios: [
      {
        id: 'bbq-planning',
        title: 'Planning a barbecue',
        titleZh: '籌備烤肉',
        description: 'Sorting out a weekend barbecue with a friend.',
        lines: [
          { speaker: 'Sam', gender: 'male', text: 'The weather looks great — fancy a barbecue Saturday?', zh: '天氣看起來很棒——週六要不要來個烤肉？' },
          { speaker: 'Eve', gender: 'female', text: 'Love that! Shall we invite the usual crowd?', zh: '太愛了！要邀那群老面孔嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'Definitely. I’ll do the meat if you do salads.', zh: '當然。我負責肉，你負責沙拉？' },
          { speaker: 'Eve', gender: 'female', text: 'Deal. How many are we expecting?', zh: '成交。大概會來幾個人？' },
          { speaker: 'Sam', gender: 'male', text: 'About ten, maybe a few more.', zh: '大約十個，可能多幾個。' },
          { speaker: 'Eve', gender: 'female', text: 'Should we cater for any veggies?', zh: '要準備素食的份嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'Good point. I’ll grab some halloumi and veggie burgers.', zh: '說得好。我買些烤起司和蔬食漢堡。' },
          { speaker: 'Eve', gender: 'female', text: 'Perfect. I’ll bring drinks and a pudding.', zh: '完美。我帶飲料和甜點。' },
          { speaker: 'Sam', gender: 'male', text: 'Brilliant. Have we got enough charcoal?', zh: '太好了。木炭夠嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Better buy a bag, just in case.', zh: '最好再買一袋，以防萬一。' },
          { speaker: 'Sam', gender: 'male', text: 'On it. Fingers crossed the weather holds!', zh: '我去買。希望天氣撐住別變！' }
        ]
      },
      {
        id: 'bbq-cooking',
        title: 'At the grill',
        titleZh: '烤肉中',
        description: 'Manning the barbecue as guests arrive.',
        lines: [
          { speaker: 'Dan', gender: 'male', text: 'Right, the coals are finally ready.', zh: '好，木炭終於可以了。' },
          { speaker: 'Holly', gender: 'female', text: 'About time! Everyone’s starving.', zh: '總算！大家都餓扁了。' },
          { speaker: 'Dan', gender: 'male', text: 'Burgers and sausages first. How do you like yours?', zh: '先烤漢堡和香腸。你的要幾分熟？' },
          { speaker: 'Holly', gender: 'female', text: 'Well done for me, please. No pink!', zh: '我要全熟，謝謝。別有粉紅色！' },
          { speaker: 'Dan', gender: 'male', text: 'Don’t worry, I always cremate them anyway!', zh: '別擔心，反正我每次都烤到焦！' },
          { speaker: 'Holly', gender: 'female', text: 'Ha! Mind that flare-up — the fat’s dripping.', zh: '哈！小心那火苗——油在滴。' },
          { speaker: 'Dan', gender: 'male', text: 'Good spot. I’ll move them to the side.', zh: '眼尖。我把它們移到旁邊。' },
          { speaker: 'Holly', gender: 'female', text: 'Are the veggie skewers nearly done?', zh: '蔬菜串快好了嗎？' },
          { speaker: 'Dan', gender: 'male', text: 'Couple more minutes. Grab the buns, would you?', zh: '再幾分鐘。幫我拿一下麵包好嗎？' },
          { speaker: 'Holly', gender: 'female', text: 'On it. This all smells incredible.', zh: '馬上。這全都聞起來超香。' },
          { speaker: 'Dan', gender: 'male', text: 'Right, come and get it, everyone!', zh: '好，大家來開動囉！' }
        ]
      },
      {
        id: 'bbq-rain',
        title: 'When the rain comes',
        titleZh: '突然下雨',
        description: 'Rescuing the barbecue from a sudden downpour.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'Uh oh — did you feel that? It’s starting to spit.', zh: '糟了——你有感覺嗎？開始飄雨了。' },
          { speaker: 'Sam', gender: 'male', text: 'Typical British summer! Grab the food, quick.', zh: '典型的英國夏天！快把食物拿進去。' },
          { speaker: 'Eve', gender: 'female', text: 'I’ll get the plates, you save the grill.', zh: '我拿盤子，你顧烤架。' },
          { speaker: 'Sam', gender: 'male', text: 'Everyone, inside! Bring your drinks!', zh: '大家，進屋！把飲料帶著！' },
          { speaker: 'Eve', gender: 'female', text: 'It’s really coming down now.', zh: '現在雨下得超大。' },
          { speaker: 'Sam', gender: 'male', text: 'Good job we got most of it cooked.', zh: '還好我們大部分都烤好了。' },
          { speaker: 'Eve', gender: 'female', text: 'We’ll just have an indoor picnic instead!', zh: '那我們就改成室內野餐！' },
          { speaker: 'Sam', gender: 'male', text: 'That’s the spirit. The food’s the main thing.', zh: '這就對了。食物才是重點。' },
          { speaker: 'Eve', gender: 'female', text: 'And it always rains the second you light the coals.', zh: '而且總是一點炭就下雨。' },
          { speaker: 'Sam', gender: 'male', text: 'Without fail! Right, pass the burgers round.', zh: '屢試不爽！好，把漢堡傳一傳。' },
          { speaker: 'Eve', gender: 'female', text: 'Rain or shine, it’s been a great day.', zh: '不管晴天雨天，今天都很棒。' }
        ]
      }
    ]
  },
  {
    id: 'christmas',
    title: 'Christmas',
    titleZh: '聖誕節',
    icon: '🎄',
    blurb: '聖誕採買、大餐、送禮時的節慶對話',
    scenarios: [
      {
        id: 'christmas-shopping',
        title: 'Christmas shopping',
        titleZh: '聖誕採買',
        description: 'Battling the shops for presents.',
        lines: [
          { speaker: 'Holly', gender: 'female', text: 'The shops are absolutely heaving today.', zh: '今天店裡人擠人。' },
          { speaker: 'Jay', gender: 'male', text: 'It’s always chaos this close to Christmas.', zh: '越接近聖誕就越混亂。' },
          { speaker: 'Holly', gender: 'female', text: 'Have you got everyone sorted yet?', zh: '你每個人的禮物都買齊了嗎？' },
          { speaker: 'Jay', gender: 'male', text: 'Nearly. I’m stuck on what to get my dad.', zh: '快了。我卡在不知道要送我爸什麼。' },
          { speaker: 'Holly', gender: 'female', text: 'He’s impossible to buy for, isn’t he?', zh: '他真的超難買禮物，對吧？' },
          { speaker: 'Jay', gender: 'male', text: 'Tell me about it. He says he wants nothing.', zh: '可不是嘛。他說他什麼都不要。' },
          { speaker: 'Holly', gender: 'female', text: 'A nice bottle of something usually does the trick.', zh: '送瓶好酒之類的通常都管用。' },
          { speaker: 'Jay', gender: 'male', text: 'Good shout. Safe bet, that.', zh: '好建議。穩當的選擇。' },
          { speaker: 'Holly', gender: 'female', text: 'Don’t forget you still need wrapping paper.', zh: '別忘了你還缺包裝紙。' },
          { speaker: 'Jay', gender: 'male', text: 'Right. Shall we grab a coffee before round two?', zh: '對。第二輪採買前先喝杯咖啡？' },
          { speaker: 'Holly', gender: 'female', text: 'Yes please. I need to recharge!', zh: '好，拜託。我需要充個電！' }
        ]
      },
      {
        id: 'christmas-dinner',
        title: 'Christmas dinner',
        titleZh: '聖誕大餐',
        description: 'Getting the big meal on the table.',
        lines: [
          { speaker: 'Mum', gender: 'female', text: 'Right, the turkey’s resting. Can you do the veg?', zh: '好，火雞在靜置了。你能弄蔬菜嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'On it. How many are we feeding again?', zh: '馬上。我們是要餵幾個人來著？' },
          { speaker: 'Mum', gender: 'female', text: 'Nine, with your auntie and the cousins.', zh: '九個，加上你阿姨和表親。' },
          { speaker: 'Tom', gender: 'male', text: 'Have we got enough pigs in blankets?', zh: '培根捲香腸夠嗎？' },
          { speaker: 'Mum', gender: 'female', text: 'You can never have too many of those!', zh: '那東西永遠不嫌多！' },
          { speaker: 'Tom', gender: 'male', text: 'Ha, true. Are the roasties nearly done?', zh: '哈，是啊。烤馬鈴薯快好了嗎？' },
          { speaker: 'Mum', gender: 'female', text: 'Five more minutes for that golden crunch.', zh: '再五分鐘就會金黃酥脆。' },
          { speaker: 'Tom', gender: 'male', text: 'Don’t forget the gravy and the cranberry.', zh: '別忘了肉汁和蔓越莓醬。' },
          { speaker: 'Mum', gender: 'female', text: 'All sorted. Can you carve the turkey?', zh: '都好了。你能切火雞嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Leave it to me. Right, everyone to the table!', zh: '交給我。好，大家上桌！' },
          { speaker: 'Mum', gender: 'female', text: 'Merry Christmas, love. Let’s tuck in!', zh: '聖誕快樂，寶貝。我們開動吧！' }
        ]
      },
      {
        id: 'christmas-presents',
        title: 'Opening presents',
        titleZh: '拆禮物',
        description: 'The family gathered round on Christmas morning.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'Right, who wants to hand out the presents?', zh: '好，誰想來發禮物？' },
          { speaker: 'Leo', gender: 'male', text: 'Me, me! This big one’s for you, Mum.', zh: '我、我！這個大的是給你的，媽。' },
          { speaker: 'Eve', gender: 'female', text: 'Ooh, I wonder what it is. Thank you, darling.', zh: '喔，不知道是什麼。謝謝你，寶貝。' },
          { speaker: 'Leo', gender: 'male', text: 'Open it, open it! I helped choose it!', zh: '快打開、快打開！是我幫忙挑的！' },
          { speaker: 'Eve', gender: 'female', text: 'Oh, it’s lovely! Just what I wanted.', zh: '喔，好美！正是我想要的。' },
          { speaker: 'Leo', gender: 'male', text: 'Now can I open mine? Please?', zh: '現在我可以拆我的了嗎？拜託？' },
          { speaker: 'Eve', gender: 'female', text: 'Go on then. That one with your name on.', zh: '好吧。寫你名字的那個。' },
          { speaker: 'Leo', gender: 'male', text: 'Wow! It’s exactly what I asked Santa for!', zh: '哇！這正是我跟聖誕老人許願的！' },
          { speaker: 'Eve', gender: 'female', text: 'He must have got your letter, then!', zh: '那他一定收到你的信了！' },
          { speaker: 'Leo', gender: 'male', text: 'This is the best Christmas ever!', zh: '這是史上最棒的聖誕節！' },
          { speaker: 'Eve', gender: 'female', text: 'Aw. Merry Christmas, sweetheart.', zh: '哎喲。聖誕快樂，小寶貝。' }
        ]
      }
    ]
  }
]
