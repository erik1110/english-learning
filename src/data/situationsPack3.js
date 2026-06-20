// Situations pack 3 — more everyday errands & services (dentist, post office,
// taxi, hotel, café, parenting, vet, tech support). Same shape: 3 dialogues per
// category, 11 lines each, alternating voices.

export const PACK3 = [
  {
    id: 'dentist',
    title: 'At the Dentist’s',
    titleZh: '看牙醫',
    icon: '🦷',
    blurb: '檢查、補牙、洗牙時實用的看牙英語',
    scenarios: [
      {
        id: 'dentist-checkup',
        title: 'A routine check-up',
        titleZh: '例行檢查',
        description: 'A patient in for their regular dental check-up.',
        lines: [
          { speaker: 'Dentist', gender: 'female', text: 'Come on through and hop in the chair for me.', zh: '請進，坐上診療椅吧。' },
          { speaker: 'Mark', gender: 'male', text: 'Thanks. It’s been about a year since my last visit.', zh: '謝謝。距離上次看診大概一年了。' },
          { speaker: 'Dentist', gender: 'female', text: 'No worries. Any pain or sensitivity I should know about?', zh: '沒關係。有什麼疼痛或敏感的狀況要告訴我嗎？' },
          { speaker: 'Mark', gender: 'male', text: 'One tooth twinges a bit with cold drinks.', zh: '有顆牙喝冰飲時會有點抽痛。' },
          { speaker: 'Dentist', gender: 'female', text: 'Right, let’s have a look. Open wide for me.', zh: '好，我來看看。嘴巴張大。' },
          { speaker: 'Mark', gender: 'male', text: 'Is it anything serious?', zh: '是什麼嚴重的問題嗎？' },
          { speaker: 'Dentist', gender: 'female', text: 'Just a little wear. Nothing a filling won’t sort.', zh: '只是有點磨損。補個牙就能解決。' },
          { speaker: 'Mark', gender: 'male', text: 'That’s a relief. Do I need to book another appointment?', zh: '那我就放心了。我需要再約一次診嗎？' },
          { speaker: 'Dentist', gender: 'female', text: 'Yes, for the filling. Otherwise everything looks healthy.', zh: '要，補牙那次。其他看起來都很健康。' },
          { speaker: 'Mark', gender: 'male', text: 'Great. Should I be flossing more?', zh: '太好了。我該多用牙線嗎？' },
          { speaker: 'Dentist', gender: 'female', text: 'It wouldn’t hurt — once a day, and you’ll be golden.', zh: '有益無害——一天一次，就萬無一失了。' }
        ]
      },
      {
        id: 'dentist-toothache',
        title: 'An emergency toothache',
        titleZh: '緊急牙痛',
        description: 'Ringing up in pain to be seen urgently.',
        lines: [
          { speaker: 'Receptionist', gender: 'female', text: 'Good morning, dental surgery. How can I help?', zh: '早安，牙科診所。有什麼能幫您？' },
          { speaker: 'Ella', gender: 'female', text: 'Hi, I’ve got terrible toothache — it kept me up all night.', zh: '您好，我牙痛得很厲害——整晚都睡不著。' },
          { speaker: 'Receptionist', gender: 'female', text: 'Oh, you poor thing. Is it a sharp or a throbbing pain?', zh: '哎呀，真可憐。是刺痛還是抽痛？' },
          { speaker: 'Ella', gender: 'female', text: 'A throbbing one, and the side of my face is swollen.', zh: '是抽痛，而且我半邊臉都腫了。' },
          { speaker: 'Receptionist', gender: 'female', text: 'That does sound like you need seeing today.', zh: '聽起來您今天真的需要來看一下。' },
          { speaker: 'Ella', gender: 'female', text: 'Is there any chance you can squeeze me in?', zh: '有沒有可能幫我擠出個空檔？' },
          { speaker: 'Receptionist', gender: 'female', text: 'We keep emergency slots free. Can you come at eleven?', zh: '我們有保留急診名額。您十一點能來嗎？' },
          { speaker: 'Ella', gender: 'female', text: 'Yes, definitely. Should I take anything in the meantime?', zh: '可以，一定到。這期間我可以先吃點什麼嗎？' },
          { speaker: 'Receptionist', gender: 'female', text: 'A normal painkiller should take the edge off for now.', zh: '一般的止痛藥應該能暫時緩解一下。' },
          { speaker: 'Ella', gender: 'female', text: 'Thank you so much. You’ve really put my mind at rest.', zh: '太感謝您了。您真的讓我安心多了。' },
          { speaker: 'Receptionist', gender: 'female', text: 'Not at all. Hang in there, we’ll get you sorted.', zh: '別客氣。撐著點，我們會幫您處理好的。' }
        ]
      },
      {
        id: 'dentist-cleaning',
        title: 'A scale and polish',
        titleZh: '洗牙與拋光',
        description: 'A hygienist appointment to clean the teeth.',
        lines: [
          { speaker: 'Hygienist', gender: 'male', text: 'Right, today we’re doing a scale and polish.', zh: '好，今天我們要洗牙加拋光。' },
          { speaker: 'Sara', gender: 'female', text: 'Will it hurt? My gums are a bit sensitive.', zh: '會痛嗎？我的牙齦有點敏感。' },
          { speaker: 'Hygienist', gender: 'male', text: 'It might be a little uncomfortable, but I’ll be gentle.', zh: '可能會有點不舒服，但我會輕一點。' },
          { speaker: 'Sara', gender: 'female', text: 'My gums have been bleeding when I brush, actually.', zh: '其實我刷牙時牙齦會流血。' },
          { speaker: 'Hygienist', gender: 'male', text: 'That’s often a sign of a bit of plaque build-up.', zh: '這通常是牙菌斑稍微堆積的徵兆。' },
          { speaker: 'Sara', gender: 'female', text: 'I see. Am I not brushing properly?', zh: '原來如此。我是不是沒刷對？' },
          { speaker: 'Hygienist', gender: 'male', text: 'You’re doing fine, just missing along the gum line.', zh: '你刷得不錯，只是牙齦邊緣有點刷不到。' },
          { speaker: 'Sara', gender: 'female', text: 'That makes sense. Any tips for keeping it clean?', zh: '有道理。有什麼保持清潔的訣竅嗎？' },
          { speaker: 'Hygienist', gender: 'male', text: 'Angle the brush, and use little circular movements.', zh: '把牙刷斜一點，用小小的畫圈方式刷。' },
          { speaker: 'Sara', gender: 'female', text: 'Got it. Wow, my teeth feel so smooth now.', zh: '懂了。哇，我的牙齒現在好滑。' },
          { speaker: 'Hygienist', gender: 'male', text: 'All done. Lovely and clean. See you in six months.', zh: '好了。又乾淨又亮。六個月後見。' }
        ]
      }
    ]
  },
  {
    id: 'postoffice',
    title: 'At the Post Office',
    titleZh: '郵局寄件',
    icon: '📮',
    blurb: '寄包裹、買郵票、領件時的實用對話',
    scenarios: [
      {
        id: 'post-parcel',
        title: 'Sending a parcel',
        titleZh: '寄包裹',
        description: 'Posting a package at the counter.',
        lines: [
          { speaker: 'Clerk', gender: 'male', text: 'Next, please. What can I do for you?', zh: '下一位。需要什麼服務？' },
          { speaker: 'Nina', gender: 'female', text: 'I’d like to send this parcel to Manchester, please.', zh: '我想把這個包裹寄到曼徹斯特。' },
          { speaker: 'Clerk', gender: 'male', text: 'Pop it on the scales. Is there anything fragile inside?', zh: '放上磅秤。裡面有易碎品嗎？' },
          { speaker: 'Nina', gender: 'female', text: 'Yes, there’s a bit of glassware, so handle with care.', zh: '有，裡面有些玻璃製品，請小心輕放。' },
          { speaker: 'Clerk', gender: 'male', text: 'I’ll mark it fragile. First or second class?', zh: '我會貼上易碎標示。要寄一級還是二級郵件？' },
          { speaker: 'Nina', gender: 'female', text: 'How much quicker is first class?', zh: '一級快多少？' },
          { speaker: 'Clerk', gender: 'male', text: 'Usually next day, versus two to three for second.', zh: '通常隔天到，二級則要兩到三天。' },
          { speaker: 'Nina', gender: 'female', text: 'First class, then. Can I get it tracked as well?', zh: '那寄一級。我也可以加追蹤嗎？' },
          { speaker: 'Clerk', gender: 'male', text: 'For a bit extra, yes. I’d recommend it for fragile items.', zh: '加一點錢就可以。易碎品我會建議加。' },
          { speaker: 'Nina', gender: 'female', text: 'Let’s do that. How much is it altogether?', zh: '那就加吧。總共多少錢？' },
          { speaker: 'Clerk', gender: 'male', text: 'That’s eight pounds twenty. Here’s your tracking receipt.', zh: '一共 8.20 英鎊。這是您的追蹤收據。' }
        ]
      },
      {
        id: 'post-collect',
        title: 'Collecting a missed delivery',
        titleZh: '領取漏收的包裹',
        description: 'Picking up a parcel after a failed delivery.',
        lines: [
          { speaker: 'Joe', gender: 'male', text: 'Hi, I got a card saying you’re holding a parcel for me.', zh: '您好，我收到通知卡說有我的包裹寄放在這。' },
          { speaker: 'Clerk', gender: 'female', text: 'No problem. Have you got the card and some ID?', zh: '沒問題。您有帶通知卡和身分證件嗎？' },
          { speaker: 'Joe', gender: 'male', text: 'Here’s the card, and my driving licence.', zh: '通知卡在這，還有我的駕照。' },
          { speaker: 'Clerk', gender: 'female', text: 'Lovely. I’ll just go and fetch it from the back.', zh: '好的。我去後面幫您拿。' },
          { speaker: 'Joe', gender: 'male', text: 'Cheers. They tried to deliver it while I was at work.', zh: '謝啦。他們投遞時我剛好在上班。' },
          { speaker: 'Clerk', gender: 'female', text: 'It happens a lot. Right, is this the one?', zh: '這很常見。好，是這個嗎？' },
          { speaker: 'Joe', gender: 'male', text: 'That’s the one. Do I need to sign for it?', zh: '就是這個。我需要簽收嗎？' },
          { speaker: 'Clerk', gender: 'female', text: 'Just a quick signature on the screen, please.', zh: '麻煩在螢幕上簽個名就好。' },
          { speaker: 'Joe', gender: 'male', text: 'Done. Can I redirect future parcels to a locker?', zh: '簽好了。以後的包裹可以改寄到取件櫃嗎？' },
          { speaker: 'Clerk', gender: 'female', text: 'You can set that up online with the carrier.', zh: '您可以在物流商的網站上設定。' },
          { speaker: 'Joe', gender: 'male', text: 'Good to know. Thanks for digging it out for me.', zh: '了解。謝謝您幫我把它找出來。' }
        ]
      },
      {
        id: 'post-stamps',
        title: 'Buying stamps and posting a letter',
        titleZh: '買郵票寄信',
        description: 'Sorting out postage for letters abroad.',
        lines: [
          { speaker: 'Amy', gender: 'female', text: 'Could I get a book of first-class stamps, please?', zh: '可以給我一本一級郵票嗎？' },
          { speaker: 'Clerk', gender: 'male', text: 'Of course. A book of eight, or would you like more?', zh: '當然。一本八張，還是您要多一點？' },
          { speaker: 'Amy', gender: 'female', text: 'A book of eight is plenty, thanks.', zh: '八張就很夠了，謝謝。' },
          { speaker: 'Clerk', gender: 'male', text: 'Anything else for you today?', zh: '今天還需要其他的嗎？' },
          { speaker: 'Amy', gender: 'female', text: 'Yes, I need to send this letter to France.', zh: '有，我要把這封信寄到法國。' },
          { speaker: 'Clerk', gender: 'male', text: 'Pop it on the scale. It’s just over the standard weight.', zh: '放上磅秤。它稍微超過標準重量。' },
          { speaker: 'Amy', gender: 'female', text: 'Oh, will that cost a lot more?', zh: '喔，那會貴很多嗎？' },
          { speaker: 'Clerk', gender: 'male', text: 'Just a little. It’s the large-letter rate for abroad.', zh: '只貴一點。是寄國外的大型信件費率。' },
          { speaker: 'Amy', gender: 'female', text: 'That’s fine. How long will it take to get there?', zh: '沒問題。大概多久會寄到？' },
          { speaker: 'Clerk', gender: 'male', text: 'Around five working days to mainland Europe.', zh: '寄到歐洲大陸大約五個工作天。' },
          { speaker: 'Amy', gender: 'female', text: 'Perfect. I’ll pop the stamp on and post it now.', zh: '太好了。我貼上郵票現在就寄。' }
        ]
      }
    ]
  },
  {
    id: 'taxi',
    title: 'Taxis & Ride-shares',
    titleZh: '計程車與叫車',
    icon: '🚕',
    blurb: '叫車、報地址、付車資時的口語',
    scenarios: [
      {
        id: 'taxi-ride',
        title: 'Hailing a black cab',
        titleZh: '攔計程車',
        description: 'Getting a taxi across town.',
        lines: [
          { speaker: 'Driver', gender: 'male', text: 'Evening. Where are you headed?', zh: '晚安。您要去哪裡？' },
          { speaker: 'Kate', gender: 'female', text: 'Could you take me to the station, please?', zh: '可以載我到車站嗎？' },
          { speaker: 'Driver', gender: 'male', text: 'No problem. Hop in. Catching a train, are you?', zh: '沒問題。請上車。要趕火車嗎？' },
          { speaker: 'Kate', gender: 'female', text: 'Yes, at half seven, so I’m cutting it a bit fine.', zh: '對，七點半的，所以時間有點趕。' },
          { speaker: 'Driver', gender: 'male', text: 'We’ll be fine. I’ll take the back roads to dodge the traffic.', zh: '來得及的。我走小路避開車流。' },
          { speaker: 'Kate', gender: 'female', text: 'Brilliant, thank you. Roughly how long will it take?', zh: '太好了，謝謝。大概要多久？' },
          { speaker: 'Driver', gender: 'male', text: 'About ten minutes this time of night.', zh: '這個時間大概十分鐘。' },
          { speaker: 'Kate', gender: 'female', text: 'Lovely. Do you take card, by the way?', zh: '太好了。對了，你們收卡嗎？' },
          { speaker: 'Driver', gender: 'male', text: 'I do, card or cash, whatever’s easier.', zh: '收的，刷卡或付現都行，看您方便。' },
          { speaker: 'Kate', gender: 'female', text: 'Card’s easier for me. Here we are already!', zh: '我刷卡比較方便。已經到了耶！' },
          { speaker: 'Driver', gender: 'male', text: 'Told you we’d make it. That’s nine pounds, please.', zh: '我就說來得及吧。一共九英鎊，麻煩了。' }
        ]
      },
      {
        id: 'taxi-app',
        title: 'A ride-share mix-up',
        titleZh: '叫車找不到司機',
        description: 'Trying to find the driver after booking on an app.',
        lines: [
          { speaker: 'Ben', gender: 'male', text: 'Hiya, are you my driver? I booked on the app.', zh: '嗨，您是我叫的司機嗎？我在 App 上訂的。' },
          { speaker: 'Driver', gender: 'female', text: 'Depends — what name’s it under?', zh: '要看狀況——是用什麼名字訂的？' },
          { speaker: 'Ben', gender: 'male', text: 'It’s under Ben, going to the Grand Hotel.', zh: '用 Ben 訂的，要去君悅飯店。' },
          { speaker: 'Driver', gender: 'female', text: 'Ah, sorry love, I’ve got a different booking.', zh: '啊，抱歉親愛的，我接的是另一筆。' },
          { speaker: 'Ben', gender: 'male', text: 'Oh no. The app says my car’s a blue one.', zh: '糟了。App 說我的車是藍色的。' },
          { speaker: 'Driver', gender: 'female', text: 'There’s a blue one just pulling in behind me.', zh: '我後面剛好開來一台藍色的。' },
          { speaker: 'Ben', gender: 'male', text: 'You’re right! The number plate matches too.', zh: '您說得對！車牌也對得上。' },
          { speaker: 'Driver', gender: 'female', text: 'There you go. Easy mistake at a busy rank.', zh: '這就對了。在繁忙的招呼站很容易認錯。' },
          { speaker: 'Ben', gender: 'male', text: 'Thanks for your help. Sorry to hold you up.', zh: '謝謝您幫忙。抱歉耽誤了您。' },
          { speaker: 'Driver', gender: 'female', text: 'Not at all. Have a good evening!', zh: '別客氣。祝您有個愉快的夜晚！' },
          { speaker: 'Ben', gender: 'male', text: 'You too. Right, better not keep my actual driver waiting!', zh: '您也是。好，可別讓我真正的司機等太久！' }
        ]
      },
      {
        id: 'taxi-airport',
        title: 'Booking a cab to the airport',
        titleZh: '預約機場接送',
        description: 'Phoning to pre-book an early airport run.',
        lines: [
          { speaker: 'Dispatcher', gender: 'female', text: 'Hello, City Cabs. How can I help?', zh: '您好，城市計程車。有什麼能幫您？' },
          { speaker: 'Tom', gender: 'male', text: 'Hi, I’d like to book a taxi to the airport tomorrow.', zh: '您好，我想預約明天到機場的計程車。' },
          { speaker: 'Dispatcher', gender: 'female', text: 'No problem. What time’s your flight?', zh: '沒問題。您的班機幾點？' },
          { speaker: 'Tom', gender: 'male', text: 'It’s at nine, so I’d need picking up around six.', zh: '九點的，所以我大概要六點被接走。' },
          { speaker: 'Dispatcher', gender: 'female', text: 'Six on the dot. Can I take the pickup address?', zh: '六點整。可以告訴我接送地址嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'It’s 22 Mill Lane. How much is it, roughly?', zh: '磨坊巷 22 號。大概要多少錢？' },
          { speaker: 'Dispatcher', gender: 'female', text: 'A fixed fare of thirty-five to that terminal.', zh: '到那個航廈是固定車資三十五英鎊。' },
          { speaker: 'Tom', gender: 'male', text: 'That’s fine. Will the driver help with the cases?', zh: '沒問題。司機會幫忙搬行李嗎？' },
          { speaker: 'Dispatcher', gender: 'female', text: 'Of course, they’ll give you a hand with the luggage.', zh: '當然，他們會幫您搬行李。' },
          { speaker: 'Tom', gender: 'male', text: 'Great. Could the driver text when they arrive?', zh: '太好了。司機到的時候可以傳訊息給我嗎？' },
          { speaker: 'Dispatcher', gender: 'female', text: 'They’ll drop you a text. You’re all booked in.', zh: '他們會傳訊息給您。已經幫您訂好了。' }
        ]
      }
    ]
  },
  {
    id: 'hotel',
    title: 'At a Hotel',
    titleZh: '飯店住宿',
    icon: '🏨',
    blurb: '入住、客房服務、退房時的旅館英語',
    scenarios: [
      {
        id: 'hotel-checkin',
        title: 'Checking in',
        titleZh: '辦理入住',
        description: 'Arriving and checking in at reception.',
        lines: [
          { speaker: 'Receptionist', gender: 'female', text: 'Good afternoon, welcome. Do you have a reservation?', zh: '午安，歡迎。請問您有訂房嗎？' },
          { speaker: 'Raj', gender: 'male', text: 'Yes, it’s under Sharma, for two nights.', zh: '有，用 Sharma 訂的，住兩晚。' },
          { speaker: 'Receptionist', gender: 'female', text: 'Found you. A double room with breakfast included.', zh: '找到了。一間雙人房，含早餐。' },
          { speaker: 'Raj', gender: 'male', text: 'Lovely. What time is breakfast served?', zh: '太好了。早餐幾點開始供應？' },
          { speaker: 'Receptionist', gender: 'female', text: 'Seven till ten in the restaurant on the ground floor.', zh: '一樓的餐廳，七點到十點。' },
          { speaker: 'Raj', gender: 'male', text: 'Perfect. Is there Wi-Fi in the rooms?', zh: '太好了。房間裡有 Wi-Fi 嗎？' },
          { speaker: 'Receptionist', gender: 'female', text: 'There is, and it’s free. The password’s on your key card.', zh: '有，而且免費。密碼在您的房卡上。' },
          { speaker: 'Raj', gender: 'male', text: 'Great. What time do we need to check out by?', zh: '太好了。我們幾點之前要退房？' },
          { speaker: 'Receptionist', gender: 'female', text: 'Eleven o’clock, but we can store your bags after.', zh: '十一點，但之後我們可以幫您寄放行李。' },
          { speaker: 'Raj', gender: 'male', text: 'That’s handy. Which floor is the room on?', zh: '那很方便。房間在幾樓？' },
          { speaker: 'Receptionist', gender: 'female', text: 'The third — the lift’s just behind you. Enjoy your stay.', zh: '三樓——電梯就在您後面。祝您住宿愉快。' }
        ]
      },
      {
        id: 'hotel-service',
        title: 'Calling reception',
        titleZh: '打給櫃台',
        description: 'Ringing down about a problem in the room.',
        lines: [
          { speaker: 'Guest', gender: 'female', text: 'Hi, it’s room 304. Sorry to bother you.', zh: '您好，這是 304 房。抱歉打擾了。' },
          { speaker: 'Receptionist', gender: 'male', text: 'No bother at all. What can I do for you?', zh: '一點也不打擾。有什麼能為您服務？' },
          { speaker: 'Guest', gender: 'female', text: 'The heating doesn’t seem to be working.', zh: '暖氣好像壞了。' },
          { speaker: 'Receptionist', gender: 'male', text: 'Oh, I’m sorry. I’ll send someone up to look right away.', zh: '喔，抱歉。我馬上派人上去看。' },
          { speaker: 'Guest', gender: 'female', text: 'Thank you. Could I also get some extra towels?', zh: '謝謝。我也可以多要幾條毛巾嗎？' },
          { speaker: 'Receptionist', gender: 'male', text: 'Of course. I’ll have those brought up too.', zh: '當然。我會一併送上去。' },
          { speaker: 'Guest', gender: 'female', text: 'Brilliant. And what time does the bar close?', zh: '太好了。酒吧幾點打烊？' },
          { speaker: 'Receptionist', gender: 'male', text: 'Midnight, and room service runs until eleven.', zh: '午夜十二點，客房服務則到十一點。' },
          { speaker: 'Guest', gender: 'female', text: 'Good to know. We might order something later.', zh: '了解。我們晚點可能會點些東西。' },
          { speaker: 'Receptionist', gender: 'male', text: 'Just dial nine for the kitchen whenever you’re ready.', zh: '需要時撥九就能接到廚房。' },
          { speaker: 'Guest', gender: 'female', text: 'Perfect. Thanks for sorting everything so quickly.', zh: '太好了。謝謝您這麼快幫忙處理。' }
        ]
      },
      {
        id: 'hotel-checkout',
        title: 'Checking out',
        titleZh: '辦理退房',
        description: 'Settling up and leaving the hotel.',
        lines: [
          { speaker: 'Receptionist', gender: 'female', text: 'Morning. Checking out? How was your stay?', zh: '早安。要退房嗎？住得還滿意嗎？' },
          { speaker: 'Greg', gender: 'male', text: 'Lovely, thank you. The room was spotless.', zh: '很棒，謝謝。房間一塵不染。' },
          { speaker: 'Receptionist', gender: 'female', text: 'Wonderful to hear. It’s room 210, isn’t it?', zh: '聽到真開心。是 210 房，對嗎？' },
          { speaker: 'Greg', gender: 'male', text: 'That’s right. Could I just check the bill?', zh: '對。我可以核對一下帳單嗎？' },
          { speaker: 'Receptionist', gender: 'female', text: 'Of course. There’s the room, plus a couple of drinks.', zh: '當然。這是房費，加上幾杯飲料。' },
          { speaker: 'Greg', gender: 'male', text: 'What’s this extra charge here?', zh: '這裡這筆額外費用是什麼？' },
          { speaker: 'Receptionist', gender: 'female', text: 'Ah, that’s the mini-bar. Did you not use it?', zh: '啊，那是迷你吧。您沒有用嗎？' },
          { speaker: 'Greg', gender: 'male', text: 'No, we didn’t touch it, actually.', zh: '沒有，其實我們完全沒碰。' },
          { speaker: 'Receptionist', gender: 'female', text: 'My apologies, I’ll take that straight off.', zh: '很抱歉，我馬上幫您扣掉。' },
          { speaker: 'Greg', gender: 'male', text: 'Thanks. Could you call us a taxi as well?', zh: '謝謝。可以順便幫我們叫台計程車嗎？' },
          { speaker: 'Receptionist', gender: 'female', text: 'Right away. It’ll be out front in five minutes.', zh: '馬上。五分鐘內會到門口。' }
        ]
      }
    ]
  },
  {
    id: 'cafe',
    title: 'At a Café',
    titleZh: '咖啡廳',
    icon: '☕',
    blurb: '點咖啡、外帶、找位子時的日常用語',
    scenarios: [
      {
        id: 'cafe-order',
        title: 'Ordering a coffee',
        titleZh: '點一杯咖啡',
        description: 'Ordering at the counter of a busy café.',
        lines: [
          { speaker: 'Barista', gender: 'female', text: 'Hiya, what can I get you?', zh: '嗨，需要什麼呢？' },
          { speaker: 'Sam', gender: 'male', text: 'Can I get a flat white, please?', zh: '可以給我一杯白咖啡嗎？' },
          { speaker: 'Barista', gender: 'female', text: 'Of course. Regular or large?', zh: '當然。要一般杯還是大杯？' },
          { speaker: 'Sam', gender: 'male', text: 'Regular’s fine. And could I get an oat milk one?', zh: '一般杯就好。可以幫我換燕麥奶嗎？' },
          { speaker: 'Barista', gender: 'female', text: 'No problem. Anything to eat with that?', zh: '沒問題。要搭配什麼吃的嗎？' },
          { speaker: 'Sam', gender: 'male', text: 'Go on, I’ll have one of those almond croissants.', zh: '好吧，我要一個那種杏仁可頌。' },
          { speaker: 'Barista', gender: 'female', text: 'Good choice. Eat in or take away?', zh: '好選擇。內用還是外帶？' },
          { speaker: 'Sam', gender: 'male', text: 'Eat in, please. Is that table by the window free?', zh: '內用，謝謝。靠窗那桌空著嗎？' },
          { speaker: 'Barista', gender: 'female', text: 'It is, grab it while you can. I’ll bring it over.', zh: '空著，趁還沒人快坐。我會幫您端過去。' },
          { speaker: 'Sam', gender: 'male', text: 'Lovely. How much is that altogether?', zh: '太好了。這樣總共多少錢？' },
          { speaker: 'Barista', gender: 'female', text: 'That’s six pounds forty. Won’t be a minute.', zh: '一共 6.40 英鎊。馬上就好。' }
        ]
      },
      {
        id: 'cafe-catchup',
        title: 'Catching up over coffee',
        titleZh: '喝咖啡敘舊',
        description: 'Two friends meeting up after a while.',
        lines: [
          { speaker: 'Holly', gender: 'female', text: 'It’s so good to see you! It’s been far too long.', zh: '見到你真好！我們真的太久沒見了。' },
          { speaker: 'Jess', gender: 'female', text: 'I know, ages! How have you been keeping?', zh: '我知道，超久的！你最近過得怎樣？' },
          { speaker: 'Holly', gender: 'female', text: 'Not bad at all. Busy with the new job, mostly.', zh: '還不錯。主要是忙新工作。' },
          { speaker: 'Jess', gender: 'female', text: 'Oh yes, how’s that going? Are you settling in?', zh: '喔對，工作如何？適應得還好嗎？' },
          { speaker: 'Holly', gender: 'female', text: 'Getting there. The team’s lovely, which helps.', zh: '漸入佳境。同事人很好，這有幫助。' },
          { speaker: 'Jess', gender: 'female', text: 'That makes all the difference, doesn’t it?', zh: '這真的差很多，對吧？' },
          { speaker: 'Holly', gender: 'female', text: 'Absolutely. Anyway, enough about me — what’s your news?', zh: '完全是。好啦，別老聊我——你有什麼新鮮事？' },
          { speaker: 'Jess', gender: 'female', text: 'Well, we’ve actually just put an offer in on a house.', zh: '嗯，我們其實剛對一間房子出價了。' },
          { speaker: 'Holly', gender: 'female', text: 'No way! That’s huge — congratulations!', zh: '不會吧！這是大事——恭喜你！' },
          { speaker: 'Jess', gender: 'female', text: 'Thanks! Fingers crossed it all goes through.', zh: '謝謝！希望一切順利成交。' },
          { speaker: 'Holly', gender: 'female', text: 'It will. We need a proper catch-up soon — dinner?', zh: '會的。我們得好好聚一下——吃個晚餐？' }
        ]
      },
      {
        id: 'cafe-takeaway',
        title: 'A quick takeaway order',
        titleZh: '趕時間外帶',
        description: 'Grabbing coffee on the way to work.',
        lines: [
          { speaker: 'Dan', gender: 'male', text: 'Morning! Two coffees to take away, please.', zh: '早安！兩杯咖啡外帶，謝謝。' },
          { speaker: 'Barista', gender: 'male', text: 'Sure thing. What can I get you?', zh: '沒問題。要點什麼？' },
          { speaker: 'Dan', gender: 'male', text: 'A large latte and a black Americano.', zh: '一杯大杯拿鐵和一杯美式（不加奶）。' },
          { speaker: 'Barista', gender: 'male', text: 'Any sugar or syrups in those?', zh: '要加糖或糖漿嗎？' },
          { speaker: 'Dan', gender: 'male', text: 'One sugar in the latte, nothing in the Americano.', zh: '拿鐵加一份糖，美式什麼都不加。' },
          { speaker: 'Barista', gender: 'male', text: 'Lovely. In a bit of a rush this morning?', zh: '好的。今天早上有點趕嗎？' },
          { speaker: 'Dan', gender: 'male', text: 'Always! I’m running late for the train as usual.', zh: '一向如此！我又快趕不上火車了。' },
          { speaker: 'Barista', gender: 'male', text: 'I’ll be quick, then. Lids on both?', zh: '那我加快。兩杯都蓋蓋子？' },
          { speaker: 'Dan', gender: 'male', text: 'Yes please, and a cardboard tray if you’ve got one.', zh: '好，麻煩了，有的話再給我一個紙托盤。' },
          { speaker: 'Barista', gender: 'male', text: 'Here you go. That’s five eighty when you’re ready.', zh: '給您。準備好的話一共 5.80 英鎊。' },
          { speaker: 'Dan', gender: 'male', text: 'Tap to pay. Cheers, you’re a lifesaver!', zh: '感應付款。謝啦，你真是救星！' }
        ]
      }
    ]
  },
  {
    id: 'parenting',
    title: 'Parenting & Kids',
    titleZh: '育兒生活',
    icon: '👶',
    blurb: '哄小孩、上學、做家事時的家庭對話',
    scenarios: [
      {
        id: 'parenting-school',
        title: 'The morning school run',
        titleZh: '早上趕上學',
        description: 'A frantic parent getting the kids out the door.',
        lines: [
          { speaker: 'Mum', gender: 'female', text: 'Come on, you two, we’re going to be late!', zh: '快點，你們兩個，我們要遲到了！' },
          { speaker: 'Leo', gender: 'male', text: 'I can’t find my other shoe!', zh: '我找不到我另一隻鞋！' },
          { speaker: 'Mum', gender: 'female', text: 'It’s by the front door where you left it.', zh: '就在你自己放的前門那邊。' },
          { speaker: 'Leo', gender: 'male', text: 'Found it! Have you signed my permission slip?', zh: '找到了！你簽我的同意書了嗎？' },
          { speaker: 'Mum', gender: 'female', text: 'Yes, it’s in your bag. Have you brushed your teeth?', zh: '簽了，在你書包裡。你刷牙了嗎？' },
          { speaker: 'Leo', gender: 'male', text: 'Doing it now! Can I take my football?', zh: '正在刷！我可以帶足球嗎？' },
          { speaker: 'Mum', gender: 'female', text: 'Not today, love, there’s no time. Coat on, please.', zh: '今天不行，寶貝，沒時間了。請把外套穿上。' },
          { speaker: 'Leo', gender: 'male', text: 'It’s raining, do I really need it?', zh: '在下雨，我真的需要穿嗎？' },
          { speaker: 'Mum', gender: 'female', text: 'Yes, you’ll catch your death otherwise.', zh: '要，不然你會著涼感冒。' },
          { speaker: 'Leo', gender: 'male', text: 'Fine. Can we have pancakes after school?', zh: '好啦。放學後可以吃鬆餅嗎？' },
          { speaker: 'Mum', gender: 'female', text: 'If you’re good all day, then yes. Right, in the car!', zh: '如果你一整天乖乖的，就可以。好，上車！' }
        ]
      },
      {
        id: 'parenting-bedtime',
        title: 'Bedtime negotiations',
        titleZh: '睡前拉鋸戰',
        description: 'Trying to get a reluctant child to sleep.',
        lines: [
          { speaker: 'Dad', gender: 'male', text: 'Right, teeth brushed, pyjamas on — into bed you go.', zh: '好，牙刷好了，睡衣穿上了——快上床。' },
          { speaker: 'Mia', gender: 'female', text: 'But I’m not even tired, Daddy.', zh: '可是我根本不累，爸比。' },
          { speaker: 'Dad', gender: 'male', text: 'It’s already past your bedtime, sweetheart.', zh: '已經過你的睡覺時間了，寶貝。' },
          { speaker: 'Mia', gender: 'female', text: 'Just one more story, please? Pretty please?', zh: '再講一個故事就好，拜託？拜託拜託？' },
          { speaker: 'Dad', gender: 'male', text: 'One short one, and then it’s lights out.', zh: '一個短的，然後就要關燈。' },
          { speaker: 'Mia', gender: 'female', text: 'Can I have a glass of water too?', zh: '我也可以喝一杯水嗎？' },
          { speaker: 'Dad', gender: 'male', text: 'You had one five minutes ago, cheeky.', zh: '你五分鐘前才喝過了，小調皮。' },
          { speaker: 'Mia', gender: 'female', text: 'But I’m still thirsty. And can you leave the door open?', zh: '可是我還是渴。還有你可以把門開著嗎？' },
          { speaker: 'Dad', gender: 'male', text: 'Door open, landing light on, the usual. Now snuggle down.', zh: '門開著，走廊燈開著，老樣子。現在乖乖躺好。' },
          { speaker: 'Mia', gender: 'female', text: 'Okay. Night night, love you to the moon.', zh: '好啦。晚安，愛你到月亮那麼多。' },
          { speaker: 'Dad', gender: 'male', text: 'Love you to the moon and back. Sweet dreams.', zh: '愛你到月亮再回來那麼多。做個好夢。' }
        ]
      },
      {
        id: 'parenting-playdate',
        title: 'Arranging a playdate',
        titleZh: '安排玩伴聚會',
        description: 'Two parents sorting out a get-together for the kids.',
        lines: [
          { speaker: 'Carol', gender: 'female', text: 'The kids get on so well — we should sort a playdate.', zh: '孩子們處得這麼好——我們該安排個玩伴聚會。' },
          { speaker: 'Paul', gender: 'male', text: 'Great idea. They’ve been asking all week.', zh: '好主意。他們問了一整個禮拜了。' },
          { speaker: 'Carol', gender: 'female', text: 'Are you free Saturday? They could come to ours.', zh: '你週六有空嗎？他們可以來我們家。' },
          { speaker: 'Paul', gender: 'male', text: 'Saturday works. What time suits you?', zh: '週六可以。你方便什麼時候？' },
          { speaker: 'Carol', gender: 'female', text: 'Maybe after lunch, say one o’clock?', zh: '也許午餐後，一點左右？' },
          { speaker: 'Paul', gender: 'male', text: 'Perfect. Does Ollie have any allergies I should know about?', zh: '太好了。Ollie 有什麼我該知道的過敏嗎？' },
          { speaker: 'Carol', gender: 'female', text: 'Just nuts, so we keep an eye on snacks.', zh: '只有堅果，所以我們會留意點心。' },
          { speaker: 'Paul', gender: 'male', text: 'Good to know. I’ll make sure ours are nut-free.', zh: '了解。我會確保我們的點心不含堅果。' },
          { speaker: 'Carol', gender: 'female', text: 'Thanks. Shall I pick them both up from school?', zh: '謝謝。要我直接從學校把兩個都接回來嗎？' },
          { speaker: 'Paul', gender: 'male', text: 'That’d be brilliant. I’ll collect them around five.', zh: '那太好了。我大概五點去接他們。' },
          { speaker: 'Carol', gender: 'female', text: 'Sorted. They’ll be over the moon.', zh: '搞定。他們會樂翻天。' }
        ]
      }
    ]
  },
  {
    id: 'vet',
    title: 'At the Vet’s',
    titleZh: '寵物看獸醫',
    icon: '🐾',
    blurb: '帶寵物看病、打疫苗、結帳時的對話',
    scenarios: [
      {
        id: 'vet-checkup',
        title: 'Bringing in a poorly dog',
        titleZh: '帶生病的狗來看診',
        description: 'A worried owner with an unwell pet.',
        lines: [
          { speaker: 'Vet', gender: 'female', text: 'Hello there. So who have we got here today?', zh: '您好。今天帶來的是哪位小傢伙呀？' },
          { speaker: 'Owner', gender: 'male', text: 'This is Bailey. He’s been off his food for a few days.', zh: '這是 Bailey。他這幾天都不太吃東西。' },
          { speaker: 'Vet', gender: 'female', text: 'Poor lad. Any vomiting or low energy?', zh: '可憐的小傢伙。有嘔吐或沒精神嗎？' },
          { speaker: 'Owner', gender: 'male', text: 'He’s been really lethargic, and a bit sick this morning.', zh: '他超沒精神，今天早上還吐了一點。' },
          { speaker: 'Vet', gender: 'female', text: 'Let’s pop him on the table and have a feel of his tummy.', zh: '我們把他放上診療台，摸摸他的肚子。' },
          { speaker: 'Owner', gender: 'male', text: 'Is he in any pain, do you think?', zh: '您覺得他會痛嗎？' },
          { speaker: 'Vet', gender: 'female', text: 'A little tender here, but nothing alarming.', zh: '這裡有點壓痛，但沒什麼好擔心的。' },
          { speaker: 'Owner', gender: 'male', text: 'That’s a relief. Could he have eaten something he shouldn’t?', zh: '那我就放心了。他會不會誤食了不該吃的東西？' },
          { speaker: 'Vet', gender: 'female', text: 'Quite possibly. I’ll give him something to settle his stomach.', zh: '很有可能。我會開些藥幫他安撫腸胃。' },
          { speaker: 'Owner', gender: 'male', text: 'Thank you. Should I keep him on plain food for now?', zh: '謝謝您。我現在該讓他吃清淡的食物嗎？' },
          { speaker: 'Vet', gender: 'female', text: 'Yes, little and often. Ring us if he’s no better tomorrow.', zh: '對，少量多餐。如果他明天還沒好轉就打給我們。' }
        ]
      },
      {
        id: 'vet-vaccination',
        title: 'A kitten’s first jabs',
        titleZh: '小貓第一次打疫苗',
        description: 'Taking a new kitten for vaccinations.',
        lines: [
          { speaker: 'Nurse', gender: 'female', text: 'Aw, what a sweet little kitten. Is she settling in well?', zh: '哎喲，好可愛的小貓。她適應得還好嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'She’s a little terror, but we love her to bits.', zh: '她是個小搗蛋，但我們超愛她的。' },
          { speaker: 'Nurse', gender: 'female', text: 'Ha! So today’s her first set of vaccinations.', zh: '哈！那今天是她第一次接種疫苗。' },
          { speaker: 'Eve', gender: 'female', text: 'That’s right. Will she need more after this?', zh: '對。這次之後還需要再打嗎？' },
          { speaker: 'Nurse', gender: 'female', text: 'One more booster in a few weeks, then yearly.', zh: '幾週後再補強一劑，之後每年一次。' },
          { speaker: 'Eve', gender: 'female', text: 'Okay. Does she need anything else while she’s here?', zh: '好。她在這裡還需要做別的嗎？' },
          { speaker: 'Nurse', gender: 'female', text: 'We can sort her flea and worm treatment too.', zh: '我們也可以順便幫她做除蚤和驅蟲。' },
          { speaker: 'Eve', gender: 'female', text: 'Yes please. When should we think about getting her spayed?', zh: '好，麻煩了。那大概什麼時候該考慮幫她結紮？' },
          { speaker: 'Nurse', gender: 'female', text: 'Around four to six months is the usual time.', zh: '通常是四到六個月大的時候。' },
          { speaker: 'Eve', gender: 'female', text: 'Good to know. She was very brave with the needle!', zh: '了解。她打針的時候超勇敢的！' },
          { speaker: 'Nurse', gender: 'female', text: 'A model patient. Here’s a treat for being so good.', zh: '模範病患。給她一個獎勵，因為她好乖。' }
        ]
      },
      {
        id: 'vet-advice',
        title: 'Asking for advice',
        titleZh: '諮詢照顧建議',
        description: 'A pet owner asking about diet and care.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'Quick question — I think my dog’s putting on weight.', zh: '想問一下——我覺得我的狗變胖了。' },
          { speaker: 'Vet', gender: 'male', text: 'Let’s weigh him. How much are you feeding him a day?', zh: '我們來秤秤看。您一天餵他多少？' },
          { speaker: 'Tom', gender: 'male', text: 'Two big bowls, plus the odd treat or two.', zh: '兩大碗，再加上偶爾一兩個零食。' },
          { speaker: 'Vet', gender: 'male', text: 'Ah, that’s probably a touch too much for his size.', zh: '啊，以他的體型來說可能稍微多了點。' },
          { speaker: 'Tom', gender: 'male', text: 'Really? He always acts like he’s starving.', zh: '真的嗎？他總是一副快餓死的樣子。' },
          { speaker: 'Vet', gender: 'male', text: 'They’re very good at that! Try measuring his portions.', zh: '牠們最會裝了！試著把份量量好。' },
          { speaker: 'Tom', gender: 'male', text: 'Will do. Should I cut out treats completely?', zh: '好。零食該完全戒掉嗎？' },
          { speaker: 'Vet', gender: 'male', text: 'No need — just swap to healthier ones, like carrot.', zh: '不用——換成健康一點的就好，像紅蘿蔔。' },
          { speaker: 'Tom', gender: 'male', text: 'And more walks, I’m guessing?', zh: '還有多散步，我猜？' },
          { speaker: 'Vet', gender: 'male', text: 'Exactly. A longer walk a day will do him the world of good.', zh: '沒錯。每天多散步久一點對他大有好處。' },
          { speaker: 'Tom', gender: 'male', text: 'Right, operation slim-down starts today. Thanks!', zh: '好，減肥大作戰今天開始。謝謝！' }
        ]
      }
    ]
  },
  {
    id: 'techsupport',
    title: 'Tech & Phone Support',
    titleZh: '3C 與手機求助',
    icon: '📱',
    blurb: '處理當機、網路、手機問題的客服對話',
    scenarios: [
      {
        id: 'tech-broadband',
        title: 'The internet’s down',
        titleZh: '網路斷線了',
        description: 'Calling the broadband provider about a connection problem.',
        lines: [
          { speaker: 'Agent', gender: 'female', text: 'Thanks for holding. How can I help today?', zh: '感謝您稍候。今天有什麼能幫您？' },
          { speaker: 'Liam', gender: 'male', text: 'My broadband’s been down since this morning.', zh: '我的網路從今天早上就斷線了。' },
          { speaker: 'Agent', gender: 'female', text: 'Sorry to hear that. Have you tried restarting the router?', zh: '很抱歉。您試過重新開機路由器了嗎？' },
          { speaker: 'Liam', gender: 'male', text: 'Yes, twice, but it’s still not connecting.', zh: '試了，兩次，但還是連不上。' },
          { speaker: 'Agent', gender: 'female', text: 'Right. Are any of the lights flashing red or orange?', zh: '好。有沒有任何燈在閃紅燈或橘燈？' },
          { speaker: 'Liam', gender: 'male', text: 'The middle one’s flashing orange, yeah.', zh: '中間那個在閃橘燈，對。' },
          { speaker: 'Agent', gender: 'female', text: 'That suggests a line fault. Let me run a quick test.', zh: '這代表線路有問題。我幫您跑個快速檢測。' },
          { speaker: 'Liam', gender: 'male', text: 'No problem. How long will that take?', zh: '沒問題。那要多久？' },
          { speaker: 'Agent', gender: 'female', text: 'Just a moment… yes, there’s an outage in your area.', zh: '稍等一下……是的，您所在區域有故障停線。' },
          { speaker: 'Liam', gender: 'male', text: 'Ah, so it’s not just me. When will it be fixed?', zh: '啊，所以不是只有我。什麼時候會修好？' },
          { speaker: 'Agent', gender: 'female', text: 'Engineers are on it — it should be back by this evening.', zh: '工程師正在處理——今晚之前應該就會恢復。' }
        ]
      },
      {
        id: 'tech-phone',
        title: 'A cracked phone screen',
        titleZh: '手機螢幕破裂',
        description: 'Taking a damaged phone into a repair shop.',
        lines: [
          { speaker: 'Jess', gender: 'female', text: 'Hi, I dropped my phone and the screen’s cracked.', zh: '您好，我手機摔到，螢幕裂了。' },
          { speaker: 'Tech', gender: 'male', text: 'Ouch. Let’s have a look. Is the touchscreen still working?', zh: '哎喲。我看看。觸控還能用嗎？' },
          { speaker: 'Jess', gender: 'female', text: 'Sort of, but the bottom corner doesn’t respond.', zh: '勉強可以，但右下角沒反應。' },
          { speaker: 'Tech', gender: 'male', text: 'Right. It’ll need a new screen, I’m afraid.', zh: '好。恐怕需要換一片新螢幕。' },
          { speaker: 'Jess', gender: 'female', text: 'How much is that likely to set me back?', zh: '那大概要花我多少錢？' },
          { speaker: 'Tech', gender: 'male', text: 'For this model, around eighty pounds with the part.', zh: '這個型號，連零件大約八十英鎊。' },
          { speaker: 'Jess', gender: 'female', text: 'And will I lose any of my photos or data?', zh: '那我的照片或資料會不見嗎？' },
          { speaker: 'Tech', gender: 'male', text: 'No, a screen swap doesn’t touch your data.', zh: '不會，換螢幕不會動到您的資料。' },
          { speaker: 'Jess', gender: 'female', text: 'That’s a relief. How long will it take?', zh: '那我就放心了。要多久？' },
          { speaker: 'Tech', gender: 'male', text: 'About an hour. You’re welcome to wait or pop back.', zh: '大約一小時。您可以等，或晚點再回來。' },
          { speaker: 'Jess', gender: 'female', text: 'I’ll grab a coffee and come back. Thanks!', zh: '我去喝杯咖啡再回來。謝謝！' }
        ]
      },
      {
        id: 'tech-laptop',
        title: 'A slow laptop',
        titleZh: '筆電變慢',
        description: 'A friend helping troubleshoot a sluggish computer.',
        lines: [
          { speaker: 'Ben', gender: 'male', text: 'My laptop’s grinding to a halt. Any idea why?', zh: '我的筆電慢到快不動了。你知道為什麼嗎？' },
          { speaker: 'Amy', gender: 'female', text: 'When did it start? Did you install anything recently?', zh: '什麼時候開始的？你最近有裝什麼嗎？' },
          { speaker: 'Ben', gender: 'male', text: 'A couple of updates, then it’s been crawling ever since.', zh: '裝了幾個更新，之後就一直龜速。' },
          { speaker: 'Amy', gender: 'female', text: 'Let’s see how much storage you’ve got left.', zh: '我們看看你還剩多少儲存空間。' },
          { speaker: 'Ben', gender: 'male', text: 'Oh… it says the disk is almost full.', zh: '喔……它說硬碟快滿了。' },
          { speaker: 'Amy', gender: 'female', text: 'There’s your culprit. Clear out some big old files.', zh: '元凶就是它。清掉一些大型舊檔案吧。' },
          { speaker: 'Ben', gender: 'male', text: 'Good shout. I’ve got loads of videos I don’t need.', zh: '提醒得好。我有一堆用不到的影片。' },
          { speaker: 'Amy', gender: 'female', text: 'Back them up to the cloud, then delete the local copies.', zh: '把它們備份到雲端，再刪掉本機的檔案。' },
          { speaker: 'Ben', gender: 'male', text: 'And should I close all these tabs I’ve got open?', zh: '那我開著的這一堆分頁也該關掉嗎？' },
          { speaker: 'Amy', gender: 'female', text: 'Definitely — they eat up memory like nobody’s business.', zh: '當然——它們吃記憶體吃得超兇。' },
          { speaker: 'Ben', gender: 'male', text: 'Look at that, it’s already perking up. You’re a genius.', zh: '你看，它已經變順了。你是天才。' }
        ]
      }
    ]
  }
]
