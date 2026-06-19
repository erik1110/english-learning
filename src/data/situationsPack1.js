// Situations pack 1 — everyday British topics (gossip, cooking, shopping,
// Black Friday, driving, weather, films). Each category has 3 dialogues of 10+
// lines; speakers alternate gender so voices differ. Part of the drive toward
// 100 categories — add more packs and register them in situations.js.

export const PACK1 = [
  {
    id: 'gossip',
    title: 'Gossip & Catching Up',
    titleZh: '八卦閒聊',
    icon: '🗣️',
    blurb: '朋友間聊八卦、講近況時最自然的英式說法',
    scenarios: [
      {
        id: 'gossip-sarah',
        title: 'Did you hear about Sarah?',
        titleZh: '聽說 Sarah 的事了嗎',
        description: 'Two friends swapping the latest news over coffee.',
        lines: [
          { speaker: 'Megan', gender: 'female', text: 'Oh my days, have you heard about Sarah?', zh: '我的天，你聽說 Sarah 的事了嗎？' },
          { speaker: 'Holly', gender: 'female', text: 'No! Go on, spill — I’m all ears.', zh: '沒有！快說——我洗耳恭聽。' },
          { speaker: 'Megan', gender: 'female', text: 'Apparently she’s handed in her notice out of nowhere.', zh: '據說她突然就遞辭呈了。' },
          { speaker: 'Holly', gender: 'female', text: 'You’re joking! She’s been there for years.', zh: '你開玩笑吧！她在那裡待好多年了。' },
          { speaker: 'Megan', gender: 'female', text: 'I know, right? Word is she’s starting her own thing.', zh: '對啊！聽說她要自己創業。' },
          { speaker: 'Holly', gender: 'female', text: 'Good for her, honestly. Who told you all this?', zh: '說真的，替她高興。這些是誰跟你說的？' },
          { speaker: 'Megan', gender: 'female', text: 'Don’t say I said anything, but it was Dan from accounts.', zh: '別說是我講的，是會計部的 Dan。' },
          { speaker: 'Holly', gender: 'female', text: 'My lips are sealed. He does love a bit of gossip, mind.', zh: '我絕對守口如瓶。不過他還真愛講八卦。' },
          { speaker: 'Megan', gender: 'female', text: 'Tell me about it. Half of it you have to take with a pinch of salt.', zh: '可不是嘛。他講的有一半都得打點折扣聽。' },
          { speaker: 'Holly', gender: 'female', text: 'Still, no smoke without fire, eh?', zh: '不過，無風不起浪嘛，對吧？' },
          { speaker: 'Megan', gender: 'female', text: 'Exactly. Anyway, you didn’t hear it from me!', zh: '沒錯。總之，這話可不是我說的喔！' }
        ]
      },
      {
        id: 'gossip-couple',
        title: 'A new couple in the office',
        titleZh: '辦公室新戀情',
        description: 'Colleagues speculating about two co-workers.',
        lines: [
          { speaker: 'Priya', gender: 'female', text: 'Have you noticed Tom and Lucy have been awfully chummy lately?', zh: '你有沒有發現 Tom 跟 Lucy 最近超親密的？' },
          { speaker: 'Jack', gender: 'male', text: 'Now that you mention it, they did leave together yesterday.', zh: '你這麼一說，他們昨天還真的一起走的。' },
          { speaker: 'Priya', gender: 'female', text: 'And they always seem to take their breaks at the same time.', zh: '而且他們好像總是同一時間休息。' },
          { speaker: 'Jack', gender: 'male', text: 'Hmm, could just be a coincidence, to be fair.', zh: '嗯，平心而論，也可能只是巧合。' },
          { speaker: 'Priya', gender: 'female', text: 'Maybe, but she went bright red when someone mentioned him.', zh: '也許吧，但有人提到他時她臉一下就紅了。' },
          { speaker: 'Jack', gender: 'male', text: 'Ooh, that’s a bit of a giveaway, isn’t it?', zh: '喔，這有點露餡了吧？' },
          { speaker: 'Priya', gender: 'female', text: 'That’s what I thought! I reckon there’s something going on.', zh: '我就是這麼想！我猜他們之間有點什麼。' },
          { speaker: 'Jack', gender: 'male', text: 'Let’s not jump to conclusions, though.', zh: '不過我們先別急著下定論。' },
          { speaker: 'Priya', gender: 'female', text: 'Fair point. It’s really none of our business anyway.', zh: '有道理。反正這也不關我們的事。' },
          { speaker: 'Jack', gender: 'male', text: 'True, but it’s a bit of harmless fun to wonder.', zh: '是啦，不過猜一猜也算是無傷大雅的樂趣。' },
          { speaker: 'Priya', gender: 'female', text: 'Ha! My money’s on them being an item by Christmas.', zh: '哈！我賭他們聖誕節前就會在一起。' }
        ]
      },
      {
        id: 'gossip-neighbour',
        title: 'The neighbour’s big news',
        titleZh: '鄰居的大消息',
        description: 'Catching up on what’s happening down the street.',
        lines: [
          { speaker: 'Carol', gender: 'female', text: 'You’ll never guess what’s happening at number 12.', zh: '你絕對猜不到 12 號發生了什麼事。' },
          { speaker: 'Geoff', gender: 'male', text: 'Go on, what are they up to now?', zh: '說吧，他們又在搞什麼？' },
          { speaker: 'Carol', gender: 'female', text: 'They’re putting in a massive extension out the back.', zh: '他們要在後院加蓋一個超大的擴建。' },
          { speaker: 'Geoff', gender: 'male', text: 'Another one? The whole street’s a building site these days.', zh: '又一個？這條街最近根本像個工地。' },
          { speaker: 'Carol', gender: 'female', text: 'I know. The noise has been doing my head in.', zh: '就是說啊。那噪音快把我搞瘋了。' },
          { speaker: 'Geoff', gender: 'male', text: 'Did they even get planning permission?', zh: '他們有申請建照嗎？' },
          { speaker: 'Carol', gender: 'female', text: 'That’s the thing — apparently not, and someone’s reported them.', zh: '問題就在這——好像沒有，已經有人去檢舉了。' },
          { speaker: 'Geoff', gender: 'male', text: 'Blimey. That’ll cause a right stir round here.', zh: '天啊。這在這附近肯定要鬧得沸沸揚揚。' },
          { speaker: 'Carol', gender: 'female', text: 'You’re telling me. The neighbours are up in arms about it.', zh: '可不是嘛。鄰居們都群情激憤。' },
          { speaker: 'Geoff', gender: 'male', text: 'Well, I’ll keep my nose out of it, thanks.', zh: '嗯，這事我可不想淌渾水，謝了。' },
          { speaker: 'Carol', gender: 'female', text: 'Probably wise. Cup of tea while we watch the drama unfold?', zh: '大概是明智之舉。要不要泡杯茶坐看好戲上演？' }
        ]
      }
    ]
  },
  {
    id: 'cooking',
    title: 'Cooking & Recipes',
    titleZh: '做飯料理',
    icon: '🍳',
    blurb: '下廚、聊食譜、嫌東嫌西時的廚房英語',
    scenarios: [
      {
        id: 'cooking-roast',
        title: 'Sunday roast',
        titleZh: '週日烤肉大餐',
        description: 'A couple getting the classic British roast on the table.',
        lines: [
          { speaker: 'Dave', gender: 'male', text: 'Right, what time do we want to eat the roast?', zh: '好，我們烤肉想幾點開動？' },
          { speaker: 'Nina', gender: 'female', text: 'Let’s aim for about two. Is the chicken in yet?', zh: '目標兩點左右吧。雞肉放進烤箱了嗎？' },
          { speaker: 'Dave', gender: 'male', text: 'Just gone in. I’ve whacked the oven up to two hundred.', zh: '剛放。我把烤箱開到兩百度了。' },
          { speaker: 'Nina', gender: 'female', text: 'Lovely. Don’t forget to baste it halfway through.', zh: '太好了。別忘了中途幫它澆一下油汁。' },
          { speaker: 'Dave', gender: 'male', text: 'Will do. Shall I peel the spuds for the roast potatoes?', zh: '會的。我來削馬鈴薯做烤馬鈴薯吧？' },
          { speaker: 'Nina', gender: 'female', text: 'Yes please, and par-boil them first so they go crispy.', zh: '好啊，先汆燙一下，這樣才會酥脆。' },
          { speaker: 'Dave', gender: 'male', text: 'Goose fat or oil? Goose fat makes them gorgeous.', zh: '用鵝油還是植物油？鵝油烤起來超讚。' },
          { speaker: 'Nina', gender: 'female', text: 'Goose fat, definitely. I’ll sort the veg and the gravy.', zh: '當然鵝油。我來處理蔬菜和肉汁。' },
          { speaker: 'Dave', gender: 'male', text: 'Homemade gravy? You’re spoiling me.', zh: '自製肉汁？你也太寵我了。' },
          { speaker: 'Nina', gender: 'female', text: 'Don’t get used to it! Can you do the Yorkshire puddings too?', zh: '別習慣了！你能順便做約克郡布丁嗎？' },
          { speaker: 'Dave', gender: 'male', text: 'Consider it done. This is going to be a proper feast.', zh: '包在我身上。這絕對會是一頓豐盛大餐。' }
        ]
      },
      {
        id: 'cooking-dinner',
        title: 'What’s for dinner?',
        titleZh: '晚餐吃什麼',
        description: 'Two flatmates deciding what to cook with what’s in the fridge.',
        lines: [
          { speaker: 'Sam', gender: 'male', text: 'I’m starving. What can we rustle up for tea?', zh: '我餓扁了。我們晚餐能弄點什麼？' },
          { speaker: 'Eve', gender: 'female', text: 'Let’s have a look. There’s not much in, to be honest.', zh: '來看看。老實說，沒剩什麼了。' },
          { speaker: 'Sam', gender: 'male', text: 'We’ve got some pasta and half a jar of sauce.', zh: '我們有一些義大利麵和半罐醬。' },
          { speaker: 'Eve', gender: 'female', text: 'And a few veg that need using up before they go off.', zh: '還有幾樣快壞掉、得趕快用掉的蔬菜。' },
          { speaker: 'Sam', gender: 'male', text: 'Chuck it all in? A quick veg pasta will do the job.', zh: '全丟進去？快煮個蔬菜義大利麵就行了。' },
          { speaker: 'Eve', gender: 'female', text: 'Sounds good. Grate the last of that cheese on top.', zh: '聽起來不錯。把剩下那塊起司刨上去。' },
          { speaker: 'Sam', gender: 'male', text: 'Will do. Shall I bung some garlic in as well?', zh: '好。我再丟點蒜頭進去好嗎？' },
          { speaker: 'Eve', gender: 'female', text: 'Go for it. Everything tastes better with garlic.', zh: '放吧。加了蒜什麼都更好吃。' },
          { speaker: 'Sam', gender: 'male', text: 'Right, you stir, I’ll do the washing up as we go.', zh: '好，你來攪，我一邊把碗洗一洗。' },
          { speaker: 'Eve', gender: 'female', text: 'Deal. Ten minutes and we’ll be tucking in.', zh: '成交。十分鐘後我們就能開動了。' },
          { speaker: 'Sam', gender: 'male', text: 'Perfect. Cheap, quick and no waste — result.', zh: '完美。便宜、快速又不浪費——讚啦。' }
        ]
      },
      {
        id: 'cooking-baking',
        title: 'A bit of a baking disaster',
        titleZh: '烘焙小災難',
        description: 'A cake that hasn’t quite gone to plan.',
        lines: [
          { speaker: 'Ruth', gender: 'female', text: 'Oh no. Come and look at this cake.', zh: '糟了。快來看看這個蛋糕。' },
          { speaker: 'Tom', gender: 'male', text: 'Ah. It’s sunk right in the middle, hasn’t it?', zh: '啊。它正中間整個塌下去了，對吧？' },
          { speaker: 'Ruth', gender: 'female', text: 'Like a crater. I think I opened the oven too early.', zh: '像個火山口。我想是烤箱開太早了。' },
          { speaker: 'Tom', gender: 'male', text: 'Classic mistake. Did you weigh everything out properly?', zh: '經典錯誤。你材料都有好好秤過嗎？' },
          { speaker: 'Ruth', gender: 'female', text: 'I sort of guessed the flour, if I’m honest.', zh: '老實說，麵粉我大概是用猜的。' },
          { speaker: 'Tom', gender: 'male', text: 'There’s your problem. Baking’s all about being precise.', zh: '問題就在這。烘焙講究的就是精準。' },
          { speaker: 'Ruth', gender: 'female', text: 'Lesson learned. It still smells amazing, though.', zh: '學到教訓了。不過它聞起來還是超香。' },
          { speaker: 'Tom', gender: 'male', text: 'Smells can’t lie. Shall we just cover it in icing?', zh: '香味不會騙人。我們乾脆全部塗滿糖霜遮一遮？' },
          { speaker: 'Ruth', gender: 'female', text: 'Ha! Slap enough icing on and no one will know.', zh: '哈！塗夠多糖霜就沒人看得出來了。' },
          { speaker: 'Tom', gender: 'male', text: 'Exactly. Plenty of buttercream covers a multitude of sins.', zh: '沒錯。足夠的奶油霜能遮掉一堆缺點。' },
          { speaker: 'Ruth', gender: 'female', text: 'Right, pass me the piping bag. We’ll rescue this yet.', zh: '好，把擠花袋遞給我。我們還能把它救回來。' }
        ]
      }
    ]
  },
  {
    id: 'shopping',
    title: 'Shopping',
    titleZh: '購物',
    icon: '🛍️',
    blurb: '試穿、結帳、退貨等購物情境的口語',
    scenarios: [
      {
        id: 'shopping-clothes',
        title: 'Trying on clothes',
        titleZh: '試穿衣服',
        description: 'A shopper and a helpful assistant in a clothes shop.',
        lines: [
          { speaker: 'Assistant', gender: 'female', text: 'Hiya, are you alright there? Let me know if you need a hand.', zh: '嗨，您還好嗎？需要幫忙再跟我說。' },
          { speaker: 'Liam', gender: 'male', text: 'Cheers. Have you got this shirt in a medium?', zh: '謝啦。這件襯衫有 M 號嗎？' },
          { speaker: 'Assistant', gender: 'female', text: 'Let me check out the back for you. Bear with me.', zh: '我去後面幫您看看。稍等一下。' },
          { speaker: 'Liam', gender: 'male', text: 'No worries, take your time.', zh: '別擔心，您慢慢來。' },
          { speaker: 'Assistant', gender: 'female', text: 'Here you go. The changing rooms are just over there.', zh: '給您。試衣間就在那邊。' },
          { speaker: 'Liam', gender: 'male', text: 'Ta. Hmm, it’s a bit snug across the shoulders.', zh: '謝了。嗯，肩膀這邊有點緊。' },
          { speaker: 'Assistant', gender: 'female', text: 'Want to size up? The large might hang a bit better.', zh: '要不要換大一號？L 號版型可能會更合身。' },
          { speaker: 'Liam', gender: 'male', text: 'Go on then. Does it come in navy as well?', zh: '那好吧。它也有深藍色嗎？' },
          { speaker: 'Assistant', gender: 'female', text: 'It does, and it’s actually in the sale at the moment.', zh: '有的，而且現在剛好在特價。' },
          { speaker: 'Liam', gender: 'male', text: 'Even better. I’ll take the navy large, then.', zh: '那更好了。那我就要深藍色的 L 號。' },
          { speaker: 'Assistant', gender: 'female', text: 'Lovely choice. I’ll pop it behind the till for you.', zh: '眼光真好。我先幫您放在收銀台後面。' }
        ]
      },
      {
        id: 'shopping-supermarket',
        title: 'At the supermarket',
        titleZh: '在超市',
        description: 'A couple working through the weekly shop.',
        lines: [
          { speaker: 'Anna', gender: 'female', text: 'Have you got the list? I don’t want to forget anything.', zh: '清單你拿著嗎？我不想漏買東西。' },
          { speaker: 'Mark', gender: 'male', text: 'Yep. Right, we need milk, bread and a few bits for dinner.', zh: '在我這。好，我們要買牛奶、麵包，還有些晚餐的東西。' },
          { speaker: 'Anna', gender: 'female', text: 'Grab the semi-skimmed, not the full fat this time.', zh: '這次拿半脫脂的，別拿全脂的。' },
          { speaker: 'Mark', gender: 'male', text: 'Will do. Ooh, these are on offer — two for one.', zh: '好。喔，這些在特價——買一送一。' },
          { speaker: 'Anna', gender: 'female', text: 'Only worth it if we’ll actually use them, mind.', zh: '不過要我們真的會用到才划算啊。' },
          { speaker: 'Mark', gender: 'male', text: 'Fair point. We always end up chucking stuff away.', zh: '有道理。我們老是最後把東西丟掉。' },
          { speaker: 'Anna', gender: 'female', text: 'Can you nip to the bakery aisle for a sourdough?', zh: '你能去烘焙區拿條酸種麵包嗎？' },
          { speaker: 'Mark', gender: 'male', text: 'On it. Do we need anything from the freezer section?', zh: '馬上去。冷凍區需要什麼嗎？' },
          { speaker: 'Anna', gender: 'female', text: 'Just a bag of peas. That’s us about done, I think.', zh: '一包豌豆就好。我想我們差不多買齊了。' },
          { speaker: 'Mark', gender: 'male', text: 'Let’s use the self-checkout — the queues are massive.', zh: '我們用自助結帳吧——排隊的人超多。' },
          { speaker: 'Anna', gender: 'female', text: 'Good idea. Have you got the bags for life?', zh: '好主意。你帶環保購物袋了嗎？' }
        ]
      },
      {
        id: 'shopping-return',
        title: 'Returning a faulty item',
        titleZh: '退換瑕疵品',
        description: 'A customer returning a broken gadget to customer service.',
        lines: [
          { speaker: 'Customer', gender: 'male', text: 'Hi, I’d like to return this, please. It’s stopped working.', zh: '您好，我想退這個。它不能用了。' },
          { speaker: 'Staff', gender: 'female', text: 'Sorry to hear that. Have you got the receipt with you?', zh: '很抱歉。您有帶收據嗎？' },
          { speaker: 'Customer', gender: 'male', text: 'Yes, here it is. I only bought it last week.', zh: '有，在這裡。我上週才買的。' },
          { speaker: 'Staff', gender: 'female', text: 'No problem. What seems to be the issue with it?', zh: '沒問題。它是出了什麼狀況呢？' },
          { speaker: 'Customer', gender: 'male', text: 'It won’t charge at all, even with a new cable.', zh: '它完全充不了電，換了新的線也一樣。' },
          { speaker: 'Staff', gender: 'female', text: 'Right, that does sound faulty. Would you like a refund or an exchange?', zh: '好，這聽起來確實是瑕疵。您想退款還是換貨？' },
          { speaker: 'Customer', gender: 'male', text: 'A refund would be great, if that’s OK.', zh: '可以的話，退款就好。' },
          { speaker: 'Staff', gender: 'female', text: 'Of course. I’ll just pop your card in the machine.', zh: '當然。我把您的卡插進機器一下。' },
          { speaker: 'Customer', gender: 'male', text: 'Lovely. How long does it take to come through?', zh: '太好了。退款大概多久會到帳？' },
          { speaker: 'Staff', gender: 'female', text: 'Usually three to five working days, back to your account.', zh: '通常是三到五個工作天，會退回您的帳戶。' },
          { speaker: 'Customer', gender: 'male', text: 'Brilliant, thanks for sorting that so quickly.', zh: '太好了，謝謝您這麼快幫我處理。' }
        ]
      }
    ]
  },
  {
    id: 'black-friday',
    title: 'Black Friday Sales',
    titleZh: '黑色星期五',
    icon: '🛒',
    blurb: '搶折扣、排隊、線上結帳的瘋狂購物季用語',
    scenarios: [
      {
        id: 'bf-planning',
        title: 'Planning the deals',
        titleZh: '計畫搶購',
        description: 'Two bargain-hunters mapping out their Black Friday strategy.',
        lines: [
          { speaker: 'Zoe', gender: 'female', text: 'Black Friday’s this week — have you made a list?', zh: '黑色星期五就在這週——你列清單了嗎？' },
          { speaker: 'Ben', gender: 'male', text: 'I’ve been eyeing up a new telly for ages.', zh: '我盯著一台新電視超久了。' },
          { speaker: 'Zoe', gender: 'female', text: 'Set a budget, though, or you’ll get carried away.', zh: '不過要設個預算，不然你會失控亂買。' },
          { speaker: 'Ben', gender: 'male', text: 'I know, I always get suckered in by the deals.', zh: '我知道，我老是被那些優惠騙進去。' },
          { speaker: 'Zoe', gender: 'female', text: 'Half of them aren’t even real discounts, you know.', zh: '你知道嗎，那些有一半根本不是真的打折。' },
          { speaker: 'Ben', gender: 'male', text: 'True. They bump the price up first, then “slash” it.', zh: '真的。他們先把價格抬高，再「砍價」。' },
          { speaker: 'Zoe', gender: 'female', text: 'Exactly. Check the price history before you buy.', zh: '沒錯。買之前先查一下歷史價格。' },
          { speaker: 'Ben', gender: 'male', text: 'Good shout. I’ll add the stuff to my basket tonight.', zh: '好主意。我今晚先把東西加進購物車。' },
          { speaker: 'Zoe', gender: 'female', text: 'And don’t forget the deals often start at midnight.', zh: '還有別忘了優惠常常是半夜就開始。' },
          { speaker: 'Ben', gender: 'male', text: 'I’ll set an alarm. No way I’m missing out this year.', zh: '我會設鬧鐘。今年我絕不錯過。' },
          { speaker: 'Zoe', gender: 'female', text: 'That’s the spirit. May the best bargain-hunter win!', zh: '這就對了。祝最會撿便宜的人勝出！' }
        ]
      },
      {
        id: 'bf-queue',
        title: 'Queuing at dawn',
        titleZh: '清晨排隊搶購',
        description: 'Standing in the cold outside a shop before it opens.',
        lines: [
          { speaker: 'Kate', gender: 'female', text: 'It’s freezing. How long have we been queuing now?', zh: '冷死了。我們排多久了？' },
          { speaker: 'Joe', gender: 'male', text: 'About an hour. The doors open at six, supposedly.', zh: '大概一小時。據說六點開門。' },
          { speaker: 'Kate', gender: 'female', text: 'There must be a hundred people ahead of us.', zh: '我們前面肯定有上百人。' },
          { speaker: 'Joe', gender: 'male', text: 'I hope the laptops aren’t all gone by the time we’re in.', zh: '希望輪到我們進去時筆電還沒被搶光。' },
          { speaker: 'Kate', gender: 'female', text: 'Same. Some people camped out overnight, apparently.', zh: '我也是。聽說有些人還在外面過夜。' },
          { speaker: 'Joe', gender: 'male', text: 'That’s dedication. Or madness, one of the two.', zh: '這叫敬業。不然就是瘋了，二選一。' },
          { speaker: 'Kate', gender: 'female', text: 'Right, the shutters are going up — get ready.', zh: '好，鐵捲門要拉起來了——準備好。' },
          { speaker: 'Joe', gender: 'male', text: 'Stay close and don’t get separated in the rush.', zh: '跟緊我，別在人潮裡走散了。' },
          { speaker: 'Kate', gender: 'female', text: 'You grab the laptops, I’ll head for the headphones.', zh: '你去搶筆電，我去拿耳機。' },
          { speaker: 'Joe', gender: 'male', text: 'Good plan. Meet you by the tills in ten?', zh: '好計畫。十分鐘後收銀台碰面？' },
          { speaker: 'Kate', gender: 'female', text: 'Deal. Right, here we go — wish me luck!', zh: '成交。好，衝了——祝我好運！' }
        ]
      },
      {
        id: 'bf-online',
        title: 'Online checkout chaos',
        titleZh: '線上結帳大亂',
        description: 'Trying to bag a deal online as the website struggles.',
        lines: [
          { speaker: 'Mia', gender: 'female', text: 'The website keeps crashing — it won’t load at all!', zh: '網站一直當機——根本載不出來！' },
          { speaker: 'Raj', gender: 'male', text: 'Everyone’s on it at once. Just keep refreshing.', zh: '大家同時都在搶。一直重新整理就對了。' },
          { speaker: 'Mia', gender: 'female', text: 'It’s put me in a queue — twelve thousand people ahead!', zh: '它把我排進候位——前面有一萬兩千人！' },
          { speaker: 'Raj', gender: 'male', text: 'Don’t close the tab whatever you do, or you’ll lose your place.', zh: '千萬別關掉分頁，不然你就排到最後了。' },
          { speaker: 'Mia', gender: 'female', text: 'It’s finally let me in. The trainers are in my basket.', zh: '終於讓我進去了。那雙運動鞋在我購物車裡了。' },
          { speaker: 'Raj', gender: 'male', text: 'Quick, check out before they sell out!', zh: '快，趁賣光前結帳！' },
          { speaker: 'Mia', gender: 'female', text: 'My card got declined — argh, not now!', zh: '我的卡被拒了——啊，偏偏這時候！' },
          { speaker: 'Raj', gender: 'male', text: 'Try the other card, but be quick about it.', zh: '試另一張卡，但動作要快。' },
          { speaker: 'Mia', gender: 'female', text: 'Yes! Payment went through. Order confirmed!', zh: '成功了！付款過了。訂單確認！' },
          { speaker: 'Raj', gender: 'male', text: 'Get in! And you got them half price as well.', zh: '太讚了！而且你還用半價買到。' },
          { speaker: 'Mia', gender: 'female', text: 'Worth the stress. Right, what’s next on the list?', zh: '這緊張值了。好，清單上下一個是什麼？' }
        ]
      }
    ]
  },
  {
    id: 'driving',
    title: 'Driving & Traffic',
    titleZh: '開車與交通',
    icon: '🚗',
    blurb: '塞車、學車、找車位等開車情境的道地說法',
    scenarios: [
      {
        id: 'driving-traffic',
        title: 'Stuck in traffic',
        titleZh: '塞在車陣裡',
        description: 'Two friends crawling along on the motorway.',
        lines: [
          { speaker: 'Paul', gender: 'male', text: 'We’ve been crawling along for half an hour now.', zh: '我們已經龜速爬了半小時了。' },
          { speaker: 'Lucy', gender: 'female', text: 'There must be an accident up ahead somewhere.', zh: '前面某處肯定出了車禍。' },
          { speaker: 'Paul', gender: 'male', text: 'The sat nav says there’s a forty-minute delay.', zh: '導航說會延誤四十分鐘。' },
          { speaker: 'Lucy', gender: 'female', text: 'Brilliant. We’re going to be late for the meeting.', zh: '真棒。我們開會要遲到了。' },
          { speaker: 'Paul', gender: 'male', text: 'Shall I come off at the next junction and go round?', zh: '我要不要下個交流道下去繞過去？' },
          { speaker: 'Lucy', gender: 'female', text: 'The back roads might be just as bad, mind.', zh: '不過小路可能一樣塞喔。' },
          { speaker: 'Paul', gender: 'male', text: 'True. At least we’re moving, even if it’s at a snail’s pace.', zh: '是啦。至少還在動，雖然慢得跟蝸牛一樣。' },
          { speaker: 'Lucy', gender: 'female', text: 'I’ll text ahead and say we’re running behind.', zh: '我先傳訊息說我們會晚到。' },
          { speaker: 'Paul', gender: 'male', text: 'Good idea. Some idiot keeps trying to undertake.', zh: '好主意。有個白癡一直想從內側超車。' },
          { speaker: 'Lucy', gender: 'female', text: 'Just let them. Not worth the road rage.', zh: '讓他過就好。不值得為這個路怒。' },
          { speaker: 'Paul', gender: 'male', text: 'You’re right. Ooh, it’s finally starting to ease up.', zh: '你說得對。喔，終於開始順了。' }
        ]
      },
      {
        id: 'driving-lesson',
        title: 'Learning to drive',
        titleZh: '學開車',
        description: 'A nervous learner and a patient instructor.',
        lines: [
          { speaker: 'Instructor', gender: 'male', text: 'Right, when you’re ready, pull away nice and gently.', zh: '好，準備好了就輕輕地、慢慢地起步。' },
          { speaker: 'Amy', gender: 'female', text: 'Sorry, I keep stalling it. I’m so nervous.', zh: '抱歉，我一直熄火。我好緊張。' },
          { speaker: 'Instructor', gender: 'male', text: 'No rush. Find the biting point, then ease off the clutch.', zh: '不急。找到離合器的接合點，再慢慢鬆開。' },
          { speaker: 'Amy', gender: 'female', text: 'Like that? Oh, it’s moving — it’s actually moving!', zh: '像這樣嗎？喔，它在動了——真的在動！' },
          { speaker: 'Instructor', gender: 'male', text: 'Well done. Now check your mirrors before you turn.', zh: '做得好。現在轉彎前先看後照鏡。' },
          { speaker: 'Amy', gender: 'female', text: 'Mirror, signal, manoeuvre — I remembered!', zh: '看鏡、打燈、操作——我記得！' },
          { speaker: 'Instructor', gender: 'male', text: 'Spot on. Ease off the gas as you approach the junction.', zh: '完全正確。接近路口時放鬆油門。' },
          { speaker: 'Amy', gender: 'female', text: 'There’s a cyclist — should I wait for them?', zh: '有個騎單車的——我該等他嗎？' },
          { speaker: 'Instructor', gender: 'male', text: 'Yes, give them plenty of room. Better safe than sorry.', zh: '對，給他充足的空間。安全第一。' },
          { speaker: 'Amy', gender: 'female', text: 'Phew. I think I’m getting the hang of it.', zh: '呼。我想我漸漸抓到訣竅了。' },
          { speaker: 'Instructor', gender: 'male', text: 'You really are. Keep this up and you’ll pass in no time.', zh: '你真的進步了。保持下去，很快就能考過。' }
        ]
      },
      {
        id: 'driving-parking',
        title: 'Looking for parking',
        titleZh: '找停車位',
        description: 'Circling a busy town centre hunting for a space.',
        lines: [
          { speaker: 'Tom', gender: 'male', text: 'This is our third lap of the car park.', zh: '這已經是我們繞停車場第三圈了。' },
          { speaker: 'Sara', gender: 'female', text: 'It’s heaving today. Everywhere’s full.', zh: '今天人爆多。哪裡都停滿了。' },
          { speaker: 'Tom', gender: 'male', text: 'There — someone’s reversing out on the left!', zh: '那裡——左邊有人正在倒車出來！' },
          { speaker: 'Sara', gender: 'female', text: 'Quick, put your indicator on before someone nicks it.', zh: '快，打方向燈，免得被別人搶走。' },
          { speaker: 'Tom', gender: 'male', text: 'It’s a tight squeeze. Can you guide me back?', zh: '空間有點窄。你能幫我引導倒車嗎？' },
          { speaker: 'Sara', gender: 'female', text: 'Keep coming… a bit more… right, stop! That’ll do.', zh: '繼續倒……再一點點……好，停！這樣可以了。' },
          { speaker: 'Tom', gender: 'male', text: 'Am I within the lines? I don’t want a ticket.', zh: '我有停在線內嗎？我可不想吃罰單。' },
          { speaker: 'Sara', gender: 'female', text: 'You’re bang in the middle. Nicely done.', zh: '你正好停在正中間。停得漂亮。' },
          { speaker: 'Tom', gender: 'male', text: 'How much is it an hour? It’s daylight robbery round here.', zh: '一小時多少錢？這附近根本是搶錢。' },
          { speaker: 'Sara', gender: 'female', text: 'Three quid. Get a ticket for two hours to be safe.', zh: '三英鎊。保險起見買兩小時的票。' },
          { speaker: 'Tom', gender: 'male', text: 'Will do. Right, let’s crack on before the meter runs out.', zh: '好。走吧，趁計時器跑完前快去辦事。' }
        ]
      }
    ]
  },
  {
    id: 'weather',
    title: 'Weather',
    titleZh: '天氣',
    icon: '🌦️',
    blurb: '英國人最愛聊的天氣——下雨、下雪、熱浪',
    scenarios: [
      {
        id: 'weather-summer',
        title: 'A typical British summer',
        titleZh: '典型的英國夏天',
        description: 'Two friends grumbling about the unpredictable weather.',
        lines: [
          { speaker: 'Beth', gender: 'female', text: 'So much for summer — it’s chucking it down again.', zh: '夏天個頭——又在傾盆大雨了。' },
          { speaker: 'Will', gender: 'male', text: 'Typical. It was glorious this morning, too.', zh: '一如往常。早上明明還陽光普照。' },
          { speaker: 'Beth', gender: 'female', text: 'You can’t trust the forecast for love nor money.', zh: '那氣象預報怎樣都信不得。' },
          { speaker: 'Will', gender: 'male', text: 'I left the house in a t-shirt and now I’m soaked.', zh: '我穿件 T 恤出門，現在全身濕透。' },
          { speaker: 'Beth', gender: 'female', text: 'Always carry a brolly, that’s my motto.', zh: '隨時帶把傘，這是我的座右銘。' },
          { speaker: 'Will', gender: 'male', text: 'Four seasons in one day, as usual.', zh: '一如往常，一天有四季。' },
          { speaker: 'Beth', gender: 'female', text: 'They reckon it’ll brighten up later, though.', zh: '不過他們說晚點會放晴。' },
          { speaker: 'Will', gender: 'male', text: 'I’ll believe it when I see it.', zh: '看到我才相信。' },
          { speaker: 'Beth', gender: 'female', text: 'At least the garden’s getting a good watering.', zh: '至少花園被好好澆了一頓。' },
          { speaker: 'Will', gender: 'male', text: 'Ever the optimist! Fancy waiting it out in the café?', zh: '你還真樂觀！要不要去咖啡廳等雨停？' },
          { speaker: 'Beth', gender: 'female', text: 'Go on then. A brew and a sit-down sounds perfect.', zh: '好啊。喝杯茶坐一下聽起來太完美了。' }
        ]
      },
      {
        id: 'weather-snow',
        title: 'A snow day',
        titleZh: '下雪天',
        description: 'Excitement and disruption as snow blankets the town.',
        lines: [
          { speaker: 'Nora', gender: 'female', text: 'Have you looked outside? It’s settled overnight!', zh: '你看外面了嗎？一夜之間積起雪來了！' },
          { speaker: 'Sam', gender: 'male', text: 'Wow, it’s a proper winter wonderland out there.', zh: '哇，外面簡直是個冬季仙境。' },
          { speaker: 'Nora', gender: 'female', text: 'The schools have closed, and the trains are cancelled.', zh: '學校停課了，火車也都取消了。' },
          { speaker: 'Sam', gender: 'male', text: 'A few centimetres and the whole country grinds to a halt.', zh: '才幾公分雪，全國就停擺了。' },
          { speaker: 'Nora', gender: 'female', text: 'The roads are like an ice rink — be careful out there.', zh: '路面像溜冰場一樣——出門小心點。' },
          { speaker: 'Sam', gender: 'male', text: 'I’m not driving anywhere in this, no chance.', zh: '這種天氣我哪兒都不開車，門都沒有。' },
          { speaker: 'Nora', gender: 'female', text: 'Shall we wrap up and take the kids sledging?', zh: '我們要不要包緊一點帶孩子去滑雪橇？' },
          { speaker: 'Sam', gender: 'male', text: 'Great idea. Dig out the wellies and gloves.', zh: '好主意。把雨靴和手套翻出來。' },
          { speaker: 'Nora', gender: 'female', text: 'I’ll make a flask of hot chocolate for after.', zh: '我來裝一保溫瓶熱可可，回來喝。' },
          { speaker: 'Sam', gender: 'male', text: 'Lovely. Let’s build a snowman while it lasts.', zh: '太好了。趁雪還在，我們來堆個雪人。' },
          { speaker: 'Nora', gender: 'female', text: 'Quick, before it all turns to slush by lunchtime!', zh: '快，趁它中午前還沒變成爛泥！' }
        ]
      },
      {
        id: 'weather-heatwave',
        title: 'A heatwave',
        titleZh: '熱浪來襲',
        description: 'Sweltering in unusually hot weather.',
        lines: [
          { speaker: 'Dan', gender: 'male', text: 'It’s absolutely boiling today — I’m melting.', zh: '今天熱爆了——我快融化了。' },
          { speaker: 'Faye', gender: 'female', text: 'They say it’s the hottest day of the year so far.', zh: '他們說這是今年到目前為止最熱的一天。' },
          { speaker: 'Dan', gender: 'male', text: 'No one here has air con, that’s the trouble.', zh: '這裡沒人裝冷氣，問題就在這。' },
          { speaker: 'Faye', gender: 'female', text: 'Keep the curtains shut to keep the heat out.', zh: '把窗簾拉上擋住熱氣。' },
          { speaker: 'Dan', gender: 'male', text: 'I’ve got a fan going but it’s just pushing warm air around.', zh: '我開了電扇，但它只是把熱風吹來吹去。' },
          { speaker: 'Faye', gender: 'female', text: 'Drink plenty of water and stay out of the midday sun.', zh: '多喝水，別在正中午曬太陽。' },
          { speaker: 'Dan', gender: 'male', text: 'Good shout. I caught the sun yesterday and I’m peeling.', zh: '提醒得好。我昨天曬傷了，現在在脫皮。' },
          { speaker: 'Faye', gender: 'female', text: 'Slap on some sun cream — factor fifty at least.', zh: '擦點防曬——至少 SPF 50。' },
          { speaker: 'Dan', gender: 'male', text: 'Fancy heading to the beach to cool off?', zh: '要不要去海邊消暑一下？' },
          { speaker: 'Faye', gender: 'female', text: 'Everyone and their dog will have the same idea.', zh: '所有人都會這麼想，到時人擠人。' },
          { speaker: 'Dan', gender: 'male', text: 'True. Let’s just sit in the shade with an ice lolly.', zh: '也是。我們就坐在陰涼處吃枝冰棒吧。' }
        ]
      }
    ]
  },
  {
    id: 'films',
    title: 'Films & Cinema',
    titleZh: '電影',
    icon: '🎬',
    blurb: '挑片、看電影、討論劇情時的口語表達',
    scenarios: [
      {
        id: 'films-picking',
        title: 'Picking a film',
        titleZh: '挑電影',
        description: 'A couple endlessly scrolling for something to watch.',
        lines: [
          { speaker: 'Chris', gender: 'male', text: 'We’ve been scrolling for twenty minutes. Just pick something!', zh: '我們已經滑了二十分鐘了。隨便挑一部啦！' },
          { speaker: 'Jen', gender: 'female', text: 'Nothing’s grabbing me. I’m not in the mood for a horror.', zh: '沒有一部吸引我。我沒心情看恐怖片。' },
          { speaker: 'Chris', gender: 'male', text: 'How about that thriller everyone’s been raving about?', zh: '那部大家都在大力推薦的驚悚片如何？' },
          { speaker: 'Jen', gender: 'female', text: 'Is it any good? The reviews were a bit mixed.', zh: '好看嗎？評價有點兩極。' },
          { speaker: 'Chris', gender: 'male', text: 'It’s got a cracking cast, at least.', zh: '至少卡司很強。' },
          { speaker: 'Jen', gender: 'female', text: 'Go on then. As long as it’s not too gory.', zh: '那就看吧。只要別太血腥就好。' },
          { speaker: 'Chris', gender: 'male', text: 'It’s a twelve, so it should be fine.', zh: '它是輔12級的，應該還好。' },
          { speaker: 'Jen', gender: 'female', text: 'Perfect. I’ll grab the popcorn and a couple of drinks.', zh: '太好了。我去拿爆米花和飲料。' },
          { speaker: 'Chris', gender: 'male', text: 'Get comfy. Right, no talking once it starts!', zh: '坐舒服點。好，一開演就不准講話！' },
          { speaker: 'Jen', gender: 'female', text: 'That’s rich, coming from you — you narrate everything.', zh: '你還好意思說——明明是你愛邊看邊講解。' },
          { speaker: 'Chris', gender: 'male', text: 'Fair point. Lips sealed, I promise. Press play.', zh: '說得對。我保證閉嘴。按播放吧。' }
        ]
      },
      {
        id: 'films-after',
        title: 'After the movie',
        titleZh: '看完電影後',
        description: 'Two friends dissecting the film they’ve just seen.',
        lines: [
          { speaker: 'Owen', gender: 'male', text: 'So, what did you make of it?', zh: '所以，你覺得怎麼樣？' },
          { speaker: 'Tara', gender: 'female', text: 'Honestly? A bit of a let-down after all the hype.', zh: '老實說？被炒這麼熱，看完有點失望。' },
          { speaker: 'Owen', gender: 'male', text: 'Really? I was on the edge of my seat the whole time.', zh: '真的嗎？我全程都看得很緊張。' },
          { speaker: 'Tara', gender: 'female', text: 'The ending felt rushed, though, don’t you think?', zh: '不過結局感覺很倉促，你不覺得嗎？' },
          { speaker: 'Owen', gender: 'male', text: 'Maybe a touch. The twist completely caught me out, mind.', zh: '也許有一點。不過那個轉折完全把我騙倒了。' },
          { speaker: 'Tara', gender: 'female', text: 'I saw it coming a mile off, to be fair.', zh: '平心而論，我老早就猜到了。' },
          { speaker: 'Owen', gender: 'male', text: 'The soundtrack was incredible, though, you’ve got to admit.', zh: '不過配樂超讚，你得承認。' },
          { speaker: 'Tara', gender: 'female', text: 'Oh, the music was spot on. And the cinematography.', zh: '喔，音樂無可挑剔。攝影也是。' },
          { speaker: 'Owen', gender: 'male', text: 'So six out of ten for you, then?', zh: '所以你給六分囉？' },
          { speaker: 'Tara', gender: 'female', text: 'About that. You clearly loved it more than I did.', zh: '差不多。你顯然比我喜歡多了。' },
          { speaker: 'Owen', gender: 'male', text: 'Each to their own! Fancy a curry to chew it over?', zh: '各有所好嘛！要不要去吃個咖哩邊吃邊聊？' }
        ]
      },
      {
        id: 'films-cinema',
        title: 'At the cinema',
        titleZh: '在電影院',
        description: 'Buying tickets and snacks at the box office.',
        lines: [
          { speaker: 'Cashier', gender: 'female', text: 'Hiya, what can I get you?', zh: '嗨，需要什麼呢？' },
          { speaker: 'Greg', gender: 'male', text: 'Two for the seven o’clock showing, please.', zh: '麻煩兩張七點那場的票。' },
          { speaker: 'Cashier', gender: 'female', text: 'Lovely. Where would you like to sit?', zh: '好的。您想坐哪裡？' },
          { speaker: 'Greg', gender: 'male', text: 'Somewhere near the back, middle if you can.', zh: '靠後排一點，可以的話坐中間。' },
          { speaker: 'Cashier', gender: 'female', text: 'How about row K, seats nine and ten?', zh: 'K 排第九、十號座位如何？' },
          { speaker: 'Greg', gender: 'male', text: 'Perfect. Can we get a large popcorn as well?', zh: '太好了。能再來一份大份爆米花嗎？' },
          { speaker: 'Cashier', gender: 'female', text: 'Sweet or salted? Or we do half and half.', zh: '甜的還是鹹的？或者可以一半一半。' },
          { speaker: 'Greg', gender: 'male', text: 'Half and half, and two cokes, please.', zh: '一半一半，再加兩杯可樂，麻煩了。' },
          { speaker: 'Cashier', gender: 'female', text: 'That’s twenty-four pounds altogether.', zh: '這樣總共二十四英鎊。' },
          { speaker: 'Greg', gender: 'male', text: 'There you go. Which screen is it on?', zh: '給您。是哪一廳呢？' },
          { speaker: 'Cashier', gender: 'female', text: 'Screen three, just up the stairs on your right. Enjoy!', zh: '三廳，上樓梯右手邊就是。看得愉快！' }
        ]
      }
    ]
  }
]
