export interface SadaqaCase {
  id: string;
  title: string;
  description: string;
  content: string;
  amountNeeded: string;
  amountRaised: string;
  category: "medical" | "education" | "food" | "housing" | "emergency";
  location: string;
  urgencyLevel: "high" | "medium" | "low";
  datePosted: string;
  credentials: SadaqaCredentials;
}

export interface SadaqaCredentials {
  mbank: string;
  odengi: string;
}

export const mockSadaqaCases: SadaqaCase[] = [
  {
    id: "1",
    title: "Медицинская помощь Жаннату",
    description: "Помогите Жаннату ходить снова",
    content:
      "Когда Жаннат родился, он был здоровым и крепким мальчиком. Но в 3,5 месяца после прививки АКДС его состояние резко ухудшилось. В тот же день начались судороги, а глаза стали косить. Врачи поставили диагноз ДЦП, и с тех пор наша семья борется за его здоровье.",
    amountNeeded: "27 000$",
    amountRaised: "1200$",
    category: "medical",
    location: "Bishkek, Kyrgyzstan",
    urgencyLevel: "high",
    datePosted: "2024-03-15",
    credentials: {
      mbank: "996 708 491 408",
      odengi: "996 708 491 408",
    },
  },
  {
    id: "2",
    title: "СРОЧНЫЙ СБОР | ТАЛАБШОЕВ МУХАММАД, 2 ГОДА",
    description: "DS🩺: Апластическая анемия (тяжелое течение)",
    content:
      "🆘Срочно требуется трансплантация костного мозга стоимостью 65.000$ 🙏🏻Помогите спасти жизнь нашего сына",
    amountNeeded: "65 000$",
    amountRaised: "300$",
    category: "medical",
    location: "Bishkek, Kyrgyzstan",
    urgencyLevel: "medium",
    datePosted: "2024-03-10",
    credentials: {
      mbank: "996 700 369 570",
      odengi: "+996 702 204 192",
    },
  },
  {
    id: "3",
    title: "Абдыропова Камиля 25|12|2008гр",
    description: "🔴🩺Острый лимфобластный лейкоз (вариант B II)",
    content:
      "🆘НЕОБХОДИМО СРОЧНАЯ ТРАНСПЛАНТАЦИЯ КОСТНОГО МОЗГА СТОИМОСТЬЮ 62.000$🆘",
    amountNeeded: "62.000$",
    amountRaised: "800$",
    category: "medical",
    location: "Bishkek, Kyrgyzstan",
    urgencyLevel: "high",
    datePosted: "2024-03-18",
    credentials: {
      mbank: "996 500 608 287",
      odengi: "996 509 509 585",
    },
  },
  {
    id: "4",
    title: "Медицинская помощь Жансу",
    description:
      "🔴🩺❗️Срочно требуется дорогостоящее лечение в Турции❗️В связи с осложнением после тяжелой перенесенной инфекции.В легких скапливается жидкость.",
    content: "🆘Срочно требуется дорогостоящее лечение в Турции на 10 000$🆘",
    amountNeeded: "10 000$",
    amountRaised: "100$",
    category: "medical",
    location: "Bishkek, Kyrgyzstan",
    urgencyLevel: "high",
    datePosted: "2024-03-18",
    credentials: {
      mbank: "996 703 63 21 08",
      odengi: "996 703 632 108",
    },
  },
];
