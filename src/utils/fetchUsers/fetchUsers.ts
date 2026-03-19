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

const fetchUsers = async (start: number, limit: number) => {
  await new Promise((r) => setTimeout(r, 700));

  return Array.from({ length: limit }, (_, i) => ({
    id: start + i,
    name: names[Math.floor(Math.random() * names.length)],
    speed: Math.floor(Math.random() * 20) + 80,
    time: Math.floor(Math.random() * 120000),
    color: Math.floor(Math.random() * 3),
  }));
};

export default fetchUsers;
