// Authentic / idiomatic English usage (道地英語用法教學).
// 100+ items grouped by theme: everyday expressions, phrasal verbs, polite
// softeners, slang, idioms & sayings, and conversational reactions.
// Each item: { expr, register, meaning (EN), zh (中文), example, exampleZh, tip }
// Expressions are spoken male, examples female, in the UI.

export const IDIOM_GROUPS = [
  {
    id: 'everyday-brit',
    title: 'Everyday British Expressions',
    titleZh: '日常英式口語',
    blurb: '英國人天天掛在嘴邊、但課本不會教的說法',
    items: [
      { expr: 'I could murder a cup of tea', register: 'informal', meaning: 'I really want a cup of tea right now', zh: '我超想來杯茶', example: 'It’s freezing out there — I could murder a cup of tea.', exampleZh: '外面冷死了——我超想來杯熱茶。', tip: '可換成 “murder a pizza / a pint”，表達強烈渴望。' },
      { expr: 'It’s not my cup of tea', register: 'informal', meaning: 'it’s not something I particularly like', zh: '不是我的菜', example: 'Opera’s not really my cup of tea, to be honest.', exampleZh: '老實說，歌劇不太是我的菜。', tip: '婉轉表達不喜歡，比 “I hate it” 客氣。' },
      { expr: 'to faff about', register: 'informal', meaning: 'to waste time doing unimportant things', zh: '瞎忙、磨蹭', example: 'Stop faffing about and let’s get going!', exampleZh: '別再瞎磨蹭了，快走吧！', tip: '帶點不耐煩，朋友間常用。' },
      { expr: 'it’s a faff', register: 'informal', meaning: 'something annoyingly complicated or fiddly', zh: '一件很麻煩的事', example: 'Parking in town is such a faff these days.', exampleZh: '現在在市區停車真麻煩。', tip: '“a bit of a faff” 用來抱怨瑣事。' },
      { expr: 'to be knackered', register: 'informal', meaning: 'to be extremely tired', zh: '累壞了', example: 'I’m absolutely knackered after that shift.', exampleZh: '上完那班我整個人累垮了。', tip: '正式場合別用，口語超道地。' },
      { expr: 'to cost a bomb', register: 'informal', meaning: 'to be very expensive', zh: '貴得要命', example: 'That holiday must have cost a bomb!', exampleZh: '那趟假期肯定花了一大筆！', tip: '同義 “cost an arm and a leg”。' },
      { expr: 'to be gutted', register: 'informal', meaning: 'to be very disappointed or upset', zh: '超失望、超難過', example: 'I was gutted when the gig got cancelled.', exampleZh: '演唱會取消時我超失望。', tip: '英國人表達失望的第一選擇。' },
      { expr: 'fair enough', register: 'neutral', meaning: 'OK, that’s reasonable / I accept that', zh: '有道理、好吧', example: '“I can’t make it tonight.” “Fair enough, another time.”', exampleZh: '「我今晚去不了。」「好吧，改天囉。」', tip: '萬用的讓步回應語。' },
      { expr: 'to be skint', register: 'informal', meaning: 'to have no money', zh: '身無分文、很窮', example: 'I can’t come out — I’m totally skint till payday.', exampleZh: '我不能出去——發薪前我口袋空空。', tip: '比 “poor” 口語很多。' },
      { expr: 'a quid', register: 'informal', meaning: 'one pound (£)', zh: '一英鎊', example: 'It only cost me a couple of quid.', exampleZh: '它只花了我幾英鎊。', tip: 'quid 單複數同形：five quid。' },
      { expr: 'cheers', register: 'informal', meaning: 'thanks / goodbye (besides “to your health”)', zh: '謝啦／再見', example: 'Cheers for the lift, see you tomorrow!', exampleZh: '謝啦載我一程，明天見！', tip: '英國人常拿 cheers 當「謝謝」。' },
      { expr: 'to pop to the shops', register: 'informal', meaning: 'to go briefly to the shops', zh: '去一下商店', example: 'I’m just going to pop to the shops, back in five.', exampleZh: '我去一下商店，五分鐘就回。', tip: 'pop = 短暫地去某處。' },
      { expr: 'lovely', register: 'neutral', meaning: 'nice / great (used very broadly in the UK)', zh: '很好、很棒', example: '“Tea?” “Ooh, lovely, thanks.”', exampleZh: '「喝茶嗎？」「噢，太好了，謝謝。」', tip: '英國人用 lovely 形容幾乎一切。' },
      { expr: 'are you alright?', register: 'informal', meaning: 'hello / how are you (a greeting, not real concern)', zh: '嗨，還好嗎（只是打招呼）', example: '“Alright?” “Yeah, you?”', exampleZh: '「還好嗎？」「嗯，你呢？」', tip: '回 “Alright?” 即可，別當成真在問病情。' }
    ]
  },
  {
    id: 'phrasal-verbs',
    title: 'Must-know Phrasal Verbs',
    titleZh: '必學片語動詞',
    blurb: '把生硬的單字換成母語者愛用的片語動詞',
    items: [
      { expr: 'to crack on', register: 'informal', meaning: 'to continue working / get on with something', zh: '繼續努力、開始動工', example: 'Right, let’s crack on — we’ve got loads to do.', exampleZh: '好，開始幹吧——一堆事要做。', tip: '催進度時很好用。' },
      { expr: 'to put off', register: 'neutral', meaning: 'to postpone; or to discourage someone', zh: '延後；或讓人卻步', example: 'We’ve had to put the meeting off until next week.', exampleZh: '會議不得不延到下週。', tip: '“put off doing sth”。' },
      { expr: 'to come across', register: 'neutral', meaning: 'to give an impression; or to find by chance', zh: '給人某種印象；偶然發現', example: 'He comes across as shy, but he’s lovely once you know him.', exampleZh: '他給人害羞的感覺，熟了人很好。', tip: '描述觀感超地道。' },
      { expr: 'to sort out', register: 'informal', meaning: 'to resolve or organise something', zh: '解決、搞定', example: 'Don’t worry, I’ll sort it out tomorrow.', exampleZh: '別擔心，我明天搞定。', tip: '“Sorted!” = 搞定了！' },
      { expr: 'to get on with', register: 'informal', meaning: 'to have a good relationship with someone', zh: '和某人處得來', example: 'I get on really well with my new flatmates.', exampleZh: '我跟新室友處得超好。', tip: 'get on with sb（相處）vs sth（繼續）。' },
      { expr: 'to wind up', register: 'informal', meaning: 'to tease/annoy; or to end up somewhere', zh: '逗弄／惹惱；或落得某下場', example: 'He’s only winding you up — don’t take it to heart.', exampleZh: '他只是在逗你——別放心上。', tip: '“Are you winding me up?” = 你在唬我？' },
      { expr: 'to chip in', register: 'informal', meaning: 'to contribute money or join a conversation', zh: '湊錢出力；插話', example: 'If we all chip in, we can get her a decent present.', exampleZh: '大家一起湊錢就能買個好禮物。', tip: '湊份子的標準說法。' },
      { expr: 'to look forward to', register: 'neutral', meaning: 'to feel happy about something coming up', zh: '期待', example: 'I’m really looking forward to the weekend.', exampleZh: '我超期待週末。', tip: '後接名詞或 V-ing。' },
      { expr: 'to put up with', register: 'informal', meaning: 'to tolerate something annoying', zh: '忍受', example: 'I don’t know how you put up with that noise.', exampleZh: '我不懂你怎麼忍受那噪音。', tip: '比 tolerate 口語。' },
      { expr: 'to run out of', register: 'neutral', meaning: 'to have none left', zh: '用完、耗盡', example: 'We’ve run out of milk again.', exampleZh: '我們牛奶又喝完了。', tip: '常配 time/money/patience。' },
      { expr: 'to turn up', register: 'informal', meaning: 'to arrive / appear, often unexpectedly', zh: '出現、現身', example: 'She turned up an hour late with no apology.', exampleZh: '她遲到一小時才現身，也沒道歉。', tip: '反義 “not show up” = 沒出現。' },
      { expr: 'to get away with', register: 'informal', meaning: 'to avoid punishment for something', zh: '逃過懲罰、僥倖過關', example: 'He cheated and somehow got away with it.', exampleZh: '他作弊還居然沒被抓。', tip: '“get away with murder” = 為所欲為。' },
      { expr: 'to pick up on', register: 'neutral', meaning: 'to notice something subtle', zh: '察覺、注意到', example: 'She picked up on the tension straight away.', exampleZh: '她立刻就察覺到那股緊張。', tip: '指敏銳地注意細節。' },
      { expr: 'to back someone up', register: 'informal', meaning: 'to support someone', zh: '支持、撐腰', example: 'Thanks for backing me up in that meeting.', exampleZh: '謝謝你在會議上挺我。', tip: '也指備份檔案 (back up files)。' },
      { expr: 'to bring up', register: 'neutral', meaning: 'to mention a topic; or to raise a child', zh: '提起話題；或養育', example: 'Don’t bring up politics at dinner.', exampleZh: '晚餐時別提政治。', tip: '兩義都常見。' }
    ]
  },
  {
    id: 'softeners',
    title: 'Sounding Natural & Polite',
    titleZh: '讓語氣自然又禮貌',
    blurb: '母語者用來緩和、客氣、避免太直接的小詞',
    items: [
      { expr: 'to be honest / to be fair', register: 'neutral', meaning: 'introduces an honest or balanced opinion', zh: '老實說／平心而論', example: 'To be fair, she did warn us it might be tricky.', exampleZh: '平心而論，她確實提醒過會很棘手。', tip: '句首緩衝語。' },
      { expr: 'I was wondering if…', register: 'polite', meaning: 'a soft, polite way to make a request', zh: '我在想能不能…', example: 'I was wondering if you could give me a hand.', exampleZh: '我在想你能不能幫我一下。', tip: '比 “Can you…” 委婉。' },
      { expr: 'it’s a bit…', register: 'polite', meaning: 'understating something negative to be polite', zh: '有一點…（婉轉負面）', example: 'The room’s a bit small, isn’t it?', exampleZh: '這房間有點小，對吧？', tip: '英式輕描淡寫：a bit = 其實很。' },
      { expr: 'would you mind…?', register: 'polite', meaning: 'a polite way to ask someone to do something', zh: '你介意…嗎？', example: 'Would you mind keeping it down a little?', exampleZh: '你介意小聲一點嗎？', tip: '回 “Not at all” = 不介意（好的）。' },
      { expr: 'I’m afraid…', register: 'polite', meaning: 'softens bad news or a refusal', zh: '恐怕…', example: 'I’m afraid we’re fully booked this evening.', exampleZh: '恐怕我們今晚客滿了。', tip: '禮貌拒絕的標準開場。' },
      { expr: 'if that makes sense', register: 'neutral', meaning: 'checks the listener follows you', zh: '不知這樣講清不清楚', example: 'I’d rather lead on the design side, if that makes sense.', exampleZh: '我比較想主導設計，不知這樣講清楚嗎。', tip: '顯得謙和好溝通。' },
      { expr: 'sort of / kind of', register: 'informal', meaning: 'softens a statement; “somewhat”', zh: '有點、算是', example: 'It’s sort of complicated, to be honest.', exampleZh: '老實說，這有點複雜。', tip: '口語可唸成 “sorta / kinda”。' },
      { expr: 'I don’t suppose…', register: 'polite', meaning: 'a very tentative way to ask a favour', zh: '我想…應該不行吧（試探請求）', example: 'I don’t suppose you could lend me a fiver?', exampleZh: '你應該沒辦法借我五英鎊吧？', tip: '預設對方可能拒絕，極客氣。' },
      { expr: 'no offence, but…', register: 'informal', meaning: 'warns that what follows may sound rude', zh: '無意冒犯，但…', example: 'No offence, but that idea won’t work.', exampleZh: '無意冒犯，但那點子行不通。', tip: '回應可說 “none taken”。' },
      { expr: 'with respect', register: 'formal', meaning: 'polite preface before disagreeing', zh: '恕我直言', example: 'With respect, I think the figures tell a different story.', exampleZh: '恕我直言，我認為數字呈現的是另一回事。', tip: '正式場合表達不同意。' },
      { expr: 'just to check', register: 'neutral', meaning: 'softly confirms something without sounding pushy', zh: '我確認一下', example: 'Just to check — we’re still meeting at three?', exampleZh: '確認一下——我們還是三點碰面？', tip: '職場確認資訊很好用。' },
      { expr: 'if you don’t mind me asking', register: 'polite', meaning: 'softens a personal question', zh: '如果你不介意我問', example: 'How old are you, if you don’t mind me asking?', exampleZh: '不介意的話，請問你幾歲？', tip: '問私人問題前的緩衝。' }
    ]
  },
  {
    id: 'slang',
    title: 'Slang & Casual Talk',
    titleZh: '俚語與年輕人口語',
    blurb: '當地人、年輕人天天在講的非正式說法',
    items: [
      { expr: 'gutting', register: 'slang', meaning: 'really disappointing', zh: '超令人失望的', example: 'We lost in the last minute — absolutely gutting.', exampleZh: '我們最後一分鐘輸了——超令人扼腕。', tip: '由 gutted 衍生。' },
      { expr: 'sound', register: 'slang', meaning: 'good / reliable / OK (of a person or plan)', zh: '靠譜、人很好、沒問題', example: 'He’s a sound bloke, you’ll like him.', exampleZh: '他人很好，你會喜歡他的。', tip: '“Sound!” 單用 = 好啊。' },
      { expr: 'mate', register: 'slang', meaning: 'friend; also a friendly term of address', zh: '哥們、朋友', example: 'Alright, mate? Long time no see.', exampleZh: '還好嗎兄弟？好久不見。', tip: '對陌生人也能用，很親切。' },
      { expr: 'dodgy', register: 'slang', meaning: 'suspicious, unreliable, or low quality', zh: '可疑的、不太可靠的', example: 'That website looks a bit dodgy to me.', exampleZh: '那網站我看有點可疑。', tip: '形容人事物都行。' },
      { expr: 'cheeky', register: 'slang', meaning: 'playfully rude; or a small indulgent treat', zh: '調皮的；或小小放縱一下', example: 'We went for a cheeky pint after work.', exampleZh: '下班後我們去小酌一杯。', tip: '“cheeky Nando’s” 是經典用法。' },
      { expr: 'gobsmacked', register: 'slang', meaning: 'utterly astonished', zh: '驚呆了', example: 'I was gobsmacked when I heard the news.', exampleZh: '聽到消息我整個驚呆了。', tip: 'gob = 嘴（俚語）。' },
      { expr: 'knackered', register: 'slang', meaning: 'exhausted; or broken', zh: '累垮了；或壞掉了', example: 'The washing machine’s knackered again.', exampleZh: '洗衣機又壞了。', tip: '可形容人或機器。' },
      { expr: 'minging', register: 'slang', meaning: 'disgusting / unpleasant', zh: '超噁、很糟', example: 'The food at that place was minging.', exampleZh: '那家店的食物超難吃。', tip: '很口語，正式勿用。' },
      { expr: 'chuffed', register: 'slang', meaning: 'very pleased', zh: '超開心、超得意', example: 'She was well chuffed with her results.', exampleZh: '她對成績超滿意。', tip: '“well chuffed” = 非常開心。' },
      { expr: 'gobby', register: 'slang', meaning: 'too talkative or loud-mouthed', zh: '多嘴、大嘴巴', example: 'He’s a bit gobby after a couple of drinks.', exampleZh: '他喝幾杯後就有點多話。', tip: '帶貶意。' },
      { expr: 'grub', register: 'slang', meaning: 'food', zh: '吃的、食物', example: 'Fancy some grub before the film?', exampleZh: '看電影前想吃點東西嗎？', tip: '“Grub’s up!” = 開飯了！' },
      { expr: 'kip', register: 'slang', meaning: 'a sleep or nap', zh: '小睡、睡覺', example: 'I’m going to have a quick kip before dinner.', exampleZh: '晚餐前我要小睡一下。', tip: '當動詞也行：kip on the sofa。' },
      { expr: 'wonky', register: 'slang', meaning: 'crooked or not working properly', zh: '歪歪的、怪怪的', example: 'This table’s a bit wonky.', exampleZh: '這桌子有點晃／歪。', tip: '形容東西不正、不穩。' },
      { expr: 'peng', register: 'slang', meaning: 'very attractive or excellent (youth slang)', zh: '超讚、超正（年輕人用語）', example: 'That new burger place is peng.', exampleZh: '那家新漢堡店超讚。', tip: '較新潮，年輕族群用。' },
      { expr: 'bants / banter', register: 'slang', meaning: 'playful teasing between friends', zh: '損友間的玩笑、嘴砲', example: 'It’s just banter, don’t get upset.', exampleZh: '只是開玩笑啦，別生氣。', tip: 'bants 是縮寫。' },
      { expr: 'leg it', register: 'slang', meaning: 'to run away quickly', zh: '快跑、開溜', example: 'It started pouring so we legged it home.', exampleZh: '突然下大雨我們就拔腿跑回家。', tip: '“Leg it!” = 快跑！' },
      { expr: 'have a butcher’s', register: 'slang', meaning: 'to have a look (Cockney rhyming slang)', zh: '看一下（倫敦押韻俚語）', example: 'Let’s have a butcher’s at the menu.', exampleZh: '我們來看一下菜單。', tip: '源自 “butcher’s hook” → look。' },
      { expr: 'gaff', register: 'slang', meaning: 'someone’s home or place', zh: '住處、家', example: 'We’re having drinks round my gaff tonight.', exampleZh: '今晚我們在我家喝酒。', tip: '非常口語。' }
    ]
  },
  {
    id: 'idioms',
    title: 'Idioms & Sayings',
    titleZh: '慣用語與諺語',
    blurb: '形象生動、考試與生活都加分的慣用表達',
    items: [
      { expr: 'it’s raining cats and dogs', register: 'informal', meaning: 'it’s raining very heavily', zh: '下大雨、傾盆大雨', example: 'Take an umbrella — it’s raining cats and dogs.', exampleZh: '帶把傘——外面正下著傾盆大雨。', tip: '經典慣用語。' },
      { expr: 'to cost an arm and a leg', register: 'informal', meaning: 'to be extremely expensive', zh: '非常昂貴', example: 'Tickets to the final cost an arm and a leg.', exampleZh: '決賽門票貴得嚇人。', tip: '同義 “cost a bomb”。' },
      { expr: 'a piece of cake', register: 'informal', meaning: 'very easy', zh: '小菜一碟、輕而易舉', example: 'The exam was a piece of cake.', exampleZh: '那考試簡單得很。', tip: '同義 “a doddle”（英式）。' },
      { expr: 'to bite the bullet', register: 'neutral', meaning: 'to force yourself to do something unpleasant', zh: '咬牙硬撐、橫下心做', example: 'I bit the bullet and booked the dentist.', exampleZh: '我橫下心預約了牙醫。', tip: '面對逃避不了的事。' },
      { expr: 'to spill the beans', register: 'informal', meaning: 'to reveal a secret', zh: '洩漏祕密', example: 'Come on, spill the beans — what happened?', exampleZh: '快說啦——到底發生什麼事？', tip: '同義 “let the cat out of the bag”。' },
      { expr: 'once in a blue moon', register: 'informal', meaning: 'very rarely', zh: '千載難逢、難得一次', example: 'We only eat out once in a blue moon.', exampleZh: '我們難得才出去吃一次。', tip: '表示頻率極低。' },
      { expr: 'to hit the nail on the head', register: 'neutral', meaning: 'to describe something exactly right', zh: '一針見血、說中要點', example: 'You’ve hit the nail on the head there.', exampleZh: '你這話真是一針見血。', tip: '稱讚對方說得精準。' },
      { expr: 'the ball is in your court', register: 'neutral', meaning: 'it’s your turn to act or decide', zh: '輪到你決定／行動了', example: 'I’ve made my offer — the ball’s in your court now.', exampleZh: '我已開出條件——現在看你了。', tip: '源自網球。' },
      { expr: 'to beat around the bush', register: 'neutral', meaning: 'to avoid saying something directly', zh: '拐彎抹角', example: 'Stop beating around the bush and tell me.', exampleZh: '別拐彎抹角了，直接說吧。', tip: '常用否定要求對方直說。' },
      { expr: 'to cut corners', register: 'neutral', meaning: 'to do something cheaply or carelessly', zh: '偷工減料、便宜行事', example: 'They cut corners and the roof started leaking.', exampleZh: '他們偷工減料，屋頂就漏水了。', tip: '帶負面意味。' },
      { expr: 'to be on the ball', register: 'informal', meaning: 'to be alert and competent', zh: '機靈、反應快', example: 'The new assistant is really on the ball.', exampleZh: '新來的助理反應很快。', tip: '反義 “off the ball”。' },
      { expr: 'to call it a day', register: 'informal', meaning: 'to stop working on something', zh: '今天到此為止、收工', example: 'We’ve done enough — let’s call it a day.', exampleZh: '做得夠多了——今天就到這。', tip: '收尾很自然的說法。' },
      { expr: 'a storm in a teacup', register: 'informal', meaning: 'a lot of fuss over something trivial', zh: '小題大作、茶壺裡的風暴', example: 'It’s a storm in a teacup; it’ll blow over.', exampleZh: '只是小題大作，很快就過了。', tip: '美式作 “tempest in a teapot”。' },
      { expr: 'to pull someone’s leg', register: 'informal', meaning: 'to joke with / tease someone', zh: '開某人玩笑、唬人', example: 'Relax, I’m only pulling your leg.', exampleZh: '放輕鬆，我只是逗你的。', tip: '同義 “wind sb up”。' },
      { expr: 'to get cold feet', register: 'informal', meaning: 'to suddenly become nervous about doing something', zh: '臨陣退縮、打退堂鼓', example: 'He got cold feet the night before the wedding.', exampleZh: '婚禮前一晚他臨陣怯場了。', tip: '常用於重大決定前。' },
      { expr: 'to break the ice', register: 'neutral', meaning: 'to ease tension at a first meeting', zh: '打破僵局、破冰', example: 'A quick joke helped break the ice.', exampleZh: '一個小笑話化解了尷尬。', tip: '社交場合常用。' },
      { expr: 'to be over the moon', register: 'informal', meaning: 'to be extremely happy', zh: '欣喜若狂', example: 'They were over the moon about the new baby.', exampleZh: '他們為新生兒高興得不得了。', tip: '英式表達極度開心。' },
      { expr: 'to take the mickey', register: 'informal', meaning: 'to mock or make fun of someone', zh: '取笑、消遣某人', example: 'Are you taking the mickey out of my accent?', exampleZh: '你是在取笑我的口音嗎？', tip: '英式特有，略帶不爽。' }
    ]
  },
  {
    id: 'reactions',
    title: 'Reactions & Filler Words',
    titleZh: '口頭反應與填充語',
    blurb: '讓對話更自然流暢的反應詞與口頭禪',
    items: [
      { expr: 'you know what I mean?', register: 'informal', meaning: 'checks the listener follows / agrees', zh: '你懂我意思吧？', example: 'It’s just a bit much, you know what I mean?', exampleZh: '就是有點太over了，你懂吧？', tip: '口語填充，別過度使用。' },
      { expr: 'I mean…', register: 'informal', meaning: 'used to explain or correct yourself', zh: '我是說…', example: 'I mean, it’s fine, just not what I expected.', exampleZh: '我是說，還行啦，只是跟我想的不一樣。', tip: '開頭緩衝、補充說明。' },
      { expr: 'to be honest with you', register: 'informal', meaning: 'introduces a frank opinion', zh: '老實跟你說', example: 'To be honest with you, I’d rather stay in.', exampleZh: '老實跟你說，我寧願待在家。', tip: '常縮成 “tbh”（文字）。' },
      { expr: 'no way!', register: 'informal', meaning: 'expresses surprise or disbelief', zh: '不會吧！真的假的！', example: '“She quit?” “No way!”', exampleZh: '「她辭職了？」「不會吧！」', tip: '也可表強烈拒絕。' },
      { expr: 'you’re kidding!', register: 'informal', meaning: 'I can’t believe it', zh: '你開玩笑的吧！', example: '“Tickets are sold out.” “You’re kidding!”', exampleZh: '「票賣光了。」「你開玩笑的吧！」', tip: '同義 “you’re joking”。' },
      { expr: 'fair play', register: 'informal', meaning: 'shows respect/approval for someone’s effort', zh: '不錯喔、佩服', example: 'He finished the marathon? Fair play to him.', exampleZh: '他跑完馬拉松？真有兩下子。', tip: '英式稱讚他人努力。' },
      { expr: 'I suppose so', register: 'neutral', meaning: 'reluctant agreement', zh: '應該是吧（勉強同意）', example: '“We should go.” “I suppose so.”', exampleZh: '「我們該走了。」「也是啦。」', tip: '語氣不太情願。' },
      { expr: 'go on then', register: 'informal', meaning: 'OK, I’ll accept / do it (mild persuasion)', zh: '好吧、那就這樣', example: '“One more?” “Go on then.”', exampleZh: '「再來一杯？」「好吧。」', tip: '半推半就答應。' },
      { expr: 'oh, come off it', register: 'informal', meaning: 'I don’t believe you / stop exaggerating', zh: '少來了、別唬人', example: 'Come off it, you didn’t run that fast.', exampleZh: '少來了，你哪有跑那麼快。', tip: '帶開玩笑的不相信。' },
      { expr: 'bless him / her', register: 'informal', meaning: 'expresses fondness or mild pity', zh: '真可愛／真可憐（疼惜）', example: 'He tried his best, bless him.', exampleZh: '他盡力了，真是的。', tip: '英式溫情口頭禪。' },
      { expr: 'mind you', register: 'informal', meaning: 'introduces a qualifying afterthought', zh: '不過話說回來', example: 'It’s expensive. Mind you, the quality’s great.', exampleZh: '是有點貴。不過品質真的很好。', tip: '補充相反或限定的想法。' },
      { expr: 'there you go', register: 'informal', meaning: 'here you are; or “that’s how it is”', zh: '給你；或就是這樣', example: 'Press save, and there you go — all done.', exampleZh: '按儲存，好了——全部完成。', tip: '遞東西或完成事情時說。' },
      { expr: 'each to their own', register: 'informal', meaning: 'people have different tastes', zh: '各有所好', example: 'I don’t get it, but each to their own.', exampleZh: '我是不懂啦，不過各有所好。', tip: '尊重不同喜好。' },
      { expr: 'long story short', register: 'informal', meaning: 'to summarise quickly', zh: '長話短說', example: 'Long story short, we missed the train.', exampleZh: '長話短說，我們錯過了火車。', tip: '帶出結論。' }
    ]
  }
]

export const ALL_IDIOMS = IDIOM_GROUPS.flatMap((g) =>
  g.items.map((it, i) => ({ id: `${g.id}-${i + 1}`, group: g.id, ...it }))
)
