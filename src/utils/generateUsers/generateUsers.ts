import type { User } from "@/types";

const names = [
  "Катерина Петренко Катерина Петренко",
  "Олексій Іванов",
  "Марія Коваль",
  "Володимир Сидоренко Володимир Сидоренко",
  "Олена Шевченко",
  "Дмитро Бондаренко",
  "Світлана Лі",
  "Ігор Кравченко",
  "Анна Мельник",
];

const generateUsers = (count: number): User[] => {
  return Array.from({ length: count }, () => ({
    name: names[Math.floor(Math.random() * names.length)],
    speed: Math.floor(Math.random() * 20) + 80,
    time: Math.floor(Math.random() * 120000),
    color: Math.floor(Math.random() * 3),
  }));
};

export default generateUsers;
