// IELTS-style mock tests (original content modelled on the real format).
// Listening: a script is played via TTS, then the learner answers questions.
// Speaking: Part 1 / Part 2 (cue card) / Part 3 prompts to practise aloud.

export const LISTENING_TESTS = [
  {
    id: 'listen-1',
    title: 'Section 1 · Booking a community hall',
    titleZh: '社區活動中心預約（情境對話）',
    blurb: '一段預約對話，練習聽取具體資訊（日期、價格、姓名）',
    // Each line is spoken with the given voice; learners can replay.
    transcript: [
      { speaker: 'Receptionist', gender: 'female', text: 'Good morning, Riverside Community Hall, how can I help?' },
      { speaker: 'Caller', gender: 'male', text: 'Hi, I’d like to book the main hall for a children’s birthday party.' },
      { speaker: 'Receptionist', gender: 'female', text: 'Lovely. What date were you thinking of?' },
      { speaker: 'Caller', gender: 'male', text: 'Saturday the fourteenth of March, in the afternoon if possible.' },
      { speaker: 'Receptionist', gender: 'female', text: 'Let me check. Yes, two until five is free. That’s our standard three-hour slot.' },
      { speaker: 'Caller', gender: 'male', text: 'Perfect. How much does it cost to hire?' },
      { speaker: 'Receptionist', gender: 'female', text: 'It’s forty-five pounds for the three hours, plus a ten-pound refundable deposit.' },
      { speaker: 'Caller', gender: 'male', text: 'That’s reasonable. Does that include use of the kitchen?' },
      { speaker: 'Receptionist', gender: 'female', text: 'It does, but please leave it clean, or we keep the deposit.' },
      { speaker: 'Caller', gender: 'male', text: 'Understood. Can I put it under the name Patterson — P-A-double T-E-R-S-O-N?' },
      { speaker: 'Receptionist', gender: 'female', text: 'Got it. And a contact number, please?' },
      { speaker: 'Caller', gender: 'male', text: 'Yes, it’s oh-seven-nine-double-six, three-one-two, four-eight-eight.' },
      { speaker: 'Receptionist', gender: 'female', text: 'Brilliant. You’re all booked in for the fourteenth. We’ll email confirmation today.' }
    ],
    questions: [
      { type: 'mc', q: 'What is the hall being booked for?', options: ['A wedding reception', 'A children’s birthday party', 'A business meeting', 'A yoga class'], answer: 1 },
      { type: 'mc', q: 'On which date is the booking?', options: ['Saturday 4th March', 'Sunday 14th March', 'Saturday 14th March', 'Saturday 14th May'], answer: 2 },
      { type: 'gap', q: 'The standard slot lasts ____ hours.', answer: 'three', hint: '數字用英文拼寫' },
      { type: 'gap', q: 'The hire fee is £____ for the slot.', answer: '45', hint: '只填數字' },
      { type: 'gap', q: 'A refundable deposit of £____ is also required.', answer: '10', hint: '只填數字' },
      { type: 'mc', q: 'What must the caller do to get the deposit back?', options: ['Arrive on time', 'Leave the kitchen clean', 'Bring their own chairs', 'Pay in cash'], answer: 1 },
      { type: 'gap', q: 'The booking name is ____.', answer: 'Patterson', hint: '注意拼字' }
    ]
  },
  {
    id: 'listen-2',
    title: 'Section 4 · A short talk on urban bees',
    titleZh: '短講：城市養蜂（學術獨白）',
    blurb: '一段學術獨白，練習聽取主旨與細節',
    transcript: [
      { speaker: 'Lecturer', gender: 'female', text: 'Today I’d like to talk about a surprising trend: keeping bees in our cities.' },
      { speaker: 'Lecturer', gender: 'female', text: 'You might assume bees do better in the countryside, but the evidence suggests otherwise.' },
      { speaker: 'Lecturer', gender: 'female', text: 'Urban gardens and parks offer a wide variety of flowers across many months.' },
      { speaker: 'Lecturer', gender: 'female', text: 'This diversity means city bees often enjoy a richer, more reliable food supply.' },
      { speaker: 'Lecturer', gender: 'female', text: 'In contrast, large farms may grow a single crop that flowers only briefly.' },
      { speaker: 'Lecturer', gender: 'female', text: 'There is also less pesticide use in many private gardens than on commercial farmland.' },
      { speaker: 'Lecturer', gender: 'female', text: 'However, cities are not without challenges — pollution and limited nesting sites are real concerns.' },
      { speaker: 'Lecturer', gender: 'female', text: 'Researchers recommend planting native, flowering species to support local populations.' },
      { speaker: 'Lecturer', gender: 'female', text: 'Even a small balcony with the right plants can make a measurable difference.' }
    ],
    questions: [
      { type: 'mc', q: 'What is the main idea of the talk?', options: ['Bees are dying out everywhere', 'Cities can be good environments for bees', 'Farming is bad for the economy', 'Bees prefer a single type of flower'], answer: 1 },
      { type: 'mc', q: 'Why do city bees often have a better food supply?', options: ['Cities are warmer', 'There is a wide variety of flowers over many months', 'People feed them sugar', 'There are no other insects'], answer: 1 },
      { type: 'gap', q: 'Large farms may grow a single ____ that flowers only briefly.', answer: 'crop', hint: '名詞，單數' },
      { type: 'gap', q: 'Two urban challenges mentioned are pollution and limited ____ sites.', answer: 'nesting', hint: '與築巢有關' },
      { type: 'mc', q: 'What does the speaker recommend planting?', options: ['Imported tropical plants', 'Native, flowering species', 'Vegetables only', 'Tall trees'], answer: 1 }
    ]
  }
]

export const SPEAKING_TESTS = [
  {
    id: 'speak-1',
    title: 'Speaking Part 1 · Everyday topics',
    titleZh: '口說 Part 1：日常話題',
    part: 1,
    blurb: '暖身問答，回答簡短自然即可（每題約 20–30 秒）',
    instructions: '每題念出題目後，請對著麥克風／自己大聲回答。建議錄音後比對流暢度與用字。',
    prompts: [
      { q: 'Let’s talk about where you live. Do you live in a house or a flat?', tip: '說明居住型態，並補一句理由或感受。' },
      { q: 'What do you like most about your neighbourhood?', tip: '用 “What I love about… is…” 句型。' },
      { q: 'Do you prefer mornings or evenings? Why?', tip: '給偏好 + 一個具體原因。' },
      { q: 'How do you usually spend your weekends?', tip: '用現在簡單式描述習慣 + 一個例子。' },
      { q: 'Has the way you travel to work or school changed recently?', tip: '練習現在完成式表達「最近的改變」。' }
    ]
  },
  {
    id: 'speak-2',
    title: 'Speaking Part 2 · Cue card',
    titleZh: '口說 Part 2：題卡長答',
    part: 2,
    blurb: '看題卡，準備 1 分鐘，連續說 1.5–2 分鐘',
    instructions: '你有 1 分鐘準備（可做筆記），接著請連續說約 2 分鐘。涵蓋題卡上的所有要點。',
    cueCard: {
      topic: 'Describe a skill you would like to learn.',
      bullets: [
        'what the skill is',
        'why you want to learn it',
        'how you would learn it',
        'and explain how it might change your life.'
      ]
    },
    prompts: [
      { q: 'Describe a skill you would like to learn. (Prepare for 1 minute, then speak for about 2 minutes.)', tip: '開頭點出技能，再依序回應四個要點，結尾呼應「對生活的影響」。' }
    ]
  },
  {
    id: 'speak-3',
    title: 'Speaking Part 3 · Discussion',
    titleZh: '口說 Part 3：深入討論',
    part: 3,
    blurb: '抽象、延伸的討論題，練習論證與舉例',
    instructions: '針對每題給出有層次的回答：表態 → 理由 → 例子 → 反方觀點或總結。',
    prompts: [
      { q: 'Do you think schools should teach more practical skills rather than academic subjects?', tip: '用 “On the one hand… on the other hand…” 平衡論述。' },
      { q: 'Why do some people find it difficult to learn new things as adults?', tip: '提出 2 個原因並各舉一例。' },
      { q: 'How has technology changed the way people learn?', tip: '對比 “in the past… nowadays…”。' },
      { q: 'Should the government fund adult education? Why or why not?', tip: '明確表態並用 “because / as a result” 串連理由。' }
    ]
  }
]

export function listeningById(id) {
  return LISTENING_TESTS.find((t) => t.id === id) || null
}
export function speakingById(id) {
  return SPEAKING_TESTS.find((t) => t.id === id) || null
}
