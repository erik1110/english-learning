// Situations pack 5 — incidents, health, work-from-home & social life (police,
// A&E, fitness/diet, video calls, trip planning, birthdays, making up after a row,
// recycling). 3 dialogues per category, 11 lines each, alternating voices.

export const PACK5 = [
  {
    id: 'police',
    title: 'Reporting to the Police',
    titleZh: '報案',
    icon: '🚓',
    blurb: '報失竊、問路、處理小事故時的對話',
    scenarios: [
      {
        id: 'police-theft',
        title: 'Reporting a stolen bike',
        titleZh: '報案：腳踏車失竊',
        description: 'Reporting a theft at the front desk.',
        lines: [
          { speaker: 'Officer', gender: 'male', text: 'Good afternoon. How can I help you?', zh: '午安。有什麼能幫您？' },
          { speaker: 'Claire', gender: 'female', text: 'Hi, I’d like to report my bike’s been stolen.', zh: '您好，我想報案，我的腳踏車被偷了。' },
          { speaker: 'Officer', gender: 'male', text: 'Sorry to hear that. Where was it taken from?', zh: '很遺憾。它是在哪裡被偷的？' },
          { speaker: 'Claire', gender: 'female', text: 'Outside the station, even though it was locked.', zh: '在車站外面，明明有上鎖。' },
          { speaker: 'Officer', gender: 'male', text: 'When did you last see it?', zh: '您最後一次看到它是什麼時候？' },
          { speaker: 'Claire', gender: 'female', text: 'This morning, around eight, when I left for work.', zh: '今天早上八點左右，我去上班的時候。' },
          { speaker: 'Officer', gender: 'male', text: 'Can you describe it for me? Make and colour?', zh: '可以描述一下嗎？廠牌和顏色？' },
          { speaker: 'Claire', gender: 'female', text: 'It’s a red mountain bike, with a black saddle.', zh: '紅色的登山車，黑色坐墊。' },
          { speaker: 'Officer', gender: 'male', text: 'Have you got the frame number anywhere?', zh: '您有留車架編號嗎？' },
          { speaker: 'Claire', gender: 'female', text: 'It’s on the receipt at home. I can email it.', zh: '在家裡的收據上。我可以用電子郵件傳給您。' },
          { speaker: 'Officer', gender: 'male', text: 'Please do. I’ll give you a crime reference number now.', zh: '麻煩您了。我現在給您一個報案編號。' }
        ]
      },
      {
        id: 'police-lost',
        title: 'Handing in lost property',
        titleZh: '拾獲遺失物',
        description: 'Bringing in a wallet found in the street.',
        lines: [
          { speaker: 'Joe', gender: 'male', text: 'Hi, I found this wallet on the pavement.', zh: '您好，我在人行道上撿到這個皮夾。' },
          { speaker: 'Officer', gender: 'female', text: 'That’s good of you. Is there any ID inside?', zh: '您真是好心。裡面有身分證件嗎？' },
          { speaker: 'Joe', gender: 'male', text: 'There’s a driving licence and a couple of cards.', zh: '有一張駕照和幾張卡。' },
          { speaker: 'Officer', gender: 'female', text: 'We’ll try to track down the owner.', zh: '我們會試著聯絡失主。' },
          { speaker: 'Joe', gender: 'male', text: 'There’s about thirty pounds in there too.', zh: '裡面還有大約三十英鎊。' },
          { speaker: 'Officer', gender: 'female', text: 'Thanks for being honest. I’ll log it all.', zh: '謝謝您這麼誠實。我會把這些都登記下來。' },
          { speaker: 'Joe', gender: 'male', text: 'Where exactly did I find it? Just by the library.', zh: '我是在哪裡撿到的？就在圖書館旁邊。' },
          { speaker: 'Officer', gender: 'female', text: 'Lovely. Can I take your name and number?', zh: '好的。可以給我您的姓名和電話嗎？' },
          { speaker: 'Joe', gender: 'male', text: 'Of course. Will I hear what happens to it?', zh: '當然。我會知道它後續怎麼處理嗎？' },
          { speaker: 'Officer', gender: 'female', text: 'If it’s unclaimed in a while, it can be returned to you.', zh: '如果一段時間沒人認領，可以還給您。' },
          { speaker: 'Joe', gender: 'male', text: 'Oh, I just hope they get it back. Cheers.', zh: '喔，我只希望失主能拿回去。謝啦。' }
        ]
      },
      {
        id: 'police-noise',
        title: 'Reporting a noisy party',
        titleZh: '檢舉噪音擾鄰',
        description: 'Phoning the non-emergency line about a disturbance.',
        lines: [
          { speaker: 'Operator', gender: 'female', text: 'Police non-emergency, what’s the nature of your call?', zh: '警察非緊急專線，請問您要反映什麼？' },
          { speaker: 'Sam', gender: 'male', text: 'Hi, there’s a really loud party next door.', zh: '您好，隔壁有個超吵的派對。' },
          { speaker: 'Operator', gender: 'female', text: 'I see. How long has it been going on?', zh: '了解。已經持續多久了？' },
          { speaker: 'Sam', gender: 'male', text: 'Since this afternoon, and it’s now gone two.', zh: '從今天下午開始，現在都過兩點了。' },
          { speaker: 'Operator', gender: 'female', text: 'Have you tried speaking to them yourself?', zh: '您有試過自己去跟他們說嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'I have, but they just laughed it off.', zh: '有，但他們只是笑笑就敷衍過去。' },
          { speaker: 'Operator', gender: 'female', text: 'Right. Is it just noise, or anything more serious?', zh: '好。只是噪音，還是有更嚴重的狀況？' },
          { speaker: 'Sam', gender: 'male', text: 'Just the noise, but no one on the street can sleep.', zh: '只是噪音，但整條街的人都沒辦法睡。' },
          { speaker: 'Operator', gender: 'female', text: 'Understood. I’ll log it and pass it to the local team.', zh: '了解。我會記錄下來，轉給當地的警力。' },
          { speaker: 'Sam', gender: 'male', text: 'Thank you. I just want a bit of peace and quiet.', zh: '謝謝。我只是想要一點安寧。' },
          { speaker: 'Operator', gender: 'female', text: 'Completely understandable. We’ll look into it.', zh: '完全可以理解。我們會處理的。' }
        ]
      }
    ]
  },
  {
    id: 'emergency',
    title: 'At A&E',
    titleZh: '醫院急診',
    icon: '🚑',
    blurb: '掛急診、描述傷勢、等候看診時的對話',
    scenarios: [
      {
        id: 'emergency-arrival',
        title: 'Arriving at A&E',
        titleZh: '抵達急診',
        description: 'Checking in at accident and emergency.',
        lines: [
          { speaker: 'Nurse', gender: 'female', text: 'Hello, come and take a seat. What’s happened?', zh: '您好，請過來坐。發生什麼事了？' },
          { speaker: 'Ben', gender: 'male', text: 'I slipped on the stairs and twisted my ankle badly.', zh: '我在樓梯上滑倒，腳踝扭得很嚴重。' },
          { speaker: 'Nurse', gender: 'female', text: 'Can you put any weight on it at all?', zh: '您完全沒辦法用它承重嗎？' },
          { speaker: 'Ben', gender: 'male', text: 'Hardly. It’s really swollen and throbbing.', zh: '幾乎不行。它腫得很厲害，還一直抽痛。' },
          { speaker: 'Nurse', gender: 'female', text: 'On a scale of one to ten, how’s the pain?', zh: '一到十分，您的疼痛大概幾分？' },
          { speaker: 'Ben', gender: 'male', text: 'About a seven, maybe eight when I move it.', zh: '大概七分，動的時候可能八分。' },
          { speaker: 'Nurse', gender: 'female', text: 'Right. Have you taken any painkillers today?', zh: '好。您今天有吃止痛藥嗎？' },
          { speaker: 'Ben', gender: 'male', text: 'Just a couple before I came in.', zh: '進來前吃了兩顆。' },
          { speaker: 'Nurse', gender: 'female', text: 'Okay. We’ll need an X-ray to rule out a break.', zh: '好。我們需要照 X 光，排除骨折的可能。' },
          { speaker: 'Ben', gender: 'male', text: 'How long’s the wait likely to be?', zh: '大概要等多久？' },
          { speaker: 'Nurse', gender: 'female', text: 'A couple of hours, I’m afraid. Take a seat for now.', zh: '恐怕要兩個小時左右。請先坐著等候。' }
        ]
      },
      {
        id: 'emergency-triage',
        title: 'Worried about a child',
        titleZh: '擔心孩子的狀況',
        description: 'A parent describing a child’s symptoms.',
        lines: [
          { speaker: 'Nurse', gender: 'male', text: 'Hello. So this is little one — what’s the matter?', zh: '您好。這位是小朋友——怎麼了呢？' },
          { speaker: 'Mum', gender: 'female', text: 'She’s had a high temperature all night and won’t settle.', zh: '她整晚都高燒，一直安撫不下來。' },
          { speaker: 'Nurse', gender: 'male', text: 'Has she had any fluids, or been sick at all?', zh: '她有喝水嗎，或者有吐嗎？' },
          { speaker: 'Mum', gender: 'female', text: 'A little water, but she’s been sick twice.', zh: '喝了一點水，但吐了兩次。' },
          { speaker: 'Nurse', gender: 'male', text: 'Any rash, or has she complained of a headache?', zh: '有出疹子嗎，或者她有說頭痛嗎？' },
          { speaker: 'Mum', gender: 'female', text: 'No rash, thank goodness, but she keeps holding her ear.', zh: '沒疹子，謝天謝地，但她一直摀著耳朵。' },
          { speaker: 'Nurse', gender: 'male', text: 'That could point to an ear infection. How old is she?', zh: '那可能是耳朵感染。她幾歲？' },
          { speaker: 'Mum', gender: 'female', text: 'She’s just turned three.', zh: '她剛滿三歲。' },
          { speaker: 'Nurse', gender: 'male', text: 'Right. We’ll get a doctor to take a proper look.', zh: '好。我們會請醫生好好檢查一下。' },
          { speaker: 'Mum', gender: 'female', text: 'Thank you. I’ve been so worried all night.', zh: '謝謝您。我整晚都好擔心。' },
          { speaker: 'Nurse', gender: 'male', text: 'You did the right thing bringing her in. Hang tight.', zh: '您帶她來是對的。再撐一下。' }
        ]
      },
      {
        id: 'emergency-results',
        title: 'After the X-ray',
        titleZh: 'X 光檢查之後',
        description: 'The doctor explaining the results.',
        lines: [
          { speaker: 'Doctor', gender: 'female', text: 'Good news — the X-ray shows nothing’s broken.', zh: '好消息——X 光顯示沒有骨折。' },
          { speaker: 'Ben', gender: 'male', text: 'Oh, that’s a relief. So what is it?', zh: '喔，鬆了一口氣。那是怎麼了？' },
          { speaker: 'Doctor', gender: 'female', text: 'It’s a bad sprain. The ligaments are overstretched.', zh: '是嚴重的扭傷。韌帶被過度拉扯了。' },
          { speaker: 'Ben', gender: 'male', text: 'How long until I can walk on it properly?', zh: '大概多久我才能正常走路？' },
          { speaker: 'Doctor', gender: 'female', text: 'A couple of weeks, if you rest it properly.', zh: '如果你好好休養，大約兩週。' },
          { speaker: 'Ben', gender: 'male', text: 'Is there anything I should be doing at home?', zh: '我在家有什麼該做的嗎？' },
          { speaker: 'Doctor', gender: 'female', text: 'Remember RICE — rest, ice, compression, elevation.', zh: '記住 RICE——休息、冰敷、加壓、抬高。' },
          { speaker: 'Ben', gender: 'male', text: 'Got it. Should I keep taking painkillers?', zh: '懂了。我該繼續吃止痛藥嗎？' },
          { speaker: 'Doctor', gender: 'female', text: 'Yes, as needed, and keep off it as much as you can.', zh: '對，視需要服用，並盡量別用那隻腳。' },
          { speaker: 'Ben', gender: 'male', text: 'Will I need crutches to get home?', zh: '我回家需要拐杖嗎？' },
          { speaker: 'Doctor', gender: 'female', text: 'The nurse will sort you a pair before you go.', zh: '護理師會在您離開前幫您準備一副。' }
        ]
      }
    ]
  },
  {
    id: 'fitness',
    title: 'Fitness & Healthy Eating',
    titleZh: '健身與健康飲食',
    icon: '🥗',
    blurb: '減重、改變飲食、養成運動習慣的對話',
    scenarios: [
      {
        id: 'fitness-goals',
        title: 'Setting some goals',
        titleZh: '設定目標',
        description: 'A chat with a personal trainer about getting fitter.',
        lines: [
          { speaker: 'Trainer', gender: 'male', text: 'So, what are you hoping to get out of our sessions?', zh: '所以，你希望透過這些課程達到什麼目標？' },
          { speaker: 'Amy', gender: 'female', text: 'I’d like to lose a bit of weight and tone up.', zh: '我想減一點體重，並讓肌肉緊實一些。' },
          { speaker: 'Trainer', gender: 'male', text: 'Great. Are you active much at the moment?', zh: '很好。你目前運動量大嗎？' },
          { speaker: 'Amy', gender: 'female', text: 'Honestly, not really. I sit down all day at work.', zh: '老實說，不太運動。我上班整天都坐著。' },
          { speaker: 'Trainer', gender: 'male', text: 'No worries. We’ll start gently and build it up.', zh: '別擔心。我們會從緩和開始，慢慢加強。' },
          { speaker: 'Amy', gender: 'female', text: 'That sounds manageable. How often should I train?', zh: '聽起來做得到。我該多久練一次？' },
          { speaker: 'Trainer', gender: 'male', text: 'Three times a week is a realistic starting point.', zh: '一週三次是個實際的起點。' },
          { speaker: 'Amy', gender: 'female', text: 'And does diet make a big difference?', zh: '那飲食影響很大嗎？' },
          { speaker: 'Trainer', gender: 'male', text: 'Huge. You can’t out-train a bad diet, as they say.', zh: '非常大。俗話說，飲食差，怎麼練都沒用。' },
          { speaker: 'Amy', gender: 'female', text: 'Fair enough. I’ll need to cut down on takeaways.', zh: '有道理。我得少叫點外賣了。' },
          { speaker: 'Trainer', gender: 'male', text: 'Small changes add up. You’ve got this.', zh: '小改變會累積成果。你一定可以的。' }
        ]
      },
      {
        id: 'fitness-diet',
        title: 'Changing what you eat',
        titleZh: '改變飲食',
        description: 'Friends comparing notes on healthy eating.',
        lines: [
          { speaker: 'Dan', gender: 'male', text: 'I’m trying to eat a bit healthier this month.', zh: '我這個月在試著吃得健康一點。' },
          { speaker: 'Priya', gender: 'female', text: 'Good for you. What have you changed so far?', zh: '太好了。你目前改了什麼？' },
          { speaker: 'Dan', gender: 'male', text: 'I’ve swapped crisps for fruit as a snack.', zh: '我把零食的洋芋片換成水果了。' },
          { speaker: 'Priya', gender: 'female', text: 'That’s a great start. Are you cooking more?', zh: '這是很棒的開始。你有比較常自己煮嗎？' },
          { speaker: 'Dan', gender: 'male', text: 'Yeah, I’ve started meal-prepping on Sundays.', zh: '有，我開始在週日先備好一週的餐。' },
          { speaker: 'Priya', gender: 'female', text: 'Smart. It stops you reaching for junk when you’re busy.', zh: '聰明。這樣忙起來就不會亂吃垃圾食物。' },
          { speaker: 'Dan', gender: 'male', text: 'Exactly. The hardest bit is cutting down on sugar.', zh: '沒錯。最難的是減糖。' },
          { speaker: 'Priya', gender: 'female', text: 'Tell me about it. I had such bad cravings at first.', zh: '可不是嘛。我一開始嘴饞得不得了。' },
          { speaker: 'Dan', gender: 'male', text: 'Does it get easier?', zh: '會變得比較輕鬆嗎？' },
          { speaker: 'Priya', gender: 'female', text: 'Honestly, after a couple of weeks you barely miss it.', zh: '老實說，過了幾週你幾乎就不想吃了。' },
          { speaker: 'Dan', gender: 'male', text: 'That’s encouraging. Right, no biscuits with this tea!', zh: '真讓人有動力。好，這杯茶不配餅乾了！' }
        ]
      },
      {
        id: 'fitness-run',
        title: 'Couch to 5K',
        titleZh: '從沙發到五公里',
        description: 'Encouraging a friend who’s started running.',
        lines: [
          { speaker: 'Holly', gender: 'female', text: 'I did my first proper run today — I’m shattered.', zh: '我今天第一次正式跑步——累垮了。' },
          { speaker: 'Jay', gender: 'male', text: 'Nice one! How far did you manage?', zh: '太棒了！你跑了多遠？' },
          { speaker: 'Holly', gender: 'female', text: 'Only about two kilometres, with walking breaks.', zh: '只跑了大約兩公里，中間還走走停停。' },
          { speaker: 'Jay', gender: 'male', text: 'That’s a brilliant start. Don’t knock it.', zh: '這是很棒的開始。別小看自己。' },
          { speaker: 'Holly', gender: 'female', text: 'My legs are like jelly, though.', zh: '不過我的腿軟得跟果凍一樣。' },
          { speaker: 'Jay', gender: 'male', text: 'That’ll ease off. Are you following a plan?', zh: '那會慢慢好轉。你有照訓練計畫嗎？' },
          { speaker: 'Holly', gender: 'female', text: 'Yeah, the Couch to 5K app. It builds up slowly.', zh: '有，用「從沙發到五公里」那個 App。它循序漸進。' },
          { speaker: 'Jay', gender: 'male', text: 'Perfect. The key is not to do too much too soon.', zh: '完美。關鍵是別太快給自己太大量。' },
          { speaker: 'Holly', gender: 'female', text: 'True. I want to actually stick with it this time.', zh: '是啊。這次我真的想堅持下去。' },
          { speaker: 'Jay', gender: 'male', text: 'You will. Fancy a running buddy now and then?', zh: '你會的。要不要偶爾找個跑步搭子？' },
          { speaker: 'Holly', gender: 'female', text: 'Yes please! It’s much easier with company.', zh: '好啊！有人陪輕鬆多了。' }
        ]
      }
    ]
  },
  {
    id: 'videocall',
    title: 'Video Calls & Remote Work',
    titleZh: '視訊會議與遠距工作',
    icon: '💻',
    blurb: '線上開會、收訊不良、遠距協作時的用語',
    scenarios: [
      {
        id: 'videocall-tech',
        title: 'Sorting out the tech',
        titleZh: '搞定連線問題',
        description: 'The classic start to any video meeting.',
        lines: [
          { speaker: 'Sara', gender: 'female', text: 'Morning, everyone. Can you all hear me okay?', zh: '大家早安。我的聲音大家都聽得到嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'You’re a bit muffled, Sara. Could be your mic.', zh: 'Sara，你的聲音有點悶。可能是麥克風。' },
          { speaker: 'Sara', gender: 'female', text: 'Is that any better now?', zh: '現在這樣有好一點嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Loud and clear now, cheers.', zh: '現在又清楚又響亮，謝啦。' },
          { speaker: 'Sara', gender: 'female', text: 'Great. I think we’re still waiting on Priya.', zh: '太好了。我想我們還在等 Priya。' },
          { speaker: 'Priya', gender: 'female', text: 'I’m here! Sorry, my camera won’t turn on.', zh: '我在！抱歉，我的鏡頭打不開。' },
          { speaker: 'Tom', gender: 'male', text: 'No bother, audio’s fine for now.', zh: '沒關係，現在有聲音就好。' },
          { speaker: 'Sara', gender: 'female', text: 'Right, shall we crack on? I’ll share my screen.', zh: '好，我們開始吧？我來分享畫面。' },
          { speaker: 'Priya', gender: 'female', text: 'Can you make the slides a bit bigger?', zh: '你能把投影片放大一點嗎？' },
          { speaker: 'Sara', gender: 'female', text: 'Is that readable now?', zh: '現在這樣看得清楚嗎？' },
          { speaker: 'Priya', gender: 'female', text: 'Perfect, thanks. Carry on.', zh: '很清楚，謝謝。請繼續。' }
        ]
      },
      {
        id: 'videocall-meeting',
        title: 'In the meeting',
        titleZh: '會議進行中',
        description: 'Talking over each other on a team call.',
        lines: [
          { speaker: 'Mark', gender: 'male', text: 'So, where are we up to with the report?', zh: '那麼，報告進行到哪了？' },
          { speaker: 'Eve', gender: 'female', text: 'I’ve drafted most of it — sorry, you go first.', zh: '我大部分都打好草稿了——抱歉，你先說。' },
          { speaker: 'Mark', gender: 'male', text: 'No, after you. We keep talking over each other!', zh: '不，你先。我們老是同時開口！' },
          { speaker: 'Eve', gender: 'female', text: 'Ha, classic. So the draft’s nearly done.', zh: '哈，經典場面。總之草稿快完成了。' },
          { speaker: 'Mark', gender: 'male', text: 'Brilliant. When can you circulate it?', zh: '太好了。你什麼時候能傳給大家？' },
          { speaker: 'Eve', gender: 'female', text: 'By end of play tomorrow, all being well.', zh: '順利的話，明天下班前。' },
          { speaker: 'Mark', gender: 'male', text: 'Perfect. Does anyone have anything to add?', zh: '完美。有人要補充什麼嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Just that I might need a hand with the data section.', zh: '只是數據那一段我可能需要幫手。' },
          { speaker: 'Mark', gender: 'male', text: 'I’ll give you a hand with that this afternoon.', zh: '我今天下午幫你弄那部分。' },
          { speaker: 'Eve', gender: 'female', text: 'Brilliant, thank you. That’s a weight off.', zh: '太好了，謝謝。鬆了一口氣。' },
          { speaker: 'Mark', gender: 'male', text: 'Right, let’s wrap up there. Thanks, all.', zh: '好，我們就到這裡。謝謝大家。' }
        ]
      },
      {
        id: 'videocall-home',
        title: 'Working from home',
        titleZh: '在家工作',
        description: 'Two colleagues comparing remote-work life.',
        lines: [
          { speaker: 'Ben', gender: 'male', text: 'How are you finding working from home these days?', zh: '你最近覺得在家工作如何？' },
          { speaker: 'Nadia', gender: 'female', text: 'Mostly good, but I do miss the office banter.', zh: '大致不錯，但我蠻想念辦公室的玩笑話。' },
          { speaker: 'Ben', gender: 'male', text: 'Same. Though I don’t miss the commute one bit.', zh: '我也是。不過我一點都不想念通勤。' },
          { speaker: 'Nadia', gender: 'female', text: 'Definitely. I get an extra hour in bed now.', zh: '絕對的。我現在可以多睡一小時。' },
          { speaker: 'Ben', gender: 'male', text: 'Do you find it hard to switch off, though?', zh: '不過你會覺得很難切換、停下工作嗎？' },
          { speaker: 'Nadia', gender: 'female', text: 'A bit. I end up working through lunch sometimes.', zh: '有一點。我有時候會做到沒吃午餐。' },
          { speaker: 'Ben', gender: 'male', text: 'You should set proper boundaries, honestly.', zh: '老實說，你該設定好明確的界線。' },
          { speaker: 'Nadia', gender: 'female', text: 'You’re right. I’ll start taking a proper break.', zh: '你說得對。我要開始好好休息了。' },
          { speaker: 'Ben', gender: 'male', text: 'Get out for a walk — it clears your head.', zh: '出去散個步——能讓頭腦清醒。' },
          { speaker: 'Nadia', gender: 'female', text: 'Good shout. Are you in the office at all this week?', zh: '好建議。你這禮拜有進辦公室嗎？' },
          { speaker: 'Ben', gender: 'male', text: 'Thursday. We should grab lunch while we’re both in.', zh: '週四。我們都在的時候該一起吃個午餐。' }
        ]
      }
    ]
  },
  {
    id: 'tripplanning',
    title: 'Planning a Trip',
    titleZh: '旅遊規劃',
    icon: '🗺️',
    blurb: '討論行程、訂機票、打包行李時的對話',
    scenarios: [
      {
        id: 'trip-where',
        title: 'Deciding where to go',
        titleZh: '決定去哪裡',
        description: 'A couple planning their next holiday.',
        lines: [
          { speaker: 'Lily', gender: 'female', text: 'So, where are we thinking for the holiday this year?', zh: '那麼，今年假期我們想去哪？' },
          { speaker: 'Jake', gender: 'male', text: 'I fancy somewhere sunny, with a bit of culture.', zh: '我想去有陽光、又有點文化的地方。' },
          { speaker: 'Lily', gender: 'female', text: 'How about Italy? We’ve always talked about it.', zh: '義大利如何？我們一直都在說想去。' },
          { speaker: 'Jake', gender: 'male', text: 'I’d love that. Cities, or more of a beach trip?', zh: '我很想去。要逛城市，還是偏向海灘之旅？' },
          { speaker: 'Lily', gender: 'female', text: 'A bit of both? A few days sightseeing, then relax.', zh: '兩者各一點？先觀光幾天，再放鬆休息。' },
          { speaker: 'Jake', gender: 'male', text: 'Perfect. When’s the best time to go?', zh: '完美。什麼時候去最好？' },
          { speaker: 'Lily', gender: 'female', text: 'Probably May — warm but not too crowded.', zh: '大概五月——天氣暖，又不會太擠。' },
          { speaker: 'Jake', gender: 'male', text: 'And shall we hire a car to get around?', zh: '那我們要租車代步嗎？' },
          { speaker: 'Lily', gender: 'female', text: 'Maybe. The trains there are pretty good, though.', zh: '也許吧。不過那邊的火車蠻方便的。' },
          { speaker: 'Jake', gender: 'male', text: 'True. Let’s rough out a budget first.', zh: '是啊。我們先大概抓個預算。' },
          { speaker: 'Lily', gender: 'female', text: 'Good plan. I’m getting excited already!', zh: '好主意。我已經開始興奮了！' }
        ]
      },
      {
        id: 'trip-booking',
        title: 'Booking the flights',
        titleZh: '訂機票',
        description: 'Comparing flight options online.',
        lines: [
          { speaker: 'Jake', gender: 'male', text: 'Right, I’ve found a few flights. Want to take a look?', zh: '好，我找到幾個航班。要看看嗎？' },
          { speaker: 'Lily', gender: 'female', text: 'Go on. Are they direct, or with a stopover?', zh: '說吧。是直飛，還是要轉機？' },
          { speaker: 'Jake', gender: 'male', text: 'This one’s direct, but it’s a bit pricier.', zh: '這個是直飛，但稍微貴一點。' },
          { speaker: 'Lily', gender: 'female', text: 'I’d pay a bit more to avoid a long layover.', zh: '我願意多付一點，避免長時間轉機。' },
          { speaker: 'Jake', gender: 'male', text: 'Same. What time does it leave?', zh: '我也是。它幾點起飛？' },
          { speaker: 'Lily', gender: 'female', text: 'Early, sadly — we’d have to be at the airport by six.', zh: '可惜很早——我們得六點前到機場。' },
          { speaker: 'Jake', gender: 'male', text: 'Ouch. Does the price include baggage?', zh: '哎喲。這價格含行李嗎？' },
          { speaker: 'Lily', gender: 'female', text: 'Only hand luggage. A case is extra.', zh: '只含手提行李。托運要加錢。' },
          { speaker: 'Jake', gender: 'male', text: 'Add one case between us — we’ll share.', zh: '加一件托運就好——我們共用。' },
          { speaker: 'Lily', gender: 'female', text: 'Sorted. Shall I just book it before the price jumps?', zh: '搞定。我趁漲價前直接訂好嗎？' },
          { speaker: 'Jake', gender: 'male', text: 'Do it. No going back now!', zh: '訂吧。現在沒有回頭路了！' }
        ]
      },
      {
        id: 'trip-packing',
        title: 'Packing the suitcase',
        titleZh: '打包行李箱',
        description: 'Last-minute packing the night before.',
        lines: [
          { speaker: 'Lily', gender: 'female', text: 'Have you started packing yet? We leave at dawn.', zh: '你開始打包了嗎？我們天一亮就要出發。' },
          { speaker: 'Jake', gender: 'male', text: 'Just about. I always leave it to the last minute.', zh: '差不多。我老是拖到最後一刻。' },
          { speaker: 'Lily', gender: 'female', text: 'Have you got your passport and the tickets?', zh: '你護照和機票拿了嗎？' },
          { speaker: 'Jake', gender: 'male', text: 'Passport’s in my bag. Tickets are on my phone.', zh: '護照在我包包裡。機票在我手機上。' },
          { speaker: 'Lily', gender: 'female', text: 'Don’t forget the adaptor and your charger.', zh: '別忘了轉接頭和充電器。' },
          { speaker: 'Jake', gender: 'male', text: 'Good shout. Have we got room for the suncream?', zh: '提醒得好。防曬乳還塞得下嗎？' },
          { speaker: 'Lily', gender: 'female', text: 'Put it in a freezer bag in case it leaks.', zh: '裝進密封袋裡，以防它漏出來。' },
          { speaker: 'Jake', gender: 'male', text: 'Sensible. I think my case is over the weight limit.', zh: '明智。我覺得我的行李箱超重了。' },
          { speaker: 'Lily', gender: 'female', text: 'Take a couple of things out — you never wear half of it.', zh: '拿幾樣出來——有一半你根本不會穿。' },
          { speaker: 'Jake', gender: 'male', text: 'Fair. Right, I think that’s everything.', zh: '有道理。好，我想都齊了。' },
          { speaker: 'Lily', gender: 'female', text: 'Fingers crossed. Early night — big day tomorrow!', zh: '希望如此。早點睡——明天是大日子！' }
        ]
      }
    ]
  },
  {
    id: 'birthday',
    title: 'Birthdays & Parties',
    titleZh: '生日與派對',
    icon: '🎂',
    blurb: '籌備驚喜、慶生、送禮時的溫馨對話',
    scenarios: [
      {
        id: 'birthday-surprise',
        title: 'Planning a surprise party',
        titleZh: '籌備驚喜派對',
        description: 'Two friends secretly organising a celebration.',
        lines: [
          { speaker: 'Megan', gender: 'female', text: 'Right, the surprise party — are we still on for Saturday?', zh: '好，那個驚喜派對——還是辦在週六嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Yep. Does she suspect anything at all?', zh: '對。她有起任何疑心嗎？' },
          { speaker: 'Megan', gender: 'female', text: 'I don’t think so. I’ve been very careful.', zh: '我想沒有。我一直很小心。' },
          { speaker: 'Tom', gender: 'male', text: 'Good. Who’s in charge of getting her there?', zh: '很好。誰負責把她帶過去？' },
          { speaker: 'Megan', gender: 'female', text: 'I’ll tell her we’re just going for a quiet dinner.', zh: '我會跟她說我們只是去吃個安靜的晚餐。' },
          { speaker: 'Tom', gender: 'male', text: 'Perfect. I’ll get everyone hidden by seven.', zh: '完美。我會在七點前讓大家躲好。' },
          { speaker: 'Megan', gender: 'female', text: 'Have you sorted the cake?', zh: '蛋糕你搞定了嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Picking it up Saturday morning. Chocolate, her favourite.', zh: '週六早上去取。巧克力的，她的最愛。' },
          { speaker: 'Megan', gender: 'female', text: 'She’ll love it. What about decorations?', zh: '她會超愛。那布置呢？' },
          { speaker: 'Tom', gender: 'male', text: 'Banners and balloons — I’ll do it in the afternoon.', zh: '布條和氣球——我下午會弄。' },
          { speaker: 'Megan', gender: 'female', text: 'Brilliant. She’s going to be absolutely gobsmacked.', zh: '太好了。她一定會驚呆。' }
        ]
      },
      {
        id: 'birthday-party',
        title: 'At the party',
        titleZh: '派對現場',
        description: 'Mingling and celebrating at the do.',
        lines: [
          { speaker: 'Holly', gender: 'female', text: 'Happy birthday! You made it — did you have any idea?', zh: '生日快樂！你來啦——你有猜到嗎？' },
          { speaker: 'Jess', gender: 'female', text: 'None whatsoever! I nearly had a heart attack.', zh: '完全沒有！我差點嚇出心臟病。' },
          { speaker: 'Holly', gender: 'female', text: 'Ha! Worth it for that reaction. Drink?', zh: '哈！就為了你這反應，值了。喝一杯？' },
          { speaker: 'Jess', gender: 'female', text: 'Go on, I’ll have a glass of fizz. Cheers!', zh: '好啊，我來杯氣泡酒。乾杯！' },
          { speaker: 'Holly', gender: 'female', text: 'Everyone’s here — even your cousins came up.', zh: '大家都來了——連你表親都特地上來了。' },
          { speaker: 'Jess', gender: 'female', text: 'I can’t believe you pulled this off without me knowing.', zh: '我不敢相信你瞞著我把這辦成了。' },
          { speaker: 'Holly', gender: 'female', text: 'It was touch and go, you nearly caught us twice!', zh: '過程驚險，你差點抓包我們兩次！' },
          { speaker: 'Jess', gender: 'female', text: 'Honestly, this means so much. Thank you.', zh: '老實說，這對我意義重大。謝謝你。' },
          { speaker: 'Holly', gender: 'female', text: 'You deserve it. Right, cake time soon!', zh: '你值得的。好，等等就切蛋糕！' },
          { speaker: 'Jess', gender: 'female', text: 'I hope you’re not expecting a speech!', zh: '你該不會還要我致詞吧！' },
          { speaker: 'Holly', gender: 'female', text: 'Just a little one. Now go and enjoy your night!', zh: '一小段就好。現在快去好好享受今晚！' }
        ]
      },
      {
        id: 'birthday-gift',
        title: 'Choosing a present',
        titleZh: '挑選禮物',
        description: 'Working out what to buy for a friend.',
        lines: [
          { speaker: 'Sam', gender: 'male', text: 'I’m stuck on what to get Jess for her birthday.', zh: '我不知道該送 Jess 什麼生日禮物。' },
          { speaker: 'Eve', gender: 'female', text: 'What’s she into at the moment?', zh: '她最近喜歡什麼？' },
          { speaker: 'Sam', gender: 'male', text: 'She’s really got into pottery, oddly enough.', zh: '說來奇怪，她最近迷上陶藝。' },
          { speaker: 'Eve', gender: 'female', text: 'Ooh, what about a voucher for a workshop?', zh: '喔，那送個體驗工作坊的禮券如何？' },
          { speaker: 'Sam', gender: 'male', text: 'That’s a lovely idea. More thoughtful than just stuff.', zh: '這主意真好。比單純送東西更用心。' },
          { speaker: 'Eve', gender: 'female', text: 'Exactly. Experiences always go down well.', zh: '沒錯。體驗類的禮物總是很受歡迎。' },
          { speaker: 'Sam', gender: 'male', text: 'Should I get her a little something to unwrap too?', zh: '我該不該再買個小東西讓她拆？' },
          { speaker: 'Eve', gender: 'female', text: 'Maybe just some nice chocolates or flowers.', zh: '也許就一些好吃的巧克力或花。' },
          { speaker: 'Sam', gender: 'male', text: 'Good shout. Will you go in on it with me?', zh: '好建議。你要不要跟我一起出錢合送？' },
          { speaker: 'Eve', gender: 'female', text: 'Course. Let’s split the voucher down the middle.', zh: '當然。禮券我們對半分攤。' },
          { speaker: 'Sam', gender: 'male', text: 'Sorted. She’s going to be made up.', zh: '搞定。她一定會超開心。' }
        ]
      }
    ]
  },
  {
    id: 'argument',
    title: 'Falling Out & Making Up',
    titleZh: '吵架與和好',
    icon: '🤝',
    blurb: '朋友間鬧彆扭、道歉、和好時的真心話',
    scenarios: [
      {
        id: 'argument-falling-out',
        title: 'A bit of a falling out',
        titleZh: '鬧得有點不愉快',
        description: 'Two friends clearing the air after a disagreement.',
        lines: [
          { speaker: 'Owen', gender: 'male', text: 'Can we talk? Things have felt off between us.', zh: '我們能談談嗎？我們之間感覺怪怪的。' },
          { speaker: 'Tara', gender: 'female', text: 'Yeah, they have. I’ve been a bit hurt, honestly.', zh: '對，是有。老實說我有點受傷。' },
          { speaker: 'Owen', gender: 'male', text: 'I’m sorry. What did I do? I genuinely want to know.', zh: '對不起。我做了什麼？我是真心想知道。' },
          { speaker: 'Tara', gender: 'female', text: 'You cancelled on me last minute, again.', zh: '你又在最後一刻放我鴿子。' },
          { speaker: 'Owen', gender: 'male', text: 'Ah. I didn’t realise it had become a pattern.', zh: '啊。我沒意識到這已經變成一種習慣了。' },
          { speaker: 'Tara', gender: 'female', text: 'It just made me feel like I’m not a priority.', zh: '這讓我覺得自己不被重視。' },
          { speaker: 'Owen', gender: 'male', text: 'That’s the last thing I wanted. I really am sorry.', zh: '這絕對不是我想要的。我真的很抱歉。' },
          { speaker: 'Tara', gender: 'female', text: 'I appreciate you saying that.', zh: '謝謝你這麼說。' },
          { speaker: 'Owen', gender: 'male', text: 'I’ll make more of an effort, I promise.', zh: '我會更努力的，我保證。' },
          { speaker: 'Tara', gender: 'female', text: 'That’s all I wanted to hear, really.', zh: '其實這就是我想聽到的。' },
          { speaker: 'Owen', gender: 'male', text: 'Let me make it up to you. Lunch, my treat?', zh: '讓我補償你。吃午餐，我請？' }
        ]
      },
      {
        id: 'argument-flatmates',
        title: 'Flatmate friction',
        titleZh: '室友摩擦',
        description: 'Sorting out tension over chores at home.',
        lines: [
          { speaker: 'Becca', gender: 'female', text: 'Can we have a quick chat about the flat?', zh: '我們能聊一下公寓的事嗎？' },
          { speaker: 'Joe', gender: 'male', text: 'Sure. Is this about the washing up again?', zh: '當然。是又要講洗碗的事嗎？' },
          { speaker: 'Becca', gender: 'female', text: 'Partly. It’s been piling up and it’s always me.', zh: '一部分是。碗一直堆著，而且老是我在洗。' },
          { speaker: 'Joe', gender: 'male', text: 'Fair enough. I’ve been snowed under with work.', zh: '有道理。我最近被工作忙翻了。' },
          { speaker: 'Becca', gender: 'female', text: 'I get that, but a quick rinse wouldn’t hurt.', zh: '我理解，但隨手沖一下也不費事啊。' },
          { speaker: 'Joe', gender: 'male', text: 'You’re right, that’s on me. Shall we set up a rota?', zh: '你說得對，是我的問題。我們要不要排個輪值表？' },
          { speaker: 'Becca', gender: 'female', text: 'That’d help loads, actually.', zh: '那其實會很有幫助。' },
          { speaker: 'Joe', gender: 'male', text: 'One of us cooks, the other clears up. Fair?', zh: '一個人煮，另一個人收拾。公平嗎？' },
          { speaker: 'Becca', gender: 'female', text: 'Perfect. I didn’t want it to turn into a big thing.', zh: '完美。我不想把它鬧成大問題。' },
          { speaker: 'Joe', gender: 'male', text: 'No, I’m glad you said something.', zh: '不，我很高興你說出來了。' },
          { speaker: 'Becca', gender: 'female', text: 'Right, no hard feelings. Brew?', zh: '好，沒事了。泡杯茶？' }
        ]
      },
      {
        id: 'argument-apology',
        title: 'Saying sorry',
        titleZh: '主動道歉',
        description: 'Reaching out to apologise after losing your temper.',
        lines: [
          { speaker: 'Dan', gender: 'male', text: 'I owe you an apology for the other day.', zh: '前幾天的事我欠你一個道歉。' },
          { speaker: 'Priya', gender: 'female', text: 'Oh. Go on, I’m listening.', zh: '喔。說吧，我在聽。' },
          { speaker: 'Dan', gender: 'male', text: 'I snapped at you, and that wasn’t fair.', zh: '我對你發了脾氣，那不公平。' },
          { speaker: 'Priya', gender: 'female', text: 'It did catch me off guard, to be honest.', zh: '老實說，那確實讓我措手不及。' },
          { speaker: 'Dan', gender: 'male', text: 'I’d had a rotten day, but that’s no excuse.', zh: '那天我過得很糟，但那不是藉口。' },
          { speaker: 'Priya', gender: 'female', text: 'I appreciate you recognising it.', zh: '謝謝你願意承認這點。' },
          { speaker: 'Dan', gender: 'male', text: 'You didn’t deserve to be on the end of it.', zh: '你不該被我這樣對待。' },
          { speaker: 'Priya', gender: 'female', text: 'We all have off days. It’s already forgotten.', zh: '每個人都有不順的時候。這事我已經放下了。' },
          { speaker: 'Dan', gender: 'male', text: 'Thanks. That means a lot, genuinely.', zh: '謝謝。這對我真的意義重大。' },
          { speaker: 'Priya', gender: 'female', text: 'Just talk to me next time you’re stressed, yeah?', zh: '下次你有壓力時就跟我說，好嗎？' },
          { speaker: 'Dan', gender: 'male', text: 'I will. Thanks for being so understanding.', zh: '我會的。謝謝你這麼體諒。' }
        ]
      }
    ]
  },
  {
    id: 'recycling',
    title: 'Recycling & Going Green',
    titleZh: '環保回收',
    icon: '♻️',
    blurb: '垃圾分類、減塑、節能等環保話題的對話',
    scenarios: [
      {
        id: 'recycling-bins',
        title: 'Which bin is which?',
        titleZh: '哪個桶丟哪個',
        description: 'Two flatmates puzzling over the recycling.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'Does this yoghurt pot go in recycling or not?', zh: '這個優格盒能回收嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'Give it a rinse first, then it should be fine.', zh: '先沖一下，這樣應該就可以。' },
          { speaker: 'Eve', gender: 'female', text: 'Right. And what about the greasy pizza box?', zh: '好。那油膩膩的披薩盒呢？' },
          { speaker: 'Sam', gender: 'male', text: 'That goes in general waste — grease contaminates it.', zh: '那要丟一般垃圾——油會污染回收物。' },
          { speaker: 'Eve', gender: 'female', text: 'I never knew that. What bin’s for the garden stuff?', zh: '我都不知道。庭院的東西丟哪個桶？' },
          { speaker: 'Sam', gender: 'male', text: 'The green one. Grass and leaves go in there.', zh: '綠色那個。草和落葉丟那裡。' },
          { speaker: 'Eve', gender: 'female', text: 'And when does it get collected?', zh: '那什麼時候會來收？' },
          { speaker: 'Sam', gender: 'male', text: 'Recycling’s every other Tuesday, I think.', zh: '回收好像是每隔一個禮拜二。' },
          { speaker: 'Eve', gender: 'female', text: 'I’d better put the bins out tonight, then.', zh: '那我今晚最好把垃圾桶推出去。' },
          { speaker: 'Sam', gender: 'male', text: 'Good shout, or we’ll miss it for two weeks.', zh: '好主意，不然就要再等兩週了。' },
          { speaker: 'Eve', gender: 'female', text: 'Honestly, it’s like a puzzle every week!', zh: '老實說，這每週都像在解謎！' }
        ]
      },
      {
        id: 'recycling-plastic',
        title: 'Cutting down on plastic',
        titleZh: '減少使用塑膠',
        description: 'Friends sharing tips on living greener.',
        lines: [
          { speaker: 'Holly', gender: 'female', text: 'I’m trying to cut down on single-use plastic.', zh: '我在試著減少一次性塑膠。' },
          { speaker: 'Jay', gender: 'male', text: 'Good for you. Where have you started?', zh: '太好了。你從哪裡開始的？' },
          { speaker: 'Holly', gender: 'female', text: 'I’ve got a reusable bottle and a coffee cup now.', zh: '我現在有環保水瓶和咖啡杯了。' },
          { speaker: 'Jay', gender: 'male', text: 'Loads of cafés give you money off for bringing your own.', zh: '很多咖啡廳自備杯子還會給折扣。' },
          { speaker: 'Holly', gender: 'female', text: 'Exactly. Every little helps, doesn’t it?', zh: '沒錯。積少成多嘛，對吧？' },
          { speaker: 'Jay', gender: 'male', text: 'It does. I’ve switched to bars of soap too.', zh: '是啊。我也改用肥皂塊了。' },
          { speaker: 'Holly', gender: 'female', text: 'Oh, good idea. Less packaging to chuck away.', zh: '喔，好主意。要丟的包裝少很多。' },
          { speaker: 'Jay', gender: 'male', text: 'And I take a tote bag everywhere now.', zh: '而且我現在到哪都帶購物袋。' },
          { speaker: 'Holly', gender: 'female', text: 'Same. I keep one scrunched up in my pocket.', zh: '我也是。我口袋裡都揉著一個。' },
          { speaker: 'Jay', gender: 'male', text: 'It all adds up over a year, when you think about it.', zh: '仔細想想，一整年下來累積起來很可觀。' },
          { speaker: 'Holly', gender: 'female', text: 'Right? Small swaps, big difference.', zh: '對吧？小小的改變，大大的不同。' }
        ]
      },
      {
        id: 'recycling-energy',
        title: 'Saving energy at home',
        titleZh: '在家節能',
        description: 'A couple trying to lower their energy bills.',
        lines: [
          { speaker: 'Mark', gender: 'male', text: 'Have you seen the size of the energy bill?', zh: '你看到能源帳單金額了嗎？' },
          { speaker: 'Anna', gender: 'female', text: 'I have. We really need to cut back somewhere.', zh: '看到了。我們真的得在某些地方省一省。' },
          { speaker: 'Mark', gender: 'male', text: 'Let’s start by turning the heating down a degree.', zh: '先從把暖氣調低一度開始吧。' },
          { speaker: 'Anna', gender: 'female', text: 'Good idea. And we leave so many lights on.', zh: '好主意。而且我們開了好多沒用的燈。' },
          { speaker: 'Mark', gender: 'male', text: 'True. I’ll swap the bulbs for LED ones.', zh: '是啊。我會把燈泡換成 LED 的。' },
          { speaker: 'Anna', gender: 'female', text: 'They last ages and use way less power.', zh: '它們很耐用，又省很多電。' },
          { speaker: 'Mark', gender: 'male', text: 'We should stop leaving things on standby, too.', zh: '我們也該別讓東西一直待機了。' },
          { speaker: 'Anna', gender: 'female', text: 'The telly and the chargers are the worst.', zh: '電視和充電器最耗電。' },
          { speaker: 'Mark', gender: 'male', text: 'And only boil as much water as we need.', zh: '還有水壺只燒需要的量就好。' },
          { speaker: 'Anna', gender: 'female', text: 'Little habits, but they’ll soon add up.', zh: '都是小習慣，但很快就會累積出成效。' },
          { speaker: 'Mark', gender: 'male', text: 'Exactly. Hopefully the next bill’s a nicer surprise.', zh: '沒錯。希望下次帳單是個比較美好的驚喜。' }
        ]
      }
    ]
  }
]
