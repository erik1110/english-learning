// Situations pack 6 — bigger life & work admin (buying a house, complaint calls,
// commuting, beauty salon, home repairs, resigning, asking for a pay rise,
// volunteering). 3 dialogues per category, 11 lines each, alternating voices.

export const PACK6 = [
  {
    id: 'buyinghouse',
    title: 'Buying a House',
    titleZh: '看房買屋',
    icon: '🔑',
    blurb: '看房、出價、跟房仲打交道時的對話',
    scenarios: [
      {
        id: 'buying-viewing',
        title: 'A viewing with the estate agent',
        titleZh: '跟房仲看房',
        description: 'Being shown around a property for sale.',
        lines: [
          { speaker: 'Agent', gender: 'male', text: 'Welcome. Shall we start in the kitchen?', zh: '歡迎。我們從廚房開始看吧？' },
          { speaker: 'Claire', gender: 'female', text: 'Lovely. It’s bigger than it looked in the photos.', zh: '很棒。比照片上看起來大。' },
          { speaker: 'Agent', gender: 'male', text: 'It is. The whole place was renovated last year.', zh: '是的。整間屋子去年重新翻修過。' },
          { speaker: 'Claire', gender: 'female', text: 'Good to know. Which way does the garden face?', zh: '了解。花園朝哪個方向？' },
          { speaker: 'Agent', gender: 'male', text: 'South-facing, so it gets the sun all afternoon.', zh: '朝南，所以整個下午都有陽光。' },
          { speaker: 'Claire', gender: 'female', text: 'Perfect. How are the local schools?', zh: '太好了。附近的學校怎麼樣？' },
          { speaker: 'Agent', gender: 'male', text: 'Excellent — both primaries are rated highly.', zh: '非常好——兩所小學評鑑都很高。' },
          { speaker: 'Claire', gender: 'female', text: 'And why are the owners selling?', zh: '那屋主為什麼要賣？' },
          { speaker: 'Agent', gender: 'male', text: 'They’re relocating for work, so it’s a quick sale.', zh: '他們因工作要搬遷，所以想盡快成交。' },
          { speaker: 'Claire', gender: 'female', text: 'Interesting. Has there been much interest?', zh: '有意思。看的人多嗎？' },
          { speaker: 'Agent', gender: 'male', text: 'A fair bit, so I wouldn’t hang about if you like it.', zh: '不少，所以如果您喜歡，我建議別拖太久。' }
        ]
      },
      {
        id: 'buying-offer',
        title: 'Putting in an offer',
        titleZh: '出價',
        description: 'Negotiating a price with the agent.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'We’d like to put in an offer on the house.', zh: '我們想對那間房子出價。' },
          { speaker: 'Agent', gender: 'female', text: 'Wonderful. What figure did you have in mind?', zh: '太好了。您心中的價位是多少？' },
          { speaker: 'Tom', gender: 'male', text: 'We were thinking ten thousand below asking.', zh: '我們在想比開價低一萬。' },
          { speaker: 'Agent', gender: 'female', text: 'I’ll put it forward, but it may be on the low side.', zh: '我會幫您轉達，不過這價可能偏低。' },
          { speaker: 'Tom', gender: 'male', text: 'It does need a bit of work, to be fair.', zh: '平心而論，它確實需要整修一下。' },
          { speaker: 'Agent', gender: 'female', text: 'Noted. Are you in a chain, or a cash buyer?', zh: '了解。您是有連環交易，還是現金買家？' },
          { speaker: 'Tom', gender: 'male', text: 'Chain-free, and we’ve got a mortgage in principle.', zh: '沒有連環關係，而且我們已有貸款預核。' },
          { speaker: 'Agent', gender: 'female', text: 'That’s a strong position. It’ll help your case.', zh: '這條件很有利。會對您很有幫助。' },
          { speaker: 'Tom', gender: 'male', text: 'Great. How soon will we hear back?', zh: '太好了。我們多久會得到回覆？' },
          { speaker: 'Agent', gender: 'female', text: 'I’ll call the vendor today and let you know.', zh: '我今天會打給賣方，再通知您。' },
          { speaker: 'Tom', gender: 'male', text: 'Brilliant. Fingers crossed they accept.', zh: '太好了。希望他們會接受。' }
        ]
      },
      {
        id: 'buying-mortgage',
        title: 'Meeting the mortgage adviser',
        titleZh: '與房貸顧問會談',
        description: 'Discussing a mortgage with an adviser.',
        lines: [
          { speaker: 'Adviser', gender: 'female', text: 'So, you’re looking to borrow for your first home?', zh: '所以，您是想為第一間房子辦貸款？' },
          { speaker: 'Ben', gender: 'male', text: 'That’s right. We’re not sure how much we can borrow.', zh: '對。我們不確定能借到多少。' },
          { speaker: 'Adviser', gender: 'female', text: 'It depends on your income and your deposit.', zh: '這取決於您的收入和頭期款。' },
          { speaker: 'Ben', gender: 'male', text: 'We’ve saved a ten percent deposit so far.', zh: '我們目前存了一成的頭期款。' },
          { speaker: 'Adviser', gender: 'female', text: 'That’s a good start. What about your monthly outgoings?', zh: '這是個好的開始。那您每月的固定支出呢？' },
          { speaker: 'Ben', gender: 'male', text: 'Fairly low, just the usual bills and a car loan.', zh: '不算高，就是一般帳單和一筆車貸。' },
          { speaker: 'Adviser', gender: 'female', text: 'Right. Do you want a fixed or a variable rate?', zh: '好。您想要固定利率還是浮動利率？' },
          { speaker: 'Ben', gender: 'male', text: 'What’s the difference, in plain terms?', zh: '簡單來說有什麼差別？' },
          { speaker: 'Adviser', gender: 'female', text: 'A fixed rate stays the same; a variable one can change.', zh: '固定利率維持不變；浮動利率則可能變動。' },
          { speaker: 'Ben', gender: 'male', text: 'A fixed one sounds safer for us.', zh: '固定的對我們來說聽起來比較保險。' },
          { speaker: 'Adviser', gender: 'female', text: 'Sensible. I’ll pull together some options for you.', zh: '很明智。我幫您整理幾個方案。' }
        ]
      }
    ]
  },
  {
    id: 'complaint',
    title: 'Making a Complaint',
    titleZh: '客訴與退款',
    icon: '📞',
    blurb: '電話客訴、要求退款、處理爛服務的對話',
    scenarios: [
      {
        id: 'complaint-delivery',
        title: 'A delivery that never came',
        titleZh: '沒收到的包裹',
        description: 'Chasing up a missing online order.',
        lines: [
          { speaker: 'Agent', gender: 'female', text: 'Thanks for calling. How can I help today?', zh: '感謝來電。今天有什麼能幫您？' },
          { speaker: 'Sam', gender: 'male', text: 'My order was due last week and still hasn’t arrived.', zh: '我的訂單上週就該到，到現在還沒收到。' },
          { speaker: 'Agent', gender: 'female', text: 'I’m sorry about that. Have you got the order number?', zh: '很抱歉。您有訂單編號嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'Yes, it’s four-four-one-nine-two.', zh: '有，是 44192。' },
          { speaker: 'Agent', gender: 'female', text: 'Let me check… it says it was delivered on Tuesday.', zh: '我查一下……上面顯示週二已送達。' },
          { speaker: 'Sam', gender: 'male', text: 'Well, it definitely wasn’t. Nothing turned up.', zh: '嗯，絕對沒有。什麼都沒收到。' },
          { speaker: 'Agent', gender: 'female', text: 'How frustrating. I’ll open an investigation with the courier.', zh: '真讓人困擾。我會向物流商開立調查。' },
          { speaker: 'Sam', gender: 'male', text: 'I’d really just like a refund at this point.', zh: '事到如今我其實只想退款。' },
          { speaker: 'Agent', gender: 'female', text: 'Understood. I can process that for you right away.', zh: '了解。我馬上幫您處理。' },
          { speaker: 'Sam', gender: 'male', text: 'Thank you. How long will it take to come through?', zh: '謝謝。退款多久會到？' },
          { speaker: 'Agent', gender: 'female', text: 'Three to five working days. Again, my apologies.', zh: '三到五個工作天。再次向您致歉。' }
        ]
      },
      {
        id: 'complaint-bill',
        title: 'An incorrect bill',
        titleZh: '帳單金額有誤',
        description: 'Disputing an overcharge with customer service.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'Hi, I think I’ve been overcharged this month.', zh: '您好，我覺得我這個月被多收了錢。' },
          { speaker: 'Agent', gender: 'male', text: 'Let’s take a look. Can I confirm your account number?', zh: '我們來看看。可以核對您的帳號嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Of course. It’s seven-three-zero-six-two.', zh: '當然。是 73062。' },
          { speaker: 'Agent', gender: 'male', text: 'Thanks. I can see the bill is higher than usual.', zh: '謝謝。我看到這次帳單比平常高。' },
          { speaker: 'Eve', gender: 'female', text: 'Exactly. I haven’t used any more than normal.', zh: '沒錯。我用量並沒有比平常多。' },
          { speaker: 'Agent', gender: 'male', text: 'Ah, I see an estimated reading’s been applied.', zh: '啊，我看到系統套用了一個估計讀數。' },
          { speaker: 'Eve', gender: 'female', text: 'That would explain it. Can it be corrected?', zh: '這就說得通了。可以更正嗎？' },
          { speaker: 'Agent', gender: 'male', text: 'If you give me an actual meter reading, yes.', zh: '只要您給我實際的儀表讀數，就可以。' },
          { speaker: 'Eve', gender: 'female', text: 'Right, it currently reads three-two-one-five.', zh: '好，目前的讀數是 3215。' },
          { speaker: 'Agent', gender: 'male', text: 'Perfect. That brings it right down. I’ll re-issue it.', zh: '太好了。這樣金額就降下來了。我會重開帳單。' },
          { speaker: 'Eve', gender: 'female', text: 'Brilliant, thanks for sorting that so quickly.', zh: '太好了，謝謝您這麼快幫忙處理。' }
        ]
      },
      {
        id: 'complaint-meal',
        title: 'Following up a bad meal',
        titleZh: '反映用餐不佳',
        description: 'Emailing back after a disappointing restaurant visit.',
        lines: [
          { speaker: 'Manager', gender: 'male', text: 'Hello, you asked to speak to the manager?', zh: '您好，您要找經理談？' },
          { speaker: 'Nadia', gender: 'female', text: 'Yes. I’m afraid we had a really disappointing meal.', zh: '是的。恐怕我們這頓飯非常令人失望。' },
          { speaker: 'Manager', gender: 'male', text: 'I’m sorry to hear that. What went wrong?', zh: '聽到這個我很抱歉。出了什麼問題？' },
          { speaker: 'Nadia', gender: 'female', text: 'The food was cold and we waited nearly an hour.', zh: '餐點是冷的，而且我們等了將近一小時。' },
          { speaker: 'Manager', gender: 'male', text: 'That’s not the standard we aim for at all.', zh: '這完全不符合我們的標準。' },
          { speaker: 'Nadia', gender: 'female', text: 'We did mention it, but nothing was done.', zh: '我們有反映，但都沒有處理。' },
          { speaker: 'Manager', gender: 'male', text: 'That’s really not good enough. I do apologise.', zh: '這真的很不應該。我向您致歉。' },
          { speaker: 'Nadia', gender: 'female', text: 'I appreciate that. We just felt it should be flagged.', zh: '謝謝。我們只是覺得該反映一下。' },
          { speaker: 'Manager', gender: 'male', text: 'Absolutely right. I’d like to refund your meal.', zh: '您完全正確。我想退還您這頓飯的費用。' },
          { speaker: 'Nadia', gender: 'female', text: 'That’s very fair. Thank you for listening.', zh: '這很合理。謝謝您願意聽。' },
          { speaker: 'Manager', gender: 'male', text: 'And please come back — let us make it up to you.', zh: '也請您再來——讓我們有機會補償您。' }
        ]
      }
    ]
  },
  {
    id: 'commute',
    title: 'Commuting & Public Transport',
    titleZh: '通勤與大眾運輸',
    icon: '🚆',
    blurb: '搭火車、公車、誤點延誤時的實用對話',
    scenarios: [
      {
        id: 'commute-train',
        title: 'Buying a train ticket',
        titleZh: '買火車票',
        description: 'Sorting out tickets at the station.',
        lines: [
          { speaker: 'Clerk', gender: 'male', text: 'Morning. Where are you travelling to?', zh: '早安。您要去哪裡？' },
          { speaker: 'Amy', gender: 'female', text: 'A return to Leeds, please. Off-peak if I can.', zh: '一張到里茲的來回票。可以的話要離峰的。' },
          { speaker: 'Clerk', gender: 'male', text: 'Off-peak doesn’t start till after half nine.', zh: '離峰時段要九點半之後才開始。' },
          { speaker: 'Amy', gender: 'female', text: 'I can wait. How much is that?', zh: '我可以等。那要多少錢？' },
          { speaker: 'Clerk', gender: 'male', text: 'Twenty-eight pounds fifty return. Got a railcard?', zh: '來回 28.50 英鎊。您有鐵路卡嗎？' },
          { speaker: 'Amy', gender: 'female', text: 'I do, actually. Here it is.', zh: '其實有。在這。' },
          { speaker: 'Clerk', gender: 'male', text: 'Lovely, that knocks a third off. Twenty pounds even.', zh: '太好了，可以打三分之一折。整數二十英鎊。' },
          { speaker: 'Amy', gender: 'female', text: 'Brilliant. Which platform do I need?', zh: '太好了。我要去幾號月台？' },
          { speaker: 'Clerk', gender: 'male', text: 'Platform four, but check the board for changes.', zh: '四號月台，但請看看看板有沒有變動。' },
          { speaker: 'Amy', gender: 'female', text: 'Will do. Is it a direct train?', zh: '好。是直達車嗎？' },
          { speaker: 'Clerk', gender: 'male', text: 'It is, no changes. Have a good trip.', zh: '是的，不用轉車。旅途愉快。' }
        ]
      },
      {
        id: 'commute-delay',
        title: 'A delayed train',
        titleZh: '火車誤點',
        description: 'Two commuters grumbling on a delayed platform.',
        lines: [
          { speaker: 'Joe', gender: 'male', text: 'Have you seen the board? Delayed again.', zh: '你看看板了嗎？又誤點了。' },
          { speaker: 'Priya', gender: 'female', text: 'Typical. That’s the third time this week.', zh: '一如往常。這禮拜第三次了。' },
          { speaker: 'Joe', gender: 'male', text: 'It says twenty minutes, but I bet it’ll be more.', zh: '上面寫二十分鐘，但我賭不只。' },
          { speaker: 'Priya', gender: 'female', text: 'I’m going to be late for work, again.', zh: '我上班又要遲到了。' },
          { speaker: 'Joe', gender: 'male', text: 'Did they say what the problem is this time?', zh: '他們有說這次是什麼問題嗎？' },
          { speaker: 'Priya', gender: 'female', text: 'Something about a signal failure further up the line.', zh: '說是前面某段線路號誌故障之類的。' },
          { speaker: 'Joe', gender: 'male', text: 'You can claim some money back if it’s over half an hour.', zh: '如果超過半小時，你可以申請退一部分票錢。' },
          { speaker: 'Priya', gender: 'female', text: 'Oh, good shout. How do you do that?', zh: '喔，好提醒。怎麼申請？' },
          { speaker: 'Joe', gender: 'male', text: 'There’s a delay-repay form on their website.', zh: '他們網站上有延誤退費的表單。' },
          { speaker: 'Priya', gender: 'female', text: 'I’ll do that on the train. If it ever comes.', zh: '我上車再填。前提是車真的會來。' },
          { speaker: 'Joe', gender: 'male', text: 'Ha. Here it is now — better late than never.', zh: '哈。來了——遲到總比不到好。' }
        ]
      },
      {
        id: 'commute-bus',
        title: 'Asking the bus driver',
        titleZh: '問公車司機',
        description: 'Checking the right bus and stop.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'Excuse me, does this bus go to the hospital?', zh: '不好意思，這班公車有到醫院嗎？' },
          { speaker: 'Driver', gender: 'female', text: 'It does, love. It’s about the tenth stop.', zh: '有的，親愛的。大概第十站。' },
          { speaker: 'Tom', gender: 'male', text: 'Great. How much is a single?', zh: '太好了。單程票多少錢？' },
          { speaker: 'Driver', gender: 'female', text: 'Two pounds. Have you got a contactless card?', zh: '兩英鎊。您有感應卡嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'I do. Can I just tap on?', zh: '有。我直接感應就好嗎？' },
          { speaker: 'Driver', gender: 'female', text: 'Yes, just tap the reader there. Lovely.', zh: '對，在那邊感應一下就好。好了。' },
          { speaker: 'Tom', gender: 'male', text: 'Could you let me know when it’s my stop?', zh: '到我那站時可以提醒我嗎？' },
          { speaker: 'Driver', gender: 'female', text: 'Course. I’ll give you a shout.', zh: '當然。我會喊你一聲。' },
          { speaker: 'Tom', gender: 'male', text: 'Thanks. I’m not from round here.', zh: '謝謝。我不是這附近的人。' },
          { speaker: 'Driver', gender: 'female', text: 'No worries. Take a seat, it’s a fair few minutes.', zh: '沒關係。先坐吧，還要好一會兒。' },
          { speaker: 'Tom', gender: 'male', text: 'Cheers, that’s really kind of you.', zh: '謝啦，您人真好。' }
        ]
      }
    ]
  },
  {
    id: 'beauty',
    title: 'Beauty Salon & Nails',
    titleZh: '美容與美甲',
    icon: '💅',
    blurb: '做指甲、護膚、預約美容時的對話',
    scenarios: [
      {
        id: 'beauty-nails',
        title: 'Getting your nails done',
        titleZh: '做指甲',
        description: 'Choosing a nail treatment and colour.',
        lines: [
          { speaker: 'Technician', gender: 'female', text: 'Hiya, take a seat. What are we doing today?', zh: '嗨，請坐。今天想做什麼？' },
          { speaker: 'Jess', gender: 'female', text: 'A gel manicure, please. They last so much longer.', zh: '光療美甲，謝謝。它撐比較久。' },
          { speaker: 'Technician', gender: 'female', text: 'Good choice. Have you a colour in mind?', zh: '好選擇。有想好顏色嗎？' },
          { speaker: 'Jess', gender: 'female', text: 'Something neutral for work, maybe a soft pink.', zh: '上班用的中性色，也許淡粉紅。' },
          { speaker: 'Technician', gender: 'female', text: 'This one’s really popular. Shall I shape them too?', zh: '這色超受歡迎。要幫您修型嗎？' },
          { speaker: 'Jess', gender: 'female', text: 'Yes please. Could you keep them fairly short?', zh: '好，麻煩了。可以修短一點嗎？' },
          { speaker: 'Technician', gender: 'female', text: 'No problem. Square or rounded at the tips?', zh: '沒問題。指尖要方的還是圓的？' },
          { speaker: 'Jess', gender: 'female', text: 'Rounded, I think. It’s more practical.', zh: '我想要圓的。比較實用。' },
          { speaker: 'Technician', gender: 'female', text: 'Lovely. How long will they need to last?', zh: '好的。您希望能撐多久？' },
          { speaker: 'Jess', gender: 'female', text: 'A couple of weeks would be ideal.', zh: '能撐兩週左右就很理想了。' },
          { speaker: 'Technician', gender: 'female', text: 'Gel will easily see you through. Let’s get started.', zh: '光療輕鬆撐得住。我們開始吧。' }
        ]
      },
      {
        id: 'beauty-facial',
        title: 'Booking a facial',
        titleZh: '預約做臉',
        description: 'Asking about skincare treatments at the salon.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'Hi, I’d like to book a facial, please.', zh: '您好，我想預約做臉。' },
          { speaker: 'Receptionist', gender: 'male', text: 'Of course. Is it for relaxation, or a skin concern?', zh: '當然。是想放鬆，還是有皮膚困擾？' },
          { speaker: 'Eve', gender: 'female', text: 'A bit of both. My skin’s been quite dry lately.', zh: '兩者都有一點。我皮膚最近很乾。' },
          { speaker: 'Receptionist', gender: 'male', text: 'Our hydrating facial would be perfect, then.', zh: '那我們的保濕做臉就很適合。' },
          { speaker: 'Eve', gender: 'female', text: 'Sounds lovely. How long does it take?', zh: '聽起來很棒。要做多久？' },
          { speaker: 'Receptionist', gender: 'male', text: 'About an hour, including a relaxing massage.', zh: '大約一小時，含放鬆按摩。' },
          { speaker: 'Eve', gender: 'female', text: 'Perfect. Is there anything I should avoid beforehand?', zh: '太好了。事前有什麼要避免的嗎？' },
          { speaker: 'Receptionist', gender: 'male', text: 'Try not to wear heavy make-up on the day.', zh: '當天盡量別化太濃的妝。' },
          { speaker: 'Eve', gender: 'female', text: 'Noted. Have you got anything on Friday?', zh: '記住了。週五有空檔嗎？' },
          { speaker: 'Receptionist', gender: 'male', text: 'There’s a two o’clock slot. Does that suit?', zh: '有個兩點的時段。方便嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Friday at two is perfect, thank you.', zh: '週五兩點剛好，謝謝。' }
        ]
      },
      {
        id: 'beauty-chat',
        title: 'Salon small talk',
        titleZh: '美容院閒聊',
        description: 'The usual chit-chat during a treatment.',
        lines: [
          { speaker: 'Technician', gender: 'female', text: 'So, have you got any plans for the weekend?', zh: '那麼，週末有什麼計畫嗎？' },
          { speaker: 'Holly', gender: 'female', text: 'Just a friend’s wedding, hence the pampering!', zh: '就一個朋友的婚禮，所以才來保養一下！' },
          { speaker: 'Technician', gender: 'female', text: 'Oh, lovely! Whereabouts is it?', zh: '喔，真好！在哪裡辦？' },
          { speaker: 'Holly', gender: 'female', text: 'A country house out in the Cotswolds.', zh: '在科茨沃爾德的一棟鄉間別墅。' },
          { speaker: 'Technician', gender: 'female', text: 'Gorgeous spot. Have you got your outfit sorted?', zh: '超美的地方。您的禮服搞定了嗎？' },
          { speaker: 'Holly', gender: 'female', text: 'Finally, yes — it took me weeks to decide.', zh: '終於搞定了——我考慮了好幾週。' },
          { speaker: 'Technician', gender: 'female', text: 'Ha, isn’t it always the way! Heels or flats?', zh: '哈，總是這樣！穿高跟還是平底？' },
          { speaker: 'Holly', gender: 'female', text: 'Heels for the photos, flats hidden in my bag.', zh: '拍照穿高跟，平底藏在包包裡。' },
          { speaker: 'Technician', gender: 'female', text: 'Very wise. Dancing all night, I bet.', zh: '太明智了。我猜你會跳一整晚的舞。' },
          { speaker: 'Holly', gender: 'female', text: 'Definitely. That’s the best bit, isn’t it?', zh: '當然。那才是最棒的部分，對吧？' },
          { speaker: 'Technician', gender: 'female', text: 'Couldn’t agree more. Right, all done — have a wonderful time!', zh: '完全同意。好，都做好了——祝你玩得開心！' }
        ]
      }
    ]
  },
  {
    id: 'repairs',
    title: 'Home Repairs',
    titleZh: '居家維修',
    icon: '🔧',
    blurb: '找水電工、修東西、估價時的實用對話',
    scenarios: [
      {
        id: 'repairs-plumber',
        title: 'Calling a plumber',
        titleZh: '叫水電工',
        description: 'Reporting a leak and arranging a visit.',
        lines: [
          { speaker: 'Plumber', gender: 'male', text: 'Hello, you rang about a leak?', zh: '您好，您打來是說有漏水？' },
          { speaker: 'Sara', gender: 'female', text: 'Yes, there’s water dripping under the kitchen sink.', zh: '對，廚房水槽底下一直在滴水。' },
          { speaker: 'Plumber', gender: 'male', text: 'Right. Is it a steady drip or a fast leak?', zh: '好。是慢慢滴，還是漏得很快？' },
          { speaker: 'Sara', gender: 'female', text: 'A steady drip, but it’s getting worse.', zh: '慢慢滴，但越來越嚴重。' },
          { speaker: 'Plumber', gender: 'male', text: 'Have you turned the water off under there?', zh: '您有把下面的水關掉嗎？' },
          { speaker: 'Sara', gender: 'female', text: 'I have, yes. There’s a bucket catching it for now.', zh: '關了。現在先用水桶接著。' },
          { speaker: 'Plumber', gender: 'male', text: 'Good. I can pop round in about an hour.', zh: '很好。我大約一小時後可以過去。' },
          { speaker: 'Sara', gender: 'female', text: 'Brilliant. Roughly what will it cost?', zh: '太好了。大概要多少錢？' },
          { speaker: 'Plumber', gender: 'male', text: 'There’s a call-out fee, then it depends on the part.', zh: '有一筆出勤費，其餘看零件而定。' },
          { speaker: 'Sara', gender: 'female', text: 'Understood. I’ll be in all afternoon.', zh: '了解。我整個下午都在家。' },
          { speaker: 'Plumber', gender: 'male', text: 'Perfect. I’ll give you a ring when I’m close.', zh: '太好了。我快到時打電話給您。' }
        ]
      },
      {
        id: 'repairs-quote',
        title: 'Getting a quote',
        titleZh: '請人估價',
        description: 'A builder pricing up some work.',
        lines: [
          { speaker: 'Builder', gender: 'male', text: 'So, you’re after a new bathroom fitting?', zh: '所以，您是想重新裝修浴室？' },
          { speaker: 'Mark', gender: 'male', text: 'That’s right. The whole thing’s pretty dated.', zh: '對。整間都很舊了。' },
          { speaker: 'Builder', gender: 'male', text: 'Are you keeping the layout, or moving things?', zh: '您要保留格局，還是要移動位置？' },
          { speaker: 'Mark', gender: 'male', text: 'Keeping it the same, just modern fittings.', zh: '格局不變，只是換現代化的設備。' },
          { speaker: 'Builder', gender: 'male', text: 'That keeps the cost down. How’s the budget?', zh: '這樣能壓低成本。預算大概多少？' },
          { speaker: 'Mark', gender: 'male', text: 'We were hoping to keep it under five grand.', zh: '我們希望控制在五千英鎊以內。' },
          { speaker: 'Builder', gender: 'male', text: 'That’s doable, depending on the tiles you choose.', zh: '辦得到，看您挑的磁磚而定。' },
          { speaker: 'Mark', gender: 'male', text: 'How long would the job take?', zh: '這工程要多久？' },
          { speaker: 'Builder', gender: 'male', text: 'About a week, give or take a day or two.', zh: '大約一週，前後差個一兩天。' },
          { speaker: 'Mark', gender: 'male', text: 'Great. Could you put that in writing for me?', zh: '太好了。可以給我一份書面報價嗎？' },
          { speaker: 'Builder', gender: 'male', text: 'I’ll email a full quote over by tomorrow.', zh: '我明天前會把完整報價寄給您。' }
        ]
      },
      {
        id: 'repairs-diy',
        title: 'A bit of DIY',
        titleZh: '自己動手修',
        description: 'Friends tackling a flat-pack and a wobbly shelf.',
        lines: [
          { speaker: 'Dan', gender: 'male', text: 'Right, can you give me a hand with this shelf?', zh: '好，你能幫我弄一下這個層架嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Course. Have you got a spirit level?', zh: '當然。你有水平儀嗎？' },
          { speaker: 'Dan', gender: 'male', text: 'Somewhere in the toolbox. Why, is it wonky?', zh: '工具箱裡某處。怎麼，它歪了嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'A bit. Best to check before you drill.', zh: '有點。鑽孔前最好先確認。' },
          { speaker: 'Dan', gender: 'male', text: 'Good shout. Can you hold it steady?', zh: '好提醒。你能幫我扶穩嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Got it. Mind you don’t drill into a pipe.', zh: '扶著了。小心別鑽到水管。' },
          { speaker: 'Dan', gender: 'male', text: 'I used a detector — we’re clear there.', zh: '我用了偵測器——那裡沒問題。' },
          { speaker: 'Eve', gender: 'female', text: 'Sensible. Right, it’s level now.', zh: '明智。好，現在水平了。' },
          { speaker: 'Dan', gender: 'male', text: 'Pass me the rawl plugs and the screws.', zh: '把壁虎和螺絲遞給我。' },
          { speaker: 'Eve', gender: 'female', text: 'Here you go. Looking good already.', zh: '給你。已經看起來不錯了。' },
          { speaker: 'Dan', gender: 'male', text: 'There — solid as a rock. Who needs a handyman?', zh: '好了——穩如磐石。誰還需要修繕工？' }
        ]
      }
    ]
  },
  {
    id: 'resigning',
    title: 'Changing Jobs',
    titleZh: '換工作離職',
    icon: '👋',
    blurb: '遞辭呈、面談、交接時的職場對話',
    scenarios: [
      {
        id: 'resigning-notice',
        title: 'Handing in your notice',
        titleZh: '遞辭呈',
        description: 'Telling your manager you’re leaving.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'Have you got a minute? There’s something I need to tell you.', zh: '您有空嗎？有件事我得跟您說。' },
          { speaker: 'Manager', gender: 'female', text: 'Of course, take a seat. Everything alright?', zh: '當然，請坐。一切還好嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'I’ve decided to hand in my notice, I’m afraid.', zh: '恐怕我決定要遞辭呈了。' },
          { speaker: 'Manager', gender: 'female', text: 'Oh, that’s a shame. We’ll be sorry to see you go.', zh: '喔，真可惜。我們會很捨不得你走。' },
          { speaker: 'Tom', gender: 'male', text: 'It’s been a tough decision, honestly.', zh: '老實說，這是個很艱難的決定。' },
          { speaker: 'Manager', gender: 'female', text: 'Have you got something else lined up?', zh: '你有找好下一份工作了嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Yes, a role that’s a better fit for the long term.', zh: '有，一份長遠來說更適合我的職位。' },
          { speaker: 'Manager', gender: 'female', text: 'I completely understand. What’s your notice period?', zh: '我完全理解。你的離職通知期是多久？' },
          { speaker: 'Tom', gender: 'male', text: 'A month, so I’ll make sure everything’s handed over.', zh: '一個月，我會確保所有東西都交接好。' },
          { speaker: 'Manager', gender: 'female', text: 'I appreciate that. You’ll be a real loss to the team.', zh: '謝謝你。團隊失去你真的很可惜。' },
          { speaker: 'Tom', gender: 'male', text: 'Thank you. I’ve learned so much here.', zh: '謝謝您。我在這裡學到非常多。' }
        ]
      },
      {
        id: 'resigning-handover',
        title: 'Handing over your work',
        titleZh: '工作交接',
        description: 'Briefing a colleague before you leave.',
        lines: [
          { speaker: 'Eve', gender: 'female', text: 'Right, let’s go through everything before I go.', zh: '好，我走之前我們把所有事過一遍。' },
          { speaker: 'Ben', gender: 'male', text: 'Sounds good. Where do I even start?', zh: '聽起來不錯。我到底該從哪開始？' },
          { speaker: 'Eve', gender: 'female', text: 'I’ve written a handover doc with all the key tasks.', zh: '我寫了一份交接文件，列了所有重點工作。' },
          { speaker: 'Ben', gender: 'male', text: 'Brilliant, that’ll save me a lot of headaches.', zh: '太好了，這能幫我省下很多麻煩。' },
          { speaker: 'Eve', gender: 'female', text: 'The main thing is the monthly report — it’s fiddly.', zh: '最重要的是月報——它很瑣碎。' },
          { speaker: 'Ben', gender: 'male', text: 'Can you walk me through it before Friday?', zh: '你能在週五前帶我跑一遍嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Definitely. Let’s do it together on Thursday.', zh: '當然。我們週四一起做一次。' },
          { speaker: 'Ben', gender: 'male', text: 'Perfect. Who do I go to if I get stuck?', zh: '太好了。我卡住的話該找誰？' },
          { speaker: 'Eve', gender: 'female', text: 'Priya knows the system well — she’ll help.', zh: 'Priya 很熟這套系統——她會幫忙。' },
          { speaker: 'Ben', gender: 'male', text: 'Good to know. I really appreciate all this.', zh: '了解。真的很感謝你做這些。' },
          { speaker: 'Eve', gender: 'female', text: 'No bother. I want to leave it all in good shape.', zh: '別客氣。我想把一切都交接得妥妥當當。' }
        ]
      },
      {
        id: 'resigning-newjob',
        title: 'First day at a new job',
        titleZh: '新工作第一天',
        description: 'Being shown the ropes on day one.',
        lines: [
          { speaker: 'Colleague', gender: 'female', text: 'Welcome aboard! How are you feeling, first day nerves?', zh: '歡迎加入！感覺如何，第一天會緊張嗎？' },
          { speaker: 'Dan', gender: 'male', text: 'A little, but excited too. It’s a lot to take in.', zh: '有一點，但也很興奮。要消化的東西很多。' },
          { speaker: 'Colleague', gender: 'female', text: 'Don’t worry, everyone’s really friendly here.', zh: '別擔心，這裡大家都很友善。' },
          { speaker: 'Dan', gender: 'male', text: 'That’s reassuring. Where do I sit?', zh: '這讓我安心多了。我坐哪？' },
          { speaker: 'Colleague', gender: 'female', text: 'Just over here, next to me. I’ll show you the ropes.', zh: '就在這邊，我旁邊。我帶你上手。' },
          { speaker: 'Dan', gender: 'male', text: 'Thank you. Who should I introduce myself to?', zh: '謝謝你。我該跟誰自我介紹？' },
          { speaker: 'Colleague', gender: 'female', text: 'I’ll take you round and introduce the team after coffee.', zh: '喝完咖啡我帶你繞一圈，介紹團隊給你。' },
          { speaker: 'Dan', gender: 'male', text: 'Sounds good. Is there an induction to do?', zh: '聽起來不錯。有要做新人訓練嗎？' },
          { speaker: 'Colleague', gender: 'female', text: 'Yes, some training this morning, then we’ll ease you in.', zh: '有，今天早上有些訓練，之後再慢慢帶你進入狀況。' },
          { speaker: 'Dan', gender: 'male', text: 'Perfect. Just shout if I’m getting in the way.', zh: '太好了。如果我礙手礙腳就直說。' },
          { speaker: 'Colleague', gender: 'female', text: 'You won’t be. Let’s grab that coffee first.', zh: '不會的。我們先去喝杯咖啡吧。' }
        ]
      }
    ]
  },
  {
    id: 'payrise',
    title: 'Asking for a Pay Rise',
    titleZh: '加薪談判',
    icon: '📈',
    blurb: '爭取加薪、談條件、年度考核時的對話',
    scenarios: [
      {
        id: 'payrise-prep',
        title: 'Psyching yourself up',
        titleZh: '替自己打氣',
        description: 'A friend coaching you before the big conversation.',
        lines: [
          { speaker: 'Jay', gender: 'male', text: 'I’m finally going to ask for a pay rise tomorrow.', zh: '我明天終於要去爭取加薪了。' },
          { speaker: 'Holly', gender: 'female', text: 'Good for you! You’ve more than earned it.', zh: '太好了！你絕對配得上。' },
          { speaker: 'Jay', gender: 'male', text: 'I’m dreading it, though. What if they say no?', zh: '不過我很怕。萬一他們拒絕怎麼辦？' },
          { speaker: 'Holly', gender: 'female', text: 'Then you ask what you’d need to do to get there.', zh: '那你就問，要怎麼做才能達到。' },
          { speaker: 'Jay', gender: 'male', text: 'Good point. I should have my achievements ready.', zh: '有道理。我該把我的成績準備好。' },
          { speaker: 'Holly', gender: 'female', text: 'Exactly. Lead with the value you’ve added.', zh: '沒錯。先講你帶來的價值。' },
          { speaker: 'Jay', gender: 'male', text: 'I did bring in two big clients this year.', zh: '我今年確實拉到兩個大客戶。' },
          { speaker: 'Holly', gender: 'female', text: 'There you go. That’s your headline.', zh: '這就對了。這就是你的重點。' },
          { speaker: 'Jay', gender: 'male', text: 'Should I name a figure, or let them?', zh: '我該報個數字，還是讓他們開？' },
          { speaker: 'Holly', gender: 'female', text: 'Have one in mind, but aim a touch high.', zh: '心裡要有個數，但開高一點點。' },
          { speaker: 'Jay', gender: 'male', text: 'Right. Deep breath. I can do this.', zh: '好。深呼吸。我做得到。' }
        ]
      },
      {
        id: 'payrise-meeting',
        title: 'The conversation',
        titleZh: '正式開口',
        description: 'Making the case to your manager.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'Thanks for making the time. I wanted to discuss my salary.', zh: '謝謝您撥空。我想談談我的薪資。' },
          { speaker: 'Manager', gender: 'female', text: 'Of course. What did you want to raise?', zh: '當然。你想談什麼？' },
          { speaker: 'Tom', gender: 'male', text: 'I feel my role has grown a lot this year.', zh: '我覺得我的職責今年成長了很多。' },
          { speaker: 'Manager', gender: 'female', text: 'You have taken on a great deal, that’s true.', zh: '你確實承擔了不少，這是真的。' },
          { speaker: 'Tom', gender: 'male', text: 'I led the new project, and it came in under budget.', zh: '我主導了新專案，而且還低於預算完成。' },
          { speaker: 'Manager', gender: 'female', text: 'That didn’t go unnoticed, I can assure you.', zh: '我向你保證，這些都被看在眼裡。' },
          { speaker: 'Tom', gender: 'male', text: 'So I’d like to talk about a rise to reflect that.', zh: '所以我想談談加薪來反映這些。' },
          { speaker: 'Manager', gender: 'female', text: 'I think that’s reasonable. What figure are you thinking?', zh: '我認為這很合理。你心中的數字是多少？' },
          { speaker: 'Tom', gender: 'male', text: 'I was hoping for an increase of around eight percent.', zh: '我希望能加大約百分之八。' },
          { speaker: 'Manager', gender: 'female', text: 'Let me take it to finance and come back to you.', zh: '讓我跟財務談談再回覆你。' },
          { speaker: 'Tom', gender: 'male', text: 'That’s all I can ask. Thank you for hearing me out.', zh: '這就夠了。謝謝您聽我說。' }
        ]
      },
      {
        id: 'payrise-review',
        title: 'The annual review',
        titleZh: '年度考核',
        description: 'Discussing performance and the year ahead.',
        lines: [
          { speaker: 'Manager', gender: 'male', text: 'So, how do you feel this year has gone overall?', zh: '那麼，你覺得今年整體表現如何？' },
          { speaker: 'Eve', gender: 'female', text: 'Really positive. I’ve grown a lot in the role.', zh: '非常正向。我在這個職位上成長很多。' },
          { speaker: 'Manager', gender: 'male', text: 'I’d agree. Your feedback from the team is excellent.', zh: '我同意。團隊對你的回饋很好。' },
          { speaker: 'Eve', gender: 'female', text: 'That’s lovely to hear. I’ve really enjoyed it.', zh: '聽到真開心。我做得很愉快。' },
          { speaker: 'Manager', gender: 'male', text: 'Where would you like to develop next?', zh: '你接下來想往哪方面發展？' },
          { speaker: 'Eve', gender: 'female', text: 'I’d love to take on more of a leadership role.', zh: '我很想多承擔一些領導的角色。' },
          { speaker: 'Manager', gender: 'male', text: 'I think you’re ready for that. Let’s make a plan.', zh: '我覺得你準備好了。我們來訂個計畫。' },
          { speaker: 'Eve', gender: 'female', text: 'Brilliant. Would that come with a review of pay?', zh: '太好了。這會一併檢視薪資嗎？' },
          { speaker: 'Manager', gender: 'male', text: 'It would, in line with the new responsibilities.', zh: '會的，會配合新增的職責。' },
          { speaker: 'Eve', gender: 'female', text: 'That’s exactly what I was hoping to hear.', zh: '這正是我希望聽到的。' },
          { speaker: 'Manager', gender: 'male', text: 'You’ve earned it. Let’s set some goals for next year.', zh: '你應得的。我們來訂明年的目標吧。' }
        ]
      }
    ]
  },
  {
    id: 'volunteering',
    title: 'Volunteering & Community',
    titleZh: '志工與社區',
    icon: '🤲',
    blurb: '當志工、社區活動、幫助他人時的對話',
    scenarios: [
      {
        id: 'volunteering-signup',
        title: 'Signing up to volunteer',
        titleZh: '報名當志工',
        description: 'Asking about helping at a local charity.',
        lines: [
          { speaker: 'Coordinator', gender: 'female', text: 'Hello! Are you interested in volunteering with us?', zh: '您好！您有興趣來當志工嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'Yes, I’d love to give something back locally.', zh: '是的，我很想為在地社區盡點心力。' },
          { speaker: 'Coordinator', gender: 'female', text: 'That’s wonderful. What sort of thing appeals?', zh: '太好了。您對哪方面比較有興趣？' },
          { speaker: 'Sam', gender: 'male', text: 'Maybe the food bank, or helping at events.', zh: '也許是食物銀行，或在活動中幫忙。' },
          { speaker: 'Coordinator', gender: 'female', text: 'Both are great. How much time can you spare?', zh: '兩個都很好。您能撥出多少時間？' },
          { speaker: 'Sam', gender: 'male', text: 'A few hours at weekends, ideally.', zh: '最理想是週末幾個小時。' },
          { speaker: 'Coordinator', gender: 'female', text: 'Perfect. We’re always short-staffed on Saturdays.', zh: '太好了。我們週六總是人手不足。' },
          { speaker: 'Sam', gender: 'male', text: 'Do I need any particular experience?', zh: '需要什麼特別的經驗嗎？' },
          { speaker: 'Coordinator', gender: 'female', text: 'Not at all — just enthusiasm and a friendly face.', zh: '完全不用——只要有熱忱和親切的笑容。' },
          { speaker: 'Sam', gender: 'male', text: 'I can definitely manage that. When can I start?', zh: '這我絕對可以。我什麼時候能開始？' },
          { speaker: 'Coordinator', gender: 'female', text: 'Pop in Saturday and we’ll show you the ropes.', zh: '週六過來，我們帶您上手。' }
        ]
      },
      {
        id: 'volunteering-event',
        title: 'Helping at a community event',
        titleZh: '社區活動幫忙',
        description: 'Pitching in at a local fundraiser.',
        lines: [
          { speaker: 'Roy', gender: 'male', text: 'Morning! Where do you need me today?', zh: '早安！今天需要我幫哪裡？' },
          { speaker: 'Sue', gender: 'female', text: 'Could you help set up the stalls out front?', zh: '你能幫忙在前面搭攤位嗎？' },
          { speaker: 'Roy', gender: 'male', text: 'Course. Where do the tables go?', zh: '當然。桌子放哪？' },
          { speaker: 'Sue', gender: 'female', text: 'Along the railings, leaving room for the queue.', zh: '沿著欄杆擺，留出排隊的空間。' },
          { speaker: 'Roy', gender: 'male', text: 'Will do. Is it just cakes on this one?', zh: '好。這攤只賣蛋糕嗎？' },
          { speaker: 'Sue', gender: 'female', text: 'Cakes and a raffle. All for the local hospice.', zh: '蛋糕加摸彩。全為了在地的安寧療護中心。' },
          { speaker: 'Roy', gender: 'male', text: 'Lovely cause. How are we doing for helpers?', zh: '很有意義。人手夠嗎？' },
          { speaker: 'Sue', gender: 'female', text: 'A couple short, but we’ll muddle through.', zh: '差兩個人，不過我們會勉強應付過去。' },
          { speaker: 'Roy', gender: 'male', text: 'I can do an extra hour if it helps.', zh: '如果有幫助，我可以多留一小時。' },
          { speaker: 'Sue', gender: 'female', text: 'You’re a star. That would be a huge help.', zh: '你真是好人。那幫了大忙。' },
          { speaker: 'Roy', gender: 'male', text: 'Happy to. Right, let’s get these tables up.', zh: '樂意之至。好，我們來把桌子搭起來。' }
        ]
      },
      {
        id: 'volunteering-neighbour',
        title: 'Helping a neighbour',
        titleZh: '幫助鄰居',
        description: 'Offering a hand to an elderly neighbour.',
        lines: [
          { speaker: 'Anna', gender: 'female', text: 'Morning, Mr Hill. Can I give you a hand with those?', zh: '早安，Hill 先生。我幫您拿那些吧？' },
          { speaker: 'Mr Hill', gender: 'male', text: 'Oh, would you? These bags are getting heavy.', zh: '喔，可以嗎？這些袋子越來越重。' },
          { speaker: 'Anna', gender: 'female', text: 'Of course. I’ll carry them in for you.', zh: '當然。我幫您拿進去。' },
          { speaker: 'Mr Hill', gender: 'male', text: 'That’s very kind. My knees aren’t what they were.', zh: '您真好心。我的膝蓋大不如前了。' },
          { speaker: 'Anna', gender: 'female', text: 'No trouble at all. Is there anything else you need?', zh: '一點也不麻煩。您還需要什麼嗎？' },
          { speaker: 'Mr Hill', gender: 'male', text: 'I’ve been meaning to get to the post office.', zh: '我一直想去一趟郵局。' },
          { speaker: 'Anna', gender: 'female', text: 'I’m popping there later — I can post it for you.', zh: '我等等正要去——我幫您寄吧。' },
          { speaker: 'Mr Hill', gender: 'male', text: 'Would you really? That would be marvellous.', zh: '真的嗎？那太好了。' },
          { speaker: 'Anna', gender: 'female', text: 'Honestly, it’s no bother. Just leave it with me.', zh: '真的，不麻煩。交給我就好。' },
          { speaker: 'Mr Hill', gender: 'male', text: 'You’re a good neighbour. Thank you, dear.', zh: '您真是個好鄰居。謝謝您，親愛的。' },
          { speaker: 'Anna', gender: 'female', text: 'Any time. Just knock if you ever need anything.', zh: '隨時。需要什麼就來敲門。' }
        ]
      }
    ]
  }
]
