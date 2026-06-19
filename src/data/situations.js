// Real-life situational English — colloquial, British-leaning dialogues.
// Each category has several scenarios; each scenario has 10+ lines.
// Roles are voiced differently (gender per speaker) and can be played
// line-by-line or all at once in the UI.
//
// Categories are assembled from the core set below plus themed "packs", so the
// library can grow toward 100 categories — add a new pack file and register it
// in EXTRA_PACKS.
import { PACK1 } from './situationsPack1'

const CORE = [
  {
    id: 'stocks',
    title: 'Stocks & Investing',
    titleZh: '股票與投資',
    icon: '📈',
    blurb: '聊市場、漲跌、投資組合時道地的英式說法',
    scenarios: [
      {
        id: 'stocks-pub',
        title: 'Talking shares down the pub',
        titleZh: '在酒吧聊股票',
        description: 'Two mates catching up over a pint about their portfolios.',
        lines: [
          { speaker: 'Liam', gender: 'male', text: 'Alright mate? How’s the portfolio holding up these days?', zh: '還好嗎兄弟？你的投資組合最近撐得住嗎？' },
          { speaker: 'Sophie', gender: 'female', text: 'Honestly? It’s been a bit of a rollercoaster, to be fair.', zh: '老實說？說真的，最近就像坐雲霄飛車。' },
          { speaker: 'Liam', gender: 'male', text: 'Tell me about it. My tech stocks took a right hammering last week.', zh: '可不是嘛。我的科技股上週慘跌了一大筆。' },
          { speaker: 'Sophie', gender: 'female', text: 'Ouch. Did you panic-sell, or are you holding your nerve?', zh: '哎喲。你恐慌性拋售了，還是穩住沒動？' },
          { speaker: 'Liam', gender: 'male', text: 'I held. I’m in it for the long haul, not trying to get rich quick.', zh: '我沒賣。我是長期持有，不是想一夜致富。' },
          { speaker: 'Sophie', gender: 'female', text: 'Sensible. I keep telling people not to time the market.', zh: '很明智。我一直跟大家說別想著抓進出場時機。' },
          { speaker: 'Liam', gender: 'male', text: 'Exactly. Time in the market beats timing the market.', zh: '沒錯。待在市場裡比抓時機更重要。' },
          { speaker: 'Sophie', gender: 'female', text: 'I’ve started chucking a bit into an index fund every month.', zh: '我開始每個月丟一點進指數型基金。' },
          { speaker: 'Liam', gender: 'male', text: 'Dollar-cost averaging, nice. Low fees on that one?', zh: '定期定額，不錯。那檔手續費低嗎？' },
          { speaker: 'Sophie', gender: 'female', text: 'Dirt cheap. The fees were eating my returns on the old one.', zh: '超便宜。之前那檔的手續費都在吃掉我的報酬。' },
          { speaker: 'Liam', gender: 'male', text: 'Fees are a killer. People always overlook them.', zh: '手續費真的要命。大家總是忽略它。' },
          { speaker: 'Sophie', gender: 'female', text: 'So, are you putting any cash into your ISA before April?', zh: '那你四月前會把錢存進免稅帳戶（ISA）嗎？' },
          { speaker: 'Liam', gender: 'male', text: 'Definitely. Be daft not to use the tax-free allowance.', zh: '當然。不用那個免稅額度就太傻了。' },
          { speaker: 'Sophie', gender: 'female', text: 'My thoughts exactly. Don’t put all your eggs in one basket, though.', zh: '我完全同意。不過別把雞蛋全放在同一個籃子裡。' },
          { speaker: 'Liam', gender: 'male', text: 'No chance. I’ve spread it across a few sectors now.', zh: '不會的。我現在分散到好幾個產業了。' },
          { speaker: 'Sophie', gender: 'female', text: 'Good lad. Right, your round — same again?', zh: '好樣的。好啦，輪到你請了——再來一樣的？' },
          { speaker: 'Liam', gender: 'male', text: 'Go on then. Cheers!', zh: '行吧。乾杯！' }
        ]
      },
      {
        id: 'stocks-crash',
        title: 'The market’s taken a tumble',
        titleZh: '市場大跌的一天',
        description: 'Colleagues reacting to a sudden market drop.',
        lines: [
          { speaker: 'Nadia', gender: 'female', text: 'Have you seen the markets this morning? They’re in freefall.', zh: '你看到今早的市場了嗎？簡直在直線下跌。' },
          { speaker: 'Tom', gender: 'male', text: 'Yeah, it’s a bloodbath out there. Everything’s in the red.', zh: '看到了，外面一片慘烈。全部都是綠的（虧損）。' },
          { speaker: 'Nadia', gender: 'female', text: 'What’s spooked everyone? Interest rates again?', zh: '是什麼把大家嚇成這樣？又是利率嗎？' },
          { speaker: 'Tom', gender: 'male', text: 'Pretty much. The central bank hinted at another hike.', zh: '差不多。央行暗示又要再升息一次。' },
          { speaker: 'Nadia', gender: 'female', text: 'Great. So borrowing gets pricier and shares get dumped.', zh: '真好。所以借錢更貴，股票就被拋售。' },
          { speaker: 'Tom', gender: 'male', text: 'That’s the gist of it. Investors get jittery and head for the exits.', zh: '大致就是這樣。投資人緊張起來，紛紛逃離市場。' },
          { speaker: 'Nadia', gender: 'female', text: 'I’m tempted to buy the dip, honestly.', zh: '老實說，我有點想趁低點進場。' },
          { speaker: 'Tom', gender: 'male', text: 'Careful — catching a falling knife is a dangerous game.', zh: '小心——接落下的刀子是很危險的遊戲。' },
          { speaker: 'Nadia', gender: 'female', text: 'Fair point. It could keep sliding for weeks.', zh: '有道理。它可能會持續下跌好幾週。' },
          { speaker: 'Tom', gender: 'male', text: 'Nobody can call the bottom. Anyone who says they can is kidding themselves.', zh: '沒人能準確抓到底部。誰說他能，那是在騙自己。' },
          { speaker: 'Nadia', gender: 'female', text: 'So you’re just sitting tight?', zh: '所以你就是按兵不動？' },
          { speaker: 'Tom', gender: 'male', text: 'Sitting tight and not looking at my account, frankly.', zh: '按兵不動，而且老實說，連帳戶都不想看。' },
          { speaker: 'Nadia', gender: 'female', text: 'Ha! Out of sight, out of mind.', zh: '哈！眼不見為淨。' },
          { speaker: 'Tom', gender: 'male', text: 'Exactly. It’ll bounce back eventually. It always does.', zh: '沒錯。它終究會反彈。一向如此。' },
          { speaker: 'Nadia', gender: 'female', text: 'Famous last words. But I reckon you’re right.', zh: '這話可別說太早。不過我想你是對的。' },
          { speaker: 'Tom', gender: 'male', text: 'Just don’t invest what you can’t afford to lose. Golden rule.', zh: '就是別拿你輸不起的錢去投資。這是黃金法則。' }
        ]
      }
    ]
  },
  {
    id: 'work-moan',
    title: 'Moaning about Work',
    titleZh: '同事抱怨',
    icon: '😤',
    blurb: '辦公室裡抱怨工作、主管、會議時的英式口語',
    scenarios: [
      {
        id: 'work-meetings',
        title: 'Too many pointless meetings',
        titleZh: '太多沒意義的會議',
        description: 'Two colleagues having a moan by the kettle.',
        lines: [
          { speaker: 'Priya', gender: 'female', text: 'Another all-hands meeting? That’s the third one this week.', zh: '又一場全員會議？這已經是這禮拜第三場了。' },
          { speaker: 'Dan', gender: 'male', text: 'I know. It could’ve been an email, as per usual.', zh: '我懂。一如往常，這明明發封郵件就能搞定。' },
          { speaker: 'Priya', gender: 'female', text: 'Honestly, I’m drowning in meetings and can’t get any actual work done.', zh: '說真的，我被會議淹沒，根本沒辦法做正事。' },
          { speaker: 'Dan', gender: 'male', text: 'Tell me about it. My calendar’s absolutely chock-a-block.', zh: '可不是嘛。我的行事曆塞得滿滿的。' },
          { speaker: 'Priya', gender: 'female', text: 'And half the time nobody even knows why we’re there.', zh: '而且有一半時間根本沒人知道我們為什麼要去開會。' },
          { speaker: 'Dan', gender: 'male', text: 'It’s all just talking shop. Loads of buzzwords, no decisions.', zh: '全都是在打官腔，一堆術語卻沒半個決定。' },
          { speaker: 'Priya', gender: 'female', text: 'Then they wonder why we’re behind on deadlines.', zh: '然後他們還納悶我們為什麼趕不上截止期限。' },
          { speaker: 'Dan', gender: 'male', text: 'Right? I end up doing my real job after five.', zh: '對吧？我最後都得五點以後才做我真正的工作。' },
          { speaker: 'Priya', gender: 'female', text: 'Same. I’m sick of staying late to catch up.', zh: '我也是。我受夠了為了趕進度而留下加班。' },
          { speaker: 'Dan', gender: 'male', text: 'We should push back next time and ask for an agenda.', zh: '下次我們該回絕一下，要求先給個議程。' },
          { speaker: 'Priya', gender: 'female', text: 'Good luck with that. Management love the sound of their own voice.', zh: '祝你好運。管理層最愛聽自己講話了。' },
          { speaker: 'Dan', gender: 'male', text: 'Ha, true. Still, no harm in flagging it.', zh: '哈，沒錯。不過提一下也無妨。' },
          { speaker: 'Priya', gender: 'female', text: 'Suppose not. Right, I’d better crack on before the next one.', zh: '也是。好啦，下一場會議前我得趕快做事了。' },
          { speaker: 'Dan', gender: 'male', text: 'Same here. Catch you later — fancy a proper coffee at lunch?', zh: '我也是。待會見——午餐想喝杯像樣的咖啡嗎？' },
          { speaker: 'Priya', gender: 'female', text: 'Go on then, I could murder a flat white.', zh: '好啊，我超想來杯白咖啡（flat white）。' },
          { speaker: 'Dan', gender: 'male', text: 'Sorted. See you at one.', zh: '搞定。一點見。' }
        ]
      },
      {
        id: 'work-manager',
        title: 'My manager takes the credit',
        titleZh: '主管搶功勞',
        description: 'Venting about a boss who steals the limelight.',
        lines: [
          { speaker: 'Chloe', gender: 'female', text: 'You won’t believe what happened in the review meeting.', zh: '你絕對不會相信檢討會上發生了什麼。' },
          { speaker: 'Marcus', gender: 'male', text: 'Go on, what did your boss do this time?', zh: '說吧，你主管這次又做了什麼？' },
          { speaker: 'Chloe', gender: 'female', text: 'He took all the credit for the project I slaved over.', zh: '他把我拚命做的那個專案功勞全攬走了。' },
          { speaker: 'Marcus', gender: 'male', text: 'You’re joking. After all those late nights you put in?', zh: '你開玩笑吧。你熬了那麼多夜耶？' },
          { speaker: 'Chloe', gender: 'female', text: 'Not so much as a mention of my name. I was fuming.', zh: '連我名字都沒提一句。我氣炸了。' },
          { speaker: 'Marcus', gender: 'male', text: 'That’s out of order. He’s got a real cheek.', zh: '這太過分了。他臉皮真厚。' },
          { speaker: 'Chloe', gender: 'female', text: 'I just sat there biting my tongue.', zh: '我只能坐在那裡忍住不說話。' },
          { speaker: 'Marcus', gender: 'male', text: 'You should have a quiet word with him afterwards.', zh: '你事後該私下跟他談一談。' },
          { speaker: 'Chloe', gender: 'female', text: 'I might, but he’ll just brush it off like always.', zh: '我可能會，但他八成又會像往常一樣敷衍帶過。' },
          { speaker: 'Marcus', gender: 'male', text: 'Then keep a paper trail. Email yourself what you’ve done.', zh: '那就留下書面紀錄。把你做的事寄給自己存證。' },
          { speaker: 'Chloe', gender: 'female', text: 'That’s actually a good shout. Cover myself.', zh: '這主意其實不錯。保護好自己。' },
          { speaker: 'Marcus', gender: 'male', text: 'And mention your wins directly to his boss when you can.', zh: '有機會的話，直接跟他的上司提你的成果。' },
          { speaker: 'Chloe', gender: 'female', text: 'Sneaky, but fair enough. I’m done being a pushover.', zh: '有點心機，但也合理。我不想再當好欺負的人了。' },
          { speaker: 'Marcus', gender: 'male', text: 'Good for you. Don’t let him walk all over you.', zh: '好樣的。別讓他得寸進尺。' },
          { speaker: 'Chloe', gender: 'female', text: 'Thanks for the pep talk. I needed to get that off my chest.', zh: '謝謝你幫我打氣。我需要把這些悶氣發洩出來。' },
          { speaker: 'Marcus', gender: 'male', text: 'Anytime. That’s what colleagues are for.', zh: '隨時奉陪。同事不就是幹這個的嘛。' }
        ]
      }
    ]
  },
  {
    id: 'sport',
    title: 'Sport & Match Day',
    titleZh: '運動與比賽日',
    icon: '⚽',
    blurb: '聊球賽、健身、比分時最自然的英式說法',
    scenarios: [
      {
        id: 'sport-football',
        title: 'Watching the football',
        titleZh: '一起看足球',
        description: 'Two fans watching a tense match at home.',
        lines: [
          { speaker: 'Jack', gender: 'male', text: 'Come on, lads! We’re all over them but can’t finish.', zh: '加油啊，小伙子們！我們壓著對方打卻就是進不了球。' },
          { speaker: 'Ella', gender: 'female', text: 'I know. We’ve had loads of chances and fluffed every one.', zh: '我知道。我們有一堆機會卻每個都搞砸了。' },
          { speaker: 'Jack', gender: 'male', text: 'That last shot was miles off. He should’ve buried it.', zh: '剛那一腳差遠了。他本該輕鬆破門的。' },
          { speaker: 'Ella', gender: 'female', text: 'The keeper’s having a blinder, to be fair.', zh: '平心而論，那守門員今天表現神勇。' },
          { speaker: 'Jack', gender: 'male', text: 'True. He’s pulled off a couple of cracking saves.', zh: '沒錯。他做出了好幾次精彩的撲救。' },
          { speaker: 'Ella', gender: 'female', text: 'Ref! That was never a foul! Are you blind?', zh: '裁判！那根本不算犯規！你瞎了嗎？' },
          { speaker: 'Jack', gender: 'male', text: 'Shocking decision. He’s been against us all game.', zh: '太離譜的判決。他整場都在針對我們。' },
          { speaker: 'Ella', gender: 'female', text: 'Right, we need a sub. That midfielder’s knackered.', zh: '好，我們需要換人。那個中場已經跑不動了。' },
          { speaker: 'Jack', gender: 'male', text: 'Bring the young lad on. He’s got fresh legs.', zh: '把那個小將換上來吧。他腳力還很足。' },
          { speaker: 'Ella', gender: 'female', text: 'Ooh, corner! Get everyone in the box!', zh: '喔，角球！把人都壓到禁區裡！' },
          { speaker: 'Jack', gender: 'male', text: 'GOAL! Get in! Back of the net!', zh: '進球啦！太棒了！球進網了！' },
          { speaker: 'Ella', gender: 'female', text: 'Yes! What a header! Absolute screamer of a finish!', zh: '太好了！多漂亮的頭球！這收尾簡直完美！' },
          { speaker: 'Jack', gender: 'male', text: 'Get in there! I knew that sub would pay off.', zh: '太讚了！我就知道那次換人會奏效。' },
          { speaker: 'Ella', gender: 'female', text: 'How long left? We need to see this out.', zh: '還剩多久？我們得守住這個比分。' },
          { speaker: 'Jack', gender: 'male', text: 'Five minutes plus stoppage. Nervy finish, this.', zh: '五分鐘加上補時。這結尾真讓人緊張。' },
          { speaker: 'Ella', gender: 'female', text: 'Don’t sit back, lads! See the game out properly!', zh: '別退守啊，小伙子們！好好把比賽收尾！' },
          { speaker: 'Jack', gender: 'male', text: 'Full time! Get in! What a result, eh?', zh: '比賽結束！太棒了！這結果，對吧？' }
        ]
      },
      {
        id: 'sport-gym',
        title: 'Getting back into the gym',
        titleZh: '重新開始上健身房',
        description: 'A chat about training after a long break.',
        lines: [
          { speaker: 'Aisha', gender: 'female', text: 'I’ve finally got back into the gym after months off.', zh: '休息了好幾個月，我終於重新開始上健身房了。' },
          { speaker: 'Ben', gender: 'male', text: 'Nice one! How are you finding it after such a long break?', zh: '太好了！停這麼久之後，重新開始感覺如何？' },
          { speaker: 'Aisha', gender: 'female', text: 'Honestly, I’m absolutely aching. Everything hurts.', zh: '老實說，我全身痠痛。哪裡都痛。' },
          { speaker: 'Ben', gender: 'male', text: 'Classic DOMS. Don’t push it too hard too soon.', zh: '典型的延遲性肌肉痠痛。別太快給自己太大強度。' },
          { speaker: 'Aisha', gender: 'female', text: 'I overdid it on leg day and could barely walk after.', zh: '練腿那天我練過頭，結束後幾乎走不動。' },
          { speaker: 'Ben', gender: 'male', text: 'Ha, we’ve all been there. Ease into it.', zh: '哈，我們都經歷過。慢慢來就好。' },
          { speaker: 'Aisha', gender: 'female', text: 'What’s your routine these days?', zh: '你最近的訓練計畫是什麼？' },
          { speaker: 'Ben', gender: 'male', text: 'I do a push-pull-legs split, three or four times a week.', zh: '我做推、拉、腿的分部訓練，一週三到四次。' },
          { speaker: 'Aisha', gender: 'female', text: 'And do you do much cardio, or just weights?', zh: '那你有做很多有氧嗎，還是只練重訓？' },
          { speaker: 'Ben', gender: 'male', text: 'A bit of both. I’ll go for a run to keep my fitness up.', zh: '兩種都做一點。我會去跑步來維持體能。' },
          { speaker: 'Aisha', gender: 'female', text: 'I really need to work on my stamina.', zh: '我真的得好好練一下我的耐力。' },
          { speaker: 'Ben', gender: 'male', text: 'It comes back quicker than you’d think. Just be consistent.', zh: '它恢復得比你想的快。持之以恆就好。' },
          { speaker: 'Aisha', gender: 'female', text: 'That’s the hard part — actually turning up.', zh: '難就難在這——真的去報到。' },
          { speaker: 'Ben', gender: 'male', text: 'Set small goals. Don’t go all guns blazing on day one.', zh: '設定小目標。別第一天就拚盡全力。' },
          { speaker: 'Aisha', gender: 'female', text: 'Wise words. Fancy being my gym buddy?', zh: '說得真好。要不要當我的健身搭子？' },
          { speaker: 'Ben', gender: 'male', text: 'Go on then. Having a mate keeps you accountable.', zh: '好啊。有個夥伴能讓你更有責任感堅持下去。' }
        ]
      }
    ]
  }
]

// Register themed packs here as the library grows toward 100 categories.
const EXTRA_PACKS = [PACK1]

export const SITUATIONS = [...CORE, ...EXTRA_PACKS.flat()]

export function scenarioById(catId, scId) {
  const cat = SITUATIONS.find((c) => c.id === catId)
  if (!cat) return null
  return cat.scenarios.find((s) => s.id === scId) || null
}
