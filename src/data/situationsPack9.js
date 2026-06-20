// Situations pack 9 — appointments, milestones & hobbies (optician, proposal,
// newborn baby, music lessons, social media, bakery orders, physio, swimming).
// 3 dialogues per category, 11 lines each, alternating voices.

export const PACK9 = [
  {
    id: 'optician',
    title: 'At the Optician’s',
    titleZh: '配眼鏡',
    icon: '👓',
    blurb: '驗光、挑鏡框、配隱形眼鏡時的對話',
    scenarios: [
      {
        id: 'optician-test',
        title: 'An eye test',
        titleZh: '驗光檢查',
        description: 'Having your eyes tested by the optometrist.',
        lines: [
          { speaker: 'Optometrist', gender: 'female', text: 'Take a seat. When was your last eye test?', zh: '請坐。您上次驗光是什麼時候？' },
          { speaker: 'Dan', gender: 'male', text: 'A couple of years ago, I think. Maybe more.', zh: '我想是兩年前。可能更久。' },
          { speaker: 'Optometrist', gender: 'female', text: 'No problem. Any trouble with your vision lately?', zh: '沒問題。最近視力有什麼困擾嗎？' },
          { speaker: 'Dan', gender: 'male', text: 'Things look a bit blurry at a distance.', zh: '看遠的東西有點模糊。' },
          { speaker: 'Optometrist', gender: 'female', text: 'Let’s find out. Can you read the bottom line?', zh: '我們來看看。您能讀出最底下那行嗎？' },
          { speaker: 'Dan', gender: 'male', text: 'Honestly? It’s all a bit fuzzy down there.', zh: '老實說？下面那邊全都糊糊的。' },
          { speaker: 'Optometrist', gender: 'female', text: 'Is it clearer with this lens, or this one?', zh: '用這片鏡片清楚，還是這片？' },
          { speaker: 'Dan', gender: 'male', text: 'The second one’s much sharper.', zh: '第二片清楚多了。' },
          { speaker: 'Optometrist', gender: 'female', text: 'You’re a little short-sighted, that’s all.', zh: '您只是有點近視，沒別的。' },
          { speaker: 'Dan', gender: 'male', text: 'Ah. So I’ll need glasses, then?', zh: '啊。那我需要配眼鏡囉？' },
          { speaker: 'Optometrist', gender: 'female', text: 'Just for driving and screens. Let’s pick some frames.', zh: '只是開車和看螢幕用。我們來挑鏡框吧。' }
        ]
      },
      {
        id: 'optician-frames',
        title: 'Choosing frames',
        titleZh: '挑選鏡框',
        description: 'Picking out a new pair of glasses.',
        lines: [
          { speaker: 'Assistant', gender: 'male', text: 'These are all in your prescription range.', zh: '這些都符合您的度數範圍。' },
          { speaker: 'Eve', gender: 'female', text: 'There’s so much choice. Which suits my face?', zh: '選擇好多。哪種適合我的臉型？' },
          { speaker: 'Assistant', gender: 'male', text: 'A rounder frame would soften your features.', zh: '圓一點的框會柔化您的輪廓。' },
          { speaker: 'Eve', gender: 'female', text: 'Ooh, I like these tortoiseshell ones.', zh: '喔，我喜歡這副玳瑁色的。' },
          { speaker: 'Assistant', gender: 'male', text: 'They really suit you. Try them on properly.', zh: '它們很適合您。好好戴上看看。' },
          { speaker: 'Eve', gender: 'female', text: 'Are they comfy? They feel a bit tight.', zh: '會舒服嗎？感覺有點緊。' },
          { speaker: 'Assistant', gender: 'male', text: 'I can adjust the arms so they sit better.', zh: '我可以調整鏡腳，讓它更服貼。' },
          { speaker: 'Eve', gender: 'female', text: 'Much better. Can I get them with a thinner lens?', zh: '好多了。可以配薄一點的鏡片嗎？' },
          { speaker: 'Assistant', gender: 'male', text: 'You can, and I’d add an anti-glare coating.', zh: '可以，我還會加上抗反光鍍膜。' },
          { speaker: 'Eve', gender: 'female', text: 'Sounds good. How long until they’re ready?', zh: '聽起來不錯。多久能取件？' },
          { speaker: 'Assistant', gender: 'male', text: 'About a week. We’ll text you when they’re in.', zh: '大約一週。好了會傳訊息通知您。' }
        ]
      },
      {
        id: 'optician-contacts',
        title: 'Trying contact lenses',
        titleZh: '嘗試隱形眼鏡',
        description: 'A first lesson in putting in contacts.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'I’d like to try contacts, but I’m a bit squeamish.', zh: '我想試戴隱形眼鏡，但有點害怕。' },
          { speaker: 'Optometrist', gender: 'male', text: 'Lots of people are at first. It gets easy fast.', zh: '很多人一開始都這樣。很快就會上手。' },
          { speaker: 'Eve', gender: 'female', text: 'How do I actually get it in?', zh: '到底要怎麼把它放進去？' },
          { speaker: 'Optometrist', gender: 'male', text: 'Hold your eyelid open and look up as you place it.', zh: '撐開眼皮，放的時候眼睛往上看。' },
          { speaker: 'Eve', gender: 'female', text: 'Like this? Oh — I keep blinking.', zh: '像這樣嗎？喔——我一直眨眼。' },
          { speaker: 'Optometrist', gender: 'male', text: 'That’s natural. Try to relax and go slowly.', zh: '這很正常。試著放鬆、慢慢來。' },
          { speaker: 'Eve', gender: 'female', text: 'There — it’s in! It feels a bit odd.', zh: '好了——進去了！感覺有點怪。' },
          { speaker: 'Optometrist', gender: 'male', text: 'Blink a few times. It’ll settle in a second.', zh: '眨幾下眼。一下子就會服貼了。' },
          { speaker: 'Eve', gender: 'female', text: 'Oh, that’s better. The vision’s lovely and clear.', zh: '喔，好多了。視野又清晰又舒服。' },
          { speaker: 'Optometrist', gender: 'male', text: 'Remember to take them out before bed.', zh: '記得睡前要拿下來。' },
          { speaker: 'Eve', gender: 'female', text: 'I will. Thanks for being so patient with me.', zh: '我會的。謝謝您對我這麼有耐心。' }
        ]
      }
    ]
  },
  {
    id: 'proposal',
    title: 'A Proposal',
    titleZh: '求婚',
    icon: '💎',
    blurb: '籌備求婚、緊張、說「我願意」的甜蜜對話',
    scenarios: [
      {
        id: 'proposal-planning',
        title: 'Planning the proposal',
        titleZh: '籌備求婚',
        description: 'Asking a friend for help to plan the big moment.',
        lines: [
          { speaker: 'Jake', gender: 'male', text: 'I’m going to propose to Lily. I need your help.', zh: '我要向 Lily 求婚。我需要你幫忙。' },
          { speaker: 'Sam', gender: 'male', text: 'Mate, that’s amazing! Of course. Got a ring?', zh: '老兄，太棒了！當然。戒指買了嗎？' },
          { speaker: 'Jake', gender: 'male', text: 'Picked it up yesterday. I’m terrified, honestly.', zh: '昨天拿到了。老實說我超緊張。' },
          { speaker: 'Sam', gender: 'male', text: 'She adores you. Where are you thinking of doing it?', zh: '她超愛你的。你想在哪裡求婚？' },
          { speaker: 'Jake', gender: 'male', text: 'Maybe the spot by the river where we first met.', zh: '也許在我們初遇的那條河邊。' },
          { speaker: 'Sam', gender: 'male', text: 'Oh, that’s perfect. Really thoughtful.', zh: '喔，太完美了。很有心。' },
          { speaker: 'Jake', gender: 'male', text: 'I want it to be a surprise, but not too over the top.', zh: '我想給她驚喜，但別太誇張。' },
          { speaker: 'Sam', gender: 'male', text: 'Keep it simple and heartfelt. That’s her style.', zh: '簡單真摯就好。那才是她的風格。' },
          { speaker: 'Jake', gender: 'male', text: 'Could you keep her family from finding out?', zh: '你能幫我別讓她家人發現嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'My lips are sealed. When’s the big day?', zh: '我守口如瓶。大日子是哪天？' },
          { speaker: 'Jake', gender: 'male', text: 'Saturday. Wish me luck — I’m going to need it!', zh: '週六。祝我好運——我會需要的！' }
        ]
      },
      {
        id: 'proposal-moment',
        title: 'The big moment',
        titleZh: '求婚的瞬間',
        description: 'The proposal itself, by the river.',
        lines: [
          { speaker: 'Jake', gender: 'male', text: 'Do you remember this spot? It’s where we met.', zh: '你記得這個地方嗎？我們就是在這裡相遇的。' },
          { speaker: 'Lily', gender: 'female', text: 'Of course I do. Why are you being so soppy?', zh: '我當然記得。你怎麼突然這麼肉麻？' },
          { speaker: 'Jake', gender: 'male', text: 'Because this place means everything to me.', zh: '因為這個地方對我意義非凡。' },
          { speaker: 'Lily', gender: 'female', text: 'Jake… what are you doing?', zh: 'Jake……你在做什麼？' },
          { speaker: 'Jake', gender: 'male', text: 'You make me happier than I ever thought possible.', zh: '你讓我比想像中還要幸福。' },
          { speaker: 'Lily', gender: 'female', text: 'Oh my goodness. Is this really happening?', zh: '我的天。這真的在發生嗎？' },
          { speaker: 'Jake', gender: 'male', text: 'Lily, will you marry me?', zh: 'Lily，你願意嫁給我嗎？' },
          { speaker: 'Lily', gender: 'female', text: 'Yes! A thousand times yes!', zh: '我願意！一千個願意！' },
          { speaker: 'Jake', gender: 'male', text: 'Really? You’ve made me the happiest man alive.', zh: '真的嗎？你讓我成為世上最幸福的人。' },
          { speaker: 'Lily', gender: 'female', text: 'I can’t stop shaking. It’s beautiful.', zh: '我抖個不停。戒指好美。' },
          { speaker: 'Jake', gender: 'male', text: 'I love you. Let’s go and tell everyone!', zh: '我愛你。我們去告訴大家吧！' }
        ]
      },
      {
        id: 'proposal-news',
        title: 'Sharing the news',
        titleZh: '分享喜訊',
        description: 'Telling a friend about the engagement.',
        lines: [
          { speaker: 'Lily', gender: 'female', text: 'You will not believe what happened this weekend!', zh: '你絕對不會相信這週末發生了什麼！' },
          { speaker: 'Holly', gender: 'female', text: 'Go on, you’re glowing. What is it?', zh: '快說，你整個人在發光。是什麼？' },
          { speaker: 'Lily', gender: 'female', text: 'Jake proposed! We’re engaged!', zh: 'Jake 求婚了！我們訂婚了！' },
          { speaker: 'Holly', gender: 'female', text: 'Oh my goodness! Congratulations! Show me the ring!', zh: '我的天！恭喜！快給我看戒指！' },
          { speaker: 'Lily', gender: 'female', text: 'Here — isn’t it gorgeous? I had no idea.', zh: '在這——是不是超美？我完全沒料到。' },
          { speaker: 'Holly', gender: 'female', text: 'It’s stunning. Where did he do it?', zh: '美呆了。他在哪裡求婚的？' },
          { speaker: 'Lily', gender: 'female', text: 'By the river, where we first met. I cried.', zh: '在河邊，我們初遇的地方。我哭了。' },
          { speaker: 'Holly', gender: 'female', text: 'That’s the most romantic thing I’ve ever heard.', zh: '這是我聽過最浪漫的事。' },
          { speaker: 'Lily', gender: 'female', text: 'I know! I still can’t quite believe it.', zh: '我知道！我到現在還不敢相信。' },
          { speaker: 'Holly', gender: 'female', text: 'Have you set a date yet?', zh: '你們訂日子了嗎？' },
          { speaker: 'Lily', gender: 'female', text: 'Not yet — but you’re first on the guest list!', zh: '還沒——但你是賓客名單上的第一個！' }
        ]
      }
    ]
  },
  {
    id: 'newborn',
    title: 'A New Baby',
    titleZh: '新手爸媽',
    icon: '🍼',
    blurb: '迎接寶寶、半夜照顧、賀喜時的溫馨對話',
    scenarios: [
      {
        id: 'newborn-news',
        title: 'Announcing the birth',
        titleZh: '報喜：寶寶出生了',
        description: 'Sharing the happy news with a friend.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'She’s here! The baby arrived this morning.', zh: '她出生了！寶寶今天早上出生了。' },
          { speaker: 'Priya', gender: 'female', text: 'Oh, congratulations! How are they both doing?', zh: '喔，恭喜！母女都還好嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Both doing wonderfully. We’re over the moon.', zh: '兩個都很好。我們樂翻天了。' },
          { speaker: 'Priya', gender: 'female', text: 'That’s the best news. Have you picked a name?', zh: '這真是最棒的消息。名字想好了嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'We’re going with Grace. It just felt right.', zh: '我們決定叫 Grace。就是覺得很對。' },
          { speaker: 'Priya', gender: 'female', text: 'That’s beautiful. How big was she?', zh: '好美的名字。她出生多重？' },
          { speaker: 'Tom', gender: 'male', text: 'Seven pounds exactly. A good healthy weight.', zh: '剛好七磅。很健康的體重。' },
          { speaker: 'Priya', gender: 'female', text: 'Wonderful. How’s the new dad holding up?', zh: '太好了。新手爸爸撐得住嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Exhausted but completely besotted, honestly.', zh: '老實說，累壞了但完全被她迷住了。' },
          { speaker: 'Priya', gender: 'female', text: 'Aw. Get some rest while you can!', zh: '哎喲。趁還能睡的時候多休息！' },
          { speaker: 'Tom', gender: 'male', text: 'Ha, good luck with that. Come and meet her soon!', zh: '哈，那可難了。快來看看她！' }
        ]
      },
      {
        id: 'newborn-nights',
        title: 'The sleepless nights',
        titleZh: '睡眠不足的夜晚',
        description: 'New parents commiserating over tiredness.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'I’m running on about three hours’ sleep.', zh: '我大概只睡了三小時。' },
          { speaker: 'Mark', gender: 'male', text: 'Same here. She was up every two hours.', zh: '我也是。她每兩小時就醒一次。' },
          { speaker: 'Eve', gender: 'female', text: 'Does it ever get easier?', zh: '會變輕鬆嗎？' },
          { speaker: 'Mark', gender: 'male', text: 'Everyone says it does, around three months.', zh: '大家都說會，大概三個月左右。' },
          { speaker: 'Eve', gender: 'female', text: 'Three months feels like a lifetime right now.', zh: '現在三個月感覺像一輩子那麼久。' },
          { speaker: 'Mark', gender: 'male', text: 'I know. Try to nap when she naps.', zh: '我懂。試著趁她睡時跟著睡。' },
          { speaker: 'Eve', gender: 'female', text: 'Easier said than done with the washing piling up.', zh: '說得容易，衣服還堆成山呢。' },
          { speaker: 'Mark', gender: 'male', text: 'Leave the chores. Honestly, they can wait.', zh: '家事先放著吧。真的，那些可以等。' },
          { speaker: 'Eve', gender: 'female', text: 'You’re right. I need to be kinder to myself.', zh: '你說得對。我該對自己好一點。' },
          { speaker: 'Mark', gender: 'male', text: 'Accept any help that’s offered, too.', zh: '別人願意幫忙就接受吧。' },
          { speaker: 'Eve', gender: 'female', text: 'Wise words. Right, I’m going for that nap!', zh: '說得真好。好，我要去補眠了！' }
        ]
      },
      {
        id: 'newborn-visit',
        title: 'Meeting the baby',
        titleZh: '探望寶寶',
        description: 'Visiting friends and their newborn.',
        lines: [
          { speaker: 'Holly', gender: 'female', text: 'Oh, she’s absolutely tiny! Can I hold her?', zh: '喔，她好小一隻！我可以抱她嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Of course. Just mind her head.', zh: '當然。小心扶著她的頭。' },
          { speaker: 'Holly', gender: 'female', text: 'She’s perfect. She’s got your eyes.', zh: '她好完美。她的眼睛像你。' },
          { speaker: 'Tom', gender: 'male', text: 'Everyone says that. I think she’s got Eve’s nose.', zh: '大家都這麼說。我覺得她的鼻子像 Eve。' },
          { speaker: 'Holly', gender: 'female', text: 'I brought a little something for her.', zh: '我帶了個小禮物給她。' },
          { speaker: 'Tom', gender: 'male', text: 'You didn’t have to, but thank you so much.', zh: '你不用這樣的，但太謝謝你了。' },
          { speaker: 'Holly', gender: 'female', text: 'How are you both coping?', zh: '你們兩個應付得來嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Tired, but we wouldn’t change it for the world.', zh: '很累，但我們無論如何都不會換掉這份幸福。' },
          { speaker: 'Holly', gender: 'female', text: 'It shows. You both look so happy.', zh: '看得出來。你們倆都好幸福。' },
          { speaker: 'Tom', gender: 'male', text: 'Sit down, I’ll put the kettle on.', zh: '坐吧，我去燒水泡茶。' },
          { speaker: 'Holly', gender: 'female', text: 'Lovely. And then you go and rest — I’ll cuddle her.', zh: '太好了。然後你去休息——我來抱她。' }
        ]
      }
    ]
  },
  {
    id: 'musiclesson',
    title: 'Music Lessons',
    titleZh: '學樂器',
    icon: '🎸',
    blurb: '上樂器課、練習、表演前的對話',
    scenarios: [
      {
        id: 'musiclesson-first',
        title: 'A first guitar lesson',
        titleZh: '第一堂吉他課',
        description: 'A beginner’s very first lesson.',
        lines: [
          { speaker: 'Teacher', gender: 'male', text: 'Welcome! Have you ever played before?', zh: '歡迎！你以前彈過嗎？' },
          { speaker: 'Amy', gender: 'female', text: 'Never. I don’t even know how to hold it.', zh: '從來沒有。我連怎麼拿都不會。' },
          { speaker: 'Teacher', gender: 'male', text: 'No worries. Rest it on your right leg like this.', zh: '別擔心。像這樣放在右腿上。' },
          { speaker: 'Amy', gender: 'female', text: 'Okay. My fingers feel so clumsy.', zh: '好。我的手指感覺好笨拙。' },
          { speaker: 'Teacher', gender: 'male', text: 'That’s totally normal at first. Let’s try one chord.', zh: '一開始很正常。我們先試一個和弦。' },
          { speaker: 'Amy', gender: 'female', text: 'It sounds a bit muffled and buzzy.', zh: '聽起來有點悶、還會雜音。' },
          { speaker: 'Teacher', gender: 'male', text: 'Press a touch harder, right behind the fret.', zh: '稍微用力一點，按在琴格正後方。' },
          { speaker: 'Amy', gender: 'female', text: 'Oh, there it is! That sounded right!', zh: '喔，出來了！這聲音對了！' },
          { speaker: 'Teacher', gender: 'male', text: 'Brilliant. Your fingertips will toughen up soon.', zh: '太棒了。你的指尖很快就會長繭、變硬。' },
          { speaker: 'Amy', gender: 'female', text: 'Should I practise every day?', zh: '我該每天練習嗎？' },
          { speaker: 'Teacher', gender: 'male', text: 'Even ten minutes a day works wonders.', zh: '一天哪怕十分鐘都效果驚人。' }
        ]
      },
      {
        id: 'musiclesson-practice',
        title: 'Struggling to practise',
        titleZh: '練習遇到瓶頸',
        description: 'A pep talk when motivation is low.',
        lines: [
          { speaker: 'Dan', gender: 'male', text: 'I’m thinking of giving up the piano, honestly.', zh: '老實說，我在想要不要放棄鋼琴。' },
          { speaker: 'Holly', gender: 'female', text: 'Oh no, why? You’ve come so far.', zh: '喔不，為什麼？你已經進步很多了。' },
          { speaker: 'Dan', gender: 'male', text: 'I just feel like I’ve hit a wall.', zh: '我就是覺得卡關了。' },
          { speaker: 'Holly', gender: 'female', text: 'Everyone plateaus. It doesn’t mean you’re not improving.', zh: '每個人都會遇到停滯期。這不代表你沒進步。' },
          { speaker: 'Dan', gender: 'male', text: 'The same piece keeps tripping me up.', zh: '同一首曲子一直把我絆住。' },
          { speaker: 'Holly', gender: 'female', text: 'Break it into smaller chunks and slow it right down.', zh: '把它拆成小段，速度放到很慢。' },
          { speaker: 'Dan', gender: 'male', text: 'I suppose I’ve been trying to rush it.', zh: '我想我一直太急了。' },
          { speaker: 'Holly', gender: 'female', text: 'Exactly. Nail the hard bar first, then build up.', zh: '沒錯。先攻克最難那小節，再慢慢接起來。' },
          { speaker: 'Dan', gender: 'male', text: 'That actually makes a lot of sense.', zh: '這其實很有道理。' },
          { speaker: 'Holly', gender: 'female', text: 'Don’t quit now. You’ll regret it.', zh: '別現在放棄。你會後悔的。' },
          { speaker: 'Dan', gender: 'male', text: 'You’re right. I’ll give it another go tonight.', zh: '你說得對。我今晚再試一次。' }
        ]
      },
      {
        id: 'musiclesson-recital',
        title: 'Before a recital',
        titleZh: '表演前',
        description: 'Calming nerves before a performance.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'I’m so nervous about playing in front of everyone.', zh: '要在大家面前演奏，我好緊張。' },
          { speaker: 'Teacher', gender: 'male', text: 'You’ve practised brilliantly. Trust yourself.', zh: '你練得非常好。相信自己。' },
          { speaker: 'Eve', gender: 'female', text: 'What if I forget where I am in the piece?', zh: '萬一我忘了彈到哪了怎麼辦？' },
          { speaker: 'Teacher', gender: 'male', text: 'Just keep going. The audience won’t notice.', zh: '繼續彈下去就好。觀眾不會發現的。' },
          { speaker: 'Eve', gender: 'female', text: 'My hands always shake when I’m nervous.', zh: '我一緊張手就會抖。' },
          { speaker: 'Teacher', gender: 'male', text: 'Take a slow breath before you start.', zh: '開始前慢慢深呼吸一下。' },
          { speaker: 'Eve', gender: 'female', text: 'Okay. Should I look at the audience or not?', zh: '好。我該看觀眾還是不要？' },
          { speaker: 'Teacher', gender: 'male', text: 'Focus on the music, not the faces.', zh: '專注在音樂上，別看臉。' },
          { speaker: 'Eve', gender: 'female', text: 'Right. I can do this. I’ve worked so hard.', zh: '好。我可以的。我這麼努力了。' },
          { speaker: 'Teacher', gender: 'male', text: 'You really can. Go out there and enjoy it.', zh: '你絕對可以。上台去好好享受。' },
          { speaker: 'Eve', gender: 'female', text: 'Thank you. Here goes nothing!', zh: '謝謝你。豁出去了！' }
        ]
      }
    ]
  },
  {
    id: 'socialmedia',
    title: 'Social Media & Online',
    titleZh: '社群媒體',
    icon: '📵',
    blurb: '聊貼文、追蹤、網路爆紅與隱私的對話',
    scenarios: [
      {
        id: 'socialmedia-viral',
        title: 'A post goes viral',
        titleZh: '貼文爆紅',
        description: 'Friends reacting to an unexpectedly popular post.',
        lines: [
          { speaker: 'Mia', gender: 'female', text: 'My silly video has blown up overnight!', zh: '我那支無厘頭的影片一夜爆紅！' },
          { speaker: 'Jay', gender: 'male', text: 'No way! How many views has it got?', zh: '不會吧！多少觀看次數了？' },
          { speaker: 'Mia', gender: 'female', text: 'Over half a million. I can’t believe it.', zh: '超過五十萬。我不敢相信。' },
          { speaker: 'Jay', gender: 'male', text: 'That’s mad. What did you even post?', zh: '太瘋狂了。你到底發了什麼？' },
          { speaker: 'Mia', gender: 'female', text: 'Just my dog stealing toast. Nothing special!', zh: '只是我家狗偷吐司。沒什麼特別的！' },
          { speaker: 'Jay', gender: 'male', text: 'Ha! That’s exactly the kind of thing that takes off.', zh: '哈！就是這種東西最容易爆紅。' },
          { speaker: 'Mia', gender: 'female', text: 'My phone won’t stop buzzing with notifications.', zh: '我手機的通知響個不停。' },
          { speaker: 'Jay', gender: 'male', text: 'Enjoy it! Are people being nice in the comments?', zh: '好好享受！留言區大家友善嗎？' },
          { speaker: 'Mia', gender: 'female', text: 'Mostly, but there are always a few trolls.', zh: '大致是，但總是有幾個酸民。' },
          { speaker: 'Jay', gender: 'male', text: 'Just ignore them. Don’t let them ruin it.', zh: '別理他們就好。別讓他們壞了興致。' },
          { speaker: 'Mia', gender: 'female', text: 'Good advice. I’ll just enjoy my fifteen minutes!', zh: '好建議。我就好好享受這短暫的爆紅吧！' }
        ]
      },
      {
        id: 'socialmedia-break',
        title: 'Taking a break from social media',
        titleZh: '暫離社群媒體',
        description: 'Talking about logging off for a while.',
        lines: [
          { speaker: 'Dan', gender: 'male', text: 'I’ve decided to take a break from social media.', zh: '我決定暫時離開社群媒體一陣子。' },
          { speaker: 'Holly', gender: 'female', text: 'Good for you. What brought that on?', zh: '太好了。怎麼會有這念頭？' },
          { speaker: 'Dan', gender: 'male', text: 'I was constantly comparing myself to everyone.', zh: '我老是拿自己跟別人比較。' },
          { speaker: 'Holly', gender: 'female', text: 'It’s so easy to do. It’s all a highlight reel.', zh: '很容易這樣。那都只是精選的一面。' },
          { speaker: 'Dan', gender: 'male', text: 'Exactly. No one posts the boring bits.', zh: '沒錯。沒人會發無聊的日常。' },
          { speaker: 'Holly', gender: 'female', text: 'How long are you going to log off for?', zh: '你打算登出多久？' },
          { speaker: 'Dan', gender: 'male', text: 'A month to start with, and see how I feel.', zh: '先一個月，再看看感覺如何。' },
          { speaker: 'Holly', gender: 'female', text: 'I bet you’ll feel loads better, honestly.', zh: '老實說，我猜你會覺得好很多。' },
          { speaker: 'Dan', gender: 'male', text: 'I’ve already deleted the apps off my phone.', zh: '我已經把 App 從手機刪掉了。' },
          { speaker: 'Holly', gender: 'female', text: 'That’s the key bit — out of sight, out of mind.', zh: '這是關鍵——眼不見為淨。' },
          { speaker: 'Dan', gender: 'male', text: 'Text me instead — like the good old days!', zh: '改傳簡訊給我吧——像以前那樣！' }
        ]
      },
      {
        id: 'socialmedia-privacy',
        title: 'Worried about privacy',
        titleZh: '擔心隱私',
        description: 'Helping a friend tighten their account settings.',
        lines: [
          { speaker: 'Sam', gender: 'male', text: 'I’m a bit worried about my privacy online.', zh: '我有點擔心我的網路隱私。' },
          { speaker: 'Eve', gender: 'female', text: 'Have you checked your account settings?', zh: '你檢查過帳號設定了嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'Not really. I don’t even know where to look.', zh: '沒有。我根本不知道要看哪裡。' },
          { speaker: 'Eve', gender: 'female', text: 'First, set your profile to private.', zh: '首先，把你的個人檔案設成私人。' },
          { speaker: 'Sam', gender: 'male', text: 'Done. So only friends can see my posts now?', zh: '設好了。所以現在只有朋友看得到我的貼文？' },
          { speaker: 'Eve', gender: 'female', text: 'Exactly. And turn off location sharing.', zh: '沒錯。然後關掉位置分享。' },
          { speaker: 'Sam', gender: 'male', text: 'Oh, I didn’t realise that was even on.', zh: '喔，我都不知道那是開著的。' },
          { speaker: 'Eve', gender: 'female', text: 'Most people don’t. Check what apps have access too.', zh: '大多數人都不知道。也檢查哪些 App 有存取權。' },
          { speaker: 'Sam', gender: 'male', text: 'There are loads I don’t even use anymore.', zh: '有一堆我根本不用了。' },
          { speaker: 'Eve', gender: 'female', text: 'Revoke those. And use a strong password.', zh: '把那些撤銷掉。還有用個強密碼。' },
          { speaker: 'Sam', gender: 'male', text: 'Thanks. I feel a lot safer already.', zh: '謝謝。我已經覺得安全多了。' }
        ]
      }
    ]
  },
  {
    id: 'bakery',
    title: 'At the Bakery',
    titleZh: '烘焙坊',
    icon: '🍰',
    blurb: '買麵包、訂蛋糕、客製甜點時的對話',
    scenarios: [
      {
        id: 'bakery-cake',
        title: 'Ordering a birthday cake',
        titleZh: '訂生日蛋糕',
        description: 'Customising a cake for a celebration.',
        lines: [
          { speaker: 'Baker', gender: 'female', text: 'Morning! How can I help you today?', zh: '早安！今天需要什麼？' },
          { speaker: 'Tom', gender: 'male', text: 'I’d like to order a birthday cake, please.', zh: '我想訂一個生日蛋糕。' },
          { speaker: 'Baker', gender: 'female', text: 'Lovely. What flavour were you thinking?', zh: '好的。您想要什麼口味？' },
          { speaker: 'Tom', gender: 'male', text: 'Chocolate, ideally. It’s for my daughter.', zh: '最好是巧克力。是給我女兒的。' },
          { speaker: 'Baker', gender: 'female', text: 'How old is she? We can do a fun design.', zh: '她幾歲？我們可以做有趣的造型。' },
          { speaker: 'Tom', gender: 'male', text: 'She’s turning six. She loves unicorns.', zh: '她要滿六歲了。她超愛獨角獸。' },
          { speaker: 'Baker', gender: 'female', text: 'Ooh, we do a gorgeous unicorn cake.', zh: '喔，我們有一款超美的獨角獸蛋糕。' },
          { speaker: 'Tom', gender: 'male', text: 'Perfect. Could you write her name on it?', zh: '太好了。可以幫忙寫上她的名字嗎？' },
          { speaker: 'Baker', gender: 'female', text: 'Of course. And how many does it need to serve?', zh: '當然。需要供應幾個人份？' },
          { speaker: 'Tom', gender: 'male', text: 'About fifteen, to be safe.', zh: '保險起見，大約十五人。' },
          { speaker: 'Baker', gender: 'female', text: 'I’ll sort that. Pop in on Friday to collect.', zh: '我來處理。週五過來取就行。' }
        ]
      },
      {
        id: 'bakery-bread',
        title: 'Buying fresh bread',
        titleZh: '買新鮮麵包',
        description: 'A quick morning purchase at the counter.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'Morning! Is the sourdough freshly baked?', zh: '早安！酸種麵包是現烤的嗎？' },
          { speaker: 'Baker', gender: 'male', text: 'Straight out of the oven half an hour ago.', zh: '半小時前剛出爐。' },
          { speaker: 'Eve', gender: 'female', text: 'Wonderful. I’ll take a loaf, please.', zh: '太好了。我要一條，謝謝。' },
          { speaker: 'Baker', gender: 'male', text: 'Sliced or unsliced?', zh: '要切片還是不切？' },
          { speaker: 'Eve', gender: 'female', text: 'Unsliced, thanks. It keeps better.', zh: '不切，謝謝。比較耐放。' },
          { speaker: 'Baker', gender: 'male', text: 'Good thinking. Anything else with that?', zh: '想得周到。還需要其他的嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Are those croissants from this morning?', zh: '那些可頌是今早的嗎？' },
          { speaker: 'Baker', gender: 'male', text: 'They are, lovely and buttery.', zh: '是的，又香又有奶油味。' },
          { speaker: 'Eve', gender: 'female', text: 'Go on, I’ll have two of those as well.', zh: '好吧，那兩個也給我。' },
          { speaker: 'Baker', gender: 'male', text: 'That’s five pounds twenty altogether.', zh: '一共 5.20 英鎊。' },
          { speaker: 'Eve', gender: 'female', text: 'Lovely. It smells amazing in here!', zh: '太好了。這裡聞起來超香！' }
        ]
      },
      {
        id: 'bakery-special',
        title: 'A special dietary order',
        titleZh: '特殊飲食需求',
        description: 'Asking about gluten-free options.',
        lines: [
          { speaker: 'Dan', gender: 'male', text: 'Hi, do you do any gluten-free options?', zh: '您好，你們有無麩質的選擇嗎？' },
          { speaker: 'Baker', gender: 'female', text: 'We do — a few cakes and some bread.', zh: '有——幾款蛋糕和一些麵包。' },
          { speaker: 'Dan', gender: 'male', text: 'Great. It’s for a friend with coeliac disease.', zh: '太好了。是給一位有乳糜瀉的朋友。' },
          { speaker: 'Baker', gender: 'female', text: 'Then I’ll make sure it’s prepared separately.', zh: '那我會確保它是分開製作的。' },
          { speaker: 'Dan', gender: 'male', text: 'That’s really reassuring, thank you.', zh: '這真的讓人放心，謝謝。' },
          { speaker: 'Baker', gender: 'female', text: 'No cross-contamination, I promise.', zh: '我保證不會交叉污染。' },
          { speaker: 'Dan', gender: 'male', text: 'Could I order a gluten-free lemon cake?', zh: '我可以訂一個無麩質檸檬蛋糕嗎？' },
          { speaker: 'Baker', gender: 'female', text: 'Of course. For what day do you need it?', zh: '當然。您哪天需要？' },
          { speaker: 'Dan', gender: 'male', text: 'Saturday, if that’s possible.', zh: '週六，可以的話。' },
          { speaker: 'Baker', gender: 'female', text: 'No problem at all. I’ll have it ready by ten.', zh: '完全沒問題。我十點前會準備好。' },
          { speaker: 'Dan', gender: 'male', text: 'Brilliant. She’ll be so pleased. Thank you!', zh: '太好了。她會很開心。謝謝您！' }
        ]
      }
    ]
  },
  {
    id: 'physio',
    title: 'Physiotherapy',
    titleZh: '物理治療',
    icon: '🦵',
    blurb: '看物理治療、做復健、運動傷害的對話',
    scenarios: [
      {
        id: 'physio-first',
        title: 'A first assessment',
        titleZh: '初次評估',
        description: 'Explaining an injury to the physiotherapist.',
        lines: [
          { speaker: 'Physio', gender: 'female', text: 'Come in. So, what’s been troubling you?', zh: '請進。那麼，是哪裡不舒服？' },
          { speaker: 'Ben', gender: 'male', text: 'My lower back’s been really stiff and sore.', zh: '我的下背一直很僵硬、痠痛。' },
          { speaker: 'Physio', gender: 'female', text: 'How long has it been like this?', zh: '這樣多久了？' },
          { speaker: 'Ben', gender: 'male', text: 'A few weeks. I think I lifted something badly.', zh: '幾週了。我想是搬東西姿勢不對。' },
          { speaker: 'Physio', gender: 'female', text: 'Does it hurt more when you bend or twist?', zh: '彎腰或扭轉時會更痛嗎？' },
          { speaker: 'Ben', gender: 'male', text: 'Definitely when I twist. Sitting’s the worst.', zh: '扭轉時最明顯。坐著最難受。' },
          { speaker: 'Physio', gender: 'female', text: 'Right. Let me have a feel and test your movement.', zh: '好。我摸摸看，測試一下你的活動度。' },
          { speaker: 'Ben', gender: 'male', text: 'Is it anything serious, do you think?', zh: '你覺得是嚴重的問題嗎？' },
          { speaker: 'Physio', gender: 'female', text: 'It looks like a muscle strain, nothing structural.', zh: '看起來是肌肉拉傷，不是結構性問題。' },
          { speaker: 'Ben', gender: 'male', text: 'That’s a relief. What can I do about it?', zh: '那我就放心了。我能做些什麼？' },
          { speaker: 'Physio', gender: 'female', text: 'I’ll give you some gentle stretches to start.', zh: '我會先給你一些溫和的伸展動作。' }
        ]
      },
      {
        id: 'physio-exercises',
        title: 'Learning the exercises',
        titleZh: '學習復健動作',
        description: 'Being shown rehab exercises to do at home.',
        lines: [
          { speaker: 'Physio', gender: 'male', text: 'Let’s run through your home exercises.', zh: '我們來練一遍你的居家運動。' },
          { speaker: 'Eve', gender: 'female', text: 'Okay. How often should I be doing them?', zh: '好。我該多久做一次？' },
          { speaker: 'Physio', gender: 'male', text: 'Twice a day, gently. Don’t push through sharp pain.', zh: '一天兩次，輕輕做。別硬撐忍著劇痛。' },
          { speaker: 'Eve', gender: 'female', text: 'Like this? It pulls a bit on the side.', zh: '像這樣嗎？側邊有點拉扯感。' },
          { speaker: 'Physio', gender: 'male', text: 'A gentle stretch is fine, but don’t bounce.', zh: '輕微的拉伸沒問題，但別上下抖動。' },
          { speaker: 'Eve', gender: 'female', text: 'Got it. How long do I hold each one?', zh: '懂了。每個動作要維持多久？' },
          { speaker: 'Physio', gender: 'male', text: 'About twenty seconds, and repeat three times.', zh: '大約二十秒，重複三次。' },
          { speaker: 'Eve', gender: 'female', text: 'And when will I start to feel better?', zh: '那我什麼時候會開始好轉？' },
          { speaker: 'Physio', gender: 'male', text: 'You should notice a difference within two weeks.', zh: '兩週內你應該會感覺到差別。' },
          { speaker: 'Eve', gender: 'female', text: 'Brilliant. Should I avoid anything in the meantime?', zh: '太好了。這期間我該避免什麼嗎？' },
          { speaker: 'Physio', gender: 'male', text: 'Just heavy lifting. Keep moving gently otherwise.', zh: '只要避免搬重物。其他時候保持輕度活動就好。' }
        ]
      },
      {
        id: 'physio-progress',
        title: 'A follow-up session',
        titleZh: '回診追蹤',
        description: 'Reviewing how recovery is going.',
        lines: [
          { speaker: 'Physio', gender: 'female', text: 'So, how’s the back been since last time?', zh: '那麼，上次之後背部狀況如何？' },
          { speaker: 'Ben', gender: 'male', text: 'Loads better, honestly. The stretches really helped.', zh: '老實說好很多。那些伸展真的有幫助。' },
          { speaker: 'Physio', gender: 'female', text: 'That’s great to hear. Any pain left at all?', zh: '聽到真好。還有任何疼痛嗎？' },
          { speaker: 'Ben', gender: 'male', text: 'Just a slight twinge first thing in the morning.', zh: '只有早上剛起來時有點輕微抽痛。' },
          { speaker: 'Physio', gender: 'female', text: 'That’ll ease as it gets stronger.', zh: '隨著肌力變強就會緩解。' },
          { speaker: 'Ben', gender: 'male', text: 'Can I start exercising properly again?', zh: '我可以開始正常運動了嗎？' },
          { speaker: 'Physio', gender: 'female', text: 'Ease back in gradually, nothing too sudden.', zh: '慢慢恢復，別太突然。' },
          { speaker: 'Ben', gender: 'male', text: 'I’ve missed my runs, to be honest.', zh: '老實說我很想念跑步。' },
          { speaker: 'Physio', gender: 'female', text: 'Start with short ones, and keep up the stretches.', zh: '從短距離開始，伸展也要持續做。' },
          { speaker: 'Ben', gender: 'male', text: 'Will do. Thanks for getting me back on my feet.', zh: '會的。謝謝你讓我重新站起來。' },
          { speaker: 'Physio', gender: 'female', text: 'My pleasure. You’ve put the work in — well done.', zh: '我的榮幸。你很努力——做得好。' }
        ]
      }
    ]
  },
  {
    id: 'swimming',
    title: 'Learning to Swim',
    titleZh: '學游泳',
    icon: '🏊',
    blurb: '游泳課、克服怕水、池畔閒聊的對話',
    scenarios: [
      {
        id: 'swimming-lesson',
        title: 'A swimming lesson',
        titleZh: '游泳課',
        description: 'An adult beginner taking a lesson.',
        lines: [
          { speaker: 'Instructor', gender: 'female', text: 'Right, hold the side and have a little kick.', zh: '好，扶著池邊，打打水。' },
          { speaker: 'Sam', gender: 'male', text: 'Like this? I feel like I’m barely moving.', zh: '像這樣嗎？我感覺幾乎沒動。' },
          { speaker: 'Instructor', gender: 'female', text: 'Straighter legs, kick from the hip. Lovely.', zh: '腿伸直一點，從髖部打水。很好。' },
          { speaker: 'Sam', gender: 'male', text: 'I’m a bit nervous about putting my face in.', zh: '我有點怕把臉埋進水裡。' },
          { speaker: 'Instructor', gender: 'female', text: 'Take your time. Just blow bubbles first.', zh: '慢慢來。先吐泡泡就好。' },
          { speaker: 'Sam', gender: 'male', text: 'Okay, here goes. That wasn’t so bad!', zh: '好，來吧。沒那麼可怕嘛！' },
          { speaker: 'Instructor', gender: 'female', text: 'See? Now breathe out slowly under the water.', zh: '看吧？現在在水下慢慢吐氣。' },
          { speaker: 'Sam', gender: 'male', text: 'And when do I breathe in?', zh: '那我什麼時候吸氣？' },
          { speaker: 'Instructor', gender: 'female', text: 'Turn your head to the side and breathe in.', zh: '把頭轉向側邊吸氣。' },
          { speaker: 'Sam', gender: 'male', text: 'I managed a whole length! I can’t believe it.', zh: '我游完一趟了！我不敢相信。' },
          { speaker: 'Instructor', gender: 'female', text: 'Brilliant progress for a first lesson!', zh: '以第一堂課來說進步神速！' }
        ]
      },
      {
        id: 'swimming-fear',
        title: 'Overcoming a fear of water',
        titleZh: '克服怕水',
        description: 'Encouraging a nervous swimmer in the shallow end.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'I’ll be honest, deep water terrifies me.', zh: '老實說，深水區讓我很害怕。' },
          { speaker: 'Instructor', gender: 'male', text: 'That’s okay. We’ll stay in the shallow end.', zh: '沒關係。我們待在淺水區就好。' },
          { speaker: 'Eve', gender: 'female', text: 'I had a bad experience as a child.', zh: '我小時候有過不好的經驗。' },
          { speaker: 'Instructor', gender: 'male', text: 'A lot of people do. We’ll go at your pace.', zh: '很多人都是。我們照你的步調來。' },
          { speaker: 'Eve', gender: 'female', text: 'Will you stay close while I try?', zh: '我試的時候你會待在旁邊嗎？' },
          { speaker: 'Instructor', gender: 'male', text: 'Right beside you the whole time. I promise.', zh: '全程就在你身邊。我保證。' },
          { speaker: 'Eve', gender: 'female', text: 'Okay. I’ll just hold the float for now.', zh: '好。我先抓著浮板就好。' },
          { speaker: 'Instructor', gender: 'male', text: 'Perfect. Now just let your feet lift gently.', zh: '很好。現在讓你的腳輕輕浮起來。' },
          { speaker: 'Eve', gender: 'female', text: 'Oh! I’m actually floating!', zh: '喔！我真的浮起來了！' },
          { speaker: 'Instructor', gender: 'male', text: 'You are. See, the water holds you up.', zh: '對啊。你看，水會把你托住。' },
          { speaker: 'Eve', gender: 'female', text: 'That’s a huge step for me. Thank you.', zh: '這對我是很大的一步。謝謝你。' }
        ]
      },
      {
        id: 'swimming-pool',
        title: 'At the leisure centre',
        titleZh: '在運動中心',
        description: 'Sorting out entry and lanes at the pool.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'Hi, just one for a swim, please.', zh: '您好，游泳一位，謝謝。' },
          { speaker: 'Staff', gender: 'female', text: 'Lovely. Have you got a membership card?', zh: '好的。您有會員卡嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'No, just a one-off today. How much is that?', zh: '沒有，今天只游一次。多少錢？' },
          { speaker: 'Staff', gender: 'female', text: 'It’s five pounds for a casual swim.', zh: '單次游泳五英鎊。' },
          { speaker: 'Tom', gender: 'male', text: 'Great. Is the main pool busy right now?', zh: '太好了。主池現在人多嗎？' },
          { speaker: 'Staff', gender: 'female', text: 'Fairly quiet. The fast lane’s free if you want it.', zh: '蠻空的。想要的話快速道現在沒人。' },
          { speaker: 'Tom', gender: 'male', text: 'Perfect, I like to get a proper workout.', zh: '太好了，我喜歡好好運動一下。' },
          { speaker: 'Staff', gender: 'female', text: 'The changing rooms are down the stairs on the left.', zh: '更衣室在樓梯下去左手邊。' },
          { speaker: 'Tom', gender: 'male', text: 'Do I need a pound for the locker?', zh: '置物櫃需要一英鎊嗎？' },
          { speaker: 'Staff', gender: 'female', text: 'You do, but you get it back afterwards.', zh: '需要，但用完會退還給您。' },
          { speaker: 'Tom', gender: 'male', text: 'No problem. Cheers for your help!', zh: '沒問題。謝謝您的幫忙！' }
        ]
      }
    ]
  }
]
