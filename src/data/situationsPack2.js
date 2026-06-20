// Situations pack 2 — practical everyday errands & life admin (doctor, renting,
// travel, restaurant, banking, interview, dating, hairdresser). Same shape as
// pack 1: 3 dialogues per category, 11 lines each, alternating voices.

export const PACK2 = [
  {
    id: 'doctor',
    title: 'At the Doctor’s',
    titleZh: '看醫生',
    icon: '🩺',
    blurb: '預約、描述症狀、看診時實用的英式說法',
    scenarios: [
      {
        id: 'doctor-booking',
        title: 'Booking an appointment',
        titleZh: '預約看診',
        description: 'Phoning the GP surgery to get seen.',
        lines: [
          { speaker: 'Receptionist', gender: 'female', text: 'Good morning, Oakfield Surgery, how can I help?', zh: '早安，這裡是橡田診所，有什麼能幫您？' },
          { speaker: 'Mark', gender: 'male', text: 'Hi, I’d like to book an appointment to see a GP, please.', zh: '您好，我想預約看一位家庭醫師。' },
          { speaker: 'Receptionist', gender: 'female', text: 'Of course. Is it something urgent, or a routine appointment?', zh: '好的。是緊急狀況，還是一般的例行看診？' },
          { speaker: 'Mark', gender: 'male', text: 'Not urgent, but I’ve had a nasty cough for a couple of weeks.', zh: '不緊急，但我咳嗽咳得很厲害，已經兩週了。' },
          { speaker: 'Receptionist', gender: 'female', text: 'Right. We’ve had a cancellation on Thursday at half nine.', zh: '好。我們週四九點半剛好有人取消。' },
          { speaker: 'Mark', gender: 'male', text: 'Thursday morning works for me, thanks.', zh: '週四早上可以，謝謝。' },
          { speaker: 'Receptionist', gender: 'female', text: 'Lovely. Can I take your name and date of birth?', zh: '好的。可以給我您的姓名和出生日期嗎？' },
          { speaker: 'Mark', gender: 'male', text: 'Mark Reilly, the third of May, nineteen ninety.', zh: 'Mark Reilly，一九九〇年五月三日。' },
          { speaker: 'Receptionist', gender: 'female', text: 'Got you. You’ll be with Dr Patel. Is that alright?', zh: '找到了。會由 Patel 醫師為您看診，可以嗎？' },
          { speaker: 'Mark', gender: 'male', text: 'That’s fine. Do I need to do anything beforehand?', zh: '沒問題。我需要事先準備什麼嗎？' },
          { speaker: 'Receptionist', gender: 'female', text: 'Just arrive five minutes early to check in. See you Thursday.', zh: '只要提早五分鐘來報到就好。週四見。' }
        ]
      },
      {
        id: 'doctor-symptoms',
        title: 'Describing symptoms',
        titleZh: '描述症狀',
        description: 'Explaining what’s wrong to the GP.',
        lines: [
          { speaker: 'Dr Patel', gender: 'male', text: 'Come in, take a seat. What seems to be the problem?', zh: '請進，請坐。哪裡不舒服呢？' },
          { speaker: 'Emma', gender: 'female', text: 'I’ve been feeling really run down and dizzy lately.', zh: '我最近覺得很虛弱，還會頭暈。' },
          { speaker: 'Dr Patel', gender: 'male', text: 'I see. How long has this been going on for?', zh: '了解。這情況持續多久了？' },
          { speaker: 'Emma', gender: 'female', text: 'About ten days now. It’s worse when I stand up quickly.', zh: '大概十天了。我快速站起來時會更嚴重。' },
          { speaker: 'Dr Patel', gender: 'male', text: 'Any headaches, or changes in your appetite?', zh: '有頭痛，或食慾上的改變嗎？' },
          { speaker: 'Emma', gender: 'female', text: 'A few headaches, and I’ve not been eating much, to be honest.', zh: '有幾次頭痛，老實說我也吃得不多。' },
          { speaker: 'Dr Patel', gender: 'male', text: 'Right. I’d like to check your blood pressure and run a blood test.', zh: '好。我想幫您量血壓，再做個血液檢查。' },
          { speaker: 'Emma', gender: 'female', text: 'Is it anything to worry about, do you think?', zh: '您覺得是需要擔心的問題嗎？' },
          { speaker: 'Dr Patel', gender: 'male', text: 'Most likely you’re a bit low on iron, but let’s rule things out.', zh: '很可能只是有點缺鐵，但我們先排除其他可能。' },
          { speaker: 'Emma', gender: 'female', text: 'That’s reassuring. When will I get the results?', zh: '這讓我安心多了。檢查結果什麼時候會出來？' },
          { speaker: 'Dr Patel', gender: 'male', text: 'Within a few days. The surgery will give you a ring.', zh: '幾天內。診所會打電話通知您。' }
        ]
      },
      {
        id: 'doctor-pharmacy',
        title: 'Picking up a prescription',
        titleZh: '到藥局領藥',
        description: 'Collecting medication at the pharmacy.',
        lines: [
          { speaker: 'Liam', gender: 'male', text: 'Hi, I’m here to pick up a prescription under Hughes.', zh: '您好，我來領 Hughes 的處方藥。' },
          { speaker: 'Pharmacist', gender: 'female', text: 'Let me have a look. Is that for the antibiotics?', zh: '我看一下。是抗生素那張嗎？' },
          { speaker: 'Liam', gender: 'male', text: 'That’s the one. How often do I need to take them?', zh: '就是那張。我需要多久吃一次？' },
          { speaker: 'Pharmacist', gender: 'female', text: 'Three times a day with food, and finish the whole course.', zh: '一天三次、隨餐服用，而且整個療程要吃完。' },
          { speaker: 'Liam', gender: 'male', text: 'Even if I start feeling better halfway through?', zh: '就算吃到一半覺得好了也要吃完？' },
          { speaker: 'Pharmacist', gender: 'female', text: 'Yes, definitely. Otherwise the infection can come back.', zh: '對，一定要。不然感染可能會復發。' },
          { speaker: 'Liam', gender: 'male', text: 'Got it. Are there any side effects I should know about?', zh: '了解。有什麼我該注意的副作用嗎？' },
          { speaker: 'Pharmacist', gender: 'female', text: 'They can upset your stomach, so avoid alcohol while on them.', zh: '它們可能會讓你腸胃不適，所以服藥期間別喝酒。' },
          { speaker: 'Liam', gender: 'male', text: 'No problem. Do I pay for this, or is it free?', zh: '沒問題。這個要付費還是免費的？' },
          { speaker: 'Pharmacist', gender: 'female', text: 'There’s a standard prescription charge unless you’re exempt.', zh: '除非您符合減免資格，否則要付標準的處方費。' },
          { speaker: 'Liam', gender: 'male', text: 'I’ll pay by card. Cheers for your help.', zh: '我刷卡。謝謝您的幫忙。' }
        ]
      }
    ]
  },
  {
    id: 'renting',
    title: 'Renting a Flat',
    titleZh: '租屋找房',
    icon: '🏠',
    blurb: '看房、問租金、簽約時道地的英式用語',
    scenarios: [
      {
        id: 'renting-viewing',
        title: 'A flat viewing',
        titleZh: '看房',
        description: 'An estate agent showing a tenant around.',
        lines: [
          { speaker: 'Agent', gender: 'male', text: 'So this is the lounge — nice and bright, isn’t it?', zh: '這是客廳——很明亮吧？' },
          { speaker: 'Sophie', gender: 'female', text: 'It is. Are the bills included in the rent?', zh: '是啊。租金有含水電費嗎？' },
          { speaker: 'Agent', gender: 'male', text: 'Water is, but you’ll cover gas, electric and council tax.', zh: '含水費，但瓦斯、電費和地方稅要您自付。' },
          { speaker: 'Sophie', gender: 'female', text: 'Right. And how much is the deposit?', zh: '好。那押金是多少？' },
          { speaker: 'Agent', gender: 'male', text: 'Five weeks’ rent, held in a government-backed scheme.', zh: '五週的租金，會存在政府認證的保管方案裡。' },
          { speaker: 'Sophie', gender: 'female', text: 'Good to know. Is it furnished or unfurnished?', zh: '了解。這是附家具還是空屋？' },
          { speaker: 'Agent', gender: 'male', text: 'Part-furnished — white goods stay, but bring your own sofa.', zh: '半附家具——大型家電留著，但沙發要自備。' },
          { speaker: 'Sophie', gender: 'female', text: 'And what’s the situation with parking?', zh: '那停車的狀況怎麼樣？' },
          { speaker: 'Agent', gender: 'male', text: 'There’s a permit for one car. The street’s pretty quiet.', zh: '有一個停車許可證的名額。這條街蠻安靜的。' },
          { speaker: 'Sophie', gender: 'female', text: 'I really like it. How long is the tenancy?', zh: '我很喜歡。租約是多長？' },
          { speaker: 'Agent', gender: 'male', text: 'Twelve months, then it rolls on month to month.', zh: '十二個月，之後就按月續租。' }
        ]
      },
      {
        id: 'renting-issue',
        title: 'Reporting a problem to the landlord',
        titleZh: '向房東報修',
        description: 'A tenant ringing about a repair.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'Hi, it’s Tom from flat 4. I’ve got a bit of an issue.', zh: '您好，我是 4 號公寓的 Tom。有個小問題。' },
          { speaker: 'Landlord', gender: 'female', text: 'Oh dear, what’s happened?', zh: '哎呀，怎麼了？' },
          { speaker: 'Tom', gender: 'male', text: 'The boiler’s packed in — we’ve got no hot water at all.', zh: '鍋爐壞了——我們完全沒有熱水。' },
          { speaker: 'Landlord', gender: 'female', text: 'That’s no good, especially in this weather.', zh: '這可不行，尤其是這種天氣。' },
          { speaker: 'Tom', gender: 'male', text: 'Exactly. Is there any chance of getting it looked at today?', zh: '就是啊。有可能今天找人來看嗎？' },
          { speaker: 'Landlord', gender: 'female', text: 'I’ll call the plumber straight away and see what he says.', zh: '我馬上打給水電工，問問他怎麼說。' },
          { speaker: 'Tom', gender: 'male', text: 'Brilliant, thanks. There’s also a damp patch in the bathroom.', zh: '太好了，謝謝。還有浴室有一塊潮濕發霉的地方。' },
          { speaker: 'Landlord', gender: 'female', text: 'Send me a photo and I’ll get someone to take a look.', zh: '傳張照片給我，我會找人來看看。' },
          { speaker: 'Tom', gender: 'male', text: 'Will do. Sorry to bombard you with problems.', zh: '好的。抱歉一次丟給您這麼多問題。' },
          { speaker: 'Landlord', gender: 'female', text: 'Not at all, that’s what I’m here for. Keep me posted.', zh: '別這麼說，這本來就是我該處理的。有狀況隨時跟我說。' },
          { speaker: 'Tom', gender: 'male', text: 'I appreciate it. I’ll let you know when the plumber’s been.', zh: '很感謝。水電工來過後我再通知您。' }
        ]
      },
      {
        id: 'renting-flatmate',
        title: 'Looking for a flatmate',
        titleZh: '找室友',
        description: 'Showing a potential flatmate around a house share.',
        lines: [
          { speaker: 'Becca', gender: 'female', text: 'Thanks for coming round. This would be your room.', zh: '謝謝你過來。這間就是你的房間。' },
          { speaker: 'Joe', gender: 'male', text: 'It’s a good size. How many of you live here?', zh: '空間蠻大的。你們這裡住幾個人？' },
          { speaker: 'Becca', gender: 'female', text: 'Three of us, all pretty easy-going and tidy-ish.', zh: '我們三個，大家都蠻隨和，也算愛乾淨。' },
          { speaker: 'Joe', gender: 'male', text: 'Nice. How do you split the bills?', zh: '不錯。帳單你們怎麼分？' },
          { speaker: 'Becca', gender: 'female', text: 'We pop everything in a kitty and split it four ways.', zh: '我們把所有費用集中起來，再四個人均分。' },
          { speaker: 'Joe', gender: 'male', text: 'Sounds fair. Is the bathroom shared?', zh: '聽起來很公平。浴室是共用的嗎？' },
          { speaker: 'Becca', gender: 'female', text: 'There are two, so there’s never really a queue in the morning.', zh: '有兩間，所以早上基本上不用排隊。' },
          { speaker: 'Joe', gender: 'male', text: 'Great. What’s the rule on having people over?', zh: '太好了。帶朋友來過夜有什麼規定嗎？' },
          { speaker: 'Becca', gender: 'female', text: 'All fine, just give us a heads-up if it’s a big do.', zh: '都可以，只要是辦大型聚會先知會我們一聲就好。' },
          { speaker: 'Joe', gender: 'male', text: 'Reasonable. Honestly, I think I’d fit right in.', zh: '很合理。老實說，我覺得我會很融入。' },
          { speaker: 'Becca', gender: 'female', text: 'Lovely. I’ll have a chat with the others and let you know.', zh: '太好了。我跟其他人聊一下再回覆你。' }
        ]
      }
    ]
  },
  {
    id: 'airport',
    title: 'Airport & Travel',
    titleZh: '機場與旅行',
    icon: '✈️',
    blurb: '報到、安檢、入境時實用的旅行英語',
    scenarios: [
      {
        id: 'airport-checkin',
        title: 'Checking in',
        titleZh: '辦理報到',
        description: 'At the airline check-in desk.',
        lines: [
          { speaker: 'Agent', gender: 'female', text: 'Good morning. Where are you flying to today?', zh: '早安。請問您今天要飛往哪裡？' },
          { speaker: 'Raj', gender: 'male', text: 'To Edinburgh. Here’s my passport and booking.', zh: '愛丁堡。這是我的護照和訂位資料。' },
          { speaker: 'Agent', gender: 'female', text: 'Lovely. Are you checking any bags in today?', zh: '好的。您今天有要托運行李嗎？' },
          { speaker: 'Raj', gender: 'male', text: 'Just the one. Is it within the weight limit?', zh: '就一件。它有在重量限制內嗎？' },
          { speaker: 'Agent', gender: 'female', text: 'Pop it on the scales. Twenty-one kilos — you’re just fine.', zh: '放上磅秤吧。二十一公斤——剛好沒問題。' },
          { speaker: 'Raj', gender: 'male', text: 'Phew. Could I get a window seat, if there are any?', zh: '呼。如果還有的話，可以給我靠窗的位子嗎？' },
          { speaker: 'Agent', gender: 'female', text: 'Of course. I’ve put you in 14A, by the window.', zh: '當然。我幫您安排在 14A，靠窗。' },
          { speaker: 'Raj', gender: 'male', text: 'Perfect. What time does boarding start?', zh: '太好了。幾點開始登機？' },
          { speaker: 'Agent', gender: 'female', text: 'Boarding is at twelve forty from gate twenty-two.', zh: '十二點四十在 22 號登機門開始登機。' },
          { speaker: 'Raj', gender: 'male', text: 'Great. How long should I allow for security?', zh: '好。安檢我大概要預留多久時間？' },
          { speaker: 'Agent', gender: 'female', text: 'It’s fairly quiet, so give yourself half an hour. Safe travels!', zh: '今天人不多，留半小時就好。旅途愉快！' }
        ]
      },
      {
        id: 'airport-security',
        title: 'Going through security',
        titleZh: '通過安檢',
        description: 'At the airport security checkpoint.',
        lines: [
          { speaker: 'Officer', gender: 'male', text: 'Next, please. Pop any liquids and laptops in the tray.', zh: '下一位。請把所有液體和筆電放進托盤。' },
          { speaker: 'Anna', gender: 'female', text: 'Do I need to take my belt off as well?', zh: '我皮帶也需要解下來嗎？' },
          { speaker: 'Officer', gender: 'male', text: 'Yes please, and your jacket and any coins.', zh: '麻煩您，還有外套和身上的零錢。' },
          { speaker: 'Anna', gender: 'female', text: 'My liquids are all under a hundred mil, is that right?', zh: '我的液體都在 100 毫升以下，這樣對嗎？' },
          { speaker: 'Officer', gender: 'male', text: 'That’s right, in a clear bag. Step through when the light’s green.', zh: '對，要裝在透明袋裡。燈號變綠時請通過。' },
          { speaker: 'Anna', gender: 'female', text: 'Like this? Oh, it’s beeped.', zh: '像這樣嗎？喔，它嗶了一聲。' },
          { speaker: 'Officer', gender: 'male', text: 'No worries, it’s probably your watch. Just step aside for me.', zh: '別擔心，可能是您的手錶。請到旁邊一下。' },
          { speaker: 'Anna', gender: 'female', text: 'Of course. Sorry, I forgot I had it on.', zh: '好的。抱歉，我忘了我戴著它。' },
          { speaker: 'Officer', gender: 'male', text: 'Happens all the time. Arms out, this won’t take a second.', zh: '常有的事。手張開，一下子就好。' },
          { speaker: 'Anna', gender: 'female', text: 'Am I all clear now?', zh: '我現在可以了嗎？' },
          { speaker: 'Officer', gender: 'male', text: 'All done. Grab your things and enjoy your flight.', zh: '都好了。拿好您的東西，祝您旅途愉快。' }
        ]
      },
      {
        id: 'airport-immigration',
        title: 'At passport control',
        titleZh: '入境查驗',
        description: 'Arriving and going through immigration.',
        lines: [
          { speaker: 'Officer', gender: 'female', text: 'Good afternoon. Passport, please.', zh: '午安。請出示護照。' },
          { speaker: 'Ben', gender: 'male', text: 'Here you are.', zh: '在這裡。' },
          { speaker: 'Officer', gender: 'female', text: 'What’s the purpose of your visit?', zh: '您此行的目的是什麼？' },
          { speaker: 'Ben', gender: 'male', text: 'I’m here on holiday for a couple of weeks.', zh: '我來度假，待兩個禮拜。' },
          { speaker: 'Officer', gender: 'female', text: 'And where will you be staying?', zh: '您會住在哪裡？' },
          { speaker: 'Ben', gender: 'male', text: 'At a hotel in the city centre, then with friends.', zh: '先住市中心的飯店，之後住朋友家。' },
          { speaker: 'Officer', gender: 'female', text: 'Have you got a return ticket booked?', zh: '您訂好回程機票了嗎？' },
          { speaker: 'Ben', gender: 'male', text: 'Yes, I fly back on the twenty-eighth.', zh: '有，我二十八號飛回去。' },
          { speaker: 'Officer', gender: 'female', text: 'Lovely. Anything to declare, or carrying food?', zh: '好的。有任何需要申報的物品，或攜帶食物嗎？' },
          { speaker: 'Ben', gender: 'male', text: 'Nothing to declare, just my own clothes and bits.', zh: '沒有需要申報的，就只有自己的衣物和雜物。' },
          { speaker: 'Officer', gender: 'female', text: 'That’s great. Enjoy your stay. Next, please.', zh: '很好。祝您玩得愉快。下一位。' }
        ]
      }
    ]
  },
  {
    id: 'restaurant',
    title: 'At a Restaurant',
    titleZh: '餐廳點餐',
    icon: '🍽️',
    blurb: '訂位、點餐、結帳時自然又禮貌的說法',
    scenarios: [
      {
        id: 'restaurant-ordering',
        title: 'Ordering a meal',
        titleZh: '點餐',
        description: 'A waiter taking a couple’s order.',
        lines: [
          { speaker: 'Waiter', gender: 'male', text: 'Evening. Are you ready to order, or do you need a minute?', zh: '晚安。請問可以點餐了嗎，還是需要再看一下？' },
          { speaker: 'Claire', gender: 'female', text: 'I think we’re ready. What would you recommend?', zh: '我想我們可以了。您會推薦什麼呢？' },
          { speaker: 'Waiter', gender: 'male', text: 'The sea bass is lovely, and the steak’s very popular.', zh: '鱸魚很不錯，牛排也很受歡迎。' },
          { speaker: 'Claire', gender: 'female', text: 'I’ll have the sea bass, please. Does it come with sides?', zh: '那我點鱸魚，謝謝。有附配菜嗎？' },
          { speaker: 'Waiter', gender: 'male', text: 'It comes with new potatoes and seasonal veg.', zh: '會附小馬鈴薯和當季蔬菜。' },
          { speaker: 'Claire', gender: 'female', text: 'Perfect. And could I swap the veg for a side salad?', zh: '太好了。我可以把蔬菜換成一份沙拉嗎？' },
          { speaker: 'Waiter', gender: 'male', text: 'No problem at all. And for you, sir?', zh: '完全沒問題。先生您呢？' },
          { speaker: 'Greg', gender: 'male', text: 'The steak for me, medium-rare, please.', zh: '我要牛排，三分熟，謝謝。' },
          { speaker: 'Waiter', gender: 'male', text: 'Lovely choice. Any drinks while you wait?', zh: '好選擇。等餐期間需要飲料嗎？' },
          { speaker: 'Greg', gender: 'male', text: 'A bottle of the house red would be great, cheers.', zh: '來一瓶招牌紅酒就好，謝謝。' },
          { speaker: 'Waiter', gender: 'male', text: 'Coming right up. I’ll bring some bread over too.', zh: '馬上來。我也順便幫您送點麵包過來。' }
        ]
      },
      {
        id: 'restaurant-complaint',
        title: 'A problem with the food',
        titleZh: '對餐點有意見',
        description: 'Politely raising an issue with a dish.',
        lines: [
          { speaker: 'Nadia', gender: 'female', text: 'Excuse me, sorry to bother you — could I have a quick word?', zh: '不好意思，抱歉打擾——能跟您說一下嗎？' },
          { speaker: 'Waiter', gender: 'male', text: 'Of course, is everything alright with your meal?', zh: '當然，您的餐點都還好嗎？' },
          { speaker: 'Nadia', gender: 'female', text: 'I’m afraid my chicken’s a bit undercooked in the middle.', zh: '恐怕我的雞肉中間有點沒熟。' },
          { speaker: 'Waiter', gender: 'male', text: 'Oh, I’m so sorry about that. Let me take it back for you.', zh: '喔，真的很抱歉。我幫您把它收回去。' },
          { speaker: 'Nadia', gender: 'female', text: 'Thank you. Everything else has been lovely, honestly.', zh: '謝謝您。老實說其他都很棒。' },
          { speaker: 'Waiter', gender: 'male', text: 'That’s kind of you to say. I’ll get the kitchen to redo it.', zh: '您這麼說真客氣。我請廚房重做一份。' },
          { speaker: 'Nadia', gender: 'female', text: 'No rush — my friend can carry on with hers.', zh: '不急——我朋友可以先繼續吃她的。' },
          { speaker: 'Waiter', gender: 'male', text: 'I’ll be as quick as I can. Can I top up your drinks?', zh: '我會盡快。需要幫您加點飲料嗎？' },
          { speaker: 'Nadia', gender: 'female', text: 'That would be lovely, thank you.', zh: '那太好了，謝謝您。' },
          { speaker: 'Waiter', gender: 'male', text: 'And I’ll have a word with the manager about the bill.', zh: '我也會跟經理說一下帳單的事。' },
          { speaker: 'Nadia', gender: 'female', text: 'That’s really good of you. Thanks for sorting it.', zh: '您真是太貼心了。謝謝您幫忙處理。' }
        ]
      },
      {
        id: 'restaurant-bill',
        title: 'Paying the bill',
        titleZh: '結帳買單',
        description: 'Sorting out the bill at the end of the meal.',
        lines: [
          { speaker: 'Greg', gender: 'male', text: 'Could we get the bill when you have a sec, please?', zh: '您有空時可以幫我們結帳嗎？' },
          { speaker: 'Waiter', gender: 'male', text: 'Of course. Did you enjoy everything?', zh: '當然。一切都還滿意嗎？' },
          { speaker: 'Claire', gender: 'female', text: 'It was gorgeous, thank you. The dessert especially.', zh: '非常美味，謝謝。尤其是甜點。' },
          { speaker: 'Waiter', gender: 'male', text: 'Wonderful to hear. Here you go, no rush.', zh: '聽到真開心。帳單給您，不急。' },
          { speaker: 'Greg', gender: 'male', text: 'Is service included, or is that separate?', zh: '帳單有含服務費，還是另外算？' },
          { speaker: 'Waiter', gender: 'male', text: 'There’s a discretionary twelve and a half percent on there.', zh: '上面有一筆自由心證的 12.5% 服務費。' },
          { speaker: 'Greg', gender: 'male', text: 'That’s fine, you’ve looked after us well. Shall we split it?', zh: '沒問題，您服務得很周到。我們要平分嗎？' },
          { speaker: 'Claire', gender: 'female', text: 'Let’s go halves. Can we pay on two cards?', zh: '我們對半分吧。可以用兩張卡付嗎？' },
          { speaker: 'Waiter', gender: 'male', text: 'Absolutely, I’ll split the machine for you.', zh: '當然可以，我幫您把刷卡機分開結。' },
          { speaker: 'Greg', gender: 'male', text: 'Brilliant. Tap for me, and chip and pin for her.', zh: '太好了。我用感應，她用晶片加密碼。' },
          { speaker: 'Waiter', gender: 'male', text: 'All gone through. Thanks ever so much, see you again soon!', zh: '都付好了。非常感謝，期待再次光臨！' }
        ]
      }
    ]
  },
  {
    id: 'bank',
    title: 'Bank & Customer Service',
    titleZh: '銀行與客服',
    icon: '🏦',
    blurb: '開戶、掛失、處理帳務時的客服對話',
    scenarios: [
      {
        id: 'bank-account',
        title: 'Opening an account',
        titleZh: '開戶',
        description: 'A new customer opening a current account.',
        lines: [
          { speaker: 'Adviser', gender: 'female', text: 'Hello there, how can I help you today?', zh: '您好，今天有什麼能為您服務的？' },
          { speaker: 'Sam', gender: 'male', text: 'Hi, I’d like to open a current account, please.', zh: '您好，我想開一個活期帳戶。' },
          { speaker: 'Adviser', gender: 'female', text: 'Lovely. Have you banked with us before?', zh: '好的。您之前在我們這裡開過戶嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'No, this would be my first account with you.', zh: '沒有，這會是我在貴行的第一個帳戶。' },
          { speaker: 'Adviser', gender: 'female', text: 'No problem. I’ll need some ID and proof of address.', zh: '沒問題。我需要您的身分證件和地址證明。' },
          { speaker: 'Sam', gender: 'male', text: 'I’ve got my passport and a recent utility bill.', zh: '我帶了護照和一張最近的水電帳單。' },
          { speaker: 'Adviser', gender: 'female', text: 'That’s spot on. Are you after any overdraft facility?', zh: '這正好。您需要透支額度的服務嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'Maybe a small one, just in case. Is there a fee?', zh: '也許要個小額的，以防萬一。有手續費嗎？' },
          { speaker: 'Adviser', gender: 'female', text: 'The first two hundred is interest-free, then it’s charged daily.', zh: '前兩百英鎊免利息，超過的部分按日計息。' },
          { speaker: 'Sam', gender: 'male', text: 'Good to know. How soon will my card arrive?', zh: '了解。我的卡多久會寄到？' },
          { speaker: 'Adviser', gender: 'female', text: 'Within five working days, with your PIN sent separately.', zh: '五個工作天內，密碼會另外分開寄送。' }
        ]
      },
      {
        id: 'bank-lostcard',
        title: 'Reporting a lost card',
        titleZh: '掛失信用卡',
        description: 'Phoning the bank after losing a card.',
        lines: [
          { speaker: 'Mia', gender: 'female', text: 'Hi, I think I’ve lost my debit card and I’m a bit panicked.', zh: '您好，我好像把金融卡弄丟了，有點慌。' },
          { speaker: 'Agent', gender: 'male', text: 'Don’t worry, we’ll get it sorted. Can I confirm your details?', zh: '別擔心，我們會處理好。可以核對一下您的資料嗎？' },
          { speaker: 'Mia', gender: 'female', text: 'Of course. It’s Mia Carter, and my postcode is BS1 4QR.', zh: '當然。我是 Mia Carter，郵遞區號是 BS1 4QR。' },
          { speaker: 'Agent', gender: 'male', text: 'Thank you. I can see the account. I’ll freeze the card now.', zh: '謝謝您。我看到帳戶了。我現在幫您把卡凍結。' },
          { speaker: 'Mia', gender: 'female', text: 'Brilliant. Can you check if there’ve been any odd payments?', zh: '太好了。您能查一下有沒有奇怪的扣款嗎？' },
          { speaker: 'Agent', gender: 'male', text: 'Let me look… no, nothing unusual since yesterday.', zh: '我看看……沒有，從昨天到現在沒有異常。' },
          { speaker: 'Mia', gender: 'female', text: 'That’s a relief. Can you send out a replacement?', zh: '那我就放心了。可以幫我補發一張嗎？' },
          { speaker: 'Agent', gender: 'male', text: 'Already on it. It’ll be with you in three to five days.', zh: '已經在處理了。三到五天內會寄到。' },
          { speaker: 'Mia', gender: 'female', text: 'Is there anything I can use in the meantime?', zh: '這期間有什麼我可以先用的嗎？' },
          { speaker: 'Agent', gender: 'male', text: 'You can still use the banking app to pay by phone.', zh: '您還是可以用網銀 App 透過手機付款。' },
          { speaker: 'Mia', gender: 'female', text: 'Oh, perfect. Thanks so much for being so quick.', zh: '喔，太好了。非常感謝您這麼迅速。' }
        ]
      },
      {
        id: 'bank-dispute',
        title: 'Querying a charge',
        titleZh: '查詢一筆扣款',
        description: 'Disputing a payment the customer doesn’t recognise.',
        lines: [
          { speaker: 'Owen', gender: 'male', text: 'Hi, there’s a charge on my statement I don’t recognise.', zh: '您好，我的對帳單上有一筆我不認得的扣款。' },
          { speaker: 'Agent', gender: 'female', text: 'I can help with that. Can you tell me the amount and date?', zh: '我可以幫您查。能告訴我金額和日期嗎？' },
          { speaker: 'Owen', gender: 'male', text: 'It’s forty-nine ninety-nine, dated the twelfth.', zh: '是 49.99 英鎊，日期是十二號。' },
          { speaker: 'Agent', gender: 'female', text: 'I see it. It looks like a subscription payment.', zh: '我看到了。看起來像是一筆訂閱費。' },
          { speaker: 'Owen', gender: 'male', text: 'I haven’t signed up to anything, though.', zh: '可是我沒有訂閱任何東西啊。' },
          { speaker: 'Agent', gender: 'female', text: 'It might be a free trial that’s rolled into a paid plan.', zh: '可能是免費試用到期後自動轉成付費方案了。' },
          { speaker: 'Owen', gender: 'male', text: 'Ah, that could be it. Can I get the money back?', zh: '啊，有可能是這樣。我能把錢要回來嗎？' },
          { speaker: 'Agent', gender: 'female', text: 'I’ll raise a dispute and cancel the future payments.', zh: '我會幫您提出爭議，並取消後續的扣款。' },
          { speaker: 'Owen', gender: 'male', text: 'How long does a refund usually take?', zh: '退款通常要多久？' },
          { speaker: 'Agent', gender: 'female', text: 'Up to ten working days, but often much sooner.', zh: '最多十個工作天，但通常會快很多。' },
          { speaker: 'Owen', gender: 'male', text: 'That’s great. Thanks for clearing that up for me.', zh: '太好了。謝謝您幫我把這件事釐清。' }
        ]
      }
    ]
  },
  {
    id: 'interview',
    title: 'Job Interview',
    titleZh: '面試',
    icon: '💼',
    blurb: '面試前後、回答問題時的職場英語',
    scenarios: [
      {
        id: 'interview-questions',
        title: 'In the interview',
        titleZh: '面試進行中',
        description: 'A candidate answering common interview questions.',
        lines: [
          { speaker: 'Interviewer', gender: 'female', text: 'Thanks for coming in. So, tell me a bit about yourself.', zh: '謝謝你來。那麼，跟我聊聊你自己吧。' },
          { speaker: 'Dan', gender: 'male', text: 'Of course. I’ve worked in marketing for about five years now.', zh: '當然。我在行銷領域工作大約五年了。' },
          { speaker: 'Interviewer', gender: 'female', text: 'Great. What attracted you to this role in particular?', zh: '很好。是什麼特別吸引你來應徵這個職位？' },
          { speaker: 'Dan', gender: 'male', text: 'I really admire the brand, and I’m keen to take on more responsibility.', zh: '我很欣賞這個品牌，也很想承擔更多責任。' },
          { speaker: 'Interviewer', gender: 'female', text: 'Can you give me an example of a project you’re proud of?', zh: '可以舉一個你引以為傲的專案例子嗎？' },
          { speaker: 'Dan', gender: 'male', text: 'Certainly. I led a campaign that boosted sales by thirty percent.', zh: '當然。我主導過一個讓銷售成長三成的行銷活動。' },
          { speaker: 'Interviewer', gender: 'female', text: 'Impressive. And what would you say is your biggest weakness?', zh: '很厲害。那你覺得你最大的弱點是什麼？' },
          { speaker: 'Dan', gender: 'male', text: 'I can be a bit of a perfectionist, but I’m learning to delegate.', zh: '我有點完美主義，不過我正在學著把工作分派出去。' },
          { speaker: 'Interviewer', gender: 'female', text: 'That’s a fair answer. Where do you see yourself in five years?', zh: '這回答很中肯。你覺得五年後的自己會在哪裡？' },
          { speaker: 'Dan', gender: 'male', text: 'Ideally leading a team and shaping the wider strategy.', zh: '理想上是帶領一個團隊，並參與更大方向的策略制定。' },
          { speaker: 'Interviewer', gender: 'female', text: 'Wonderful. Do you have any questions for us?', zh: '很好。你有什麼想問我們的嗎？' }
        ]
      },
      {
        id: 'interview-prep',
        title: 'Calming the nerves beforehand',
        titleZh: '面試前安撫緊張',
        description: 'A friend reassuring a nervous candidate.',
        lines: [
          { speaker: 'Holly', gender: 'female', text: 'You’ll be brilliant. Stop pacing and take a deep breath.', zh: '你會表現很好的。別走來走去了，深呼吸。' },
          { speaker: 'Jay', gender: 'male', text: 'I can’t help it. My mind’s gone completely blank.', zh: '我控制不住。我腦袋一片空白。' },
          { speaker: 'Holly', gender: 'female', text: 'Just be yourself. You know this stuff inside out.', zh: '做你自己就好。這些東西你瞭若指掌。' },
          { speaker: 'Jay', gender: 'male', text: 'What if they ask something I can’t answer?', zh: '萬一他們問了我答不出來的問題怎麼辦？' },
          { speaker: 'Holly', gender: 'female', text: 'Take a moment, and it’s fine to ask them to rephrase.', zh: '稍微停一下，請他們換個說法再問也完全沒關係。' },
          { speaker: 'Jay', gender: 'male', text: 'Good point. I always rush my answers when I’m nervous.', zh: '說得好。我一緊張就老是答得太急。' },
          { speaker: 'Holly', gender: 'female', text: 'So slow down and give yourself time to think.', zh: '所以放慢速度，給自己時間思考。' },
          { speaker: 'Jay', gender: 'male', text: 'Right. Do I look smart enough, do you think?', zh: '好。你覺得我穿得夠正式嗎？' },
          { speaker: 'Holly', gender: 'female', text: 'You look really sharp. They’ll be impressed before you speak.', zh: '你看起來很體面。你還沒開口他們就會印象很好。' },
          { speaker: 'Jay', gender: 'male', text: 'Thanks. Honestly, you’ve really put me at ease.', zh: '謝謝。老實說，你真的讓我放鬆不少。' },
          { speaker: 'Holly', gender: 'female', text: 'Now go and knock ’em dead. Text me the second you’re out!', zh: '去吧，好好表現征服他們。一出來馬上傳訊息給我！' }
        ]
      },
      {
        id: 'interview-offer',
        title: 'Getting the call',
        titleZh: '接到錄取通知',
        description: 'A recruiter phoning with good news.',
        lines: [
          { speaker: 'Recruiter', gender: 'female', text: 'Hi Dan, it’s Sarah from Brightside. Is now a good time?', zh: '嗨 Dan，我是 Brightside 的 Sarah。現在方便講話嗎？' },
          { speaker: 'Dan', gender: 'male', text: 'Hi Sarah, yes, perfect timing. How did it go?', zh: '嗨 Sarah，方便，時機剛好。結果如何？' },
          { speaker: 'Recruiter', gender: 'female', text: 'I’m delighted to say we’d like to offer you the role.', zh: '我很高興地通知您，我們想正式錄取您。' },
          { speaker: 'Dan', gender: 'male', text: 'That’s fantastic news — thank you so much!', zh: '這真是太好的消息了——非常感謝！' },
          { speaker: 'Recruiter', gender: 'female', text: 'You really stood out. The team can’t wait to have you on board.', zh: '您表現得非常出色。團隊都迫不及待想跟您共事。' },
          { speaker: 'Dan', gender: 'male', text: 'I’m thrilled. Could you tell me a bit about the package?', zh: '我太開心了。能跟我說一下待遇的部分嗎？' },
          { speaker: 'Recruiter', gender: 'female', text: 'Of course. I’ll email the full offer over this afternoon.', zh: '當然。我今天下午會把完整的錄取條件寄給您。' },
          { speaker: 'Dan', gender: 'male', text: 'Brilliant. Is there room to discuss the salary?', zh: '太好了。薪資方面有討論的空間嗎？' },
          { speaker: 'Recruiter', gender: 'female', text: 'There’s a little flexibility, so let’s have a chat once you’ve read it.', zh: '有一點彈性，等您看過之後我們再聊。' },
          { speaker: 'Dan', gender: 'male', text: 'Sounds good. When would you need an answer by?', zh: '聽起來不錯。您大概什麼時候需要我的答覆？' },
          { speaker: 'Recruiter', gender: 'female', text: 'Take the week to think it over. No pressure at all.', zh: '您可以花一週好好考慮。完全不用有壓力。' }
        ]
      }
    ]
  },
  {
    id: 'dating',
    title: 'Dating',
    titleZh: '約會',
    icon: '💘',
    blurb: '邀約、第一次約會、聊感受時的口語',
    scenarios: [
      {
        id: 'dating-askout',
        title: 'Asking someone out',
        titleZh: '開口邀約',
        description: 'Plucking up the courage to ask someone on a date.',
        lines: [
          { speaker: 'Jake', gender: 'male', text: 'Hey, can I ask you something, and you can totally say no?', zh: '嘿，我能問你一件事嗎？你完全可以拒絕。' },
          { speaker: 'Lily', gender: 'female', text: 'Sure, go on. You look a bit nervous!', zh: '當然，說吧。你看起來有點緊張耶！' },
          { speaker: 'Jake', gender: 'male', text: 'A bit, yeah. Would you fancy going for a coffee sometime?', zh: '對，有一點。你哪天有興趣一起去喝杯咖啡嗎？' },
          { speaker: 'Lily', gender: 'female', text: 'Aw, I’d love to. I was hoping you’d ask, actually.', zh: '哎喲，我很樂意。其實我一直希望你會開口。' },
          { speaker: 'Jake', gender: 'male', text: 'Really? Phew, I’ve been working up to that for ages.', zh: '真的嗎？呼，我為了這句話醞釀好久了。' },
          { speaker: 'Lily', gender: 'female', text: 'You’re sweet. When were you thinking?', zh: '你真貼心。你想約什麼時候？' },
          { speaker: 'Jake', gender: 'male', text: 'How about Saturday afternoon, if you’re free?', zh: '週六下午如何，如果你有空的話？' },
          { speaker: 'Lily', gender: 'female', text: 'Saturday’s perfect. There’s a lovely little place by the river.', zh: '週六剛剛好。河邊有家很可愛的小店。' },
          { speaker: 'Jake', gender: 'male', text: 'Sounds ideal. Shall I meet you there about two?', zh: '聽起來很理想。我兩點左右在那邊跟你碰面好嗎？' },
          { speaker: 'Lily', gender: 'female', text: 'Two it is. I’m really looking forward to it.', zh: '就兩點。我超期待的。' },
          { speaker: 'Jake', gender: 'male', text: 'Me too. Right, I’ll let you get on. See you Saturday!', zh: '我也是。好，不耽誤你了。週六見！' }
        ]
      },
      {
        id: 'dating-firstdate',
        title: 'On a first date',
        titleZh: '第一次約會',
        description: 'Two people getting to know each other.',
        lines: [
          { speaker: 'Lily', gender: 'female', text: 'This place is lovely. Have you been here before?', zh: '這地方好棒。你之前來過嗎？' },
          { speaker: 'Jake', gender: 'male', text: 'A couple of times. So, what do you do for fun?', zh: '來過幾次。那你平常喜歡做什麼消遣？' },
          { speaker: 'Lily', gender: 'female', text: 'I’m really into hiking, and I play in a little band.', zh: '我超愛健行，還有在一個小樂團裡演奏。' },
          { speaker: 'Jake', gender: 'male', text: 'No way, a band? What do you play?', zh: '不會吧，樂團？你彈什麼？' },
          { speaker: 'Lily', gender: 'female', text: 'Bass, mostly. What about you — any hidden talents?', zh: '主要是貝斯。那你呢——有什麼隱藏才能嗎？' },
          { speaker: 'Jake', gender: 'male', text: 'I’m a decent cook, if I do say so myself.', zh: '我廚藝還不錯，雖然這話是我自己說的。' },
          { speaker: 'Lily', gender: 'female', text: 'Ooh, that’s a good sign. You’ll have to cook for me sometime.', zh: '喔，這是個好兆頭。你哪天得煮給我吃。' },
          { speaker: 'Jake', gender: 'male', text: 'Is that a hint? Challenge accepted.', zh: '這是在暗示嗎？挑戰我接下了。' },
          { speaker: 'Lily', gender: 'female', text: 'Ha! I like your confidence. This is going really well.', zh: '哈！我喜歡你的自信。今天聊得真的很愉快。' },
          { speaker: 'Jake', gender: 'male', text: 'It really is. Time’s flown, hasn’t it?', zh: '真的。時間過得好快，對吧？' },
          { speaker: 'Lily', gender: 'female', text: 'It has. I’d love to do this again, if you would.', zh: '是啊。如果你也願意，我很想再約一次。' }
        ]
      },
      {
        id: 'dating-debrief',
        title: 'How did the date go?',
        titleZh: '約會後的回報',
        description: 'A friend wanting all the details after a date.',
        lines: [
          { speaker: 'Megan', gender: 'female', text: 'So? Don’t leave me hanging — how was the date?', zh: '所以呢？別吊我胃口——約會怎麼樣？' },
          { speaker: 'Lily', gender: 'female', text: 'Honestly? It was so much better than I expected.', zh: '老實說？比我預期的好太多了。' },
          { speaker: 'Megan', gender: 'female', text: 'Aw, I’m so pleased! Did you two hit it off?', zh: '哎喲，我好替你高興！你們倆很合拍嗎？' },
          { speaker: 'Lily', gender: 'female', text: 'We really clicked. We talked for hours.', zh: '我們超對盤。聊了好幾個小時。' },
          { speaker: 'Megan', gender: 'female', text: 'That’s a brilliant sign. Was there any awkwardness?', zh: '這是很棒的徵兆。有沒有什麼尷尬的時刻？' },
          { speaker: 'Lily', gender: 'female', text: 'Hardly any, which surprised me. He’s really easy to talk to.', zh: '幾乎沒有，這讓我很意外。他真的很好聊。' },
          { speaker: 'Megan', gender: 'female', text: 'And? Are you going to see him again?', zh: '然後呢？你們會再見面嗎？' },
          { speaker: 'Lily', gender: 'female', text: 'Yeah, he’s already asked, and I said yes.', zh: '會啊，他已經約了，我也答應了。' },
          { speaker: 'Megan', gender: 'female', text: 'I’m made up for you. Don’t overthink it, just enjoy it.', zh: '我真為你開心。別想太多，好好享受就對了。' },
          { speaker: 'Lily', gender: 'female', text: 'I’ll try. I’ve got a really good feeling about him.', zh: '我會試試。我對他真的有種很好的預感。' },
          { speaker: 'Megan', gender: 'female', text: 'Then go with it. I want every update, mind!', zh: '那就順其自然吧。不過我要知道每個進展喔！' }
        ]
      }
    ]
  },
  {
    id: 'hairdresser',
    title: 'At the Hairdresser’s',
    titleZh: '理髮與美髮',
    icon: '💇',
    blurb: '剪髮、染髮、閒聊時最自然的英式對話',
    scenarios: [
      {
        id: 'hair-cut',
        title: 'Getting a haircut',
        titleZh: '剪頭髮',
        description: 'Explaining to the stylist what you want.',
        lines: [
          { speaker: 'Stylist', gender: 'female', text: 'Right, come and take a seat. What are we doing today?', zh: '好，請過來坐。今天想怎麼弄呢？' },
          { speaker: 'Tom', gender: 'male', text: 'Just a trim, really. It’s got a bit out of control.', zh: '其實只是修一下。它有點長到失控了。' },
          { speaker: 'Stylist', gender: 'female', text: 'How much off the top? And do you want the sides shorter?', zh: '上面要剪多少？兩側要剪短一點嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Maybe an inch off the top, and tidy up the sides.', zh: '上面大概剪掉一吋，兩側修整齊就好。' },
          { speaker: 'Stylist', gender: 'female', text: 'Lovely. Do you want it tapered at the back?', zh: '好的。後面要漸層收尾嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Yes please, but nothing too drastic.', zh: '好，麻煩了，但別太誇張。' },
          { speaker: 'Stylist', gender: 'female', text: 'No worries. Same parting on the left as usual?', zh: '沒問題。一樣分左邊嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Please. Oh, and could you keep the fringe out of my eyes?', zh: '麻煩了。喔，瀏海可以幫我修到不會擋眼睛嗎？' },
          { speaker: 'Stylist', gender: 'female', text: 'Will do. Are you off anywhere nice this weekend?', zh: '沒問題。這週末有要去哪裡好玩的地方嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Just a quiet one, thanks. How’s your day been?', zh: '就在家好好休息，謝謝。你今天過得如何？' },
          { speaker: 'Stylist', gender: 'female', text: 'Run off my feet, but no complaints! Right, let’s get started.', zh: '忙得團團轉，但沒什麼好抱怨的！好，我們開始吧。' }
        ]
      },
      {
        id: 'hair-colour',
        title: 'Trying a new colour',
        titleZh: '嘗試新髮色',
        description: 'Discussing a colour change with the stylist.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'I fancy a change. I’m thinking of going a bit lighter.', zh: '我想換個風格。我在想要不要染淺一點。' },
          { speaker: 'Stylist', gender: 'male', text: 'Ooh, lovely. Were you thinking highlights or all over?', zh: '喔，不錯。你是想挑染還是全染？' },
          { speaker: 'Eve', gender: 'female', text: 'Maybe some subtle highlights to start with.', zh: '也許先從低調的挑染開始吧。' },
          { speaker: 'Stylist', gender: 'male', text: 'Good idea. It’s a softer way to ease into it.', zh: '好主意。這樣比較柔和、循序漸進。' },
          { speaker: 'Eve', gender: 'female', text: 'Will it damage my hair much?', zh: '它會很傷我的頭髮嗎？' },
          { speaker: 'Stylist', gender: 'male', text: 'A little, but I’ll use a toner and a deep conditioner.', zh: '會一點，但我會用護色劑和深層護髮。' },
          { speaker: 'Eve', gender: 'female', text: 'Brilliant. How long will the whole thing take?', zh: '太好了。整個過程大概要多久？' },
          { speaker: 'Stylist', gender: 'male', text: 'About two hours with the colour developing.', zh: '加上等染劑顯色，大概兩小時。' },
          { speaker: 'Eve', gender: 'female', text: 'That’s fine. How do I keep it looking fresh at home?', zh: '沒問題。那我在家要怎麼保養才能維持？' },
          { speaker: 'Stylist', gender: 'male', text: 'Use a colour-safe shampoo and don’t wash it every day.', zh: '用護色洗髮精，而且別天天洗。' },
          { speaker: 'Eve', gender: 'female', text: 'Noted. Right, let’s be brave and go for it!', zh: '記住了。好，那就勇敢一點，放手去做吧！' }
        ]
      },
      {
        id: 'hair-complaint',
        title: 'It’s not quite right',
        titleZh: '結果不太對勁',
        description: 'Politely flagging that the cut isn’t what was asked for.',
        lines: [
          { speaker: 'Jess', gender: 'female', text: 'Sorry, could I just say something before you finish?', zh: '不好意思，能在你弄完前跟你說一下嗎？' },
          { speaker: 'Stylist', gender: 'female', text: 'Of course, what’s up? Is it not how you imagined?', zh: '當然，怎麼了？跟你想的不一樣嗎？' },
          { speaker: 'Jess', gender: 'female', text: 'It’s a bit shorter than I wanted at the front.', zh: '前面比我想要的短了一點。' },
          { speaker: 'Stylist', gender: 'female', text: 'Ah, I’m sorry. Let me see what I can do to balance it.', zh: '啊，抱歉。我看看怎麼幫你修得平衡一些。' },
          { speaker: 'Jess', gender: 'female', text: 'It’s not a disaster, just not quite what I pictured.', zh: '也不是什麼災難，只是跟我想像的不太一樣。' },
          { speaker: 'Stylist', gender: 'female', text: 'I completely understand. I can soften the layers around it.', zh: '我完全理解。我可以把周圍的層次修柔和一點。' },
          { speaker: 'Jess', gender: 'female', text: 'That would help. And maybe leave the length at the back.', zh: '那會有幫助。後面的長度也許就保留著。' },
          { speaker: 'Stylist', gender: 'female', text: 'Absolutely. How’s that looking now?', zh: '當然。現在這樣看起來如何？' },
          { speaker: 'Jess', gender: 'female', text: 'Oh, that’s much better, actually. Thank you.', zh: '喔，其實這樣好多了。謝謝你。' },
          { speaker: 'Stylist', gender: 'female', text: 'I’m glad. It’ll settle even more once it’s grown a touch.', zh: '我很高興。等它再長一點會更自然。' },
          { speaker: 'Jess', gender: 'female', text: 'Thanks for sorting it so nicely. I do appreciate it.', zh: '謝謝你這麼用心幫我處理。我真的很感激。' }
        ]
      }
    ]
  }
]
