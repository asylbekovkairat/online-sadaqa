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
    title: "Обучение для сирот",
    description: "Помогите обеспечить школьные принадлежности для 10 сирот",
    content:
      "Местное приютище нуждается в помощи для обеспечения базовых школьных принадлежностей и форменной одежды для 10 детей, начиная новый учебный год.",
    amountNeeded: "1000$",
    amountRaised: "300$",
    category: "education",
    location: "Amman, Jordan",
    urgencyLevel: "medium",
    datePosted: "2024-03-10",
    credentials: {
      mbank: "1234567890",
      odengi: "9876543210",
    },
  },
  {
    id: "3",
    title: "Экстренная еда для семей",
    description: "Помогите семьям, пострадавшим от последних наводнений",
    content:
      "20 семей были вынуждены покинуть свои дома из-за последних наводнений и нуждаются в немедленной помощи в питании на следующий месяц.",
    amountNeeded: "2000$",
    amountRaised: "800$",
    category: "food",
    location: "Jakarta, Indonesia",
    urgencyLevel: "high",
    datePosted: "2024-03-18",
    credentials: {
      mbank: "1234567890",
      odengi: "1234567890",
    },
  },
  {
    id: "4",
    title: "Восстановление дома после землетрясения",
    description:
      "Помощь семье восстановить жилье после разрушительного землетрясения",
    content:
      "Семья из 6 человек потеряла свой дом во время недавнего землетрясения. Им срочно требуется помощь в восстановлении базового жилья, чтобы укрыться от непогоды.",
    amountNeeded: "15000$",
    amountRaised: "3500$",
    category: "housing",
    location: "Gaziantep, Turkey",
    urgencyLevel: "high",
    datePosted: "2024-03-01",
    credentials: {
      mbank: "996 700 123 456",
      odengi: "996 700 123 456",
    },
  },
  {
    id: "5",
    title: "Срочная операция для Амины",
    description: "Помогите собрать средства на операцию на сердце",
    content:
      "Амине всего 5 лет, и ей срочно требуется операция на сердце. У семьи нет возможности оплатить дорогостоящее лечение. Каждый день на счету.",
    amountNeeded: "35000$",
    amountRaised: "12000$",
    category: "medical",
    location: "Cairo, Egypt",
    urgencyLevel: "high",
    datePosted: "2024-03-20",
    credentials: {
      mbank: "996 555 789 012",
      odengi: "996 555 789 012",
    },
  },
  {
    id: "6",
    title: "Продуктовые наборы для пожилых",
    description: "Обеспечение продуктами питания одиноких пожилых людей",
    content:
      "30 одиноких пожилых людей нуждаются в регулярной помощи с продуктами питания. Мы организуем ежемесячную доставку базовых продуктовых наборов.",
    amountNeeded: "3000$",
    amountRaised: "900$",
    category: "food",
    location: "Tashkent, Uzbekistan",
    urgencyLevel: "medium",
    datePosted: "2024-03-12",
    credentials: {
      mbank: "998 90 123 4567",
      odengi: "998 90 123 4567",
    },
  },
  {
    id: "7",
    title: "Школьные стипендии",
    description:
      "Годовые стипендии для талантливых студентов из малоимущих семей",
    content:
      "Пять способных студентов из малообеспеченных семей нуждаются в финансовой поддержке для продолжения обучения в университете.",
    amountNeeded: "7500$",
    amountRaised: "2200$",
    category: "education",
    location: "Almaty, Kazakhstan",
    urgencyLevel: "medium",
    datePosted: "2024-03-08",
    credentials: {
      mbank: "7 707 765 4321",
      odengi: "7 707 765 4321",
    },
  },
  {
    id: "8",
    title: "Экстренная помощь погорельцам",
    description: "Помощь семьям, пострадавшим от пожара",
    content:
      "Три семьи потеряли все имущество в результате сильного пожара. Требуется срочная помощь для приобретения предметов первой необходимости.",
    amountNeeded: "5000$",
    amountRaised: "1500$",
    category: "emergency",
    location: "Dushanbe, Tajikistan",
    urgencyLevel: "high",
    datePosted: "2024-03-17",
    credentials: {
      mbank: "992 900 111 222",
      odengi: "992 900 111 222",
    },
  },
];
