// Situations pack 7 — admin, habits & money (calling in sick, phone contracts,
// tax, driving test, quitting smoking, new year resolutions, lending money,
// ordering takeaway). 3 dialogues per category, 11 lines each, alternating voices.

export const PACK7 = [
  {
    id: 'sickleave',
    title: 'Calling in Sick',
    titleZh: '生病請假',
    icon: '🤒',
    blurb: '向公司請病假、回診、復工時的對話',
    scenarios: [
      {
        id: 'sick-call',
        title: 'Phoning in sick',
        titleZh: '打電話請病假',
        description: 'Letting your manager know you can’t come in.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'Morning, sorry to call so early. I’m not well.', zh: '早安，抱歉這麼早打來。我身體不舒服。' },
          { speaker: 'Manager', gender: 'female', text: 'Oh no. What’s the matter?', zh: '喔不。怎麼了？' },
          { speaker: 'Tom', gender: 'male', text: 'I’ve come down with a horrible cold and a fever.', zh: '我得了重感冒，還發燒。' },
          { speaker: 'Manager', gender: 'female', text: 'You poor thing. You definitely shouldn’t come in.', zh: '真可憐。你絕對不該來上班。' },
          { speaker: 'Tom', gender: 'male', text: 'I didn’t want to leave you short-staffed.', zh: '我不想讓你們人手不足。' },
          { speaker: 'Manager', gender: 'female', text: 'Don’t worry about that. Just focus on getting better.', zh: '別擔心那個。專心養病就好。' },
          { speaker: 'Tom', gender: 'male', text: 'Thanks. I’ll catch up on emails if I feel up to it.', zh: '謝謝。如果體力允許我會把郵件補上。' },
          { speaker: 'Manager', gender: 'female', text: 'No, properly rest. Work can wait.', zh: '不行，好好休息。工作可以等。' },
          { speaker: 'Tom', gender: 'male', text: 'I appreciate that. I’ll keep you posted.', zh: '謝謝你。我會隨時跟你回報。' },
          { speaker: 'Manager', gender: 'female', text: 'Please do. Let me know how you are tomorrow.', zh: '麻煩了。明天讓我知道你的狀況。' },
          { speaker: 'Tom', gender: 'male', text: 'Will do. Sorry again for the short notice.', zh: '會的。再次抱歉這麼臨時通知。' }
        ]
      },
      {
        id: 'sick-checkup',
        title: 'A follow-up with the GP',
        titleZh: '回診追蹤',
        description: 'Reviewing how you’re recovering.',
        lines: [
          { speaker: 'Doctor', gender: 'male', text: 'Come in. How have you been since last week?', zh: '請進。你上週之後狀況如何？' },
          { speaker: 'Eve', gender: 'female', text: 'A bit better, but the cough’s hanging around.', zh: '好一點了，但咳嗽一直好不了。' },
          { speaker: 'Doctor', gender: 'male', text: 'That can linger. Any chest pain or breathlessness?', zh: '咳嗽可能會拖。有胸痛或呼吸困難嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'No, thankfully. Just tired and a bit run down.', zh: '還好沒有。只是很累、有點虛。' },
          { speaker: 'Doctor', gender: 'male', text: 'That’s to be expected. Are you sleeping alright?', zh: '這是正常的。你睡得還好嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Not brilliantly, the cough keeps waking me.', zh: '不太好，咳嗽一直把我吵醒。' },
          { speaker: 'Doctor', gender: 'male', text: 'I’ll suggest something to ease it at night.', zh: '我會建議一些能在夜裡緩解的方法。' },
          { speaker: 'Eve', gender: 'female', text: 'Thank you. Am I okay to go back to work?', zh: '謝謝。我可以回去上班了嗎？' },
          { speaker: 'Doctor', gender: 'male', text: 'Give it a couple more days, then ease back in.', zh: '再休息個兩天，再慢慢回到崗位。' },
          { speaker: 'Eve', gender: 'female', text: 'Will I need a sick note for that?', zh: '那我需要病假證明嗎？' },
          { speaker: 'Doctor', gender: 'male', text: 'I’ll print one off for you on the way out.', zh: '我在您離開前印一張給您。' }
        ]
      },
      {
        id: 'sick-return',
        title: 'Back at work',
        titleZh: '回到工作崗位',
        description: 'Easing back in after time off.',
        lines: [
          { speaker: 'Priya', gender: 'female', text: 'Welcome back! How are you feeling now?', zh: '歡迎回來！你現在感覺如何？' },
          { speaker: 'Tom', gender: 'male', text: 'Much better, thanks. Still a bit run down, though.', zh: '好多了，謝謝。不過還是有點虛。' },
          { speaker: 'Priya', gender: 'female', text: 'Take it easy today, don’t overdo it.', zh: '今天放輕鬆，別硬撐。' },
          { speaker: 'Tom', gender: 'male', text: 'I’ll try. Did I miss anything major?', zh: '我會的。我有錯過什麼大事嗎？' },
          { speaker: 'Priya', gender: 'female', text: 'Nothing you can’t catch up on. I covered the urgent bits.', zh: '沒有你補不回來的。緊急的部分我幫你頂了。' },
          { speaker: 'Tom', gender: 'male', text: 'You’re a star, thank you so much.', zh: '你真是好人，太感謝了。' },
          { speaker: 'Priya', gender: 'female', text: 'No bother. There’s a pile of emails, mind.', zh: '別客氣。不過有一堆郵件等著你。' },
          { speaker: 'Tom', gender: 'male', text: 'Ha, I bet. I’ll work through them slowly.', zh: '哈，我猜也是。我會慢慢處理。' },
          { speaker: 'Priya', gender: 'female', text: 'And the Friday meeting got pushed to Monday.', zh: '還有週五的會議延到週一了。' },
          { speaker: 'Tom', gender: 'male', text: 'Good to know. Right, better make a start.', zh: '了解。好，該開始幹活了。' },
          { speaker: 'Priya', gender: 'female', text: 'Shout if you need anything. Glad you’re back.', zh: '需要什麼就喊我。很高興你回來了。' }
        ]
      }
    ]
  },
  {
    id: 'phoneplan',
    title: 'Mobile Phone Contracts',
    titleZh: '手機資費方案',
    icon: '📲',
    blurb: '辦門號、比方案、處理帳單時的對話',
    scenarios: [
      {
        id: 'phone-upgrade',
        title: 'Upgrading your phone',
        titleZh: '升級手機',
        description: 'Looking at a new contract in the phone shop.',
        lines: [
          { speaker: 'Assistant', gender: 'male', text: 'Hiya, what can I help you with today?', zh: '嗨，今天需要什麼服務？' },
          { speaker: 'Amy', gender: 'female', text: 'My contract’s up, so I’m after an upgrade.', zh: '我的合約到期了，所以想升級。' },
          { speaker: 'Assistant', gender: 'male', text: 'Lovely. Any particular phone in mind?', zh: '好的。有特別想要的手機嗎？' },
          { speaker: 'Amy', gender: 'female', text: 'Nothing too flashy, just a reliable one.', zh: '不用太炫，可靠就好。' },
          { speaker: 'Assistant', gender: 'male', text: 'This one’s great value. How much data do you use?', zh: '這支 CP 值很高。您數據用量大嗎？' },
          { speaker: 'Amy', gender: 'female', text: 'Quite a bit — I stream music on the train.', zh: '蠻多的——我會在火車上聽串流音樂。' },
          { speaker: 'Assistant', gender: 'male', text: 'Then I’d go for the unlimited data plan.', zh: '那我會建議無限數據方案。' },
          { speaker: 'Amy', gender: 'female', text: 'How much is that a month?', zh: '那一個月多少錢？' },
          { speaker: 'Assistant', gender: 'male', text: 'Thirty pounds, with the handset included.', zh: '三十英鎊，含手機。' },
          { speaker: 'Amy', gender: 'female', text: 'And how long’s the contract?', zh: '合約綁多久？' },
          { speaker: 'Assistant', gender: 'male', text: 'Twenty-four months. Shall I set it up for you?', zh: '二十四個月。要我幫您辦理嗎？' }
        ]
      },
      {
        id: 'phone-bill',
        title: 'A surprise on the bill',
        titleZh: '帳單上的意外',
        description: 'Querying unexpected charges on your phone bill.',
        lines: [
          { speaker: 'Sam', gender: 'male', text: 'Hi, my bill’s way higher than usual this month.', zh: '您好，我這個月帳單比平常高很多。' },
          { speaker: 'Agent', gender: 'female', text: 'Let’s take a look. Can I confirm your number?', zh: '我們來看看。可以核對您的門號嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'Yes, it ends in four-six-two-one.', zh: '可以，末四碼是 4621。' },
          { speaker: 'Agent', gender: 'female', text: 'Thanks. I can see some charges from abroad.', zh: '謝謝。我看到一些國外使用的費用。' },
          { speaker: 'Sam', gender: 'male', text: 'Ah, I was away last week. I forgot about roaming.', zh: '啊，我上週出國了。我忘了漫遊的事。' },
          { speaker: 'Agent', gender: 'female', text: 'That’ll be it. Did you not add a travel pass?', zh: '應該就是這個。您沒有加購旅遊方案嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'No, I didn’t realise I needed one.', zh: '沒有，我不知道需要加購。' },
          { speaker: 'Agent', gender: 'female', text: 'For next time, it’s much cheaper to add one.', zh: '下次的話，加購會便宜很多。' },
          { speaker: 'Sam', gender: 'male', text: 'Good to know. Is there anything you can do this time?', zh: '了解。這次有什麼能幫忙的嗎？' },
          { speaker: 'Agent', gender: 'female', text: 'As a goodwill gesture, I can take a bit off.', zh: '基於善意，我可以幫您減免一部分。' },
          { speaker: 'Sam', gender: 'male', text: 'That’s really kind, thank you very much.', zh: '您真好心，非常感謝。' }
        ]
      },
      {
        id: 'phone-sim',
        title: 'Switching to SIM-only',
        titleZh: '改用單門號方案',
        description: 'Asking about a cheaper SIM-only deal.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'I want to cut my bill down. My phone’s fine.', zh: '我想降低帳單。我手機還很好用。' },
          { speaker: 'Assistant', gender: 'male', text: 'Then a SIM-only deal is perfect for you.', zh: '那單門號方案很適合您。' },
          { speaker: 'Eve', gender: 'female', text: 'How does that work, exactly?', zh: '那到底是怎麼運作的？' },
          { speaker: 'Assistant', gender: 'male', text: 'You just pay for calls and data, no handset cost.', zh: '您只付通話和數據，不含手機費用。' },
          { speaker: 'Eve', gender: 'female', text: 'That sounds much cheaper. Am I tied in?', zh: '聽起來便宜多了。會被綁約嗎？' },
          { speaker: 'Assistant', gender: 'male', text: 'You can go rolling monthly, so no long contract.', zh: '可以選按月續約，所以不用長約。' },
          { speaker: 'Eve', gender: 'female', text: 'Even better. Will I keep my old number?', zh: '那更好了。我能保留舊門號嗎？' },
          { speaker: 'Assistant', gender: 'male', text: 'Yes, you just request a code to transfer it.', zh: '可以，您只要申請一組轉移碼。' },
          { speaker: 'Eve', gender: 'female', text: 'Brilliant. How soon does it kick in?', zh: '太好了。多久會生效？' },
          { speaker: 'Assistant', gender: 'male', text: 'Usually the next working day.', zh: '通常是下一個工作日。' },
          { speaker: 'Eve', gender: 'female', text: 'Perfect. Let’s switch me over, then.', zh: '太好了。那就幫我轉過去吧。' }
        ]
      }
    ]
  },
  {
    id: 'tax',
    title: 'Tax & Self-Assessment',
    titleZh: '報稅與退稅',
    icon: '🧾',
    blurb: '報稅、退稅、跟稅務局周旋時的對話',
    scenarios: [
      {
        id: 'tax-return',
        title: 'Doing your tax return',
        titleZh: '報自雇稅',
        description: 'A friend helping with a self-assessment.',
        lines: [
          { speaker: 'Dan', gender: 'male', text: 'I’m dreading doing my tax return this year.', zh: '我今年超怕報稅。' },
          { speaker: 'Priya', gender: 'female', text: 'It’s not as bad as you think. Have you got your records?', zh: '沒你想的那麼糟。你帳目都備好了嗎？' },
          { speaker: 'Dan', gender: 'male', text: 'Most of them. I’m a bit behind on receipts.', zh: '大部分都有。收據有點落後沒整理。' },
          { speaker: 'Priya', gender: 'female', text: 'Start with your income, then list your expenses.', zh: '先列收入，再列支出。' },
          { speaker: 'Dan', gender: 'male', text: 'Can I claim for working from home?', zh: '在家工作可以申報扣除嗎？' },
          { speaker: 'Priya', gender: 'female', text: 'You can — a portion of your bills counts.', zh: '可以——一部分的帳單可以算進去。' },
          { speaker: 'Dan', gender: 'male', text: 'Oh, handy. When’s the deadline again?', zh: '喔，真方便。截止日是什麼時候來著？' },
          { speaker: 'Priya', gender: 'female', text: 'The end of January for online filing.', zh: '線上申報是一月底。' },
          { speaker: 'Dan', gender: 'male', text: 'Right, plenty of time if I crack on now.', zh: '好，現在開始的話時間還很充裕。' },
          { speaker: 'Priya', gender: 'female', text: 'Don’t leave it to the last minute, though!', zh: '不過別拖到最後一刻！' },
          { speaker: 'Dan', gender: 'male', text: 'I won’t. Thanks for talking me through it.', zh: '不會的。謝謝你帶我搞懂。' }
        ]
      },
      {
        id: 'tax-refund',
        title: 'Chasing a tax refund',
        titleZh: '追退稅',
        description: 'Calling the tax office about a rebate.',
        lines: [
          { speaker: 'Agent', gender: 'male', text: 'Thanks for holding. How can I help?', zh: '感謝稍候。有什麼能幫您？' },
          { speaker: 'Eve', gender: 'female', text: 'Hi, I think I’ve overpaid tax and I’m owed a refund.', zh: '您好，我覺得我溢繳了稅，應該有退稅。' },
          { speaker: 'Agent', gender: 'male', text: 'Let me check. Can I take your National Insurance number?', zh: '我查一下。可以給我您的國民保險號碼嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Of course. It’s here on my payslip.', zh: '當然。就在我的薪資單上。' },
          { speaker: 'Agent', gender: 'male', text: 'Thank you. Yes, it looks like you’re due a rebate.', zh: '謝謝。是的，看起來您確實該退稅。' },
          { speaker: 'Eve', gender: 'female', text: 'Oh good. How much are we talking?', zh: '喔太好了。大概多少？' },
          { speaker: 'Agent', gender: 'male', text: 'A little over two hundred pounds.', zh: '兩百英鎊出頭。' },
          { speaker: 'Eve', gender: 'female', text: 'Lovely surprise! How will I receive it?', zh: '真是個驚喜！我會怎麼收到？' },
          { speaker: 'Agent', gender: 'male', text: 'Straight into your bank account on file.', zh: '直接匯入您登記的銀行帳戶。' },
          { speaker: 'Eve', gender: 'female', text: 'And how long does that usually take?', zh: '那通常要多久？' },
          { speaker: 'Agent', gender: 'male', text: 'Around five working days. All sorted for you.', zh: '大約五個工作天。都幫您處理好了。' }
        ]
      },
      {
        id: 'tax-advice',
        title: 'Seeing an accountant',
        titleZh: '諮詢會計師',
        description: 'Getting advice on going self-employed.',
        lines: [
          { speaker: 'Accountant', gender: 'female', text: 'So, you’re thinking of going self-employed?', zh: '所以，您在考慮成為自雇者？' },
          { speaker: 'Ben', gender: 'male', text: 'Yes, but the tax side worries me a bit.', zh: '對，但稅務方面讓我有點擔心。' },
          { speaker: 'Accountant', gender: 'female', text: 'It’s manageable. You’ll need to register first.', zh: '是可以應付的。您得先登記。' },
          { speaker: 'Ben', gender: 'male', text: 'And then I file a return once a year?', zh: '然後一年報一次稅？' },
          { speaker: 'Accountant', gender: 'female', text: 'That’s right, plus set money aside as you go.', zh: '沒錯，而且要邊賺邊預留稅款。' },
          { speaker: 'Ben', gender: 'male', text: 'How much should I be putting away?', zh: '我大概該留多少？' },
          { speaker: 'Accountant', gender: 'female', text: 'A rough rule is a third of what you earn.', zh: '一個簡單的原則是收入的三分之一。' },
          { speaker: 'Ben', gender: 'male', text: 'Sensible. Should I keep all my receipts?', zh: '很合理。我要保留所有收據嗎？' },
          { speaker: 'Accountant', gender: 'female', text: 'Absolutely — every business expense counts.', zh: '當然——每一筆營業支出都算數。' },
          { speaker: 'Ben', gender: 'male', text: 'This is really helpful. Could you handle my return?', zh: '這真的很有幫助。您能幫我報稅嗎？' },
          { speaker: 'Accountant', gender: 'female', text: 'Of course. I’ll take the stress off your hands.', zh: '當然。我會幫您卸下這份壓力。' }
        ]
      }
    ]
  },
  {
    id: 'drivingtest',
    title: 'The Driving Test',
    titleZh: '駕照路考',
    icon: '🚦',
    blurb: '路考前後、理論考、拿到駕照時的對話',
    scenarios: [
      {
        id: 'drivingtest-before',
        title: 'Nerves before the test',
        titleZh: '路考前的緊張',
        description: 'Calming down right before the driving test.',
        lines: [
          { speaker: 'Amy', gender: 'female', text: 'I’m so nervous, my hands are actually shaking.', zh: '我好緊張，手都在抖了。' },
          { speaker: 'Instructor', gender: 'male', text: 'Take a deep breath. You’re more than ready.', zh: '深呼吸。你早就準備好了。' },
          { speaker: 'Amy', gender: 'female', text: 'What if I stall at the lights?', zh: '萬一我在紅綠燈熄火怎麼辦？' },
          { speaker: 'Instructor', gender: 'male', text: 'Then you restart calmly. One stall won’t fail you.', zh: '那就冷靜地重新發動。熄火一次不會被當。' },
          { speaker: 'Amy', gender: 'female', text: 'Okay. Just remember the mirrors, right?', zh: '好。記得看後照鏡就對了，對吧？' },
          { speaker: 'Instructor', gender: 'male', text: 'Exactly. Mirrors, signal, manoeuvre, every time.', zh: '沒錯。每次都看鏡、打燈、再操作。' },
          { speaker: 'Amy', gender: 'female', text: 'And take it slow on the reversing?', zh: '倒車時要慢慢來？' },
          { speaker: 'Instructor', gender: 'male', text: 'Nice and steady. They’d rather you were careful.', zh: '穩穩來。考官寧願你謹慎一點。' },
          { speaker: 'Amy', gender: 'female', text: 'Right. I can do this. I think.', zh: '好。我可以的。我想。' },
          { speaker: 'Instructor', gender: 'male', text: 'You can. Just drive like you do with me.', zh: '你可以的。就像平常跟我練習那樣開。' },
          { speaker: 'Amy', gender: 'female', text: 'Thank you. Right, here goes nothing!', zh: '謝謝你。好，豁出去了！' }
        ]
      },
      {
        id: 'drivingtest-theory',
        title: 'Revising for the theory test',
        titleZh: '準備筆試',
        description: 'Quizzing each other on the rules of the road.',
        lines: [
          { speaker: 'Joe', gender: 'male', text: 'Can you test me on a few hazard questions?', zh: '你能考我幾題危險預判嗎？' },
          { speaker: 'Sara', gender: 'female', text: 'Course. What does a flashing amber light mean?', zh: '當然。閃黃燈代表什麼？' },
          { speaker: 'Joe', gender: 'male', text: 'Give way to pedestrians on the crossing.', zh: '禮讓正在通過的行人。' },
          { speaker: 'Sara', gender: 'female', text: 'Spot on. What’s the limit in a built-up area?', zh: '完全正確。市區的速限是多少？' },
          { speaker: 'Joe', gender: 'male', text: 'Thirty, unless a sign says otherwise.', zh: '三十英里，除非標誌另有規定。' },
          { speaker: 'Sara', gender: 'female', text: 'Good. When should you use hazard lights?', zh: '很好。什麼時候該開警示燈？' },
          { speaker: 'Joe', gender: 'male', text: 'When you’ve broken down or to warn of a hold-up.', zh: '車子拋錨時，或警告後方有阻塞時。' },
          { speaker: 'Sara', gender: 'female', text: 'Perfect. You really know your stuff.', zh: '完美。你真的很懂。' },
          { speaker: 'Joe', gender: 'male', text: 'It’s the hazard perception clips I worry about.', zh: '我擔心的是那些危險感知影片。' },
          { speaker: 'Sara', gender: 'female', text: 'Just click as soon as you spot a developing hazard.', zh: '一發現可能形成的危險就點擊。' },
          { speaker: 'Joe', gender: 'male', text: 'Right. A few more clips and I’ll call it a night.', zh: '好。再練幾段我就收工了。' }
        ]
      },
      {
        id: 'drivingtest-passed',
        title: 'Passing the test',
        titleZh: '考過了',
        description: 'Hearing the good news at the end of the test.',
        lines: [
          { speaker: 'Examiner', gender: 'female', text: 'Right, if you’d like to switch the engine off.', zh: '好，請您把引擎熄火。' },
          { speaker: 'Amy', gender: 'female', text: 'Okay. So… how did I do?', zh: '好。那……我考得如何？' },
          { speaker: 'Examiner', gender: 'female', text: 'I’m pleased to tell you that you’ve passed.', zh: '我很高興地告訴您，您通過了。' },
          { speaker: 'Amy', gender: 'female', text: 'Oh my goodness, really? I can’t believe it!', zh: '我的天，真的嗎？我不敢相信！' },
          { speaker: 'Examiner', gender: 'female', text: 'You drove very well. Just three minor faults.', zh: '您開得很好。只有三個小扣分。' },
          { speaker: 'Amy', gender: 'female', text: 'I was sure I’d messed up the reversing.', zh: '我以為我倒車搞砸了。' },
          { speaker: 'Examiner', gender: 'female', text: 'Not at all, that was nicely controlled.', zh: '完全沒有，那部分控制得很好。' },
          { speaker: 'Amy', gender: 'female', text: 'Thank you so much. This is the best news!', zh: '太感謝您了。這是最棒的消息！' },
          { speaker: 'Examiner', gender: 'female', text: 'Congratulations. Here’s your pass certificate.', zh: '恭喜您。這是您的及格證明。' },
          { speaker: 'Amy', gender: 'female', text: 'I can’t wait to tell everyone!', zh: '我等不及告訴大家了！' },
          { speaker: 'Examiner', gender: 'female', text: 'Well deserved. Drive safely out there.', zh: '實至名歸。上路請小心駕駛。' }
        ]
      }
    ]
  },
  {
    id: 'quitting',
    title: 'Breaking a Bad Habit',
    titleZh: '戒除壞習慣',
    icon: '🚭',
    blurb: '戒菸、戒酒、改變習慣時的鼓勵對話',
    scenarios: [
      {
        id: 'quitting-smoking',
        title: 'Trying to quit smoking',
        titleZh: '試著戒菸',
        description: 'A friend supporting someone giving up cigarettes.',
        lines: [
          { speaker: 'Dan', gender: 'male', text: 'Day three without a cigarette. It’s torture.', zh: '戒菸第三天。簡直是折磨。' },
          { speaker: 'Holly', gender: 'female', text: 'Three days is brilliant! The worst is nearly over.', zh: '三天很厲害了！最難熬的快過去了。' },
          { speaker: 'Dan', gender: 'male', text: 'The cravings hit hardest after meals.', zh: '飯後的菸癮最難受。' },
          { speaker: 'Holly', gender: 'female', text: 'Try chewing gum or going for a quick walk.', zh: '試試嚼口香糖或出去快走一圈。' },
          { speaker: 'Dan', gender: 'male', text: 'Good idea. I keep reaching for my pocket.', zh: '好主意。我老是不自覺去摸口袋。' },
          { speaker: 'Holly', gender: 'female', text: 'That habit fades. Think of the money you’ll save.', zh: '那習慣會慢慢消失。想想你能省下的錢。' },
          { speaker: 'Dan', gender: 'male', text: 'True. It was costing me a fortune.', zh: '真的。以前花我一大筆錢。' },
          { speaker: 'Holly', gender: 'female', text: 'And you’ll breathe so much easier in a few weeks.', zh: '而且過幾週你呼吸會順暢很多。' },
          { speaker: 'Dan', gender: 'male', text: 'That’s what’s keeping me going, honestly.', zh: '老實說，這正是支撐我的動力。' },
          { speaker: 'Holly', gender: 'female', text: 'Just take it one day at a time. You’ve got this.', zh: '一天一天慢慢來。你做得到。' },
          { speaker: 'Dan', gender: 'male', text: 'Thanks. Having someone to talk to really helps.', zh: '謝謝。有人可以聊真的很有幫助。' }
        ]
      },
      {
        id: 'quitting-drinking',
        title: 'Cutting back on drinking',
        titleZh: '減少喝酒',
        description: 'Explaining a dry month to a mate at the pub.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'Just a lime and soda for me, cheers.', zh: '我點杯萊姆蘇打就好，謝啦。' },
          { speaker: 'Jay', gender: 'male', text: 'No pint? You feeling alright?', zh: '不喝啤酒？你還好吧？' },
          { speaker: 'Tom', gender: 'male', text: 'I’m doing a dry month, cutting back a bit.', zh: '我在進行戒酒一個月，稍微節制一下。' },
          { speaker: 'Jay', gender: 'male', text: 'Fair play. How’s it going so far?', zh: '佩服。目前進行得如何？' },
          { speaker: 'Tom', gender: 'male', text: 'Easier than I thought, and I’m sleeping better.', zh: '比想像中容易，而且我睡得更好。' },
          { speaker: 'Jay', gender: 'male', text: 'That’s the bit that always surprises people.', zh: '這部分總是讓人意外。' },
          { speaker: 'Tom', gender: 'male', text: 'And my head’s clearer in the mornings.', zh: '而且我早上頭腦更清楚。' },
          { speaker: 'Jay', gender: 'male', text: 'You’re putting me to shame with my pint here.', zh: '我端著這杯啤酒都覺得不好意思了。' },
          { speaker: 'Tom', gender: 'male', text: 'Ha, no pressure. I just fancied a reset.', zh: '哈，別有壓力。我只是想重新調整一下。' },
          { speaker: 'Jay', gender: 'male', text: 'Honestly, I might join you next month.', zh: '老實說，我下個月可能會跟你一起。' },
          { speaker: 'Tom', gender: 'male', text: 'Go on, do it with me. Misery loves company!', zh: '來吧，跟我一起。有伴比較好撐！' }
        ]
      },
      {
        id: 'quitting-screen',
        title: 'Less time on the phone',
        titleZh: '減少滑手機',
        description: 'Two friends trying to cut down their screen time.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'My screen time report this week was shocking.', zh: '我這週的螢幕使用報告嚇死我了。' },
          { speaker: 'Priya', gender: 'female', text: 'Ha, mine too. Hours just scrolling.', zh: '哈，我也是。光是滑就好幾個小時。' },
          { speaker: 'Eve', gender: 'female', text: 'I pick it up without even thinking.', zh: '我都不自覺就拿起手機。' },
          { speaker: 'Priya', gender: 'female', text: 'Try keeping it in another room in the evenings.', zh: '試試晚上把它放在別的房間。' },
          { speaker: 'Eve', gender: 'female', text: 'That’s a good shout. Out of sight, out of mind.', zh: '好建議。眼不見為淨。' },
          { speaker: 'Priya', gender: 'female', text: 'I’ve turned off most of my notifications too.', zh: '我也把大部分的通知關掉了。' },
          { speaker: 'Eve', gender: 'female', text: 'Does that actually help?', zh: '那真的有用嗎？' },
          { speaker: 'Priya', gender: 'female', text: 'Loads. There’s nothing pulling me back in.', zh: '幫很大。沒有東西把我拉回去看。' },
          { speaker: 'Eve', gender: 'female', text: 'I might read a book before bed instead.', zh: '我或許改成睡前看書。' },
          { speaker: 'Priya', gender: 'female', text: 'Now that’s a proper old-school habit.', zh: '這才是真正復古的好習慣。' },
          { speaker: 'Eve', gender: 'female', text: 'Right, phone’s going in the drawer tonight.', zh: '好，今晚手機要進抽屜了。' }
        ]
      }
    ]
  },
  {
    id: 'resolutions',
    title: 'New Year’s Resolutions',
    titleZh: '新年新希望',
    icon: '🎆',
    blurb: '立下目標、討論計畫、互相督促的對話',
    scenarios: [
      {
        id: 'resolutions-plans',
        title: 'Making resolutions',
        titleZh: '立下新希望',
        description: 'Friends sharing their goals for the new year.',
        lines: [
          { speaker: 'Holly', gender: 'female', text: 'So, have you made any resolutions this year?', zh: '那麼，你今年有立什麼新希望嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'The usual — eat better and save more money.', zh: '老套——吃健康一點、多存點錢。' },
          { speaker: 'Holly', gender: 'female', text: 'Snap! Although mine never last past January.', zh: '一樣！雖然我的撐不過一月。' },
          { speaker: 'Sam', gender: 'male', text: 'Ha, same. Maybe we should keep each other in check.', zh: '哈，我也是。也許我們該互相督促。' },
          { speaker: 'Holly', gender: 'female', text: 'Good idea. Smaller goals are easier to stick to.', zh: '好主意。目標小一點比較好堅持。' },
          { speaker: 'Sam', gender: 'male', text: 'True. I’ll aim to cook from scratch twice a week.', zh: '是啊。我打算一週親手煮兩次。' },
          { speaker: 'Holly', gender: 'female', text: 'That’s realistic. Mine’s to walk more.', zh: '這很實際。我的是多走路。' },
          { speaker: 'Sam', gender: 'male', text: 'We could go for a weekend walk together.', zh: '我們可以週末一起去散步。' },
          { speaker: 'Holly', gender: 'female', text: 'Love that. Accountability is half the battle.', zh: '太愛這主意了。有人督促就成功一半。' },
          { speaker: 'Sam', gender: 'male', text: 'Right, let’s check in at the end of the month.', zh: '好，月底我們互相確認進度。' },
          { speaker: 'Holly', gender: 'female', text: 'Deal. Here’s to actually keeping them this year!', zh: '一言為定。敬今年真的堅持下去！' }
        ]
      },
      {
        id: 'resolutions-check',
        title: 'A few weeks in',
        titleZh: '過了幾週後',
        description: 'Checking how the resolutions are holding up.',
        lines: [
          { speaker: 'Sam', gender: 'male', text: 'So, how are the resolutions holding up?', zh: '那麼，你的新希望撐得怎樣？' },
          { speaker: 'Holly', gender: 'female', text: 'Surprisingly well! I’ve walked every day.', zh: '出乎意料地好！我每天都有走路。' },
          { speaker: 'Sam', gender: 'male', text: 'No way, every single day?', zh: '不會吧，每一天？' },
          { speaker: 'Holly', gender: 'female', text: 'Even in the rain. I’m quite proud, actually.', zh: '連下雨天也是。其實我蠻得意的。' },
          { speaker: 'Sam', gender: 'male', text: 'You should be! I’ve slipped a bit, honestly.', zh: '你該得意！老實說我有點鬆懈了。' },
          { speaker: 'Holly', gender: 'female', text: 'Don’t beat yourself up. One slip isn’t failing.', zh: '別自責。鬆懈一次不算失敗。' },
          { speaker: 'Sam', gender: 'male', text: 'True. I just need to get back on track.', zh: '是啊。我只是得重新回到正軌。' },
          { speaker: 'Holly', gender: 'female', text: 'Start again tonight. No need to wait for Monday.', zh: '今晚就重新開始。不用等到星期一。' },
          { speaker: 'Sam', gender: 'male', text: 'You’re right. I’ll cook something proper later.', zh: '你說得對。我等等好好煮一頓。' },
          { speaker: 'Holly', gender: 'female', text: 'That’s the spirit. We’re only a few weeks in.', zh: '這就對了。我們才過了幾週而已。' },
          { speaker: 'Sam', gender: 'male', text: 'Thanks for the kick up the backside!', zh: '謝謝你踹我一腳、給我動力！' }
        ]
      },
      {
        id: 'resolutions-newyear',
        title: 'Seeing in the new year',
        titleZh: '迎接新年',
        description: 'Counting down at a New Year’s gathering.',
        lines: [
          { speaker: 'Jess', gender: 'female', text: 'Can you believe it’s almost midnight already?', zh: '你能相信都快午夜了嗎？' },
          { speaker: 'Owen', gender: 'male', text: 'The year’s flown by. Where did it go?', zh: '這一年過得好快。都跑哪去了？' },
          { speaker: 'Jess', gender: 'female', text: 'Has everyone got a drink for the countdown?', zh: '大家倒數的飲料都拿好了嗎？' },
          { speaker: 'Owen', gender: 'male', text: 'All sorted. The telly’s on for Big Ben.', zh: '都好了。電視開著看大笨鐘。' },
          { speaker: 'Jess', gender: 'female', text: 'What are you hoping for next year?', zh: '你對明年有什麼期望？' },
          { speaker: 'Owen', gender: 'male', text: 'Just health and happiness, really.', zh: '其實就是健康和快樂。' },
          { speaker: 'Jess', gender: 'female', text: 'Couldn’t agree more. Here it comes!', zh: '完全同意。要來了！' },
          { speaker: 'Owen', gender: 'male', text: 'Ten, nine, eight… get ready, everyone!', zh: '十、九、八……大家準備好！' },
          { speaker: 'Jess', gender: 'female', text: 'Three, two, one — Happy New Year!', zh: '三、二、一——新年快樂！' },
          { speaker: 'Owen', gender: 'male', text: 'Happy New Year! Here’s to a great one.', zh: '新年快樂！敬美好的一年。' },
          { speaker: 'Jess', gender: 'female', text: 'Right, who knows the words to Auld Lang Syne?', zh: '好，誰會唱〈友誼萬歲〉的歌詞？' }
        ]
      }
    ]
  },
  {
    id: 'lending',
    title: 'Lending & Borrowing',
    titleZh: '借錢還錢',
    icon: '💷',
    blurb: '跟朋友借錢、還錢、談錢時的尷尬對話',
    scenarios: [
      {
        id: 'lending-ask',
        title: 'Asking to borrow money',
        titleZh: '開口借錢',
        description: 'Awkwardly asking a friend for a short-term loan.',
        lines: [
          { speaker: 'Dan', gender: 'male', text: 'This is awkward, but could I ask you a favour?', zh: '這有點難開口，但我能請你幫個忙嗎？' },
          { speaker: 'Holly', gender: 'female', text: 'Of course. What’s up?', zh: '當然。怎麼了？' },
          { speaker: 'Dan', gender: 'male', text: 'Money’s a bit tight till payday. Could you lend me fifty?', zh: '發薪前手頭有點緊。你能借我五十嗎？' },
          { speaker: 'Holly', gender: 'female', text: 'No problem at all. When do you get paid?', zh: '完全沒問題。你什麼時候發薪？' },
          { speaker: 'Dan', gender: 'male', text: 'End of next week. I’ll pay you straight back.', zh: '下週底。我會馬上還你。' },
          { speaker: 'Holly', gender: 'female', text: 'There’s no rush, honestly.', zh: '老實說不用急。' },
          { speaker: 'Dan', gender: 'male', text: 'I really appreciate it. I hate having to ask.', zh: '真的很感謝。我很討厭開口求人。' },
          { speaker: 'Holly', gender: 'female', text: 'Don’t be daft, that’s what friends are for.', zh: '別傻了，朋友就是幹這個的。' },
          { speaker: 'Dan', gender: 'male', text: 'I’ll transfer it the second I’m paid.', zh: '我一發薪就馬上轉給你。' },
          { speaker: 'Holly', gender: 'female', text: 'Whenever suits. I know you’re good for it.', zh: '你方便就好。我知道你一定會還。' },
          { speaker: 'Dan', gender: 'male', text: 'Thank you, genuinely. You’ve saved my bacon.', zh: '真心謝謝你。你救了我一命。' }
        ]
      },
      {
        id: 'lending-repay',
        title: 'Paying it back',
        titleZh: '把錢還清',
        description: 'Returning the money and saying thanks.',
        lines: [
          { speaker: 'Dan', gender: 'male', text: 'Right, I’ve just transferred you that fifty.', zh: '好，我剛把那五十轉給你了。' },
          { speaker: 'Holly', gender: 'female', text: 'Oh, ta. There really was no rush, you know.', zh: '喔，謝啦。真的不用急的。' },
          { speaker: 'Dan', gender: 'male', text: 'I know, but I always like to pay people back quickly.', zh: '我知道，但我總喜歡盡快還錢。' },
          { speaker: 'Holly', gender: 'female', text: 'You’re very good like that.', zh: '你這點很不錯。' },
          { speaker: 'Dan', gender: 'male', text: 'Let me get the coffees today, as a thank you.', zh: '今天的咖啡我請，當作謝禮。' },
          { speaker: 'Holly', gender: 'female', text: 'You don’t have to, but I won’t say no!', zh: '你不必這樣，但我不會拒絕！' },
          { speaker: 'Dan', gender: 'male', text: 'It’s the least I can do. You really helped me out.', zh: '這是我至少能做的。你真的幫了我大忙。' },
          { speaker: 'Holly', gender: 'female', text: 'Honestly, it was nothing. Glad I could help.', zh: '真的，小事一樁。很高興幫得上忙。' },
          { speaker: 'Dan', gender: 'male', text: 'Has the transfer come through okay?', zh: '轉帳有順利到帳嗎？' },
          { speaker: 'Holly', gender: 'female', text: 'Just pinged through, yeah. All square.', zh: '剛收到通知，到了。兩清了。' },
          { speaker: 'Dan', gender: 'male', text: 'Brilliant. Right, what are you having?', zh: '太好了。好，你要喝什麼？' }
        ]
      },
      {
        id: 'lending-tools',
        title: 'Borrowing something',
        titleZh: '借東西',
        description: 'Borrowing a drill from a neighbour.',
        lines: [
          { speaker: 'Joe', gender: 'male', text: 'Sorry to bother you — could I borrow your drill?', zh: '抱歉打擾——我能跟你借一下電鑽嗎？' },
          { speaker: 'Roy', gender: 'male', text: 'Course you can. Putting up some shelves?', zh: '當然可以。要裝層架嗎？' },
          { speaker: 'Joe', gender: 'male', text: 'Yeah, just a couple in the spare room.', zh: '對，客房要裝幾個。' },
          { speaker: 'Roy', gender: 'male', text: 'Take the bits as well — you’ll need them.', zh: '把鑽頭也帶走——你會需要。' },
          { speaker: 'Joe', gender: 'male', text: 'That’s really good of you. I’ll be careful with it.', zh: '你人真好。我會小心使用。' },
          { speaker: 'Roy', gender: 'male', text: 'No bother. Bring it back whenever you’re done.', zh: '別客氣。用完隨時還我就行。' },
          { speaker: 'Joe', gender: 'male', text: 'Will do. I should be finished by this afternoon.', zh: '會的。我下午之前應該就弄完。' },
          { speaker: 'Roy', gender: 'male', text: 'No rush at all. The battery’s fully charged.', zh: '完全不急。電池是滿電的。' },
          { speaker: 'Joe', gender: 'male', text: 'Perfect. Shout if you ever need anything back.', zh: '太好了。你哪天需要借什麼也儘管說。' },
          { speaker: 'Roy', gender: 'male', text: 'I might take you up on that ladder of yours!', zh: '我搞不好真的會跟你借那把梯子！' },
          { speaker: 'Joe', gender: 'male', text: 'Any time, mate. Cheers again.', zh: '隨時，老兄。再次謝啦。' }
        ]
      }
    ]
  },
  {
    id: 'takeaway',
    title: 'Ordering a Takeaway',
    titleZh: '訂外送',
    icon: '🥡',
    blurb: '點外送、外帶、解決晚餐的日常對話',
    scenarios: [
      {
        id: 'takeaway-phone',
        title: 'Ordering over the phone',
        titleZh: '電話點餐',
        description: 'Phoning the local Indian for a delivery.',
        lines: [
          { speaker: 'Staff', gender: 'male', text: 'Good evening, Spice Garden. Takeaway or delivery?', zh: '晚安，香料花園。外帶還是外送？' },
          { speaker: 'Eve', gender: 'female', text: 'Delivery, please, to 14 Mill Road.', zh: '外送，謝謝，送到磨坊路 14 號。' },
          { speaker: 'Staff', gender: 'male', text: 'Lovely. What can I get you?', zh: '好的。要點什麼？' },
          { speaker: 'Eve', gender: 'female', text: 'A chicken tikka masala and a peshwari naan.', zh: '一份奶油雞咖哩和一個甜餡烤餅。' },
          { speaker: 'Staff', gender: 'male', text: 'Mild, medium or hot on the curry?', zh: '咖哩要小辣、中辣還是大辣？' },
          { speaker: 'Eve', gender: 'female', text: 'Medium, please. And a portion of rice.', zh: '中辣，謝謝。再加一份飯。' },
          { speaker: 'Staff', gender: 'male', text: 'Pilau or plain?', zh: '香料飯還是白飯？' },
          { speaker: 'Eve', gender: 'female', text: 'Pilau rice, please. That’s everything.', zh: '香料飯，謝謝。就這些。' },
          { speaker: 'Staff', gender: 'male', text: 'That’s sixteen pounds. Roughly forty minutes.', zh: '一共十六英鎊。大約四十分鐘。' },
          { speaker: 'Eve', gender: 'female', text: 'Perfect. Can I pay the driver by card?', zh: '太好了。我可以付外送員刷卡嗎？' },
          { speaker: 'Staff', gender: 'male', text: 'Of course. It’ll be with you shortly.', zh: '當然。很快就送到。' }
        ]
      },
      {
        id: 'takeaway-decide',
        title: 'Deciding what to get',
        titleZh: '決定要吃什麼',
        description: 'The age-old struggle of choosing a takeaway.',
        lines: [
          { speaker: 'Sam', gender: 'male', text: 'I can’t be bothered to cook. Shall we get a takeaway?', zh: '我懶得煮。我們叫外送吧？' },
          { speaker: 'Eve', gender: 'female', text: 'Go on then. What do you fancy?', zh: '好啊。你想吃什麼？' },
          { speaker: 'Sam', gender: 'male', text: 'I don’t mind. Chinese, Indian, or a pizza?', zh: '我都行。中式、印度，還是披薩？' },
          { speaker: 'Eve', gender: 'female', text: 'We had pizza last week. Chinese?', zh: '我們上週才吃披薩。中式？' },
          { speaker: 'Sam', gender: 'male', text: 'Perfect. The place on the corner’s really good.', zh: '完美。轉角那家很好吃。' },
          { speaker: 'Eve', gender: 'female', text: 'Shall we split a couple of dishes to share?', zh: '我們要不要點幾道菜一起分？' },
          { speaker: 'Sam', gender: 'male', text: 'Good shout. Sweet and sour, and some noodles?', zh: '好主意。糖醋，再加點麵？' },
          { speaker: 'Eve', gender: 'female', text: 'Yes, and prawn crackers — got to be done.', zh: '好，還有蝦餅——這必點。' },
          { speaker: 'Sam', gender: 'male', text: 'Obviously. Shall I order on the app?', zh: '當然。我用 App 點好嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Go for it. I’ll sort out the drinks.', zh: '去吧。我來準備飲料。' },
          { speaker: 'Sam', gender: 'male', text: 'Ordered. Forty minutes — perfect timing for the film.', zh: '點好了。四十分鐘——剛好配電影。' }
        ]
      },
      {
        id: 'takeaway-collect',
        title: 'Collecting a takeaway',
        titleZh: '取外帶',
        description: 'Picking up a fish and chips order.',
        lines: [
          { speaker: 'Joe', gender: 'male', text: 'Hiya, I’m collecting an order under Joe.', zh: '嗨，我來取 Joe 的餐。' },
          { speaker: 'Staff', gender: 'female', text: 'Won’t be a sec, just frying the chips fresh.', zh: '馬上好，薯條正在現炸。' },
          { speaker: 'Joe', gender: 'male', text: 'No rush. Two cod and chips, wasn’t it?', zh: '不急。兩份鱈魚薯條，對吧？' },
          { speaker: 'Staff', gender: 'female', text: 'That’s right. Salt and vinegar on both?', zh: '沒錯。兩份都加鹽和醋嗎？' },
          { speaker: 'Joe', gender: 'male', text: 'Yes please. And a couple of those pickled onions.', zh: '好，麻煩了。再加幾顆那種醃洋蔥。' },
          { speaker: 'Staff', gender: 'female', text: 'Anything to drink with that?', zh: '需要飲料嗎？' },
          { speaker: 'Joe', gender: 'male', text: 'Just two cans of pop, thanks.', zh: '兩罐汽水就好，謝謝。' },
          { speaker: 'Staff', gender: 'female', text: 'There you go. Mind, the chips are piping hot.', zh: '給您。小心，薯條很燙。' },
          { speaker: 'Joe', gender: 'male', text: 'Smells amazing. How much altogether?', zh: '聞起來超香。總共多少？' },
          { speaker: 'Staff', gender: 'female', text: 'That’s thirteen pounds, love.', zh: '一共十三英鎊，親愛的。' },
          { speaker: 'Joe', gender: 'male', text: 'There you go, keep the change. Cheers!', zh: '給您，零錢不用找了。謝啦！' }
        ]
      }
    ]
  }
]
