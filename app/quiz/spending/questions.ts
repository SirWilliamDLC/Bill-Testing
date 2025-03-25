export const spendingQuizQuestions = [
  {
    id: 1,
    question: "When was the last time you were completely debt-free?",
    description: "This helps us understand your debt history",
    options: [
      { emoji: "⏳", title: "20+ years ago", description: "It's been a very long time" },
      { emoji: "📅", title: "15 years ago", description: "Quite a while back" },
      { emoji: "🗓️", title: "10 years ago", description: "A decade ago" },
      { emoji: "📆", title: "5 years ago", description: "In the recent past" },
      { emoji: "📌", title: "1 year ago", description: "Just last year" },
      { emoji: "❌", title: "Never", description: "I've always had some debt" }
    ],
    type: "single",
    insight: "This helps people realize how long they've been stuck in debt."
  },
  {
    id: 2,
    question: "How often do you think about your debt?",
    description: "Be honest about how much mental space debt takes up",
    options: [
      { emoji: "🔄", title: "More than once a day", description: "It's constantly on my mind" },
      { emoji: "📊", title: "Once a day", description: "I think about it daily" },
      { emoji: "📈", title: "A few times a week", description: "It comes up regularly" },
      { emoji: "📉", title: "Less than once a week", description: "I think about it occasionally" },
      { emoji: "📋", title: "Once every few weeks", description: "It rarely crosses my mind" }
    ],
    type: "single",
    insight: "Forces self-reflection on how much mental space debt takes up."
  },
  {
    id: 3,
    question: "Have you ever thought, \"I'll always be in debt no matter what I do\"?",
    description: "Let's explore your feelings about debt",
    options: [
      { emoji: "🔒", title: "Yes, I feel stuck", description: "It feels impossible to escape" },
      { emoji: "🌅", title: "Sometimes, but I try to stay optimistic", description: "I have mixed feelings" },
      { emoji: "🎯", title: "No, I believe I can get out", description: "I'm confident I can overcome it" }
    ],
    type: "single",
    insight: "Taps into a feeling of hopelessness that many overspenders experience."
  },
  {
    id: 4,
    question: "Do you ever tell yourself, \"I deserve this\" when making a purchase you can't afford?",
    description: "Think about your purchasing justifications",
    options: [
      { emoji: "🛍️", title: "Frequently", description: "This happens often" },
      { emoji: "🤔", title: "Occasionally", description: "Sometimes I think this way" },
      { emoji: "✋", title: "Rarely or never", description: "I don't justify purchases this way" }
    ],
    type: "single",
    insight: "This question exposes emotional spending patterns."
  },
  {
    id: 5,
    question: "Do you ever feel a rush of excitement when buying something, followed by regret later?",
    description: "Consider your emotional response to purchases",
    options: [
      { emoji: "🎢", title: "Yes, all the time", description: "This is a common pattern for me" },
      { emoji: "📊", title: "Occasionally", description: "It happens sometimes" },
      { emoji: "🛡️", title: "Rarely or never", description: "I don't experience this" }
    ],
    type: "single",
    insight: "Helps them connect impulse buying to emotional highs and lows."
  },
  {
    id: 6,
    question: "Have you ever turned to shopping as a way to cope with stress, boredom, or sadness?",
    description: "Think about your emotional spending habits",
    options: [
      { emoji: "🛍️", title: "Frequently", description: "Shopping is my go-to coping mechanism" },
      { emoji: "⚖️", title: "Occasionally", description: "I sometimes shop to feel better" },
      { emoji: "🎯", title: "Rarely or never", description: "I don't use shopping this way" }
    ],
    type: "single",
    insight: "Encourages self-awareness of spending as emotional self-medication."
  },
  {
    id: 7,
    question: "Do you put purchases on a credit card even when you're unsure if you can pay it off at the end of the month?",
    description: "Consider your credit card usage patterns",
    options: [
      { emoji: "💳", title: "Yes, often", description: "This happens frequently" },
      { emoji: "⚖️", title: "Occasionally", description: "Sometimes I do this" },
      { emoji: "✅", title: "No, I always pay it off", description: "I only charge what I can pay" }
    ],
    type: "single",
    insight: "Exposes reckless credit card spending."
  },
  {
    id: 8,
    question: "If your paycheck were delayed by two weeks, would you struggle to cover your expenses?",
    description: "Think about your financial buffer",
    options: [
      { emoji: "⚠️", title: "Yes, I'd be in big trouble", description: "I live paycheck to paycheck" },
      { emoji: "💳", title: "I'd have to use credit cards", description: "I'd rely on credit" },
      { emoji: "💰", title: "I have savings to cover it", description: "I have an emergency fund" }
    ],
    type: "single",
    insight: "Reveals lack of financial buffer and potential paycheck-to-paycheck living."
  },
  {
    id: 9,
    question: "Have you ever signed up for a budgeting app or made a budget, only to ignore it?",
    description: "Be honest about your budgeting habits",
    options: [
      { emoji: "📱", title: "Yes, multiple times", description: "I've tried and failed repeatedly" },
      { emoji: "📊", title: "Yes, but I use it inconsistently", description: "I struggle with consistency" },
      { emoji: "📈", title: "No, I track everything carefully", description: "I stick to my budget" }
    ],
    type: "single",
    insight: "Many overspenders know they need to budget but struggle with follow-through."
  },
  {
    id: 10,
    question: "How much credit card debt do you have? (Your best guess is OK)",
    description: "Let's face the numbers",
    options: [
      { emoji: "💰", title: "Less than $10K", description: "Under ten thousand" },
      { emoji: "💰", title: "$10K – $20K", description: "Ten to twenty thousand" },
      { emoji: "💰", title: "$20K – $40K", description: "Twenty to forty thousand" },
      { emoji: "💰", title: "$40K – $60K", description: "Forty to sixty thousand" },
      { emoji: "💰", title: "$60K – $80K", description: "Sixty to eighty thousand" },
      { emoji: "💰", title: "$80K – $100K", description: "Eighty to hundred thousand" },
      { emoji: "💰", title: "More than $100K", description: "Over hundred thousand" },
      { emoji: "❓", title: "I don't know, but it's more than $5K", description: "Over five thousand" },
      { emoji: "❓", title: "I don't know, but it's more than $10K", description: "Over ten thousand" }
    ],
    type: "single",
    insight: "Encourages people to face their numbers."
  },
  {
    id: 11,
    question: "Do you know the interest rates on your debts?",
    description: "Think about your awareness of interest costs",
    options: [
      { emoji: "📊", title: "Yes, I track them", description: "I know all my rates" },
      { emoji: "🤔", title: "I have a rough idea", description: "I know some of them" },
      { emoji: "❌", title: "No, I have no clue", description: "I don't track rates" }
    ],
    type: "single",
    insight: "Many overspenders ignore interest rates, leading to spiraling debt."
  },
  {
    id: 12,
    question: "Have you ever avoided checking your bank account or credit card statements because you were afraid of what you'd see?",
    description: "Consider your financial awareness habits",
    options: [
      { emoji: "🙈", title: "Yes, all the time", description: "I often avoid looking" },
      { emoji: "👀", title: "Occasionally", description: "Sometimes I avoid it" },
      { emoji: "✅", title: "No, I always check", description: "I stay on top of it" }
    ],
    type: "single",
    insight: "A sign of financial avoidance, which leads to deeper financial problems."
  },
  {
    id: 13,
    question: "How motivated are you to change your financial situation?",
    description: "Let's gauge your readiness for change",
    options: [
      { emoji: "🎯", title: "I'm desperate to fix this", description: "I need change now" },
      { emoji: "🤔", title: "I'd like to improve, but I'm not sure how", description: "I want to change" },
      { emoji: "😐", title: "I'm okay doing the same thing", description: "I'm not ready for change" }
    ],
    type: "single",
    insight: "Gauges readiness for change."
  }
]; 